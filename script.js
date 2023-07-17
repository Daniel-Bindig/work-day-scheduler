// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
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
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    $('.time-block').each(function() {
      var key = $(this).attr('id');
      var value = localStorage.getItem(key);
      $(this).children('.description').val(value);
    });

    // TODO: Add code to display the current date in the header of the page.
    var currentDate = dayjs().format('[The current date is: ]DD/MM/YYYY')
      $("#currentDay").text(currentDate);

    
    blockColour();
    updateDate();
  });



