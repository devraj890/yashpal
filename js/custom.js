let preloader = select('#preloader');
if (preloader) {
  window.addEventListener('load', () => {
    preloader.remove()
  });
}

 /**
   * Mobile nav toggle
   */
 const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

 function mobileNavToogle() {
   document.querySelector('body').classList.toggle('mobile-nav-active');
   mobileNavToggleBtn.classList.toggle('bi-list');
   mobileNavToggleBtn.classList.toggle('bi-x');
 }
 mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

 /**
  * Hide mobile nav on same-page/hash links
  */
 document.querySelectorAll('#navmenu a').forEach(navmenu => {
   navmenu.addEventListener('click', () => {
     if (document.querySelector('.mobile-nav-active')) {
       mobileNavToogle();
     }
   });

 });

 /**
  * Toggle mobile nav dropdowns
  */
 document.querySelectorAll('.navmenu .has-dropdown i').forEach(navmenu => {
   navmenu.addEventListener('click', function(e) {
     if (document.querySelector('.mobile-nav-active')) {
       e.preventDefault();
       this.parentNode.classList.toggle('active');
       this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
       e.stopImmediatePropagation();
     }
   });
 });

//  For the navbar images 
window.onscroll = function() {
  var navbar = document.getElementById("navbar");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    navbar.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
  } else {
    navbar.style.backgroundColor = "transparent";
  }
};

   // Function to scroll to top when the button is clicked
   function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Optional: smooth scrolling animation
    });
}

// Show the button when user scrolls down
window.onscroll = function () {
    var button = document.querySelector('.scroll-to-top');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
};








