
Events.on(ContentInitEvent, e =>
{ 
  set_random(); 
  Vars.content.planet("intermod-intm_main").generator = intm_main_generator; 
});
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
   var a = Math.floor(Mathf.clamp(temp * 50, 0, 49));
   var b = Math.floor(Mathf.clamp(hyu * 50, 0, 49));
   return arr[a][b];// arr is a 2-d array
   
}

function get_random_tiles()
{
   var a = Math.floor(Math.random()*31)
   switch(a)
   {
      case 0: return Blocks.arkyciteFloor; // not wall 
      case 1: return Blocks.arkyicStone; // not wall 
      case 2: return Blocks.basalt; // not wall
      case 3: return Blocks.beryllicStone; // yes this is floor
      case 4: return Blocks.carbonStone; // this has also been floor
      case 5: return Blocks.coreZone; 
      case 6: return Blocks.crystalFloor; 
      case 7: return Blocks.crystallineStone; // it is floor 
      case 8: return Blocks.dacite; // floor
      case 9: return Blocks.dirt; 
      case 10: return Blocks.darksand;
      case 11: return Blocks.darksandWater; 
      case 12: return Blocks.hotrock; 
      case 13: return Blocks.ice;
      case 14: return Blocks.iceSnow; 
      case 15: return Blocks.magmarock; 
      case 16: return Blocks.moss;
      case 17: return Blocks.redIce; 
      case 18: return Blocks.redStone;
      case 19: return Blocks.regolith; 
      case 20: return Blocks.rhyolite;
      case 21: return Blocks.sand;
      case 22: return Blocks.sandWater;
      case 23: return Blocks.shale; 
      case 24: return Blocks.slag;  
      case 25: return Blocks.snow;
      case 26: return Blocks.sporeMoss; 
      case 27: return Blocks.stone;
      case 28: return Blocks.tar; 
      case 29: return Blocks.water;
      case 30: return Blocks.yellowStone; 
   }
   return Blocks.coreZone; // represents error. 
}

function set_random()
{ var a=0, b=0; wos = Math.random() * 0.15; 
   arr = new Array(); 
   while(a < 50)
   {
      arr[a] = new Array(); 
      b = 0; while(b < 50)
      {
        arr[a][b] = get_random_tiles(); 
        if(arr[a][b] == Blocks.arkyciteFloor){b = b+1; arr[a][b] = Blocks.arkyicStone;} 
        else if(arr[a][b] == Blocks.darksandWater){b = b+1; arr[a][b] = Blocks.darksand;} 
        else if(arr[a][b] == Blocks.sandWater){b = b+1; arr[a][b] = Blocks.sand;} 
        else if(arr[a][b] == Blocks.slag){b = b+1;arr[a][b] = Blocks.magmaRock;   b = b+1;arr[a][b] = Blocks.hotrock;   b = b+1;arr[a][b] = Blocks.basalt;} 
        else if(arr[a][b] == Blocks.ice){b = b+1; arr[a][b] = Blocks.iceSnow; b+1; arr[a][b] = Blocks.snow;} 
        b = b+1; 
      }
      a = a+1; 
   }
   ocu = Math.random() * 0.9; 
   dist_gent = 20 + Math.random() * 15; seed_gent = Math.floor(Math.random() * 999999999);
   dist_bery = 40 + Math.random() * 20; seed_bery = Math.floor(Math.random() * 999999999); // erekir stuff
   dist_tung = 40 + Math.random() * 20; seed_tung = Math.floor(Math.random() * 999999999); // erekir stuff. 
   dist_vark = 90 + Math.random() * 20; seed_vark = Math.floor(Math.random() * 999999999); 
   dist_vcar = 90 + Math.random() * 20; seed_vcar = Math.floor(Math.random() * 999999999); 
   dist_vcry = 90 + Math.random() * 20; seed_vcry = Math.floor(Math.random() * 999999999); 
   dist_vred = 90 + Math.random() * 20; seed_vred = Math.floor(Math.random() * 999999999); 
   dist_vrhy = 90 + Math.random() * 20; seed_vrhy = Math.floor(Math.random() * 999999999); 
   dist_vyel = 90 + Math.random() * 20; seed_vyel = Math.floor(Math.random() * 999999999); 
}
function rawhyt(po)
{
    var pos = Tmp.v31.set(po);
    return Mathf.pow(Simplex.noise3d(1,7, 0.5,0.33, pos.x, pos.y, pos.z), 2.3 + wos) / (1 + wos);
}

var arr; var ocu, wos; 
var dist_bery, dist_gent, dist_tung; 
var dist_vark, dist_vcry, dist_vcar, dist_vred, dist_vrhy, dist_vyel; 
var seed_bery, seed_coal, seed_copp, seed_gent, seed_lead, seed_scra, seed_thor, seed_tita, seed_tung;
var seed_vark, seed_vcry, seed_vcar, seed_vred, seed_vrhy, seed_vyel; 

var intm_main_generator = extend(SerpuloPlanetGenerator,{
   genTile(po,ti)
   {
       ti.floor = get_block(po);ti.block = ti.floor.asFloor().wall;
       if(ti.floor == Blocks.carbonStone && Simplex.noise3d(seed_vcar,2,0,dist_vcar,po.x,po.y,po.z) > 0.75){ti.floor = Blocks.carbonVent; ti.block = Blocks.air;}
       else if(ti.floor == Blocks.arkyicStone && Simplex.noise3d(seed_vark,2,0,dist_vark,po.x,po.y,po.z) > 0.75){ti.floor = Blocks.arkyicVent; ti.block = Blocks.air;}
       else if(ti.floor == Blocks.crystallineStone && Simplex.noise3d(seed_vrhy,2,0,dist_vcry,po.x,po.y,po.z) > 0.75){ti.floor = Blocks.crystallineVent; ti.block = Blocks.air;}
       else if(ti.floor == Blocks.redStone && Simplex.noise3d(seed_vred,2,0,dist_vred,po.x,po.y,po.z) > 0.75){ti.floor = Blocks.redStoneVent; ti.block = Blocks.air;}
       else if(ti.floor == Blocks.rhyolite && Simplex.noise3d(seed_vrhy,2,0,dist_vrhy,po.x,po.y,po.z) > 0.75){ti.floor = Blocks.rhyoliteVent; ti.block = Blocks.air;}
       else if(ti.floor == Blocks.yellowStone && Simplex.noise3d(seed_vyel,2,0,dist_vyel,po.x,po.y,po.z) > 0.75){ti.floor = Blocks.yellowStoneVent; ti.block = Blocks.air;}
       // all of the above worked. 
       
       if(Simplex.noise3d(seed_bery,2,0,dist_bery,po.x,po.y,po.z) > 0.7){ti.overlay = Blocks.wallOreBeryllium;} // the script ran through here. 
       if(Simplex.noise3d(seed_tung,2,0,dist_tung,po.x,po.y,po.z) > 0.7){ti.overlay = Blocks.wallOreTungsten;}
       if(Ridged.noise3d(seed_gent + 1, po.x, po.y, po.z, 2, dist_gent) > ocu){ti.block = Blocks.air;}
   },
   generate(ti,se)
   {
      set_random(); 
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
               if(this.connected.contains(to)) return;

               this.connected.add(to);
               
               var nscl = rand.random(20, 60);
               var stroke = rand.random(4, 12);
               
               intm_main_generator.brush(intm_main_generator.pathfind(this.x, this.y, to.x, to.y, tile => (tile.solid() ? 5 : 0) + 
               intm_main_generator.noiseOct(tile.x, tile.y, 1, 1, 1 / nscl) * 60, Astar.manhattan), stroke);
           }
       };
       
       const setRoom = (x, y, radius) => {
           var room = Object.create(Room);
           room.x = x;    room.y = y;
           room.radius = radius * (1 + Math.random());
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
       ores.add(Blocks.oreCoal);ores.add(Blocks.oreCopper); ores.add(Blocks.oreLead); // basic Serpulo
       ores.add(Blocks.wallOreBeryllium);ores.add(Blocks.wallOreTungsten); // basic Erekir. 
       if(Simplex.noise3d(1, 2, 0.5, scl, this.sector.tile.v.x, this.sector.tile.v.y, this.sector.tile.v.z) * nmag + poles > 0.5 * addscl){ores.add(Blocks.wallOreThorium);};
       if(Simplex.noise3d(1, 2, 0.5, scl, this.sector.tile.v.x + 1, this.sector.tile.v.y, this.sector.tile.v.z) * nmag + poles > 0.2 * addscl){ores.add(Blocks.oreTitanium);};

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
               
               if(Math.abs(0.5 - this.noiseOct(offsetX, offsetY + i * 999, 2, 0.5, (40 + i))) > 0.2 + i * 0.01 &&
                   Math.abs(0.5 - this.noiseOct(offsetX, offsetY - i * 999, 1, 0.3, (30 + i))) > 0.3 + freq){
                   this.ore = entry;
                   break;
               };    
           };
           if(this.ore == Blocks.oreScrap && rand.chance(0.33)){this.floor = Blocks.coreZone;};
       });
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
        state.rules.spawns = Waves.generate(1.1, new Rand(), state.rules.attackMode);
   },
   noiseOct(x, y, octaves, falloff, scl){
    var v = this.sector.rect.project(x, y).scl(5);
    return Simplex.noise3d(1, octaves, falloff, 0.4/scl, v.x, v.y, v.z);
},
})

