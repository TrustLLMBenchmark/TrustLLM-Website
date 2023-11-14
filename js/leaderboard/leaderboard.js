let obj_to_tr = (obj) => {
    return `<tr>
        <td>${obj["#"]}</td>
        <td style="text-align: left;"><strong>${obj.Model}</strong></td>
        <td>${obj["Stereotype Overall"]}</td>
        <td>${obj["Stereotype Overall_rank"]}</td>
        <td>${obj["Overall Agreement Rate"]}</td>
        <td>${obj["Overall Agreement Rate_rank"]}</td>
        <td>${obj["Sex"]}</td>
        <td>${obj["Sex_rank"]}</td>
        <td>${obj["Race"]}</td>
        <td>${obj["Race_rank"]}</td>
        <td>${obj["Refuse Overall"]}</td>
        <td>${obj["Refuse Overall_rank"]}</td>
    </tr>`;
}

let table = document.getElementById("results");
html = "";
for (let i of leaderboard) {
    html += obj_to_tr(i);
}
table.getElementsByTagName("tbody")[0].innerHTML = html;
function reflow(elt){
    console.log(elt.offsetHeight);
}
reflow(table);