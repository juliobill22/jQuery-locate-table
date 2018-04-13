/* 
 * Autor: Julio Bill Schvenger
 *  Date: 13/04/2018
 * Locate in table html com Jquery
 * Procurar em qualquer coluna da tabela o texto digitado.
 */

$(document).ready(function () {
    $("input").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("table tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
});