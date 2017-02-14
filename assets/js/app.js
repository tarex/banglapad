(function($) {
	$.extend( $.ime.languages, {
		'bn': {
			autonym: 'বাংলা',
			inputmethods: [ 'bn-avro']
		},
	});
  $.ime.preferences.setLanguage( "bn" );
	$.ime.preferences.setIM('bn-avro');
	$("#banglapad").ime();
  new Clipboard('.btn');

  $('.shareButton').click(function() {
    FB.login(function(){
      FB.api('/me/feed', 'post', {message: $('#banglapad').val()});
    }, {scope: 'publish_actions'});
  });
})(jQuery);
