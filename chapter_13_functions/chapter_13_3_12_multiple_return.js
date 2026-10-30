function getstatuscode(code){
    if (code>=200 && code<300){
        return "success";
    } else if(code>=400 && code<500){
        return "clientError";
    }else if(code>500){
        return "server error";
    }else{
        return "unknown";
    }
}

console.log(getstatuscode(200));
console.log(getstatuscode(300));
console.log(getstatuscode(600));