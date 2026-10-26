const readline=require('readline');

const ty= readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

ty.question('Enter the sentence : ',(input)=>{
    const sentence = input.toLowerCase();
    let vowels = 0;
    let consonants = 0;

    for (const ch of sentence) {
        if (ch >= 'a' && ch <= 'z') {
            if ('aeiou'.includes(ch)) {
                vowels++;
            } else {
                consonants++;
            }
        }
    }

    console.log('Vowels:', vowels);
    console.log('Consonants:', consonants);

    ty.close();
});
