define([ "dojo/_base/declare" ], function(declare) {
	return declare("myWidgets.Circle", null, {
		_PI : null,
		_radius : null,
		constructor : function(/* integer */radius) {
			this._radius = radius;
			this._PI = Math.PI;
		},
		getArea : function() {
			return Math.pow(this._radius, 2) * this._PI;
		},
		getCircumference : function() {
			return 2 * this._PI * this._radius;
		}
	});
});