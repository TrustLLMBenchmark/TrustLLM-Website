

// 生成表头和表体
let generateTable = (data, tableId) => {
    let table = document.getElementById(tableId);
    let thead = table.createTHead();
    let tbody = table.createTBody();
    let headerRow = thead.insertRow();

    // 生成表头
    if (data.length > 0) {
        Object.keys(data[0]).forEach((key, columnIndex) => {
            let th = document.createElement("th");
            th.textContent = key;
            th.classList.add("js-sort-number"); // 添加排序类
            th.onclick = () => sortTable(tableId, columnIndex); // 添加排序事件
            headerRow.appendChild(th);
        });
    }

    // 填充表体数据
    data.forEach(item => {
        let row = tbody.insertRow();
        Object.values(item).forEach(text => {
            let cell = row.insertCell();
            cell.textContent = text;
        });
    });
};

// 当文档加载完成时，生成表格
document.addEventListener('DOMContentLoaded', () => {
    generateTable(leaderboard_robustness, "table_robustness");
    generateTable(leaderboard_privacy, "table_privacy");
});
