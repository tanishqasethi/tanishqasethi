function calculate(){
    var a=parseInt(document.getElementById('bookOne').value);
    var b=parseInt(document.getElementById('bookTwo').value);
    var c=parseInt(document.getElementById('bookThree').value);
    var d=parseInt(document.getElementById('bookFour').value);
    var e=parseInt(document.getElementById('bookFive').value);
    var f=parseInt(document.getElementById('bookSix').value);
    if (a>100 || b>100 || c>100 || d>100 || e>100 || f>100) 
    {
        alert("Please enter Correct value");
    }
    else
    {
      var obtain=a+b+c+d+e+f;
      document.getElementById("obtain").innerHTML=obtain;
      var per=obtain/600*100;
      document.getElementById("per").innerHTML=per;

      // if(per<=35){
      // document.getElementById("grade").innerHTML=k;
      // }
      // else if(per>=36 && per<=50){
      //   document.getElementById("grade").innerHTML=j;
      // }
      // else if(per>=51 && per<=75){
      //   document.getElementById("grade").innerHTML=i;
      // }
      // else if(per>=76 && per<=90){
      //   document.getElementById("grade").innerHTML=h;
      // }
      // else{
      //   document.getElementById("grade").innerHTML=g;
      // }
    }
}