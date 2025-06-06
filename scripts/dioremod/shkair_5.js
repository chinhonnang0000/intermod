
const shkAirT5 = extend(UnitType, "purger", {});
shkAirT5.constructor = () => extend(UnitEntity, {});
////register(shkAirT5);
shkAirT5.targetFlag = BlockFlag.core;
//shkAirT5.ammoType = AmmoType.PowerAmmoType;
const purgerPlasmaTrail = Effect(28, e => {
	Draw.color(Color.valueOf("#ffff00"), Color.valueOf("#ffffff"), e.fin());
    const ctdf = new Floatc2({get(x, y){
		Drawf.tri(e.x + x, e.y + y, 4 * e.fout(), 8 * e.fout(), Mathf.angle(x, y));
		Drawf.tri(e.x + x, e.y + y, 4 * e.fout(), 8 * e.fout(), Mathf.angle(x, y) + 90);
		Drawf.tri(e.x + x, e.y + y, 4 * e.fout(), 8 * e.fout(), Mathf.angle(x, y) + 180);
		Drawf.tri(e.x + x, e.y + y, 4 * e.fout(), 8 * e.fout(), Mathf.angle(x, y) + 270);
    }})
    Angles.randLenVectors(e.id, 6, 8 + 15 * e.finpow(), e.rotation, 360, ctdf);
    const ncrtnvyj = new Floatc2({get(x, y){
		Fill.circle(e.x + x, e.y + y, e.fout() * 4);
    }})
    Angles.randLenVectors(e.id + 1, 3, 12, e.rotation, 360, ncrtnvyj);
});
const purgerPlasmaExplosion = Effect(34, e => {
    Draw.color(Color.valueOf("#ffff66"), Color.valueOf("#999900"), e.fin());
    Lines.stroke(e.fout() * 12);
    const d = new Floatc2({get(x, y){
    Lines.lineAngle(e.x + x, e.y + y, Mathf.angle(x, y), e.fslope() * 6 + 1 + e.fout() * 12);
    }}) 
    Angles.randLenVectors(e.id, 150, -20 + 120 * e.fin(), e.rotation, 360,d);
    Draw.color(Color.valueOf("#ffff00"), Color.valueOf("#ffffff"), Math.abs(-0.4 + e.fin() * 1.4));
    const g = new Floatc2({get(x, y){
    Fill.circle(e.x + x, e.y + y, e.fout() * 7.4);
    }}) 
    const h = new Floatc2({get(x, y){
    Fill.circle(e.x + x, e.y + y, e.fout() * 32);
    Angles.randLenVectors(e.id + 1, 3, -2 + 9 * e.fin(), e.rotation + Mathf.random(-180,180) * e.fin(), 360,g);
    }}) 
    Draw.color(Color.valueOf("#ffff66"), Color.valueOf("#bbbb00"), e.finpow());
    Angles.randLenVectors(e.id + 2, 25, -20 + 125 * e.fin(), e.rotation, 360,h);
    Lines.stroke(e.fout() * 9);
    Draw.color(Color.valueOf("#ffff00"), Color.valueOf("#ffffff"), e.finpow());
    Lines.circle(e.x, e.y, e.finpow() * 80);
});

const purgerPlasmaFragment = extend(BasicBulletType, {});
purgerPlasmaFragment.lifetime = 25;
purgerPlasmaFragment.damage = 50;
purgerPlasmaFragment.width = 15;
purgerPlasmaFragment.height = 120;
purgerPlasmaFragment.lightRadius = 200;
purgerPlasmaFragment.shrinkY = 1;
purgerPlasmaFragment.shrinkY = 1;
purgerPlasmaFragment.speed = 1.6;
purgerPlasmaFragment.despawnEffect = Fx.none;
purgerPlasmaFragment.hitEffect = Fx.hitFuse;
purgerPlasmaFragment.frontColor = Color.valueOf("#ffff77");
purgerPlasmaFragment.hitColor = Color.valueOf("#ffff77");
purgerPlasmaFragment.backColor = Color.valueOf("#ffffff");
purgerPlasmaFragment.pierce = true;
purgerPlasmaFragment.pierceBuilding = true;
purgerPlasmaFragment.hittable = false;
purgerPlasmaFragment.reflectable = false;
purgerPlasmaFragment.absorbable = false;
purgerPlasmaFragment.status = StatusEffects.shocked;
purgerPlasmaFragment.statusDuration = 300;
purgerPlasmaFragment.sprite = "diamond-ore-diamondshard";
purgerPlasmaFragment.homingPower = 0;
purgerPlasmaFragment.homingRange = 0;
purgerPlasmaFragment.hitSound = Sounds.none;

const purgerPlasma = extend(BasicBulletType, {});
purgerPlasma.lifetime = 270;
purgerPlasma.damage = 120;
purgerPlasma.width = 30;
purgerPlasma.height = 30;
purgerPlasma.lightRadius = 200;
purgerPlasma.spin = 15;
purgerPlasma.shrinkY = 0;
purgerPlasma.shrinkX = 0;
purgerPlasma.despawnEffect = Fx.instBomb;
purgerPlasma.hitEffect = purgerPlasmaExplosion;
purgerPlasma.trailEffect = purgerPlasmaTrail;
purgerPlasma.fragBullet = purgerPlasmaFragment;
purgerPlasma.lightningLength = 5;
purgerPlasma.trailChance = 1;
purgerPlasma.speed = 6;
purgerPlasma.drag = 0.002;
purgerPlasma.recoil = 2;
purgerPlasma.lightningLengthRand = 18;
purgerPlasma.lightningLength = 4;
purgerPlasma.lightning = 20;
purgerPlasma.lightningDamage = 120;
purgerPlasma.fragBullets = 65;
purgerPlasma.fragVelocityMin = 0.4;
purgerPlasma.fragVelocityMax = 5;
purgerPlasma.fragLifeMin = 0;
purgerPlasma.fragLifeMax = 1.375;
purgerPlasma.splashDamage = 500;
purgerPlasma.splashDamageRadius = 200;
purgerPlasma.frontColor = Color.valueOf("#ffff77");
purgerPlasma.backColor = Color.valueOf("#ffff77");
purgerPlasma.pierce = false;
purgerPlasma.pierceBuilding = false;
purgerPlasma.hittable = false;
purgerPlasma.reflectable = false;
purgerPlasma.absorbable = false;
purgerPlasma.status = StatusEffects.shocked;
purgerPlasma.statusDuration = 300;
purgerPlasma.sprite = "diamond-ore-plasma-sphere";
purgerPlasma.homingPower = 0.0925;
purgerPlasma.homingRange = 180;
purgerPlasma.homingDelay = 55;
purgerPlasma.hitSound = Vars.tree.loadSound("purgerPlasmaBoom");
const purgerPlasmaCharge = Effect(64, e => {
	Draw.color(Color.valueOf("#ffff00"));
    const ctdf = new Floatc2({get(x, y){
		Drawf.tri(e.x + x, e.y + y, 4 + 8 * e.fout(), 4 * e.fin(), Mathf.angle(x, y));
		Drawf.tri(e.x + x, e.y + y, 4 + 8 * e.fout(), 20 * e.fin(), Mathf.angle(x, y) + 180);
    }}) 
    Angles.randLenVectors(e.id, 6, 40 * e.fout(), e.rotation, 360, ctdf);
    Angles.randLenVectors(e.id + 1, 6, 80 * e.fout(), e.rotation, 360, ctdf);
    Angles.randLenVectors(e.id + 2, 8, 120 * e.fout(), e.rotation, 360, ctdf);
	Fill.circle(e.x, e.y, e.fin() * 20);
	Draw.color(Color.valueOf("#ffff77"));
	Fill.circle(e.x, e.y, e.fin() * 18);
	Draw.color(Color.valueOf("#ffffffs"));
	Fill.circle(e.x, e.y, e.fin() * 16);
});
purgerPlasma.shootEffect = purgerPlasmaCharge;
purgerPlasma.smokeEffect = Fx.none;

const shkAirT5weapon = extend(Weapon, {
	name: "purger-plasma",
	reload: 265,
	shots: 1,
	firstShotDelay: 60,
	inaccuracy: 0,
	x: 0,
	y: 28,
	shootCone: 1,
	rotateSpeed: 11,
	rotate: false,
	mirror: false,
	soundPitchMin: 0.95,
	soundPitchMax: 1.05,
	top: true,
	shootSound: Vars.tree.loadSound("plasmaBallShoot"),
	chargeSound: Vars.tree.loadSound("purgerCharge"),
	shootStatus: StatusEffects.unmoving,
	shootStatusDuration: 70,
	bullet: purgerPlasma
});
//	name = "purger-plasma";
shkAirT5.weapons.add(shkAirT5weapon);
