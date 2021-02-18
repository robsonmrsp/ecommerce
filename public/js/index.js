 /* eslint-disable */
(function ($, window) {
  'use strict';
  const theme = {
    init: () => {
      theme.masonryGrid();
      theme.stickyNavbar();
      theme.stuckNavbarMenuToggle();
      theme.passwordVisibilityToggle();
      theme.multilevelDropdown();
      theme.scrollTopButton();
      theme.offcanvasSidebar();
      theme.tooltips();
      theme.popovers();
      theme.toasts();
      theme.disableDropdownAutohide();
      theme.carousel();
      theme.productGallery();
      theme.imageZoom();
      theme.videoPopupBtn();
      theme.ajaxifySubscribeForm();
      theme.filterList();
      theme.subMenuExpand();
      theme.smoothScroll();
      theme.countdown();
    },
    masonryGrid: () => {
      let grid = document.querySelectorAll('.cz-masonry-grid'),
        masonry;
      if (grid == null || grid.length <= 0) return;
      imagesLoaded(document.querySelector('body'), function () {
        for (let i = 0; i < grid.length; i++) {
          masonry = new Masonry(grid[i], {
            itemSelector: '.grid-item',
          });
        }
      });
    },
    stickyNavbar: () => {
      let navbar = document.querySelector('.navbar-sticky');
      if (navbar == null) return;
      let navbarH = navbar.offsetHeight,
        scrollOffset = 400;
      window.addEventListener('scroll', (e) => {
        if (e.currentTarget.pageYOffset > scrollOffset) {
          document.body.style.paddingTop = navbarH + 'px';
          navbar.classList.add('navbar-stuck');
        } else {
          document.body.style.paddingTop = '';
          navbar.classList.remove('navbar-stuck');
        }
      });
    },
    stuckNavbarMenuToggle: () => {
      let toggler = document.querySelector('.navbar-stuck-toggler'),
        stuckMenu = document.querySelector('.navbar-stuck-menu');
      if (toggler == null) return;
      toggler.addEventListener('click', function (e) {
        stuckMenu.classList.toggle('show');
        e.preventDefault();
      });
    },
    passwordVisibilityToggle: () => {
      let elements = document.querySelectorAll('.password-toggle');
      for (let i = 0; i < elements.length; i++) {
        let passInput = elements[i].querySelector('.form-control'),
          passToggle = elements[i].querySelector('.password-toggle-btn');
        passToggle.addEventListener(
          'click',
          (e) => {
            if (e.target.type !== 'checkbox') return;
            if (e.target.checked) {
              passInput.type = 'text';
            } else {
              passInput.type = 'password';
            }
          },
          false
        );
      }
    },
    multilevelDropdown: function () {
      let selector = ".dropdown-menu [data-toggle='dropdown']";
      $(selector).on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).siblings().toggleClass('show');
        if (!$(this).next().hasClass('show')) {
          $(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
        }
        $(this)
          .parents('li.nav-item.dropdown.show')
          .on('hidden.bs.dropdown', function () {
            $('.dropdown-submenu .show').removeClass('show');
          });
      });
    },
    scrollTopButton: () => {
      let element = document.querySelector('.btn-scroll-top'),
        scrollOffset = 600;
      if (element == null) return;
      let offsetFromTop = parseInt(scrollOffset, 10);
      window.addEventListener('scroll', (e) => {
        if (e.currentTarget.pageYOffset > offsetFromTop) {
          element.classList.add('show');
        } else {
          element.classList.remove('show');
        }
      });
    },
    offcanvasSidebar: () => {
      let openTogglers = document.querySelectorAll('[data-toggle="sidebar"]'),
        closeTogglers = document.querySelectorAll('[data-dismiss="sidebar"]'),
        body = document.querySelector('body');
      for (let i = 0; i < openTogglers.length; i++) {
        openTogglers[i].addEventListener('click', (e) => {
          e.preventDefault();
          let sidebarID = e.currentTarget.getAttribute('href');
          document.querySelector(sidebarID).classList.add('show');
          body.classList.add('offcanvas-open');
        });
      }
      for (let i = 0; i < closeTogglers.length; i++) {
        closeTogglers[i].addEventListener('click', (e) => {
          e.currentTarget.closest('.cz-sidebar').classList.remove('show');
          body.classList.remove('offcanvas-open');
        });
      }
    },
    tooltips: () => {
      let selector = $('[data-toggle="tooltip"]');
      selector.tooltip();
    },
    popovers: () => {
      let selector = $('[data-toggle="popover"]');
      selector.popover();
    },
    toasts: () => {
      let selector = $('[data-toggle="toast"]');
      selector.on('click', function () {
        var target = $(this).data('target');
        $(target).toast('show');
      });
    },
    disableDropdownAutohide: () => {
      let elements = document.querySelectorAll('.disable-autohide .custom-select');
      for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', (e) => {
          e.stopPropagation();
        });
      }
    },
    countdown: () => {
      let coundown = document.querySelectorAll('.cz-countdown');
      if (coundown == null) return;
      for (let i = 0; i < coundown.length; i++) {
        let endDate = coundown[i].dataset.countdown,
          daysVal = coundown[i].querySelector('.cz-countdown-days .cz-countdown-value'),
          hoursVal = coundown[i].querySelector('.cz-countdown-hours .cz-countdown-value'),
          minutesVal = coundown[i].querySelector('.cz-countdown-minutes .cz-countdown-value'),
          secondsVal = coundown[i].querySelector('.cz-countdown-seconds .cz-countdown-value'),
          days,
          hours,
          minutes,
          seconds;
        endDate = new Date(endDate).getTime();
        if (isNaN(endDate)) return;
        setInterval(calculate, 1000);

        function calculate() {
          let startDate = new Date().getTime();
          let timeRemaining = parseInt((endDate - startDate) / 1000);
          if (timeRemaining >= 0) {
            days = parseInt(timeRemaining / 86400);
            timeRemaining = timeRemaining % 86400;
            hours = parseInt(timeRemaining / 3600);
            timeRemaining = timeRemaining % 3600;
            minutes = parseInt(timeRemaining / 60);
            timeRemaining = timeRemaining % 60;
            seconds = parseInt(timeRemaining);
            if (daysVal != null) {
              daysVal.innerHTML = parseInt(days, 10);
            }
            if (hoursVal != null) {
              hoursVal.innerHTML = hours < 10 ? '0' + hours : hours;
            }
            if (minutesVal != null) {
              minutesVal.innerHTML = minutes < 10 ? '0' + minutes : minutes;
            }
            if (secondsVal != null) {
              secondsVal.innerHTML = seconds < 10 ? '0' + seconds : seconds;
            }
          } else {
            return;
          }
        }
      }
    },
    carousel: () => {
      let forEach = function (array, callback, scope) {
        for (var i = 0; i < array.length; i++) {
          callback.call(scope, i, array[i]);
        }
      };
      let carousels = document.querySelectorAll('.cz-carousel .cz-carousel-inner');
      forEach(carousels, function (index, value) {
        let defaults = {
          container: value,
          controlsText: ['<i class="czi-arrow-left"></i>', '<i class="czi-arrow-right"></i>'],
          navPosition: 'bottom',
          mouseDrag: true,
          speed: 500,
          autoplayHoverPause: true,
          autoplayButtonOutput: false,
        };
        let userOptions;
        if (value.dataset.carouselOptions != undefined) userOptions = JSON.parse(value.dataset.carouselOptions);
        let options = {
          ...defaults,
          ...userOptions,
        };
        let carousel = tns(options);
      });
    },
    productGallery: () => {
      let gallery = document.querySelectorAll('.cz-product-gallery');
      if (gallery.length) {
        for (let i = 0; i < gallery.length; i++) {
          let thumbnails = gallery[i].querySelectorAll('.cz-thumblist-item:not(.video-item)'),
            previews = gallery[i].querySelectorAll('.cz-preview-item'),
            videos = gallery[i].querySelectorAll('.cz-thumblist-item.video-item');
          for (let n = 0; n < thumbnails.length; n++) {
            thumbnails[n].addEventListener('click', changePreview);
          }

          function changePreview(e) {
            e.preventDefault();
            for (let i = 0; i < thumbnails.length; i++) {
              previews[i].classList.remove('active');
              thumbnails[i].classList.remove('active');
            }
            this.classList.add('active');
            gallery[i].querySelector(this.getAttribute('href')).classList.add('active');
          }
          for (let m = 0; m < videos.length; m++) {
            lightGallery(videos[m], {
              selector: 'this',
              download: false,
              videojs: true,
              youtubePlayerParams: {
                modestbranding: 1,
                showinfo: 0,
                rel: 0,
                controls: 0,
              },
              vimeoPlayerParams: {
                byline: 0,
                portrait: 0,
                color: 'fe696a',
              },
            });
          }
        }
      }
    },
    imageZoom: () => {
      let images = document.querySelectorAll('.cz-image-zoom');
      for (let i = 0; i < images.length; i++) {
        new Drift(images[i], {
          paneContainer: images[i].parentElement.querySelector('.cz-image-zoom-pane'),
        });
      }
    },
    videoPopupBtn: () => {
      let button = document.querySelectorAll('.video-popup-btn');
      if (button.length) {
        for (let i = 0; i < button.length; i++) {
          lightGallery(button[i], {
            selector: 'this',
            download: false,
            videojs: true,
            youtubePlayerParams: {
              modestbranding: 1,
              showinfo: 0,
              rel: 0,
              controls: 0,
            },
            vimeoPlayerParams: {
              byline: 0,
              portrait: 0,
              color: 'fe696a',
            },
          });
        }
      }
    },
    ajaxifySubscribeForm: () => {
      $('.cz-subscribe-form .btn').each(function () {
        let $button = $(this),
          $form = $button.parents('.cz-subscribe-form'),
          $input = $form.find('.form-control'),
          $status = $form.find('.subscribe-status'),
          buttonInitText = $button.text(),
          input = $button.text();
        if ($form.length) {
          $button.bind('click', function (event) {
            if (event) event.preventDefault();
            register($(this).parents('.cz-subscribe-form'));
          });
        }

        function register($form) {
          $button.text('Sending...');
          $.ajax({
            type: $form.attr('method'),
            url: $form.attr('action'),
            data: $form.serialize(),
            cache: false,
            dataType: 'jsonp',
            contentType: 'application/json; charset=utf-8',
            error: function (err) {
              alert('Could not connect to the registration server. Please try again later.');
            },
            success: function (data) {
              if (data.result === 'success') {
                $status
                  .removeClass('status-error')
                  .addClass('status-success')
                  .text('Thank you for subscribing. We have sent you a confirmation email.');
                $button.text(
                  buttonInitText,
                  setTimeout(function () {
                    $status.removeClass('status-success').text('');
                  }, 5000)
                );
                $input.val('');
              } else {
                $status.removeClass('status-success').addClass('status-error').text(data.msg.substring(4));
                $button.text(
                  buttonInitText,
                  setTimeout(function () {
                    $status.removeClass('status-error').text('');
                  }, 5000)
                );
              }
            },
          });
        }
      });
    },
    filterList: () => {
      let filterListWidget = document.querySelectorAll('.cz-filter');
      for (let i = 0; i < filterListWidget.length; i++) {
        let filterInput = filterListWidget[i].querySelector('.cz-filter-search'),
          filterList = filterListWidget[i].querySelector('.cz-filter-list'),
          filterItems = filterList.querySelectorAll('.cz-filter-item');
        filterInput.addEventListener('keyup', filterListFunc);

        function filterListFunc() {
          let filterValue = filterInput.value.toLowerCase();
          for (let i = 0; i < filterItems.length; i++) {
            let filterText = filterItems[i].querySelector('.cz-filter-item-text').innerHTML;
            if (filterText.toLowerCase().indexOf(filterValue) > -1) {
              filterItems[i].classList.remove('d-none');
            } else {
              filterItems[i].classList.add('d-none');
            }
          }
        }
      }
    },
    subMenuExpand: () => {
      $(document).on('click', '.cz-handheld-menu .menu-item-has-children [data-toggle="sub-menu"]', function () {
        $(this).toggleClass('collapsed');
        let $targetUl = $(this).parents('.menu-item-has-children').find('> ul');
        $targetUl.toggle(300);
      });
    },
    smoothScroll: () => {
      let selector = '[data-scroll]',
        fixedHeader = '[data-scroll-header]',
        scroll = new SmoothScroll(selector, {
          speed: 800,
          speedAsDuration: true,
          offset: 40,
          header: fixedHeader,
          updateURL: false,
        });
    },
  };
  theme.init();
  $(document).on('ready', function () {
    if (typeof $.blockUI !== 'undefined') {
      $.blockUI.defaults.message = null;
      $.blockUI.defaults.overlayCSS.background = '#fff url(' + cartzilla_options.ajax_loader_url + ') no-repeat center';
      $.blockUI.defaults.overlayCSS.backgroundSize = '16px 16px';
      $.blockUI.defaults.overlayCSS.opacity = 0.6;
    }
    $('body').on('adding_to_cart', function (e, $btn, data) {
      $btn.closest('.product').block();
    });
    $('body').on('added_to_cart', function () {
      $('.product').unblock();
    });
    $(document).on('click', '.product_quick_view', function (e) {
      var product_id = $(this).data('product_id');
      $.blockUI({
        message: null,
        overlayCSS: {
          background: '#fff url(' + cartzilla_options.ajax_loader_url + ') no-repeat center',
          backgroundSize: '16px 16px',
          opacity: 0.6,
        },
      });
      $.ajax({
        url: cartzilla_options.ajax_url,
        type: 'post',
        data: {
          action: 'product_quick_view',
          product_id: product_id,
        },
        success: function (response) {
          $('#modal-quick-view-ajax-content').html(response);
          $('#quick-view').modal('show');
          $.unblockUI();
          var form_variation = $('.cd-quick-view').find('.variations_form');
          var form_variation_select = $('.cd-quick-view').find('.variations_form .variations select');
          form_variation.wc_variation_form();
          form_variation_select.change();
          if (typeof $.fn.wc_product_gallery !== 'undefined' && typeof wc_single_product_params !== 'undefined') {
            $('#quick-view')
              .find('.woocommerce-product-gallery')
              .each(function () {
                $(this).wc_product_gallery(wc_single_product_params);
              });
          }
        },
        error: function (errorThrown) {
          console.log(errorThrown);
        },
      }).done(function () {
        $('.variations_form').mas_wcvs_variation_swatches_form();
        $(document.body).trigger('mas_wcvs_initialized');
      });
    });
    $('#quick-view').on('hide.bs.modal', function (event) {
      $(this).find('#modal-quick-view-ajax-content').empty();
    });
    var is_rtl = $('body,html').hasClass('rtl');
    if ($('.cz-carousel').length) {
      $('.cz-carousel').each(function () {
        if ($(this).find('.js-slick-carousel') && $(this).find('.js-slick-carousel').length) {
          $(this).find('.js-slick-carousel').slick();
          $(this).find('.js-slick-carousel').slick('setOption', 'rtl', $('body,html').hasClass('rtl'), true);
          $(this).find('.js-slick-carousel').slick('refresh');
        }
      });
    }
    $('[data-ride="ct-slick-carousel"]').each(function () {
      var $slick_target = false;
      if ($(this).data('slick') !== 'undefined' && $(this).find($(this).data('wrap')).length > 0) {
        $slick_target = $(this).find($(this).data('wrap'));
        $slick_target.data('slick', $(this).data('slick'));
      } else if ($(this).data('slick') !== 'undefined' && $(this).is($(this).data('wrap'))) {
        $slick_target = $(this);
      }
      if ($slick_target) {
        $slick_target.slick();
      }
    });
  });
  $(document).on('click', '.add-to-compare-link:not(.added)', function (e) {
    e.preventDefault();
    var button = $(this),
      data = {
        _yitnonce_ajax: yith_woocompare.nonceadd,
        action: yith_woocompare.actionadd,
        id: button.data('product_id'),
        context: 'frontend',
      },
      widget_list = $('.yith-woocompare-widget ul.products-list');
    if (typeof woocommerce_params != 'undefined') {
      button.closest('.product').block();
      widget_list.block();
    }
    $.ajax({
      type: 'post',
      url: yith_woocompare.ajaxurl.toString().replace('%%endpoint%%', yith_woocompare.actionadd),
      data: data,
      dataType: 'json',
      success: function (response) {
        if (typeof woocommerce_params != 'undefined') {
          $('.product').unblock();
          widget_list.unblock();
        }
        button.addClass('added').attr('href', cartzilla_options.compare_page_url).text(yith_woocompare.added_label);
        widget_list.html(response.widget_table);
      },
    });
  });

  function maswcvsSelectedLabel() {
    $('.mas-wcvs-swatches').each(function () {
      var $el = $(this),
        $label = $el.closest('.form-group').find('.label');
      if (!$el.find('.selected').length && $label.find('.mas-wcvs-swatch-selected').length) {
        $label.find('.mas-wcvs-swatch-selected').remove();
      }
    });
    $('.mas-wcvs-swatch.selected').each(function () {
      var $el = $(this),
        $label = $el.closest('.form-group').find('.label');
      if ($label.find('.mas-wcvs-swatch-selected').length) {
        $label.find('.mas-wcvs-swatch-selected').html($el.attr('title'));
      } else {
        $label.append('<span class="mas-wcvs-swatch-selected text-muted">' + $el.attr('title') + '</span>');
      }
    });
  }
  maswcvsSelectedLabel();
  $('.variations_form')
    .on('woocommerce_variation_has_changed', function () {
      maswcvsSelectedLabel();
    })
    .on('click', '.reset_variations', function () {
      maswcvsSelectedLabel();
    });
  $(document).on('cartzillagb_products_block_output_success', function (e, el) {
    $(el)
      .find('.variations_form')
      .each(function () {
        if ($.isFunction($.fn.wc_variation_form)) {
          $(this).wc_variation_form();
          $(this).find('.variations select').change();
        }
        if ($.isFunction($.fn.mas_wcvs_variation_swatches_form)) {
          $(this).mas_wcvs_variation_swatches_form();
        }
      });
  });
})(jQuery, window);
