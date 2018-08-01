// console.log('starting node.js!!');

const fs=require('fs');

var fetchNotes=() => {
	 try{
   	var notesString =fs.readFileSync('note-data.json');
    return JSON.parse(notesString);
   }catch(e){
      return [];
   }
};
var saveNote = (notes) => {
  fs.writeFileSync('note-data.json',JSON.stringify(notes));
};
var addNote=(title,body) =>{
   //console.log('Adding note',title, body);
   var notes=fetchNotes();
   var note={
   	 title:title,
   	 body:body
   };
  
   
   var duplicateNotes=notes.filter((note)=>{
      return note.title===title;
   });

   if(duplicateNotes.length===0){
   	notes.push(note);
   	saveNote(notes);
   	return note;
   }
   
};

var getAll =() =>{
   return fetchNotes();
};
var getNote =(title) => {
	var notes=fetchNotes();
	var findNote=notes.filter((note)=>{
		return note.title===title;
	});
	return findNote[0];


};
var removeNote =(title) => {
	var notes=fetchNotes();
	var findNote=notes.filter((note)=> {
		return note.title!==title;
	});
	saveNote(findNote);
	return notes.length!==findNote.length;
};
var logNote = (note) =>{
	debugger; 
  console.log("--");
 	console.log(`Title ${note.title }`);
 	console.log(`Body ${note.body }`);
  };
module.exports={ 
   addNote,
   getAll,
   removeNote,
   getNote,
   logNote
};
