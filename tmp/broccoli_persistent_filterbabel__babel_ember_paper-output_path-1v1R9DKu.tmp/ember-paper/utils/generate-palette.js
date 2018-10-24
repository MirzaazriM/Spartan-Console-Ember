define('ember-paper/utils/generate-palette', ['exports', 'tinycolor2'], function (exports, _tinycolor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = generatePalette;


  // Utility function to combine two rgb objects via Multiply
  function multiply(rgb1, rgb2) {
    rgb1.b = Math.floor(rgb1.b * rgb2.b / 255);
    rgb1.g = Math.floor(rgb1.g * rgb2.g / 255);
    rgb1.r = Math.floor(rgb1.r * rgb2.r / 255);
    return (0, _tinycolor.default)(`rgb ${rgb1.r} ${rgb1.g} ${rgb1.b}`);
  }

  function generatePalette(base) {
    let baseLight = (0, _tinycolor.default)('#ffffff');
    let baseDark = multiply((0, _tinycolor.default)(base).toRgb(), (0, _tinycolor.default)(base).toRgb());
    let baseTriad = (0, _tinycolor.default)(base).tetrad();

    let palette = {
      '50': _tinycolor.default.mix(baseLight, base, 12),
      '100': _tinycolor.default.mix(baseLight, base, 30),
      '200': _tinycolor.default.mix(baseLight, base, 50),
      '300': _tinycolor.default.mix(baseLight, base, 70),
      '400': _tinycolor.default.mix(baseLight, base, 85),
      '500': _tinycolor.default.mix(baseLight, base, 100),
      '600': _tinycolor.default.mix(baseDark, base, 87),
      '700': _tinycolor.default.mix(baseDark, base, 70),
      '800': _tinycolor.default.mix(baseDark, base, 54),
      '900': _tinycolor.default.mix(baseDark, base, 25),
      'A100': _tinycolor.default.mix(baseDark, baseTriad[4], 15).saturate(80).lighten(65),
      'A200': _tinycolor.default.mix(baseDark, baseTriad[4], 15).saturate(80).lighten(55),
      'A400': _tinycolor.default.mix(baseDark, baseTriad[4], 15).saturate(100).lighten(45),
      'A700': _tinycolor.default.mix(baseDark, baseTriad[4], 15).saturate(100).lighten(40)
    };

    let contrastDarkColors = [];
    let contrastStrongLightColors = [];

    Object.keys(palette).forEach(key => {
      let color = palette[key];

      // compute the contrast of this color
      if (color.isLight()) {
        contrastDarkColors.push(key);
      } else {
        contrastStrongLightColors.push(key);
      }

      // convert color to string representation, prefer hex.
      if (color.getAlpha() === 1) {
        palette[key] = color.toHexString();
      } else {
        palette[key] = color.toRgbString();
      }
    });

    palette.contrastDarkColors = contrastDarkColors;
    palette.contrastStrongLightColors = contrastStrongLightColors;

    return palette;
  }
});