define([
	"../../../..//bower_components/jquery/src/var/support"
], function( support ) {

support.focusinBubbles = "onfocusin" in window;

return support;

});
