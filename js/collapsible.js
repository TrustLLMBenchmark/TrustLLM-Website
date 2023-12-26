function showdiv(changeId, controlId) {
    document.getElementById(changeId).style.display = "block";
    document.getElementById(controlId).innerHTML = "收起-";
    document.getElementById(controlId).href = `javascript:hidediv('${changeId}', '${controlId}')`;
  }
  
  function hidediv(changeId, controlId) {
    document.getElementById(changeId).style.display = "none";
    document.getElementById(controlId).innerHTML = "展开+";
    document.getElementById(controlId).href = `javascript:showdiv('${changeId}', '${controlId}')`;
  }
  