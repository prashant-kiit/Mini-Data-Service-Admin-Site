import { createClient } from 'redis';
import { connect, disconnect } from 'mongoose';
import Userdetails from './userdetails-schema.js';
import Todo from './todo-schema.js';

let userids = [];

async function getCacheData() {
    console.log('caching starts');
    try {
        const client = createClient();
        await client.connect();
        const useridsstring = await client.get('userids');
        userids = await JSON.parse(useridsstring)
        await client.quit();
    }
    catch (e) {
        console.error(e);
    }
}

let results = [];

const url1 = 'https://jsonplaceholder.typicode.com/users/';

const fetchers1 = [];

let result1 = [];

const url2 = 'https://jsonplaceholder.typicode.com/todos/';

const fetchers2 = [];

let result2 = [];

async function fetchStarts(fetchers, result) {
    console.log('fetching starts');
    try {
        const responses = await Promise.allSettled(fetchers);

        const fulfilledresponse = [];

        responses.map(response => {
            if (response.status === "fulfilled") {
                fulfilledresponse.push(response);
            }
        });

        const data = await Promise.allSettled(fulfilledresponse.map(response => response.value.json()));
        
        //console.log(data);

        data.forEach(obj => result.push(obj.value));

        console.log('fetching ends');

    } catch {
        console.error("Multiple fetch failed");
    }
}

const uri = 'mongodb+srv://prashantsingh090798:84aZAjY7x4fRev5Y@tech-trend-datalake-clu.qpyfd55.mongodb.net/?retryWrites=true&w=majority';

async function loadDataIntoMongoDB(results) {
    try {
        console.log('Connecting to database');
        await connect(uri);

        const result1 = await Userdetails.insertMany(results[0]);
        console.log(`${result1.length} documents inserted into the collection.`);

        const result2 = await Todo.insertMany(results[1]);
        console.log(`${result2.length} documents inserted into the collection.`);

    } catch (error) {
        console.error('Error:', error.message);
    } finally {
        disconnect();
        console.log('Disconnected from the database.');
    }
}

await getCacheData();

for (const userid of userids) {
    fetchers1.push(fetch(url1 + userid));
}

await fetchStarts(fetchers1, result1);

results.push(result1);

for (const userid of userids) {
    fetchers2.push(fetch(url2 + userid));
}

await fetchStarts(fetchers2, result2);

results.push(result2);

//console.log(results);

loadDataIntoMongoDB(results);