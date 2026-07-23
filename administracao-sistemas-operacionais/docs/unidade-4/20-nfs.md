# 20. Servidor de arquivos NFS

<div class="lesson-meta"><span>Aula 20</span><span>4 aulas</span><span>Serviços</span></div>

## Objetivos

- explicar exportação e montagem NFS
- configurar compartilhamento para cliente Linux
- aplicar opções e restrições de rede
- validar identidade e persistência

## Modelo NFS

NFS apresenta um diretório remoto como parte da árvore local do cliente. O controle depende da versão, opções de exportação, rede e mapeamento de identidades.

## Servidor

```bash
sudo apt install nfs-kernel-server
sudo mkdir -p /srv/nfs/equipe
```

Exemplo em `/etc/exports`:

```exports
/srv/nfs/equipe 192.168.56.0/24(rw,sync,no_subtree_check)
```

Aplicação e consulta:

```bash
sudo exportfs -ra
sudo exportfs -v
systemctl status nfs-server 2>/dev/null || systemctl status nfs-kernel-server
```

## Cliente

```bash
sudo apt install nfs-common
showmount -e IP_DO_SERVIDOR
sudo mkdir -p /mnt/equipe
sudo mount -t nfs IP_DO_SERVIDOR:/srv/nfs/equipe /mnt/equipe
findmnt /mnt/equipe
```

## Identidades

NFS tradicional considera UID/GID. Nomes iguais com IDs diferentes podem causar proprietários inesperados. Em laboratório, verifique `id` no cliente e no servidor.

## Opções de segurança

- restrinja rede/host;
- use `ro` quando escrita não for necessária;
- evite `no_root_squash` sem justificativa excepcional;
- limite firewall às redes clientes;
- avalie NFSv4 e autenticação forte em ambientes reais.

!!! warning "Rede confiável não significa acesso irrestrito"
    Restrição por sub-rede é apenas uma camada. Dados sensíveis requerem autenticação, criptografia e controles compatíveis com o ambiente.

## Prática guiada

1. Crie grupo `equipe` com GID idêntico no servidor e cliente.
2. Prepare `/srv/nfs/equipe` com setgid.
3. Exporte apenas para a rede interna.
4. recarregue exportações.
5. monte no cliente.
6. crie arquivo no cliente e valide proprietário no servidor.
7. configure montagem persistente no cliente usando `_netdev`.
8. reinicie cliente e servidor e teste.

## Desafio

Crie uma segunda exportação somente leitura. Demonstre leitura permitida e escrita negada, tanto pela montagem quanto pelas opções do servidor.

## Evidência de entrega

<div class="evidence-box">
Linha de exportação, saída de `exportfs -v`, montagem do cliente, teste de identidade e persistência.
</div>

## Checklist

- [ ] a exportação está restrita à rede
- [ ] UID/GID foram conferidos
- [ ] o cliente montou o recurso
- [ ] a permissão foi testada
- [ ] a montagem persiste após reboot
- [ ] o firewall foi considerado


