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
      font: "normal 14pt Arial"
    },
  }
})

var whiteCommit = {
    dotColor: "white",
    dotSize: 8,
    dotStrokeWidth: 5
};

var config = {
  template: graphTemplate,
  mode: "compact",
  orientation: "horizontal",
  elementId: "gitGraph1",
};

var gitgraph = new GitGraph(config);

var master = gitgraph.branch({
  name: "master"
});
master.commit("Initial commit").commit(whiteCommit);


var task = master.branch("feature/LEGYS-500"); 
task.commit().commit(whiteCommit);

master.commit()

sub1 = task.branch("feature/LEGYS-501")
sub2 = task.branch("feature/LEGYS-502")

sub1.commit()
master.commit()
sub2.commit()
sub1.commit()
sub2.commit()

