# 19. FTP, FTPS e SFTP

<div class="lesson-meta"><span>Aula 19</span><span>3 aulas</span><span>Serviços</span></div>

## Objetivos

- distinguir FTP, FTPS e SFTP
- avaliar riscos de credenciais e canais de dados
- configurar transferência segura por SFTP
- restringir usuários e diretórios

## Protocolos diferentes

| Tecnologia | Base | Proteção típica | Observação |
|---|---|---|---|
| FTP | protocolo próprio | nenhuma por padrão | credenciais e dados podem trafegar em claro |
| FTPS | FTP + TLS | TLS | mantém particularidades de canais FTP |
| SFTP | subsistema do SSH | SSH | não é “FTP sobre SSH” |

Sempre que o requisito for apenas transferência segura de arquivos e SSH já estiver disponível, SFTP costuma reduzir componentes adicionais. A escolha deve considerar compatibilidade, política e clientes existentes.

## Teste SFTP

```bash
sftp usuario@IP_DO_SERVIDOR
```

Dentro do cliente:

```text
pwd
lpwd
ls
put arquivo.txt
get arquivo.txt
exit
```

## Restrição por grupo

Um bloco `Match Group` em `sshd_config` pode aplicar chroot e desabilitar recursos. A raiz do chroot precisa obedecer requisitos de propriedade do OpenSSH.

Exemplo conceitual:

```text
Match Group sftpusers
    ChrootDirectory /srv/sftp/%u
    ForceCommand internal-sftp
    AllowTcpForwarding no
    X11Forwarding no
```

!!! danger "Valide antes de recarregar"
    Use `sshd -t`, mantenha console e uma sessão administrativa ativa. Um erro pode bloquear todo acesso SSH.

## Quando FTP for exigido

Use servidor mantido, TLS, usuários restritos, modo passivo corretamente limitado e firewall coerente. Nunca considere a simples existência de login como prova de segurança.

## Prática guiada

1. Crie grupo e usuário de laboratório para SFTP.
2. Prepare diretórios com propriedade correta para chroot e subpasta gravável.
3. adicione bloco `Match Group`.
4. valide com `sshd -t`.
5. recarregue SSH.
6. teste upload e download.
7. confirme que o usuário restrito não obtém shell e não sai da raiz prevista.
8. consulte logs da autenticação.

## Desafio

Compare uma captura de tráfego ou descrição técnica de FTP simples e SFTP. Explique em quais camadas ocorre a proteção e por que mudar apenas a porta não cria segurança.

## Evidência de entrega

<div class="evidence-box">
Configuração restrita, permissões dos diretórios, teste de transferência, tentativa negada e logs de autenticação.
</div>

## Checklist

- [ ] diferencio claramente FTP, FTPS e SFTP
- [ ] o usuário está restrito
- [ ] a raiz possui propriedade correta
- [ ] a configuração passou no teste
- [ ] upload e download funcionam
- [ ] o acesso indevido foi negado


