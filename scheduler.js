import appServer from './app-server.js';

function appScheduler() {
    console.log('Executing appServer...');
    appServer();
}

// Set interval to run myFunction every 5 seconds (5000 milliseconds)
setInterval(appScheduler, 15000);
