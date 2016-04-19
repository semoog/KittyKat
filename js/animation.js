var randomWidth = 10000;
var timer = setInterval(toggleEyelids, 1000);
var catState = {};

function blink() {
  if(catState.blinking) {
    return;
  }

  catState.blinking = true;
  $('#eyelids').show();

  setTimeout(function () {
    catState.blinking = false;
    $('#eyelids').hide();
  }, 200);
}
function toggleEyelids() {
    blink();
    clearInterval(timer);
    timer = setInterval(toggleEyelids, parseInt(Math.random() * randomWidth + 3000));
}

// $('.ui-view').hide();

var view = false;

$('.shop-link').click(function () {
  if (!view) {
    $('.ui-view').toggle( "slide", {direction: "left" }, 1000 );
  }
  view = !view;
});

$('.inv-link').click(function () {
  if (!view) {
    $('.ui-view').toggle( "slide", {direction: "left" }, 1000 );
  }

  view = !view;
});

// $('.kitty').mouseenter(function() {
//   $('.ui-view').hide();
// });
