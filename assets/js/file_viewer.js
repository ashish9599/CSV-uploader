console.log('Im in');


document.getElementById("go").addEventListener("click", searchTable);

function searchTable() {
  const input = document.getElementById("search-input").value.toLowerCase();
  // console.log(input);
  
  const rows = document.getElementsByTagName("tr");

  for (let i = 0; i < rows.length; i++) {
    const rowText = rows[i].textContent.toLowerCase();
    // console.log("row" ,rowText);
//  console.log(rowText.includes(input))

    if (rowText.includes(input)) {
      rows[i].style.background='red';
    } else {
      rows[i].classList.remove("highlight");
    }
  }
}

