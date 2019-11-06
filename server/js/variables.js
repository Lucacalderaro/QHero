var rows = 4;
var cols = 20;
var w;
var h;
var count;
var grid = new Array(rows);
var bob = {
  states: []
};
var alice = {
  states: []
};
var parameters = {
  speed: 5,
  spawnRate: 0.08,
  alicePosition: 4,
  bobPosition: 18,
  threshold: 16,
  start: false,
  song: new Audio('sng/song.mp3')
};
var points = {
  n0: 0,
  n1: 0,
  n00: 0,
  n01: 0,
  n10: 0,
  n11: 0,
  lastMeasure: -1,
  alpha: 0.5,
  beta: 0.5,
  scale: 100,
  missA: 0,
  missB: 0
}