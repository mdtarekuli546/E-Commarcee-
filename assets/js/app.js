
	
			(function($){
				
				$(document).ready(function(){

					
                    $('.input-part-icon').click(function(){
			
                        $('.inm').show();
                    
                    });
					$('.bar').click(function(){
			
                        $('.menu-2').slideToggle();
                    
                    });
					$('.see-btn').click(function(){
			
                        $('.mid-show').slideToggle();
                    
                    });

					

					$('.back_to_top').click(function(){
						$('html, body').animate({scrollTop: 0})
					});
					$(window).scroll(function(){
						var scrolltop = $(this).scrollTop();
				
						// if(scrolltop > 400) {
						//     $('.nav-area').addClass('navbar_bg');
						// } else {
						//     $('.nav-area').removeClass('navbar_bg');
						// }
						if (scrolltop > 600) {
							$('.back_to_top').show(500)
						} else {
							$('.back_to_top').hide(500)
						}
					});


					var swiper = new Swiper(".mySwiper", {
        
						pagination: {
						  el: ".swiper-pagination",
						  dynamicBullets: true,
						},
						slidesPerView: 1,
						spaceBetween: 30,
						freeMode: true,
						autoplay: {
							delay: 3500,
							disableOnInteraction: false,
						  },
						navigation: {
							nextEl: ".swiper-button-next",
							prevEl: ".swiper-button-prev",
						  },
					  });
					
				
				});
				
			})(jQuery);
			
					

					(() => {
						// Specify the deadline date
						const deadlineDate = new Date('December 31, 2024 23:59:59').getTime();
					
						// Cache all countdown boxes into consts
						const countdownDays = document.querySelector('.countdown__days .number');
						const countdownHours = document.querySelector('.countdown__hours .number');
						const countdownMinutes = document.querySelector('.countdown__minutes .number');
						const countdownSeconds = document.querySelector('.countdown__seconds .number');
					
						// Update the count down every 1 second (1000 milliseconds)
						setInterval(() => {
							// Get current date and time
							const currentDate = new Date().getTime();
					
							// Calculate the distance between current date and time and the deadline date and time
							const distance = deadlineDate - currentDate;
					
							// Calculations the data for remaining days, hours, minutes and seconds
							const days = Math.floor(distance / (1000 * 60 * 60 * 24));
							const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
							const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
							const seconds = Math.floor(distance % (1000 * 60) / 1000);
					
							// Insert the result data into individual countdown boxes
							countdownDays.innerHTML = days;
							countdownHours.innerHTML = hours;
							countdownMinutes.innerHTML = minutes;
							countdownSeconds.innerHTML = seconds;
						}, 1000);
					})();
					$('.counter').counterUp({
						delay: 10,
						time: 10000
						});
