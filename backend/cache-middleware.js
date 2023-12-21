import axios from 'axios';
import { createClient } from 'redis';

const url = 'http://localhost:3000/user-api/userids';

let userids = [];

async function getAndCache() {
  try {
    await axios({
      method: 'get',
      url: url
    })
      .then(response => {
        userids = response.data;
      })
      .catch(error => {
        console.error('Error:', error);
      });

    const client = createClient();
    await client.connect();
    await client.flushDb();
    await client.set('userids', JSON.stringify(userids));
    const key = await client.get('userids');
    // console.log(typeof key);
    // console.log(JSON.parse(key));
    await client.quit();
  }
  catch (e) {
    console.error(e);
  }
}

//getAndCache();
export default getAndCache;
