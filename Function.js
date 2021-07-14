function toggleCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
   
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    var prev_state_display = document.getElementById(cityName).style.display;
    
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    if( prev_state_display === "none"){
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
    } else {
        document.getElementById(cityName).style.display = "none";
        evt.currentTarget.className.replace(" active", "");
    }
}
document.getElementById("defaultOpen").click();

