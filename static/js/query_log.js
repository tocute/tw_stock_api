
var onBtnQueryLog = function (start_time, table_name) {
  var url = "/query_log"

  if (start_time == "") {
    showWarningDialog("Please input Start Time field.")
  } else if (table_name == "") {
    showWarningDialog("Please input table_name field.")
  } else {
    headers = { "Content-Type": "application/json"}
    device_types = $.map($('input[name="checkbox_device_type"]:checked'), function(checkbox) {
      return checkbox.value; 
    })
    data = {"start_time": start_time, "table_name": table_name, "duration": 5, "device_types": device_types}
    $('#loader').show()
    $.ajax(
      { 
        url: url,
        type: 'GET',
        data: data,
        success: function(data, status, jqXHR) 
        {
          var info = data["result_list"]
          if (info.length == 0) {
            showWarningDialog("該條件查無資料"); 
          } else {
            updateQueryLogTable(info)
          }
          $('#loader').hide()
        },
        error: function(jqXHR, textStatus, errorThrown)
        { 
          showWarningDialog("[Failed] " + url +"<br/>"+jqXHR.responseText+"<br/><"+jqXHR.status+">");
          $('#loader').hide()
        }
      }
    );
  }
}

var onBtnSystemLog = function (env, start_time) {
  var url = "/system_log/"+env

  if (start_time == "") {
    showWarningDialog("Please input Start Time field.")
  } else {
    headers = { "Content-Type": "application/json"}
    
    data = {"start_time": start_time}
    $('#loader').show()
    $.ajax(
      { 
        url: url,
        type: 'GET',
        data: data,
        headers:headers,
        success: function(data, status, jqXHR) 
        {
          $('#loader').hide()
          console.log(data)
        },
        error: function(jqXHR, textStatus, errorThrown)
        { 
          showWarningDialog("[Failed] " + url +"<br/>"+jqXHR.responseText+"<br/><"+jqXHR.status+">");
          $('#loader').hide()
        }
      }
    );
  }
}

var onBtnCloneTicket = function (ticket_id, ticket_type) {
  var url = "/clone_ticket"

  if (ticket_id == "") {
    showWarningDialog("Please input ticket_id field.")
  } else if (ticket_type == "") {
    showWarningDialog("Please input ticket_type field.")
  } else {
    headers = { "Content-Type": "application/json"}
    data = {"ticket_id": ticket_id, "ticket_type": ticket_type}
    $('#loader').show()
    $.ajax(
      { 
        url: url,
        type: 'GET',
        data: data,
        success: function(data, status, jqXHR) 
        {
          window.open(data['result'])
          $('#loader').hide()
        },
        error: function(jqXHR, textStatus, errorThrown)
        { 
          showWarningDialog("[Failed] " + url +"<br/>"+jqXHR.responseText+"<br/><"+jqXHR.status+">");
          $('#loader').hide()
        }
      }
    );
  }
}


var updateQueryLogTable = function (list) 
{
  
  var info = list;
  $("#query_result_table").find('thead tr').remove();
  $("#query_result_table").find('tbody tr').remove();
  if (info.length == 0) {
    return 
  }

  var keys = $.map( info[0], function( value, key ) {
    return key;
  });

  $("#query_result_table").find('thead').append($('<tr>'))
  for ( k = 0; k < keys.length; k++) {
    $("#query_result_table").find('thead tr')
      .append($('<th>')
        .append(keys[k])
      )
  }
  
  // var filter = $.map($('input[name="checkbox_device_type"]:checked'), function(checkbox) {
  //   return checkbox.value; 
  // })

  // var is_checked_devicetype = keys.includes("devicetype")

  for ( i = 0; i < info.length; i++) {
    // if (is_checked_devicetype) {
    //   devicetype = info[i]["devicetype"]
    //   if( filter.includes(devicetype) == false ) {
    //     continue
    //   }
    // }

    var tr_id = "query_result_table_id_" + i
    $("#query_result_table").find('tbody')
      .append($('<tr>')
        .attr('id', tr_id)
    )

    for ( k = 0; k < keys.length; k++) {
      key = keys[k]
      item = info[i][key]
      if (key == "uniqueid" && item != null && item.length > 16) {
        item = item.slice(0,16) + "..."
      }

      $("#"+tr_id)
        .append($('<td>')
          .append(item)
        )
    }
  }
}


var showWarningDialog = function(msg)
{
  $("#dialog_warning_message").html(msg);
  $("#dialog_warning").modal('toggle');
}


$(document).ready
(
  function()
  { 
    $('#loader').hide()
      
    $("#btn_query_log").click(() => onBtnQueryLog($("#text_start_time").val(), $("#text_table_name").val()));

    $("#btn_system_log").click(() => onBtnSystemLog($("#select_env").val(), $("#text_start_time").val()));

    $("#btn_clone_ticket").click(() => onBtnCloneTicket($("#text_ticket_id").val(), $("#text_ticket_type").val()));

    var today = new Date().toISOString().slice(0,16);
    // 2021-01-28T08:33
    $("#text_start_time").val(today)

    $('[data-toggle="tooltip"]').tooltip();
  }
);

