function greetUser(name,callback){
    console.log("Hello"+name+"!");
    callback();
}

function showMessage(){
    console.log("Welcome to node.js callback");
}

greetUser("Diksha",showMessage);