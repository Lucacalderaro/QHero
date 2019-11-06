$(document).ready(function () {
  console.log("ready!");
  $('#myModal').modal({
    show: true
  })
  setTimeout(function () {
    $("#sketch-holder").find("canvas").css("width", "100%");
    $("#sketch-holder").css("margin-top", "200px");
  }, 100);
  spamAlice();
  getBobData();
  $(".start-btn").click(function () {
    alice.states = [];
    bob.states = [];
  });
});

function getBobData() {
  console.log("Start - getBobData");
  $.get("/request", function (data) {
    bob.states.push(data);
    console.log("End - getBobData");
    setTimeout(function () {
      getBobData()
    }, 500);
  });
}

function spamAlice() {
  console.log("Start - spamAlice");
  if (alice.states.length !== 0) {
    $.get("/insert?base=" + alice.states.shift(), function (data) {
      console.log("End - spamAlice");
      setTimeout(function () {
        spamAlice()
      }, 500);
    });
  } else {
    setTimeout(function () {
      spamAlice()
    }, 500);
  }
}