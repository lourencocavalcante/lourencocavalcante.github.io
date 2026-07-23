# 12. Usuários, grupos e permissões

<div class="lesson-meta"><span>Aula 12</span><span>4 aulas</span><span>Administração</span></div>

## Objetivos

- administrar contas e grupos
- interpretar UID, GID e permissões
- usar sudo e menor privilégio
- aplicar ACL quando permissões tradicionais forem insuficientes

## Identidades

```bash
id
getent passwd adminlab
getent group sudo
```

Arquivos como `/etc/passwd`, `/etc/group` e `/etc/shadow` participam da gestão local. Prefira comandos administrativos a editar esses arquivos manualmente.

```bash
sudo useradd -m -s /bin/bash operador
sudo passwd operador
sudo groupadd suporte
sudo usermod -aG suporte operador
sudo userdel -r operador
```

## Permissões tradicionais

```bash
ls -l arquivo
chmod u=rw,g=r,o= arquivo
chmod 640 arquivo
chown usuario:grupo arquivo
```

| Valor | Permissão |
|---:|---|
| 4 | leitura |
| 2 | escrita |
| 1 | execução |

Em diretórios, execução significa atravessar/acessar entradas; leitura permite listar nomes; escrita permite criar/remover entradas conforme outras regras.

## Bits especiais

- **setgid em diretório:** novos arquivos herdam o grupo;
- **sticky bit:** restringe remoção em diretório compartilhado;
- **setuid:** executável assume identidade do proprietário; exige atenção elevada.

```bash
sudo chmod 2770 /srv/equipe
```

## ACL

```bash
getfacl /srv/equipe
sudo setfacl -m u:auditor:rx /srv/equipe
```

## Sudo

Edite regras com `visudo` e conceda somente comandos necessários. Não transforme todos os usuários em administradores para resolver um problema de permissão.

## Prática guiada

Crie o cenário:

- grupos `desenvolvimento` e `auditoria`;
- usuários `ana`, `bruno` e `carla`;
- `/srv/projeto` gravável pelo grupo desenvolvimento;
- novos arquivos devem herdar esse grupo;
- `carla`, da auditoria, deve ler sem alterar;
- outros usuários não devem acessar.

Valide como cada usuário:

```bash
sudo -u ana touch /srv/projeto/ana.txt
sudo -u carla cat /srv/projeto/ana.txt
sudo -u carla touch /srv/projeto/falha.txt
```

## Desafio

Crie uma regra de sudo para permitir que um operador consulte e reinicie apenas um serviço preparado pelo professor, sem shell administrativo geral. Teste comando permitido e proibido.

## Evidência de entrega

<div class="evidence-box">
Saída de `id`, `ls -ld`, `getfacl`, testes positivos e negativos, e justificativa do menor privilégio.
</div>

## Checklist

- [ ] contas e grupos foram criados por comandos adequados
- [ ] o diretório herda o grupo
- [ ] a ACL atende à exceção de leitura
- [ ] testei acessos permitidos e negados
- [ ] a regra sudo é restrita


