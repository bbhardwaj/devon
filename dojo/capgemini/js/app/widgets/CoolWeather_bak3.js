define('app/widgets/CoolWeather',[
		'dojo/on',
		'dojo/parser',
		'dojo/query',
		'dojo/dom-class',
		'dojo/dom-construct',
		'dijit/_WidgetBase',
		'dijit/_TemplatedMixin',
		'dojo/_base/declare',
		'dojo/domReady!'],
	   function (on,parser,query,domClass,domConstruct,_WidgetBase,_TemplatedMixin,declare){
		
		return declare('app.widgets.CoolWeather',[_WidgetBase,_TemplatedMixin],{

			city:'Banglore',
			minTemp:0,
			maxTemp:0,

			templateString:'<div>'+
					'<h2>It is Cool Weather in <span data-dojo-attach-point=cityName>${city}</span>.</h2>'+
					'<p>Min Temp : ${minTemp}</h2>'+
					'<p>Max Temp : ${maxTemp}</h2>'+
					'<br/><button data-dojo-attach-point=actionButton>Chnage City</button>'+
				'</div>',

			class:'weather',
			
			constructor:function(args){
				declare.safeMixin(this,args);
				console.info("Inside CoolWeather constructor!!!");
			},

			postCreate:function(){
				var self = this;
				on(this.actionButton,'click',function(){
					self.city = 'GOA';
					self.cityName.innerHTML = self.city;	
					console.info("City changed!!!");
				});
			}
		
		});
});
