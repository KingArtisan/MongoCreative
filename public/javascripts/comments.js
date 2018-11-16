$(document).ready(function(){
  $("#postComment").click(function(){
      var first = $("#first").val();
      var second = $("#second").val();
      var third = $("#third").val();
      var fourth = $("#fourth").val();
      var fifth = $("#fifth").val();
      var sixth = $("#sixth").val();
      var seventh = $("#seventh").val();
      var eighth = $("#eighth").val();
      var ninth = $("#ninth").val();
      var tenth = $("#tenth").val();
      var eleventh = $("#eleventh").val();
      var twelfth = $("#twelfth").val();
      var thirteenth = $("#thirteenth").val();
      var fourteenth = $("#fourteenth").val();
      
      var story = "It was a "+first+", cold November day. I woke up to the "+second+" smell of "+third+" roasting in the "+fourth+" downstairs. I "+fifth+" down the stairs to see if I could help "+sixth+" the dinner. My mom said, \"See if "+seventh+" needs a fresh "+eighth+".\" So I carried a tray of glasses full of "+ninth+" into the "+tenth+" room. When I got there, I couldn't believe my "+eleventh+"! There were "+twelfth+" "+thirteenth+" on the "+fourteenth+"!";
      
      var myobj = {Name:$("#name").val(),Comment:story};
      jobj = JSON.stringify(myobj);
      $("#json").text(jobj);
      
      var url = "comment";
       $.ajax({
        url:url,
        type: "POST",
        data: jobj,
        contentType: "application/json; charset=utf-8",
        success: function(data,textStatus) {
            $("#done").html(textStatus);
        }
        });
  });
  
  $("#getComments").click(function() {
    $.getJSON('comment', function(data) {
      console.log(data);
      var everything = "<ul>";
      for(var comment in data) {
        com = data[comment];
        everything += "<li>" + com.Name + ": " + com.Comment + "</li>";
      }
      everything += "</ul>";
      $("#comments").html(everything);
    });
  });
  
  $("#getCommentsName").click(function(){
    $.getJSON('commentName?name='+$("#name").val(), function(data){
      var everything = "<ul>";
      for(var comment in data) {
        com = data[comment];
        everything += "<li>" + com.Name + ": " + com.Comment + "</li>";
      }
      everything += "</ul>";
      $("#comments").html(everything);
    });
  });
  
  $("#deleteComments").click(function(){
    $.getJSON('deleteComments', function(data){
      var everything = "<p>";
      everything += "All comments deleted!";
      everything += "</p>";
      $("#comments").html(everything);
    })
  });
});