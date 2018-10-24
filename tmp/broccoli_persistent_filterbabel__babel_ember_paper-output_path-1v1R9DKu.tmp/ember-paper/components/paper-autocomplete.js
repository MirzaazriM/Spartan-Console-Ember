define('ember-paper/components/paper-autocomplete', ['exports', 'ember-power-select/components/power-select', 'ember-paper/templates/components/paper-autocomplete', 'ember-paper/mixins/validation-mixin', 'ember-paper/mixins/child-mixin', 'ember-power-select/utils/group-utils', 'ember-paper/utils/calculate-ac-position'], function (exports, _powerSelect, _paperAutocomplete, _validationMixin, _childMixin, _groupUtils, _calculateAcPosition) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _powerSelect.default.extend(_validationMixin.default, _childMixin.default, {
    layout: _paperAutocomplete.default,
    calculatePosition: _calculateAcPosition.default,

    util: Ember.inject.service(),
    constants: Ember.inject.service(),
    triggerComponent: 'paper-autocomplete-trigger',
    contentComponent: 'paper-autocomplete-content',
    optionsComponent: 'paper-autocomplete-options',
    triggerWrapperComponent: 'paper-autocomplete-trigger-container',
    onfocus: Ember.computed.alias('onFocus'),
    onblur: Ember.computed.alias('onBlur'),
    onchange: null,
    oninput: null,
    searchText: '',
    defaultHighlighted: null, // Don't automatically highlight any option
    _onChangeNop() {},

    extra: Ember.computed('labelPath', 'label', function () {
      return this.getProperties('label', 'labelPath');
    }),

    validationProperty: Ember.computed('onSearchTextChange', 'onSelectionChange', function () {
      if (this.get('onSearchTextChange')) {
        return 'searchText';
      } else {
        return 'selected';
      }
    }),

    concatenatedDropdownClasses: Ember.computed('dropdownClass', function () {
      let classes = ['md-autocomplete-suggestions-container md-virtual-repeat-container'];
      if (this.get('dropdownClass')) {
        classes.push(this.get('dropdownClass'));
      }
      return classes.join(' ');
    }),

    _onInput(value) {
      let handler = this.get('onSearchTextChange') || (v => this.set('searchText', v));
      handler(...arguments);
      return value;
    },

    init() {
      this._initComponent();
      this._super(...arguments);
    },

    // Init autocomplete component
    _initComponent() {
      let {
        onSearchTextChange,
        onSelectionChange
      } = this.getProperties('onSearchTextChange', 'onSelectionChange');

      let hasTextChange = onSearchTextChange && typeof onSearchTextChange === 'function';
      let hasSelectionChange = onSelectionChange && typeof onSelectionChange === 'function';

      (true && !(hasTextChange || hasSelectionChange) && Ember.assert('{{paper-autocomplete}} requires at least one of the `onSelectionChange` or `onSearchTextChange` functions to be provided.', hasTextChange || hasSelectionChange));


      let aliasOnChangeDepKey = hasSelectionChange ? 'onSelectionChange' : '_onChangeNop';
      Ember.defineProperty(this, 'onchange', Ember.computed.alias(aliasOnChangeDepKey));
      this.oninput = this._onInput.bind(this);
    },

    // Choose highlighted item on key tab
    _handleKeyTab(e) {
      let publicAPI = this.get('publicAPI');
      if (publicAPI.isOpen && !Ember.isNone(publicAPI.highlighted)) {
        publicAPI.actions.choose(publicAPI.highlighted, e);
      }
      // e-p-s will close
      this._super(...arguments);
    },

    didReceiveAttrs() {
      let searchText = this.get('searchText');
      if (searchText !== this.get('publicAPI.searchText')) {
        let publicAPI = this.get('publicAPI');
        if (publicAPI && publicAPI.actions) {
          publicAPI.actions.search(searchText);
        }
      }
      this._super(...arguments);
    },

    updateSelection() {
      this._super(...arguments);
      this.notifyValidityChange();
    },

    actions: {

      onTriggerMouseDown() {
        return false;
      },

      onFocus(event) {
        this.send('activate');
        let publicAPI = this.get('publicAPI');

        if (Ember.isNone(publicAPI.selected)) {
          publicAPI.actions.open(event);
        }

        let action = this.get('onfocus');
        if (action) {
          action(publicAPI, event);
        }
      },

      onBlur(event) {
        this.send('deactivate');
        let action = this.get('onblur');

        if (action) {
          action(this.get('publicAPI'), event);
        }

        this.notifyValidityChange();
      },

      onInput(event) {
        let publicAPI = this.get('publicAPI');

        if (!publicAPI.isOpen && event.type !== 'change') {
          publicAPI.actions.open(event);
        }

        this.notifyValidityChange();
        return this._super(...arguments);
      },

      onCreate(text) {
        if (this.get('onCreate')) {
          this.get('onCreate')(text);
        }
        this.get('publicAPI').actions.close();
      },

      scrollTo(option) {
        if (!document || !option) {
          return;
        }
        let publicAPI = this.get('publicAPI');
        let optionsList = document.getElementById(`ember-power-select-options-${publicAPI.uniqueId}`);

        if (!optionsList) {
          return;
        }

        let index = (0, _groupUtils.indexOfOption)(publicAPI.results, option);
        if (index === -1) {
          return;
        }
        // Update the scroll index
        this.updateState({ scrollIndex: index });
      }
    }
  });
});