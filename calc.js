$(function(){
    $('#calc').click(function(){
        const milhas = parseFloat($('#milhas').val());
        console.log(milhas);
        const metros = 1609.34 * milhas;
        $('#metros').val(metros);
        console.log(metros);

    });
});