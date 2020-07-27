// Call the dataTables jQuery plugin
$(document).ready(function() {
  $('#industry_race').DataTable({
	"order": [[ 0, "desc" ]]
  });
});
