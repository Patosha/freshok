$(function () {

  $('.slider').slick({

  });

  var containerEl1 = document.querySelector('[data-ref="top-products__list"]');
  var containerEl2 = document.querySelector('[data-ref="stock__list"]');

  var mixerTopProducts = mixitup(containerEl1, {
    controls: {
      scope: 'local'
    },
    classNames: {
      block: 'mix-filter',
      elementFilter: 'btn',
      delineatorElement: '__',
      delineatorModifier: '--'
    }
  });

  var mixerStock = mixitup(containerEl2, {
    controls: {
      scope: 'local'
    },
    classNames: {
      block: 'mix-filter',
      elementFilter: 'btn',
      delineatorElement: '__',
      delineatorModifier: '--'
    }
  });


  // $(".rating").rateYo({
  //   numStars: 0,
  //   readOnly: true
  // });
});