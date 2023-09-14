var timeout;

const scroll = new LocomotiveScroll({
    //element jaha pr smooth scrolling lgana h 
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnim(){
    var t1 = gsap.timeline();
   


    t1.from("#nav", {
        y:'-10',
        opacity:0,
        duration:0.5,
        ease:Expo.easInOut


    })
    .to(".boundingelem",{
        y:0,
        ease:Expo.easInOut,
        duration:0.2
    })
}


function circleToElipse(){

    //define default scale value 

    var xscale = 1 ;
    var yscale = 1;

    var xperv = 0;
    var yperv = 0;

    window.addEventListener("mousemove",function(dets){
        clearTimeout(timeout);

       xscale = gsap.utils.clamp(.8,1.2,dets.clientX-xperv);
       yscale = gsap.utils.clamp(.8,1.2,dets.clientY-yperv);

        xperv = dets.clientX;
        yperv = dets.clientY;

        circleMouseFollower(xscale,yscale);

        timeout = setTimeout(function(){
            document.querySelector(
                "#minicircle"
                ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`;
        },100);

    });

}
function circleMouseFollower(xscale,yscale){

    window.addEventListener("mousemove", function(dets){
       
        document
        .querySelector(
            "#minicircle"
            ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale},${yscale})`;
    });
 
}

circleToElipse();
circleMouseFollower();
firstPageAnim();

document.querySelectorAll(".elem")
.forEach(function(elem){
    

    var rotate =0;
    var diffrot = 0;
    elem.addEventListener("mouseleave", function (dets) {
        gsap.to(elem.querySelector("img"), {
          opacity: 0,
          ease: Power3,
          duration: 0.5,
        });
      });
    
      elem.addEventListener("mousemove", function (dets) {
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;
        gsap.to(elem.querySelector("img"), {
          opacity: 1,
          ease: Power3,
          top: diff,
          left: dets.clientX,
          rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
        });
      });
   
});