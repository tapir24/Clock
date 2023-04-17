// var number=10;
// var number2=115.2;
// console.log(number);
// console.log(number+number2);
// console.log(number-number2);
// console.log(number+=number2);
// console.log(number2-=2);
// console.log(number);
// console.log(number2);
// console.log(number*number2);
// console.log(number/number2);
// console.log(number<number2);
// console.log(1>2&&2>1);
// console.log((1>2)||(2>1));
// console.log(!(1>2))
// console.log(1==="1")
function showtime(){
    var date=new Date();
    var hour=date.getHours();
    var min=date.getMinutes();
    var sec=date.getSeconds();
    var ses="am";
    if(hour==0){
        hour=12;
    }
    if(hour>12){
        hour=hour-12;
        ses="pm";
    }
    sec=(sec<10)?"0"+sec:sec
    min=(min<10)?"0"+min:min
    hour=(hour<10)?"0"+hour:hour
    document.getElementById("myclockdisplay").innerText=hour+"-"+min+"-"+sec+" "+ses;
    console.log(hour);
    setTimeout(showtime,1000);
}
showtime();