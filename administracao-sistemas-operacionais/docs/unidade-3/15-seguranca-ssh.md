# 15. Segurança, firewall e acesso remoto

<div class="lesson-meta"><span>Aula 15</span><span>4 aulas</span><span>Segurança</span></div>

## Objetivos

- aplicar atualização e menor privilégio
- configurar autenticação SSH por chave
- reduzir exposição de serviços
- validar regras de firewall sem perder acesso

## Segurança como processo

Hardening reduz superfície de ataque e impacto de falhas. A ordem importa:

1. inventariar serviços e portas;
2. atualizar componentes;
3. remover/desabilitar o que não é necessário;
4. restringir identidades e privilégios;
5. configurar autenticação e firewall;
6. habilitar logs e monitoramento;
7. testar recuperação e acesso legítimo.

## SSH por chave

No cliente:

```bash
ssh-keygen -t ed25519
ssh-copy-id adminlab@IP_DO_SERVIDOR
ssh adminlab@IP_DO_SERVIDOR
```

No servidor, valide antes de recarregar:

```bash
sudo sshd -t
sudo systemctl reload ssh
```

Opções comuns, avaliadas conforme o ambiente:

```text
PermitRootLogin no
PasswordAuthentication no
PubkeyAuthentication yes
```

!!! danger "Não desative senha antes de testar a chave"
    Mantenha uma sessão aberta, teste uma segunda conexão e assegure acesso ao console da VM.

## Firewall

Com UFW:

```bash
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow OpenSSH
sudo ufw enable
sudo ufw status verbose
```

Com firewalld:

```bash
sudo firewall-cmd --get-active-zones
sudo firewall-cmd --permanent --add-service=ssh
sudo firewall-cmd --reload
sudo firewall-cmd --list-all
```

## Auditoria rápida

```bash
ss -lntup
systemctl --type=service --state=running
last
lastb 2>/dev/null
journalctl -u ssh --since today
```

## Prática guiada

1. Crie um snapshot e mantenha console disponível.
2. Gere uma chave exclusiva de laboratório.
3. Copie a chave para o servidor e teste nova sessão.
4. Desabilite login direto de root.
5. Quando autorizado, desabilite senha somente após validar chave.
6. Aplique firewall permitindo SSH e serviços já previstos.
7. Teste porta permitida e porta não permitida a partir do cliente.
8. Reinicie e confirme acesso.

## Desafio

Produza um relatório de superfície de exposição: porta, processo, pacote, finalidade, rede permitida e decisão manter/remover/restringir.

## Evidência de entrega

<div class="evidence-box">
Trecho não sensível da configuração SSH, regras do firewall, testes positivos/negativos e plano de recuperação caso o acesso remoto falhe.
</div>

## Checklist

- [ ] a chave funciona em uma nova sessão
- [ ] login direto de root está bloqueado
- [ ] a configuração passou em sshd -t
- [ ] o firewall permite apenas o necessário
- [ ] testei após reinicialização
- [ ] nenhuma chave privada foi entregue


