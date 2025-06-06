//require("xsi_x"); 
require("wisp_wisa"); 
require("tantria"); 
require("malc"); 
require("intm_main"); 
require("intm_exhiber");
require("hs_tionr");
require("dore");

require("dioremod/medgnd_5"); require ("dioremod/shkair_4"); require ("dioremod/shkair_5");
Events.on(ContentInitEvent, e =>
{ 
   // intermod to original contents
   Vars.content.planet("erekir").allowLaunchToNumbered = true;  
   Vars.content.planet("erekir").hiddenItems = new Seq();
   Vars.content.planet("serpulo").hiddenItems = new Seq(); 
});

function set_random(){}

