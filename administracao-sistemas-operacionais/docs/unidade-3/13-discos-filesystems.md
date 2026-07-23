# 13. Discos e sistemas de arquivos

<div class="lesson-meta"><span>Aula 13</span><span>4 aulas</span><span>Administração</span></div>

## Objetivos

- identificar discos, partições e sistemas de arquivos
- criar e montar um volume de laboratório
- configurar montagem persistente
- monitorar capacidade e inodes

## Camadas de armazenamento

```mermaid
graph LR
  D[Disco ou volume virtual] --> P[Partição]
  P --> F[Sistema de arquivos]
  F --> M[Ponto de montagem]
  M --> A[Aplicações e usuários]
```

## Inspeção

```bash
lsblk -o NAME,SIZE,TYPE,FSTYPE,UUID,MOUNTPOINTS
blkid
findmnt
df -hT
df -ih
```

- `df -hT`: espaço por sistema de arquivos;
- `df -ih`: uso de inodes;
- `du -sh`: uso estimado por diretório.

## Preparação de um novo disco

!!! danger "Confirme o dispositivo"
    Os comandos de particionamento e formatação destroem dados no dispositivo escolhido. Use apenas o segundo disco virtual do laboratório e confirme com `lsblk`.

Exemplo conceitual, adaptando `/dev/sdb`:

```bash
sudo fdisk /dev/sdb
sudo mkfs.ext4 /dev/sdb1
sudo mkdir -p /srv/dados
sudo mount /dev/sdb1 /srv/dados
```

## Persistência

Use UUID no `/etc/fstab`:

```fstab
UUID=VALOR-DO-UUID /srv/dados ext4 defaults,nofail 0 2
```

Teste sem reiniciar:

```bash
sudo umount /srv/dados
sudo mount -a
findmnt /srv/dados
```

## Crescimento e limpeza

Não apague arquivos aleatoriamente quando o disco encher. Localize consumo, identifique proprietário e política de retenção, preserve evidências e evite apagar logs ainda abertos por processos.

## Prática guiada

1. Crie um snapshot.
2. Identifique com precisão o segundo disco virtual.
3. Crie uma partição e sistema de arquivos.
4. Monte em `/srv/dados`.
5. Adicione entrada por UUID ao `/etc/fstab`.
6. Teste com `mount -a`.
7. Reinicie e confirme persistência.
8. Crie arquivos de teste e compare `df` e `du`.

## Desafio

Simule falta de espaço com um arquivo limitado dentro do volume de laboratório. Identifique consumo, remova com segurança e demonstre recuperação. Não execute no sistema de arquivos raiz.

## Evidência de entrega

<div class="evidence-box">
Saídas de `lsblk`, `blkid`, `findmnt`, linha do `fstab` sem dados sensíveis e teste após reinicialização.
</div>

## Checklist

- [ ] usei o disco correto
- [ ] o sistema de arquivos foi criado
- [ ] a montagem usa UUID
- [ ] mount -a não apresentou erro
- [ ] a montagem persistiu após reboot
- [ ] verifiquei espaço e inodes


