// insert the time
export default function time() {
  const myDate = new Date();
  const year = myDate.getFullYear();
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const monthindex = myDate.getMonth();
  const month = monthNames[monthindex];
  const day = myDate.getDate();
  let daySuffix;
  switch (day % 10) {
    case 1:
      daySuffix = 'st';
      break;
    case 2:
      daySuffix = 'nd';
      break;
    case 3:
      daySuffix = 'rd';
      break;
    default:
      daySuffix = 'th';
      break;
  }
  const formatteddays = day < 10 ? `0${day}` : day;
  const dayadder = `${month}-${formatteddays}${daySuffix}-${year}`;
  const hours = myDate.getHours();
  const minutes = myDate.getMinutes();
  const seconds = myDate.getSeconds();
  const ampm = hours >= 12 ? 'pm' : 'am';
  const formattedHours = hours % 12 || 12;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  const formattedTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;
  return `${dayadder} ${formattedTime}`;
}
