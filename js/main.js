require( ['jquery', './letters'], 
function ( $, 		letters ) {

	$(window).on( {
		'keydown' : function (evnt) { letters.expand( evnt.which, true ) },
		'keyup' : function (evnt) { letters.expand( evnt.which, false ) }
	} );

} );