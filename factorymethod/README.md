# Factory Method
> Informação sobre este padrão.

## Classificação
```sh
Padrão de Criação
```

## Intenção
Definir de forma que o modo um centro de criação para um tipo d eobjeto no qual nao te conhecimento do tipo concreto para ser usado.

## Motivações
Evita acoplamento
Principio de responsabilidade unica
Principio aberto/fechado


## Aplicabilidade
Redução de codigo que constrói componentes. Permitir a possibilidade que qualquer pessoa possa substituir um método, alem de estender o mesmo.
Utilizado quando tem que lidar com grandes objetos que usam muitos recursos.

## Estrutura
<img src="factorymethod_structure.png"
     alt="Structure Memento Pattern"
     style="float: left; margin-right: 10px;" />
     
## Participantes
* Gerador - Factory
    * Fabrica objeto cria novos produtos
    * implementa fabrica de metodos no quais retorna produtos recém-criados
* Produto abstrato - não usa em javascript
    * declara interface para produtos
* Produto Concreto - animals
    * produto esta sendo criado
    * todos os produtos podem suportar a mesma interface(metodos e propriedades)
    