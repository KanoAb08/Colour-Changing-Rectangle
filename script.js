const rect = document.querySelector(".rect")

rect.addEventListener('mousemove',(e)=>{
    rectWidth = rect.getBoundingClientRect().width
    rectPost = e.clientX - rect.getBoundingClientRect().x



    if(rectPost < rect.getBoundingClientRect().width/2){
        let green = gsap.utils.mapRange(0,rect.getBoundingClientRect().width/2,255,0,rectPost)
        gsap.to(rect,{
            backgroundColor : `rgb(0,${green},0)`
        })
    }else{
        let blue = gsap.utils.mapRange(rect.getBoundingClientRect().width/2,rect.getBoundingClientRect().width,0,255,rectPost)
        gsap.to(rect,{
            backgroundColor : `rgb(0,0,${blue})`
        })
    }
})

rect.addEventListener('mouseleave',()=>{
    gsap.to(rect,{
        backgroundColor : "white",
    })
})