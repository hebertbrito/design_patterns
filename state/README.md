# State
> Informação sobre este padrão.

## Classificação
```sh
Padrão Comportamental
```

## Intenção
Sua intenção é definir que pode haver uma possibilidade de mudança dentro de um comportamento, e quando isso ocorrer ele mudará para as informações que foram alteradas.

## Motivações
Fácil utilização, simplificação de codigo e boa legibilidade

## Aplicabilidade
Permite compor hierarquia de classes de estado, reduzindo a duplicação.
Extraia todo o código específico do estado no qual o conjunto das classes distindas. Com o resultado final, poderá adicionar ou alterar estados de forma independente, fazendo com que o custo de manunteção seja reduzido.

## Estrutura
<img src="structure_state.png"
     alt="Structure State Pattern"
     style="float: left; margin-right: 10px;" />
     
## Participantes
* Contexto - Alterador de cores
    * Deixar a interface oferecer suporte a clientes do serviço
    * Mantém a referencia de um objeto de estado no qual demonstra o estado atual
    * Permissão para que oe stado possam fazer alterações de um estado diferente do atual
* Estado - em código
    * Encapsulamento de estados e associados a eles.

## Codigo de demonstração
><a style="text-decoration: none; color: #f0f0f0f0" href="https://github.com/hebertbritto/design_patterns/blob/main/state/state.js">Ir para o exemplo</a>
