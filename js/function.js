$(function() {
  $(".left.pane").resizable({
    handles: "e, w",
    minWidth:154,
    maxWidth:300
  });
  $(".right.pane").resizable({
    minWidth:405,
    maxWidth:600,
    handles: "e, w",
    resize: function(event, ui) {
      ui.position.left = 0;
    }
  });

/*
  $('.project').hover(function(){
      $('.add_project').removeClass('hidden');
  }, function() {
      $('.add_project').addClass('hidden');
  }
  );
*/



});
