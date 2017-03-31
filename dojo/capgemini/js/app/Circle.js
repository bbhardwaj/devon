define('app/Circle',['dojo/_base/declare'],function(declare){
		
	var Circle = declare('app.Circle',[],{
		radius:20,
		area:function(){
			return this.radius*this.radius*Math.PI;
		}
	});

	return Circle;
});

