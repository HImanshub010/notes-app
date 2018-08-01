 // console.log('starting app.js   !!');

 const fs =require('fs');

const notes=require('./notes.js');

 const _=require('lodash');
var titleOptions={
    	describe:'Title of the node',
    	demand:true,
    	alias:'t' 
};
var bodyOptions={
    	describe:'Bodyof the node',
    	demand:true,
    	alias:'b'
    };
 const yargs=require('yargs');
 const argv=yargs
 .command('add','Add a new node',{
    title:titleOptions,
    body:bodyOptions
 })
 .command('list','list all notes')
 .command('read','Read a Note',{
 	title:titleOptions
 })
 .command('remove','Removing  A Note',{
 	title:titleOptions
 })
 .help()
 .argv;

  var command=argv._[0];   
 // console.log('Command: ',command);


//console.log('Yargs:',argv);
 if(command=='add'){
 	var note=notes.addNote(argv.title,argv.body);
 	if(note){
 		console.log("Successfully added");
 		notes.logNote(note);
 	}else{
 		console.log("title already exixted");
 	}
 	
 }else if (command=='list'){
 	var notes1=notes.getAll();
 	console.log(`total no of notes we have is ${notes1.length}`);
 	for(i=0;i<notes1.length;i++){
         notes.logNote(notes1[i]);
 	}
 	// console.log(notes1[2]);
 }else if(command=='read'){
 	var note=notes.getNote(argv.title);
 	if(note){
 		console.log("Note found");
        notes.logNote(note);
 	}else{
 		console.log("No notes was found");
 	}

 }else if(command=='remove') {
    var noteRemoved=notes.removeNote(argv.title);
    var message =noteRemoved ? "Note was removed":"Notes not removed";   
    console.log(message);
 }else{
 	console.log('command not recognized')
 }
  
  

// console.log('Process:',process.argv);
// var user =os.userInfo(); 
//const os=require('os');

// var filteredArray=_.uniq(['hima',1,'himanshu',1,234,5,56,]);
// console.log(filteredArray);
// // console.log(_.isString(true));
// // console.log(_.isString('Himanshu'));
// var res=notes.addNote(5,6);
// console.log(res);

//  // fs.appendFile('greetings.txt',`Hello ${user.username} ! you are ${notes.age} .`,function(err){
 //   if(err){
 //   	Console.log("Error  i appemding file");
 //   }
 // });

   