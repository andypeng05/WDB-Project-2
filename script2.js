// // Initialize the main swiper
// var mainSwiper = new Swiper('.main-swiper', {
//     loop: true,
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     centeredSlides: true,
//     slidesPerView: 'auto', // This allows for slides to take up as much space as needed
//     spaceBetween: 30, // This adds some space between slides
//     centeredSlidesBounds: true,
//   });
  
// // Thumbnail swiper settings
// var thumbSwiper = new Swiper('.thumb-swiper', {
//     slidesPerView: 'auto',
//     spaceBetween: 10,
//     centeredSlides: true, // Center the thumbnails
//     loop: false,
//     // Rest of your thumbnail Swiper settings
//   });
  
//   // Syncing the thumbnail clicks to the main swiper
//   thumbSwiper.on('click', function (swiper) {
//     const clickedIndex = swiper.clickedIndex; // Get the index of the clicked slide
//     mainSwiper.slideTo(clickedIndex); // Match the main swiper to the index
//   });


// Main swiper with adjusted settings for peeking slides
// var mainSwiper = new Swiper('.main-swiper', {
//     loop: true,
//     centeredSlides: true,
//     slidesPerView: 'auto',
//     spaceBetween: 30, // Adjust based on your design requirements
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     on: {
//       init: function () {
//         // Additional custom code to run on Swiper init if needed
//       },
//       slideChange: function () {
//         // Possible adjustments when the slide changes, e.g. sync with thumbnails
//       },
//     },
//     // Use breakpoints or CSS for responsive adjustments if needed
//   });
  
//   // Thumbnail swiper settings
//   var thumbSwiper = new Swiper('.thumb-swiper', {
//     slidesPerView: 'auto',
//     spaceBetween: 10,
//     centeredSlides: true, // Center the thumbnails
//     loop: false,
//     // Rest of your thumbnail Swiper settings
//   });
  
//   // Syncing the thumbnail clicks to the main swiper
//   thumbSwiper.on('click', function (swiper) {
//     const clickedIndex = swiper.clickedIndex; // Get the index of the clicked slide
//     mainSwiper.slideTo(clickedIndex); // Match the main swiper to the index
//   });
  

// Initialize the main swiper
var mainSwiper = new Swiper('.main-swiper', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      effect: 'coverflow', 
    },
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
    },
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 30,
    centeredSlidesBounds: true,
    slidesPerView: 1.2,
  });
  
// Initialize the thumbnail swiper
var thumbSwiper = new Swiper('.thumb-swiper', {
    spaceBetween: 10,
    slidesPerView: 'auto',
    centeredSlides: true, // Center the active thumbnail
    slideToClickedSlide: true, // Slide to the clicked thumbnail
  });
  
  // Link the two swipers
  mainSwiper.controller.control = thumbSwiper;
  thumbSwiper.controller.control = mainSwiper;


//   // Initialize the thumbnail swiper
//   var thumbSwiper = new Swiper('.thumb-swiper', {
//     spaceBetween: 10,
//     slidesPerView: 'auto',
//     freeMode: true,
//     watchSlidesVisibility: true,
//     watchSlidesProgress: true,
//     centeredSlides: true,
//     touchRatio: 0.2,
//   });
  
//   // Syncing the main swiper with the thumbnail swiper
//   mainSwiper.controller.control = thumbSwiper;
//   thumbSwiper.controller.control = mainSwiper;
  
//   // Change main video on thumbnail click
//   thumbSwiper.on('click', function (swiper) {
//     const clickedIndex = swiper.clickedIndex;
//     if (typeof clickedIndex === 'number' && mainSwiper.realIndex !== clickedIndex) {
//       mainSwiper.slideToLoop(clickedIndex, 500);
//     }
//   });
  