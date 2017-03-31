define([ "dijit/_WidgetBase", "dijit/_TemplatedMixin", "dojo/_base/declare",
		"dojo/dom-attr" ], function(_Widget, _Templated, declare, domAttr) {
	return declare("myWidgets.HelloWidget", [ _Widget, _Templated ], {
		templateString : '<div style="width:120px;background-color:gray" data-dojo-attach-point="_box"></div>',
		postCreate : function() {
			domAttr.set(this._box, "innerHTML", "<b><font color=blue>Hello, World!</font></b>");
		}
	});
});