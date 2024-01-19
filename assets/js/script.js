$(document).ready(function() {
  var buttons = $('.btn');
  var numButtons = buttons.length;
  var isOpen = false;
  var circleRadius = 50;
  var distanceFromCenter = 30;

  $('#overlay').on('click', function() {
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  $('.btn').on('click', function() {
    $('.btn').removeClass('active');
    $(this).addClass('active');
  });

  function openMenu() {
    buttons.each(function(index) {
      var angle = index * (360 / numButtons);
      var radians = angle * (Math.PI / 180);
      var finalX = Math.cos(radians) * distanceFromCenter;
      var finalY = Math.sin(radians) * distanceFromCenter;

      $(this).css({
        'z-index': 1,
        'transform': 'translate(-50%, -50%) translate(' + finalX + 'vh, ' + finalY + 'vh) scale(2)',
        'transition': 'transform 0.5s ease ' + (index * 0.1) + 's',
      }).addClass('visible');
    });

    isOpen = true;
  }

  function closeMenu() {
    buttons.each(function(index) {
      $(this).css({
        'transform': 'translate(-50%, -50%) translate(0, 0) scale(0)',
        'transition': 'transform 0.5s ease ' + ((numButtons - index - 1) * 0.1) + 's',
      }).removeClass('visible').removeClass('active');
    });

    isOpen = false;
  }
});
