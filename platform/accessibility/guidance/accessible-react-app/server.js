/*
 * Handle routing gracefully when users copy/paste non-root resource URLs
 * https://medium.com/@kayodeniyi/use-react-router-with-ease-79740d951bec
 */
const express = require('express');
const path = require('path');

const port = process.env.PORT || 8080;
const app = express();

// Serve static assets normally
app.use(express.static(path.resolve(__dirname, 'dist')));

// Handle every other route with index.html, which contains
// the application's ReactDOM.render() method.
app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(port);
console.log(`Server started on port ${port}`);
