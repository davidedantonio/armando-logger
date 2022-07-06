const chalk = require('chalk');

const info = (message) => {
  console.log(chalk.magenta(message));
}

const warn = (message) => {
  console.log(chalk.yellow(message));
}

const danger = (message) => {
  console.log(chalk.red(message));
}

module.exports = {
  info,
  warn,
  danger
}