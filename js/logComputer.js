var computerLog = {
    imgRes: '',
    username: '',
    loc: '',
    computerName: '',
    assetTag: '',
    researchSoftware: '',
    notes: '',
    setProperties: function () {
	this.imgRes = $('#c-img-res').val();
	this.username = $('#c-username').val();
    	this.loc = $('#c-location').val();
	this.computerName = $('#c-computerName').val();
    	this.assetTag = $('#c-assetTag').val();
    	this.researchSoftware = $('#c-researchSoftware').val();
    	this.notes = $('#c-notes').val();
    },
    submit: function () {
	$.ajax({
      	    url: 'php/submitComputerLog.php',
      	    type: 'post',
      	    data: {'imgRes': this.imgRes, 'username': this.username, 'loc': this.loc, 'computerName': this.computerName,
		   'assetTag': this.assetTag, 'researchSoftware': this.researchSoftware, 'notes': this.notes},
      	    success: function(data) {
        	alert(data);
      	    },
      	    error: function(xhr, desc, err) {
        	console.log(xhr);
        	console.log("Details: " + desc + "\nError:" + err);
      	    }
   	});
    }
};

var resetComputerLogProperties = function () {
    $('#c-img-res').val('IMG');
    $('#c-username').val('');
    $('#c-location').val('');
    $('#c-computerName').val('');
    $('#c-assetTag').val('');
    $('#c-researchSoftware').val('');
    $('#c-notes').val('');
};

$('#computer-log-submit').click(function () {
    computerLog.setProperties();

    if (computerLog.loc == '' || computerLog.computerName == '') {
	alert('Please ensure location and computer name fields are filled out.');
    } else {
	computerLog.submit();
	$('#logComputerModal').modal('toggle');
    }

});

$('#logComputerModal').on('hidden.bs.modal', function () {
    resetComputerLogProperties();
});
