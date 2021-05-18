$(document).ready(function() {
    $("input[name='title']").val("Название вакансии");
    $("textarea[name='description']").val("Описание вакансии");
    $("textarea[name='tags']").val("фулл тайм, удалёнка, офис");
});

$(".toggleable").keyup(function(){
    var value = $(this).val();
    var recipient = $(this).attr("name");
    if ( $(this).val() != ""){
        $("." + recipient).show();
        $("." + recipient).text(value);
    } 
    else {
        $("." + recipient).hide();
    }
});

$("#formTags").keyup(function(){
    document.getElementById("bannerTags").innerHTML = "";
    var value = $(this).val();
    var tags = value.split(',');
    for(var i = 0; i < tags.length; i++)
    {
        document.getElementById("bannerTags").innerHTML += '<div class="tag_bottom">' + tags[i] + '</div>';
    }
});

$("div.color_square").click(function(){
    $(".color_selection > div")
            .removeClass("selected")
            .removeClass("selected_white")
            .css('border', '')
            .css('box-shadow', '');
    var BannerColor = $(this).css("background-color");
    if ( BannerColor == 'rgb(255, 255, 255)') {
        $(this).addClass("selected_white");
        $(".banner")
            .css('background-color', '#FFFFFF')
            .css('color', '#000000');
        $(".logo")
            .css('background-image', 'url(images/logo_black.png)');
        $(".tag_vacancy")
            .css('background-color', '')
            .css('border-color', '#000000')
            .css('color', '#000000');
        $(".tag_bottom")
            .css('background-color', '#000000')
            .css('color', '#FFFFFF')
            .css('border-color', '');
    } else {
        $(this).addClass("selected");
        $(".banner")
            .css('background-color', BannerColor)
            .css('color', '#FFFFFF');
        $(".logo")
            .css('background-image', 'url(images/logo.png)');
        $(".tag_vacancy")
            .css('background-color', '')
            .css('border-color', '#FFFFFF')
            .css('color', '#FFFFFF');
        $(".tag_bottom")
            .css('background-color', '#FFFFFF')
            .css('color', '#000000')
            .css('border-color', '#FFFFFF');
    }
});

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

function backgroundSizeChange() {
    var BGsize = document.getElementById("BackgroundSizeID").value;
    $(".circle").css('background-size', BGsize + "%");
}

function HTMLToCanvas()
{
    window.scrollTo(0, 0);

    document.querySelector('canvas').outerHTML = "";

    html2canvas(document.querySelector('#banner')).then(canvas => {
        document.querySelector('.result').appendChild(canvas)  
    });;

    setTimeout(function() {
        document.querySelector('canvas').toBlob(function(blob) {
                saveAs(blob, "netology_banner.png");
        });
    }, 100);
}
