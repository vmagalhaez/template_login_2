$("#form-recuperar").submit(function () {
  
    event.preventDefault();
    var formData = new FormData(this);

    $.ajax({
        url: "#",
        type: 'POST',
        data: formData,

        success: function (mensagem) {
            $('#mensagem-recuperar').text('');
            $('#mensagem-recuperar').removeClass()
            if (mensagem.trim() == "Recuperado com Sucesso") {				
                $('#email-recuperar').val('');
                $('#mensagem-recuperar').addClass('text-success')
                $('#mensagem-recuperar').text('Sua Senha foi enviada para o Email')			
            } else {
                $('#mensagem-recuperar').addClass('text-danger')
                $('#mensagem-recuperar').text(mensagem)
            }
        },

        cache: false,
        contentType: false,
        processData: false,

    });

});