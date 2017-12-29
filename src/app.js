import Events from './events';

// Subscribers
import './subscriber1.js';
import './subscriber2.js';

const button = document.querySelector('.button');

button.addEventListener('click', () => {
   Events.publish('button.click', 1, 2, 3);
});