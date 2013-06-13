( function ( $ ) {
	'use strict';

	$.extend( $.ime.sources, {
		
		'bn-avro': {
			name: 'Avro',
			source: 'bn-avro.js'
		},

	} );

	$.extend( $.ime.languages, {
		
		'bn': {
			autonym: 'বাংলা',
			inputmethods: [ 'bn-avro']
		},

	} );

}( jQuery ) );
