# Diagnóstico de incidentes

## Regra de ouro

> Colete evidências antes de alterar. Uma mudança prematura pode apagar o sintoma, criar outro problema ou impedir a descoberta da causa.

## Roteiro geral

1. **Defina o sintoma:** quem, desde quando, qual ação e qual mensagem.
2. **Delimite o alcance:** um usuário, um cliente, uma rede ou todos.
3. **Registre o estado:** hora, host, versão, recursos, serviços e alterações recentes.
4. **Formule hipóteses:** ordene por evidência e custo do teste.
5. **Teste sem alterar**, quando possível.
6. **Aplique uma mudança por vez.**
7. **Valide o requisito original**, não apenas o desaparecimento da mensagem.
8. **Monitore recorrência e documente.**

## Serviço indisponível

```bash
systemctl status SERVICO
systemctl is-enabled SERVICO
journalctl -xeu SERVICO
ss -lntup
```

Perguntas:

- o pacote está instalado?
- a configuração possui sintaxe válida?
- a unidade iniciou?
- o processo escuta na interface/porta correta?
- o firewall permite?
- o cliente usa o endereço e protocolo corretos?

## Disco cheio

```bash
df -hT
df -ih
du -xhd1 /CAMINHO | sort -h
find /CAMINHO -xdev -type f -size +100M -ls
lsof +L1
```

Verifique capacidade, inodes, arquivos grandes e arquivos removidos ainda abertos.

## Falha de rede

```bash
ip -brief link
ip -brief address
ip route
getent hosts NOME
ping -c 4 IP
nc -vz HOST PORTA
```

Teste link → endereço → rota → nome → porta → aplicação.

## Permissão negada

```bash
id USUARIO
namei -l /caminho/completo
ls -ld /caminho /caminho/completo
getfacl /caminho/completo
```

Considere grupos da sessão, permissões de todos os diretórios, ACL, usuário do processo e controles adicionais.

## Mudança recente

```bash
journalctl --since '30 min ago'
stat /etc/arquivo.conf
history | tail -n 30
```

O histórico não é auditoria completa, mas pode ajudar no laboratório. Compare com controle de versão e registro de mudança.

## Modelo de relato

```text
Sintoma:
Impacto:
Estado observado:
Hipóteses:
Testes:
Causa:
Correção:
Validação:
Prevenção:
```
