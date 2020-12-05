# Abstract Factory
> Informação sobre este padrão.

## Classificação
```sh
Padrão de Criação
```

## Intenção
Definir um ponto central para criação de uma familia de objetos que são relacionados ou tem dependências entre si, no qual nao se tem conhecimento dos tipos e objetos a serem usados. Extensão em massa de Factory Method

## Motivações
Evita acoplamento estreito entre produtos.
Principio de responsabilidade unica.
Principio aberto/fechado. Introduzir novas variantes de seus produtos sem gerar um erro no codigo já existente.

## Aplicabilidade
Utilizado quando se precisa utilizar varias familias de produtos relacionados.
É uma interface de criação de objetos, contando que seu codigo possa criar objetos por meio da interfacer, nao há necessidade em se preocupar em gerar outra variante errada para um produto que nao corresponde a esté tipo em seu sistema.

## Estrutura
<img src="structure_state.png"
     alt="Structure State Pattern"
     style="float: left; margin-right: 10px;" />
     
## Participantes
* Fabrica Abstrata - não usa em javascript
    * Cria uma interface para criar produtos
* Fabrica concreta - em código
    * Um objeto de fabrica que gera novos produtos
    * Método create() deve retornar novos produtos
* Produtos - em código
    * Dnstâncias dos produtos sendos geradas pela fábrica
* Produto Abstrato - não usa em javascript
    * Declara uma interface para produtos que estão sendo gerados.

