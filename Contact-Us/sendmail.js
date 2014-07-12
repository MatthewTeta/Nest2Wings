$(document).ready(function() {
  $(".submit").on("click", function() {

    function log(obj) {
      console.log(JSON.stringify(obj));
    }

    var m = new mandrill.Mandrill('ASFrS3U9lGh5-DzIff56AA');

    var params = {
        "message": {
            "from_email":"mail@nest2wings.com",
            "to":[{"email":"nest2wings@hotmail.com"}],
            "subject": $(".f-subject").val(),
            "text": $(".f-body").val() + "\n\n\n\n\nName: " + $(".f-name").val() + "\nEmail: " + $(".f-email").val()
        }
    };

    function sendmail() {
      m.messages.send(params, function(res) {
            log(res);
        }, function(err) {
            log(err);
        });
    }

    sendmail();
  });
});
