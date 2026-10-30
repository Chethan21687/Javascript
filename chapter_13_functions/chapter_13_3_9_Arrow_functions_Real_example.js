function validateStatusCode(status){
    if(status>=200 && status<=300){
        console.log('Request is fine')
    }
}

//function as expression
const validateStatusCodeone= function(status){
    if(status>=200 && status<=300){
        console.log('Request is fine')
    }
}

//Arrow function
const validateStatusCodeArrow= (status)=>{
    if(status>=200 && status<=300){
        console.log('Request is fine')
    }
}
