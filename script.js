const scroll = new LocomotiveScroll({
    //element jaha pr smooth scrolling lgana h 
    el: document.querySelector('#main'),
    smooth: true
});


function circleMouseFollower(){

    window.addEventListener("mousemove", function(dets){
       
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    })
 
}


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
       xscale = gsap.utils.clamp(.8,1.2,dets.clientX-xperv);
       yscale = gsap.utils.clamp(.8,1.2,dets.clientY-yperv);

        xperv = dets.clientX;
        yperv = dets.clientY;

        circleMouseFollower(xscale,yscale);
    });

}

circleToElipse();
circleMouseFollower();
firstPageAnim();