#! /usr/bin/env node

import chalk from "chalk";

import inquirer from "inquirer";

let todos: string[] = [];

async function createtodo(todos: string[]) {
  do {
    let welcome = console.log(
      chalk.yellow("***.......... Welcome to todoList app! ..........***")
    );

    let operator = await inquirer.prompt({
      type: "list",
      name: "operation",
      message: "What you want to do?",
      choices: ["Add", "View", "Delete", "Update", "Exit"],
    });

    if (operator.operation === "Add") {
      console.log(todos);

      let addtodo = await inquirer.prompt({
        type: "input",
        message: "Add item: ",
        name: "additem",
      });
      todos.push(addtodo.additem);
      console.log(todos);
    }
    if (operator.operation === "View") {
      console.log(todos);
    }
    if (operator.operation === "Delete") {
      let deletetodo = await inquirer.prompt({
        type: "list",
        name: "deleteitem",
        message: "Select item to delete: ",
        choices: todos.map((item) => item),
      });
      let newtodos = todos.filter((val) => val != deletetodo.deleteitem);
      todos = [...newtodos];
      console.log(todos);
    }
    if (operator.operation === "Update") {
      let updatetodo = await inquirer.prompt({
        type: "list",
        name: "updateitem",
        message: "Select item to update: ",
        choices: todos.map((item) => item),
      });
      let addtodo = await inquirer.prompt({
        type: "input",
        message: "Add item to update: ",
        name: "additem",
      });
      let newtodos = todos.filter((val) => val != updatetodo.updateitem);
      todos = [...newtodos, addtodo.additem];
    }
    if (operator.operation === "Exit") {
      console.log(chalk.red("Exiting the program. Goodbye!"));
      break;
    }
  } while (true);
}
createtodo(todos);
