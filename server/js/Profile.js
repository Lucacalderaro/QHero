function Profile(_type) {
  this.type = _type;
  this.states = [];
  this.addState = function (_state) {
    this.states.push(_state);
  };
  this.popState = function () {
    return this.states.pop();
  };
}