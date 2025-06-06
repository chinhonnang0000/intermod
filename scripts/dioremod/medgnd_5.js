
const medGndT5 = extend(UnitType, "goblin", {
});
medGndT5.constructor = () => extend(LegsUnit, {});
////register(medGndT5);
//medGndT5.defaultController = medGndAI;
medGndT5.targetFlag = BlockFlag.core;

const goblinTorpedoFrag = extend(BasicBulletType, {
    update(b){
        this.super$update(b);
        Units.nearby(b.team, b.x, b.y, 4, cons(unit => {
			if(unit.healthf() < 1 && unit != b.owner && !unit.dead){
				unit.health += (0.1 + 2.0 * (1 - (unit.dst(b) / 4)));
				unit.clampHealth();
				if (unit.healthf() == 1){
					Fx.healWaveDynamic.at(unit.x, unit.y, unit.hitSize);
				}
			}
		}));
    },
	
});
goblinTorpedoFrag.lifetime = 80;
goblinTorpedoFrag.damage = 12;
goblinTorpedoFrag.tileDamageMultiplier = 0.5;
goblinTorpedoFrag.width = 4;
goblinTorpedoFrag.height = 4;
goblinTorpedoFrag.lightRadius = 4;
goblinTorpedoFrag.lightOpacity = 1.15;
goblinTorpedoFrag.shrinkY = 0;
goblinTorpedoFrag.shrinkX = 0;
goblinTorpedoFrag.despawnEffect = Fx.pointHit;
goblinTorpedoFrag.hitEffect = Fx.smeltsmoke;
goblinTorpedoFrag.shootEffect = Fx.shootHeal;
goblinTorpedoFrag.speed = 1.2;
goblinTorpedoFrag.drag = 0.01;
goblinTorpedoFrag.frontColor = Color.valueOf("#EDF3A9");
goblinTorpedoFrag.hitColor = Color.valueOf("#EDF3A9");
goblinTorpedoFrag.backColor = Color.valueOf("#aaee77");
goblinTorpedoFrag.lightColor = Color.valueOf("#aaff77");
goblinTorpedoFrag.pierce = true;
goblinTorpedoFrag.pierceBuilding = true;
//goblinTorpedoFrag.hittable = false;
goblinTorpedoFrag.reflectable = false;
//goblinTorpedoFrag.absorbable = false;
goblinTorpedoFrag.sprite = "diamond-ore-diamondbullet";
const goblinTorpedoExplosion = Effect(20, e => {
	Draw.color(Color.valueOf("#CBD97F"), Color.valueOf("#9CB664"), Mathf.randomSeed(e.id));
    Lines.stroke(e.fout() * 2.75);
	Lines.circle(e.x, e.y, e.fin() * 24);
    Lines.stroke(e.fout() * 1.25);
	Lines.circle(e.x, e.y, 12 + e.fin() * 18);
    const dergtx = new Floatc2({get(x, y){
		Draw.color(Color.valueOf("#CBD97F"), Color.valueOf("#9CB664"), Mathf.randomSeed(e.id + Mathf.angle(x, y)));
		Fill.circle(e.x + x, e.y + y, e.fout() * 4.5);
    }}) 
    Angles.randLenVectors(e.id, 12, 5 + 15 * e.finpow(), e.rotation, 360, dergtx);
    const sxbtsch = new Floatc2({get(x, y){
		Draw.color(Color.valueOf("#CBD97F"), Color.valueOf("#9CB664"), Mathf.randomSeed(e.id + Mathf.angle(x, y) + 1));
		Fill.circle(e.x + x, e.y + y, e.fout() * 1.5);
    }}) 
    Angles.randLenVectors(e.id + 1, 6, 12 + 12 * e.fin(), e.rotation, 360, sxbtsch);
});
const goblinTorpedo = extend(BasicBulletType, {
    despawned(b){
        Units.nearby(b.team, b.x, b.y, 30, cons(unit => {
			if(unit.healthf() < 1 && unit != b.owner && !unit.dead){
				unit.health += Math.max(5.0,(65.0 * (1 - (unit.dst(b) / 30))));
				unit.clampHealth();
				if (unit.healthf() == 1){
					Fx.healWaveDynamic.at(unit.x, unit.y, unit.hitSize);
				}
			}
		}));
        this.super$despawned(b);
    },
	
});
goblinTorpedo.lifetime = 55;
goblinTorpedo.damage = 20;
goblinTorpedo.splashDamage = 30;
goblinTorpedo.splashDamageRadius = 25;
goblinTorpedo.tileDamageMultiplier = 0.5;
goblinTorpedo.width = 16;
goblinTorpedo.height = 16;
goblinTorpedo.lightRadius = 17;
goblinTorpedo.lightOpacity = 1.15;
goblinTorpedo.shrinkY = 0;
goblinTorpedo.shrinkX = 0.5;
goblinTorpedo.despawnEffect = Fx.shockwave;
goblinTorpedo.hitEffect = goblinTorpedoExplosion;
goblinTorpedo.hitSound = Sounds.explosion;
goblinTorpedo.trailEffect = Fx.mine;
goblinTorpedo.speed = 6.7;
goblinTorpedo.fragBullets = 8;
goblinTorpedo.fragBullet = goblinTorpedoFrag;
goblinTorpedo.fragLifeMin = 0.2;
goblinTorpedo.fragVelocityMin = 1 / 7;
goblinTorpedo.fragVelocityMax = 11 / 6;
//goblinTorpedo.collidesAir = true;
goblinTorpedo.collides = true;
goblinTorpedo.reflectable = true;
goblinTorpedo.trailChance = 1;
goblinTorpedo.frontColor = Color.valueOf("#EDF3A9");
goblinTorpedo.trailColor = Color.valueOf("#EDF3A9");
goblinTorpedo.hitColor = Color.valueOf("#66dd88");
goblinTorpedo.backColor = Color.valueOf("#44ee77");
goblinTorpedo.lightColor = Color.valueOf("#aaff77");
goblinTorpedo.sprite = "diamond-ore-diamondbomb";
const medGndT5weaponA = extend(Weapon, {
	name: "diamond-ore-goblin-launcher",
	reload: 72,
	cooldownTime: 18,
	shots: 1,
	shootY: 5,
	inaccuracy: 0,
	recoil: 0,
	x: 16,
	y: 16,
	shootCone: 2,
	rotateSpeed: 4,
	rotate: true,
	mirror: true,
	soundPitchMin: 0.67,
	soundPitchMax: 0.83,
	top: false,
	shootSound: Sounds.railgun,
	bullet: goblinTorpedo
});
const medGndT5weaponB = extend(Weapon, {
	name: "diamond-ore-goblin-launcher",
	reload: 72,
	cooldownTime: 18,
	shots: 1,
	shootY: 5,
	inaccuracy: 0,
	recoil: 0,
	x: -16,
	y: -16,
	shootCone: 2,
	rotateSpeed: 4,
	rotate: true,
	mirror: true,
	soundPitchMin: 0.67,
	soundPitchMax: 0.83,
	top: false,
	shootSound: Sounds.railgun,
	bullet: goblinTorpedo
});
const medGndT5weaponC = extend(Weapon, {
	name: "diamond-ore-goblin-launcher",
	reload: 72,
	cooldownTime: 18,
	shots: 1,
	shootY: 5,
	inaccuracy: 0,
	recoil: 0,
	x: 22,
	y: 0,
	shootCone: 2,
	rotateSpeed: 4,
	rotate: true,
	mirror: true,
	soundPitchMin: 0.67,
	soundPitchMax: 0.83,
	top: false,
	shootSound: Sounds.railgun,
	bullet: goblinTorpedo
});
const medGndT5weaponD = extend(Weapon, {
	name: "diamond-ore-goblin-launcher",
	reload: 72,
	cooldownTime: 18,
	shots: 1,
	shootY: 5,
	inaccuracy: 0,
	recoil: 0,
	x: -22,
	y: 0,
	shootCone: 2,
	rotateSpeed: 4,
	rotate: true,
	mirror: false,
	soundPitchMin: 0.67,
	soundPitchMax: 0.83,
	top: false,
	shootSound: Sounds.railgun,
	bullet: goblinTorpedo
});
const medGndT5weaponE = extend(Weapon, {
	name: "diamond-ore-goblin-launcher",
	reload: 72,
	cooldownTime: 18,
	shots: 1,
	shootY: 5,
	inaccuracy: 0,
	recoil: 0,
	x: 0,
	y: 22,
	shootCone: 2,
	rotateSpeed: 4,
	rotate: true,
	mirror: true,
	soundPitchMin: 0.67,
	soundPitchMax: 0.83,
	top: false,
	shootSound: Sounds.railgun,
	bullet: goblinTorpedo
});
const medGndT5weaponF = extend(Weapon, {
	name: "diamond-ore-goblin-launcher",
	reload: 72,
	cooldownTime: 18,
	shots: 1,
	shootY: 5,
	inaccuracy: 0,
	recoil: 0,
	x: 0,
	y: -22,
	shootCone: 2,
	rotateSpeed: 4,
	rotate: true,
	mirror: false,
	soundPitchMin: 0.67,
	soundPitchMax: 0.83,
	top: false,
	shootSound: Sounds.railgun,
	bullet: goblinTorpedo
});
const goblinBombHealExplosion = Effect(30, e => {
	Draw.color(Color.valueOf("#CBD97F"), Color.valueOf("#9CB664"), Mathf.randomSeed(e.id));
    Lines.stroke(e.fout() * 2.75);
	Lines.circle(e.x, e.y, e.fin() * 136);
    Lines.stroke(e.fout() * 1.25);
	Lines.circle(e.x, e.y, 24 + e.fin() * 160);
    const dergtx = new Floatc2({get(x, y){
		Draw.color(Color.valueOf("#CBD97F"), Color.valueOf("#9CB664"), Mathf.randomSeed(e.id + Mathf.angle(x, y)));
		Fill.circle(e.x + x, e.y + y, e.fout() * 4.5);
    }}) 
    Angles.randLenVectors(e.id, 36, 16 + 120 * e.finpow(), e.rotation, 360, dergtx);
    const sxbtsch = new Floatc2({get(x, y){
		Draw.color(Color.valueOf("#CBD97F"), Color.valueOf("#9CB664"), Mathf.randomSeed(e.id + Mathf.angle(x, y) + 1));
		Fill.circle(e.x + x, e.y + y, e.fout() * 1.5);
    }}) 
    Angles.randLenVectors(e.id + 1, 18, 32 + 128 * e.fin(), e.rotation, 360, sxbtsch);
});
const goblinBombHeal = extend(BasicBulletType, {
    update(b){
        this.super$update(b);
        Units.nearby(b.team, b.x, b.y, 45, cons(unit => {
			if(unit.healthf() < 1 && unit != b.owner && !unit.dead){
				unit.health += (2.5 + 7.5 * (1 - (unit.dst(b) / (unit.isFlying() ? 45 : 22.5))));
				unit.clampHealth();
				if (unit.healthf() == 1){
					Fx.healWaveDynamic.at(unit.x, unit.y, unit.hitSize);
				}
			}
		}));
    },
    despawned(b){
        Units.nearby(b.team, b.x, b.y, 144, cons(unit => {
			if(unit.healthf() < 1 && unit != b.owner && !unit.dead){
				unit.health += Math.max(5.0,(600.0 * (1 - (unit.dst(b) / (unit.isFlying() ? 144 : 72)))));
				unit.clampHealth();
				if (unit.healthf() == 1){
					Fx.healWaveDynamic.at(unit.x, unit.y, unit.hitSize);
				}
			}
		}));
        this.super$despawned(b);
    }
	
});
goblinBombHeal.lifetime = 60;
goblinBombHeal.damage = 12;
goblinBombHeal.tileDamageMultiplier = 0.5;
goblinBombHeal.width = 12;
goblinBombHeal.height = 12;
goblinBombHeal.lightRadius = 30;
goblinBombHeal.lightOpacity = 1.15;
goblinBombHeal.shrinkY = -1;
goblinBombHeal.shrinkX = -1;
goblinBombHeal.despawnEffect = Fx.healWave;
goblinBombHeal.hitEffect = goblinBombHealExplosion;
goblinBombHeal.speed = 0;
goblinBombHeal.drag = 0.01;
goblinBombHeal.frontColor = Color.valueOf("#EDF3A9");
goblinBombHeal.hitColor = Color.valueOf("#EDF3A9");
goblinBombHeal.backColor = Color.valueOf("#aaee77");
goblinBombHeal.lightColor = Color.valueOf("#aaff77");
goblinBombHeal.collides = false;
goblinBombHeal.collidesAir = false;
goblinBombHeal.keepVelocity = false;
goblinBombHeal.hittable = false;
goblinBombHeal.reflectable = false;
goblinBombHeal.absorbable = false;
goblinBombHeal.hitSound = Vars.tree.loadSound("goblinHealBombBoom");
goblinBombHeal.sprite = "diamond-ore-diamondshell";
goblinBombHeal.splashDamage = 300;
goblinBombHeal.splashDamageRadius = 144;
const goblinBombExplosion = Effect(18, e => {
	Draw.color(Color.valueOf("#CBD97F"), Color.valueOf("#EDF3A9"), Mathf.randomSeed(e.id));
    Lines.stroke(e.fout() * 2);
	Lines.circle(e.x, e.y, e.fin() * 70);
	Lines.circle(e.x, e.y, e.fin() * 105);
	Lines.circle(e.x, e.y, e.fin() * 140);
	Lines.circle(e.x, e.y, e.fin() * 175);
    const dergtx = new Floatc2({get(x, y){
		Draw.color(Color.valueOf("#CBD97F"), Color.valueOf("#EDF3A9"), Mathf.randomSeed(e.id + Mathf.angle(x, y)));
		Fill.circle(e.x + x, e.y + y, e.fout() * Mathf.randomSeed(e.id + Mathf.angle(x, y), 15, 30));
    }}) 
    Angles.randLenVectors(e.id, 18, 40 + 40 * e.finpow(), e.rotation, 360, dergtx);
    const sxbtsch = new Floatc2({get(x, y){
		Draw.color(Color.valueOf("#CBD97F"), Color.valueOf("#EDF3A9"), Mathf.randomSeed(e.id + Mathf.angle(x, y) + 1));
		Fill.circle(e.x + x, e.y + y, e.fout() * 9);
    }}) 
    Angles.randLenVectors(e.id + 1, 27, 72 + 72 * e.fin(), e.rotation, 360, sxbtsch);
});
const goblinBombTrail = Effect(45, e => {
	Draw.color(Color.valueOf("#CBD97F"), Color.valueOf("#EDF3A9"), Mathf.randomSeed(e.id));
    const dergtx = new Floatc2({get(x, y){
		Fill.circle(e.x + x, e.y + y, e.fout() * Mathf.randomSeed(e.id, 1, 4));
    }}) 
    Angles.randLenVectors(e.id, 6, Mathf.randomSeed(e.id, 5, 9) * e.fout(), e.rotation + (Mathf.randomSeed(e.id, -90, 90) * e.finpow()), 360,dergtx);
});
const goblinBomb = extend(ArtilleryBulletType, {
    update(b){
		var airSlope = 0.5 - Math.abs(b.fin() - 0.5);
		var groundSlope = Math.abs(b.fin() - 0.5);
        Units.nearby(b.team, b.x, b.y, 15, cons(unit => {
			if(unit.healthf() < 1 && unit != b.owner && !unit.dead){
				unit.health += ((unit.isFlying() ? airSlope : groundSlope) * Math.max(0, (8.75 * (1 - (unit.dst(b) / 15)))));
				unit.clampHealth();
				if (unit.healthf() == 1){
					Fx.healWaveDynamic.at(unit.x, unit.y, unit.hitSize);
				}
			}
		}));
        this.super$update(b);
    },
    despawned(b){
        Units.nearby(b.team, b.x, b.y, 64, cons(unit => {
			if(unit.healthf() < 1 && unit != b.owner && !unit.dead){
				unit.health += Math.max(5.0,(90.0 * (1 - (unit.dst(b) / (unit.isFlying() ? 64 : 32)))));
				unit.clampHealth();
				if (unit.healthf() == 1){
					Fx.healWaveDynamic.at(unit.x, unit.y, unit.hitSize);
				}
			}
		}));
		goblinBombHeal.create(b.owner, b.team, b.x, b.y, 0, 1, 1);
        this.super$despawned(b);
    }
	
});
goblinBomb.lifetime = 200;
goblinBomb.damage = 300;
goblinBomb.splashDamage = 250;
goblinBomb.splashDamageRadius = 200;
goblinBomb.tileDamageMultiplier = 0.5;
goblinBomb.width = 20;
goblinBomb.height = 20;
goblinBomb.lightRadius = 17;
goblinBomb.lightOpacity = 1.15;
goblinBomb.shrinkY = 0;
goblinBomb.shrinkX = 0.75;
goblinBomb.despawnEffect = Fx.greenBomb;
goblinBomb.hitEffect = goblinBombExplosion;
goblinBomb.hitSound = Vars.tree.loadSound("goblinPlasmaBoom");
goblinBomb.trailEffect = goblinBombTrail;
goblinBomb.shootEffect = Fx.healWave;
goblinBomb.smokeEffect = Fx.shootBigSmoke;
goblinBomb.speed = 3;
//goblinBomb.collidesAir = true;
goblinBomb.reflectable = false;
goblinBomb.trailChance = 1;
goblinBomb.frontColor = Color.valueOf("#EDF3A9");
goblinBomb.hitColor = Color.valueOf("#66dd88");
goblinBomb.backColor = Color.valueOf("#44ee77");
goblinBomb.lightColor = Color.valueOf("#aaff77");
goblinBomb.sprite = "diamond-ore-diamondbullet";

const medGndT5weaponG = extend(Weapon, {
	name: "diamond-ore-goblin-bomb",
	reload: 275,
	cooldownTime: 275,
	heatColor: Color.valueOf("#EDF3A9"),
	shots: 1,
	inaccuracy: 0,
	recoil: 0,
	x: 0,
	y: 0,
	shootY: 0,
	shootCone: 1,
	rotateSpeed: 3,
	ignoreRotation: true,
	rotate: true,
	mirror: false,
	soundPitchMin: 0.57,
	soundPitchMax: 0.63,
	top: true,
	shootSound: Sounds.explosionbig,
	bullet: goblinBomb
});
//medGndT5weaponG,

medGndT5.weapons.add(medGndT5weaponG);
medGndT5.weapons.add(medGndT5weaponA);
medGndT5.weapons.add(medGndT5weaponB);
medGndT5.weapons.add(medGndT5weaponC);
medGndT5.weapons.add(medGndT5weaponD);
medGndT5.weapons.add(medGndT5weaponE);
medGndT5.weapons.add(medGndT5weaponF);
