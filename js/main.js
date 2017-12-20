function SelectText(element) {
    var doc = document;
    var text = doc.getElementById(element);    
    if (doc.body.createTextRange) { // ms
        var range = doc.body.createTextRange();
        range.moveToElementText(text);
        range.select();
    } else if (window.getSelection) {
        var selection = window.getSelection();
        var range = doc.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);

    }
}

$(document).ready(function () {
    $('#tooltip').text('Press ⌘ + C copy');
   //textfield clicked
   $('input[type="text"]').each(function(){
    
        $(this).focus(function(){
           
          $(this).addClass('input-focus');
        });
    
        $(this).blur(function(){
          $(this).removeClass('input-focus');
        });
    
      });
      //onclick to shorten URL
    $('#btn').click(function(){
        //shorten URL
        if($('#btn').text() == "Shorten URL"){
            let inputURL = $('#input-url').val();
            let shortenURL = inputURL.split('?')[0];
            //display shorten input
            $('#shorten-display-container').text(shortenURL);
            SelectText("shorten-display-container");
          
            //change text of the button
            if($('#shorten-display-container').text() !==""){
                $('#btn').text('Copy');
            }    
        }

        //copy url
       else if($('#btn').text() == "Copy"){
          //  $('#shorten-display-container').attr('data-tooltip','Copied!');
          $("#tooltip").show("fast");
          $('#tooltip').text('Copied!');
          //copy to clipboard
          $('#input-url').select();
          document.execCommand("Copy");
         // alert("Copied the text: " +  $('#input-url').val());
        }
       
    });

    //hover shorten url display tooltips
    $('#shorten-display').hover(function(){
        if($('#shorten-display-container').text() !==""){
            $("#tooltip").show("fast");
           
        }
       // alert('hover');
    //    $("#tooltip").attr('display', 'block');
      //  $("#shorten-display").attr('title', 'This is the hover-over text');
        //$("#shorten-display").addClass('tooltip');
       
       

    },function(){
        $("#tooltip").hide("fast");
    }
);
   
});
