
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
develop.commit({
  dotColor: "white",
  dotSize: 10,
  dotStrokeWidth: 10,
  tag: "feature/LEGYS-500",
});
master.commit().commit(); 
master.commit({tag: "master"});

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
