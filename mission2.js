// flip card start here 

const cards = document.querySelectorAll(".fake-magicwall .magic-wall_item");

if (cards.length) {
    let currentIndex = 0;

    const flipCard = () => {
        cards.forEach((card) => card.classList.remove("is-flipped"));
        const activeCard = cards[currentIndex];
        activeCard.classList.add("is-flipped");
        currentIndex = (currentIndex + 1) % cards.length;
    };

    flipCard();
    setInterval(flipCard, 1500);
}
// flip ends here 


// mouse animation start here 

let dot = document.getElementById("dot");
const sectionHome = document.getElementById("section-home");

// Scope the mouse animation to only the #section-home element.
if (dot && sectionHome) {
    // Hide the dot by default when outside the section
    dot.style.display = 'none';

    const mouseHandler = function(event) {
        // Position the dot at the cursor (viewport coordinates)
        dot.style.left = event.clientX + "px";
        dot.style.top = event.clientY + "px";

        // Create a small spark at the cursor location
        let spark = document.createElement("div");
        spark.className = "spark";
        spark.style.left = event.clientX + "px";
        spark.style.top = event.clientY + "px";
        dot.appendChild(spark);

        setTimeout(function() { spark.remove(); }, 300);
    };

    sectionHome.addEventListener('mousemove', mouseHandler);

    sectionHome.addEventListener('mouseenter', function() {
        dot.style.display = 'block';
    });

    sectionHome.addEventListener('mouseleave', function() {
        dot.style.display = 'none';
    });
}

// mousemove ends here 




// sound start here ===============================================================================================
const soundCloud = document.querySelector('.sound-cloud');
const off = document.querySelector('#off');
const on = document.querySelector('#on');
const myAudio = document.querySelector('#myaudio');

off.addEventListener('click', () => soundTrack('off'));
on.addEventListener('click', () => soundTrack('on'));

const soundTrack = (soundState) => {
    if (!myAudio) return;

    if(soundState === 'off'){
        on.style.display = 'block';
        off.style.display = 'none';
        soundCloud.style.color = "#08fdd8";
        myAudio.play().catch(() => {});
    }
    else if(soundState === 'on'){
        on.style.display = 'none';
        off.style.display = 'block';
        soundCloud.style.color = "#f50057";
        myAudio.pause();
    }
}

// Play music functionality

// const btnBars = document.querySelector('.bars');
// const btnTimes = document.querySelector('.times');
// const SideNav = document.querySelector('.aside');


// btnBars.addEventListener('click', () => myFunc('open'));
// btnTimes.addEventListener('click', () => myFunc('close'));

// const myFunc = (navCondition) => {
//     if(navCondition === 'open'){
//         SideNav.classList.add('show-nav');
//         btnTimes.style.display = "block";
//         btnBars.style.display = "none";
//     }
//     else if(navCondition === 'close'){
//             SideNav.classList.remove('show-nav');
//             btnTimes.style.display = "none";
//             btnBars.style.display = "block";
//     }
// }

// jquery plugin here

// if (document.getElementById("myCanvas") && document.getElementById("tags") && window.jQuery && window.jQuery.fn.tagcanvas) {
//     window.jQuery(function () {
//         window.jQuery("#myCanvas").tagcanvas({
//             textColour: "#08b77c",
//             outlineColour: "#08b77c",
//             reverse: true,
//             depth: 0.8,
//             maxSpeed: 0.03,
//             initial: [0.1, -0.1],
//             dragControl: true,
//             wheelZoom: false,
//             fadeIn: 1000,
//             shadow: "#000000",
//             shadowBlur: 0,
//             textHeight: 18
//         }, "tags");
//     });
// }
// skills carts ============================================
$(document).ready(function (){
    if(!$("#myCanvas").tagcanvas({
        textColour: "#07bca1",
        outlineColour: "transparent",
        reverse: true,
        depth: 0.8,
        maxSpeed: 0.05,
        weight: true,
    }, "tags")){
        // something went wrong hide the canvas container,
        $("#myCanvasContainer");
    }
});

// bouceing letter by mouseover

document.querySelectorAll(".bouncing-title span").forEach(span => {
        span.addEventListener('mouseenter', function (){
            this.classList.remove("bounce");
            
            void this.offsetWidth;
            this.classList.add("bounce");
        });
      }) ;