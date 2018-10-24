
if (typeof document !== 'undefined') {
  __webpack_public_path__ = (function(){
    var scripts = document.querySelectorAll('script');
    return scripts[scripts.length - 1].src.replace(/\/[^/]*$/, '/');
  })();
}

module.exports = (function(){
  var w = window;
  var d = w.define;
  var r = w.require;
  w.emberAutoImportDynamic = function(specifier) {
    return r('_eai_dyn_' + specifier);
  };
    d('tinycolor2', [], function() { return require('/Users/tech387/Desktop/Projects/spartan-console-ember/node_modules/tinycolor2/tinycolor.js'); });
})();
