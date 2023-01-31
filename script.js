$(document).ready(function () {
    $('#url').focusout(function () {
        let val = $('#url').val()
        $.ajax({
            url: val,

            success: function () {
                $('img').attr('src', val)
                $('a').attr('href', val)
                $('.btn-container').addClass('suc')
            },

            error: function () {
                $('.img-text').text('Wrong img link, please paste other or check it again')
                $('img').removeAttr('src')
                $('.btn-container').removeClass('suc')
            }
        });
        
    })
});