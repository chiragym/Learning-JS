const randomColor = function(){
   const hex = '0123456789ABCDEF'
   let color = '#'
   for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)] 
   } 
   return color
}
let setIntervalid;
const StartColor = function(){
    function changecolor (){
        document.body.style.backgroundColor = randomColor()
    }
   if(!setIntervalid){ 
    setIntervalid = setInterval(changecolor, 1000)
}
}
const StopColor = function(){
  clearInterval(setIntervalid)
  setIntervalid = null
}

document.querySelector('#start').addEventListener('click',StartColor)
document.querySelector('#stop').addEventListener('click',StopColor)