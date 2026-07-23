# 04. Windows Server e PowerShell

<div class="lesson-meta"><span>Aula 04</span><span>2 aulas</span><span>Comparação</span></div>

## Objetivos

- reconhecer papéis e ferramentas do Windows Server
- executar consultas administrativas em PowerShell
- comparar serviços, logs e pacotes entre plataformas

## Administração orientada a papéis

No Windows Server, funcionalidades são organizadas em **roles** e **features**. A administração pode ocorrer pelo Server Manager, Windows Admin Center e PowerShell. O raciocínio operacional permanece semelhante ao Linux: identificar componente, estado, configuração, dependências, logs e acesso.

## Consultas iniciais em PowerShell

```powershell
Get-ComputerInfo
Get-NetIPConfiguration
Get-Volume
Get-Service | Sort-Object Status, Name
Get-WinEvent -LogName System -MaxEvents 20
```

## Equivalências conceituais

| Objetivo | GNU/Linux | PowerShell/Windows |
|---|---|---|
| listar serviços | `systemctl --type=service` | `Get-Service` |
| eventos do sistema | `journalctl` | `Get-WinEvent` |
| configuração IP | `ip address` | `Get-NetIPConfiguration` |
| processos | `ps`, `top` | `Get-Process` |
| volumes | `lsblk`, `findmnt` | `Get-Volume`, `Get-Disk` |
| recurso opcional | pacote/serviço | role/feature |

## Pipeline do PowerShell

Diferentemente de pipelines textuais tradicionais, o PowerShell transmite objetos entre comandos. Isso permite filtrar por propriedades sem depender da posição visual das colunas.

```powershell
Get-Service |
  Where-Object Status -eq 'Running' |
  Select-Object Name, DisplayName
```

## Prática guiada

Em um Windows Server disponível no laboratório ou em uma demonstração do professor:

1. colete nome, versão, interfaces e volumes;
2. liste serviços iniciados e interrompidos;
3. localize os eventos mais recentes do log de Sistema;
4. exporte um inventário simples:

```powershell
Get-ComputerInfo | Out-File inventario-windows.txt
Get-NetIPConfiguration | Out-File inventario-windows.txt -Append
Get-Volume | Out-File inventario-windows.txt -Append
```

5. relacione três comandos PowerShell às tarefas equivalentes no Linux.

## Desafio

Escolha uma tarefa administrativa e mostre por que comparar apenas a aparência das ferramentas é insuficiente. Compare objeto, serviço, persistência e log.

## Evidência de entrega

<div class="evidence-box">
Tabela com ao menos seis equivalências Linux/Windows e uma captura ou trecho do inventário produzido.
</div>

## Checklist

- [ ] executei consultas sem alterar o servidor
- [ ] identifiquei roles/features e serviços
- [ ] distingui pipeline de objetos e pipeline textual
- [ ] documentei equivalências conceituais


