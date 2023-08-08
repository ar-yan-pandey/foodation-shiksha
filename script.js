function menubutton(){
    var head = document.getElementById("mobile")
    var hb = document.getElementById("Homebox")
    var head2 = document.getElementById('Close')
    var menu = document.getElementById("menuicon")
    menu.style.display='none';
    head2.style.display='block';
    head.style.display='grid';
    hb.style.display='none';
    head.style.zIndex=4
}
function menuclosebutton(){
    var head = document.getElementById("mobile")
    var hb = document.getElementById("Homebox")
    var menu = document.getElementById("menuicon")
    var head2 = document.getElementById('Close')
    head2.style.display='none';
    hb.style.display='flex';
    menu.style.display='';
    head.style.display='none';

}