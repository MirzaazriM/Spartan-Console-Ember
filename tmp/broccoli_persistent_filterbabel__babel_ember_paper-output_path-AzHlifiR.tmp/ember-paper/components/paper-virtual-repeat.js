define('ember-paper/components/paper-virtual-repeat', ['exports', 'virtual-each/components/virtual-each/component', 'ember-paper/templates/components/paper-virtual-repeat'], function (exports, _component, _paperVirtualRepeat) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const EXTRA_ROW_PADDING = 3;

  const VirtualRepeatComponent = _component.default.extend({
    layout: _paperVirtualRepeat.default,
    tagName: 'md-virtual-repeat-container',
    classNames: ['md-virtual-repeat-container'],
    classNameBindings: ['horizontal:md-orient-horizontal'],
    rawVisibleItems: Ember.computed.mapBy('visibleItems', 'raw'),
    containerSelector: undefined,

    actions: {
      onScroll(e) {
        this.eventHandlers.scroll.call(this, e);
      }
    },

    size: Ember.computed('initialSize', 'items.[]', 'itemHeight', function () {
      let itemSize = this.get('itemHeight');
      let fullSize = this.get('items.length') * itemSize;

      if (fullSize <= itemSize) {
        return itemSize;
      }
      return Math.min(fullSize, this.get('initialSize'));
    }),

    height: Ember.computed('size', 'horizontal', function () {
      if (this.get('horizontal')) {
        return false;
      }
      return this.get('size');
    }),

    // Received coordinates {top, left, right, width} from the dropdown
    // Convert them to style and cache - they usually don't change
    positionStyle: Ember.computed('positionCoordinates', function () {
      let coords = this.get('positionCoordinates') || {};
      let style = '';

      // {top, left, right, width}
      Object.keys(coords).forEach(type => {
        if (coords[type]) {
          style += `${type}: ${coords[type]}; `;
        }
      });

      return style.trim();
    }).readOnly(),

    style: Ember.computed('height', 'positionStyle', function () {
      let height = this.get('height') || null;
      let style = this.get('positionStyle');

      if (height !== null && !isNaN(height)) {
        style += ` height: ${height}px;`;
      }
      return Ember.String.htmlSafe(style);
    }).readOnly(),

    calculateVisibleItems(positionIndex) {
      Ember.run(() => {
        let startAt = Ember.get(this, '_startAt');
        let scrolledAmount = this.get('horizontal') ? this.$('.md-virtual-repeat-scroller').scrollLeft() : this.$('.md-virtual-repeat-scroller').scrollTop();
        let visibleStart = isNaN(positionIndex) ? Math.floor(scrolledAmount / this.get('itemHeight')) : Math.max(positionIndex);

        if (visibleStart !== startAt) {
          Ember.set(this, '_startAt', visibleStart);
        }
      });
    },

    _marginTop: Ember.computed('_totalHeight', '_startAt', '_visibleItemCount', 'itemHeight', function () {
      let itemHeight = this.get('itemHeight');
      let totalHeight = Ember.get(this, '_totalHeight');
      let margin = Ember.get(this, '_startAt') * itemHeight;
      let visibleItemCount = Ember.get(this, '_visibleItemCount');
      let maxMargin = Math.max(0, totalHeight - (visibleItemCount - 1) * itemHeight + EXTRA_ROW_PADDING * itemHeight);

      return Math.min(maxMargin, margin);
    }).readOnly(),

    contentStyle: Ember.computed('_marginTop', '_totalHeight', function () {
      let height = Ember.get(this, '_totalHeight');
      return Ember.String.htmlSafe(this.get('horizontal') ? `width: ${height}px;` : `height: ${height}px;`);
    }).readOnly(),

    offsetterStyle: Ember.computed('_marginTop', 'horizontal', function () {
      let { horizontal, _marginTop } = this.getProperties('_marginTop', 'horizontal');
      let dir = horizontal ? 'X' : 'Y';
      return Ember.String.htmlSafe(`transform: translate${dir}(${_marginTop}px);`);
    }).readOnly(),

    _visibleItemCount: Ember.computed('size', 'itemHeight', function () {
      let size = this.get('size');
      return Math.ceil(this.get('itemHeight') ? size / this.get('itemHeight') : 1) + EXTRA_ROW_PADDING;
    }).readOnly(),

    init() {
      this._super(...arguments);
      this.set('defaultAttrs', Ember.assign({}, this.get('defaultAttrs') || {}, {
        scrollTimeout: 30,
        height: 48
      }));
    },

    didInsertElement() {
      this._super(...arguments);

      Ember.run.scheduleOnce('afterRender', this, function () {
        let element = this.$().get(0);
        let initSize = this.get('horizontal') ? element.clientWidth : element.clientHeight;
        this.set('initialSize', initSize);
      });
    },

    didReceiveAttrs() {
      this._super(...arguments);

      let oldScrollIndex = this.get('_oldScrollIndex');
      let newScrollIndex = this.get('scrollIndex');
      let scrollTop = this.get('scrollTop');

      Ember.RSVP.cast(this.get('items')).then(attrItems => {
        let items = Ember.A(attrItems);
        let itemsCount = this.get('totalItemsCount') || Ember.get(items, 'length');
        this.setProperties({
          _items: items,
          _positionIndex: this.get('positionIndex'),
          _totalHeight: Math.max(itemsCount * this.get('itemHeight'), 0)
        });

        // Scroll index has changed, load more data & scroll
        if (oldScrollIndex !== newScrollIndex) {
          this.scrollToVirtualItem(newScrollIndex, scrollTop);
        }

        this.set('_oldScrollIndex', newScrollIndex);
      });
    },

    didRender() {
      let itemHeight = this.get('itemHeight');
      let selector = this.getWithDefault('containerSelector', '.md-virtual-repeat-offsetter');
      let offsetter = this.$(selector).get(0);
      if (!offsetter) {
        return;
      }

      let optionElement = offsetter.firstElementChild;
      if (!optionElement) {
        return;
      }

      if (itemHeight) {
        return;
      }

      Ember.run.cancel(this._measureHeightHandler);
      this._measureHeightHandler = Ember.run.schedule('afterRender', this, function () {
        let itemsCount = this.get('totalItemsCount') || Ember.get(this, 'items.length');

        if (this.get('horizontal')) {
          this.setProperties({
            itemHeight: optionElement.offsetWidth,
            _totalHeight: Math.max(itemsCount * optionElement.offsetWidth, 0)
          });
        } else {
          this.setProperties({
            itemHeight: optionElement.offsetHeight,
            _totalHeight: Math.max(itemsCount * optionElement.offsetHeight, 0)
          });
        }
      });
    },

    endAt: Ember.computed('_startAt', '_visibleItemCount', 'items.length', function () {
      let { _startAt, _visibleItemCount } = this.getProperties('_startAt', '_visibleItemCount');
      let totalItemsCount = Ember.get(this, 'items.length');
      return Math.min(totalItemsCount, _startAt + _visibleItemCount);
    }).readOnly(),

    visibleItems: Ember.computed('_startAt', '_visibleItemCount', '_items', function () {

      let items = Ember.get(this, '_items');
      let startAt = Ember.get(this, '_startAt');
      let _visibleItemCount = Ember.get(this, '_visibleItemCount');
      let itemsLength = Ember.get(this, 'totalItemsCount') || Ember.get(items, 'length');
      let endAt = Math.min(itemsLength, startAt + _visibleItemCount);
      let onScrollBottomed = this.get('onScrollBottomed');

      if (typeof onScrollBottomed === 'function' && startAt + _visibleItemCount - EXTRA_ROW_PADDING >= itemsLength) {
        Ember.run.next(this, onScrollBottomed, startAt, endAt);
      }

      let getAtIndex = this.get('getAtIndex');
      if (getAtIndex) {
        for (let i = startAt; i < endAt; i++) {
          if (!items[i]) {
            items[i] = getAtIndex(i);
          }
        }
      }

      return items.slice(startAt, endAt).map((item, index) => ({
        raw: item,
        actualIndex: startAt + index,
        virtualIndex: index
      }));
    }).readOnly(),

    scrollToVirtualItem(newIndex, toTop = false) {
      let { _startAt, endAt } = this.getProperties('_startAt', 'endAt');

      if (newIndex < _startAt || newIndex > endAt) {
        let { _visibleItemCount, _items } = this.getProperties('_visibleItemCount', '_items');
        let itemsLength = _items.get('length');

        let maxVisibleItemTop = Math.max(0, itemsLength - _visibleItemCount + EXTRA_ROW_PADDING);
        let sanitizedIndex = Math.min(_startAt, maxVisibleItemTop);
        this.calculateVisibleItems(sanitizedIndex);
      }

      let itemHeight = this.get('itemHeight');
      let itemOffset = (newIndex + 1) * itemHeight;
      let offset = itemOffset - this.get('size');

      if (toTop) {
        offset = newIndex * itemHeight;
      }
      if (this.get('horizontal')) {
        this.$('.md-virtual-repeat-scroller').scrollLeft(offset);
      } else {
        this.$('.md-virtual-repeat-scroller').scrollTop(offset);
      }
    },

    lengthObserver: Ember.observer('items.length', function () {
      let totalLength = this.get('length') ? this.get('length') : this.get('items.length');
      this.set('_totalHeight', Math.max(totalLength * this.get('itemHeight'), 0));
    })

  });

  VirtualRepeatComponent.reopenClass({
    positionalParams: ['items']
  });

  exports.default = VirtualRepeatComponent;
});