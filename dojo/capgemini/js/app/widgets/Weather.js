define('app/widgets/Weather',[
		'dojo/parser',
		'dojo/query',
		'dojo/dom-class',
		'dojo/dom-construct',
		'dijit/_WidgetBase',
		'dojo/_base/declare',
		'dojo/domReady!'],
	   function (parser,query,domClass,domConstruct,_WidgetBase,declare){
		
		return declare('app.widgets.Weather',[_WidgetBase],{

			city:'Banglore',
			minTemp:0,
			maxTemp:0,

			class:'weather',
			
			constructor:function(args){
				declare.safeMixin(this,args);
				console.info("Inside WeatherWidget constructor!!!");
			},

			buildRendering:function(){
				var nd = domConstruct.create('div');
				domConstruct.create('h1',{innerHTML:'Weather is very hot in '+this.city},nd);
				domConstruct.create('p',{innerHTML:'Minimum Temprature : '+this.minTemp},nd);
				domConstruct.create('p',{innerHTML:'Maximum Temprature : '+this.maxTemp},nd);
				domConstruct.create('button',{innerHTML:'Change'},nd);
	
				this.domNode = nd;
			},

			postCreate:function(){
				query('.weather button').on('click',function(){
					console.log("Weather changed!!!!");
				});
			}
		
		});
});
