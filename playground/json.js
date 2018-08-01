// var obj={
// 	name: 'Himanshu'
// };
// var stringobj=JSON.stringify(obj);
// console.log(typeof stringobj);
// console.log(stringobj);


// var personString='{"name"':"Himanshu","age": 20}';
// var person=JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs=require('fs');
var originalNote={
	title:'Some title',
	body:'Some body'
};

// original Note String
var originalNoteString=JSON.stringify(originalNote);
fs.writeFileSync('Notes.json',originalNoteString);

var noteString=fs.readFileSync('notes.json');

//note
var note=JSON.parse(noteString)

console.log(typeof note);
console.log(note.title);


