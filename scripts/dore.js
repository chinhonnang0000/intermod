// intm_dioremod_dore , original mod: Diamond ore Mod by z0mbiesrock
// reason: crash on startup. Resulting all other mods to be disabled. 
// Difficulty will be increased in this planet. However we cannot go over 10. or the game will crash while entering new fields. 
// Expect most intermod planets to have at least 1,000 non-user-generated map in height and widths.  

Events.on(ContentInitEvent, e => 
{
    flo_darkmoss = Vars.content.block("intermod-darkmoss");
    flo_darkspore = Vars.content.block("intermod-spore-darkmoss");
    flo_water_cor = Vars.content.block("intermod-spore-water");
    ore_ancr = Vars.content.block("intermod-ancient-debris");
    ore_ande = Vars.content.block("intermod-ore-ancient-scrap");
    ore_diam = Vars.content.block("intermod-ore-diamond"); 
    scf_0d = Vars.content.block("intermod-ancient-metal-panel-damaged");
    scf_0f = Vars.content.block("intermod-ancient-metal-panel");
    scf_1d = Vars.content.block("intermod-ancient-metal-tile-damaged");
    scf_1f = Vars.content.block("intermod-ancient-metal-tile");
    scf_vc = Vars.content.block("intermod-ancient-vent");
    scf_vh = Vars.content.block("intermod-ancient-vent-horizontal");
    scf_vv = Vars.content.block("intermod-ancient-vent-vertical");
    init_random(); 
    Vars.content.planet("intermod-intm_dioremod_dore").generator = dior; 
});
function get_block(po)
{
   var hyt = rawhyt(po); //function 1ca
   Tmp.v31.set(po);
   var pos = Tmp.v33.set(po).scl(5);
   var rad = 5; //var tars; 
   var tem = Mathf.clamp(Math.abs(pos.y * 2) / (rad));
   var tnoise = Simplex.noise3d(1, 7, 0.56, 0.33, pos.x, pos.y + 999, pos.z);
   var temp = Mathf.lerp(tem, tnoise, 0.5);
   hyt = hyt * 1.2; var hyu = Mathf.clamp(hyt);
   //var tar = Simplex.noise3d(1, 4, 0.55, 0.5, pos.x, pos.y + 999, pos.z) * 0.3 + Tmp.v31.dst(0, 0, 1) * 0.2;
   var a = Math.floor(Mathf.clamp(temp * 30, 0, 29));
   var b = Math.floor(Mathf.clamp(hyu * 30, 0, 29));
   return arr[a][b];// arr is a 2-d array
   
}

function get_random_floor()
{
    var a = Math.floor(Math.random() * 19);
    switch (a)
    {
        case 0: return Blocks.basalt; 
        case 1: return Blocks.coreZone; 
        case 2: return Blocks.dacite; 
        case 3: return Blocks.darksand; 
        case 4: return Blocks.darksandWater;
        case 5: return Blocks.hotrock;
        case 6: return Blocks.ice; 
        case 7: return Blocks.iceSnow; 
        case 8: return Blocks.magmarock; 
        case 9: return Blocks.moss; 
        case 10: return Blocks.sand;
        case 11: return Blocks.sandWater;
        case 12: return Blocks.shale; 
        case 13: return Blocks.snow; 
        case 14: return Blocks.tar; 
        case 15: return Blocks.water; 
        case 16: return flo_darkmoss;
        case 17: return flo_darkspore;
        case 18: return flo_water_cor; 
    }
    return Blocks.coreZone; 
}
function get_random_scrap_floor_diamond()
{
    var a = Math.floor(Math.random() * 8);
    switch(a)
    {
        case 0: return Blocks.coreZone; 
        case 1: return scf_0d;
        case 2: return scf_0f;
        case 3: return scf_1d;
        case 4: return scf_1f;
        case 5: return scf_vc;
        case 6: return scf_vh;
        case 7: return scf_vv;
    }
    return Blocks.coreZone;
}

function get_random_scrap_floor_serpulo()
{
    var a = Math.floor(Math.random() * 13);
    switch(a)
    {
        case 0: return Blocks.coreZone; 
        case 1: return Blocks.metalFloor;
        case 2: return Blocks.metalFloor2;
        case 3: return Blocks.metalFloor3;
        case 4: return Blocks.metalFloor4;
        case 5: return Blocks.metalFloor5;
        case 6: return Blocks.darkPanel1;
        case 7: return Blocks.darkPanel2;
        case 8: return Blocks.darkPanel3;
        case 9: return Blocks.darkPanel4;
        case 10: return Blocks.darkPanel5;
        case 11: return Blocks.darkPanel6;
        case 12: return Blocks.metalFloorDamaged; 
    }
    return Blocks.coreZone;
}

function init_random()
{ var a=0,b=0; arr = new Array();
    while(a < 30) // push random floors. 
    {
        arr[a] = new Array(); 
        b=0; while(b < 30)
        {
            arr[a][b] = get_random_floor(); 
            b = b+1; 
        }
        a=a+1; 
    } 
    wos = Math.random() * 0.2; ocu = Math.random()*0.5; 
    seed_gent = Math.floor(Math.random() * 999999999); dist_gent = 30 + Math.random() * 50;
}
function rawhyt(po)
{
    var pos = Tmp.v31.set(po);
    return Mathf.pow(Simplex.noise3d(1,7, 0.5,0.33, pos.x, pos.y, pos.z), 2.3 + wos) / (1 + wos);
}

var dior = extend(SerpuloPlanetGenerator,{ // Diamod ore mod is an expansion to Serpulo techs. 
    
    generate(ti,se)
    {
       init_random(); 
       this.tiles = ti; this.sector = se; 
       const rand = this.rand; rand.setSeed(se.id);
 
        //tile, sector
        var gen = new TileGen();
        this.tiles.each((x, y) => {
            gen.reset();
            var position = this.sector.rect.project(x / ti.width, y / ti.height);
 
            this.genTile(position, gen);
            ti.set(x, y, new Tile(x, y, gen.floor, gen.overlay, gen.block));
        });
        
        const Room = {
            x: 0, y: 0, radius: 0,
            connected: new ObjectSet(),
 
            connect(to){
                if(this.connected.contains(to)) return; this.connected.add(to);
                var nscl = rand.random(20, 60); var stroke = rand.random(4, 12);
                dior.brush(dior.pathfind(this.x, this.y, to.x, to.y, tile => (tile.solid() ? 5 : 0) + dior.noiseOct(tile.x, tile.y, 1, 1, 1 / nscl) * 60, Astar.manhattan), stroke);
            }
        };
        
        const setRoom = (x, y, radius) => {
            var room = Object.create(Room);
            room.x = x;    room.y = y;
            room.radius = radius * (1 + Math.random() * 2);
            return room;
        };
 
        this.cells(4);    this.distort(10, 12);
        this.width = this.tiles.width;    this.height = this.tiles.height;
        var constraint = 1.3;
        var radius = this.width / 2 
        var rooms = rand.random(2, 5);
        var roomseq = new Seq();
 
        for(var i = 0; i < rooms; i++){
            Tmp.v1.trns(rand.random(360), rand.random(radius / constraint));
            var rx = Math.floor(this.width / 2 + Tmp.v1.x);
            var ry = Math.floor(this.height / 2 + Tmp.v1.y);
            var maxrad = radius - Tmp.v1.len();
            var rrad = Math.floor(Math.min(rand.random(9, maxrad / 2), 30));
            roomseq.add(setRoom(rx, ry, rrad));
        };
 
        var spawn = null; var enemies = new Seq();
        var enemySpawns = rand.random(1, Math.max(Mathf.floor(this.sector.threat * 4), 1));
        
        var offset = rand.nextInt(360);
        var length = this.width / 2.55 - rand.random(13, 23);
        var angleStep = 5;
        var waterCheckRad = 5;
        
        for(var i = 0; i < 360; i += angleStep){
            var angle = offset + i;
            var cx = Math.floor(this.width / 2 + Angles.trnsx(angle, length));
            var cy = Math.floor(this.height / 2 + Angles.trnsy(angle, length));
 
            var waterTiles = 0;
 
            for(var rx = -waterCheckRad; rx <= waterCheckRad; rx++){
                for(var ry = -waterCheckRad; ry <= waterCheckRad; ry++){
                    var tile = this.tiles.get(cx + rx, cy + ry);
                    if(tile == null || tile.floor().liquidDrop != null){waterTiles++;};
                };
            };
 
            if(waterTiles <= 4 || (i + angleStep >= 360)){
                spawn = setRoom(cx, cy, rand.random(10, 18));
                roomseq.add(spawn);
 
                for(var j = 0; j < enemySpawns; j++){
                    var enemyOffset = rand.range(60);
                    Tmp.v1.set(cx - this.width / 2, cy - this.height / 2).rotate(180 + enemyOffset).add(this.width / 2, this.height / 2);
                    var espawn = setRoom(Math.floor(Tmp.v1.x), Math.floor(Tmp.v1.y), rand.random(10, 16));
                    roomseq.add(espawn); enemies.add(espawn);
                };
 
                break;
            };
        };
 
        roomseq.each(room => this.erase(room.x, room.y, room.radius));
 
        var connections = rand.random(Math.max(rooms - 1, 1), rooms + 3);
        for(var i = 0; i < connections; i++){roomseq.random(rand).connect(roomseq.random(rand));};
        roomseq.each(room => spawn.connect(room));
        this.cells(1);
        this.distort(10, 6);
        this.inverseFloodFill(this.tiles.getn(spawn.x, spawn.y));
        var poles = Math.abs(this.sector.tile.v.y);
        var nmag = 0.5; var scl = 5 + Math.random() * 5;
        var addscl = 1.3;
        
        var ores = Seq.with(Blocks.oreScrap);
        ores.add(Blocks.oreCoal);ores.add(Blocks.oreCopper); ores.add(Blocks.oreLead); ores.add(Blocks.oreTitanium); ores.add(Blocks.wallOreThorium)
        ores.add(ore_ancr);ores.add(ore_ande); ores.add(ore_diam);  // basic Erekir. 

 
        var frequencies = new FloatSeq();
        for(var i = 0; i < ores.size; i++){frequencies.add(rand.random(-0.1, 0.01) - i * 0.01 + poles * 0.04);};
 
        this.pass((x, y) => {
            if(!this.floor.asFloor().hasSurface()) return;
 
            var offsetX = x - 4, offsetY = y + 23;
            for(var i = ores.size - 1; i >= 0; i--){
                var entry = ores.get(i);
                var freq = frequencies.get(i);
                
                if(Math.abs(0.5 - this.noiseOct(offsetX, offsetY + i * 999, 2, 0.5, (40 + i))) > 0.2 + i * 0.01 &&
                    Math.abs(0.5 - this.noiseOct(offsetX, offsetY - i * 999, 1, 0.3, (30 + i))) > 0.3 + freq){
                    this.ore = entry;
                    break;
                };    
            };
            if(this.ore == Blocks.oreScrap){this.floor = get_random_scrap_floor_serpulo();}
            else if(this.ore == ore_ancr){this.floor = get_random_scrap_floor_diamond();}
            else if(this.ore == ore_ande){this.floor = get_random_scrap_floor_diamond();}
        });
 
        this.trimDark();
        this.median(2);
        this.tech();
 
        var difficulty = this.sector.threat;
        const ints = this.ints;
         
         ints.clear();
         ints.ensureCapacity(this.width * this.height / 4);
 
         Schematics.placeLaunchLoadout(spawn.x, spawn.y);
         enemies.each(espawn => this.tiles.getn(espawn.x, espawn.y).setOverlay(Blocks.spawn));
         var state = Vars.state;
         if(this.sector.hasEnemyBase()){
             this.basegen.generate(tiles, enemies.map(r => this.tiles.getn(r.x, r.y)), this.tiles.get(spawn.x, spawn.y), state.rules.waveTeam, this.sector, difficulty);
             state.rules.attackMode = this.sector.info.attack = true;
         }else{
             state.rules.winWave = this.sector.info.winWave = Math.floor(50 * (1 + Math.random())); 
         };
 
         var waveTimeDec = 0.4;
 
         state.rules.waveSpacing = Mathf.lerp(60 * 65 * 2, 60 * 60 * 1, Math.floor(Math.max(difficulty - waveTimeDec, 0) / 0.8));
         state.rules.waves = this.sector.info.waves = true;
         state.rules.enemyCoreBuildRadius = 480;
 
         state.rules.spawns = Waves.generate(1.5, new Rand(), state.rules.attackMode);
    },
    genTile(po,ti)
   {
       ti.floor = get_block(po);
       if(ti.floor == null)
       {
            ti.floor = Blocks.coreZone; 
       }
       else{
       ti.block = ti.floor.asFloor().wall;
       }
       if(Ridged.noise3d(seed_gent + 1, po.x, po.y, po.z, 2, dist_gent) > ocu){ti.block = Blocks.air;}
   },
    noiseOct(x, y, octaves, falloff, scl){
     var v = this.sector.rect.project(x, y).scl(5);
     return Simplex.noise3d(1, octaves, falloff, 0.4/scl, v.x, v.y, v.z);
 },
 
});

var arr; var ocu, wos; 
var ore_ancr, ore_ande, ore_diam;
var seed_gent, dist_gent; 
var flo_darkmoss,flo_darkspore, flo_water_cor; 
var scf_0d, scf_0f, scf_1d, scf_1f, scf_vc, scf_vh, scf_vv; 