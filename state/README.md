# State
> Informação sobre este padrão comportamental.

## Classificação
```sh
Padrão Comportamental
```

## Intenção
Sua intenção é definir que pode haver uma possibilidade de mudança dentro de um comportamento, e quando isso ocorrer ele mudará para as informações que foram alteradas.

## Motivações
Fácil utilização, simplificação de codigo e boa legibilidade

## Aplicabilidade
Cada objeto terá um conjunto própio de propriedades(STATE) e metodos(regra para transição de estado aceitável). Como são frenquemente implementadas com o padrão de estado definido, seus objetos de estado serão alterados por outro quando ocorrer uma mudança de dados no estado.

## Estrutura
<img src="structure_state.png"
     alt="Structure State Pattern"
     style="float: left; margin-right: 10px;" />