const someAction = cb => {
  cb();
};

const emptyFunction = cb => {
  someAction(cb);
};

module.exports = emptyFunction;
