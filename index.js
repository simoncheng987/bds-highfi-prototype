doShare("File1")
function doShare(fileName) {
    var i;
    var x = document.getElementsByClassName("file");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x = document.getElementsByClassName("test");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" w3-light-grey", "");
    }
    document.getElementById(fileName).style.display = "block";
    event.currentTarget.className += " w3-light-grey";
}