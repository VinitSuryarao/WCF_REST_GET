function getAllClients() {
    $.ajax({
        url: "Service/ClientService.svc/GetAllClients",
        type: "GET",
        dataType: "json",
        success: function (result) {
            clients = result;
            bindClientListToTable(clients);
        }
    });
}

function searchClient() {
    var id = $("#searchId").val();
    $.ajax({
        url: "Service/ClientService.svc/Client/"+id,
        type: "GET",
        dataType: "json",
        success: function (result) {
            console.log(result);
            client = result;
            bindClientListToTable(client);
        }
    });
}

