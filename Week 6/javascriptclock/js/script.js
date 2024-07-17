window.onload = function() {
    startTime();
    promtName();
};

function startTime() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();

    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);

    document.getElementById("myClock").innerHTML = h+ ":" +m+ ":" +s;

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






