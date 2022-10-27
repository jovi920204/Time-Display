function showTime(){
    let date = new Date();
        dataValues = [
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
    ];
    var hour12;
    var hour24;
    let ampm = document.getElementsByClassName("ampm");
    if (date.getHours() > 12){
        ampm[0].textContent = "PM";
        hour24 = date.getHours();
        hour12 = hour24-12;
    }
    else{
        ampm[0].textContent = "AM";
        hour24 = hour12 = date.getHours();
    } 
    let hour = document.getElementsByClassName("hh");
    hour[0].textContent = String(hour12).padStart(2,'0');
    let minute = document.getElementsByClassName("mm");
    minute[0].textContent = String(date.getMinutes()).padStart(2,'0');
    let second = document.getElementsByClassName("ss");
    second[0].textContent = String(date.getSeconds()).padStart(2,'0');
    console.log(dataValues);
};
setInterval((showTime),500);