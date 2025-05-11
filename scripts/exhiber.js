//exhiber planet generator 
Events.on(ContentInitEvent, e => {
fl_ampo = Vars.content.block("intermod-floor_ammonia_pool");
fl_baux = Vars.content.block("intermod-floor_bauxite");
fl_chal = Vars.content.block("intermod-floor_chalk");
fl_chbn = Vars.content.block("intermod-floor_chalk_debris");
fl_clay = Vars.content.block("intermod-floor_clay");
fl_feld = Vars.content.block("intermod-floor_feldspar");
fl_marm = Vars.content.block("intermod-floor_marmatite");
fl_nipo = Vars.content.block("intermod-floor_nitrogen_pool")
fl_patr = Vars.content.block("intermod-floor_patronite");
fl_vana = Vars.content.block("intermod-floor_vanadium");
fl_zini = Vars.content.block("intermod-floor_zinc_nitrate");
ter_divers = Math.floor(18);
or_clay = Vars.content.block("intermod-ore_clay");
or_diam = Vars.content.block("intermod-ore-diamond");
or_radi = Vars.content.block("intermod-ore_radium");
or_teno = Vars.content.block("intermod-ore_tenorite");
or_vana = Vars.content.block("intermod-ore_vanadium");
or_zinc = Vars.content.block("intermod-ore_zinc");

init_random();
Vars.content.planet("intermod-intm_exhiber").generator = new SerpuloGenerator(); //deliberate test crash to see if this part of the script is laoded
    //currretn diagnosis showing the script is not loaded.
})

function get_block(a)
{
    var height = raw_height(a);Tmp.v31.set(a);
        
    var position = Tmp.v33.set(a).scl(5);
    var rad = 5;    var temp = Mathf.clamp(Math.abs(position.y * 2) / rad);
    var tnoise = Simplex.noise3d(1, 7, 0.56, 1 / 3, position.x, position.y + 999, position.z);
        
    temp = Mathf.lerp(temp, tnoise, 0.5);
    height = Mathf.clamp(height * 1.2);

    var b = Math.floor(Mathf.clamp(temp * 24,0,23));
    var c = Math.floor(Mathf.clamp(height * 24,0,23));
    //return Blocks.coreZone; 
    return planetFloors[b][c]; // debug info: shows that b and c has problem. 
}
function get_random_floor()
{
    var a = Math.floor(Math.random() * 12);
    switch(a)
    {
        case 0: return Blocks.coreZone;
        case 1: return fl_ampo;
        case 2: return fl_baux; 
        case 3: return fl_chal;
        case 4: return fl_chbn;
        case 5: return fl_clay;
        case 6: return fl_feld;
        case 7: return fl_marm;
        case 8: return fl_nipo;
        case 9: return fl_patr;
        case 10: return fl_vana;
        case 11: return fl_zini;
        default: return Blocks.coreZone; 
    } 
}
function get_random_metal_floor()
{
    var a = Math.floor(Math.random() * 2);
    switch(a)
    {
        default:return Blocks.coreZone; 
    }
}

function init_random()
{
    planetFloors = new Array(); 
    var a=0,b =0; 
    length = 100 + Math.random() * 100; 
    offset = 180 + Math.random() * 360; 
    wos = Math.random() * 0.15; 
    while(a < 24)
    {  
        planetFloors[a] = new Array(); 
        b=0; while(b < 24)
        {
            planetFloors[a][b] = get_random_floor(); 
            b = b+1;
        }
        a = a+1;
    }
    ocu = Math.random() * 0.7;
    di_clay = 20 + Math.random() * 20; se_clay = Math.floor(Math.random() * 999999999); 
    di_diam = 20 + Math.random() * 20; se_diam = Math.floor(Math.random() * 999999999); 
    di_radi = 20 + Math.random() * 20; se_radi = Math.floor(Math.random() * 999999999); 
    di_teno = 20 + Math.random() * 20; se_teno = Math.floor(Math.random() * 999999999); 
    di_vana = 20 + Math.random() * 20; se_vana = Math.floor(Math.random() * 999999999); 
    di_zinc = 20 + Math.random() * 20; se_zinc = Math.floor(Math.random() * 999999999); 
    dist_gent = 20 + Math.random() * 20; seed_gent = Math.floor(Math.random() * 999999999);
    vdi_car = 30 + Math.random() * 30; vse_car = Math.floor(Math.random() * 999999999);
    vdi_red = 30 + Math.random() * 30; vse_red = Math.floor(Math.random() * 999999999);
}
function raw_height(a){
    var position = Tmp.v31.set(a);
    return (Mathf.pow(Simplex.noise3d(1,7, 0.5,0.33, position.x, position.y, position.z), 2.3) + wos) / (1 + wos);
}
function noise_oct(x,y,octaves,falloff,scl)
{
    var v = sect.rect.project(x, y).scl(5);
    return Simplex.noise3d(1, octaves, falloff, 0.4/scl, v.x, v.y, v.z);
}

var exhiber_gen = extend(SerpuloPlanetGenerator,{
    genTile(po,ti)
    {
        ti.floor = get_block(po); ti.block = ti.floor.asFloor().wall;
        if(Ridged.noise3d(seed_gent + 1, po.x, po.y, po.z, 2, dist_gent) > ocu){ti.block = Blocks.air;}
        if(ti.floor == fl_vana && Simplex.noise3d(vse_red,2,0,vdi_red,po.x,po.y,po.z) > 0.7){ti.floor = Blocks.redStoneVent; ti.block = Blocks.air;}
    },
    generate(tiles,sec)
    {   sect = sec; init_random();
        this.tiles = tiles; this.sector = sec;
        const rand = this.rand; rand.setSeed(Math.floor(Math.random()* 999999999));
        
        //tile, sector
        var gen = new TileGen();
        this.tiles.each((x, y) => {
            gen.reset();
            var position = this.sector.rect.project(x / tiles.width, y / tiles.height);
            this.genTile(position, gen); tiles.set(x, y, new Tile(x, y, gen.floor, gen.overlay, gen.block));
        });
        
        const Room = {
            x: 0, y: 0, radius: 0,connected: new ObjectSet(),
            connect(to){
                if(this.connected.contains(to)) return;
                this.connected.add(to);
                var nscl = rand.random(20, 60); var stroke = rand.random(4, 12);
                exhiber_gen.brush(exhiber_gen.pathfind(this.x, this.y, to.x, to.y, tile => (tile.solid() ? 5 : 0) + noise_oct(tile.x, tile.y, 1, 1, 1 / nscl) * 60, Astar.manhattan), stroke);
            }
        };
        
        const setRoom = (x, y, radius) => {
            var room = Object.create(Room);
            room.x = x; room.y = y;
            room.radius = radius * (1 + Math.random());
            return room;
        };

        this.cells(4); this.distort(10, 12);

        this.width = this.tiles.width; this.height = this.tiles.height;
        var constraint = 1.3; var radius = this.width / 2 / Mathf.sqrt3;
        var rooms = rand.random(2, 5); var roomseq = new Seq();

        for(var i = 0; i < rooms; i++){
            Tmp.v1.trns(rand.random(360), rand.random(radius / constraint));
            var rx = Math.floor(this.width / 2 + Tmp.v1.x); var ry = Math.floor(this.height / 2 + Tmp.v1.y);
            var maxrad = radius - Tmp.v1.len(); var rrad = Math.floor(Math.min(rand.random(9, maxrad / 2), 30));
            roomseq.add(setRoom(rx, ry, rrad));
        };

        var spawn = null; var enemies = new Seq();
        var enemySpawns = rand.random(1, Math.max(Mathf.floor(this.sector.threat * 4), 1));
        var offset = rand.nextInt(360); var length = this.width / 2.55 - rand.random(13, 23);
        var angleStep = 5; var waterCheckRad = 5;
        
        for(var i = 0; i < 360; i += angleStep){
            var angle = offset + i;
            var cx = Math.floor(this.width / 2 + Angles.trnsx(angle, length)); var cy = Math.floor(this.height / 2 + Angles.trnsy(angle, length));
            var waterTiles = 0;

            for(var rx = -waterCheckRad; rx <= waterCheckRad; rx++){
                for(var ry = -waterCheckRad; ry <= waterCheckRad; ry++){
                    var tile = this.tiles.get(cx + rx, cy + ry); if(tile == null || tile.floor().liquidDrop != null){waterTiles++;};
                };
            };

            if(waterTiles <= 4 || (i + angleStep >= 360)){
                spawn = setRoom(cx, cy, rand.random(10, 18)); roomseq.add(spawn);
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
        this.cells(1); this.distort(10, 6);
        this.inverseFloodFill(this.tiles.getn(spawn.x, spawn.y));
        var ores = Seq.with(Blocks.oreCopper);
        ores.add(Blocks.oreLead); ores.add(Blocks.oreScrap); ores.add(Blocks.oreCoal); 
        ores.add(or_clay); ores.add(or_diam); ores.add(or_radi); ores.add(or_teno); ores.add(or_vana); ores.add(or_zinc);
        var poles = Math.abs(this.sector.tile.v.y);  var nmag = 0.5;var scl = 1;var addscl = 1.3;
        if(Simplex.noise3d(1, 2, 0.5, scl, this.sector.tile.v.x, this.sector.tile.v.y, this.sector.tile.v.z) * nmag + poles > 0.45 * addscl){ores.add(Blocks.wallOreThorium);}
        if(Simplex.noise3d(1, 2, 0.5, scl, this.sector.tile.v.x + 1, this.sector.tile.v.y, this.sector.tile.v.z) * nmag + poles > 0.2 * addscl){ores.add(Blocks.oreTitanium);}

        var frequencies = new FloatSeq(); for(var i = 0; i < ores.size; i++){frequencies.add(rand.random(-0.1, 0.01) - i * 0.01 + poles * 0.04);};
        this.pass((x, y) => {
            if(!this.floor.asFloor().hasSurface()) return;
            var offsetX = x - 4, offsetY = y + 23;
            for(var i = ores.size - 1; i >= 0; i--){
                var entry = ores.get(i); var freq = frequencies.get(i);
                if(Math.abs(0.5 - noise_oct(offsetX, offsetY + i * 999, 2, 0.7, (40 + i * 2))) > 0.2 + i * 0.01 &&
                    Math.abs(0.5 - noise_oct(offsetX, offsetY - i * 999, 1, 1, (30 + i * 4))) > 0.3 + freq){
                    this.ore = entry;break;
                };    
            };
            if(this.ore == Blocks.oreScrap){this.floor = Blocks.coreZone;}
        });

        this.trimDark(); this.median(2); this.tech();
        this.pass((x, y) => {//random boulder
            if(this.floor == Blocks.stone){
                if(Math.abs(0.5 - this.noiseOct(x - 90, y, 4, 0.8, 65)) > 0.02){
                    this.floor = Blocks.boulder;
                };
            };

            // can be used for specific deposits. 
            if(this.floor == fl_clay && Simplex.noise3d(se_clay,2,0,di_clay,this.sector.tile.v.x,this.sector.tile.v.y,this.sector.tile.v.z) > 0.6){this.ore = or_clay;}
            if(this.floor == fl_vana && Simplex.noise3d(se_vana,2,0,di_vana,this.sector.tile.v.x,this.sector.tile.v.y,this.sector.tile.v.z) > 0.6){this.ore = or_vana;}
            if(this.floor == fl_zini && Simplex.noise3d(se_zinc,2,0,di_zinc,this.sector.tile.v.x,this.sector.tile.v.y,this.sector.tile.v.z) > 0.6){this.ore = or_zinc;}
        });

        var difficulty = this.sector.threat;
        const ints = this.ints; 
        ints.clear(); ints.ensureCapacity(this.width * this.height / 4);

        Schematics.placeLaunchLoadout(spawn.x, spawn.y);
        enemies.each(espawn => this.tiles.getn(espawn.x, espawn.y).setOverlay(Blocks.spawn));
        var state = Vars.state;
        if(this.sector.hasEnemyBase()){
            this.basegen.generate(tiles, enemies.map(r => this.tiles.getn(r.x, r.y)), this.tiles.get(spawn.x, spawn.y), state.rules.waveTeam, this.sector, 1 + difficulty);
            state.rules.attackMode = this.sector.info.attack = true;
        }else{
            state.rules.winWave = this.sector.info.winWave = 10 + 5 * Math.max(difficulty * 10, 1);
        };
        var waveTimeDec = 0.4;
        state.rules.waveSpacing = Mathf.lerp(60 * 130, 3600, Math.floor(Math.max(difficulty - waveTimeDec, 0) / 0.8));
        state.rules.waves = this.sector.info.waves = true;
        state.rules.enemyCoreBuildRadius = 480;
        state.rules.spawns = Waves.generate(difficulty, new Rand(), state.rules.attackMode);
    },
    generateSector(secto){secto.generateEnemyBase = true;},
});
var dist_gent, seed_gent;
var di_clay, di_diam, di_radi, di_teno, di_vana, di_zinc;
var mf_cpla; 
var se_clay, se_diam, se_radi, se_teno, se_vana, se_zinc;
var fl_ampo, fl_baux, fl_chal, fl_chbn, fl_clay, fl_feld, fl_marm, fl_nipo, fl_patr, fl_vana, fl_zini;
var or_clay, or_diam, or_radi, or_teno, or_vana, or_zinc;
var vdi_car, vdi_red;
var vse_car, vse_red; 
var length, offset;
var planetFloors = new Array(); 
var sect; var ocu; var ter_divers; var wos; 

