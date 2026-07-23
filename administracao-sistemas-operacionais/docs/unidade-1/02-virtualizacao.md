# 02. Virtualização e laboratório

<div class="lesson-meta"><span>Aula 02</span><span>2 aulas</span><span>Laboratório</span></div>

## Objetivos

- explicar a função do hipervisor
- criar uma VM com recursos coerentes
- distinguir NAT, bridge e rede interna
- usar snapshots como ponto de recuperação

## Por que virtualizar

A virtualização permite isolar experimentos, repetir instalações e recuperar rapidamente um estado anterior. Ela não elimina os limites do hardware: as VMs disputam CPU, RAM, armazenamento e rede do hospedeiro.

## Componentes

- **hospedeiro:** equipamento físico;
- **hipervisor:** software que executa as VMs;
- **convidado:** sistema operacional instalado na VM;
- **disco virtual:** arquivo ou volume apresentado ao convidado como disco;
- **snapshot:** registro de um estado para retorno controlado.

## Modos de rede

| Modo | Acesso externo | Acesso da rede física à VM | Uso didático |
|---|---:|---:|---|
| NAT | sim | normalmente não | atualização de pacotes |
| bridge | sim | sim | servidor visível na rede real |
| host-only | não, por padrão | apenas hospedeiro | laboratório isolado |
| rede interna | não | apenas VMs da mesma rede | cliente-servidor isolado |

!!! warning "Bridge exige autorização"
    Uma VM em bridge passa a participar da rede física. Não ative serviços ou DHCP nessa modalidade sem autorização do responsável pela infraestrutura.

## Dimensionamento inicial

Para o laboratório, priorize estabilidade. Aloque recursos suficientes, mas deixe margem para o hospedeiro. Um segundo disco virtual será usado na aula de armazenamento.

## Exemplo de inventário da VM

Após criar a máquina virtual, registre seus parâmetros em um arquivo de texto versionável:

```text
nome: srv01
sistema: Ubuntu Server LTS
vCPU: 2
memoria: 2048 MiB
disco-sistema: 25 GiB
disco-dados: 10 GiB
rede-1: NAT
rede-2: host-only — 192.168.56.0/24
snapshot: antes-instalacao
```

Esse inventário permite reproduzir o laboratório e comparar alterações realizadas ao longo da disciplina.

## Prática guiada

1. Crie a VM `srv01` com duas interfaces: NAT e rede interna/host-only.
2. Adicione um disco do sistema e um segundo disco para dados.
3. Registre CPU, memória, controladora, discos e endereços MAC.
4. Crie o snapshot `antes-instalacao`.
5. Crie a VM `cli01` ou prepare um cliente no hospedeiro.
6. Faça um desenho da topologia com nomes e redes.

## Desafio

Explique por que um snapshot não substitui um backup. Considere perda do arquivo da VM, corrupção no hospedeiro e necessidade de retenção histórica.

## Evidência de entrega

<div class="evidence-box">
Captura da configuração da VM, diagrama da topologia e explicação curta sobre os dois modos de rede escolhidos.
</div>

## Checklist

- [ ] a VM possui recursos registrados
- [ ] há uma rede de acesso externo e outra de laboratório
- [ ] o segundo disco foi criado
- [ ] o snapshot inicial foi realizado
- [ ] a topologia está documentada


