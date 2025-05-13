$(document).ready(function () {
      function initOrDestroyCarousel() {
        var $carousel = $(".owl-carousel");

        // Nếu màn hình >= 700, thì khởi tạo carousel nếu chưa có
        if ($(window).width() >= 700) {
          if (!$carousel.hasClass("owl-loaded")) {
            $carousel.addClass("keep-carousel"); // đánh dấu
            $carousel.owlCarousel({
              loop: true,
              margin: 10,
              nav: false,
              dots: false,
              autoplay: true,
              autoplayTimeout: 1500,
              responsive: {
                700: { items: 3 },
                1000: { items: 3 },
                1300: { items: 4 }
              }
            });
          }
        } else {
          // Nếu đã có carousel thì phá hủy
          if ($carousel.hasClass("owl-loaded")) {
            $carousel.trigger('destroy.owl.carousel');
            $carousel.find('.owl-stage-outer').children().unwrap();
            $carousel.find('.owl-stage').children().unwrap();
            $carousel.find('.owl-item').children().unwrap();
            $carousel.removeClass("owl-carousel owl-loaded owl-hidden keep-carousel");
          } else {
            // Nếu chưa khởi tạo thì xóa luôn class (phòng trường hợp gán từ HTML)
            $carousel.removeClass("owl-carousel");
          }
        }
      }

      // GỌI NGAY khi load
      initOrDestroyCarousel();

      // GỌI lại khi resize
      $(window).on('resize', function () {
        initOrDestroyCarousel();
      });
    });


      function startTypingEffect(text, elementId, typingSpeed = 100, deletingSpeed = 50, pauseTime = 1000) {
        const element = document.getElementById(elementId);
        let index = 0;
        let isDeleting = false;

        function type() {
          if (!isDeleting) {
            element.innerHTML = text.substring(0, index + 1);
            index++;
            if (index === text.length) {
              isDeleting = true;
              setTimeout(type, pauseTime);
              return;
            }
          } else {
            element.innerHTML = text.substring(0, index - 1);
            index--;
            if (index === 0) {
              isDeleting = false;
            }
          }

          setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
        }

        type();
      }
      startTypingEffect("1975 - 2025", "typing1");
      startTypingEffect('"Tự do - Hòa bình không phải dễ... Có được bây giờ cố gắng mà giữ..."', "typing2");
      const toggleBtn = document.getElementById('navToggle');
      const navList = document.getElementById('navList');

      toggleBtn.addEventListener('click', () => {
        navList.classList.toggle('show');
      });
      