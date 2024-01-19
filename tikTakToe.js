let r1,r2,r3,r4,r5,r6,r7,r8,r9;
 r1=document.getElementById("i1").value ;
 r2=document.getElementById("i2").value ;
 r3=document.getElementById("i3").value ;
 r4=document.getElementById("i4").value ;
 r5=document.getElementById("i5").value ;
 r6=document.getElementById("i6").value ;
 r7=document.getElementById("i7").value ;
 r8=document.getElementById("i8").value ;
 r9=document.getElementById("i9").value ;

 let r1btn, r2btn, r3btn, r4btn, r5btn, r6btn, r7btn, r8btn, r9btn ;
  r1btn=document.getElementById("i1") ;
  r2btn=document.getElementById("i2") ;
  r3btn=document.getElementById("i3") ;
  r4btn=document.getElementById("i4") ;
  r5btn=document.getElementById("i5") ;
  r6btn=document.getElementById("i6") ;
  r7btn=document.getElementById("i7") ;
  r8btn=document.getElementById("i8") ;
  r9btn=document.getElementById("i9") ;


  let flag=1

 
  function row1(){
    if(flag==1)
    {
        r1.value="X";
        r1btn.dissable=true;
        flag=0
    }else{
        r1.value="O";
        r1btn.dissable=true;
        flag=1
    }
  }

  function row2(){
    if(flag==1)
    {
        r2.value="X";
        r2btn.dissable=true;
        flag=0
    }else{
        r2.value="O";
        r2btn.dissable=true;
        flag=1
    }
  }

  function row3(){
    if(flag==1)
    {
        r3.value="X";
        r3btn.dissable=true;
        flag=0
    }else{
        r3.value="O";
        r3btn.dissable=true;
        flag=1
    }
  }

  function row4(){
    if(flag==1)
    {
        r4.value="X";
        r4btn.dissable=true;
        flag=0
    }else{
        r4.value="O";
        r4btn.dissable=true;
        flag=1
    }
  }

  function row5(){
    if(flag==1)
    {
        r5.value="X";
        r5btn.dissable=true;
        flag=0
    }else{
        r5.value="O";
        r5btn.dissable=true;
        flag=1
    }
  }

  function row6(){
    if(flag==1)
    {
        r6.value="X";
        r6btn.dissable=true;
        flag=0
    }else{
        r6.value="O";
        r6btn.dissable=true;
        flag=1
    }
  }

  function row7(){
    if(flag==1)
    {
        r7.value="X";
        r7btn.dissable=true;
        flag=0
    }else{
        r7.value="O";
        r7btn.dissable=true;
        flag=1
    }
  }

  function row8(){
    if(flag==1)
    {
        r8.value="X";
        r8btn.dissable=true;
        flag=0
    }else{
        r8.value="O";
        r8btn.dissable=true;
        flag=1
    }
  }

  function row9(){
    if(flag==1)
    {
        r9.value="X";
        r9btn.dissable=true;
        flag=0
    }else{
        r9.value="O";
        r9btn.dissable=true;
    }
  }