# 05. Terminal, shell e sistema de ajuda

<div class="lesson-meta"><span>Aula 05</span><span>2 aulas</span><span>Essencial</span></div>

## Objetivos

- distinguir terminal, shell e comando
- interpretar prompt, argumentos e opções
- usar manuais e ajuda embutida
- consultar histórico com responsabilidade

## Camadas da interação

O **terminal** apresenta entrada e saída. O **shell** interpreta a linha digitada, expande variáveis e executa programas. O comando pode ser interno ao shell, um executável ou uma função.

```bash
type cd
type ls
command -V printf
```

## Estrutura geral

```text
comando [opções] [argumentos]
```

Exemplo:

```bash
ls -lah /var/log
```

- `ls`: comando;
- `-l`, `-a`, `-h`: opções;
- `/var/log`: argumento.

## Ajuda local

```bash
man ls
ls --help
help cd
apropos "copy files"
whatis chmod
```

No `man`, use `/texto` para pesquisar, `n` para próxima ocorrência e `q` para sair.

## Expansões do shell

```bash
echo "$HOME"
echo *.log
echo arquivo{1..5}.txt
printf '%s\n' "$(date)"
```

!!! warning "Aspas importam"
    Aspas duplas permitem expansão de variáveis; aspas simples preservam o texto literalmente. Caminhos com espaços devem ser protegidos.

```bash
mkdir "Relatórios do servidor"
```

## Prática guiada

Execute e explique:

```bash
pwd
whoami
id
echo "$SHELL"
type pwd
type hostnamectl
history | tail
```

Depois:

1. localize no manual de `ls` a opção para ordenar por data;
2. localize no manual de `cp` a opção interativa;
3. descubra se `cd` é interno ou externo;
4. use `apropos` para encontrar comandos relacionados a usuários;
5. registre três atalhos úteis do shell.

## Desafio

Sem pesquisar na Web, descubra pelo sistema de ajuda como exibir arquivos ocultos, usar tamanhos legíveis e ordenar pela modificação mais recente.

## Evidência de entrega

<div class="evidence-box">
Arquivo Markdown com cinco comandos de consulta, a fonte local usada para descobri-los e uma explicação de cada resultado.
</div>

## Checklist

- [ ] distingo terminal e shell
- [ ] consigo identificar comandos internos e externos
- [ ] uso man, help e apropos
- [ ] sei quando proteger argumentos com aspas


