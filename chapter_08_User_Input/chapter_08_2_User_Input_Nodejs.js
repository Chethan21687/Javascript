const readline=require('readline');

const r1=readline.Interface({
    input: process.stdin,
    output:process.stdout
});

r1.question('Enter the number:',(input) =>{
    let num=Number(input);

    if (num%2===0)
    {
        console.log(num+"is Even");
    }else{
        console.log(num+ "is odd")
    }

    r1.close();
});