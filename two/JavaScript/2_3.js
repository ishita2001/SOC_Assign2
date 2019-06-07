$(document).ready(function(){
              $("#run").on("click", function() {
                var value = $("#myInput").val().toLowerCase();
                $("#list tr").filter(function() {
                  $(this).toggle($(this).find("td:eq(1)").text().toLowerCase().indexOf(value) > -1)
                });
              });
            });