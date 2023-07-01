$(document).ready(function() {


    $('#telefone').mask('(00) 00000-0000')

    $('#cpf').mask('000.000.000-00')

    $('#cep').mask('00000-000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            }
        },
        messages: {
            nome: "<span class='erro-message'>Por Favor, insira seu nome</span>",
            email: "<span class='erro-message'>Por Favor, insira seu E-Mail</span>",
            telefone: "<span class='erro-message'>Por favor, insira seu Telefone</span>",
            cpf: "<span class='erro-message'>Por Favor, insira seu CPF</span>",
            enD: "<span class='erro-message'>Por Favor, insira seu Endereço</span>",
            cep: "<span class='erro-message'>Por Favor, insira seu CEP</span>",
        },
    })

})