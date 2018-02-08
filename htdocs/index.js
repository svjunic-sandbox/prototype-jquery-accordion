$(function(){

  $('.toggle-hook').on('click', function(e){
    e.preventDefault();
    var $more = $(this).next('.toggle-more');
    $more.css('height','auto');

    var height = $more.height();

    // スピード100のときのduration
    var duration = height/100;
    if( duration < 100 ){
      duration = 100;
    } else if( duration > 300 ) {
      duration = 300;
    }

    $more.velocity('stop');
    if( !$more.hasClass('open') ) {
      $more.css('height','0');
      $more.velocity({
        height: height
      }, {
        easing  : 'swing',
        duration: duration,
        complete: function(){
          console.log('open complete');
        }
      });
    } else {
      $more.velocity({
        height: 0
      }, {
        easing  : 'swing',
        duration: duration,
        complete: function(){
          console.log('close complete');
        }
      });
    }
    $more.toggleClass('open');
  });
});
