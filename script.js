function changeColor(){
    var BannerColor = $('input[name="BannerColor"]:checked').val();
    if ( BannerColor != '#FFFFFF') {
        $(".logo")
            .css('background-image', 'url(images/logo.png)');
        $(".banner")
            .css('background-color', BannerColor)
            .css('color', '#FFFFFF');
        $(".tag_vacancy")
            .css('background-color', '')
            .css('border-color', '#FFFFFF')
            .css('color', '#FFFFFF');
        $(".tag_fulltime, .tag_remote, .tag_office")
            .css('background-color', '#FFFFFF')
            .css('color', '#000000')
            .css('border-color', '#000000');
      } else {
        $(".logo")
            .css('background-image', 'url(images/logo_black.png)');
        $(".banner")
            .css('background-color', BannerColor)
            .css('color', '#000000');
        $(".tag_vacancy")
            .css('background-color', '#FFFFFF')
            .css('border-color', '#000000')
            .css('color', '#000000');
        $(".tag_fulltime, .tag_remote, .tag_office")
            .css('background-color', '#000000')
            .css('color', '#FFFFFF')
            .css('border-color', '#FFFFFF');
      }
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

function HTMLToCanvas()
{
    html2canvas(document.querySelector("#banner")).then(canvas => {
        document.body.appendChild(canvas)
    });
}