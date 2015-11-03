"use strict";
var Engine;
(function (Engine) {
    var Util;
    (function (Util) {
        Util.CIRCLE = Math.PI * 2;
        function clamp(baseNumber, lowerBound, upperBound) {
            var tempNumber = Math.max(baseNumber, lowerBound);
            return Math.min(tempNumber, upperBound);
        }
        Util.clamp = clamp;
    })(Util = Engine.Util || (Engine.Util = {}));
})(Engine || (Engine = {}));
