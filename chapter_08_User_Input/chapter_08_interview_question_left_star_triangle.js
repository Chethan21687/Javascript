const readline=require('readline');

const rk=readline.createInterface({
    input:  process.stdin,
    output: process.stdout
});

rk.question('Enter the number of rows:',(input) => {
    const n= Number(input)

    for (let i=1;i<=n;i++){
        console.log(' '.repeat(n-i)+'*'.repeat(i));
    }
    rk.close();
});


