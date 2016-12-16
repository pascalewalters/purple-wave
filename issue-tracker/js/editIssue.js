$('#issue-submit').click(function () {
    username = $('#i-username').text();
    issueDescription = $('#i-issueDescription').text();

    assignedTo = $('#i-owner').val();
    progressNotes = $('#i-notes').val();
    closingNotes = $('#i-closingNotes').val();
    status = $('#i-status').val();

    submitIssueChanges(username, issueDescription, assignedTo, progressNotes, closingNotes, status);

});

var submitIssueChanges = function (username, issueDescription, assignedTo, progressNotes, closingNotes, status) {
    $.ajax({
        url: 'php/editIssue.php',
        type: 'post',
        data: {'username': username, 'issueDescription': issueDescription, 'assignedTo': assignedTo,
	       'progressNotes': progressNotes, 'closingNotes': closingNotes, 'status': status},
        cache: false,
        success: function(json) {
	    $('#viewIssueModal').modal('toggle');

            location.reload();
        },
        error: function(xhr, desc, err) {
            alert(xhr + "\n" + err);
        }
    });
};
