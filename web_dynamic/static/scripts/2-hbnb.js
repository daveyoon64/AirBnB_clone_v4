$(() => {
  $.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
    if ('status' in data) {
      $('DIV#api_status').addClass('available');
    } else {
      $('DIV#api_status').removeClass('available');
    }
  });
  $('UL.popover > LI > INPUT').change(() => {
    let ids = $('UL.popover > LI > INPUT:checkbox:checked').map(function () {
      return $(this).data('id');
    }).get(); 
    let names = $('UL.popover > LI > INPUT:checkbox:checked').map(function () {
      return $(this).data('name');
    }).get(); 
    $('DIV.amenities > h4').text(names.join(', '));    
    console.log(ids);
  });
});
