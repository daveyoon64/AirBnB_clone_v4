$(() => {
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
