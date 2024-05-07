#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.red("\t\t\t\t\t<======="), chalk.bgWhite.red.italic.bold("CODE WITH MUHAMMAD FASIH"), chalk.red("=======>"))
console.log(chalk.green("\t\t           <---------------"), chalk.blue.italic.bold("AN ADVENTURE GAME USING TYPESCRIPT"), chalk.green("--------------->\n"))
const answers = await inquirer.prompt
([
    {
        name:"name",
        type:"input",
        message:chalk.red.underline("What's your name..?")
    }
])
if(!answers.name){answers.name = "Dummy Name"}
console.log(chalk.blue.italic.underline(`Hello ${chalk.red.bold.underline(answers.name)}, welcome to my adventure game.`));

const opponent:string[] = [chalk.magenta("Zombie"),chalk.blue("Skeleton"),chalk.magenta("Monster"),chalk.blue("Assasin"),chalk.magenta("Wizard")]

const selection = await inquirer.prompt([
    {
        name:"userChoice",
        type:"list",
        message:chalk.red.bold.underline("Select your opponent to whom you would like to fight.."),
        choices:opponent
    }
])
let enemyHP:number = 100;
let userHP:number = 100;
let condition:boolean = true;
class game {
    enemyName:string = selection.userChoice
    enemyHealth:number 
    userName:string
    userHealth:number 

    constructor(userName:string,enemyHP:number,userHP:number){
        this.enemyHealth = enemyHP;
        this.userHealth = userHP;
        this.userName = userName;
        
    }
    healthVariations(){
        let randomNum:number = Math.floor(Math.random()* 3)
        switch (randomNum) {
            case 0:userHP -= 25;break;
            case 3:enemyHP -= 50;break;
            case 1:userHP -= 50;break;
            case 2:enemyHP -= 25;break;
            default:null;break;
        }
        if(enemyHP > 100){enemyHP = 100}
        if(userHP > 100){userHP = 100}
        if(userHP < 25 ){userHP = 0}
        if(enemyHP < 25 ){enemyHP = 0}
        console.log(chalk.green(`Remaining health of ${chalk.underline.overline(this.enemyName)}: ${chalk.red.bold(enemyHP)}`));
        console.log(chalk.green(`Remaining health of ${chalk.underline.overline(this.userName)}: ${chalk.red.bold(userHP)}`));      
        if(userHP < 25 ){
            console.log(`${this.enemyName} Wins!`);
            condition = false;
        }
        if(enemyHP < 25){
            console.log(`${this.userName} Wins!`);
           condition = false;
        }
    }
    energyDrink(){
        let randomNum:number = Math.floor(Math.random()* 1)
        switch (randomNum) {
            case 0:userHP += 25;break;
            case 1:userHP += 50;break;
            default:null;break;
        }
        if(userHP > 100){userHP = 100}
        console.log(chalk.green(`Remaining health of ${chalk.underline.overline(this.enemyName)}: ${chalk.red.bold(enemyHP)}`));
        console.log(chalk.green(`Remaining health of ${chalk.underline.overline(this.userName)}: ${chalk.red.bold(userHP)}`));         
    }
   

}
let actions:string[] = [chalk.magenta("Attack"),chalk.blue("Defense"),chalk.magenta("Heal Yourself")]
while(condition){
const userStep = await inquirer.prompt([
    {
        name:"action",
        type:"list",
        message:chalk.red.underline("Select one of these....."),
        choices:actions
    }
])
if(userStep.action === actions[0]){
    new game(chalk.red(answers.name),enemyHP,userHP).healthVariations()
}
else if(userStep.action == actions[1]){
    new game(chalk.red(answers.name),enemyHP,userHP).healthVariations()
}
else if(userStep.action == actions[2]){
    new game(chalk.red(answers.name),enemyHP,userHP).energyDrink()
}
else{
    console.log("Please select a valid operator.");
    
}
console.log("\n");

}

