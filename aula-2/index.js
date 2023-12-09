class Autor {
    constructor(nome, nacionalidade) {
        this.nome = nome;
        this.nacionalidade = nacionalidade;

    }

    exibirDetalhes() {
        console.log(`Autor: ${this.nome}, Nacionalidade: ${this.nacionalidade}`);
    }
}

class Livro {
    constructor(titulo, anoPublicacao, autor) {
        this.titulo = titulo;
        this.anoPublicacao = anoPublicacao;
        this.autor = autor;
    }

    detalhesDoLivro() {
        console.log(`Titulo: ${this.titulo},\nAno de pubiclação: ${this.anoPublicacao}`);
        this.autor.exibirDetalhes();
    }
}

class Biblioteca {
    static listaDeLivros = [];

    static adicionarLivro(livro) {
        this.listaDeLivros.push(livro);
    }

    static removerLivro(titulo){
        const livro = this.listaDeLivros.find(livro => livro.titulo.toLowerCase() === titulo.toLowerCase() );
        if(livro){
            this.listaDeLivros = this.listaDeLivros.filter(l => l.titulo !== titulo);
            console.log(`O ${titulo} foi removido da biblioteca!`)
        }
    }

    static listarLivros(){
        this.listaDeLivros.forEach(livro => console.log(livro.detalhesDoLivro()));
    }
}

// criando autores

const autor1 = new Autor('Machado de Assis', 'Brasileiro');
const autor2 = new Autor('Clarrice Lisperctor', 'Brasileira');
const autor3 = new Autor('Xuxa Xaxa', 'Brasileiro');
const autor4 = new Autor('Cynthia Andrade', 'Brasileiro');

// criando livros 

const livro1 = new Livro('Uma noite escura', '1998', autor1);
const livro2 = new Livro('Uma jardim abençoado', '2010', autor2);
const livro3 = new Livro('Sol da meia noite', '1981', autor3);
const livro4 = new Livro('60 dias de noite', '2001', autor4);
const livro5 = new Livro('Morro dos ventos', '1900', autor4);
const livro6 = new Livro('Como dormir bem', '2002', autor1);

// testando o método do autor

// autor1.exibirDetalhes();
// autor2.exibirDetalhes();

// testanto o método do livro 

// livro1.detalhesDoLivro();
// livro2.detalhesDoLivro();

// Testando os métodos estáticos da Biblioteca

Biblioteca.adicionarLivro(livro1);
Biblioteca.adicionarLivro(livro2);
Biblioteca.adicionarLivro(livro3);
Biblioteca.adicionarLivro(livro4);
Biblioteca.adicionarLivro(livro5);
Biblioteca.adicionarLivro(livro6);

Biblioteca.listarLivros();

Biblioteca.removerLivro('Uma noite escura');

Biblioteca.listarLivros();