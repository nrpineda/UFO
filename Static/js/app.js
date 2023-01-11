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

