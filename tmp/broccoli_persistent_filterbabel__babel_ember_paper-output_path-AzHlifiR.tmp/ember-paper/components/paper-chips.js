define('ember-paper/components/paper-chips', ['exports', 'ember-paper/templates/components/paper-chips', 'ember-invoke-action'], function (exports, _paperChips, _emberInvokeAction) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    layout: _paperChips.default,
    tagName: 'md-chips',
    classNames: ['md-default-theme'],
    activeChip: -1,
    focusedElement: 'none',
    isFocused: Ember.computed('focusedElement', function () {
      if (this.get('focusedElement') === 'none') {
        return false;
      }

      return true;
    }),
    lastItemChosen: false,

    handleFocusChange: Ember.observer('focusedElement', 'activeChip', function () {
      let element = this.get('focusedElement');

      if (!this.get('isFocused')) {
        this.set('activeChip', -1);
      }

      if (element === 'chips' && this.get('activeChip') !== -1 || element === 'input') {
        (0, _emberInvokeAction.invokeAction)(this, 'focusIn', window.event);
      } else {
        (0, _emberInvokeAction.invokeAction)(this, 'focusOut', window.event);
      }
    }),

    click() {
      this.getInput().focus();
    },

    actions: {
      addItem(newItem) {
        if (this.get('requireMatch')) {
          // Don't add a new item - we're set to require a match.
          return;
        }

        if (Ember.isPresent(newItem)) {
          let item = newItem;

          if (Ember.isPresent(this.get('searchField'))) {
            item = {};
            item[this.get('searchField')] = newItem;
          }

          (0, _emberInvokeAction.invokeAction)(this, 'addItem', item);
          this.set('newChipValue', '');
          this.set('searchText', '');
        }
      },

      removeItem(item) {
        (0, _emberInvokeAction.invokeAction)(this, 'removeItem', item);
        let current = this.get('activeChip');

        if (current === -1 || current >= this.get('content').length) {
          this.set('activeChip', -1);
        }
      },

      inputFocus(autocomplete) {
        let input = this.getInput();

        this.set('focusedElement', 'input');

        if (!this.get('content').length && !input.is(':focus')) {
          input.focus();
        } else {
          this.set('activeChip', -1);
        }

        // Keep track of the autocomplete, so we can force it to close when navigating to chips.
        if (Ember.isEmpty(this.get('autocomplete')) && input.is('.ember-paper-autocomplete-search-input')) {
          this.set('autocomplete', autocomplete);
        }

        // We don't want the autocomplete to open on focus - it'll open when the user starts typing.
        if (Ember.isPresent(autocomplete)) {
          autocomplete.actions.close();
        }
      },

      inputBlur(_, event) {
        if (this.focusMovingTo('.ember-power-select-option', event)) {
          // Focus has shifted to an item - don't mess with this event.
          return true;
        }

        if (this.get('lastItemChosen')) {
          // Last item has been chosen; select will be replaced with an input - ignore blur event.
          this.set('lastItemChosen', false);
          return true;
        }

        if (!this.focusMovingTo('md-chips-wrap', event)) {
          this.set('focusedElement', 'none');
        }
      },

      chipsFocus() {
        this.set('focusedElement', 'chips');
      },

      chipsBlur(event) {
        if (!this.focusMovingTo(this.getInput(), event)) {
          this.set('focusedElement', 'none');
          this.set('activeChip', -1);
        }
      },

      chipClick(index, event) {
        // Prevent click from bubbling up to the chips element.
        event.stopPropagation();

        // If we have a valid chip index, make it active.
        if (!Ember.isEmpty(index) && !this.get('readOnly')) {
          // Shift actual focus to wrap so that subsequent blur events work as expected.
          this.$('md-chips-wrap').focus();

          // Update state to reflect the clicked chip being active.
          this.set('focusedElement', 'chips');
          this.set('activeChip', index);
        }
      },

      autocompleteChange(item) {
        if (item) {
          // Trigger onChange for the new item.
          (0, _emberInvokeAction.invokeAction)(this, 'addItem', item);
          this.set('searchText', '');

          // Track selection of last item if no match required.
          if (this.get('options').length === 1 && !this.get('requireMatch')) {
            this.set('lastItemChosen', true);
            this.set('autocomplete', null);
          }
        }
      },

      searchTextChange(value, select) {
        this.set('searchText', value);

        // Close dropdown if search text is cleared by the user.
        if (Ember.isEmpty(value)) {
          select.actions.close();
        }
      },

      keyDown(event) {
        let input = this.getInput().get(0);
        if (!this.get('readOnly') && Ember.isEmpty(input.value) && Ember.isPresent(this.get('content'))) {
          this.keyboardNavigation(event);
          if (this.get('activeChip') >= 0) {
            this.closeAutocomplete();
          }
        } else {
          // Make sure we don't leave a chip focused while typing.
          this.set('activeChip', -1);
          this.set('focusedElement', 'input');
        }
      },

      noUnselected(old, event) {
        if (['Backspace', 'Delete', 'Del', 'ArrowLeft', 'Left', 'ArrowRight', 'Right'].includes(event.key)) {
          (0, _emberInvokeAction.invokeAction)(this, 'keyDown', event);
        } else if (event.key.length === 1 && !event.ctrlKey && !event.altKey && !event.metaKey) {
          // Reject printable key presses
          event.preventDefault();
          event.stopPropagation();
          return false;
        }
      }
    },

    keyboardNavigation({ key }) {
      // No text has been entered, but we have chips; cursor keys should select chips.
      let current = this.get('activeChip');
      let chips = this.get('content');
      let input = this.getInput();

      if (['ArrowLeft', 'Left'].includes(key) || key === 'Backspace' && current === -1) {
        if (current === -1) {
          input.blur();
          this.$('md-chips-wrap', this.element).focus();
          this.set('activeChip', chips.length - 1);
        } else if (current > 0) {
          this.decrementProperty('activeChip');
        }
      } else if (['ArrowRight', 'Right'].includes(key)) {
        if (current >= 0) {
          this.incrementProperty('activeChip');
        }

        if (this.get('activeChip') >= chips.length) {
          this.set('activeChip', -1);
          input.focus();
        }
      } else if (current >= 0 && ['Backspace', 'Delete', 'Del'].includes(key)) {
        (0, _emberInvokeAction.invokeAction)(this, 'removeItem', chips[current]);
        if (current >= chips.length) {
          this.set('activeChip', -1);
        }
      }
    },

    closeAutocomplete() {
      if (!Ember.isEmpty(this.get('autocomplete')) && !Ember.isEmpty(this.get('autocomplete').actions)) {
        this.get('autocomplete').actions.close();
      }
    },

    getInput() {
      return this.$('.md-chip-input-container input');
    },

    focusMovingTo(selector, event) {
      if (!Ember.isEmpty(event) && !Ember.isEmpty(event.relatedTarget) && this.$().find(event.relatedTarget).is(selector)) {
        return true;
      }

      return false;
    }
  });
});