"use strict";
var Engine;
(function (Engine) {
    var Player;
    (function (_Player) {
        var Util = Engine.Util;
        var MOVEMENT_SPEED = 2.4;
        var HORIZONTAL_VIEW_SPEED = 1.2;
        var VERTICAL_VIEW_SPEED = 1000;
        var CROUCH_SPEED = 500;
        var JUMP_HEIGHT = 50;
        var JUMP_SPEED = 2;
        var MAX_CROUCH_MOD = 0;
        var MIN_CROUCH_MOD = -25;
        var MAX_JUMP_MOD = Infinity;
        var MIN_JUMP_MOD = 0;
        var MAX_VIEW_MOD = 1000;
        var MIN_VIEW_MOD = -1000;
        var Direction;
        (function (Direction) {
            Direction[Direction["FORWARD"] = 1] = "FORWARD";
            Direction[Direction["RIGHT"] = 2] = "RIGHT";
            Direction[Direction["BACKWARD"] = 4] = "BACKWARD";
            Direction[Direction["LEFT"] = 8] = "LEFT";
        })(Direction || (Direction = {}));
        var DIRECTION_STATE_TABLE = {};
        DIRECTION_STATE_TABLE[8 /* LEFT */] = 'left';
        DIRECTION_STATE_TABLE[2 /* RIGHT */] = 'right';
        DIRECTION_STATE_TABLE[1 /* FORWARD */] = 'forward';
        DIRECTION_STATE_TABLE[4 /* BACKWARD */] = 'backward';
        var DIRECTION_TABLE = {
            0: Infinity,
            1: (0 / 8) * Util.CIRCLE,
            2: (2 / 8) * Util.CIRCLE,
            3: (1 / 8) * Util.CIRCLE,
            4: (4 / 8) * Util.CIRCLE,
            5: Infinity,
            6: (3 / 8) * Util.CIRCLE,
            7: (2 / 8) * Util.CIRCLE,
            8: (6 / 8) * Util.CIRCLE,
            9: (7 / 8) * Util.CIRCLE,
            10: Infinity,
            11: (0 / 8) * Util.CIRCLE,
            12: (5 / 8) * Util.CIRCLE,
            13: (6 / 8) * Util.CIRCLE,
            14: (4 / 8) * Util.CIRCLE,
            15: Infinity
        };
        var Player = (function () {
            function Player(x, y, direction) {
                this.x = x;
                this.y = y;
                this.direction = direction;
                this.crouchModifier = 0;
                this.jumpModifier = 0;
                this.viewAngle = 0;
                this.verticalVelocity = 0;
                this.moveWhileJumping = false;
            }
            Player.prototype.rotate = function (angle) {
                this.direction = (this.direction + angle + Util.CIRCLE) % (Util.CIRCLE);
            };
            Player.prototype.walk = function (distance, map, direction) {
                this.move(distance, map, this.direction + direction);
            };
            Player.prototype.move = function (distance, map, direction) {
                var dx = Math.cos(direction) * distance;
                var dy = Math.sin(direction) * distance;
                if (map.get(this.x + dx, this.y) <= 0) {
                    this.x += dx;
                }
                if (map.get(this.x, this.y + dy) <= 0) {
                    this.y += dy;
                }
            };
            //Modularize these methods
            Player.prototype.changeCrouchModifier = function (delta) {
                this.crouchModifier = Util.clamp(this.crouchModifier + delta, MIN_CROUCH_MOD, MAX_CROUCH_MOD);
            };
            Player.prototype.changeJumpModifier = function (delta) {
                this.jumpModifier = Util.clamp(this.jumpModifier + delta, MIN_JUMP_MOD, MAX_JUMP_MOD);
            };
            Player.prototype.changeViewAngle = function (delta) {
                this.viewAngle = Util.clamp(this.viewAngle + delta, MIN_VIEW_MOD, MAX_VIEW_MOD);
            };
            Player.prototype.update = function (states, map, timestep) {
                var jumpDirection = 0;
                var moveWhileJumping = false;
                for (var direction in Direction) {
                    if (states[DIRECTION_STATE_TABLE[direction]] && this.onGround()) {
                        this.walk(MOVEMENT_SPEED * timestep, map, DIRECTION_TABLE[direction]);
                        moveWhileJumping = true;
                        jumpDirection += +direction;
                    }
                }
                if (states['turnLeft']) {
                    this.rotate(-1 * HORIZONTAL_VIEW_SPEED * Math.PI * timestep);
                }
                if (states['turnRight']) {
                    this.rotate(HORIZONTAL_VIEW_SPEED * Math.PI * timestep);
                }
                if (states['lookUp']) {
                    this.changeViewAngle(VERTICAL_VIEW_SPEED * timestep);
                }
                if (states['lookDown']) {
                    this.changeViewAngle(-1 * VERTICAL_VIEW_SPEED * timestep);
                }
                if (states['crouch']) {
                    this.changeCrouchModifier(-1 * CROUCH_SPEED * timestep);
                }
                else {
                    this.changeCrouchModifier(CROUCH_SPEED * timestep);
                }
                if (states['jump']) {
                    if (this.onGround()) {
                        this.verticalVelocity = 5;
                        console.log(jumpDirection);
                        console.log(typeof jumpDirection);
                        jumpDirection = DIRECTION_TABLE[jumpDirection];
                        this.jumpDirection = jumpDirection + this.direction;
                        this.moveWhileJumping = (jumpDirection !== Infinity) ? moveWhileJumping : false;
                    }
                }
                if (!this.onGround()) {
                    if (this.moveWhileJumping) {
                        this.move(JUMP_SPEED * timestep, map, this.jumpDirection);
                    }
                }
                this.verticalVelocity -= timestep * 15;
                this.changeJumpModifier(JUMP_HEIGHT * timestep * this.verticalVelocity);
            };
            Player.prototype.getHeightInformation = function () {
                return {
                    heightModifier: this.crouchModifier + this.jumpModifier,
                    viewAngle: this.viewAngle
                };
            };
            Player.prototype.onGround = function () {
                return this.jumpModifier === MIN_JUMP_MOD;
            };
            return Player;
        })();
        _Player.Player = Player;
    })(Player = Engine.Player || (Engine.Player = {}));
})(Engine || (Engine = {}));
