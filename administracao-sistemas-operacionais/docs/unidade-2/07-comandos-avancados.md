# 07. Comandos avançados e composição

<div class="lesson-meta"><span>Aula 07</span><span>3 aulas</span><span>Intermediário</span></div>

## Objetivos

- usar redirecionamentos e pipes
- localizar arquivos e conteúdo
- combinar find, xargs e exec com segurança
- interpretar códigos de saída

## Fluxos padrão

Todo processo possui, normalmente, entrada padrão, saída padrão e saída de erro.

```bash
comando > saida.txt
comando >> saida.txt
comando 2> erros.txt
comando > tudo.txt 2>&1
```

## Pipes

```bash
ps aux | grep '[s]sh'
cut -d: -f1 /etc/passwd | sort
journalctl -p err -b | tail -n 20
```

O pipe conecta a saída de um comando à entrada do próximo. Cada etapa deve ser compreensível isoladamente.

## Busca de arquivos

```bash
find /etc -type f -name '*.conf' 2>/dev/null
find "$HOME" -type f -size +10M
find /var/log -type f -mtime -1
```

## Busca de conteúdo

```bash
grep -Rni --include='*.conf' 'listen' /etc 2>/dev/null
```

## Código de saída

```bash
grep -q '^root:' /etc/passwd
echo "$?"
```

`0` indica sucesso; outros valores indicam condições ou falhas conforme o comando.

!!! tip "Dados com espaços"
    Ao encadear nomes de arquivos, prefira separação nula:

    ```bash
    find . -type f -print0 | xargs -0 stat --
    ```

## Prática guiada

1. Crie arquivos e subpastas com nomes simples e com espaços.
2. Localize todos os `.log` maiores que zero bytes.
3. Gere uma lista ordenada por tamanho:

```bash
find . -type f -printf '%s\t%p\n' | sort -n
```

4. Pesquise recursivamente uma palavra nos arquivos de configuração.
5. Redirecione resultados e erros para arquivos distintos.
6. Verifique o código de saída de uma busca que encontra e de outra que não encontra.

## Desafio

Produza um relatório com os dez maiores arquivos de `/var/log`, sem ocultar erros por falta de permissão. Depois produza uma segunda versão com privilégio administrativo e compare.

## Evidência de entrega

<div class="evidence-box">
Comandos usados, arquivos de saída e comparação entre execução comum e administrativa.
</div>

## Checklist

- [ ] sei diferenciar stdout e stderr
- [ ] componho pipelines por etapas testáveis
- [ ] uso find com critérios de tipo, tamanho e data
- [ ] interpreto código de saída
- [ ] trato nomes de arquivo com segurança


