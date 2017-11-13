const { performance } = require('perf_hooks');
const callback = require('./callback');
performance.mark('A');
callback(() => {
  performance.mark('B');
  performance.measure('A to B', 'A', 'B');
  const measure = performance.getEntriesByName('A to B')[0];
  console.log(measure.duration);
});
