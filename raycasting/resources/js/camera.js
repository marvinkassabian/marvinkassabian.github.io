"use strict";
var Engine;
(function (Engine) {
    var Camera;
    (function (_Camera) {
        var Util = Engine.Util;
        var CLARITY_FACTOR = 0.5;
        var DEFAULT_FOCAL_LENGTH = 0.8;
        var DEFAULT_RANGE = 10;
        var VERTICAL_BUFFER = 3000;
        var HORIZONTAL_BUFFER;
        var Camera = (function () {
            function Camera(canvas, resolution, focalLength, range) {
                if (focalLength === void 0) { focalLength = DEFAULT_FOCAL_LENGTH; }
                if (range === void 0) { range = DEFAULT_RANGE; }
                this.context = canvas.getContext('2d');
                this.width = canvas.width = window.innerWidth * CLARITY_FACTOR;
                this.height = canvas.height = window.innerHeight * CLARITY_FACTOR;
                this.resolution = resolution;
                this.spacing = this.width / resolution;
                this.focalLength = focalLength;
                this.range = range;
                HORIZONTAL_BUFFER = VERTICAL_BUFFER * (this.width / this.height);
                this.viewAngle = 0;
                this.cameraHeight = 0;
            }
            Camera.prototype.render = function (entity, map) {
                this.viewAngle = entity.getHeightInformation().viewAngle;
                this.cameraHeight = entity.getHeightInformation().heightModifier;
                this.drawSky(entity.direction, map.skybox);
                this.drawColumns(entity, map);
            };
            Camera.prototype.drawSky = function (direction, sky) {
                var _this = this;
                var width = sky.width * (this.height / sky.height) + HORIZONTAL_BUFFER;
                var left = (direction / Util.CIRCLE) * -width;
                this.context.save();
                var drawSkyPartial = function (canvasOffsetX) {
                    _this.context.drawImage(sky.image, canvasOffsetX, _this.viewAngle - (VERTICAL_BUFFER / 2) + _this.cameraHeight, width, _this.height + VERTICAL_BUFFER + _this.cameraHeight); //canvasImageHeight
                };
                drawSkyPartial(left);
                if (left < width - this.width) {
                    drawSkyPartial(left + width);
                }
                this.context.restore();
            };
            Camera.prototype.drawColumns = function (entity, map) {
                this.context.save();
                for (var column = 0; column < this.resolution; column++) {
                    var x = column / this.resolution - 0.5;
                    var angle = Math.atan2(x, this.focalLength);
                    var ray = map.cast(entity, entity.direction + angle, this.range);
                    this.drawColumn(column, ray, angle, map);
                }
                this.context.restore();
            };
            Camera.prototype.drawColumn = function (column, ray, angle, map) {
                var context = this.context;
                var texture = map.wallTexture;
                var left = Math.floor(column * this.spacing);
                var width = Math.ceil(this.spacing);
                var hit = 0;
                while (hit < ray.length && ray[hit].height <= 0) {
                    hit++;
                }
                for (var s = ray.length - 1; s >= 0; s--) {
                    var step = ray[s];
                    if (s === hit) {
                        var textureX = Math.floor(texture.width * step.offset);
                        var wall = this.project(step.height, angle, step.distance);
                        context.drawImage(texture.image, textureX, 0, 1, texture.height, left, wall.top + this.viewAngle + this.cameraHeight, width, wall.height + this.cameraHeight); //canvasImageHeight
                    }
                }
            };
            Camera.prototype.project = function (height, angle, distance) {
                var z = distance * Math.cos(angle);
                var wallHeight = this.height * height / z;
                var bottom = this.height / 2 * (1 + 1 / z);
                return {
                    top: bottom - wallHeight,
                    height: wallHeight
                };
            };
            return Camera;
        })();
        _Camera.Camera = Camera;
    })(Camera = Engine.Camera || (Engine.Camera = {}));
})(Engine || (Engine = {}));
