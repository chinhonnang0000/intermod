Events.on(ContentInitEvent, e => { Vars.content.planet("intermod-intm_wisp_wisa").generator = wisagen;})

function arr_wisp_wisa(a,b)
{
    var c = Math.floor(a); var d = Math.floor(b); 
    if(c == 0)
    {   if(d==0){return Blocks.water} else if(d==1){return Blocks.basalt;} else if(d==2){return Blocks.basalt;} else if(d==3){return Blocks.basalt;} else if(d==4){return Blocks.basalt;} 
        else if(d==5){return Blocks.basalt;} else if(d==6){return Blocks.darksand;} else if(d==7){return Blocks.darksand;} else if(d==8){return Blocks.darksand;} else if(d==9){return Blocks.darksand;}
        else if(d==10){return Blocks.basalt;} else if(d==11){return Blocks.stone;} else if(d==12){return Blocks.stone;}
    }
    else if(c==1)
    {   if(d==0){return Blocks.water;} else if(d==1){return Blocks.basalt} else if(d==2){return Blocks.basalt} else if(d==3){return Blocks.basalt} else if(d==4){return Blocks.darksand}
        else if(d==5){return Blocks.darksand} else if(d==6){return Blocks.darksand} else if(d==7){return Blocks.darksand} else if(d==8){return Blocks.darksand} else if(d==9){return Blocks.basalt}
        else if(d==10){return Blocks.stone} else if(d==11){return Blocks.stone} else if(d==12){return Blocks.stone}
    }
    else if(c==2)
    {   if(d==0){return Blocks.water} else if(d==1){return Blocks.basalt} else if(d==2){return Blocks.basalt} else if(d==3){return Blocks.darksand} else if(d==4){return Blocks.salt}
        else if(d==5){return Blocks.darksand} else if(d==6){return Blocks.darksand} else if(d==7){return Blocks.darksand} else if(d==8){return Blocks.darksand} else if(d==9){return Blocks.basalt}
        else if(d==10){return Blocks.stone} else if(d==11){return Blocks.stone} else if(d==12){return Blocks.stone}
   }
   else if(c==3)
   {    if(d==0){return Blocks.water} else if(d==1){return Blocks.darksandWater} else if(d==2){return Blocks.darksand} else if(d==3){return Blocks.sand} else if(d==4){return Blocks.sand} 
        else if(d==5){return Blocks.sand} else if(d==6){return Blocks.darksand} else if(d==7){return Blocks.stone} else if(d==8){return Blocks.stone} else if(d==9){return Blocks.stone}
        else if(d==10){return Blocks.snow} else if(d==11){return Blocks.iceSnow} else if(d==12){return Blocks.ice}
   }
   else if(c==4)
   {    if(d==0){return Blocks.deepWater} else if(d==1){return Blocks.water} else if(d==2){return Blocks.darksandWater} else if(d==3){return Blocks.darksand} else if(d==4){return Blocks.salt}
        else if(d==5){return Blocks.darksand} else if(d==6){return Blocks.darksand} else if(d==7){return Blocks.basalt} else if(d==8){return Blocks.snow} else if(d==9){return Blocks.snow}
        else if(d==10){return Blocks.snow} else if(d==11){return Blocks.snow} else if(d==12){return Blocks.ice}
   }
   else if(c==5)
    {   if(d ==0){return Blocks.deepWater} else if(d==1){return Blocks.water;} else if(d==2){return Blocks.darksandWater;} else if(d==3){return Blocks.darksand;} else if(d==4){return Blocks.darksand;}
        else if(d==5){return Blocks.darksand;} else if(d==6){return Blocks.basalt} else if(d==7){return Blocks.iceSnow;} else if(d==8){return Blocks.snow;} else if(d==9){return Blocks.snow;}
        else if(d==10){return Blocks.ice}  else if(d==11){return Blocks.snow;} else if(d==12){return Blocks.ice} 
   }
   else if(c==6)
   {    if(d==0){return Blocks.deepWater} else if(d==2){return Blocks.darksandWater;} else if(d==2){return Blocks.darksand} else if(d==3){return Blocks.darksand} else if(d==4){return Blocks.basalt}
        else if(d==5){return Blocks.basalt} else if(d==6){return Blocks.snow;} else if(d==7){return Blocks.basalt;} else if(d==8){return Blocks.basalt;} else if(d==9){return Blocks.basalt;} 
        else if(d==10){return Blocks.ice;} else if(d==11){return Blocks.snow;} else if(d==12){return Blocks.ice;} 
   }
    else if(c==7)
    {   if(d==0){return Blocks.water;} else if(d==1){return Blocks.basalt;} else if(d==2){return Blocks.basalt;} else if(d==3){return Blocks.basalt;} else if(d==4){return Blocks.basalt;}
        else if(d==5){return Blocks.basalt;} else if (d==6){return Blocks.basalt;} else if(d==7){return Blocks.hotrock;} else if(d==8){return Blocks.basalt;} else if(d==9){return Blocks.snow;}
        else if(d==10){return Blocks.snow;} else if(d==11) {return Blocks.ice} else if(d==12) {return Blocks.ice;}
    }
    else if(c==8)
    {   if(d==0){return Blocks.basalt} else if(d==1){return Blocks.basalt} else if(d==2){return Blocks.basalt;} else if(d==3){return Blocks.basalt;} else if(d==4){return Blocks.basalt;}
        else if(d==5){return Blocks.dirt;} else if(d==6){return Blocks.snow;} else if(d==7){return Blocks.snow;} else if(d==8){return Blocks.snow;} else if(d==9){return Blocks.ice;} 
        else if(d==10){return Blocks.snow;} else if(d==11){return Blocks.ice} else if(d==12){return Blocks.ice} 
   }
   else if(c==9)
   {    if(d==0){return Blocks.basalt} else if(d==1){return Blocks.basalt;} else if(d==2){return Blocks.basalt} else if(d==3){return Blocks.dirt} else if(d==4){return Blocks.ice} 
        else if(d==5){return Blocks.ice;} else if(d==6){return Blocks.snow;} else if(d==7){return Blocks.snow;} else if(d==8){return Blocks.snow;} else if(d==7){return Blocks.snow;} 
        else if(d==10){return Blocks.snow;} else if(d==11){return Blocks.ice} else if(d==12){return Blocks.ice} 
   }
   else if(c==10)
   {    if(d==0){return Blocks.water} else if(d==1){return Blocks.basalt} else if(d==2){return Blocks.basalt} else if(d==3){return Blocks.basalt} else if(d==4){return Blocks.basalt}
        else if(d==5){return Blocks.ice} else if(d==6){return Blocks.ice} else if(d==7){return Blocks.snow} else if(d==8){return Blocks.snow} else if(d==9){return Blocks.ice} 
        else if(d==10){return Blocks.snow;} else if(d==11){return Blocks.ice} else if(d==12){return Blocks.ice} 
   }
   else if(c==11)
   {    switch(d){
            case 0: case 1: case 2: return Blocks.basalt; case 4: return Blocks.dirt; case 5: return Blocks.basalt; case 6: Blocks.dirt; 
            case 7: return Blocks.iceSnow; case 8: return Blocks.snow; case 9: case 10: case 11: case 12: return Blocks.ice;   
        }
   }
   else if(a==12)
   {    switch(d){
            case 0: case 1: return Blocks.basalt; case 2: return Blocks.snow; case 3: return Blocks.ice; case 4: return Blocks.iceSnow; case 5: case 6: case 7: return Blocks.snow; 
            case 8: case 9: case 10: case 11: case 12: return Blocks.ice;   
        }
   }
   
   return Blocks.coreZone; 
} 

var wisagen = extend(PlanetGenerator,
{
    rawHeight(position){
      position = Tmp.v31.set(position);
      return (Mathf.pow(Simplex.noise3d(1,7, 0.5, 1 / 3, position.x, position.y, position.z), 2.3) + this.waterOffset) / (1 + this.waterOffset);
    },
    noiseOct(x, y, octaves, falloff, scl){var v = this.sector.rect.project(x, y).scl(5);   return Simplex.noise3d(1, octaves, falloff, 1 / scl, v.x, v.y, v.z);},
    getHeight(position){var height = this.rawHeight(position);return Math.max(height, this.water);},
    getColor(position){var block = this.getBlock(position);if(block == null) return Blocks.darksand.mapColor;
      Tmp.c1.set(block.mapColor).a = 1 - block.albedo;
      return Tmp.c1;
    },
    getBlock(position)
    {
        var height = this.rawHeight(position);
        Tmp.v31.set(position);
        
        position = Tmp.v33.set(position).scl(5);
        var rad = 5;    var temp = Mathf.clamp(Math.abs(position.y * 2) / rad);
        var tnoise = Simplex.noise3d(1, 7, 0.56, 1 / 3, position.x, position.y + 999, position.z);
        
        temp = Mathf.lerp(temp, tnoise, 0.5);
        height *= 1.2;
        height = Mathf.clamp(height);
var a = Mathf.clamp(Math.floor(temp * 13),0,12);
var b = Mathf.clamp(Math.floor(height * 13),0,12);
        return arr_wisp_wisa(a,b);
    },
    genTile(position, tile){tile.floor = this.getBlock(position);tile.block = tile.floor.asFloor().wall;},
    
    generate(tiles,sec)
    {
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
                wisagen.brush(wisagen.pathfind(this.x, this.y, to.x, to.y, tile => (tile.solid() ? 5 : 0) + wisagen.noiseOct(tile.x, tile.y, 1, 1, 1 / nscl) * 60, Astar.manhattan), stroke);
            }
        };
        
        const setRoom = (x, y, radius) => {
            var room = Object.create(Room);
            room.x = x; room.y = y;
            room.radius = radius;
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
        var ores = Seq.with(Vars.content.getByName(ContentType.block, "intermod-magic_ruins"));
        var poles = Math.abs(this.sector.tile.v.y);  var nmag = 0.5;var scl = 1;var addscl = 1.3;
        if(Simplex.noise3d(1, 2, 0.5, scl, this.sector.tile.v.x, this.sector.tile.v.y, this.sector.tile.v.z) * nmag + poles > 0.7 * addscl){
            ores.add(Vars.content.getByName(ContentType.block, "intermod-magic_ruins"));
        };
        if(Simplex.noise3d(1, 2, 0.5, scl, this.sector.tile.v.x + 1, this.sector.tile.v.y, this.sector.tile.v.z) * nmag + poles > 0.2 * addscl){
            ores.add(Vars.content.getByName(ContentType.block, "intermod-ancient_scrap"));
        };

        var frequencies = new FloatSeq(); for(var i = 0; i < ores.size; i++){frequencies.add(rand.random(-0.1, 0.01) - i * 0.01 + poles * 0.04);};
        this.pass((x, y) => {
            if(!this.floor.asFloor().hasSurface()) return;
            var offsetX = x - 4, offsetY = y + 23;
            for(var i = ores.size - 1; i >= 0; i--){
                var entry = ores.get(i); var freq = frequencies.get(i);
                if(Math.abs(0.5 - this.noiseOct(offsetX, offsetY + i * 999, 2, 0.7, (40 + i * 2))) > 0.22 + i * 0.01 &&
                    Math.abs(0.5 - this.noiseOct(offsetX, offsetY - i * 999, 1, 1, (30 + i * 4))) > 0.37 + freq){
                    this.ore = entry;
                    break;
                };    
            };
            if(this.ore == Blocks.oreScrap && rand.chance(0.33)){this.floor = Blocks.metalFloorDamaged;}
        });

        this.trimDark(); this.median(2); this.tech();
        this.pass((x, y) => {//random boulder
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

        var difficulty = this.sector.threat;
        const ints = this.ints; 
        ints.clear(); ints.ensureCapacity(this.width * this.height / 4);

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
    }
}); 

var wisp_scl = 15; var wisp_sector; 
var wisp_tiles; 