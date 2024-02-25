$(document).ready(function () {
    var scrollLink = $(".scroll");
  
    scrollLink.click(function (e) {
      e.preventDefault();
      $("body,html").animate(
        {
          scrollTop: $(this.hash).offset().top,
        },
        800
      );
    });
  
    $(window).scroll(function () {
      var scrollbarLocation = $(this).scrollTop();
  
      scrollLink.each(function () {
        var sectionOffset = $(this.hash).offset().top -20;
  
        if (sectionOffset <= scrollbarLocation) {
          $(this).parent().addClass("active");
          $(this).parent().siblings().removeClass("active");
        }
      });
    });
  });

console.clear();
const slider = document.querySelector(".slides-container");
const slides = document.querySelectorAll(".slide");
const btnLeft = document.getElementById('btnLeft');
const slideColors = [];
const btnRight = document.getElementById('btnRight');
let scrollValue = 0;

slides.forEach((slide, index) => {
  slide.classList.add(slideColors[index]);
});

btnLeft.addEventListener("click", () => {
  scrollValue -= slider.scrollWidth / slides.length;

  if (scrollValue < 0) {
    scrollValue = slider.scrollWidth - slider.scrollWidth / slides.length;
  }

//   console.log(scrollValue);
  slider.scrollLeft = scrollValue;
});

btnRight.addEventListener("click", () => {
  scrollValue += slider.scrollWidth / slides.length;

  if (scrollValue >= slider.scrollWidth) {
    scrollValue = 0;
  }

  slider.scrollLeft = scrollValue;
});




let checkbox = document.getElementsByName("checkbox");
let container = document.querySelector('.pop-up-container');
for (let i = 0; i < checkbox.length; i++) {
   checkbox[i].addEventListener( "change", () => {
      var flag = 0;
      for (let i = 0; i < checkbox.length; i++) {
         if ( checkbox[i].checked == false )
         flag = 1;
         container.classList.remove('visible')
      }
      if (flag === 0) {
            container.classList.add('visible');
        }
   });
}