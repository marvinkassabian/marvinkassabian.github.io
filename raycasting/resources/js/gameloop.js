"use strict";
var Engine;
(function (Engine) {
    var GameLoop;
    (function (_GameLoop) {
        var DEFAULT_TIMESTEP = 1 / 30;
        var MILLISECONDS_PER_SECOND = 1000;
        var GameLoop = (function () {
            function GameLoop(timestep) {
                if (timestep === void 0) { timestep = DEFAULT_TIMESTEP; }
                this.frameCallback = this.frame.bind(this);
                this.lastTime = 0;
                this.accumulator = 0;
                this.timestep = timestep;
                this.updateCallback = function () {
                };
                this.renderCallback = function () {
                };
            }
            GameLoop.prototype.start = function (updateCallback, renderCallback) {
                this.updateCallback = updateCallback;
                this.renderCallback = renderCallback;
                window.requestAnimationFrame(this.frameCallback);
            };
            GameLoop.prototype.frame = function (time) {
                var seconds = (time - this.lastTime) / MILLISECONDS_PER_SECOND;
                this.lastTime = time;
                this.accumulator += seconds;
                while (this.accumulator >= this.timestep) {
                    this.accumulator -= this.timestep;
                    this.updateCallback(this.timestep);
                }
                this.renderCallback();
                window.requestAnimationFrame(this.frameCallback);
            };
            return GameLoop;
        })();
        _GameLoop.GameLoop = GameLoop;
    })(GameLoop = Engine.GameLoop || (Engine.GameLoop = {}));
})(Engine || (Engine = {}));
