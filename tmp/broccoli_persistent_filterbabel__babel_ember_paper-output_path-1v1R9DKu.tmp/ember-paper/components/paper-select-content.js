define('ember-paper/components/paper-select-content', ['exports', 'ember-paper/components/paper-menu-content', 'ember-paper/templates/components/paper-select-content'], function (exports, _paperMenuContent, _paperSelectContent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /**
   * @module ember-paper
   */
  function waitForAnimations(element, callback) {
    let computedStyle = window.getComputedStyle(element);
    if (computedStyle.transitionDuration && computedStyle.transitionDuration !== '0s') {
      let eventCallback = function () {
        element.removeEventListener('transitionend', eventCallback);
        callback();
      };
      element.addEventListener('transitionend', eventCallback);
    } else if (computedStyle.animationName !== 'none' && computedStyle.animationPlayState === 'running') {
      let eventCallback = function () {
        element.removeEventListener('animationend', eventCallback);
        callback();
      };
      element.addEventListener('animationend', eventCallback);
    } else {
      callback();
    }
  }

  /**
   * @class PaperSelectContent
   * @extends PaperMenuContent
   */
  exports.default = _paperMenuContent.default.extend({
    layout: _paperSelectContent.default,

    animateIn() {
      Ember.run.next(() => {
        Ember.run.scheduleOnce('afterRender', this, () => {
          let dropdown = this.get('dropdown');
          dropdown.actions.reposition();
          this.set('isActive', true);
          this.dropdownElement.style.transform = '';
        });
      });
    },
    animateOut(dropdownElement) {
      let parentElement = this.get('renderInPlace') ? dropdownElement.parentElement.parentElement : dropdownElement.parentElement;
      let clone = dropdownElement.cloneNode(true);
      clone.id = `${clone.id}--clone`;
      let $clone = Ember.$(clone);
      parentElement.appendChild(clone);
      Ember.$(clone.children[0].children[0]).scrollTop(Ember.$(dropdownElement.children[0].children[0]).scrollTop());
      window.requestAnimationFrame(() => {
        if (!this.get('isDestroyed')) {
          this.set('isActive', false);
          $clone.addClass('md-leave');
          waitForAnimations(clone, function () {
            $clone.removeClass('md-active');
            parentElement.removeChild(clone);
          });
        }
      });
    }
  });
});