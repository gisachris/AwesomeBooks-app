import { DateTime } from '../node_modules/luxon/src/luxon.js';

export const timeArea = document.querySelector('.datetime');
timeArea.innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_SHORT);
