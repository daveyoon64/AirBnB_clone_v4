$(() => {
  
  function generate_places(data) {
    console.log(data)
    let retStr = "";
    
    for (let i in data) {
      console.log(1);
      retStr += `
      <article>
        <div class="title">
          <h2>${data[i].name}</h2>
          <div class="price_by_night">
            ${data[i].price_by_night}
          </div>
        </div>
        <div class="information">
          <div class="max_guest">
            <i class="fa fa-users fa-3x" aria-hidden="true"></i>
            <br />
            ${data[i].max_guest} Guests
          </div>
          <div class="number_rooms">
            <i class="fa fa-bed fa-3x" aria-hidden="true"></i>
            <br />
            ${data[i].number_rooms} Bedrooms
          </div>
          <div class="number_bathrooms">
            <i class="fa fa-bath fa-3x" aria-hidden="true"></i>
            <br />
             ${data[i].number_bathrooms} Bathroom
          </div>
        </div>
        <div class="description">
          ${data[i].description}
        </div>
      </article>
      `;
    }
    $('section.places').append(retStr);
  };
  $.ajax({
    type: "POST",
    url: "http://0.0.0.0:5001/api/v1/places_search/",
    contentType: 'application/json',
    data: '{}',
    success: generate_places,
    error: e => console.log(e)
  })
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
