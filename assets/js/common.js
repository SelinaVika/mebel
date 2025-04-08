 
function initFormAjax() {
	$('.main-requests-form-file-field [type="file"]').on('change',function (e){
    const arr = [];
		if (this.files) {
			for (var i = 0, n = this.files.length; i < n; i++) {
        arr.push(this.files[i].name);
			}
		}

    const text = arr.join(', ');
    if(text) {
       $(this).parent().find('span').text(text);
    }else{
      $(this).parent().find('span').text('Загрузить эскиз');
    }
   
	});
  
	// $('.ajax_form [name="phone"]').mask('+7 (999)-999-99-99');
 
}


$(document).ready(function () { 
  

  initFormAjax();
    
  $('.main-popular-item-fav-btn').on('click',  function(e){
    e.preventDefault();
    $(this).toggleClass('active');
  })
  
  var swiper = new Swiper(".js-main-banner", {
        loop:true,
        navigation: {
          nextEl: ".swiper-arrow-next",
          prevEl: ".swiper-arrow-prev",
        },
      });

      var swiper = new Swiper(".js-main-popular", {
        loop:true,
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          0: {
            slidesPerView: 1.2,
          },
          640: {
            slidesPerView: 1.2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2.3,
          },
          1200: {
            slidesPerView: 3,
          },
        },
      });

      

});