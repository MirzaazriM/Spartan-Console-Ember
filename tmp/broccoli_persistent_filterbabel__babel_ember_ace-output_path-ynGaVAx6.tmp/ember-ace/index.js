define('ember-ace/index', ['exports', 'ember-ace/worker-manifest'], function (exports, _workerManifest) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.TextHighlightRules = exports.TextMode = exports.Range = exports.Tokenizer = undefined;
  exports.default = ace;
  const Tokenizer = exports.Tokenizer = ace.require('ace/tokenizer').Tokenizer;
  const Range = exports.Range = ace.require('ace/range').Range;

  const TextMode = exports.TextMode = ace.require('ace/mode/text').Mode;
  const TextHighlightRules = exports.TextHighlightRules = ace.require('ace/mode/text_highlight_rules').TextHighlightRules;

  const config = ace.require('ace/config');
  Object.keys(_workerManifest.default).forEach(key => {
    config.setModuleUrl(key, _workerManifest.default[key]);
  });
});