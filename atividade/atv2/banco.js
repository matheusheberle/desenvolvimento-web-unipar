const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const nome = "Matheus Heberle";
const agencia = "1234";
const numeroConta = "56789-0";

let saldo = 1000;

function menu() {
    rl.question(
        "\n[1] Dados da Conta\n" +
        "[2] Saldo\n" +
        "[3] Débito\n" +
        "[4] Crédito\n" +
        "[0] Sair\n" +
        "Escolha uma opção: ",
        (resposta) => {

            if (resposta == "1") {
                console.log("\nNome: " + nome);
                console.log("Agência: " + agencia);
                console.log("Conta: " + numeroConta);

                menu();
            }

            else if (resposta == "2") {
                console.log(
                    "\nSaldo: " +
                    saldo.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL"
                    })
                );

                menu();
            }

            else if (resposta == "3") {
                rl.question("Digite o valor do débito: ", (valor) => {
                    const valorDebito = parseFloat(valor);

                    if (valorDebito > saldo) {
                        console.log("Saldo insuficiente.");
                    } else {
                        saldo = saldo - valorDebito;
                        console.log("Débito realizado.");
                    }

                    menu();
                });
            }

            else if (resposta == "4") {
                rl.question("Digite o valor do crédito: ", (valor) => {
                    const valorCredito = parseFloat(valor);

                    saldo = saldo + valorCredito;

                    console.log("Crédito realizado.");

                    menu();
                });
            }

            else if (resposta == "0") {
                console.log("Programa encerrado.");
                rl.close();
            }

            else {
                console.log("Opção inválida.");
                menu();
            }
        }
    );
}

menu();