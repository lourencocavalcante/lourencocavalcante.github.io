# 06. Comandos fundamentais

<div class="lesson-meta"><span>Aula 06</span><span>3 aulas</span><span>Essencial</span></div>

## Objetivos

- navegar pela árvore de diretórios
- criar, copiar, mover e remover arquivos
- inspecionar metadados e conteúdo
- evitar alterações destrutivas acidentais

## Navegação e caminhos

```bash
pwd
ls -lah
cd /etc
cd ..
cd -
```

Caminhos absolutos começam em `/`; caminhos relativos partem do diretório atual. `.` representa o diretório atual e `..` o diretório pai.

## Operações com arquivos

```bash
mkdir -p laboratorio/config
printf 'porta=8080\n' > laboratorio/config/app.conf
cp -a laboratorio laboratorio-copia
mv laboratorio-copia copia-seguranca
rm -r copia-seguranca
```

## Inspeção

```bash
file /etc/passwd
stat /etc/passwd
wc -l /etc/passwd
head -n 5 /etc/passwd
tail -n 5 /etc/passwd
```

## Globbing

```bash
ls *.conf
ls arquivo?.txt
ls [a-c]*
```

!!! danger "Remoção não possui lixeira"
    Em geral, `rm` remove diretamente. Antes de executar como administrador, confirme o caminho com `pwd`, liste o alvo e evite variáveis vazias.

```bash
alvo="$HOME/laboratorio"
printf 'Remover: %s\n' "$alvo"
ls -ld -- "$alvo"
```

## Prática guiada

Crie a estrutura:

```text
~/aso/aula06/
├── configuracoes/
├── logs/
└── relatorios/
```

1. crie três arquivos `.conf` com `printf` ou editor;
2. copie apenas os arquivos `.conf` para `relatorios`;
3. renomeie um arquivo;
4. produza `metadados.txt` com `file` e `stat`;
5. compacte a pasta da aula:

```bash
tar -czf aula06.tar.gz -C ~/aso aula06
```

6. liste o conteúdo sem extrair:

```bash
tar -tzf aula06.tar.gz
```

## Desafio

Crie um comando que copie somente arquivos modificados nas últimas 24 horas de uma pasta de teste para outra. Use a documentação de `find` e valide com arquivos de datas diferentes.

## Evidência de entrega

<div class="evidence-box">
Árvore de diretórios, arquivo `metadados.txt`, pacote `aula06.tar.gz` e explicação do comando do desafio.
</div>

## Checklist

- [ ] uso caminhos absolutos e relativos
- [ ] manipulo arquivos preservando metadados quando necessário
- [ ] inspeciono antes de remover
- [ ] criei e validei um arquivo compactado


