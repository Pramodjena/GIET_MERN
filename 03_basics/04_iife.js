// Immediately Invoked Function Expressions (IIFE)


(function welcome(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('pramod')

