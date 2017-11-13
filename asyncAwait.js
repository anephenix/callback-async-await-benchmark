const someAction = async () => {
  return null;
};

const emptyFunction = async () => {
  return await someAction();
};

module.exports = emptyFunction;
