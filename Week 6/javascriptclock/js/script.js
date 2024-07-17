window.onload = function() {
    startTime();
    promtName();
};

function startTime() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let d = today.getDay();
    let dt;

    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    
    if (d == "1") {
        dt = "Pazartesi";
    } else if (d == "2") {
        dt = "Salı";
    } else if (d == "3") {
        dt = "Çarşamba";
    } else if (d == "4") {
        dt = "Perşembe";
    } else if (d == "5") {
        dt = "Cuma";
    } else if (d == "6") {
        dt = "Cumartesi";
    } else if (d == "7") {
        dt = "Pazar";
    };

    document.getElementById("myClock").innerHTML = h+ ":" +m+ ":" +s+ " - " +dt;

    t = setTimeout ("startTime()", 1000);
};

function checkTime(i) {
    if (i<10) {
        i = "0" + i;
    }
    return i;
};

function promtName () {
    let name = prompt("Adınız Nedir?");
    document.getElementById("myName").innerHTML = name;

}






