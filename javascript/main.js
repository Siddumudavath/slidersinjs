
let images=document.querySelectorAll(".slider img")

let currentIndex=0

function changeImage()
{
    for(let i=0;i<images.length;i++){
        images[i].style.display=(i===currentIndex)?'block':'none'
    }
}

document.getElementById("next").addEventListener('click',()=>{
    currentIndex=(currentIndex+1)%images.length
    changeImage()
})

document.getElementById("prev").addEventListener('click',()=>{
    currentIndex=(currentIndex-1+images.length)%images.length
    changeImage()
})


setInterval(() => {
    currentIndex=(currentIndex+1)%images.length
    changeImage()
    
}, 4000);

changeImage()