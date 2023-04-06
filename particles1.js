document.addEventListener("mousemove",(e)=>{
    let body=document.querySelector(".particles1");
    let particles=document.createElement('span');
    let x=e.offsetX;
    let y=e.offsetY;
    particles.style.left=x+'px';
    particles.style.top=y+'px';

    let size = Math.random()*8;
    particles.style.width=2+size+'px'
    particles.style.height=2+size+'px'

    let transFormValue = Math.random()*360;
    particles.style.transform='rotate('+transFormValue+'deg)';

    body.appendChild(particles);

    setTimeout(()=>{
        particles.remove()
    },2000)
})