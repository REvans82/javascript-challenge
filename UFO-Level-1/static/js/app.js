// from data.js
var tableData = data;

// YOUR CODE HERE!
// Create a table
var tbody = d3.select("tbody");
// Create a function to add data
function ufo_data(data){
   // Clear existing table data
   tbody.html("");
    // append table data
    data.forEach((tableRow) => {
        var row = tbody.append("tr");
        Object.values(tableRow).forEach((value) => {
            let cell = row.append("td");
            cell.text(value);
        });
    
    });
}

// Create a function for filter
function handleClick(){
    var date = d3.select("#datetime").property("value");
    var filteredData = tableData;
    // Condition to grab data using the date
    if (date){
        filteredData = filteredData.filter(row => row.datatime === date);
    }
    ufo_data(filteredData);
}

// Attach an event listener
d3.selectAll("#filter-btn").on("click", handleClick);
ufo_data(tableData);
