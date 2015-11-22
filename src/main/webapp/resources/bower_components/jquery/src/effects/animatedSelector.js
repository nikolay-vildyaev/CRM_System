define([
	"../../../..//bower_components/jquery/src/core",
	"../../..//jquery/src/selector",
	"../effects"
], function( jQuery ) {

jQuery.expr.filters.animated = function( elem ) {
	return jQuery.grep(jQuery.timers, function( fn ) {
		return elem === fn.elem;
	}).length;
};

});