# 03. Instalação Linux Server

<div class="lesson-meta"><span>Aula 03</span><span>3 aulas</span><span>Laboratório</span></div>

## Objetivos

- planejar particionamento e identidade do servidor
- instalar um sistema Linux Server
- aplicar atualização inicial
- coletar inventário e validar reinicialização

## Decisões antes da instalação

Uma instalação reproduzível começa antes do primeiro clique. Defina:

- nome do host;
- usuário administrativo não privilegiado;
- fuso horário e idioma;
- interfaces de rede;
- esquema de armazenamento;
- serviços mínimos;
- fonte e política de atualização.

## Particionamento

Em laboratório, um esquema simples é suficiente. Em servidores reais, separar áreas como `/var`, `/home` ou dados da aplicação pode limitar o impacto de crescimento inesperado. A decisão deve considerar carga de trabalho, monitoramento e recuperação.

## Pós-instalação

```bash
hostnamectl
cat /etc/os-release
uname -r
ip address show
ip route
lsblk -f
findmnt
```

Em sistemas baseados em Debian/Ubuntu:

```bash
sudo apt update
sudo apt upgrade
```

!!! note "Reinicialização"
    Atualizações de kernel e componentes centrais podem exigir reinicialização. A validação só termina depois que o sistema retorna e os serviços necessários são verificados.

## Inventário inicial

```bash
lscpu
free -h
lsblk
ip -brief address
systemctl --failed
```

## Prática guiada

1. Instale o servidor com o nome `srv01` e o usuário `adminlab`.
2. Não habilite ambiente gráfico.
3. Instale o serviço SSH apenas se isso fizer parte da imagem/roteiro autorizado.
4. Atualize a lista de pacotes e o sistema.
5. Reinicie a VM.
6. Execute o inventário inicial e salve a saída em `inventario-inicial.txt`:

```bash
{
  date
  hostnamectl
  cat /etc/os-release
  uname -a
  lscpu
  free -h
  lsblk -f
  ip -brief address
  ip route
  systemctl --failed
} | tee inventario-inicial.txt
```

7. Crie o snapshot `linux-instalado-atualizado`.

## Desafio

Compare a saída antes e depois da reinicialização. Identifique kernel em uso, tempo desde o boot e serviços em falha. Explique qualquer divergência.

## Evidência de entrega

<div class="evidence-box">
Arquivo `inventario-inicial.txt`, identificação do snapshot e conclusão informando se a instalação permaneceu funcional após reiniciar.
</div>

## Checklist

- [ ] o hostname está correto
- [ ] o usuário administrativo usa sudo
- [ ] o sistema foi atualizado
- [ ] a rede funciona
- [ ] não há falhas sem explicação em systemctl --failed
- [ ] o snapshot pós-instalação existe


