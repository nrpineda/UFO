// Import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");
function buildTable(data) {
    //Clearing out any existing data
    tbody.html("");
    //Loop through each object in the data
    data.forEach((dataRow) => {
        //Append a row to the table body
        let row = tbody.append("tr");
        //Looping dataRow and adding a value to a table cell
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
}

// Creating the handleClick function
function handleClick() {
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    //Check to see if a date was entered and filter the
    //data using that table
    if (date) {
        //Apply 'filter' to the table data to only keep the
        //rows where the 'datetime' value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    //Rebuild the table using the filtered data
    //@NOTE: If no date was entered, then the filteredData will
    //just be the original tableData/
    buildTable(filteredData);
};
//Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

//Build the table when the page loads
buildTable(tableData);



