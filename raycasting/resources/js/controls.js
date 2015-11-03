"use strict";
var Engine;
(function (Engine) {
    var Controls;
    (function (_Controls) {
        var VirtualKey = Engine.VirtualKey.VirtualKey;
        var Controls = (function () {
            function Controls() {
                var _this = this;
                this.inputs = {};
                this.inputs['mouseLeft'] = 'turnLeft';
                this.inputs['mouseRight'] = 'turnRight';
                this.inputs['mouseUp'] = 'lookUp';
                this.inputs['mouseDown'] = 'lookDown';
                this.inputs[65 /* VK_A */] = 'left';
                this.inputs[68 /* VK_D */] = 'right';
                this.inputs[87 /* VK_W */] = 'forward';
                this.inputs[83 /* VK_S */] = 'backward';
                this.inputs[37 /* VK_LEFT */] = 'turnLeft';
                this.inputs[39 /* VK_RIGHT */] = 'turnRight';
                this.inputs[38 /* VK_UP */] = 'lookUp';
                this.inputs[40 /* VK_DOWN */] = 'lookDown';
                this.inputs[88 /* VK_X */] = 'crouch';
                this.inputs[32 /* VK_SPACE */] = 'jump';
                this.states = {};
                _.each(_.values(this.inputs), function (value) {
                    _this.states[value] = false;
                });
                document.addEventListener('keydown', this.onKey.bind(this, true), false);
                document.addEventListener('keyup', this.onKey.bind(this, false), false);
                document.addEventListener('mousemove', this.onMouseMove.bind(this), false);
                document.body.onclick = document.body.requestPointerLock || document.body.mozRequestPointerLock || document.body.webkitRequestPointerLock;
            }
            Controls.prototype.onKey = function (val, e) {
                var state = this.inputs[e.keyCode];
                if (typeof state === 'undefined') {
                    return;
                }
                this.states[state] = val;
                if (e.preventDefault) {
                    e.preventDefault();
                }
                if (e.stopPropagation) {
                    e.stopPropagation();
                }
            };
            Controls.prototype.onMouseMove = function (e) {
                var _this = this;
                var leftState = this.inputs['mouseLeft'];
                var rightState = this.inputs['mouseRight'];
                var upState = this.inputs['mouseUp'];
                var downState = this.inputs['mouseDown'];
                var x = (e.movementX || e.mozMovementX || e.webkitMovementX || 0);
                var y = (e.movementY || e.mozMovementY || e.webkitMovementY || 0);
                if (x > 0) {
                    this.states[rightState] = true;
                }
                else if (x < 0) {
                    this.states[leftState] = true;
                }
                if (y > 0) {
                    this.states[downState] = true;
                }
                else if (y < 0) {
                    this.states[upState] = true;
                }
                setTimeout(function () {
                    _this.onMouseMoveEnd(e);
                }, 10);
            };
            Controls.prototype.onMouseMoveEnd = function (e) {
                var leftState = this.inputs['mouseLeft'];
                var rightState = this.inputs['mouseRight'];
                var upState = this.inputs['mouseUp'];
                var downState = this.inputs['mouseDown'];
                this.states[leftState] = false;
                this.states[rightState] = false;
                this.states[upState] = false;
                this.states[downState] = false;
                if (e.preventDefault) {
                    e.preventDefault();
                }
                if (e.stopPropagation) {
                    e.stopPropagation();
                }
            };
            return Controls;
        })();
        _Controls.Controls = Controls;
    })(Controls = Engine.Controls || (Engine.Controls = {}));
})(Engine || (Engine = {}));
