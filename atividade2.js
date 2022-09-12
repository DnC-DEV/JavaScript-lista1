const prompt = require('prompt-sync')();

    const idadedias = Number(prompt('Digite sua idade em dias: '));

        const anos = Math.floor(idadedias/365)
        const meses = Math.floor((idadedias % 365)/30)
        const dias = Math.floor((idadedias % 365) % 30)

            console.log(`\n\t${anos} Ano(s)\n\t\t ${meses} Mes(es) \n\t\t\t ${dias} Dia(s)`)