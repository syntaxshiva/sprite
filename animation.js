document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);
  
    gsap.to(".botls", {
      y: 700, 
      x: -100,     // move down,
      scale: 2,         // make it 2x bigger
      rotate: 720,      // rotate 720 degrees
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "+=600",    // adjust based on how fast you want animation
        scrub: true,      // smoothness of scroll
        markers: false
      }
    });

    function checkScreenSize() {
        let minWidth = 1400;  // Minimum width allowed
        let maxWidth = 1920; // Maximum width allowed
    
        let width = window.innerWidth;
    
        if (width < minWidth || width > maxWidth) {
            document.body.innerHTML = `
                <div id="screen-warning" style="
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background-color: #000;
                    color: #fff;
                    padding: 20px;
                    font-size: 18px;
                    text-align: center;
                    border-radius: 8px;
                    z-index: 9999;">
                    <p>Your screen size is not supported. Please resize your window.</p>
                </div>`;
        }
    }
    
    // Run the function on load and on resize
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
  });
  