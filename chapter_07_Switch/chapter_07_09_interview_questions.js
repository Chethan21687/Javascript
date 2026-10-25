let status=0;
console.log(typeof status)
switch(status){
    case false:
        console.log('false matched');

    case 0:
        console.log('false matched');
        break;
}

//Switch statement uses strict comparison (====)