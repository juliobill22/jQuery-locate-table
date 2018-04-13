/* 
 * Autor: Julio Bill Schvenger
 *  Date: 13/04/2018
 * Montar a tabela com JQuery
 */

$(document).ready(function () {

    var v_imput =
            "<div id='divInput'>\n\
                <input type='text' placeholder='Pesquisar...' />\n\
             </div>";

    var v_table = '';
    for (var i = 0, max = 100; i < max; i++) {
        v_table =
                v_table +
                '<tr>' +
                '<td>' + i + '</td>' +
                '<td>' + i + ' Descrição</td>' +
                '</tr>';
    }
    $("p").html(v_imput +
            "<div id='divTable'>" +
            "<table border=0>" +
            "<thead>" +
            "    <tr>" +
            "        <th>Nome</th>" +
            "        <th>País</th>" +
            "    </tr>" +
            "</thead>" +
            "<tbody>"
            + v_table +
            "</tbody>" +
            "</table>" +
            "</div>");
});