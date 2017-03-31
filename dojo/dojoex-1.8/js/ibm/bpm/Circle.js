define("ibm/bpm/Circle",["dojo/_base/declare"],function(declare){

		return declare("ibm.bpm.Circle",null,{
		
			color:'red',
			radius:10,
			constructor:function(){
				console.log("In Circle.constructor()");
			},
			calcArea:function(){
				return this.radius*this.radius*Math.PI;
			}
		
		});
		

});