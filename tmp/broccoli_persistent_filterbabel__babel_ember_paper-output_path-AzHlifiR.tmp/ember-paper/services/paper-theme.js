define('ember-paper/services/paper-theme', ['exports', 'ember-paper/utils/palettes', 'ember-paper/utils/contrasts', 'tinycolor2'], function (exports, _palettes, _contrasts, _tinycolor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Service.extend({

    init() {
      this._super(...arguments);
      this._themes = {};
    },

    installTheme(name = 'default', theme, selector = ':root') {
      if (this._themes[name]) {
        this.uninstallTheme(name);
      }

      // let's not make the background palette mandatory as it will be the `grey`
      // palette most of the time
      theme = Ember.assign({ background: _palettes.default.grey }, theme);

      let vars = this.generateCssVariables(theme);

      let css = `
      ${selector} {
        ${vars}
      }
    `;

      let styleElement = document.createElement('style');
      styleElement.setAttribute('id', `paper-theme-${name}`);
      styleElement.type = 'text/css';
      document.head.appendChild(styleElement);
      styleElement.sheet.insertRule(css, 0);

      this._themes[name] = styleElement;
    },

    uninstallTheme(name) {
      (true && !(!!name) && Ember.assert(`A name is required. \`${name}\` was passed to \`uninstallTheme()\``, !!name));


      let styleElement = this._themes[name];

      (true && !(!!styleElement) && Ember.assert(`No installed theme with name \`${name}\` was found.`, !!styleElement));


      document.head.removeChild(styleElement);
      delete this._themes[name];
    },

    /**
     * This is essentially a port of the paper-contrast-color sass function.
     *
     * @param {Palette} palette
     * @param {string} hue
     */
    getContrastColor(palette, hue) {
      let contrastDarkColors = palette.contrastDarkColors;
      let contrastLightColors = palette.contrastLightColors;
      let contrastStrongLightColors = palette.contrastStrongLightColors;
      let contrastDefaultColor = palette.contrastDefaultColor;

      if (contrastDarkColors && contrastDarkColors.includes(hue)) {
        return _contrasts.default['dark-contrast-color'];
      } else if (contrastLightColors && contrastLightColors.includes(hue)) {
        return _contrasts.default['light-contrast-color'];
      } else if (contrastStrongLightColors && contrastStrongLightColors.includes(hue)) {
        return _contrasts.default['strong-light-contrast-color'];
      } else {
        return contrastDefaultColor;
      }
    },

    generateCssVariables(theme) {
      return ['primary', 'accent', 'warn', 'background'].reduce((vars, intention) => {
        let palette = theme[intention];

        (true && !(!!palette) && Ember.assert(`A theme must have a \`${intention}\` key containing a palette.`, !!palette));


        let hues = Object.keys(palette).filter(hue => {
          return hue.indexOf('contrast') === -1;
        });

        return vars += hues.map(hue => {
          let color = (0, _tinycolor.default)(palette[hue]).toRgb();
          let contrast = (0, _tinycolor.default)(this.getContrastColor(palette, hue)).toRgb();

          return `
          --${intention}-${hue}: ${color.r}, ${color.g}, ${color.b};
          --${intention}-${hue}-contrast: ${contrast.r}, ${contrast.g}, ${contrast.b};
        `;
        }).join('');
      }, '');
    }
  });
});