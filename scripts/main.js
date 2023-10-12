require("wisp_wisa"); require("tantria"); require("malc"); require("hs_tionr"); require("intm_main"); require("dore");
Events.on(ContentInitEvent, e =>
{ 
   // intermod to original contents
   Vars.content.planet("erekir").allowLaunchToNumbered = true;  
   Vars.content.planet("erekir").hiddenItems = new Seq();
   Vars.content.planet("serpulo").hiddenItems = new Seq(); 
});

function set_random(){}

