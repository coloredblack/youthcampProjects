const fs = require('fs');

let questions = options.map((option) => {
  if (!option.type) {
    if (option.flag) {
      option.type = 'confirm'
    } else {
      option.type = 'input'
    }
  }
  option.message = option.question || option.help
  return option
})