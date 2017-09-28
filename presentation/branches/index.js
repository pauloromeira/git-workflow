
var gitGraph1 = new GitGraph({
  template: "metro",
  orientation: "horizontal",
  mode: "compact",
  elementId: "gitGraph1",
});

var master = gitGraph1.branch("master");
master.commit().commit().commit(); 
var develop = master.branch("develop"); 
develop.commit();
master.commit().commit().commit(); 

var gitGraph2 = new GitGraph({
  template: "metro",
  orientation: "horizontal",
  mode: "compact",
  elementId: "gitGraph2",
});

var master = gitGraph2.branch("master");
master.commit();
var develop = master.branch("develop"); 
develop.commit().commit();
master.commit(); 
