$(document).ready(function() {

  var windowHeight = $(window).height();
  
  var setHeights = function() {
    $('#hero').height(windowHeight);
    $('.title').css('line-height', shotHeight);
  }
  setHeights();

  $.jribbble.getShotsByPlayerId('jimifilipovski', function (playerShots) {
      var html = [];
      $.each(playerShots.shots, function (i, shot) {
          html.push('<div class="shot"><a href="' + shot.url + '" target="_blank">');
          html.push('<img class="shot-image" src="' + shot.image_url + '" ');
          html.push('alt="' + shot.title + '">');
          html.push('<div class="title"><span>' + shot.title + '</span></div>');
          html.push('</a></div>');
      });
      $('.dribbble-feed').html(html.join(''));
  }, {page: 1, per_page: 6});

  var userFeed = new Instafeed({
    get: 'user',
    userId: 802773,
    accessToken: '802773.467ede5.d6a2822bb3f0462c8b2cb6e1bb122178',
    limit: '10',
    resolution: 'standard_resolution',
    useHttp: 'true'
  });
  userFeed.run();

  var shotHeight = $('.shot img').height() + 'px';

  $(window).resize(_.debounce(function(){
    windowHeight = $(window).height();
    shotHeight = $('.shot img').height() + 'px';
    setHeights();
  }, 600)).resize();

})