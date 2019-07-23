$("#FormSerialize").submit(function(event) {
    event.preventDefault();
    $.ajax({
        type: 'GET',
        url: 'https://api.sheetson.com/v1/sheets/LivingQuality?spreadsheetId=1SK4NJIpVlqIHxY2Jivpf1aDuVdJsiguS1AJiFlDWs4U',
        data: { get_param: 'value' },
        dataType: 'json',
        success: function(resultado) {
            //GERA A TABELA
            GerarTabela(resultado);
        }
    });
});




function GerarTabela(resultado) {
    var Cont = 0;
    while (Cont < data.length) {
        var tipo_de_input = data[Cont]["name"];
        if (tipo_de_input == 'Titulo') {

            var tabelas = RenderTitutlo(data[Cont]["value"]);

        } else if (tipo_de_input == 'Texto') {

            var tabelas = RenderTexto(data[Cont]["value"].replace(/\n/g, '<br>'));

        } else if (tipo_de_input == 'Imagem') {

            var tabelas = RenderImagem(data[Cont]["value"]);

        } else if (tipo_de_input == 'Link') {

            var tabelas = RenderLink(data[Cont]["value"]);

        } else if (tipo_de_input == 'TFooter') {

            var tabelas = TextFooter(data[Cont]["value"]);
        }

        $('gerador').append(tabelas);

        Cont++;
    }
}

function RenderImagem(imagem) {
    //    GERAR IMAGEM
}

function RenderTitutlo(value) {
    //    GERAR TITULO
}

function RenderTexto(value) {
    //    GERAR TEXTO
}

function RenderLink(linkpost) {
    //    GERAR LINK

}

function TextFooter(textfinal) {
    //    GERAR FOOTER

}
