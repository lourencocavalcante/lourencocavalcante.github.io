# 22. Integração, hardening e operação

<div class="lesson-meta"><span>Aula 22</span><span>4 aulas</span><span>Síntese</span></div>

## Objetivos

- integrar serviços sem perder rastreabilidade
- produzir baseline operacional
- realizar hardening baseado em risco
- executar teste de aceitação e recuperação

## Do serviço isolado ao servidor operável

Um ambiente integrado precisa evitar conflitos de porta, identidade, armazenamento, firewall e dependência. A documentação deve permitir que outra pessoa entenda o estado esperado e investigue desvios.

## Baseline

Registre ao menos:

```bash
hostnamectl
ip -brief address
ip route
ss -lntup
systemctl --failed
systemctl --type=service --state=running
findmnt
df -hT
sudo ufw status verbose 2>/dev/null || true
```

## Checklist de hardening

- software atualizado e origem conhecida;
- serviços desnecessários removidos/desabilitados;
- contas sem uso bloqueadas;
- acesso administrativo individualizado;
- SSH por chave e root remoto bloqueado;
- firewall com política restritiva;
- compartilhamentos limitados a grupos/redes;
- permissões revisadas;
- logs consultáveis e horário correto;
- backup e restauração testados;
- mudanças documentadas.

## Teste de aceitação

Para cada serviço, descreva:

| Campo | Exemplo |
|---|---|
| requisito | usuário do grupo acessa compartilhamento |
| pré-condição | cliente na rede interna |
| ação | criar arquivo de teste |
| esperado | criação permitida e grupo herdado |
| evidência | comando, saída e log |
| reversão | remover arquivo/retornar configuração |

## Incidente simulado

O professor pode inserir uma falha: DNS incorreto, disco cheio, permissão alterada, serviço parado, firewall bloqueando ou sintaxe inválida. O estudante deve evitar “corrigir tudo” e seguir evidências.

## Prática guiada

1. Escolha três serviços implantados.
2. produza baseline do servidor.
3. revise usuários, portas, regras e volumes.
4. escreva dois testes positivos e um negativo por serviço.
5. execute os testes após reinicialização.
6. restaure um arquivo de configuração ou dado a partir do backup.
7. simule uma falha preparada e documente o diagnóstico.

## Desafio

Entregue o servidor a outra dupla apenas com a documentação. A dupla deve executar os testes e registrar pontos ambíguos. Revise o documento a partir desse retorno.

## Evidência de entrega

<div class="evidence-box">
Baseline, matriz de serviços, testes de aceitação, restauração comprovada e relato do incidente simulado.
</div>

## Checklist

- [ ] o baseline representa o estado esperado
- [ ] não há serviços sem finalidade conhecida
- [ ] cada serviço possui teste positivo e negativo
- [ ] o backup foi restaurado
- [ ] a documentação foi validada por terceiros
- [ ] o sistema retornou após reboot


