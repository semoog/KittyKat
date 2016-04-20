var randomWidth = 10000;
var timer = setInterval(toggleEyelids, 1000);
var catState = {};

// $('.pageloader-img').hide();

// $('.pageloader-img').slideDown(600);

$('.kitty').on('click', function(){
    // Init
    var rand = Math.floor((Math.random()*100)+1);
    var offsetX = Math.floor((Math.random() - .5)*60);
    // Create Particle
    var heart = $('<span class="heartbeat part-' + rand + '"></span>').css({left: offsetX + 'px'});
    $('.heart-container').append(heart);
    // Remove Particle
    setTimeout(function(){
        $('.part-'+rand).remove();
    }, 1000);
});

$('.github-img').hover(function() {
  $('.github-img').css({
    'box-shadow': 'none',
    'margin-top': '1px'
  });
  $('.google-img').css({
    'margin-top': '-1px'
  });
}, function() {
  $('.github-img').css({
    'box-shadow': '0 2px 1px grey',
    'margin-top': '0'
  });
  $('.google-img').css({
    'margin-top': '0px'
  });
});

$('.google-img').hover(function() {
  $('.google-img').css({
    'box-shadow': 'none',
    'margin-top': '1px'
  });
}, function() {
  $('.google-img').css({
    'box-shadow': '0 2px 1px grey',
    'margin-top': '0'
  });
});

function blink() {
    if (catState.blinking) {
        return;
    }

    catState.blinking = true;
    $('#eyelids').show();

    setTimeout(function() {
        catState.blinking = false;
        $('#eyelids').hide();
    }, 200);
}

function toggleEyelids() {
    blink();
    clearInterval(timer);
    timer = setInterval(toggleEyelids, parseInt(Math.random() * randomWidth + 3000));
}

$('.ui-view').hide();

var view = false;

$('.shop-link').click(function() {
    // if (view) {
    //   return;
    // }
    // else{
    // $('.ui-view').toggle("slide", {
    //     direction: "up"
    // }, 300);
    // view = !view;
    // }
});

$('.inv-link').click(function() {
    // if (view) {
    //   return;
    // }
    // else{
    // $('.ui-view').toggle("slide", {
    //     direction: "up"
    // }, 300);
    // view = !view;
    // }
});

// $('.kitty').mouseenter(function() {
//   $('.ui-view').hide();
// });
