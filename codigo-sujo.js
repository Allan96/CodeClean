$(document).ready(function() {
    $.ajax({
        type: 'GET',
        url: 'https://api.sheetson.com/v1/sheets/LivingQuality?spreadsheetId=1SK4NJIpVlqIHxY2Jivpf1aDuVdJsiguS1AJiFlDWs4U',
        data: { get_param: 'value' },
        dataType: 'json',
        success: function(json) {
            console.log(json);
            var i = 0;
            while (i < json['results'].length) {
                var a = json['results'][i]['Texto'];
                var b = json['results'][i]['Titulo'];
                var c = json['results'][i]['Imagem'];

                $('gerador').append('<table width="600" cellspacing="0" cellpadding="0" border="0" align="center">' +
                    '<tr>' +
                    '<td width="40" height="2"></td>' +

                    '<td width="100" height="2"><img width="100" height="2" src="http://martinluz.com/clientes/economatica/emkt/20190429-estudo/images/line.png" alt="" style="display:block; border:none; padding:none; margin:none;"></td>' +

                    '<td width="460" height="20"></td>' +
                    '</tr>' +
                    '</table>' +
                    '<table width="600" cellspacing="0" cellpadding="0" border="0" align="center">' +
                    '<tr>' +
                    '<td width="40"></td>' +
                    '<td width="520">' +
                    '<font style="font-family: Arial, Helvetica, sans-serif, Verdana, Geneva; font-size: 18px; color: #4a4a4a; line-height: 1.5; text-decoration: none;"><b>' +
                    b + '</b>' +
                    '</font><br><br>' +
                    '<font style="font-family: Arial, Helvetica, sans-serif, Verdana, Geneva; font-size: 13px; color: #4a4a4a; line-height: 1.69; text-decoration: none; ">' +
                    a + '</font> <br><br>' +
                    '</td>' +
                    '<td width="40"></td>' +
                    '</tr> <table width="600" cellspacing="0" cellpadding="0" border="0" align="center">' +
                    '<td width="600" height="374">' +
                    '<center><img src="' + c + '" alt="Quantidade de empresas" style="max-width: 600px;display:block; border:none; padding:none; margin:none; "></center>' +
                    '</td>' +
                    '<td width="19" height="374">' +
                    '</td>' +
                    '</tr>' +
                    '</table>' +
                    '</table>' +
                    '<table width="600" cellspacing="0" cellpadding="0" border="0" align="center">' +
                    '<tr>' +
                    '<td width="600" height="15">' +
                    '</td>' +
                    '</tr>' +
                    '</table>');
                i++;
            }

            download(document.body.outerHTML, "Estudo.html", "text/html");

        }
    });

});
