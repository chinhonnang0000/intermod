require("wisp_wisa"); require("tantria"); require("malc");
Events.on(ContentInitEvent, e =>
{ 
   Vars.content.planet("intermod-intm_erekis").generator = new ErekirPlanetGenerator(); // this was declared. 
   Vars.content.planet("intermod-intm_serpulo").generator = new SerpuloPlanetGenerator(); 
  

   // intermod to original contents
   Vars.content.planet("erekir").allowLaunchToNumbered = true;  
   Vars.content.planet("erekir").hiddenItems = new Seq();
   Vars.content.planet("serpulo").hiddenItems = new Seq(); 
});

function set_random(){}

