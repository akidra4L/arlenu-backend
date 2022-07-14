const app = require('./App.js');
const databaseConnect = require('./database/database.js');

databaseConnect();

port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});