// Importa e configura o módulo nativo readline para entrada/saída no terminal
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Dados fixos da conta (Objeto) e saldo dinâmico
const conta = {
  titular: 'Carlos Silva',
  agencia: '0001',
  numeroConta: '12345-6'
};

let saldo = 1000.00;

// Função auxiliar para formatar valores em formato de Real (R$)
function formatarMoeda(valor) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(valor);
}

// Função principal que exibe o menu e aguarda a escolha do usuário
function exibirMenu() {
  console.log('\n==============================');
  console.log('       BANCO DIGITAL JS       ');
  console.log('==============================');
  console.log('1 - Consultar Dados da Conta');
  console.log('2 - Consultar Saldo');
  console.log('3 - Realizar Débito (Saque)');
  console.log('4 - Realizar Crédito (Depósito)');
  console.log('0 - Sair');
  console.log('------------------------------');

  rl.question('Escolha uma opção: ', (opcao) => {
    switch (opcao.trim()) {
      case '1':
        consultarDados();
        break;
      case '2':
        consultarSaldo();
        break;
      case '3':
        realizarDebito();
        break;
      case '4':
        realizarCredito();
        break;
      case '0':
        console.log('\nObrigado por usar o Banco Digital. Até logo!\n');
        rl.close(); // Encerra a interface do readline e o programa
        break;
      default:
        console.log('\nOpção inválida! Tente novamente.');
        exibirMenu();
        break;
    }
  });
}

// Opção 1: Consultar dados cadastrais
function consultarDados() {
  console.log('\n--- Dados da Conta ---');
  console.log(`Titular: ${conta.titular}`);
  console.log(`Agência: ${conta.agencia}`);
  console.log(`Conta:   ${conta.numeroConta}`);
  exibirMenu();
}

// Opção 2: Consultar saldo formatado
function consultarSaldo() {
  console.log(`\nSaldo atual: ${formatarMoeda(saldo)}`);
  exibirMenu();
}

// Opção 3: Realizar saque/débito com validação de saldo
function realizarDebito() {
  rl.question('\nDigite o valor para débito (saque): R$ ', (resposta) => {
    const valor = parseFloat(resposta.replace(',', '.'));

    if (isNaN(valor) || valor <= 0) {
      console.log('Valor inválido para operação.');
    } else if (valor > saldo) {
      console.log(`Saldo insuficiente! Seu saldo é de ${formatarMoeda(saldo)}.`);
    } else {
      saldo -= valor;
      console.log(`Débito de ${formatarMoeda(valor)} realizado com sucesso!`);
      console.log(`Novo saldo: ${formatarMoeda(saldo)}`);
    }

    exibirMenu();
  });
}

// Opção 4: Realizar depósito/crédito
function realizarCredito() {
  rl.question('\nDigite o valor para crédito (depósito): R$ ', (resposta) => {
    const valor = parseFloat(resposta.replace(',', '.'));

    if (isNaN(valor) || valor <= 0) {
      console.log('Valor inválido para operação.');
    } else {
      saldo += valor;
      console.log(`Crédito de ${formatarMoeda(valor)} realizado com sucesso!`);
      console.log(`Novo saldo: ${formatarMoeda(saldo)}`);
    }

    exibirMenu();
  });
}

// Inicia o programa exibindo o menu pela primeira vez
exibirMenu();