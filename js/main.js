document.addEventListener('DOMContentLoaded', function() {
	
	M.Sidenav.init(document.querySelectorAll('.sidenav'), {});
	M.Materialbox.init(document.querySelectorAll('.materialboxed'),{})
	M.Parallax.init(document.querySelectorAll('.parallax'), {})
	M.Tabs.init(document.querySelectorAll('.tabs'), {});
	M.Collapsible.init(document.querySelectorAll('.collapsible') , {})


	tableauInitialization('viz1631510228587')
	tableauInitialization('viz1631510786769')

});
function tableauInitialization(divId){
	var divElement = document.getElementById(divId);
	var vizElement = divElement.getElementsByTagName('object')[0];

	if ( divElement.offsetWidth > 800 ) {
		vizElement.style.width='1016px';
		vizElement.style.height='991px';
	}
	else if ( divElement.offsetWidth > 500 ) {
		vizElement.style.width='1016px';
		vizElement.style.height='991px';
	} else {
		vizElement.style.width='100%';
		vizElement.style.height='927px';
	}                     
	var scriptElement = document.createElement('script');
	scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
	vizElement.parentNode.insertBefore(scriptElement, vizElement);
}

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ScrollToPlugin);


// -----------------------------------NAVBAR-----------------------------
ScrollTrigger.create({
	trigger : "#about",
	start : "top center",
	onEnter : () => {gsap.to("#navbar",{duration : 1,position:"fixed",width:"100%",zIndex : 1000})},
	onLeaveBack : () => {gsap.to("#navbar",{duration : 1,position:"static"})},
	// markers : true
})
gsap.to(window, {scrollTo: {y:window.location.hash,offsetY:150} ,duration: 1})

document.querySelectorAll('nav ul a,#hero a').forEach(a => {
	hash = a.hash
	// add the scroll to href option
	a.addEventListener('click', e => {
		e.preventDefault()
		gsap.to(window, {scrollTo: {y:a.hash,offsetY: 150},duration: 1})
	});
	// add the scrollspy option
	gsap.to(a.parentNode , {
		scrollTrigger :{
			trigger : a.hash,
			onToggle: self => { a.parentNode.classList.toggle('active')},
			start : "top center",
			end : "bottom center"
		},		
	})
	
});


ScrollTrigger.batch("#abilities .card-panel", {
	interval: 0.1,
	batchMax: 2, 
	onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.2}),
	onLeave: batch => gsap.to(batch, {opacity: 0, y: -100,stagger: 0.2}),
	onEnterBack: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.2}),
	onLeaveBack: batch => gsap.to(batch, {opacity: 0, y: 100}),
	start: 'top center+=300',
	end: 'bottom top',
	// markers:true
});



ScrollTrigger.create({
	trigger : "#education",
	start : 'top center+=200',
	end : "bottom top",
	// markers : true,
	onEnter : () => gsap.from('#education .edu-item',{y:100,opacity :0 ,duration : 1 , ease: "power1.inOut" ,stagger : 0.4}),
	onEnterBack : () => gsap.from('#education .edu-item',{y:-100,opacity :0 ,duration : .5 , ease: "power1.inOut" ,stagger : { each: 0.4 , from : 'end'}}),

})


ScrollTrigger.batch("#experience .card-panel", {
	interval: 0.1,
	batchMax: 2, 
	onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.2}),
	onLeave: batch => gsap.to(batch, {opacity: 0, y: -100,stagger: 0.2}),
	onEnterBack: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.2}),
	onLeaveBack: batch => gsap.to(batch, {opacity: 0, y: 100}),
	start: 'top center+=300',
	end: 'bottom top',
	// markers:true
});



heading_timeline = gsap.timeline()
heading_timeline
.to("#hero h1",{duration: 1,text: "hi"})
.to("#hero h1",{duration: 1,text: "I am Rahul"})

