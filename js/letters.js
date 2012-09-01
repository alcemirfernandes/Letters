/* letter app functions */
define ( [ 'require', 'jquery', 'vendor/underscore', 'vendor/backbone' ], 
function ( require ) {
	var $ = require('jquery');
		_ = require('vendor/underscore'),
		Backbone = require('vendor/backbone')
	  ;

/* * * * *
 * Models 
 */
var Letter = Backbone.Model.extend({ 
/*	initialize: function ( pass ) {
		console.log( 'pass', pass );
		console.log( 'this.start', this.start );
		console.log( 'this.id', this.id );
	}
*/});


/* * * * * * * 
 * Collections
 */
var Letters = Backbone.Collection.extend({
	model: Letter,
	initialize: function () {
		this.on( 'add', function () {
			console.log( 'added a new model' );
		} )
	}
});


/* * * * 
 * Views
 */
var LetterView = Backbone.View.extend({
	className: 'letter',
	events: {
		'typed': 'expand'
	},
	initialize: function () { 
		this.id = this.model.id;
	},
	expand: function ( big ) {
		this.$el.toggleClass( 'expand', big )
	},
	render: function () {
		this.$el.attr( 'id', this.model.id );
		this.$el.text( this.model.id );
		return this;
	}
});


/* more like a controller for the app overall */
var LettersAppView = Backbone.View.extend({
	initialize: function ( options ) {
		// set up models and views
		var alphabet = new Letters(),
			self = this;

		_.each ( 
			options.raw, 
			function ( rawLetter, indx, all ) {
				var letterModel = new Letter( rawLetter ),
					letterView = new LetterView( {model:letterModel} );

				letterModel.view = letterView;
				self.$el.append( letterView.render().$el )
				alphabet.add( letterModel );
			}
		);

		this.collection = alphabet;

		/* bind keyboard controls */
		$(window).on( {
			'keyup':   function ( e ) { self.handleKey( e.which, false ) },
			'keydown': function ( e ) { self.handleKey( e.which, true ) }
		} );
	},
	handleKey: function ( key, big ) {
		var	alphabet    = this.collection,
			id          = String.fromCharCode( key ).toLowerCase()
			whichLetter = {};

		if( key <= 90 && key >= 65 ) {
			whichLetter = alphabet.where( {id:id} )[0];
			whichLetter.view.$el.trigger( 'typed', big );
		}
	}
});


return LettersAppView;
} );
