//AJAX//
var xhttp = new XMLHttpRequest();
xhttp.open('GET', 'data.json', true);
xhttp.send();
xhttp.onload = function(){
var dat = JSON.parse(xhttp.responseText);
console.log(dat);
    document.getElementById('1').innerHTML = dat.tireChange[0];
    document.getElementById('1a').innerHTML = dat.tireChange[1];
    document.getElementById('2').innerHTML = dat.paingingPersonalization[0];
    document.getElementById('2a').innerHTML = dat.paingingPersonalization[1];
    document.getElementById('3').innerHTML = dat.suspensionRepairChange[0];
    document.getElementById('3a').innerHTML = dat.suspensionRepairChange[1];
    document.getElementById('4').innerHTML = dat.brakesRepairChange[0];
    document.getElementById('4a').innerHTML = dat.brakesRepairChange[1];
    document.getElementById('5').innerHTML = dat.spokesCentering[0];
    document.getElementById('5a').innerHTML = dat.spokesCentering[1];
    document.getElementById('6').innerHTML = dat.gearRepairChange[0];
    document.getElementById('6a').innerHTML = dat.gearRepairChange[1];
    document.getElementById('7').innerHTML = dat.chainChange[0];
    document.getElementById('7a').innerHTML = dat.chainChange[1];
    document.getElementById('8').innerHTML = dat.weldingService[0];
    document.getElementById('8a').innerHTML = dat.weldingService[1];
}