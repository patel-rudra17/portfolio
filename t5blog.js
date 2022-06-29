var date = new Date();

setInterval(currentTime,1000);
function currentTime(){
    const b = new Date();
    document.getElementById("current time").innerHTML = b.toLocaleTimeString();
}
setInterval(currentDate,1000);
function currentDate(){
    const b = new Date();
    document.getElementById("current date").innerHTML = b.toLocaleDateString();
}

setInterval(currentTime1,1000);
function currentTime1(){
    const b = new Date();
    document.getElementById("current time1").innerHTML = b.toLocaleTimeString();
}
setInterval(currentDate1,1000);
function currentDate1(){
    const b = new Date();
    document.getElementById("current date1").innerHTML = b.toLocaleDateString();
}

setInterval(currentTime2,1000);
function currentTime2(){
    const b = new Date();
    document.getElementById("current time2").innerHTML = b.toLocaleTimeString();
}
setInterval(currentDate2,1000);
function currentDate2(){
    const b = new Date();
    document.getElementById("current date2").innerHTML = b.toLocaleDateString();
}