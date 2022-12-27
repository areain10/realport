let intro = document.querySelector('.intro');
let name = document.querySelector('.name-header');
let nameSpan = document.querySelectorAll('.name');

window.addEventListener('DOMContentLoaded',()=>{
        setTimeout(()=>{
                nameSpan.forEach((span,idx)=>{
                        setTimeout(()=>{
                                span.classList.add('active');
				setTimeout(()=>{
					span.classList.add('quartz');
				},300)
                        },(idx+1)*400)
                })
        });

	setTimeout(()=>{
                nameSpan.forEach((span,idx)=>{
                        setTimeout(()=>{
				span.classList.remove('quartz');
				span.classList.add('white');
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
})
