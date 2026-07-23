# Avaliação e evidências

A avaliação deve observar tanto o resultado quanto o processo usado pelo estudante para obtê-lo. Um serviço aparentemente funcional pode estar inseguro, não persistir após reinicialização ou não possuir evidência suficiente para ser reproduzido.

## Dimensões avaliadas

| Dimensão | Indicadores |
|---|---|
| compreensão | explica o papel do componente e as consequências da configuração |
| execução | usa comandos e arquivos adequados, com cuidado operacional |
| diagnóstico | coleta evidências, formula hipótese e testa antes de alterar |
| segurança | aplica menor privilégio, restringe exposição e protege credenciais |
| validação | testa localmente, remotamente e após reinicialização quando necessário |
| documentação | registra passos, saídas relevantes e procedimento de reversão |

## Instrumentos sugeridos

- exercícios de leitura e interpretação de comandos;
- relatórios curtos de laboratório;
- desafios práticos com falhas previamente inseridas;
- scripts administrativos versionados;
- prova prática individual;
- projeto final integrado e apresentação técnica.

## Rubrica para práticas

| Critério | Insuficiente | Em desenvolvimento | Adequado | Avançado |
|---|---|---|---|---|
| configuração | não funciona | funciona parcialmente | atende aos requisitos | atende e trata exceções |
| validação | sem teste | teste superficial | testes coerentes | testes automatizados ou comparativos |
| segurança | exposição indevida | controles incompletos | controles mínimos corretos | endurecimento justificado |
| diagnóstico | tentativa aleatória | hipótese pouco sustentada | evidência → hipótese → teste | isola causa e previne recorrência |
| registro | incompleto | pouco reproduzível | claro e reproduzível | inclui reversão e análise crítica |

## Evidência mínima

<div class="evidence-box">
Uma entrega técnica deve conter: objetivo, ambiente, comandos principais, resultado observável, teste de validação e uma conclusão de até cinco linhas.
</div>

!!! warning "Captura de tela não substitui explicação"
    Imagens podem demonstrar o resultado, mas precisam ser acompanhadas do comando, do contexto e da interpretação do estudante.
