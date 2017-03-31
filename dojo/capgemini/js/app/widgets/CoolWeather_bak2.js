define('app/widgets/CoolWeather',[
		'dojo/parser',
		'dojo/query',
		'dojo/dom-class',
		'dojo/dom-construct',
		'dijit/_WidgetBase',
		'dijit/_TemplatedMixin',
		'dojo/_base/declare',
		'dojo/domReady!'],
	   function (parser,query,domClass,domConstruct,_WidgetBase,_TemplatedMixin,declare){
		
		return declare('app.widgets.CoolWeather',[_WidgetBase,_TemplatedMixin],{

			city:'Banglore',
			minTemp:0,
			maxTemp:0,

			templateString:'<div>'+
					'<h2>It is Cool Weather in ${city}.</h2>'+
					'<p>Min Temp : ${minTemp}</h2>'+
					'<p>Max Temp : ${maxTemp}</h2>'+
				'</div>',

			class:'weather',
			
			constructor:function(args){
				declare.safeMixin(this,args);
				console.info("Inside CoolWeather constructor!!!");
			}
		
		});
});
