function HTMLToCanvas()
{
    html2canvas(document.querySelector("#banner")).then(canvas => {
        document.body.appendChild(canvas)
    });
}

document.getElementById('getval').addEventListener('change', readURL, true);
function readURL(){
   var file = document.getElementById("getval").files[0];
   var reader = new FileReader();
   reader.onloadend = function(){
      document.getElementById('circle').style.backgroundImage = "url(" + reader.result + ")";        
   }
   if(file){
      reader.readAsDataURL(file);
    }else{
    }
}