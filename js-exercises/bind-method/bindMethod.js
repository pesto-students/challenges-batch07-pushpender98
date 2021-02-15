// You can change the `args`
function bind(...args) {
  return args[0].bind(args[1]);
}

module.exports = { bind };
