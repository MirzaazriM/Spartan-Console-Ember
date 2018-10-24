define('ember-invoke-action/index', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const makeInvokeAction = ({ strict = false } = {}) => {
    return (object, actionName, ...args) => {
      (true && !(typeof object === 'object') && Ember.assert('The first argument passed to invokeAction must be an object', typeof object === 'object'));


      let action;
      if (typeof actionName === 'string') {
        action = Ember.get(object, actionName);
      } else if (typeof actionName === 'function') {
        action = actionName;
      } else {
        (true && !(false) && Ember.assert('The second argument passed to invokeAction must be a string as actionName or a function', false));
      }

      if (typeof action === 'string') {
        object.sendAction(actionName, ...args);
      } else if (typeof action === 'function') {
        return action(...args);
      } else if (strict) {
        (true && !(false) && Ember.assert(`No invokable action ${actionName} was found`, false));
      }
    };
  };

  const getActions = object => {
    return object.actions ? object.actions : object._actions;
  };

  const makeInvoke = ({ strict = false } = {}) => {
    return (object, actionName, ...args) => {
      let actions = getActions(object);
      let action = actions && actions[actionName];

      if (typeof action === 'function') {
        return action.call(object, ...args);
      } else if (strict) {
        (true && !(false) && Ember.assert(`No invokable action ${actionName} was found`, false));
      }
    };
  };

  const invokeAction = exports.invokeAction = makeInvokeAction();
  const strictInvokeAction = exports.strictInvokeAction = makeInvokeAction({ strict: true });

  const invoke = exports.invoke = makeInvoke();
  const strictInvoke = exports.strictInvoke = makeInvoke({ strict: true });

  const InvokeActionMixin = exports.InvokeActionMixin = Ember.Mixin.create({
    invokeAction() {
      return invokeAction(this, ...arguments);
    },

    strictInvokeAction() {
      return strictInvokeAction(this, ...arguments);
    },

    invoke() {
      return invoke(this, ...arguments);
    },

    strictInvoke() {
      return strictInvoke(this, ...arguments);
    }
  });

  exports.default = invokeAction;
});