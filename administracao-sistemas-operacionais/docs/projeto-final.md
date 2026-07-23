# Projeto final — Servidor para uma organização

## Situação-problema

Uma organização precisa centralizar serviços internos em um servidor administrado pela equipe. Cada grupo deverá planejar, implantar, proteger, testar e documentar uma solução coerente com um cenário aprovado pelo professor.

## Cenários possíveis

- laboratório escolar com arquivos por equipe, impressão e página interna;
- pequena empresa com site interno, transferência segura e backup;
- setor administrativo com compartilhamento multiplataforma e controle de acesso;
- ambiente de desenvolvimento com Web, usuários restritos e monitoramento;
- cenário equivalente proposto pelo grupo e validado pelo professor.

## Requisitos mínimos

1. sistema operacional instalado e atualizado;
2. rede documentada e acesso administrativo seguro;
3. ao menos três serviços, incluindo um servidor de arquivos;
4. usuários, grupos e permissões baseados em papéis;
5. firewall e redução de serviços desnecessários;
6. monitoramento mínimo de capacidade e falhas;
7. rotina de backup com restauração comprovada;
8. persistência após reinicialização;
9. testes positivos e negativos;
10. documentação reproduzível.

## Entregáveis

### 1. Documento técnico

- contexto e requisitos;
- arquitetura e topologia;
- inventário do servidor;
- decisões e justificativas;
- procedimentos de instalação/configuração;
- controles de segurança;
- plano de backup e recuperação;
- matriz de testes;
- limitações e melhorias futuras.

### 2. Repositório

```text
projeto-final/
├── README.md
├── docs/
├── scripts/
├── configuracoes-modelo/
└── evidencias/
```

Não publique senhas, chaves privadas ou dados reais. Use modelos como `servico.conf.example`.

### 3. Demonstração

A demonstração deve partir do servidor reiniciado e incluir:

- consulta ao baseline;
- acesso autorizado;
- tentativa não autorizada;
- teste funcional dos serviços;
- consulta a logs;
- execução de backup ou monitoramento;
- restauração de um item;
- resposta a uma falha sorteada pelo professor.

## Rubrica

| Critério | Peso sugerido |
|---|---:|
| arquitetura e coerência técnica | 20% |
| funcionamento dos serviços | 20% |
| segurança e menor privilégio | 20% |
| testes, diagnóstico e recuperação | 20% |
| documentação e apresentação | 20% |

## Marcos

- [ ] cenário e requisitos aprovados;
- [ ] topologia e plano de endereçamento;
- [ ] instalação-base e acesso seguro;
- [ ] serviços implantados individualmente;
- [ ] integração e hardening;
- [ ] backup/restauração;
- [ ] ensaio da demonstração;
- [ ] entrega final.

!!! success "Critério central"
    O projeto não termina quando “abre no navegador” ou “aparece na rede”. Ele termina quando o grupo consegue explicar, testar, proteger, recuperar e entregar a operação para outra pessoa.
