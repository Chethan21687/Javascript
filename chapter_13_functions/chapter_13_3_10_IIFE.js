//IIFE-Immediately Invoked function expression

function name1(){
    console.log('Hi')
}

name1();

(function(){
    console.log('Hi')
})();

(function(){
    console.log('Bye')
})();

(()=>{
    console.log('Staging')
})();