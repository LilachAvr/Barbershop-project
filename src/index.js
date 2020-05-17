const app = require('./app');
require('./datebase')

async function init() {
    await app.listen(2000);
    console.log('Server on port 2000');
}

init();