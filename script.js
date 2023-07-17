
$(document).ready(function() {

  var saveBtnEl = $('.saveBtn')
  var currentHour = dayjs().format('H')
  var currentDate = $('#currentDate')

  $(saveBtnEl).on('click', function() {
    var textContent = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");      
    console.log(time);
    console.log(textContent)
    localStorage.setItem(time, textContent);
  })
  
  function blockColour() {
    $('.time-block').each(function() {
      var blockTime = parseInt(this.id);
      $(this).toggleClass('past', blockTime < currentHour);
      $(this).toggleClass('present', blockTime == currentHour);
      $(this).toggleClass('future', blockTime > currentHour);
    });
  }

    $('.time-block').each(function() {
      var key = $(this).attr('id');
      var value = localStorage.getItem(key);
      $(this).children('.description').val(value);
    });

    var currentDate = dayjs().format('[The current date is: ]DD/MM/YYYY')
      $("#currentDay").text(currentDate);

    
    blockColour();
    updateDate();
  });



