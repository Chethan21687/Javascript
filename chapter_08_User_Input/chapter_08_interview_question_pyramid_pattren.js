const readline=require('readline');

const rh=readline.createInterface({
    input : process.stdin,
    output: process.stdout
});

rh.question('Enter the Number of Rows: ',(input)=>{
    const n = Number(input);

    for (let i=1;i<=n;i++){
        console.log(' '.repeat(n-i)+'*'.repeat(2*i-1));
    }
    rh.close();
});
