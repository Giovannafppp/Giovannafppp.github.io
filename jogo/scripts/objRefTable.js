const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.solid,
		C3.Behaviors.scrollto,
		C3.Behaviors.Bullet,
		C3.Behaviors.wrap
	];
};
self.C3_JsPropNameTable = [
	{fundo: 0},
	{Sólido: 0},
	{chão: 0},
	{CentrarEm: 0},
	{Projétil: 0},
	{DarAVolta: 0},
	{moto: 0}
];

self.InstanceType = {
	fundo: class extends self.ISpriteInstance {},
	chão: class extends self.ISpriteInstance {},
	moto: class extends self.ISpriteInstance {}
}