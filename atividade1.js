const prompt = require('prompt-sync')();

    const anos = Number(prompt('Digite quantos anos você tem: '));
    const meses = Number(prompt('Digite quantos meses você tem: '));
    const dias = Number(prompt('Digite quantos dias você tem: '));

        const idadeDias = (anos*365) + (meses*30) + dias;

            console.log(`\n\tSua idade em dias é: ${idadeDias}`);