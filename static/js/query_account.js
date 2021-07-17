
function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

var onBtnGetOTPCode = function (account) {

  url = "/otp_code/"+account
  $('#loader').show()
    $.ajax(
      { 
        url: url,
        type: 'GET',
        success: function(data, status, jqXHR) 
        {
          updateQueryTable(data["result_list"])
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

var onBtnQueryPurchased = function (env, account) {

  url = "/purchased_video/"
  if (account == "") {
    showWarningDialog("Please input Account field.")
  } else if (!isEmail(account)) {
    showWarningDialog("Please input Correct EMAIL format.")
  } else {
    $('#loader').show()

    data = {"email": account}
    headers = { "Content-Type": "application/json", "Query-Environment": env}
    $.ajax(
      { 
        url: url,
        type: 'GET',
        headers: headers,
        data: data,
        success: function(data, status, jqXHR) 
        {
          var info = data["result_list"]
          if (info.length == 0) {
            showWarningDialog("該條件查無資料"); 
          } else {
            updateQueryPurchasedTable(info)
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

var onBtnQueryDownloaded = function (env, account) {

  url = "/downloaded_video/"
  if (account == "") {
    showWarningDialog("Please input Account field.")
  } else if (!isEmail(account)) {
    showWarningDialog("Please input Correct EMAIL format.")
  } else {
    $('#loader').show()

    data = {"email": account}
    headers = { "Content-Type": "application/json", "Query-Environment": env}
    $.ajax(
      { 
        url: url,
        type: 'GET',
        headers: headers,
        data: data,
        success: function(data, status, jqXHR) 
        {
          var info = data["result_list"]
          if (info.length == 0) {
            showWarningDialog("該條件查無資料"); 
          } else {
            updateQueryDownloadedTable(info)
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

var onBtnDeleteDownloaded = function (env, account) {

  url = "/downloaded_video/"
  if (account == "") {
    showWarningDialog("Please input Account field.")
  } else if (!isEmail(account)) {
    showWarningDialog("Please input Correct EMAIL format.")
  } else {
    $('#loader').show()
    payload = {"email": account}
    headers = { "Content-Type": "application/json", "Query-Environment": env}
    $.ajax(
      { 
        url: url,
        type: 'DELETE',
        headers: headers,
        data: JSON.stringify(payload),
        success: function(data, status, jqXHR) 
        {
          console.log(data)
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

var onBtnDeletePurchased = function (env, account) {

  url = "/purchased_video/"
  if (account == "") {
    showWarningDialog("Please input Account field.")
  } else if (!isEmail(account)) {
    showWarningDialog("Please input Correct EMAIL format.")
  } else {
    $('#loader').show()
    payload = {"email": account}
    headers = { "Content-Type": "application/json", "Query-Environment": env}
    $.ajax(
      { 
        url: url,
        type: 'DELETE',
        headers: headers,
        data: JSON.stringify(payload),
        success: function(data, status, jqXHR) 
        {
          console.log(data)
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

var onBtnUpdateDownloadedExpire = function (env, account, license_id) {

  url = "/downloaded_video/"
  if (account == "") {
    showWarningDialog("Please input Account field.")
  } else if (license_id == "") {
    showWarningDialog("Please input license_id field.")
  } else if (!isEmail(account)) {
    showWarningDialog("Please input Correct EMAIL format.")
  } else {
    $('#loader').show()
    payload = {"email": account, "license_id": license_id}
    headers = { "Content-Type": "application/json", "Query-Environment": env}
    $.ajax(
      { 
        url: url,
        type: 'PATCH',
        headers: headers,
        data: JSON.stringify(payload),
        success: function(data, status, jqXHR) 
        {
          console.log(data)
          showWarningDialog("[Success] " + data["result"]);
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

var updateQueryTable = function (list) 
{
  console.log(list)
  var info= list;
  $("#query_result_table").find('thead tr').remove();
  $("#query_result_table").find('tbody tr').remove();

  $("#query_result_table").find('thead')
      .append($('<tr>')
        .append($('<th>')
          .append("Date")
          )
        .append($('<th>')
          .append("Account")
          )
        .append($('<th>')
          .append("OTP")
          )
        )

  for ( i = 0; i < info.length; i++) {
    $("#query_result_table").find('tbody')
      .append($('<tr>')
        .append($('<td>')
            .append(info[i]["date"])
          )
        .append($('<td>')
            .append(info[i]["delivered"])
          )
        .append($('<td>')
            .attr('class', "text-success")
            .append(info[i]["otp_code"])
          )
        )
  }
}

var updateQueryPurchasedTable = function (list) 
{
  var info= list;
  $("#query_result_table").find('thead tr').remove();
  $("#query_result_table").find('tbody tr').remove();

  $("#query_result_table").find('thead')
      .append($('<tr>')
        .append($('<th>')
          .append("video_id")
          )
        .append($('<th>')
          .append("display_title")
          )
        .append($('<th>')
          .append("license_id")
          )
        .append($('<th>')
          .append("license_type")
          )
        .append($('<th>')
          .append("display_time")
          )
        .append($('<th>')
          .append("license_time")
          )
        .append($('<th>')
          .append("purchase_time")
          )
        .append($('<th>')
          .append("purchase_plan_id")
          )
        .append($('<th>')
          .append("purchase_at")
          )
        .append($('<th>')
          .append("device_type")
          )
        .append($('<th>')
          .append("category")
          )
        )

  var env = $("#select_env").val()
  var web_url = WEB_HOST[env]
  for ( i = 0; i < info.length; i++) {
    $("#query_result_table").find('tbody')
      .append($('<tr>')
        .append($('<td>')
            .append($('<a>')
              .attr('href', web_url+"video/"+info[i]["video_id"])
              .append(info[i]["video_id"])
            )
          )
        .append($('<td>')
            .append(info[i]["display_title"])
          )
        .append($('<td>')
            .append(info[i]["license_id"])
          )
        .append($('<td>')
            .append(info[i]["license_type"])
          )
        .append($('<td>')
            .append(info[i]["display_start_time_date"])
            .append("<br/>")
            .append("<br/>")
            .append(info[i]["display_end_time_date"])
          )
        .append($('<td>')
            .append(info[i]["license_start_time_date"])
            .append("<br/>")
            .append("<br/>")
            .append(info[i]["license_end_time_date"])
          )
        .append($('<td>')
          .append($('<a>')
              .attr('onclick', "showTimelineDialog("+JSON.stringify(info[i]["timeline"])+", 'purchase')")
              .attr('href', "#", )
              .append(info[i]["purchase_start_time_date"])
              .append("<br/>")
              .append("<br/>")
              .append(info[i]["purchase_end_time_date"])
            )
          )
        .append($('<td>')
            .append(info[i]["purchase_plan_id"])
          )
        .append($('<td>')
            .append(info[i]["purchase_at_date"])
          )
        .append($('<td>')
            .append(info[i]["device_type"])
          )
        .append($('<td>')
            .append(info[i]["category"])
          )
        )
  }
}

var updateQueryDownloadedTable = function (list) 
{
  var info= list;
  $("#query_result_table").find('thead tr').remove();
  $("#query_result_table").find('tbody tr').remove();

  $("#query_result_table").find('thead')
      .append($('<tr>')
        .append($('<th>')
          .append("video_id")
          )
        .append($('<th>')
          .append("display_title")
          )
        .append($('<th>')
          .append("license_id")
          )
        .append($('<th>')
          .append("license_type")
          )
        .append($('<th>')
          .append("display_time")
          )
        .append($('<th>')
          .append("license_time")
          )
        .append($('<th>')
          .append("purchase_time")
          )
        .append($('<th>')
          .append("download_time")
          )
        .append($('<th>')
          .append("限時過期")
          )
        )

  var env = $("#select_env").val()
  var web_url = WEB_HOST[env]
  for ( i = 0; i < info.length; i++) {
    $("#query_result_table").find('tbody')
      .append($('<tr>')
        .append($('<td>')
            .append($('<a>')
              .attr('href', web_url+"video/"+info[i]["video_id"])
              .append(info[i]["video_id"])
            )
          )
        .append($('<td>')
            .append(info[i]["display_title"])
          )
        .append($('<td>')
            .append(info[i]["license_id"])
          )
        .append($('<td>')
            .append(info[i]["license_type"])
          )
        .append($('<td>')
            .append(info[i]["display_start_time_date"])
            .append("<br/>")
            .append("<br/>")
            .append(info[i]["display_end_time_date"])
          )
        .append($('<td>')
            .append(info[i]["license_start_time_date"])
            .append("<br/>")
            .append("<br/>")
            .append(info[i]["license_end_time_date"])
          )
        .append($('<td>')
            .append(info[i]["purchase_start_time_date"])
            .append("<br/>")
            .append("<br/>")
            .append(info[i]["purchase_end_time_date"])
          )
        .append($('<td>')
          .append($('<a>')
            .attr('onclick', "showTimelineDialog("+JSON.stringify(info[i]["timeline"])+", 'download')")
            .attr('href', "#", )
            .append(info[i]["download_start_time_date"])
            .append("<br/>")
            .append("<br/>")
            .append(info[i]["download_expire_time_date"])
            )
          )
        .append($('<td>')
          .append($('<button>')
            .attr('onclick', "onBtnUpdateDownloadedExpire('"+$("#select_env").val()+"', '"+$("#text_account").val()+"', '"+info[i]["license_id"]+"')")
            .attr('type', "button")
            .attr('class', "btn btn-success")
            .append("Action")
            )
          )
        )
  }
}

var updateTimelineTable = function(order_info, type) 
{
  table_name = "timeline_table"
  $("#"+table_name).find('tbody tr').remove();
  color = ["#B6E636","#5BC0DE" , "#337AB7" , "#D60024", "#E3CF57"]
  title = ['Display', 'Purchase', 'License', '購買時刻', 'Now']

  if (type == "download") {
    title[3] = '下載時刻'
  }
  else if (type == "purchase") {
    title[3] = '購買時刻'
  }

  for ( i = 0; i < order_info.length; i++) {
    tr_id = table_name + "_id_" + i

    $("#"+table_name).find('tbody')
      .append($('<tr>')
        .attr('id', tr_id)    
    )
    $("#"+tr_id).append($('<td>')
      .attr('width', 60)
      .append(title[i])
    )
    var one_d_array = order_info.join().split(",");
    var grid_num = Math.max.apply(null, one_d_array) + 1;
    for ( j = 0; j < grid_num; j++) {
      if ( j >= order_info[i][0] && j <= order_info[i][1]) {
        $("#"+tr_id).append($('<td>')
          .attr('bgcolor', color[i])
        )
      } else {
        $("#"+tr_id).append($('<td>')
          .attr('bgcolor', "white")
        )
      }

    }
  }
}

var onSelectEnvChanged = function(env)
{
  if(env == "qa"){
    $('#btn_delete_downloaded').removeAttr('disabled');
    $('#btn_delete_purchased').removeAttr('disabled');

  } else {
    $("#btn_delete_downloaded").attr('disabled', true);
    $("#btn_delete_purchased").attr('disabled', true);
  }
}

var showWarningDialog = function(msg)
{
  $("#dialog_warning_message").html(msg);
  $("#dialog_warning").modal('toggle');
}

var showTimelineDialog = function(order_info, type)
{
  if(order_info.length > 0) {
    updateTimelineTable(order_info, type)
    $("#dialog_timeline").modal('toggle');
  }
}

$(document).ready
(
  function()
  { 
    $('#loader').hide()
    $("#select_env").change(() => onSelectEnvChanged($("#select_env").val()));

    $("#btn_otp_code").click(() => onBtnGetOTPCode($("#select_email").val()));
    // saku.bys.test+011@gmail.com
    
    $("#btn_query_downloaded").click(() => onBtnQueryDownloaded($("#select_env").val(), $("#text_account").val()));
    $("#btn_query_purchased").click(() => onBtnQueryPurchased($("#select_env").val(), $("#text_account").val()));
    $("#btn_delete_downloaded").click(() => onBtnDeleteDownloaded($("#select_env").val(), $("#text_account").val()));
    $("#btn_delete_purchased").click(() => onBtnDeletePurchased($("#select_env").val(), $("#text_account").val()));

    $('[data-toggle="tooltip"]').tooltip();
  }
);

