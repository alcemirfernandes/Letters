
//$( function () {
	function expandLetter( evnt, expand ) {
		var	key = evnt.which,
			id = String.fromCharCode( key ).toLowerCase();
			console.log(key);
		if( key < 122 && key > 65 ) {
			$( '#' + id ).toggleClass( 'expand', expand );
		}
	}


	$(window).on( {
		'keydown' : function (evnt) { expandLetter( evnt, true ) },
		'keyup' : function (evnt) { expandLetter( evnt, false ) } 
	} );
	
	//} );
