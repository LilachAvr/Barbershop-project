const app = require('./app')
require('./datebase')
const PORT = process.env.PORT || 5000

async function init(){
  await app.listen(PORT);
  console.log('Server on port 2000');
  
}

init();
