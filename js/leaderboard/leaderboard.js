let formatNumber = (value) => {
    if (!isNaN(value) && !isNaN(parseFloat(value))) {
        return parseFloat(value).toFixed(3);
    }
    return value;
};

let generateTable = (data, tableId) => {
    let table = document.getElementById(tableId);
    let thead = table.createTHead();
    let tbody = table.createTBody();
    let headerRow = thead.insertRow();
    let sortedColumnIndex = null;

    // Generate the table header
    if (data.length > 0) {
        Object.keys(data[0]).forEach((key, columnIndex) => {
            let th = document.createElement("th");
            th.classList.add("custom-th"); // Add custom class for styling

            // Create flex container div
            let div = document.createElement("div");
            div.classList.add("flex-container");

            // Create span for text
            let span = document.createElement("span");
            span.textContent = key;

            // Append elements
            div.appendChild(span);

            th.appendChild(div);

            // Add click event for sorting
            th.onclick = () => {
                // Clear previous shadows
                if (sortedColumnIndex !== null && sortedColumnIndex !== columnIndex) {
                    headerRow.cells[sortedColumnIndex].classList.remove("sorted");
                }
                // Toggle shadow class
                th.classList.toggle("sorted");
                sortedColumnIndex = columnIndex;
                // Call your sortTable function or other sort logic here
                sortTable(tableId, columnIndex);
            };
            
            headerRow.appendChild(th);
        });
    }

    // Populate the table body data
    // Populate the table body data
    data.forEach(item => {
        let row = tbody.insertRow();
        Object.values(item).forEach(text => {
            let cell = row.insertCell();
            cell.textContent = formatNumber(text); // Format numbers
        });
    });
};





// 当文档加载完成时，生成表格
document.addEventListener('DOMContentLoaded', () => {
    generateTable(robustness, "table_robustness");
    generateTable(privacy, "table_privacy");
    generateTable(safety, "table_safety");
    generateTable(ethics, "table_ethics");
    generateTable(truthfulness, "table_truthfulness");
    generateTable(fairness, "table_fairness");


    
});
