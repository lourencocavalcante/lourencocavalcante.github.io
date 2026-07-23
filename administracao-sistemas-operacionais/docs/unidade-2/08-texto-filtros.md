# 08. Arquivos de texto e filtros

<div class="lesson-meta"><span>Aula 08</span><span>3 aulas</span><span>Intermediário</span></div>

## Objetivos

- processar arquivos estruturados por delimitadores
- usar grep, cut, sort, uniq, tr, sed e awk
- produzir resumos a partir de logs
- evitar interpretações erradas por formato

## Texto como interface administrativa

Muitos arquivos de configuração e logs usam texto. Isso permite inspeção, versionamento e automação, mas exige conhecer delimitadores, codificação, campos e variações de formato.

## Ferramentas essenciais

```bash
cut -d: -f1,3 /etc/passwd
sort arquivo.txt
sort arquivo.txt | uniq -c
tr '[:lower:]' '[:upper:]' < nomes.txt
sed -n '1,10p' arquivo.txt
awk -F: '{print $1, $3}' /etc/passwd
```

## Expressões regulares

```bash
grep -E '^(root|adminlab):' /etc/passwd
grep -E '^[0-9]{1,3}(\.[0-9]{1,3}){3}$' ips.txt
```

## Exemplo de resumo

Suponha um arquivo `acessos.log`:

```text
2026-07-23 10:01 192.168.56.10 / 200
2026-07-23 10:02 192.168.56.11 /admin 403
2026-07-23 10:03 192.168.56.10 /docs 200
```

Contagem por código:

```bash
awk '{print $5}' acessos.log | sort | uniq -c | sort -nr
```

!!! warning "A posição dos campos precisa ser validada"
    Antes de automatizar, examine linhas reais, espaços, delimitadores e casos ausentes. Um parser baseado em posição errada pode gerar relatório convincente e incorreto.

## Prática guiada

1. Copie `/etc/passwd` para a pasta da aula.
2. Gere uma tabela `usuario:uid:shell`.
3. Liste usuários com UID maior ou igual a 1000.
4. Conte quantas contas usam cada shell.
5. Crie um arquivo de logs fictício com ao menos 20 linhas.
6. Produza contagens por IP e por código de resposta.

Exemplo:

```bash
awk -F: '$3 >= 1000 {print $1 ":" $3 ":" $7}' passwd
```

## Desafio

Crie um único pipeline que receba o log fictício e apresente os três IPs com mais ocorrências, em ordem decrescente.

## Evidência de entrega

<div class="evidence-box">
Scripts ou pipelines, arquivos de entrada e saída, e uma explicação sobre o delimitador e os campos usados.
</div>

## Checklist

- [ ] identifiquei corretamente o formato dos arquivos
- [ ] usei filtros pequenos e combináveis
- [ ] validei o resultado com amostra manual
- [ ] produzi estatísticas ordenadas


