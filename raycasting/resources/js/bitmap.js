"use strict";
var Engine;
(function (Engine) {
    var Bitmap;
    (function (_Bitmap) {
        var Bitmap = (function () {
            function Bitmap(src, width, height) {
                this.image = new Image();
                this.image.src = src;
                this.width = width;
                this.height = height;
            }
            return Bitmap;
        })();
        _Bitmap.Bitmap = Bitmap;
    })(Bitmap = Engine.Bitmap || (Engine.Bitmap = {}));
})(Engine || (Engine = {}));
