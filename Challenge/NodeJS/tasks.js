
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks}.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  if (text === 'exit\n') {
    quit();
  }
 
  if (text === 'quit\n') {
    quit();
  }
  else if(text.trim().substring(0, 5) === 'hello'){
    hello(text);
  }
  
  if (text === 'list\n') {
    list();
  }
  else if
  (text.trim().substring(0, 4) === 'help'){
    help(text);
  }
  else{
    unknownCommand(text);
  }

}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(c){
  console.log(c.trim() + '!')
}
/**
 * open help
 *
 */ 
function help(a){
 var z='if you want to leave press quit or exite\n if you want to say hello type hello\n if you want help type help'
 console.log(a.trim() + '!\n' + z)
}

function list(){
  var myArray = ["coding", "learning code", "code and code"]
  for (var i=0 ;i<myArray.length;i++){
    console.log((i+1)*1+'-'+myArray[i])
  }
}

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

// The following line starts the application
startApp("jaafar saleh")
