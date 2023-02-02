import { setUpTimer } from './timer.js';

const hourElement = document.querySelector('[data-hour]');
const minuteElement = document.querySelector('[data-minute]');
const meridiemElement = document.querySelector('[data-meridiem]');

setUpTimer(hourElement, minuteElement, meridiemElement);