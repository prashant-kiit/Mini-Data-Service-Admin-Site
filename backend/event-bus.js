import express from 'express';
import getAndCache from './cache-middleware.js';

class EventBus {
  constructor() {
    this.eventObject = {};
  }
  publish(eventName) {
    const callbackList = this.eventObject[eventName];
    if (!callbackList) return console.warn(eventName + " not found!");
    for (let callback of callbackList) {
      callback();
    }
  }
  subscribe(eventName, callback) {
    if (!this.eventObject[eventName]) {
      this.eventObject[eventName] = [];
    }
    this.eventObject[eventName].push(callback);
  }
}

const eventBus = new EventBus();

console.log('NewUserPosted Event is sunscribed');

eventBus.subscribe("NewUserPostedStartCaching", () => {
  console.log('cache-middleware is running');
  getAndCache();
  console.log('caching is done');
});

console.log('NewUserPosted Event is published');

const app = express();

app.get('/start-cache', async (req, res) => {
  eventBus.publish("NewUserPostedStartCaching");
  res.send('Event Published and Caching must have started!');
});

const port = process.env.PORT || 8086;
app.listen(port, () => {
  console.log(`Event Bus Server is running on port ${port}`);
});



//startgetAndCache();
//export default startgetAndCache;

