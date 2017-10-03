var config = {
  template: graphTemplate,
  mode: "compact",
  orientation: "horizontal",
  elementId: "pull-subtasks",
};

var gitgraph = new GitGraph(config);

var master = gitgraph.branch({name: "master"});

master.commit().commit(whiteCommit);

var task = master.branch("feature/LEGYS-1500"); 
task.commit("[feature/LEGYS-1500] Cria esqueleto da spider <nome-da-sistema>");

master.commit()

sub1 = task.branch("feature/LEGYS-1501")
sub2 = task.branch("feature/LEGYS-1502")

sub1.commit()
master.commit()
sub2.commit()

sub1.merge(task)
sub2.merge(task)
