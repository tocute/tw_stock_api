
var onBtnQueryVideoInfo = function (env, something_id, something_id_type) {
  var url = "/query_id"
  something_id = something_id.trim()

  if (something_id == "") {
    showWarningDialog("Please input ID field.")
  } else {
    headers = { "Content-Type": "application/json", "Query-Environment": env}
    data = {"something_id": something_id, "id_type": something_id_type}
    $('#loader').show()
    $.ajax(
      { 
        url: url,
        type: 'GET',
        data: data,
        headers:headers,
        success: function(data, status, jqXHR) 
        {
          updateQueryIdTable(data["result_list"])
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

var onBtnQueryVideoByType = function (env, video_type) {

  var url = "/query_video"
  if (video_type == "") {
    showWarningDialog("Please input video_type field.")
  } else {
    changeBtnState("#btn_query_"+video_type)

    headers = { "Content-Type": "application/json", "Query-Environment": env}
    data = {"video_type": video_type}
    $('#loader').show()
    $.ajax(
      { 
        url: url,
        type: 'GET',
        data: data,
        headers:headers,
        success: function(data, status, jqXHR) 
        {
          if (video_type == 'offline' || 
            video_type == 'expire' || 
            video_type == 'preorder') {
            updateQueryLicenseTable(data["result_list"])
          } else if(video_type == 'discount') {
            updateQueryDiscountTable(data["result_list"])
          } else if(video_type == 'god') {
            updateQueryPackageTable(data["result_list"])
          } else {
            updateQueryIdTable(data["result_list"])
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

var onBtnQueryVideoBySubdub = function (env, sub_dub) {
  var url = "/query_subdub"
  if (sub_dub == "") {
    showWarningDialog("Please input subdub field.")
  } else {
    changeBtnState("#btn_query_subdub")
    headers = { "Content-Type": "application/json", "Query-Environment": env}
    data = {"sub_dub": sub_dub}

    $('#loader').show()
    $.ajax(
      { 
        url: url,
        type: 'GET',
        data: data,
        headers:headers,
        success: function(data, status, jqXHR) 
        {
          updateQueryIdTable(data["result_list"])
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

var onBtnQueryVideoByResolution = function (env, resolution) {
  var url = "/query_resolution"
  if (resolution == "") {
    showWarningDialog("Please input resolution field.")
  } else {
    changeBtnState("#btn_query_resolution")
    headers = { "Content-Type": "application/json", "Query-Environment": env}
    data = {"sales_plan": resolution}
    $('#loader').show()
    $.ajax(
      { 
        url: url,
        type: 'GET',
        data: data,
        headers:headers,
        success: function(data, status, jqXHR) 
        {
          updateQueryLicenseTable(data["result_list"])
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

var onBtnQueryVideoByLincenseId = function (env, license_id) {
  var url = "/query_license"
  if (license_id == "") {
    showWarningDialog("Please input license_id field.")
  } else {

    headers = { "Content-Type": "application/json", "Query-Environment": env}
    data = {"license_id": license_id}
    
    $('#loader').show()
    $.ajax(
      { 
        url: url,
        type: 'GET',
        data: data,
        headers:headers,
        success: function(data, status, jqXHR) 
        {
          updateQueryLicenseTable(data["result_list"])
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

var onBtnAddVideoToLine = function (env, item_id, item_type) {
  var url = "/video_top/debug_line/"
  if (item_id == "") {
    showWarningDialog("Please input item_id field.")
  } 
  else {
    headers = { "Content-Type": "application/json", "Query-Environment": env}
    data = {"item_id": item_id, "item_type": item_type}
    
    $('#loader').show()
    $.ajax(
      { 
        url: url,
        type: 'PATCH',
        headers: headers,
        data: JSON.stringify(data),
        success: function(data, status, jqXHR) 
        {
          if (data['result']) {
            showWarningDialog("<string class='text-primary'>[Success]</string> <br/>" + 
              "<button onclick=\"window.open('"+data['url']+"')\" type='button' class='btn btn-success'>前往 VideoTop</button>");  
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

var onSelectEnvChanged = function(env)
{
  if(env == "qa"){
    $('#btn_add_to_videotop').removeAttr('disabled');
  } else {
    $("#btn_add_to_videotop").attr('disabled', true);
  }
}

var updateQueryLicenseTable = function (list) 
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
          .append("offline")
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
          .append("available_period")
          )
        .append($('<th>')
          .append("unlimited")
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
            .append(info[i]["offline"])
            .append("<br/>")
            .append("<br/>")
            .append(info[i]["offline_duration"])
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
              .attr('onclick', "showTimelineDialog("+JSON.stringify(info[i]["timeline"])+")")
              .attr('href', "#", )
              .append(info[i]["purchase_start_time_date"])
              .append("<br/>")
              .append("<br/>")
              .append(info[i]["purchase_end_time_date"])
            )
          )
        .append($('<td>')
            .append($('<a>')
              .attr("href", "#")
              .attr("data-toggle", "tooltip")
              .attr("title", "(UP) available_period_first_play\n(Down) available_period_after_first_play")
              .append(info[i]["available_period_first_play"])
              .append("<br/>")
              .append("<br/>")
              .append(info[i]["available_period_after_first_play"])
            )
          )
        .append($('<td>')
            .append(info[i]["unlimited_play_duration"])
          )
        )
  }

  $('[data-toggle="tooltip"]').tooltip(); 
}

var updateQueryDiscountTable = function (list) 
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
          .append("discount_price_without_tax")
          )
        .append($('<th>')
          .append("discount_price_with_tax")
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
          .append($('<a>')
              .attr('onclick', "onBtnQueryVideoByLincenseId('"+$("#select_env").val()+"', "+info[i]["license_id"]+")")
              .attr('href', "#", )
              .append(info[i]["license_id"])
            )
          )
        .append($('<td>')
            .append(info[i]["discount_price_without_tax"])
          )
        .append($('<td>')
            .append(info[i]["discount_price_with_tax"])
          )
        )
  }
}

var updateQueryPackageTable = function (list) 
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
          .append("license_id")
          )
        .append($('<th>')
          .append("mezzanine_id")
          )
        .append($('<th>')
          .append("package_id")
          )
        .append($('<th>')
          .append("package_name")
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
          .append($('<a>')
            .attr('onclick', "onBtnQueryVideoByLincenseId('"+$("#select_env").val()+"', "+info[i]["license_id"]+")")
            .attr('href', "#", )
            .append(info[i]["license_id"])
          )
        )
        .append($('<td>')
          .append(info[i]["mezzanine_id"])
        )
        .append($('<td>')
          .append($('<a>')
            .attr('href', web_url+"god/"+info[i]["package_id"])
            .append(info[i]["package_id"])
          )
        )
        .append($('<td>')
          .append(info[i]["package_name"])
        )
      )
  }
}

var updateQueryIdTable = function (list) 
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
          .append("group_id")
          )
        .append($('<th>')
          .append("license_id")
          )
        .append($('<th>')
          .append("purcahse_plan_id")
          )
        .append($('<th>')
          .append("mezzanine_id")
          )
        .append($('<th>')
          .append("license_type")
          )
        .append($('<th>')
          .append("sales_plan")
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
            .append("<br/>")
            .append($('<img>')
              .attr('src', info[i]["image_url"])
              .attr('width', 160)
              .attr('display', 'flex')
              .attr('flex-direction', 'column')
              )
          )
        .append($('<td>')
            .append(info[i]["group_id"])
          )
        .append($('<td>')
          .append($('<a>')
              .attr('onclick', "onBtnQueryVideoByLincenseId('"+$("#select_env").val()+"', "+info[i]["license_id"]+")")
              .attr('href', "#", )
              .append(info[i]["license_id"])
            )
          )
        .append($('<td>')
            .append(info[i]["purcahse_plan_id"])
          )
        .append($('<td>')
            .append(info[i]["mezzanine_id"])
          )
        .append($('<td>')
            .append(info[i]["license_type"])
          )
        .append($('<td>')
            .append(info[i]["sales_plan"])
          )
        )
  }
}

var updateTimelineTable = function(order_info) 
{
  table_name = "timeline_table"
  $("#"+table_name).find('tbody tr').remove();
  color = ["#B6E636","#5BC0DE" , "#337AB7" , "#D60024", "#E3CF57"]
  title = ['Display', 'Purchase', 'License', 'Now', '購買時刻']

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

var showWarningDialog = function(msg)
{
  $("#dialog_warning_message").html(msg);
  $("#dialog_warning").modal('toggle');
}

var showTimelineDialog = function(order_info)
{
  if(order_info.length > 0) {
    updateTimelineTable(order_info)
    $("#dialog_timeline").modal('toggle');
  }
}


var changeBtnState = function(btn_id)
{
  var query_btn = ["#btn_query_bonus", "#btn_query_trailer", "#btn_query_offline", "#btn_query_discount", 
  "#btn_query_god", "#btn_query_expire", "#btn_query_preorder", "#btn_query_subdub" , "#btn_query_resolution"]

  query_btn.forEach(function(_btn_id) {
    if (_btn_id == btn_id) {
      $(_btn_id).removeClass("btn-info")
      $(_btn_id).addClass("btn-primary")
    } else {
      $(_btn_id).removeClass("btn-primary")
      $(_btn_id).addClass("btn-info")
    }
  });
}


$(document).ready
(
  function()
  { 
    $('#loader').hide()
    $("#select_env").change(() => onSelectEnvChanged($("#select_env").val()));

    $("#btn_query_id").click(() => onBtnQueryVideoInfo($("#select_env").val(), $("#text_something_id").val(), $('input[name=radio_something_id_type]:checked').val()));
    $("#btn_add_to_videotop").click(() => onBtnAddVideoToLine($("#select_env").val(), $("#text_something_id").val(), 'video'));

    $("#btn_query_bonus").click(() =>     onBtnQueryVideoByType($("#select_env").val(), "bonus"));
    $("#btn_query_trailer").click(() =>   onBtnQueryVideoByType($("#select_env").val(), "trailer"));
    $("#btn_query_offline").click(() =>   onBtnQueryVideoByType($("#select_env").val(), "offline"));
    $("#btn_query_discount").click(() =>  onBtnQueryVideoByType($("#select_env").val(), "discount"));
    $("#btn_query_god").click(() =>       onBtnQueryVideoByType($("#select_env").val(), "god"));
    $("#btn_query_expire").click(() =>    onBtnQueryVideoByType($("#select_env").val(), "expire"));
    $("#btn_query_preorder").click(() =>  onBtnQueryVideoByType($("#select_env").val(), "preorder"));

    $("#btn_query_subdub").click(() =>      onBtnQueryVideoBySubdub($("#select_env").val(), $("#text_subdub").val()));
    $("#btn_query_resolution").click(() =>  onBtnQueryVideoByResolution($("#select_env").val(), $("#text_resolution").val()));
  }
);

