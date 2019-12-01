var century, year, month, dayOfMonth, dayOfWeek, day;
//arrays
let daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
//Get input
function getInput() {
  century = parseInt(document.getElementById("century").value);
  year = parseInt(document.getElementById("year").value);
  month = parseInt(document.getElementById("month").value);
  dayOfMonth = parseInt(document.getElementById("dayOfMonth").value);
}
//Calculate function
function calculateDay() {
  getInput();
  dayOfWeek = (((century / 4) - 2 * century - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + dayOfMonth) % 7;
  dayOfWeek -= 1;
  console.log(dayOfWeek); //Test the calculateDay function
  return (Math.floor(dayOfWeek));
  if (dayOfWeek < 0) {
    dayOfWeek *= dayOfWeek;
  } else {
    return dayOfWeek
  }
}
//main caller function
function checkDayOfWeek() {
  day = calculateDay();
  checkGender();
  console.log("The function runs");//Test chackDayOfWeek function
}