var p1 = "x";
var person1=[],person2=[];
var count=0, c12=0, c22=0;
var win=["012","345","678","036","147","258","048","246"];

function rest(){
    count=0;
    document.getElementById("reset").style.display="none";
    person1=[];
    person2=[];
    document.getElementById("reslt").innerHTML="";
    for(let i=0;i<9;i++){
        document.getElementById(String(i)).textContent="";
        document.getElementById(String(i)).disabled=false;
        
    }

}

function fun(n){ 
    var pname1=document.getElementById("qwe").innerText;
    var pname2=document.getElementById("qwe2").innerText;
               
    if ( count%2==0){
        p1="X";
        person1.push(n);
    }else{
        p1="O";
        person2.push(n);
    }
    if(count==8){
        document.getElementById("reslt").innerHTML="Draw";
        document.getElementById("reset").style.display="inline";
        
    }
    //console.log(person1+"  "+person2);
    //player 1 checking
    c12=0;
    for(let p=0;p<win.length;p++){
        let temp=win[p];
        console.log(temp);
        for (let i=0;i<person1.length;i++){
            let pp1=person1[i];
            if(temp.includes(pp1)){
                c12+=1;
            }
            if(c12==3){
                document.getElementById("reslt").innerHTML=pname1+" win";
                
                document.getElementById("reset").style.display="inline";               
            }
        }
    c12=0;
    }
    //player 2 checking
    c22=0;
    for(let p=0;p<win.length;p++){
        let temp=win[p];
        for (let i=0;i<person2.length;i++){
            if(temp.includes(person2[i])){
                c22+=1;
            }
            if(c22==3){
                document.getElementById("reslt").innerHTML=pname2+" win";
                person1, person2=[];
                document.getElementById("reset").style.display="inline";
            }
        }
        c22=0;
    }
    document.getElementById(n).textContent=p1;
    document.getElementById(n).disabled=true;
    count+=1;
}



