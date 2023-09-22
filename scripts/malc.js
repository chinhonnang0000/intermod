Events.on(ContentInitEvent, e => 
{
    init_random(); 
    anscrap = Vars.content.block("intermod-ancient_scrap");
    magwisp = Vars.content.block("intermod-magic_ruins");
     nickel = Vars.content.block("intermod-Nickel");
    Vars.content.planet("intermod-intm_malcalor").generator = malcgen;
})
var magwisp,nickel,anscrap; // block varaible that needs to be initialised. For ores. 

function art(a,b)
{
    var c = Math.floor(a); var d = Math.floor(b);
    if(c==0)
    {
        if(d == 0){return Blocks.slag;} else if(d == 1){return Blocks.magmarock;} else if(d == 2){return Blocks.hotrock;} else if(d == 3){return Blocks.basalt;} else if(d==4){return Blocks.basalt}
        else if(d==5){return Blocks.carbonStone;} else if(d==6){return Blocks.carbonStone;} else if(d==7){return Blocks.carbonStone;} else if(d==8){return Blocks.darksand;} else if(d==9){return Blocks.darksandWater;}
        else if(d==9){return Blocks.darksand;} else if(d==10){return Blocks.coreZone;} 
        else if(d==11){return Blocks.rock;} else if(d==12){return Blocks.rock;} else if(d==13){return Blocks.snow;} 
    }
    else if(c==1)
    {
        if(d == 0){return Blocks.slag;} else if(d == 1){return Blocks.magmarock;} else if(d == 2){return Blocks.hotrock;} else if(d == 3){return Blocks.basalt;} else if(d==4){return Blocks.carbonStone;}
        else if(d==5){return Blocks.carbonStone;} else if(d==6){return Blocks.carbonStone;} else if(d==7){return Blocks.darksand;} else if(d==8){return Blocks.darksandWater; }else if(d==9){return Blocks.darksand;}
        else if(d==10){return Blocks.coreZone;} 
        else if(d==11){return Blocks.rock;} else if(d==12){return Blocks.rock;} else if(d==13){return Blocks.rock;}  
    }
    else if(c==2)
    {
        if(d == 0){return Blocks.slag;} else if(d == 1){return Blocks.magmarock;} else if(d == 2){return Blocks.hotrock;} else if(d == 3){return Blocks.basalt;} else if(d==4){return Blocks.basalt;}
        else if(d==5){return Blocks.carbonStone;} else if(d==6){return Blocks.carbonStone;} else if(d==7){return Blocks.darksand;} else if(d==8){return Blocks.darksand;} else if(d==9){return Blocks.coreZone;} 
        else if(d==10){return Blocks.rock;} else if(d==11){return Blocks.rock;} else if(d==12){return Blocks.snow;} else if(d==13){return Blocks.carbonStone;}
    }
    else if(c== 3)
    {
        if(d == 0){return Blocks.slag;} else if(d == 1){return Blocks.magmarock;} else if(d == 2){return Blocks.hotrock;} else if(d == 3){return Blocks.basalt;} else if(d==4){return Blocks.carbonStone;}
        else if(d==5){return Blocks.carbonStone;} else if(d==6){return Blocks.carbonStone;} else if(d==7){return Blocks.carbonStone;} else if(d==8){return Blocks.darksand;} else if(d==9){return Blocks.coreZone;} 
        else if(d==10){return Blocks.rock;} else if(d==11){return Blocks.snow;} else if(d==12){return Blocks.snow;} else if(d==13){return Blocks.carbonStone;}
    }
    return Blocks.coreZone; 
}
function get_block(po)
{
    var hyt = rawhyt(po); //function 1c
    Tmp.v31.set(po);
    var pos = Tmp.v33.set(po).scl(5);
    var rad = 5; //var tars; 
    var tem = Mathf.clamp(Math.abs(pos.y * 2) / (rad));
    var tnoise = Simplex.noise3d(1, 7, 0.56, 0.33, pos.x, pos.y + 999, pos.z);
    var temp = Mathf.lerp(tem, tnoise, 0.5);
    hyt = hyt * 1.2; var hyu = Mathf.clamp(hyt);
    //var tar = Simplex.noise3d(1, 4, 0.55, 0.5, pos.x, pos.y + 999, pos.z) * 0.3 + Tmp.v31.dst(0, 0, 1) * 0.2;
    var res = art(Mathf.clamp(temp * 4, 0, 3),Mathf.clamp(hyu * 14, 0, 13));// arr is a 2-d array
    return res; 
}

function init_random()
{
    dist_copp = 30 + Math.random() * 50; dist_core = 10 + Math.random()*6; dist_gent = 10 + Math.random()*30; dist_lead = 30 + Math.random() * 50; 
    dist_vcar = 25 + Math.random() * 25;
    seed_copp = Math.floor(Math.random() * 999999999); seed_core = Math.floor(Math.random()* 999999999); seed_gent = Math.floor(Math.random()* 999999999);
    seed_lead = Math.floor(Math.random() * 999999999); seed_vcar = Math.floor(Math.random()* 999999999);
    ocu = Math.random() * 0.6; wos = Math.random() * 0.5; 
}
function rawhyt(po)
{
    var pos = Tmp.v31.set(po);
    return Mathf.pow(Simplex.noise3d(1,7, 0.5,0.33, pos.x, pos.y, pos.z), 2.3 + wos) / (1 + wos);
}

var dist_copp,dist_core,dist_gent,dist_lead, dist_vcar; 
var seed_copp,seed_core,seed_gent,seed_lead, seed_vcar;
var ocu, wos; 

var malcgen = extend(SerpuloPlanetGenerator,
{generate(ti,se)
    {
        this.tiles = ti; 
        this.sector = se; 
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
                if(this.connected.contains(to)) return;

                this.connected.add(to);
                
                var nscl = rand.random(20, 60);
                var stroke = rand.random(4, 12);
                
                malcgen.brush(malcgen.pathfind(this.x, this.y, to.x, to.y, tile => (tile.solid() ? 5 : 0) + malcgen.noiseOct(tile.x, tile.y, 1, 1, 1 / nscl) * 60, Astar.manhattan), stroke);
            }
        };
        
        const setRoom = (x, y, radius) => {
            var room = Object.create(Room);
            room.x = x;    room.y = y;
            room.radius = radius;
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

        var spawn = null;
        var enemies = new Seq();
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
                    
                    if(tile == null || tile.floor().liquidDrop != null){
                        waterTiles++;
                    };
                };
            };

            if(waterTiles <= 4 || (i + angleStep >= 360)){
                spawn = setRoom(cx, cy, rand.random(10, 18));
                roomseq.add(spawn);

                for(var j = 0; j < enemySpawns; j++){
                    var enemyOffset = rand.range(60);
                    
                    Tmp.v1.set(cx - this.width / 2, cy - this.height / 2).rotate(180 + enemyOffset).add(this.width / 2, this.height / 2);
                    var espawn = setRoom(Math.floor(Tmp.v1.x), Math.floor(Tmp.v1.y), rand.random(10, 16));
                    roomseq.add(espawn);
                    enemies.add(espawn);
                };

                break;
            };
        };

        roomseq.each(room => this.erase(room.x, room.y, room.radius));

        var connections = rand.random(Math.max(rooms - 1, 1), rooms + 3);
        for(var i = 0; i < connections; i++){
            roomseq.random(rand).connect(roomseq.random(rand));
        };

        roomseq.each(room => spawn.connect(room));

        this.cells(1);
        this.distort(10, 6);

        this.inverseFloodFill(this.tiles.getn(spawn.x, spawn.y));

        var ores = Seq.with(magwisp);
        var poles = Math.abs(this.sector.tile.v.y);
        var nmag = 0.5;var scl = 1;
        var addscl = 1.3;
        ores.add(Blocks.oreCoal);ores.add(Blocks.oreCopper); ores.add(Blocks.oreLead); ores.add(Blocks.oreScrap); ores.add(Blocks.oreThorium); ores.add(Blocks. oreTitanium); 
        ores.add(Blocks.wallOreBeryllium);ores.add(Blocks.wallOreTungsten);
        if(Simplex.noise3d(1, 2, 0.5, scl, this.sector.tile.v.x, this.sector.tile.v.y, this.sector.tile.v.z) * nmag + poles > 0.7 * addscl){ores.add(magwisp);};
        if(Simplex.noise3d(1, 2, 0.5, scl, this.sector.tile.v.x + 1, this.sector.tile.v.y, this.sector.tile.v.z) * nmag + poles > 0.2 * addscl){ores.add(anscrap);};

        var frequencies = new FloatSeq();
        for(var i = 0; i < ores.size; i++){
            frequencies.add(rand.random(-0.1, 0.01) - i * 0.01 + poles * 0.04);
        };

        this.pass((x, y) => {
            if(!this.floor.asFloor().hasSurface()) return;

            var offsetX = x - 4, offsetY = y + 23;
            for(var i = ores.size - 1; i >= 0; i--){
                var entry = ores.get(i);
                var freq = frequencies.get(i);
                
                if(Math.abs(0.5 - this.noiseOct(offsetX, offsetY + i * 999, 2, 0.7, (40 + i))) > 0.2 + i * 0.01 &&
                    Math.abs(0.5 - this.noiseOct(offsetX, offsetY - i * 999, 1, 1, (30 + i))) > 0.3 + freq){
                    this.ore = entry;
                    break;
                };    
            };
            if(this.ore == Blocks.oreScrap && rand.chance(0.33)){this.floor = Blocks.coreZone;};
        });
/*
        this.trimDark();
        this.median(2);
        this.tech();
        this.pass((x, y) => {
            //random boulder
            if(this.floor == Blocks.stone){
                if(Math.abs(0.5 - this.noiseOct(x - 90, y, 4, 0.8, 65)) > 0.02){
                    this.floor = Blocks.boulder;
                };
            };

            if(this.floor != null && this.floor != Blocks.basalt && this.floor != Blocks.basalt && this.floor.asFloor().hasSurface()){
                var noise = this.noiseOct(x + 782, y, 5, 0.75, 260);
                if(noise > 0.72){
                    this.floor = noise > 0.78 ? Blocks.water : (this.floor == Blocks.darksand ? Blocks.magmarock : Blocks.hotrock);
                    this.ore = Blocks.air;
                }else if(noise > 0.67){
                    this.floor = (this.floor == Blocks.darksand ? this.floor : Blocks.darksand);
                    this.ore = Blocks.air;
                };
            };
        });
*/
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
            state.rules.winWave = this.sector.info.winWave = 10 + 5 * Math.max(difficulty * 10, 1);
        };

        var waveTimeDec = 0.4;

        state.rules.waveSpacing = Mathf.lerp(60 * 65 * 2, 60 * 60 * 1, Math.floor(Math.max(difficulty - waveTimeDec, 0) / 0.8));
        state.rules.waves = this.sector.info.waves = true;
        state.rules.enemyCoreBuildRadius = 480;

        state.rules.spawns = Waves.generate(difficulty, new Rand(), state.rules.attackMode);
      
        //this.generate(tiles);
    },
    genTile(po,ti)
    {
        ti.floor = get_block(po);ti.block = ti.floor.asFloor().wall;
        if(ti.floor == Blocks.carbonStone)
        {
            ti.block = Blocks.graphiticWall; // does not work
            if(Simplex.noise3d(seed_vcar,2,0,dist_vcar,po.x,po.y,po.z) > 0.75){ti.floor = Blocks.carbonVent; ti.block = Blocks.air;}
        }
        if(Ridged.noise3d(seed_gent + 1, po.x, po.y, po.z, 2, dist_gent) > ocu){ti.block = Blocks.air;}
        if(Simplex.noise3d(seed_core,2,0,dist_core,po.x, po.y, po.z) > 0.9){ti.block = Blocks.coreZone;}

    },

    noiseOct(x, y, octaves, falloff, scl){
        var v = this.sector.rect.project(x, y).scl(5);
        return Simplex.noise3d(1, octaves, falloff, 1 / scl, v.x, v.y, v.z);
    },

    postGenerate(tiles){
        if(this.sector.hasEnemyBase()){
            this.basegen.postGenerate();
        };
    } 
})