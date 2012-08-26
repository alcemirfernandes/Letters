require( [	'jquery',	'./letters'], 
function ( 	$, 			Letters ) {

	$(window).on( {
		'keydown' : function (evnt) { Letters.expand( evnt.which, true ) },
		'keyup' : function (evnt) { Letters.expand( evnt.which, false ) }
	} );

} );