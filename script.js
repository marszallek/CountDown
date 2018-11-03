function dodomu(){
var today = new Date();
var newyear = new Date(2018, 10, 14, 13, 00, 00);
var toend = newyear.getTime() - today.getTime();
var day = Math.floor(toend / 86400000);
var hour = Math.floor(toend % 86400000 / 3600000);
var minutes = Math.floor(toend % 3600000 / 60000);
var seconds = Math.floor(toend % 60000 / 1000);

var czas = day + " Days " + hour + " Hours " + minutes + " Minutes " + seconds + " Seconds!!!";
document.getElementById('Pozostalo').innerHTML = czas;
setTimeout('dodomu()', 1000);
}