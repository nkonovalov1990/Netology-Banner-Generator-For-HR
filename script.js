$("#title").keyup(function(){
        var str = $("#title").val();
        $(".title").text(str);
    });

$("#description").keyup(function(){
        var str = $("#description").val();
        if ( str != null){
            var str = $("#description").val();
            $(".description").css('display', 'block')
            $(".description").text(str);
        } else {
            $(".description").css('display', 'none')
        }
    });

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
    document.querySelector('canvas').outerHTML = "";

    html2canvas(document.querySelector("#container")).then(canvas => {
        document.getElementById("container").appendChild(canvas)  
    });;

    setTimeout(function() {
        document.querySelector('canvas').toBlob(function(blob) {
                saveAs(blob, "netology_banner.png");
        });
    }, 100);
}

function backgroundSizeChange() {
    var BGsize = document.getElementById("BackgroundSizeID").value;
    $(".circle").css('background-size', BGsize + "%");
}