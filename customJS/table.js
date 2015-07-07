function clickCircles()
{ 

$( "#round-button-circle-Entry" ).click(function() {
  if($("#round-button-circle-Foundation").data('clicked') || $( "#round-button-circle-Expert" ).data('clicked') ||
  	$( "#round-button-circle-Lead" ).data('clicked'))
  {
  	alert("wtf!");
  }
  else
  {
  $('.table tr:last').after('<tr> <td> 2 </td> <td> ha </td> <td> ha </td> <td> ha </td> <td> ha </td> </tr>');
  $(this).data('clicked', true);
}
});


$( "#round-button-circle-Foundation" ).click(function() {
  $('.table tr:last').after('<tr> <td> 2 </td> <td> ha </td> <td> ha </td> <td> ha </td> <td> ha </td> </tr>');
  $(this).data('clicked', true);
});

$( "#round-button-circle-Expert" ).click(function() {
  $('.table tr:last').after('<tr> <td> 2 </td> <td> ha </td> <td> ha </td> <td> ha </td> <td> ha </td> </tr>');
  $(this).data('clicked', true);
});

$( "#round-button-circle-Lead" ).click(function() {
  $('.table tr:last').after('<tr> <td> 2 </td> <td> ha </td> <td> ha </td> <td> ha </td> <td> ha </td> </tr>');
  $(this).data('clicked', true);
});
}
clickCircles();


