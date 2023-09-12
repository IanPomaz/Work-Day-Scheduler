//added the DOMContentLoaded event to prevent accessing elements that havent loaded yet
document.addEventListener("DOMContentLoaded", function () {
  //Gets all the buttons and the text
const saveButtons = document.querySelectorAll('.saveBtn')
const textAreas = document.querySelectorAll(".description")
//Loop through the saveButtons
saveButtons.forEach((saveButton, index) => {
  
  const savedData = localStorage.getItem(`hour-${index + 1}-data`)
  //upon page load it retrieves local storage
  if (savedData !== null) {
    textAreas[index].value = savedData;
  }
  //listening for a click on a save button in order to save the data.
  saveButton.addEventListener("click", function() {
    const data = textAreas[index].value;
    localStorage.setItem(`hour-${index + 1}-data`, data)
  })
})

dayjs().format()





function displayTodaysDate() {
  //current date using day.js
  const currentDate = dayjs().format("dddd, MMMM D");
  //creates new element for the current date
  const dateElement = document.createElement("h3");
  //creates the text to display it
  dateElement.innerHTML = `Today's date is ${currentDate}`;
//pulls the element where we will put todays date
  const currentDayElement = document.getElementById("currentDay");
  currentDayElement.insertAdjacentElement("afterend", dateElement);
}
//displays everything
displayTodaysDate()

function changeBlockColor() {
//compare all the id's of each div to the current hour
  //current hour
  const currentHour = dayjs().hour();
  //loop through all the html divs and extract the hour of each div\
  for (let i = 1; i <= 24; i++) {
    const blockElement = document.getElementById(`hour-${i}`);
    //splits the attribute and retrieves the hour from the array
    const blockHour = parseInt(blockElement.id.split('-')[1]);
  //if block hour is before the current hour
    if (blockHour < currentHour) {
      blockElement.classList.add('past');
      blockElement.classList.remove('present', 'future');
    } else if (blockHour === currentHour) {
      blockElement.classList.add('present');
      blockElement.classList.remove('past', 'future');
    } else {
      blockElement.classList.add('future');
      blockElement.classList.remove('past', 'present');
    }
  }
}
changeBlockColor()


});
