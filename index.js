let intro = document.querySelector('.intro');
let name = document.querySelector('.name-header');
let nameSpan = document.querySelectorAll('.name');

window.addEventListener('DOMContentLoaded',()=>{
        setTimeout(()=>{
                nameSpan.forEach((span,idx)=>{
                        setTimeout(()=>{
                                span.classList.add('active');
				setTimeout(()=>{
				},300)
                        },(idx+1)*400)
                })
        });

	setTimeout(()=>{
                nameSpan.forEach((span,idx)=>{
                        setTimeout(()=>{
				setTimeout(()=>{

                                	span.classList.remove('active');
					span.classList.add('fade');
				},300)
                        },(idx+1)*400)
                })
        },2000);

	setTimeout(()=>{
		intro.style.top= '-100vh';
	},4000);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


let aboutcard = document.querySelector('#aboutcard');
let portcard = document.querySelector('#portcard');
let servicecard = document.querySelector('#servicecard');
let contactcard = document.querySelector('#contactcard');
aboutcard.addEventListener('mouseover',()=>{
	setTimeout(()=>{

		document.querySelector('#abouttext').classList.add('active');
	});
});

aboutcard.addEventListener('mouseout',()=>{
	document.querySelector('#abouttext').classList.remove('active');
	document.querySelector('#abouttext').classList.add('fade');
});
portcard.addEventListener('mouseover',()=>{
	document.querySelector('#porttext').classList.add('active');
});

portcard.addEventListener('mouseout',()=>{
	document.querySelector('#porttext').classList.remove('active');
	document.querySelector('#porttext').classList.add('fade');
});
servicecard.addEventListener('mouseover',()=>{
	document.querySelector('#servicetext').classList.add('active');
});

servicecard.addEventListener('mouseout',()=>{
	document.querySelector('#servicetext').classList.remove('active');
	document.querySelector('#servicetext').classList.add('fade');
});
contactcard.addEventListener('mouseover',()=>{
	document.querySelector('#contacttext').classList.add('active');
});

contactcard.addEventListener('mouseout',()=>{
	document.querySelector('#contacttext').classList.remove('active');
	document.querySelector('#contacttext').classList.add('fade');
});
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
