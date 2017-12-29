import Events from './events';

Events.subscribe('button.click', (a, b, c) => {
    console.log('Subscribing click event on Subscriber 2: ', a, b, c);
});