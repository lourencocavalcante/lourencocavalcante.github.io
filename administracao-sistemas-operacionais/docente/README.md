# Guia do docente

Esta pasta não é publicada pelo MkDocs. Ela reúne orientações para condução das aulas e adaptação do percurso.

## Preparação antes do semestre

1. confirmar carga horária, calendário e critérios do PPC;
2. selecionar distribuição e versão adotada no laboratório;
3. preparar imagens ISO e verificar infraestrutura de virtualização;
4. definir rede isolada e faixa de endereços;
5. testar todas as práticas em uma VM limpa;
6. criar snapshots de referência por unidade;
7. ajustar comandos que variem entre distribuições;
8. definir formato das evidências e canal de entrega;
9. revisar links externos;
10. substituir `SEU-USUARIO` no `mkdocs.yml` e conferir a versão do Zensical antes da publicação.

## Estratégia de aula

- 15–25 min: problema, conceito e demonstração;
- 40–70 min: prática guiada;
- 20–40 min: desafio e diagnóstico;
- 10 min: evidência, fechamento e registro.

## Falhas controladas sugeridas

- serviço desabilitado ou parado;
- erro de sintaxe em arquivo de configuração;
- porta bloqueada pelo firewall;
- resolução de nome incorreta;
- diretório sem permissão de travessia;
- UID/GID divergentes no NFS;
- volume sem montagem persistente;
- disco de laboratório cheio;
- virtual host com nome incorreto;
- usuário Samba ausente do banco SMB.

## Segurança didática

Nunca inserir falhas em infraestrutura institucional de produção. Prepare VMs descartáveis, credenciais fictícias e uma forma de acesso por console. Práticas destrutivas devem usar apenas o segundo disco virtual e ser precedidas por snapshot.
