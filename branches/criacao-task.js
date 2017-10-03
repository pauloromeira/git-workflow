var config = {
  template: graphTemplate,
  mode: "compact",
  orientation: "horizontal",
  elementId: "criacao-task",
};

var gitgraph = new GitGraph(config);

var master = gitgraph.branch({name: "master"});

master.commit().commit().commit(whiteCommit);

var task = master.branch("feature/LEGYS-1500"); 
task.commit("[feature/LEGYS-1500] Cria esqueleto da spider <nome-da-sistema>");
