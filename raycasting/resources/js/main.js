"use strict";
var Engine;
(function (Engine) {
    var Main;
    (function (Main) {
        var Camera = Engine.Camera.Camera;
        var Controls = Engine.Controls.Controls;
        var GameLoop = Engine.GameLoop.GameLoop;
        var GameMap = Engine.GameMap.GameMap;
        var Player = Engine.Player.Player;
        function exec() {
            var display = document.getElementById('display');
            var player = new Player(15.3, -1.2, Math.PI * 0.3);
            var map = new GameMap(32);
            var controls = new Controls();
            var camera = new Camera(display, 240, 0.6);
            var loop = new GameLoop();
            map.randomize();
            loop.start(function updateCallback(timestep) {
                player.update(controls.states, map, timestep);
            }, function renderCallback() {
                camera.render(player, map);
            });
        }
        Main.exec = exec;
    })(Main = Engine.Main || (Engine.Main = {}));
})(Engine || (Engine = {}));
Engine.Main.exec();
