var issueLog = {
    site: '',
    programName: '',
    room: '',
    username: '',
    extension: '',
    issueCategory: '',
    issueDescription: '',
    reportingManager: '',
    owner: '',
    progressNotes: '',
    setProperties: function () {
	this.site = $('#i-site').val();
	this.programName = $('#i-programName').val();
	this.room = $('#i-room').val();
	this.username = $('#i-username').val();
	this.extension = $('#i-extension').val();
	this.issueCategory = $('#i-issueCategory').val();
	this.issueDescription = $('#i-issueDescription').val();
	this.reportingManager = $('#i-manager').val();
	this.owner = $('#i-owner').val();
	this.progressNotes = $('#i-notes').val();
    },
    submit: function () {
	$.ajax({
      	    url: 'php/submitIssueLog.php',
      	    type: 'post',
      	    data: {'site': this.site, 'programName': this.programName, 'room': this.room, 'username': this.username,
		   'extension': this.extension, 'issueCategory': this.issueCategory, 'issueDescription': this.issueDescription,
		   'manager': this.reportingManager, 'owner': this.owner, 'progressNotes': this.progressNotes},
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

var resetIssueLogProperties = function () {
    $('#i-site').val('');
    $('#i-programName').val('');
    $('#i-room').val('');
    $('#i-username').val('');
    $('#i-extension').val('');
    $('#i-issueCategory').val('Corporate Apps');
    $('#i-issueDescription').val('');
    $('#i-manager').val('');
    $('#i-owner').val('');
    $('#i-notes').val('');
};

$('#issue-log-submit').click(function () {
    issueLog.setProperties();

    if (issueLog.username == '') {
	alert('Please ensure user name is filled out.');
    } else if (issueLog.extension == '') {
	alert('Please include the user\'s extension.');
    } else if (issueLog.issueDescription == '') {
	alert('Please include a description of the error.');
    } else if (issueLog.owner == '') {
	alert('Please assign this issue to someone.');
    } else {
	issueLog.submit();
	$('#logIssueModal').modal('toggle');
    }

});

$('#logIssueModal').on('hidden.bs.modal', function () {
    resetIssueLogProperties();
});
