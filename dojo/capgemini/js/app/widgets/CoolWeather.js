define('app/widgets/CoolWeather',[
		'dojo/on',
		'dojo/parser',
		'dojo/query',
		'dojo/dom-class',
		'dojo/dom-construct',
		'dijit/_WidgetBase',
		'dijit/_TemplatedMixin',
		'dojo/_base/declare',
		'dojo/text!./templates/CoolWeather.html',
		'dojo/domReady!'],
	   function (on,parser,query,domClass,domConstruct,_WidgetBase,_TemplatedMixin,declare,template){
		
		return declare('app.widgets.CoolWeather',[_WidgetBase,_TemplatedMixin],{

			city:'Banglore',
			minTemp:0,
			maxTemp:0,

			_setCityAttr:{node:'cityName',type:'innerHTML'},

			templateString:template,

			class:'weather',
			
			constructor:function(args){
				declare.safeMixin(this,args);
				console.info("Inside CoolWeather constructor!!!");
			},

			postCreate:function(){
				var self = this;
				on(this.actionButton,'click',function(){
					self.set('city','GOA');
					console.info("City changed!!!");
				});
			}
		
		});
});
