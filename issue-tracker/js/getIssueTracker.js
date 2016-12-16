var getIssues = function (method, modal, date, userName, issueDescription) {
	$.ajax({
      		url: 'php/getIssueTracker.php',
     		type: 'post',
      		data: {},
      		cache: false,
      		success: function(json) {
			data = JSON.parse(json);

			if (method == 'load_page') {
			    displayIssues(data);
	    		} else {
			    viewIssueTracker(data, modal, date, userName, issueDescription);
	    		}
      		},
      		error: function(xhr, desc, err) {
        		console.log(xhr + "\n" + err);
      		}
    	})
};

$(document).ready(getIssues('load_page'));

var displayIssues = function (data) {
    var output = '';

    for (var key in data) {
        // skip loop if the property is from prototype
        if (!data.hasOwnProperty(key)) continue;

        var obj = data[key];

	output += '<tr><td>' + obj['site'] + '</td><td>' + obj['user_name'] + '</td><td>' +
	    obj['extension'] + '</td><td>' + obj['issue_category'] + '</td><td>' +
	    obj['issue_description'] + '</td><td>' + obj['reporting_manager'] +
	    '</td><td>' + obj['assigned_to'] + '</td><td>' + obj['progress_notes'] + '</td><td>' +
	    obj['status'] + '</td><td>' +
            '<button type="button" class="btn btn-default" id="edit-issue-button"' +
	    'data-toggle="modal" data-target="#viewIssueModal" data-date=\"' + 
	    obj['date'] + '" data-user-name="' + obj['user_name'] + '" data-issue-description="' + 
	    obj['issue_description'] + '">View Issue</button></td></tr>';

    }

    $('#issue-tracker-table').append(output);    
};

$('#viewIssueModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget);

    var date = button.data('date');
    var userName = button.data('user-name');
    var issueDescription = button.data('issue-description');

    var modal = $(this);

    getIssues('modal', modal, date, userName, issueDescription);
});

var viewIssueTracker = function (data, modal, date, userName, issueDescription) {
    modal.find('.modal-title').text('Log an Issue');

    for (var key in data) {
	var obj = data[key];

	if (obj['date'] == date && obj['user_name'] == userName && obj['issue_description'] == issueDescription) {

    var form = '<div class="container-fluid">' +
        '<form>' +
            '<div class="form-group row">' +
                '<label for="i-site" class="col-sm-3 col-form-label">Site</label>' +
                '<div class="col-sm-9" id="i-site">' + obj['site'] + '</div>' +
            '</div>' +
            '<div class="form-group row">' +
                '<label for="i-programName" class="col-sm-3 col-form-label">Program Name</label>' +
                '<div class="col-sm-9" id="i-programName">' + obj['program'] + '</div>' +
            '</div>' +
            '<div class="form-group row">' +
                '<label for="i-room" class="col-sm-3 col-form-label">Room #</label>' +
                '<div class="col-sm-9" id="i-room">' + obj['room'] + '</div>' +
            '</div>' +
            '<div class="form-group row">' +
                '<label for="i-username" class="col-sm-3 col-form-label">User Name</label>' +
                '<div class="col-sm-9" id="i-username">' + obj['user_name'] + '</div>' +
            '</div>' +
            '<div class="form-group row">' +
                '<label for="i-extension" class="col-sm-3 col-form-label">Extension</label>' +
                '<div class="col-sm-9" id="i-extension">' + obj['extension'] + '</div>' +
            '</div>' +
            '<div class="form-group row">' +
                '<label for="i-issueCategory" class="col-sm-3 col-form-label">Issue Category</label>' +
                '<div class="col-sm-9" id="i-issueCategory">' + obj['issue_category'] + '</div>' +
             '</div>' +
             '<div class="form-group row">' +
                 '<label for="i-issueDescription" class="col-sm-3 col-form-label">Issue Description</label>' +
                 '<div class="col-sm-9" id="i-issueDescription">' + obj['issue_description'] + '</div>' +
             '</div>' +
             '<div class="form-group row">' +
                 '<label for="i-manager" class="col-sm-3 col-form-label">Reporting Manager</label>' +
                 '<div class="col-sm-9" id="i-manager">' + obj['reporting_manager'] + '</div>' +
             '</div>' +
             '<div class="form-group row">' +
                 '<label for="i-owner" class="col-sm-3 col-form-label">Assigned To/Owner</label>' +
                 '<div class="col-sm-9"><input type="text" class="form-control" id="i-owner"></div>' +
             '</div>' +
             '<div class="form-group row">' +
                 '<label for="i-notes" class="col-sm-3 col-form-label">Progress Notes</label>' +
                 '<div class="col-sm-9"><textarea class="form-control" rows="3" id="i-notes"></textarea></div>' +
             '</div>' +
	     '<div class="form-group row">' +
                 '<label for="i-status" class="col-sm-9 col-form-label">Status</label>' +
                 '<div class="col-sm-3">' +
		     '<select id="i-status" style="width: 100%;">' +
			 '<option id="in-progress">In Progress</option>' +
			 '<option id="closed">Closed</option>' +
		     '</select>' +
		 '</div>' +
             '</div>' +
	     '<div class="form-group row">' +
                 '<label for="i-closingNotes" class="col-sm-3 col-form-label">Closing Notes</label>' +
                 '<div class="col-sm-9"><textarea class="form-control" rows="3" id="i-closingNotes"></textarea></div>' +
             '</div>' +
	'</form>' +
    '</div>';

    modal.find('.modal-body').html(form);

    var option = obj['status'].toLowerCase().replace(' ', '-');
    $('#' + option).attr('selected', 'selected');

    $('#i-owner').val(obj['assigned_to']);
    $('#i-notes').val(obj['progress_notes']);
    $('#i-closingNotes').val(obj['closing_notes']);

  }
  }
};
