$(function() {
    console.log('dziala');

    var $form = $('#contactForm');
    var $nameInput = $form.find('#nameInput');
    var $emailInput = $form.find('#emailInput');
    var $messageInput = $form.find('#messageInput');

    var $error = $form.find('.error');
    var $submit = $form.find([type="submit"]);
    
    $form.on('submit', $submit, function(event){
        event.preventDefault();
        console.log('click');
        var $nameInputNew = $nameInput.val();
        var $emailInputNew = $emailInput.val();
        var $messageInputNew = $messageInput.val();
        var emailReg = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/;
        var inputMessage = new Array("Twoje imię jest za krótkie", "Email nie zawiera @ lub kropki", "Wiadomość musi zawierać więcej niz 10 znaków");

        var isError = false;
        var errorMsg = '';
        
        if ($nameInputNew.length > 5)  {
            console.log('name OK');
        } else {
            errorMsg += inputMessage[0] + '<br/>';
            isError = true;
            console.log('name FAIL');
        }

        if (emailReg.test($emailInputNew) || 0) {
            console.log('email OK');
        } else {
            errorMsg += inputMessage[1] + '<br/>';
            isError = true;
            console.log('email FAIL');
        } 

        if ($messageInputNew.length > 10) {
            console.log('msg OK');
        } else {
            errorMsg += inputMessage[2] + '<br/>';
            isError = true;
            console.log('msg FAIL');
        } 
        
        if(isError) {
            $error.html(errorMsg);
            console.log('return False');
            return false;
        } else {
            $error.html('');
            console.log('return TRUE');
            return true;
        }       
    })
});
