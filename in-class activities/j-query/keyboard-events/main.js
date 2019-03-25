$(document).on('keypress', function(e) {
  var key = e.key;
  var img;
  var text;

  console.log('keypress:', key);

  if ( key == 'a' ) {
    img = 'https://78.media.tumblr.com/98d1d2f0016b6a51c601bd880712ee69/tumblr_p5qpao2HR41wial1vo3_400.gif';
  } else if ( key == 'b' ) {
    img = 'https://66.media.tumblr.com/96e89eabd34fc7822cc66273e0f3c5cf/tumblr_p6psqvo1XS1x9jco3o2_400.gif';
  } else if ( key == 'c' ) {
    img = 'https://i.imgur.com/mbqP84q.gif';
  }  else if ( key == 'd' ) {
    img = 'https://i.imgur.com/KJ4KzpM.gif?1';
  } else if ( key == 'e' ) {
    img = 'https://i.imgur.com/TvT4dRI.gif?1';
  } else if ( key == 'f' ) {
    img = 'https://i.imgur.com/U6E5DDS.gif';
  } else if ( key == 'g' ) {
    img = 'https://media.tenor.com/images/bc7ef6b469189dd6f2a817f8919e2056/tenor.gif';
  }

  // etc.

  if ( img ) {
    $('body').append('<img src="' + img + '" style="position: fixed; top: '+ Math.random() * 100 + '%; left: ' + Math.random() * 100 + '%; transform: translate(-50%, -50%); max-width: 300px;">');
  } else {
    $('body').append('<h2 style="position: fixed; top: '+ Math.random() * 100 + '%; left: ' + Math.random() * 100 + '%; transform: translate(-50%, -50%); font-size: ' + Math.random() * 200 + 'px;">' + key + '</h2>');
  }
});