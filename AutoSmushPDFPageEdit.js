/*jslint this:true */
/*jslint browser:true */
/*global
    $, parent
*/
$(document).ready(function () {
    "use strict";
    
    $(document).on("click", "a.InputfieldFileCompress", function (e) {
        e.preventDefault();
        var currentItem = $(this);
        var optUrl = currentItem.attr("href");
        //currentItem.html("Compressing <i class='fa fa-spin fa-spinner fa-fw'></i>");
        //currentItem.html(" <i class='fa fa-spin fa-spinner fa-fw'></i>");
        currentItem.html(currentItem.html() + "... <i class='fa fa-spin fa-spinner fa-fw'></i>");

        $.ajax({
            url: optUrl,
            cache: false,
            success: function (data) {
                currentItem.text(data);
                return false;
            },
            error: function (xhr, textStatus) {
                currentItem.text(textStatus);
                return false;
            }
        });
    });

});
