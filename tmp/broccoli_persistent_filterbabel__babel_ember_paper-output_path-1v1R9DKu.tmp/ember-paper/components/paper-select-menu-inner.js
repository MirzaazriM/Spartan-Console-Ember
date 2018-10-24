define('ember-paper/components/paper-select-menu-inner', ['exports', 'ember-paper/templates/components/paper-select-menu-inner', 'ember-paper/components/paper-menu-content-inner', 'ember-power-select/utils/group-utils'], function (exports, _paperSelectMenuInner, _paperMenuContentInner, _groupUtils) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  function advanceSelectableOption(options, currentOption, step) {
    let resultsLength = (0, _groupUtils.countOptions)(options);
    let startIndex = Math.min(Math.max((0, _groupUtils.indexOfOption)(options, currentOption) + step, 0), resultsLength - 1);
    let { disabled, option } = (0, _groupUtils.optionAtIndex)(options, startIndex);
    while (option && disabled) {
      let next = (0, _groupUtils.optionAtIndex)(options, startIndex += step);
      disabled = next.disabled;
      option = next.option;
    }
    return option;
  }

  exports.default = _paperMenuContentInner.default.extend({
    layout: _paperSelectMenuInner.default,
    tagName: 'md-select-menu',
    classNames: ['md-default-theme'],
    classNameBindings: ['searchEnabled:md-overflow'],
    enabledOptions: Ember.computed.filterBy('childComponents', 'disabled', false),
    didInsertElement() {
      Ember.run.next(() => {
        let focusTarget = this.$('md-option[aria-selected="true"]');
        if (!focusTarget || !focusTarget.length) {
          focusTarget = this.get('enabledOptions.firstObject.element');
          let newHighlighted = advanceSelectableOption(this.dropdown.results, this.dropdown.highlighted, -1);
          this.dropdown.actions.highlight(newHighlighted, null);
        } else {
          focusTarget = focusTarget[0];
        }
        if (focusTarget) {
          focusTarget.focus();
        }
      });
    },

    keyDown(ev) {
      switch (ev.which) {
        case this.get('constants.KEYCODE.ESCAPE'):
          {
            this.dropdown.actions.close();
            break;
          }
        case this.get('constants.KEYCODE.LEFT_ARROW'):
        case this.get('constants.KEYCODE.UP_ARROW'):
          {
            ev.preventDefault();
            this.focusOption(ev, -1);
            let newHighlighted = advanceSelectableOption(this.dropdown.results, this.dropdown.highlighted, -1);
            this.dropdown.actions.highlight(newHighlighted, ev);
            this.dropdown.actions.scrollTo(newHighlighted);
            break;
          }
        case this.get('constants.KEYCODE.RIGHT_ARROW'):
        case this.get('constants.KEYCODE.DOWN_ARROW'):
          {
            ev.preventDefault();
            this.focusOption(ev, 1);
            let newHighlighted2 = advanceSelectableOption(this.dropdown.results, this.dropdown.highlighted, 1);
            this.dropdown.actions.highlight(newHighlighted2, ev);
            this.dropdown.actions.scrollTo(newHighlighted2);
            break;
          }
        case this.get('constants.KEYCODE.ENTER'):
          {
            ev.preventDefault();
            this.dropdown.actions.choose(this.dropdown.highlighted);
            break;
          }
      }
    },

    focusOption(e, direction) {
      let currentItem = this.$(e.target).closest('md-option');

      let children = this.get('enabledMenuItems');
      let items = children.map(child => child.element);

      let currentIndex = items.indexOf(currentItem[0]);

      // Traverse through our elements in the specified direction (+/-1) and try to
      // focus them until we find one that accepts focus
      for (let i = currentIndex + direction; i >= 0 && i < items.length; i = i + direction) {
        let focusTarget = items[i];
        let didFocus = this.attemptFocus(focusTarget);
        if (didFocus) {
          break;
        }
      }
    },

    attemptFocus(el) {
      if (el && el.getAttribute('tabindex') !== -1) {
        el.focus();
        if (document.activeElement === el) {
          return true;
        } else {
          return false;
        }
      }
    }
  });
});