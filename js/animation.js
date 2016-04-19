var randomWidth = 10000;
var timer = setInterval(toggleEyelids, 1000);
var catState = {};

$(window).load(function() {
	$(".loader").fadeOut("slow");
})

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

$('.ui-view').hide();

var view = false;

$('.shop-link').click(function () {
  // if (view) {
  //   return;
  // }
  // else{
    $('.ui-view').toggle( "slide", {direction: "up" }, 600 );
    // view = !view;
  // }
});

$('.inv-link').click(function () {
  // if (view) {
  //   return;
  // }
  // else{
    $('.ui-view').toggle( "slide", {direction: "up" }, 600 );
    // view = !view;
  // }
});

// $('.kitty').mouseenter(function() {
//   $('.ui-view').hide();
// });
