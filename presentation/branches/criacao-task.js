var config = {
  template: graphTemplate,
  mode: "compact",
  orientation: "horizontal",
  elementId: "criacao-task",
};

var gitgraph = new GitGraph(config);

var master = gitgraph.branch({name: "master"});

master.commit("Initial commit").commit(whiteCommit);

var task = master.branch("feature/LEGYS-500"); 
task.commit().commit();

master.commit()

sub1 = task.branch("feature/LEGYS-501")
sub2 = task.branch("feature/LEGYS-502")

sub1.commit()
master.commit()
sub2.commit()
sub1.commit()
sub2.commit()

