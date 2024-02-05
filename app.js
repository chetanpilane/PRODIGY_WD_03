const p=document.querySelectorAll('.a');
const win=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[3,4,5],[6,7,8],[2,4,6]]
let turn=false;
const r=document.getElementById('x');
p.forEach((a)=>{
    a.addEventListener('click',()=>{
     if(turn===false)
     {
        a.innerHTML="X";

     }
     else{
        a.innerHTML="O"
     }
     turn=!turn;
     a.disabled=true;
   
     
    })
    check();
})
function restart()
{
    p.forEach((a)=>{
        a.innerHTML="";
        a.disabled=false;
        })
    

}
const check=()=>{
    for (let patterns of win)
    {
    const a=p[patterns[0]].innerHTML;
    const b=p[patterns[1]].innerHTML;
    const c=p[patterns[2]].innerHTML;

    if(a!==""&&b!==""&&c!=="")
    {
        if(a===b&&b===c)
        
        {
            if(a==="X")
            {
                alert("WINNER IS X");
            }
            else{
                alert("WINNER IS O");
            }
           restart();
        }
    }
    }
}