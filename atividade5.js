const prompt = require('prompt-sync')();

    const nota1 = prompt('Digite a primeira nota: ');
    const nota2 = prompt('Digite a segunda nota: ');
    const nota3 = prompt('Digite a terceira nota: ');

        const media = ((nota1*2) + (nota2*3) + (nota3*5))/10

            console.log(`A sua media é: ${media}`);