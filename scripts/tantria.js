Events.on(ContentInitEvent, e =>{ 
    init_random(); 
    cadmium = Vars.content.block("intermod-cadmium-wall-ore");
    nickel = Vars.content.block("intermod-nickel-wall-ore");
    oblite = Vars.content.block("intermod-oblite-wall-ore");
    soxy = Vars.content.block("intermod-oxygen-wall-ore");
    v_blu = Vars.content.block("intermod-pur-coral-vent");
    v_red = Vars.content.block("intermod-red-coral-vent");
    init_pg();
    Vars.content.planet("intermod-intm_tantria_main").generator =  tantriagen;
})


function art(a)
{
    var b = Math.floor(a);
    if(b == 0){return Blocks.redmat} else if(b==1){return Blocks.redmat} else if(b==2){return Blocks.darksand} else if(b==3){return Blocks.bluemat} else if(b==4){return Blocks.bluemat}
    else if(b== 5){return Blocks.sand;}
    return Blocks.coreZone; 
}
function get_block(po)
{
    var hyt = Simplex.noise3d(4343, 8, 0.7, 1, po.x, po.y, po.z);
    Tmp.v31.set(po);
    var pos = Tmp.v33.set(po).scl(2);
    var temp = Simplex.noise3d(832302, 8, 0.6, 0.5, pos.x, pos.y + 99, pos.z);
    hyt = hyt * 1.2;     hyt = Mathf.clamp(hyt);
    return art(Mathf.clamp(hyt * 7, 0, 6));
}
function init_random() // initialse the random studfs. Each game start up will result in different everything. 
{
    ran_scl_coal = 20 + Math.random()*40; ran_scl_cadm = 20 + Math.random()*40; ran_scl_core = 5 * Math.random()*5; ran_scl_copp = 20 + Math.random()*40; ran_scl_lead = 20 + Math.random()*40; 
    ran_scl_nick = 20 + Math.random()*40; ran_scl_obli = 20 + Math.random()*40; ran_scl_soxy = 20 + Math.random()*40; ran_scl_tita = 20 + Math.random()*40;
     ran_scl_v_blu = 100 + Math.random() * 100; ran_scl_v_red = 100 + Math.random()*120; 
    seed_cadm = Math.floor(Math.random()* 999999999); seed_coal = Math.floor(Math.random()* 999999999); seed_core = Math.floor(Math.random()* 999999999); seed_copp = Math.floor(Math.random()* 999999999);
    seed_lead = Math.floor(Math.random()* 999999999); seed_nick = Math.floor(Math.random()* 999999999); seed_obli = Math.floor(Math.random()* 999999999); seed_soxy = Math.floor(Math.random()* 999999999); 
    seed_tita = Math.floor(Math.random()* 999999999); seed_vblu = Math.floor(Math.random()* 999999999); seed_vred = Math.floor(Math.random()* 999999999);
}
function init_pg()
{
    tantriagen = extend(TantrosPlanetGenerator,{
        genTile(po,ti)
        {
            ti.floor = get_block(po);  
            if(ti.floor == Blocks.redmat)
            {
                if(ran.chance(0.1)){ti.block = Blocks.redweed;}
                if(Simplex.noise3d(seed_vred,2,0.5,50,po.x,po.y,po.z) > 0.8){ti.floor = v_red;}
            }
            if(ti.floor == Blocks.bluemat)
            {
                if(ran.chance(0.1)){ti.block = Blocks.purbush;}
                if(ran.chance(0.1)){ti.block = Blocks.yellowCoral;} 
                if(Simplex.noise3d(seed_vblu,2,0.5,50,po.x,po.y,po.z) > 0.8){ti.floor = v_blu;}
            }
            if(Simplex.noise3d(seed_cadm,2,0.5,ran_scl_cadm,po.x,po.y,po.z) > 0.75){ti.overlay = cadmium;}
            if(Simplex.noise3d(seed_core,2,0.5,ran_scl_core,po.x,po.y,po.z) > 0.90){ti.floor = Blocks.coreZone;} // adds corezone. 
            if(Simplex.noise3d(seed_coal,2,0.5,ran_scl_coal,po.x,po.y,po.z) > 0.75){ti.overlay = Blocks.oreCoal;}
            if(Simplex.noise3d(seed_copp,2,0.5,ran_scl_copp,po.x,po.y,po.z) > 0.75){ti.overlay = Blocks.oreCopper;}
            if(Simplex.noise3d(seed_lead,2,0.5,ran_scl_lead,po.x,po.y,po.z) > 0.75){ti.overlay = Blocks.oreLead;}
            if(Simplex.noise3d(seed_nick,2,0.5,ran_scl_nick,po.x,po.y,po.z) > 0.75){ti.overlay = nickel;}
            if(Simplex.noise3d(seed_obli,2,0.5,ran_scl_obli,po.x,po.y,po.z) > 0.75){ti.overlay = oblite;}
            if(Simplex.noise3d(seed_soxy,2,0.5,ran_scl_soxy,po.x,po.y,po.z) > 0.75){ti.overlay = soxy;}
            if(Simplex.noise3d(seed_tita,2,0.5,ran_scl_tita,po.x,po.y,po.z) > 0.75){ti.overlay = Blocks.oreTitanium;}
        }
    })
}
// perpahps this should be the last. 
var tantriagen; 
var tant = extend(TantrosPlanetGenerator,{});
var cadmium, nickel,oblite,soxy, v_blu, v_red;  // floors that is not in the game. 
var ran = new Rand(); 

// randoms and seeds
var seed_coal; var seed_cadm; 
var seed_core; var seed_copp, seed_lead; 
var seed_nick, seed_obli,seed_soxy, seed_tita; var seed_vblu; var seed_vred;
var ran_scl_coal; var ran_scl_cadm; var ran_scl_core; var ran_scl_copp; var ran_scl_lead; var ran_scl_nick, ran_scl_obli, ran_scl_soxy,ran_scl_tita; var ran_scl_v_blu;
var ran_scl_v_blu, ran_scl_v_red; 


// draft data
/*

var diffi = 1 + Math.floor(Math.random() * 9);  
genTile(po,ti)
    {
       ti.floor = get_block(po);  
       if(ti.floor == Blocks.redmat)
        {
           if(ran.chance(0.1)){ti.block = Blocks.redweed;}
           if(Simplex.noise3d(seed_coal,2,0.5,ran_scl_v_red,po.x,po.y,po.z) > 0.8){ti.floor = v_red;}
        }
        if(ti.floor == Blocks.bluemat)
        {
            if(ran.chance(0.1)){ti.block = Blocks.purbush;}
            if(ran.chance(0.1)){ti.block = Blocks.yellowCoral;} 
            if(Simplex.noise3d(seed_coal,2,0.5,ran_scl_v_blu,po.x,po.y,po.z) > 0.8){ti.floor = v_blu;}
        }
        if(Simplex.noise3d(seed_cadm,2,0.5,ran_scl_cadm,po.x,po.y,po.z) > 0.72){ti.overlay = cadmium;}
        if(Simplex.noise3d(seed_core,2,0.5,ran_scl_core,po.x,po.y,po.z) > 0.90){ti.floor = Blocks.coreZone;} // adds corezone. 
        if(Simplex.noise3d(seed_coal,2,0.5,ran_scl_coal,po.x,po.y,po.z) > 0.72){ti.overlay = Blocks.oreCoal;}
        if(Simplex.noise3d(seed_copp,2,0.5,ran_scl_copp,po.x,po.y,po.z) > 0.72){ti.overlay = Blocks.oreCopper;}
        if(Simplex.noise3d(seed_lead,2,0.5,ran_scl_lead,po.x,po.y,po.z) > 0.72){ti.overlay = Blocks.oreLead;}
        if(Simplex.noise3d(seed_nick,2,0.5,ran_scl_nick,po.x,po.y,po.z) > 0.72){ti.overlay = nickel;}
    }

var ranx = -2 + Math.random()*4; var rany = -2 + Math.random()*4; 
var sect_dim = 900
var waves = 10 + Math.random() * 30; 

var tant = extend(PlanetGenerator,{}); // sometimes, this results in undefined. 
var tantriagen = extend(TantrosPlanetGenerator,{});
    genTile(po,ti)
    { 
    },
*/