export const useScripts = () => {
  const initializePlugins = () => {
    if (import.meta.client) {
      // Initialize all jQuery plugins
      nextTick(() => {
        // Slick slider
        if (window.$ && window.$.fn.slick) {
          $('.testimonial-active').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000
          })

          $('.brand-active').slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 4
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 3
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 2
                }
              }
            ]
          })
        }

        // Knob (circular progress)
        if (window.$ && window.$.fn.knob) {
          $('.knob').knob({
            draw: function() {
              $(this.i).val(this.cv + '%')
            }
          })

          $('.knob').appear(function() {
            const el = $(this)
            const dataRel = el.attr('data-rel')
            el.animate({ value: dataRel }, {
              duration: 2000,
              step: function() {
                el.val(Math.ceil(this.value)).trigger('change')
              }
            })
          })
        }

        // Counter up
        if (window.$ && window.$.fn.counterUp) {
          $('.counter').counterUp({
            delay: 10,
            time: 1000
          })
        }

        // Mean menu
        if (window.$ && window.$.fn.meanmenu) {
          $('#mobile-menu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: '991'
          })
        }

        // Vanilla tilt
        if (window.VanillaTilt) {
          VanillaTilt.init(document.querySelectorAll('[data-tilt]'), {
            max: 10,
            speed: 400
          })
        }
      })
    }
  }

  return {
    initializePlugins
  }
}