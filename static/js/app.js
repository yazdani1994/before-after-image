window.onload = function () {
  var slider = new iMatch(".img-container");

  slider.compare({
    direction: "HORIZONTAL",
    animation: true,
    lineClassName: "line",
    arrowClassName: "dot",
  });
};
