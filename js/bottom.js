function log ( msg ) {
	if ( console )
		console.log( msg );
}

(function() {
  "use strict";

  var toggles = document.querySelectorAll(".c-hamburger");
  var $Cate = $('.site-cate');

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      if ( this.classList.contains("is-active") === true ) {
        this.classList.remove("is-active");
        $Cate.removeClass("active");
      } else {
        this.classList.add("is-active");
        $Cate.addClass("active");
      }
    });
  }

  $('#btn-up').on('click', function ( e ) {
    $(window).scrollTop(0);
    return false;
  });
  $('#btn-down').on('click', function ( e ) {
    $(window).scrollTop($(document).height());
    return false;
  });
})();

var timer;
(function() {
  if ( $('.display').size() > 0 ) {
    // main
    var
    beforeColor = '',
    colorSet = ['#BBCA2D','#FFC107','#FD92B6','#7FA8CA','#BFBFBF'],
    colorStr = function () {
      var rNum = Math.floor((Math.random() * colorSet.length));
      return colorSet[rNum];
    },
    getColor = function ( el ) {
      var color = colorStr();
      if ( color == beforeColor ) {  
        return getColor();
      } else {
        beforeColor = color;
        return color;
      }
    }
    ; 
    $('.cube').each(function ( idx ) {
      var color = getColor();
      $(this).css('background-color', color);

      var href = $(this).data('href');
      $(this).on('click', function(){
        window.location.href = href;
      });
    });
  }
  else if ( $('article').size() > 0 ) {

    var imgAry = [];
    imgAry.push('/images/title-background.jpg');
    imgAry.push('http://ts.daumcdn.net/custom/blog/100/1006037/skin/images/4.jpg');
    imgAry.push('http://ts.daumcdn.net/custom/blog/100/1006037/skin/images/6.jpg');
    imgAry.push('http://ts.daumcdn.net/custom/blog/100/1006037/skin/images/13.jpg');
    imgAry.push('http://ts.daumcdn.net/custom/blog/100/1006037/skin/images/15.jpg');
    imgAry.push('http://ts.daumcdn.net/custom/blog/100/1006037/skin/images/18.jpg');
    imgAry.push('http://ts.daumcdn.net/custom/blog/100/1006037/skin/images/20.jpg');
    imgAry.push('http://ts.daumcdn.net/custom/blog/100/1006037/skin/images/21.jpg');
    imgAry.push('http://ts.daumcdn.net/custom/blog/100/1006037/skin/images/24.jpg');
    imgAry.push('http://ts.daumcdn.net/custom/blog/100/1006037/skin/images/26.jpg');
    imgAry.push('http://ts.daumcdn.net/custom/blog/100/1006037/skin/images/30.jpg');
    imgAry.push('http://ts.daumcdn.net/custom/blog/100/1006037/skin/images/31.jpg');
    imgAry.push('http://ts.daumcdn.net/custom/blog/100/1006037/skin/images/35.jpg');
    imgAry.push('http://ts.daumcdn.net/custom/blog/100/1006037/skin/images/42.jpg');
    imgAry.push('http://ts.daumcdn.net/custom/blog/100/1006037/skin/images/47.jpg');
    imgAry.push('http://ts.daumcdn.net/custom/blog/100/1006037/skin/images/52.jpg');
    imgAry.push('http://ts.daumcdn.net/custom/blog/100/1006037/skin/images/67.jpg');
    imgAry.push('http://ts.daumcdn.net/custom/blog/100/1006037/skin/images/68.jpg');
    imgAry.push('http://ts.daumcdn.net/custom/blog/100/1006037/skin/images/69.jpg');
    imgAry.push('http://ts.daumcdn.net/custom/blog/100/1006037/skin/images/72.jpg');
    imgAry.push('http://ts.daumcdn.net/custom/blog/100/1006037/skin/images/82.jpg');

    var rNum = Math.floor((Math.random() * imgAry.length));
    var _img = new Image;
    _img.addEventListener('load', function(){
      clearTimeout(timer);
      timer = null;
      $('.page-header').css({"background-image":"url("+ imgAry[rNum] +")", "opacity":"0"}).animate({opacity: 1}, 'slow');
    });
    _img.addEventListener('error', function() {
      $('.page-header').css({"background-image":"url('/images/title-background.jpg')", "opacity":"0"}).animate({opacity: 1}, 'slow');
    });
    _img.src = imgAry[rNum];
    timer = setTimeout(function(){
      clearTimeout(timer);
      timer = null;
      $('.page-header').css({"background-color":"#bbb", "opacity":"0"}).animate({opacity: 1}, 'slow');
      //$('.page-header').css({"background-image":"url('/images/title-background.jpg')", "opacity":"0"}).animate({opacity: 1}, 'slow');
    }, 1000);

  }
})();