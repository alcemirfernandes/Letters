define( ['jquery'], 
function ($) {

	function expandLetter( key, expand ) {
		var	id = String.fromCharCode( key ).toLowerCase();

		if( key <= 90 && key >= 65 ) {
			console.log($( '#' + id ) );
			$( '#' + id ).toggleClass( 'expand', expand );
		}
	}

	return { expand: expandLetter };

} );
