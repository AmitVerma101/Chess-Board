let board_size=8;



let div1=document.getElementById("div1");
function newLine(){
    let nl=document.createElement("br");
    div1.appendChild(nl);
    
}

function print(){
    for(let i=0;i<board_size;i++){
        let ele=document.createElement("label");
        
        if(i%2==0){
            let data1=document.createTextNode("*#*#*#*#");
            ele.appendChild(data1);
        }
        else {
            let data2=document.createTextNode("#*#*#*#*");
           ele.appendChild(data2);
        }
        div1.appendChild(ele);
        newLine();
    }
}
print();