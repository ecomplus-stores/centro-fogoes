// Add your custom JavaScript for checkout here.
storefront.on('widget:@ecomplus/widget-tag-manager', function () {
    setTimeout(function () {
        if((window.innerWidth < 767) && $('#cart').length) {
            $('.cart__discount').after($('.recommended-items'))
        }
    }, 800);
  });
