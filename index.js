const app = require('./App.js');
const databaseConnect = require('./config/Config.js');

databaseConnect();

port = 8080;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});