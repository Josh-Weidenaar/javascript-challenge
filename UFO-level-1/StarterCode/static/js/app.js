//starter file from TA - Erin Wills
// provided comments for basic version of HW
// included function names and filteredData variable

// from data.js
const tableData = data;

// get table references where table will be inserted
var tbody = d3.select("tbody")
var button = d3.select("#filter-btn"); 
var tableContainer = d3.select("#ufo-table")




function buildTable(i) {
    tableContainer.append("tbody",)
    i.forEach(function(rows) { 
    var row = tbody.append("tr");
    Object.entries(rows).forEach(function([key,value]) {
        var cell = row.append("td");
        cell.text(value);
    });
})};

function handleClick() {
    console.log(d3.event);
    d3.event.preventDefault();
  // Grab the datetime value from the filter
    // console.log("happening")
    var inputField = d3.select("#datetime");
    // console.log(inputField)
    var inputValue = inputField.property("value");
    // console.log(inputValue)
    inputField.on("change", function() {
        var newText = d3.event.target.value;
        console.log(newText);
      });
  // grab all the table data and set to filteredData
    var filteredData = tableData;
   
  // Check to see if a date was entered and filter the
  // data using that date.
    if (inputValue) { 
        console.log("yes")
        var filteredData = filteredData.filter(i => i.datetime >= inputValue);
        buildTable(filteredData);
    //  block of code to be executed if the condition is true
    };


  

  

  // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  // take your filtered data and put it into the buildTable to rebuild the table with the filtered data
    buildTable(filteredData);
};

// Attach an event to listen for the form button that calls handleClick on a click of the filter button
button.on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);

