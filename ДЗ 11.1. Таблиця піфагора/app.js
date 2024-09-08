document.addEventListener('DOMContentLoaded', function() {
    const rowLength = 10;
    const columnLength = 10;

    const table = document.getElementsByTagName("table")[0];

    function createTable(rowLength, columnLength, table) {
        for (let row = 1; row <= rowLength; row++) {
            const createdRow = document.createElement('tr');
            for (let column = 1; column <= columnLength; column++) {
                const cell = document.createElement('td');
                const value = row * column;
                cell.textContent = `${value}`;
                createdRow.appendChild(cell);
            }
            table.appendChild(createdRow);
        }
    }

    createTable(rowLength, columnLength, table);
});