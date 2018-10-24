define('ember-power-select/components/power-select-multiple', ['exports', 'ember-power-select/templates/components/power-select-multiple', 'ember-power-select/utils/computed-fallback-if-undefined'], function (exports, _powerSelectMultiple, _computedFallbackIfUndefined) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    layout: _powerSelectMultiple.default,
    // Config
    triggerComponent: (0, _computedFallbackIfUndefined.default)('power-select-multiple/trigger'),
    beforeOptionsComponent: (0, _computedFallbackIfUndefined.default)(null),

    // CPs
    concatenatedTriggerClass: Ember.computed('triggerClass', function () {
      let classes = ['ember-power-select-multiple-trigger'];
      if (this.get('triggerClass')) {
        classes.push(this.get('triggerClass'));
      }
      return classes.join(' ');
    }),

    selected: Ember.computed({
      get() {
        return [];
      },
      set(_, v) {
        if (v === null || v === undefined) {
          return [];
        }
        return v;
      }
    }),

    computedTabIndex: Ember.computed('tabindex', 'searchEnabled', 'triggerComponent', function () {
      if (this.get('triggerComponent') === 'power-select-multiple/trigger' && this.get('searchEnabled') !== false) {
        return '-1';
      } else {
        return this.get('tabindex');
      }
    }),

    // Actions
    actions: {
      handleOpen(select, e) {
        let action = this.get('onopen');
        if (action && action(select, e) === false) {
          return false;
        }
        this.focusInput();
      },

      handleFocus(select, e) {
        let action = this.get('onfocus');
        if (action) {
          action(select, e);
        }
        this.focusInput();
      },

      handleKeydown(select, e) {
        let action = this.get('onkeydown');
        if (action && action(select, e) === false) {
          e.stopPropagation();
          return false;
        }
        if (e.keyCode === 13 && select.isOpen) {
          e.stopPropagation();
          if (select.highlighted !== undefined) {
            if (!select.selected || select.selected.indexOf(select.highlighted) === -1) {
              select.actions.choose(select.highlighted, e);
              return false;
            } else {
              select.actions.close(e);
              return false;
            }
          } else {
            select.actions.close(e);
            return false;
          }
        }
      },

      buildSelection(option, select) {
        let newSelection = (select.selected || []).slice(0);
        let idx = -1;
        for (let i = 0; i < newSelection.length; i++) {
          if (Ember.isEqual(newSelection[i], option)) {
            idx = i;
            break;
          }
        }
        if (idx > -1) {
          newSelection.splice(idx, 1);
        } else {
          newSelection.push(option);
        }
        return newSelection;
      }
    },

    // Methods
    focusInput() {
      let input = this.element.querySelector('.ember-power-select-trigger-multiple-input');
      if (input) {
        input.focus();
      }
    }
  });
});