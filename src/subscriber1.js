import Events from './events';

Events.subscribe('button.click', (...args) => {
    console.log('Subscribing click event on Subscriber 1: ', args);
});
