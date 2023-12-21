import appServer from './app-server.js';

let active = true;

function appScheduler() {
    if(active) {
        console.log('Executing appServer...');
        appServer();
    }
    else {
        console.log('appServer is inactive...');
    }
}

// Set interval to run myFunction every 5 seconds (5000 milliseconds)
setInterval(appScheduler, 15000);
