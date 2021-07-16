let num=16;
var pixelcolor="black";
const grid = document.getElementById("grid");
function buildgrid(){
for(i=0; i<num*num;i++)
{
    let square = document.createElement('div');
    square.classList.add('square');
    grid.setAttribute("style", `grid-template-columns: repeat(${num}, 1fr);`);
    grid.insertAdjacentElement('beforeend', square);
    square.addEventListener('pointerenter', ()=>{
        if(pixelcolor=="rainbow")
        {
            square.style.backgroundColor=rainbowgenerator();
        }
        square.style.backgroundColor=pixelcolor;
})
}
}
function removetransition(e)
{
    e.target.classList.remove('transition');
}
const buttons=document.querySelectorAll('button');
buttons.forEach(button=>{
    button.addEventListener('transitionend',removetransition);
});


function rainbowgenerator()
{
    var o = Math.round, r = Math.random, s = 255;
          return "rgb(" + o(r()*s) + "," + o(r()*s) + "," + o(r()*s)+ ")";
}
function changecolor(obj)
{
    var clicked_id=obj.id;
    if(clicked_id=='white'){ 
        pixelcolor="white";
        obj.classList.add('transition');
    }
    if(clicked_id=="rainbow")
    {
        pixelcolor="rainbow";
        obj.classList.add('transition');
    }
    if(clicked_id=="blue")
    {
    pixelcolor="rgb(95, 95, 224)";
    obj.classList.add('transition');
    }
    if(clicked_id=="black")
    {
    pixelcolor="black";
    obj.classList.add('transition');
    }
    if(clicked_id=="clear")
    {
        obj.classList.add('transition');
        clearall();
    }
}
function clearall()
{
    const sqaures=document.querySelectorAll('.square');
    sqaures.forEach(square=>{
        square.style.backgroundColor="white";
        });
}
buildgrid();

function updateval(val)
{
    const value=document.querySelector('.slider');
    value.innerHTML=val;
    num=val;
    const x=document.getElementById('grid');
    x.textContent='';
   buildgrid();
}
