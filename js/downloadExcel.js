var downloadExcel = function (method) {
    $.ajax({
      url: 'php/getExcel.php',
      type: 'post',
      data: {'method': method},
      success: function(data) {
          //console.log(data);

      },
      error: function(xhr, desc, err) {
        console.log(xhr);
        console.log("Details: " + desc + "\nError:" + err);
      }
    });
};

$('#computer-excel').click(function () {
    downloadExcel('computer_inventory');
});

$('#issue-excel').click(function () {
    downloadExcel('issue_tracker');
});

