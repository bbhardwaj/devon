define("ibm/bpm/widget/Car",
	["dojo/fx",
		"dojo/dom",
		"dijit/registry",
		"dojo/on",
		"dojo/dom-construct",
		"dijit/_WidgetBase",
		"dijit/_TemplatedMixin",
		"dojo/_base/declare",
		"dojo/parser",
		"dojo/ready",
		"dojo/text!./resources/Car.html"],
		
	function(fx,dom,registry,on,domConstruct,_WidgetBase,
			_TemplatedMixin,declare,parser,ready,carTemplate){

		
		return declare("ibm.bpm.widget.Car",[_WidgetBase,_TemplatedMixin],{
			make:'BMW',
			doors:2,
			model:'X5',
			color:'Black',
			image:'images/dodge.png',
			baseClass:'carWidget',
			
			_setMakeAttr:{node:'companyNode',type:'innerHTML'},
			_setImageAttr:{node:'imageNode',attribute:'src'},
			
			templateString:carTemplate,
						
			postCreate:function(){
				var img=this.imageNode;
				on(img,'click',function(){
					fx.wipeOut({node:img}).play();
				});			
				on(this.detailNode,'click',function(){
					fx.wipeIn({node:img}).play();
				});			
			}			
		});

});