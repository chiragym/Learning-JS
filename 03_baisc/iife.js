// Immediately Invoked Function Expression (IIFE) , usage wrap function in () for execution write ();

// Named IFFE
(function db(){
    console.log("Database connected");
})();  // ; is compulsory fir iffie , because we need to tell iffie that it ends here

// Unnamed IFFE . with parameter passing
((name) =>{
    console.log(`Database two ${name}`);    
})("Chirag");