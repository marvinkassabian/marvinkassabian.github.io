(function() {
  "use strict";

  VAGABOND.namespace('VAGABOND.MAPS');

  VAGABOND.MAPS = (function(module) {

    var DiamondSquareMap = VAGABOND.MAPS.DiamondSquareMap;

    var HeightMap = Object.create(DiamondSquareMap);

    var initProto = DiamondSquareMap.init;
    var renderToProto = DiamondSquareMap.renderTo;

    HeightMap.init = function(size, seedRange) {
      return initProto.call(this, size, seedRange);
    };

    HeightMap.renderTo = function(screen, formatValue) {

      formatValue = (formatValue !== undefined) ? formatValue : function(value) {
        return Math.floor(UTIL.clamp(value, 0, 15)).toString(16);
      };

      renderToProto.call(this, screen, formatValue);
    };

    module.HeightMap = HeightMap;

    return module;

  })(VAGABOND.MAPS);
})();
