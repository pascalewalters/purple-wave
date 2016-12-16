$(document).ready(function() {
	$.ajax({
      		url: 'php/getComputerInventory.php',
     		type: 'post',
      		data: {},
      		cache: false,
      		success: function(json) {
			newhtml = json;
        		$('#computer-inventory-table').append(newhtml);
      		},
      		error: function(xhr, desc, err) {
        		console.log(xhr + "\n" + err);
      		}
    	})
});
