# 21. Servidor de arquivos Samba

<div class="lesson-meta"><span>Aula 21</span><span>4 aulas</span><span>Serviços</span></div>

## Objetivos

- explicar compartilhamento SMB
- criar compartilhamento autenticado
- integrar permissões do sistema e do Samba
- testar a partir de cliente Linux ou Windows

## Duas camadas de autorização

O acesso a um compartilhamento Samba depende da configuração SMB e das permissões do sistema de arquivos. Liberar em uma camada não supera negação na outra.

## Instalação e validação

```bash
sudo apt install samba
sudo systemctl enable --now smbd
sudo testparm
```

## Usuário e diretório

```bash
sudo groupadd arquivos
sudo usermod -aG arquivos ana
sudo smbpasswd -a ana
sudo mkdir -p /srv/samba/equipe
sudo chown root:arquivos /srv/samba/equipe
sudo chmod 2770 /srv/samba/equipe
```

## Compartilhamento

Exemplo em `/etc/samba/smb.conf`:

```ini
[equipe]
    path = /srv/samba/equipe
    browseable = yes
    read only = no
    valid users = @arquivos
    force group = arquivos
    create mask = 0660
    directory mask = 2770
```

Valide e recarregue:

```bash
sudo testparm
sudo systemctl reload smbd
```

## Cliente

```bash
smbclient -L //IP_DO_SERVIDOR -U ana
smbclient //IP_DO_SERVIDOR/equipe -U ana
```

No Windows, use `\\IP_DO_SERVIDOR\equipe` ou o nome resolvido.

## Logs e portas

```bash
ss -lntup | grep -E ':(445|139)\b'
journalctl -u smbd --since today
```

!!! warning "Compartilhamento convidado"
    Acesso sem autenticação deve ser exceção explícita, limitado a dados públicos e redes controladas. Não o use para contornar erros de usuário ou permissão.

## Prática guiada

1. Crie grupo e dois usuários de teste.
2. prepare o diretório com setgid.
3. adicione os usuários ao banco Samba.
4. crie o compartilhamento autenticado.
5. valide com `testparm`.
6. teste listagem, criação, alteração e remoção.
7. teste com usuário fora do grupo.
8. acesse de um cliente de plataforma diferente, quando disponível.
9. reinicie e valide.

## Desafio

Crie uma subpasta de leitura para auditores usando permissões/ACL do sistema. Demonstre por que apenas `read only = no` no Samba não concede escrita quando o sistema de arquivos nega.

## Evidência de entrega

<div class="evidence-box">
Trecho do compartilhamento, saída de `testparm`, testes autorizados e negados, permissões do diretório e logs.
</div>

## Checklist

- [ ] o arquivo smb.conf é válido
- [ ] usuários Samba e sistema estão coerentes
- [ ] as permissões Unix foram verificadas
- [ ] o acesso não autorizado falhou
- [ ] o compartilhamento funciona no cliente
- [ ] o serviço persiste após reboot

## Links oficiais

- [Documentação do Samba](https://www.samba.org/samba/docs/)
- [SambaWiki](https://wiki.samba.org/)
