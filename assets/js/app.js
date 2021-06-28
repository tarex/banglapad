(function ($) {
  $.extend($.ime.languages, {
    bn: {
      autonym: 'বাংলা',
      inputmethods: ['bn-avro'],
    },
  });
  $.ime.preferences.setLanguage('bn');
  $.ime.preferences.setIM('bn-avro');
  $('#banglapad').ime();
  new Clipboard('.btn');

  $('.shareButton').on('click', function () {
    const message = $('#banglapad').val();
    if (message.length) {
      FB.login(
        function () {
          FB.api('/me/feed', 'post', { message });
        },
        { scope: 'publish_actions' }
      );
    } else {
      alert('কিছু নাই, শেয়ার হবে না');
    }
  });

  $('.saveButton').on('click', function () {
    alert('yo');
  });
})(jQuery);
