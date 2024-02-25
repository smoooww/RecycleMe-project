const hiddenElements = document.querySelectorAll('.hidden');
const hiddenBottom = document.querySelectorAll('.hiddenbottom');
const hiddenRight = document.querySelectorAll('.hiddenRight');
window.addEventListener('scroll', () => {

const triggerHidden = window.innerHeight / 5 * 4;
    hiddenRight.forEach((hidden) => {
        const hiddenTop = hidden.getBoundingClientRect().top;
        if (hiddenTop < triggerHidden) {
            hidden.classList.add('showRight');
        }   else {
            hidden.classList.remove('showRight');
        }        
})

hiddenBottom.forEach((hidden) => {
    const hiddenTop = hidden.getBoundingClientRect().top;
    if (hiddenTop < triggerHidden) {
        hidden.classList.add('showBottom');
    }   else {
        hidden.classList.remove('showBottom');
    }        
})
hiddenElements.forEach((hidden) => {
    const hiddenTopRight = hidden.getBoundingClientRect().top;
    if (hiddenTopRight < triggerHidden) {
        hidden.classList.add('showRight');
    }   else {
        hidden.classList.remove('showRight');
    }      
})
});

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
  