import inquirer from 'inquirer';

const answer = await inquirer.prompt([
  { type: "input", name: "packageName", message: "set package name" },
  {
    type: "number",
    name: "port",
    message: "set port number",
    default: () => 8080
  }, {
    
  }
])

