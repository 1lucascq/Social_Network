const TIME_INTERVALS = [
  { label: 'year', seconds: 31536000 },
  { label: 'month', seconds: 2592000 },
  { label: 'day', seconds: 86400 },
  { label: 'hour', seconds: 3600 },
  { label: 'minute', seconds: 60 },
  { label: 'second', seconds: 1 },
];

const RELATIVE_FORMATTER = new Intl.RelativeTimeFormat('en-uk', {
  numeric: "auto",
});

export const getElapsedTime = (postedAt, end = Date.now()) => {
  
  const start = new Date(postedAt);
  // const elapsedTimeInSeconds = Math.floor((end - (new Date(start).getTime())) / 1000);
  const elapsedTimeInSeconds = Math.floor((end - start.getTime()) / 1000);

  const interval = TIME_INTERVALS.find((i) => i.seconds < elapsedTimeInSeconds);

  if (!interval) {
    return 'just now';
  }

  const count = Math.floor(elapsedTimeInSeconds / interval.seconds);

  return RELATIVE_FORMATTER.format(-count, interval.label);
};



// export const getElapsedTime = (start, end = Date.now()) => {
//   const elapsedTimeInSeconds = Math.floor((end - (new Date(start).getTime())) / 1000);

//   const interval = TIME_INTERVALS.find((i) => i.seconds < elapsedTimeInSeconds);

//   if (!interval) {
//     return 'just now';
//   }

//   const count = Math.floor(elapsedTimeInSeconds / interval.seconds);

//   return RELATIVE_FORMATTER.format(-count, interval.label);
// };
