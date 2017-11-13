const { performance } = require('perf_hooks');
const asyncAwait = require('./asyncAwait');
const check = async () => {
  performance.mark('A');
  await asyncAwait();
  performance.mark('B');
  performance.measure('A to B', 'A', 'B');
  const measure = performance.getEntriesByName('A to B')[0];
  console.log(measure.duration);
};

check();
