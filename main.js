function from() {
let a =+document.getElementById('in').value;
let from =document.getElementById('from').value;
let to = document.getElementById('to').value;
let resuilt =document.getElementById('resuilt');
    if(from===to){
 resuilt=a;
    }else {
        if (from ==='vnd'){
            resuilt=a/24000;
        }else {
            resuilt=a*24000;
        }
    }
document.getElementById('resuilt').innerHTML=resuilt + "" + resuilt;
}
