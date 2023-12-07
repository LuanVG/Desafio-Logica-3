class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    switch (this.tipo) {
      case 'mago':
        ataque = 'á magia';
        break;
      case 'guerreiro':
        ataque = 'á espada';
        break;
      case 'monge':
        ataque = 'á artes marciais';
        break;
      case 'ninja':
        ataque = 'á shuriken';
        break;
      default:
        ataque = 'á um ataque indefinido';
    }

    const mensagem = `O ${this.tipo} atacou usando ${ataque}`;
    console.log(mensagem);
  }
}

// Exemplo de uso:

// Criando um herói
const meuHeroi = new Heroi('Skull Dark', 25, 'guerreiro');

// Chamando o método atacar
meuHeroi.atacar();
