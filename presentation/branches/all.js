var graphTemplate = new GitGraph.Template({
  colors: ["#979797", "#008fb5", "#f1c109", "#59b300"],
  branch: {
    lineWidth: 7,
    spacingX: 50,
    showLabel: true, // display branch names on graph
    labelFont: "normal 10pt Arial",
  },
  commit: {
    spacingY: -80,
    shouldDisplayTooltipsInCompactMode: false,
    dot: {
      size: 10
    },
    message: {
      display: false,
    },
  }
})

var whiteCommit = {
    dotColor: "white",
    dotSize: 8,
    dotStrokeWidth: 5
};
