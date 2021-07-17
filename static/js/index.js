
var onBtnRunSmokeTest = function (env) {

  url = "/health_check/run"
  headers = { "Content-Type": "application/json", "Query-Environment": env}
  $('#loader').show()
  $.ajax(
    { 
      url: url,
      type: 'GET',
      headers: headers,
      success: function(data, status, jqXHR) 
      {
        window.open(data["result_path"], '_blank');
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

var onBtnQueryAPIHealthCheck = function (env, api_target) {

  url = "/health_check/"+env+"/url/"+api_target
  data = {"api_target": api_target}
  $('#loader').show()
  $.ajax(
    { 
      url: url,
      type: 'GET',
      success: function(data, status, jqXHR) 
      {
        var health_check_path = data["path"];
        console.log("[DEBUG] " + health_check_path)
        var check_result = data["result"];
        message = "<string class='text-primary'>[Success]</string> <br/>"
        if (check_result != "Success")
          message += check_result
        else
          message += "跑了20次 Health Check, 結果均相同" 
        
        showWarningDialog(message + 
              "<br/><button onclick=\"window.open('"+health_check_path+"')\" type='button' class='btn btn-success'>前往</button>");  


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

var onBtnGetHealthCheckHistory = function (env) {

  url = "/health_check/list"
  headers = { "Content-Type": "application/json", "Query-Environment": env}
  $('#loader').show()
  $.ajax(
    { 
      url: url,
      type: 'GET',
      headers: headers,
      success: function(data, status, jqXHR) 
      {
        updateHealthCheckTable(data["result_list"])
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

var onBtnGetDeployStatus = function (env) {

  url = "/health_check/deploy_status"
  headers = { "Content-Type": "application/json", "Query-Environment": env}
  $('#loader').show()
  $.ajax(
    { 
      url: url,
      type: 'GET',
      headers: headers,
      success: function(data, status, jqXHR) 
      {
        updateDeployStatusTable(data["result_list"])
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

var onBtnCheckDatabaseStatus = function (env) {

  url = "/health_check/db_lock"
  headers = { "Content-Type": "application/json", "Query-Environment": env}
  $('#loader').show()
  $.ajax(
    { 
      url: url,
      type: 'GET',
      headers: headers,
      success: function(data, status, jqXHR) 
      {
        var info = data["result_list"]
        if (info.length == 0) {
            showWarningDialog("Database 目前沒有 Lock Table");
            updateQueryResultTable(info) 
          } else {
            updateQueryResultTable(info, ["Database", "Table", "In_use", "Name_locked"])
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

var onBtnCheckScriptStatus = function (env) {

  url = "/health_check/script_lock"
  headers = { "Content-Type": "application/json", "Query-Environment": env}
  $('#loader').show()
  $.ajax(
    { 
      url: url,
      type: 'GET',
      headers: headers,
      success: function(data, status, jqXHR) 
      {
        var info = data["result_list"]
        if (info.length == 0) {
            showWarningDialog("Database 目前沒有 Lock Script"); 
        } 
        updateQueryResultTable(info, ["trx_started", "trx_mysql_thread_id", "trx_query"])
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

var onBtnCheckAPIStatus = function (env) {

  url = "/health_check/api_status"
  headers = { "Content-Type": "application/json", "Query-Environment": env}
  $('#loader').show()
  $.ajax(
    { 
      url: url,
      type: 'GET',
      headers: headers,
      success: function(data, status, jqXHR) 
      {
        var info = data["result_list"]
 
        updateAPIStatusTable(info, ["api name", "status", "comment"])
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

var onSelectEnvChanged = function(env)
{
  if(env == "prod"){
    $("#btn_check_now").attr('disabled', true);
  } else {
    $('#btn_check_now').removeAttr('disabled');
  }
}

var updateHealthCheckTable = function (list) 
{
  var info= list;
  $("#query_result_table").find('thead tr').remove();
  $("#query_result_table").find('tbody tr').remove();

  $("#query_result_table").find('thead')
      .append($('<tr>')
        .append($('<th>')
          .append("Date")
          )
        .append($('<th>')
          .append("Check Result")
          )
        )
  
  for ( i = 0; i < info.length; i++) {
    arr = info[i]["path"].split('/')
    result_text = "Success"
    result_text_style = "text-success"

    if (info[i]["failed"] != 0)
    {
      result_text = info[i]["failed"] +" / "+ info[i]["total"]
      result_text_style = "text-danger"
    }

    timestamp = arr[4]
    $("#query_result_table").find('tbody')
      .append($('<tr>')
        .append($('<td>')
          .append($('<a>')
            .attr('href', info[i]["path"])
            .append(timestamp)
          )
        )
        .append($('<td>')
            .attr('class', result_text_style)
            .append($('<strong>')
              .append(result_text)
            )
        )
      );
  }
}

var updateAPIStatusTable = function (list) 
{
  var info= list;
  $("#query_result_table").find('thead tr').remove();
  $("#query_result_table").find('tbody tr').remove();

  $("#query_result_table").find('thead')
      .append($('<tr>')
        .append($('<th>')
          .append("API Name")
          )
        .append($('<th>')
          .append("Status")
          )
        )
  
  for ( i = 0; i < info.length; i++) {

    result_text_style = "text-success"

    var item = info[i]
    var status = "Success"
    if (item["status"] > 0) {
      result_text_style = "text-danger"
      status = item["comment"]
    } 
    else if (item["status"] < 0) {
      result_text_style = "text-warning"
      status = item["comment"]
    } 
    status = status.replaceAll("\n","<p>")

    $("#query_result_table").find('tbody')
      .append($('<tr>')
        .append($('<td>')
          .append(item["api_name"])
        )
        .append($('<td>')
            .attr('class', result_text_style)
            .append($('<strong>')
              .append(status)
            )
        )
      );
  }
}

var updateQueryResultTable = function (list, default_keys = []) 
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

  if (default_keys != [])
    keys = default_keys

  $("#query_result_table").find('thead').append($('<tr>'))
  for ( k = 0; k < keys.length; k++) {
    $("#query_result_table").find('thead tr')
      .append($('<th>')
        .append(keys[k])
      )
  }

  for ( i = 0; i < info.length; i++) {
    var tr_id = "query_result_table_id_" + i
    $("#query_result_table").find('tbody')
      .append($('<tr>')
        .attr('id', tr_id)
    )

    if (info[i]["state"] == "ERROR") {
      $("#"+tr_id).addClass("bg-danger text-white")
    }

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

var updateDeployStatusTable = function (list) 
{
  var info= list;
  $("#query_result_table").find('thead tr').remove();
  $("#query_result_table").find('tbody tr').remove();

  $("#query_result_table").find('thead')
    .append($('<tr>')
      .append($('<th>')
        .append("Name")
        )
      .append($('<th>')
        .append("Version")
        )
      .append($('<th>')
        .append("Deploy Status")
        )
      .append($('<th>')
        .append("Update Date")
        )
      )

  for ( i = 0; i < info.length; i++) {
    // The status of pipelines, one of: 
    //   created, waiting_for_resource, preparing, pending, 
    //   running, success, failed, canceled, skipped, manual, scheduled
    text_style = "text-warning"
    if (info[i]["status"] == 'success')
      text_style = "text-success"
    else if (info[i]["status"] == 'failed' || info[i]["status"] == 'canceled')
      text_style = "text-danger"

    $("#query_result_table").find('tbody')
      .append($('<tr>')
        .append($('<td>')
          .append($('<a>')
            .attr("href", info[i]["web_url"])
            .append(info[i]["name"])
          )
        )
        .append($('<td>')
          .append($('<a>')
            .attr("href", info[i]["health_check_url"])
            .append(info[i]["version"])
          )
        )
        .append($('<td>')
          .attr('class', text_style)
          .append($('<strong>')
            .append(info[i]["status"])
          )
        )
        .append($('<td>')
          .append($('<a>')
            .attr("href", "#")
            .attr("data-toggle", "tooltip")
            .attr("title", info[i]["updated_at"])
            .append(prettyDate(info[i]["updated_at"]))
          )
        )
      );
  }
  $('[data-toggle="tooltip"]').tooltip(); 
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
    $("#select_env").change(() => onSelectEnvChanged($("#select_env").val()));

    $("#btn_query_api_health").click(() => onBtnQueryAPIHealthCheck($("#select_env").val(), $("#text_api_target").val()));

    $("#btn_health_history").click(() => onBtnGetHealthCheckHistory($("#select_env").val()));

    $("#btn_deploy_status").click(() => onBtnGetDeployStatus($("#select_env").val()));
    
    $("#btn_check_database").click(() => onBtnCheckDatabaseStatus($("#select_env").val()));

    $("#btn_check_script").click(() => onBtnCheckScriptStatus($("#select_env").val()));

    $("#btn_check_now").click(() => onBtnRunSmokeTest($("#select_env").val()));
    
    $("#btn_check_api_status").click(() => onBtnCheckAPIStatus($("#select_env").val()));
  }
  
);

