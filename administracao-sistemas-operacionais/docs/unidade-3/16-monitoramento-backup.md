# 16. Monitoramento, logs e backup

<div class="lesson-meta"><span>Aula 16</span><span>4 aulas</span><span>Operação</span></div>

## Objetivos

- selecionar métricas e limiares úteis
- coletar estado de CPU, memória, disco e serviços
- distinguir backup, snapshot e sincronização
- executar e testar restauração

## Monitorar para decidir

Uma métrica sem contexto pode gerar ruído. Defina o que representa funcionamento saudável, frequência de coleta, limiar e ação esperada.

```bash
uptime
free -h
vmstat 1 5
df -hT
df -ih
ss -s
systemctl --failed
journalctl -p warning..alert --since today
```

Ferramentas adicionais podem incluir `top`, `htop`, `iostat`, `sar` e soluções centralizadas.

## Indicadores mínimos

| Recurso | Risco observado | Evidência |
|---|---|---|
| CPU | saturação persistente | load, uso por processo |
| memória | swap intensa/OOM | free, vmstat, journal |
| disco | capacidade/inodes/latência | df, du, iostat |
| rede | erros, perda, conexões | ip, ss, logs |
| serviço | falha ou lentidão | systemctl, teste funcional |

## Backup

Uma estratégia deve responder:

- o que será protegido;
- com que frequência;
- por quanto tempo;
- onde ficará a cópia;
- como será cifrada/protegida;
- como e quando a restauração é testada.

Exemplo com `rsync`:

```bash
rsync -aHAX --delete /srv/dados/ /mnt/backup/dados/
```

`--delete` torna o destino semelhante à origem e pode remover arquivos do backup. Use primeiro com `--dry-run`.

```bash
rsync -aHAX --delete --dry-run /srv/dados/ /mnt/backup/dados/
```

## Arquivo compactado

```bash
tar -czf backup-$(date +%F).tar.gz /etc/servico /srv/dados
```

!!! note "Backup só é comprovado pela restauração"
    A existência de um arquivo não garante legibilidade, completude, permissões corretas ou recuperação no tempo necessário.

## Prática guiada

1. Crie `saude-servidor.sh` para registrar métricas essenciais.
2. Faça o script retornar falha quando uso do volume de laboratório ultrapassar um limiar configurável.
3. Prepare uma pasta com arquivos e permissões diferentes.
4. Execute backup com `rsync --dry-run` e depois efetive.
5. Apague uma cópia de teste, restaure em outro diretório e compare:

```bash
diff -r origem restaurado
```

6. Registre tempo, tamanho e resultado da restauração.

## Desafio

Defina RPO e RTO para um servidor de arquivos de uma escola e proponha frequência, retenção e local das cópias.

## Evidência de entrega

<div class="evidence-box">
Script de saúde, saída de execução, comando de backup, teste de restauração e justificativa de RPO/RTO.
</div>

## Checklist

- [ ] as métricas possuem interpretação
- [ ] o script sinaliza condição anormal
- [ ] usei dry-run antes de --delete
- [ ] restaurei em local separado
- [ ] comparei origem e restauração
- [ ] distingui snapshot, cópia e backup


