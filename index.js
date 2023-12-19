const mouseEntered = (element) =>{
  if (element) {
      const UlElement = element.querySelector('ul');
  
      if (UlElement) {
        UlElement.classList.add('show');
      }
    }
}
const mouseRemove = (element) =>{
  if (element) {
      const UlElement = element.querySelector('ul');
  
      if (UlElement) {
        UlElement.classList.remove('show');
      }
    }
}
document.addEventListener("DOMContentLoaded", function() {
  


function handleScroll() {
  var scrollPosition = window.scrollY || window.pageYOffset;
  var navTextElements = document.getElementsByClassName('change-white');
  var nav = document.querySelector('nav');
  var scrollToTopBtn = document.getElementById('arrow-div');
  if(scrollPosition>=100){
    scrollToTopBtn.style.display = "block"
  }
  else{
    scrollToTopBtn.style.display = "none"
  }
  for (var i = 0; i < navTextElements.length; i++) {
    var navText = navTextElements[i];

    if (scrollPosition >= 72) {
      navText.classList.remove('text-white');
      nav.classList.remove('custom-nav-bg');
      nav.classList.add('nav-bg-white');
      // nav.style.transform = 'translateY(0)';
    } else {
      nav.classList.remove('nav-bg-white');
      nav.classList.add('custom-nav-bg');
      navText.classList.add('text-white');
      // nav.style.transform = 'translateY(-100%)';
    }
  }
}

window.addEventListener('scroll', handleScroll);
var scrollToTopBtn = document.getElementById('arrow-div');

scrollToTopBtn.addEventListener('click', function () {
    scrollToTop()
    
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
    
}

});


