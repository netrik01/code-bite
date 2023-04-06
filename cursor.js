// Cursor 2

const coords={x:0 ,y:0};
const circles=document.querySelectorAll(".circle ");
const colors=[
    // "#1f005c",
    // "#48005f",
    // "#680060",
    // "#830060",
    // "#9c155f",
    // "#b22c5e",
    // "#c5415d",
    // "#d5585c",
    // "#e36e5c",
    // "#ef865e",
    // "#f89d63",
    // "#ffb56b",
    "#5effc2",
    "#4dfbc5",
    "#00efcd",
    "#55345c", 
    "#00c6dc",
    "#00aad8",
    "#00ddd7",
    "#563862",
    "#574474",
    "#52578f",
    "#3c70ad",
    "#008cc7",
]
circles.forEach(function(circle,index){
    circle.x=0;
    circle.y=0;
    circle.style.backgroundColor=colors[index % colors.length]
});

window.addEventListener("mousemove",function(e){
    coords.x=e.clientX;
    coords.y=e.clientY;

});

function animatecircle(){

    var x = coords.x;
    var y = coords.y;

    circles.forEach(function(circle, index){
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";
        // circle.style.top = `${y-12}px`
        // circle.style.left = `${x-12}px`

        circle.style.scale = (circles.length - index)/circles.length;
        
        circle.x=x;
        circle.y=y;
        
        const nextCircle = circles[index +1] || circles[0];
        x += (nextCircle.x - x)*0.3;
        y += (nextCircle.y - y)*0.3;
    });

    requestAnimationFrame(animatecircle);
}
animatecircle();


// Cursor 3

