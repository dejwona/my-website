$(function() {

    var $myContainer = $('#myContainer');
    var $secondPage = $myContainer.find('.secondPage');
    var $gallery = $secondPage.find('.gallery');
    var $pic = $gallery.find('.pic');
    var $img = $pic.find('a');
 

    var $newInfo = $pic.find('.newInfo');
    var $newInfoText = $pic.find('.newInfoText');
    $newInfo.hide();
  

        $pic.mouseenter(function() {
            $(this).children('a').children('img').animate({
                opacity: '0.2'
            }, 500);
            $(this).children('.newInfo').show();
        });

        $pic.mouseleave(function(){
            $(this).children('a').children('img').animate({
            opacity: '1'
            }, 500);
            $(this).children('.newInfo').hide();
        });


    var $form = $('#contactForm');
    var $nameInput = $form.find('#nameInput');
    var $emailInput = $form.find('#emailInput');
    var $messageInput = $form.find('#messageInput');

    var $error = $form.find('.error');
    var $submit = $form.find([type="submit"]);
    
    $form.on('submit', $submit, function(event){
        event.preventDefault();
        var $nameInputNew = $nameInput.val();
        var $emailInputNew = $emailInput.val();
        var $messageInputNew = $messageInput.val();
        var emailReg = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/;
        var inputMessage = new Array("Twoje imię jest za krótkie", "Email nie zawiera @ lub kropki", "Wiadomość musi zawierać więcej niz 10 znaków");

        var isError = false;
        var errorMsg = '';
        
        if ($nameInputNew.length > 5)  {
        } else {
            errorMsg += inputMessage[0] + '<br/>';
            isError = true;
        }

        if (emailReg.test($emailInputNew) || 0) {
        } else {
            errorMsg += inputMessage[1] + '<br/>';
            isError = true;
        } 

        if ($messageInputNew.length > 10) {
        } else {
            errorMsg += inputMessage[2] + '<br/>';
            isError = true;
        } 
        
        if(isError) {
            $error.html(errorMsg);
            return false;
        } else {
            $error.html('');
            return true;
        }       
    })
});
