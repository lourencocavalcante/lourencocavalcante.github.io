# 09. Shell scripts

<div class="lesson-meta"><span>Aula 09</span><span>4 aulas</span><span>Intermediário</span></div>

## Objetivos

- criar scripts executáveis
- usar variáveis, argumentos e condicionais
- tratar erros básicos
- produzir saída previsível para automação

## Estrutura inicial

```bash
#!/usr/bin/env bash
set -Eeuo pipefail

printf 'Host: %s\n' "$(hostname)"
```

- `-e`: encerra em erros não tratados;
- `-u`: acusa variável não definida;
- `pipefail`: propaga falha em pipelines;
- `-E`: preserva traps de erro em funções.

Essas opções não substituem tratamento explícito, mas tornam falhas silenciosas menos prováveis.

## Argumentos

```bash
#!/usr/bin/env bash
set -Eeuo pipefail

arquivo=${1:-}
if [[ -z "$arquivo" ]]; then
  printf 'Uso: %s ARQUIVO\n' "$0" >&2
  exit 2
fi

if [[ ! -f "$arquivo" ]]; then
  printf 'Arquivo inexistente: %s\n' "$arquivo" >&2
  exit 1
fi

wc -l -- "$arquivo"
```

## Condicionais e laços

```bash
for servico in ssh cron; do
  if systemctl is-active --quiet "$servico"; then
    printf '%-12s ativo\n' "$servico"
  else
    printf '%-12s inativo\n' "$servico"
  fi
done
```

## Funções e logs

```bash
log() {
  printf '%s [%s] %s\n' "$(date --iso-8601=seconds)" "$1" "$2"
}
```

!!! tip "ShellCheck"
    Quando disponível, use `shellcheck script.sh` para detectar problemas comuns de portabilidade, aspas e expansão.

## Prática guiada

Crie `inventario.sh` que:

1. aceite um diretório de saída como argumento;
2. crie o diretório quando não existir;
3. registre data, host, sistema, kernel, memória, discos, endereços, rota e serviços em falha;
4. grave cada execução em um arquivo com data e hora;
5. mostre mensagens claras de início, sucesso ou erro.

Teste:

```bash
chmod +x inventario.sh
./inventario.sh ./relatorios
bash -n inventario.sh
```

## Desafio

Adicione uma opção `--compactar` que gere um `.tar.gz` do relatório. Argumentos inválidos devem produzir ajuda e código de saída diferente de zero.

## Evidência de entrega

<div class="evidence-box">
Script versionado, duas execuções de teste, saída de `bash -n` e explicação dos códigos de saída adotados.
</div>

## Checklist

- [ ] o script possui shebang
- [ ] variáveis estão protegidas com aspas
- [ ] argumentos são validados
- [ ] erros geram mensagem em stderr
- [ ] o resultado é reproduzível
- [ ] o script foi testado com entrada válida e inválida


