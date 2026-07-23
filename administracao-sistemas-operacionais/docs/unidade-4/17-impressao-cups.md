# 17. Servidor de impressão com CUPS

<div class="lesson-meta"><span>Aula 17</span><span>3 aulas</span><span>Serviços</span></div>

## Objetivos

- explicar fila, job, driver e protocolo de impressão
- instalar e controlar o CUPS
- criar ou inspecionar uma fila
- restringir administração e compartilhamento

## Arquitetura

O CUPS gerencia filas e trabalhos de impressão, normalmente por IPP. Mesmo sem impressora física, é possível estudar serviço, fila, logs e controle de acesso usando uma impressora virtual preparada no laboratório.

## Pacote e serviço

```bash
sudo apt install cups
sudo systemctl enable --now cups
systemctl status cups
ss -lntp | grep 631
```

Em outras distribuições, adapte o pacote e o gerenciador.

## Administração por comandos

```bash
lpstat -t
lpinfo -v
lpoptions -p NOME_DA_FILA -l
lp arquivo.txt
lpstat -o
cancel ID_DO_JOB
```

## Configuração e acesso

O arquivo principal costuma ser `/etc/cups/cupsd.conf`. Antes de expor a interface administrativa, defina redes permitidas, autenticação e firewall. Administração remota irrestrita não é aceitável.

```bash
sudo cupsctl
sudo journalctl -u cups --since today
```

## Testes

- o serviço inicia após boot;
- a porta está limitada à rede esperada;
- cliente local/remoto enxerga a fila;
- usuário autorizado envia job;
- usuário não autorizado é bloqueado;
- logs registram a operação.

## Prática guiada

1. Instale e inicie o CUPS.
2. Identifique porta e processos.
3. Consulte filas e dispositivos disponíveis.
4. Crie uma fila virtual conforme o roteiro do professor ou use uma impressora autorizada.
5. Envie um arquivo de texto.
6. acompanhe o job e consulte logs.
7. limite acesso à rede do laboratório.
8. reinicie e valide a fila.

## Desafio

Simule um job preso ou fila desabilitada. Diagnostique por estado, fila e logs; corrija sem reinstalar o serviço.

## Evidência de entrega

<div class="evidence-box">
Nome da fila, comandos de criação/consulta, job enviado, trecho de log e regra de acesso aplicada.
</div>

## Checklist

- [ ] o serviço está ativo e habilitado
- [ ] a fila foi identificada
- [ ] o job foi acompanhado
- [ ] o acesso está restrito
- [ ] consultei logs
- [ ] validei após reboot

## Links oficiais

- [Documentação do CUPS](https://www.cups.org/documentation.html)
- [Administração pela linha de comando](https://www.cups.org/doc/admin.html)
