let btn = document.querySelector("#one");
let inp = document.querySelector("input");
let ul =document.querySelector("#tq");
let fin = document.querySelector("#two");
let me=[];
let y=0;


btn.addEventListener("click",function(){
    let m = inp.value;
    let delbtn = document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("delete");
    let item= document.createElement("li");
    item.innerText=m;
    if(m!=""){
    item.appendChild(delbtn);
    ul.appendChild(item);
    me.push(m);
    inp.value="";
    console.log(me);
}
  
    let db= document.querySelectorAll(".delete");
    for (delbtn of db){
    delbtn.addEventListener("click", function(){
        let newme=[];
        let f = this.parentElement.childNodes[0];
        let x=[];
        x.push(f);
        for (let i = me.length - 1; i >= 0; i--) {
            if (me[i] !== x[0].textContent) {
                newme.push(me[i]);
            }
        }
        me=[];
        me=newme;
        let par = this.parentElement;
        par.remove();
        console.log(par);
    });
};
});
function rN(y){
    let limit = me.length;
    while(true){
        let randomNumber = Math.floor(Math.random() * limit);
        x=randomNumber;
        if(y!==x){
            break;
        }
    }
    return(x);
    
}
fin.addEventListener("click", function(){
    y=rN(y);
    console.log(me[y],me);
    console.log("button ");
    
    let ull=document.querySelector("#nam");
    ull.removeChild(ull.firstChild);
    
    let it=document.createElement("li");
    it.innerText=me[y];
    ull.appendChild(it);

  });
  console.log(me);