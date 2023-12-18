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


const startgetAndCache = ()=> {
  console.log('NewUserPosted Event is subscribed');

  eventBus.subscribe("NewUserPosted", () => {
    console.log('cache-middleware is running');
    getAndCache();
    console.log('caching is done');
  });

  console.log('NewUserPosted Event is published');

  eventBus.publish("NewUserPosted");
};

//startgetAndCache();
export default startgetAndCache;

