$(document).ready(function() {
  $("form#cost-calculator").submit(function(event) {
    var from = parseInt($("input#from").val());
    var to = parseInt($("input#to").val());
    var length = parseInt($("input#length").val());
    var width = parseInt($("input#width").val());
    var height = parseInt($("input#height").val());
    var weight = parseInt($("input#weight").val());

    var newPackage = { from: from, to: to, length: length, width: width, height: height, weight: weight,
      distance: function() {
        return Math.abs(this.from - this.to);
      },
      volume: function() {
        return this.length * this.width * this.height;
      },
      cost: function() {
        return this.distance()/500 + this.volume()/500 + this.weight/2;
      }
    };

    $(".cost").text(Math.round(newPackage.cost()));

    $("#total-cost").show();

    $("input#from").val("");
    $("input#to").val("");
    $("input#length").val("");
    $("input#width").val("");
    $("input#height").val("");
    $("input#weight").val("");

    event.preventDefault();
    });
});
