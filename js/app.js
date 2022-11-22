let ufo =document.getElementById('ufo');
let demarea=document.getElementById('demarea');
var left=0;
var topx=0;
var count=0;



document.body.onkeydown=(e)=>{
     if(e.keyCode===40){
        //   console.log(bottomx);

         topx+=5;
         ufo.style.top = `${topx}%`;
      }
    if(e.keyCode===37){
        console.log(left  );

        left-=5;
        ufo.style.left = `${left}%`;
    }
     if(e.keyCode===39){
        //   console.log( right );

         left+=5;
          ufo.style.left = `${left}%`;
      }
    if(e.keyCode===38){
        // console.log(topx  );

        topx-=5;
        ufo.style.top = `${topx}%`;
    }
    console.log("left"+ufo.style.left);
    console.log("topx"+ufo.style.top);
     
    if(ufo.style.top=="50%" && ufo.style.left=="50%")
    {
        demarea.style.backgroundColor='red';
     

        count++;
        ufo.style.top=0;
        ufo.style.left=0;
        document.getElementById('span').innerText=`YOU WIN...${count}`;
        topx=0;
        left=0;

    }
    else{
        demarea.style.backgroundColor='blue';
    }
    

}
