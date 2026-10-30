function doubleMe (a){
    return a*2;
}
const doubleMe=(a)=>a*2;

doubleMe(2)
doubleMe(3)

const getresult= (score)=>{
    if (score>70) return "Pass";
    return "fail";
}

console.log(getresult(78));
console.log(getresult(65));