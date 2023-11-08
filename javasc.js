var c=document.querySelector("button");

var d=document.body;
var k=document.querySelectorAll(".tag");
console.log("hi");
var flag=0;
c.addEventListener("click",function(){
    if (flag==0){
        document.body.style.background = 'linear-gradient(to bottom right, black,rgb(30, 19, 61),rgb(42, 8, 136),rgb(57, 10, 185),rgb(87, 39, 218) )';
        d.style.color="white";
        k.forEach((e)=>{
            e.style.color="white";
        });
        flag=1;
    }
    else{
        document.body.style.background = 'linear-gradient(to bottom right, #eb8ce8,#f06bf7, #d36aed,#7356e5,#8288f5, #73a2f3)';
        d.style.color="black";
        
        k.forEach((e)=>{
            e.style.color="black";
        });
        flag=0;
    }
})
