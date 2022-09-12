const prompt = require('prompt-sync')();

    const valor1 = Number(prompt('Digite o primeiro valor: '));
    const valor2 = Number(prompt('Digite o segundo valor: '));
    const valor3 = Number(prompt('Digite o terceiro valor: '));

        const numeroR = (valor1+valor2)*(valor1+valor2);
        const nuemroS = (valor2+valor3)*(valor2+valor3);
        const numeroD = (numeroR+nuemroS)/2;

            console.log(`\nO valor de D é: ${numeroD}`);