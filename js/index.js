// manage header features
var upper_header = $('#upper-header');
var menu_toggle_input = $('#menu-toggle-input');
var upper_input = $('#upper-input');

menu_toggle_input.change(function() {
  if(this.checked) {
    upper_input.prop('checked', false);
    upper_header.removeClass('d-block');
  }
});

upper_input.change(function() {
  if(this.checked) {
    menu_toggle_input.prop('checked', false);
    upper_header.addClass('d-block');
  }
});

// manage slider
var slider_items = $('.slider__item');
var slider_dots = $('.slider__dot');
var slideIndex;



var showSlides = function(index) {
  var i;

  if (index > slider_items.length) {
    slideIndex = 1;
  }

  if (index < 1) {
    slideIndex = slider_items.length;
  }

  for (i = 0; i<slider_items.length; i++) {
    $(slider_items[i]).css('display', 'none');
  }

  for (i = 0; i<slider_dots.length; i++) {
    $(slider_dots[i]).removeClass('active');
  }

  $(slider_items[slideIndex - 1]).css('display', 'block');
  $(slider_dots[slideIndex - 1]).addClass('active');

};

slider_dots.on('click', function(e) {
  e.preventDefault();
  slideIndex = parseInt($(this).text());
  showSlides(slideIndex);
});

slideIndex = 1;
showSlides(slideIndex);








