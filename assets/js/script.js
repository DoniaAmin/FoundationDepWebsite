'use strict';

$(document).ready(function() {
  const $overlay = $("[data-overlay]");
  const $navOpenBtn = $("[data-nav-open-btn]");
  const $navbar = $("[data-navbar]");
  const $navList =$('.navbar-list')
  const $navCloseBtn = $("[data-nav-close-btn]");
  const $navLinks = $("[data-nav-link]");
  const $navElemArr = $navOpenBtn.add($navCloseBtn).add($overlay) ;
  const $sections=$(".sections")
  const $dropDownIcon = $(".fa-caret-down")
  const $subMenue= $('.submenu')
  const $controls=$('.controls i')
  const $sliderImages=$(".slide-img")
  var currentIndex=$sliderImages.length-1


/* bervious arrow */
$($controls[0]).on('click',function(){
  $($sliderImages[currentIndex]).fadeOut(100)
  currentIndex--;//1
  if (currentIndex >= $sliderImages.length||currentIndex<0) {
    currentIndex = $sliderImages.length-1;
  }
  $($sliderImages[currentIndex]).fadeIn(100);
})

/* next arrow */
$($controls[1]).on('click',function(){
  $($sliderImages[currentIndex]).fadeOut(100)
  currentIndex++;
  if (currentIndex >= $sliderImages.length||currentIndex<0) {
    currentIndex = 0;
  }
  $($sliderImages[currentIndex]).fadeIn(100);
})

/* img slider */
function startSlider() {
  setInterval(function() {
    $($sliderImages[currentIndex]).fadeOut(500)
    currentIndex++;
    if (currentIndex >= $sliderImages.length) {
      currentIndex = 0;
    }
    $($sliderImages[currentIndex]).fadeIn(500);
  }, 3000); 
}
startSlider();

/* navbar toggle */
  $navElemArr.on("click", function() {
    $navbar.toggleClass("active");
    $overlay.toggleClass("active");
    $dropDownIcon.toggleClass("active");
    $navList.toggleClass('active')
    $subMenue.toggleClass("respactive")
    $navLinks.toggleClass('active')
  })
  $navLinks.on("click", function() {
    $navbar.toggleClass("active");
    $overlay.toggleClass("active");
  });


 /* display submenue */
  $sections.hover(function(){
    $subMenue.toggleClass("active")
    $dropDownIcon.css('rotate','360deg')
 },function(){
  $dropDownIcon.css('rotate','90deg')
  $subMenue.toggleClass("active");
 })


/* header sticky & go to top */
  const $header = $("[data-header]");
  const $goTopBtn = $("[data-go-top]");
  $(window).on("scroll", function() {
    if ($(this).scrollTop() >= 200) {
      $header.addClass("active");
      $goTopBtn.addClass("active");
    } else {
      $header.removeClass("active");
      $goTopBtn.removeClass("active");
    }
  });
});





