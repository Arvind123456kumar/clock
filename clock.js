setInterval(()=>{
let date =new Date();
let h=date.getHours();
let m=date.getMinutes();
let s=date.getSeconds();
let hRotation=30*h+m/2;
let mRotation=6*m;
let sRotation=6*s;
hour.style.transform=`rotate(${hRotation}deg)`;
minut.style.transform=`rotate(${mRotation}deg)`;
second.style.transform=`rotate(${sRotation}deg)`;bd
},1000)