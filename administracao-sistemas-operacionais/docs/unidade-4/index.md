# Unidade IV — Serviços de servidor

Nesta unidade, o sistema operacional passa a oferecer serviços para clientes da rede. Cada implantação deverá considerar função, porta, processo, arquivo de configuração, logs, autenticação, firewall e teste remoto.

## Modelo de análise

```mermaid
graph TD
  P[Pacote] --> S[Serviço]
  S --> C[Configuração]
  C --> O[Porta/socket]
  O --> T[Teste do cliente]
  S --> L[Logs]
  C --> F[Firewall e controle de acesso]
```

[Iniciar pela Aula 17](17-impressao-cups.md){ .md-button .md-button--primary }
