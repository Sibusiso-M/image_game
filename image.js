
window.onload = function (){
   /* var image = document.getElementById("zero");
    image.onclick = showImage; // wait for this event
    */
   var btnRefreash = document.getElementById("btnRefreash");
   btnRefreash.onclick = refreash;
   
   var images = document.getElementsByTagName("img");
    console.log("here");
   console.log(images);
   
    for (var i = 0; i < images.length ; i++) {
      //  images[i].onclick  = showAnswer;
        images[i].onmouseover = showAnswer;
      //  images[i].onmouseout = reblur(images[i]);
        images[i].onmouseout = reblur;
    }
}

function showAnswer(eventObj){
    var image = eventObj.target;
    console.log(eventObj);
    var name = image.id;
    image.src = "./assets/"+name+".jpg";
    //setTimeout(reblur, 2000,image);
}
 
function refreash(){
    document.location.reload();
}

//function reblur(imageParam){
function reblur(eventObj){
    var image = eventObj.target;
    var name = image.id;
    name = name+"blur"+".jpg"
    image.src = "./assets/"+name;
}