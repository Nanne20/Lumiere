//servicios
document.addEventListener('DOMContentLoaded', function(){
	gsap.registerPlugin(ScrollTrigger);
	gsap.defaults({ease: "none", duration: 2});

	gsap.from('.services', {
		scrollTrigger: {
			trigger: "#s1",
            toggleActions: "restart restart restart reset",
		},
        
		duration: 1.5,
		x: 100,
		opacity: 0,
	});
    
});