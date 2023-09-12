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
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //

  // TODO: Add code to display the current date in the header of the page.
});
