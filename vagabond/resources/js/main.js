(function(global) {
  "use strict";

  var Monster = VAGABOND.ENTITIES.Monster;
  var Goblin = VAGABOND.ENTITIES.ENEMIES.Goblin;
  var HeightMap = VAGABOND.MAPS.HeightMap;
  var Screen = VAGABOND.SCREEN.Screen;
  var Level = VAGABOND.LEVEL.Level;
  var Controls = VAGABOND.CONTROLS.Controls;

  var milo = Object.create(Monster).init(0, 'Milo', 4, 4, 'M', 30);
  var otis = Object.create(Goblin).init(5, 10, 50);
  var henry = Object.create(Goblin).init(32, 15, 60);

  var size = 129;
  var heightMap = Object.create(HeightMap).init(size, {
    upper: 16,
    lower: 0
  }).generate(20);

  var screen = Object.create(Screen).init(20, 80, 40, 20);

  var controls = Object.create(Controls).init();

  global.controls = controls;

  var level = Object.create(Level).init(heightMap);

  global.screen = screen;

  level.addEntity(milo, otis, henry);

  var func = function() {

    if (controls.eventStack.length > 0) {

      var event = controls.eventStack.pop();

      if (event === 'up') {
        if (screen.isValidMove(0, -1, heightMap)) {
          screen.move(0, -1);
        }
      } else if (event === 'down') {
        if (screen.isValidMove(0, 1, heightMap)) {
          screen.move(0, 1);
        }
      } else if (event === 'left') {
        if (screen.isValidMove(-1, 0, heightMap)) {
          screen.move(-1, 0);
        }
      } else if (event === 'right') {
        if (screen.isValidMove(1, 0, heightMap)) {
          screen.move(1, 0);
        }
      }

      level.takeTurn();
      level.renderTo(screen);

      var screenHTML = screen.toHTML();

      document.body.replaceChild(screenHTML, document.body.firstChild);
    }

    //TODO: switch UTIL.setTimeout to window.requestAnimationFrame
    UTIL.setTimeout(func, 10);
  };

  func();

})(this);
