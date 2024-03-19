
 ( async function(){
    try {
var res = await fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json");

var res1 = await res.json();

const h1Tag = document.createElement('h1');
h1Tag.setAttribute('id','title');
h1Tag.innerHTML = 'User Table';

const pTag = document.createElement('p');
pTag.setAttribute('id','description');
pTag.innerHTML = 'The user details provided in given url showing data using pagination.'

// Create the table element
const table = document.createElement('table');

// Create the table header (thead) and table body (tbody) elements
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');

// Create the table header row (tr)
const headerRow = document.createElement('tr');

// Create the three table header cells (th)
const headerCell1 = document.createElement('th');
const headerCell2 = document.createElement('th');
const headerCell3 = document.createElement('th');

// Set the text content for the header cells
headerCell1.textContent = 'ID';
headerCell2.textContent = 'Name';
headerCell3.textContent = 'Email';

// Append the header cells to the header row
headerRow.append(headerCell1,headerCell2,headerCell3);

// Append the header row to the table header (thead)
thead.appendChild(headerRow);

// Append the table header to the table
table.appendChild(thead);

const divTag = document.createElement('div');
divTag.setAttribute('id','pagination');

const buttonTag1 = document.createElement('button');
buttonTag1.setAttribute('id','first-page');
buttonTag1.innerHTML = 'First';

const buttonTag2 = document.createElement('button');
buttonTag2.setAttribute('id','prev-page');
buttonTag2.innerHTML = 'Previous';

const spanTag = document.createElement('span');
spanTag.setAttribute('id','current-page');
spanTag.innerHTML = '1';

const buttonTag3 = document.createElement('button');
buttonTag3.setAttribute('id','next-page');
buttonTag3.innerHTML = 'Next';

const buttonTag4 = document.createElement('button');
buttonTag4.setAttribute('id','last-page');
buttonTag4.innerHTML = 'Last';

divTag.append(buttonTag1,buttonTag2,spanTag,buttonTag3,buttonTag4);

// Append the table body to the table
table.appendChild(tbody);
  
document.body.append(h1Tag,pTag,table,divTag);

const itemsPerPage = 10;
    let currentPage = 1;

function renderTable(page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = '';

    for (let i = startIndex; i < endIndex && i < res1.length; i++) {

    // Create row        
    const row = document.createElement('tr');

    // Create the three table data cells (td)
    const cell1 = document.createElement('td');
    const cell2 = document.createElement('td');
    const cell3 = document.createElement('td');

    // Set the text content for the data cells
    cell1.textContent = res1[i].id;
    cell2.textContent = res1[i].name;
    cell3.textContent = res1[i].email;

    // Append the data cells to the row
    row.append(cell1,cell2,cell3);

    // Append the row to the table body (tbody)
    tbody.appendChild(row);

    }
}

function updatePaginationButtons() {
    const firstPageBtn = document.getElementById('first-page');
    const prevPageBtn = document.getElementById('prev-page');
    const nextPageBtn = document.getElementById('next-page');
    const lastPageBtn = document.getElementById('last-page');

    firstPageBtn.disabled = currentPage === 1;
    prevPageBtn.disabled = currentPage === 1;
    nextPageBtn.disabled = currentPage === Math.ceil(res1.length / itemsPerPage);
    lastPageBtn.disabled = currentPage === Math.ceil(res1.length / itemsPerPage);
  }

  function setPage(page) {
    currentPage = page;
    document.getElementById('current-page').textContent = currentPage;
    renderTable(currentPage);
    updatePaginationButtons();
  }

  document.getElementById('first-page').addEventListener('click', () => setPage(1));
  document.getElementById('prev-page').addEventListener('click', () => setPage(currentPage - 1));
  document.getElementById('next-page').addEventListener('click', () => setPage(currentPage + 1));
  document.getElementById('last-page').addEventListener('click', () => setPage(Math.ceil(res1.length / itemsPerPage)));

  setPage(1); // Initial rendering with the first page.

}catch (error) {
    console.error('Error fetching or processing data:', error);
  }

}) ();






