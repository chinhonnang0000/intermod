const shkAirT4 = extend(UnitType, "hurricane", {
});
shkAirT4.constructor = () => extend(UnitEntity, {});
//shkAirT4.ammoType = AmmoType.PowerAmmoType;
const shkBoltTrailBig = Effect(15, e => {
	Draw.color(Color.valueOf("#ffff00"), Color.valueOf("#ffffff"), e.fin());
	Drawf.tri(e.x, e.y, 9 * e.fout(), 15 + 20 * (1 - e.finpow()), e.rotation);
	Drawf.tri(e.x, e.y, 9 * e.fout(), 15 + 20 * (1 - e.finpow()), e.rotation + 180);
    Lines.stroke(e.fout() * 2.5);
    const de = new Floatc2({get(x, y){
    Lines.lineAngle(e.x + x, e.y + y, Mathf.angle(x, y), e.fout() * 8);
    }}) 
    Angles.randLenVectors(e.id, 2, 9 * e.fout(), e.rotation, 45 * e.fout(),de);
});
const shkBoltDespBig = Effect(20, e => {
	Draw.color(Color.valueOf("#ffffff"), Color.valueOf("#ffff00"), e.fin());
	Fill.circle(e.x, e.y, e.fout() * 11);
    Lines.stroke(e.fout() * 3);
    Lines.circle(e.x, e.y, e.finpow() * 22);
});
const shkBoltHitBig = Effect(15, e => {
	Draw.color(Color.valueOf("#ffffff"), Color.valueOf("#ffff00"), e.fin());
    const ctdf = new Floatc2({get(x, y){
		Drawf.tri(e.x + x, e.y + y, 5 * e.fout(), 22 * e.fout(), Mathf.angle(x, y));
		Drawf.tri(e.x + x, e.y + y, 5 * e.fout(), 8 * e.fout(), Mathf.angle(x, y) + 180);
    }}) 
    Angles.randLenVectors(e.id, 6, 28 * e.fin(), e.rotation, 30, ctdf);
    const vyum = new Floatc2({get(x, y){
		Fill.circle(e.x + x, e.y + y, e.fout() * 4);
    }}) 
    Angles.randLenVectors(e.id + 1, 5, 28 * e.fin(), e.rotation, 30, vyum);
});
const hurricanePlasmaHit = Effect(20, e => {
    const ctdf = new Floatc2({get(x, y){
		Drawf.tri(e.x + x, e.y + y, 5 * e.fout(), 22 * e.fout(), Mathf.angle(x, y));
		Drawf.tri(e.x + x, e.y + y, 5 * e.fout(), 8 * e.fout(), Mathf.angle(x, y) + 180);
    }}) 
    Angles.randLenVectors(e.id, 14, 80 * e.fin(), e.rotation, 30, ctdf);
	Draw.color(Color.valueOf("#ffffff"), Color.valueOf("#ffff00"), e.fin());
	Fill.circle(e.x, e.y, e.fout() * 23);
    Lines.stroke(e.fout() * 5);
    Lines.circle(e.x, e.y, e.finpow() * 44);
});

const hurricanePlasmaFragment = extend(BasicBulletType, {});
hurricanePlasmaFragment.lifetime = 30;
hurricanePlasmaFragment.damage = 25;
hurricanePlasmaFragment.width = 9;
hurricanePlasmaFragment.height = 9;
hurricanePlasmaFragment.lightRadius = 12;
hurricanePlasmaFragment.shrinkY = 1;
hurricanePlasmaFragment.shrinkX = 1;
hurricanePlasmaFragment.despawnEffect = Fx.none;
hurricanePlasmaFragment.hitEffect = Fx.hitFuse;
hurricanePlasmaFragment.frontColor = Color.valueOf("#edff77");
hurricanePlasmaFragment.lightColor = Color.valueOf("#ffff77");
hurricanePlasmaFragment.backColor = Color.valueOf("#ffffff");
hurricanePlasmaFragment.pierce = true;
hurricanePlasmaFragment.pierceBuilding = true;
hurricanePlasmaFragment.hittable = false;
hurricanePlasmaFragment.reflectable = false;
hurricanePlasmaFragment.status = StatusEffects.shocked;
hurricanePlasmaFragment.statusDuration = 45;
hurricanePlasmaFragment.sprite = "diamond-ore-diamondbullet";
hurricanePlasmaFragment.hitSound = Sounds.none;

const hurricanePlasma = extend(BasicBulletType, {});
hurricanePlasma.lifetime = 40;
hurricanePlasma.damage = 120;
hurricanePlasma.width = 23;
hurricanePlasma.height = 23;
hurricanePlasma.lightRadius = 200;
hurricanePlasma.spin = 15;
hurricanePlasma.shrinkY = 0;
hurricanePlasma.shrinkX = 0;
hurricanePlasma.despawnEffect = Fx.instBomb;
hurricanePlasma.hitEffect = hurricanePlasmaHit;
hurricanePlasma.trailEffect = Fx.mineBig;
hurricanePlasma.fragBullet = hurricanePlasmaFragment;
hurricanePlasma.lightningLength = 5;
hurricanePlasma.speed = 8;
hurricanePlasma.recoil = 0.3;
hurricanePlasma.lightningLengthRand = 10;
hurricanePlasma.lightningLength = 5;
hurricanePlasma.lightning = 10;
hurricanePlasma.lightningDamage = 60;
hurricanePlasma.fragBullets = 65;
hurricanePlasma.fragVelocityMin = 0.4;
hurricanePlasma.fragVelocityMax = 5;
hurricanePlasma.fragLifeMin = 0;
hurricanePlasma.fragLifeMax = 1.375;
hurricanePlasma.splashDamage = 130;
hurricanePlasma.splashDamageRadius = 50;
hurricanePlasma.frontColor = Color.valueOf("#ffffff");
hurricanePlasma.backColor = Color.valueOf("#ffff77");
hurricanePlasma.trailColor = Color.valueOf("#ffff77");
hurricanePlasma.pierce = false;
hurricanePlasma.pierceBuilding = false;
hurricanePlasma.hittable = false;
hurricanePlasma.reflectable = false;
hurricanePlasma.absorbable = false;
hurricanePlasma.status = StatusEffects.shocked;
hurricanePlasma.statusDuration = 15;
hurricanePlasma.sprite = "diamond-ore-plasma-sphere";
hurricanePlasma.hitSound = Vars.tree.loadSound("tempestShockBullet");

const shkStrikeBoltBig = extend(PointBulletType, {});
shkStrikeBoltBig.damage = 80;
shkStrikeBoltBig.speed = 400;
shkStrikeBoltBig.lifetime = 1;
shkStrikeBoltBig.trailSpacing = 15;
shkStrikeBoltBig.tileDamageMultiplier = 0.6;
shkStrikeBoltBig.smokeEffect = Fx.hitBulletBig;
shkStrikeBoltBig.trailEffect = shkBoltTrailBig;
shkStrikeBoltBig.shootEffect = Fx.hitFuse;
shkStrikeBoltBig.hitEffect = shkBoltHitBig;
shkStrikeBoltBig.hitSound = Sounds.spark;
shkStrikeBoltBig.despawnEffect = shkBoltDespBig;
shkStrikeBoltBig.status = StatusEffects.shocked;
shkStrikeBoltBig.statusDuration = 30;

const shkAirT4weaponA = extend(Weapon, {
	name: "diamond-ore-hurricane-bolt",
	reload: 55,
	shots: 1,
	inaccuracy: 0,
	x: 12,
	y: 13,
	shootCone: 0,
	rotateSpeed: 5,
	rotate: true,
	mirror: true,
	soundPitchMin: 0.5,
	soundPitchMax: 1.03,
	top: true,
	shootSound: Vars.tree.loadSound("strikeZapBig"),
	bullet: shkStrikeBoltBig
});
const shkAirT4weaponB = extend(Weapon, {
	name: "diamond-ore-hurricane-bolt",
	reload: 55,
	shots: 1,
	inaccuracy: 0,
	x: 7,
	y: -3,
	shootCone: 0,
	rotateSpeed: 5,
	rotate: true,
	mirror: true,
	soundPitchMin: 0.5,
	soundPitchMax: 1.03,
	top: true,
	shootSound: Vars.tree.loadSound("strikeZapBig"),
	bullet: shkStrikeBoltBig
});


const shkAirT4plasma = extend(Weapon, "hurricane-plasma", {});
shkAirT4plasma.reload = 65;
shkAirT4plasma.shots = 1;
shkAirT4plasma.inaccuracy = 0;
shkAirT4plasma.x = 0;
shkAirT4plasma.y = 16;
shkAirT4plasma.shootY = 6;
shkAirT4plasma.shootCone = 1;
shkAirT4plasma.rotateSpeed = 11;
shkAirT4plasma.rotate = false;
shkAirT4plasma.mirror = false;
shkAirT4plasma.soundPitchMin = 0.5;
shkAirT4plasma.soundPitchMax = 1.03;
shkAirT4plasma.top = true;
shkAirT4plasma.shootSound = Vars.tree.loadSound("strikeZapBig");
shkAirT4plasma.bullet = hurricanePlasma;

shkAirT4.weapons.add(
shkAirT4weaponA,
shkAirT4weaponB,
shkAirT4plasma
);
