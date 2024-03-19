const http = require('http');
const fs = require('fs');
const path = require('path');

// Function to format the current date and time
function getCurrentDateTimeString() {
    const now = new Date();
    // Get date components
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    // Get time components
    const hours = String(now.getHours() % 12 || 12).padStart(2, '0'); // Convert 24-hour format to 12-hour format
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const meridiem = now.getHours() < 12 ? 'AM' : 'PM';
    // Construct the formatted date and time string
    return `${day}_${month}_${year}_${hours}_${minutes}_${seconds}_${meridiem}`;
}

// Define the hostname and port for the server
const hostname = '127.0.0.1';
const port = 3000;

// Create an HTTP server
const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');

    // Get the current date and time as a string
    const dateTimeString = getCurrentDateTimeString();
    const fileName = `${dateTimeString}.txt`;

    // Write data to a file
    fs.writeFile(fileName, dateTimeString, { flag: 'w+' }, (error) => {
        if (error) {
            console.log(error);
            response.end(JSON.stringify({ message: 'Error writing file' }));
        } else {
            console.log(dateTimeString + ' Data has been written to ' + fileName);
            response.end(JSON.stringify({ message: 'File created successfully' }));
        }
    });
});

// Start the server and listen for incoming requests
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
