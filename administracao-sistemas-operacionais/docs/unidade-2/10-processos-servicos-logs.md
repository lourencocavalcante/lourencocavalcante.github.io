# 10. Processos, serviços e logs

<div class="lesson-meta"><span>Aula 10</span><span>3 aulas</span><span>Intermediário</span></div>

## Objetivos

- inspecionar processos e recursos
- controlar serviços com systemd
- consultar logs por unidade, período e prioridade
- diagnosticar uma falha de inicialização

## Processos

```bash
ps aux
ps -eo pid,ppid,user,stat,%cpu,%mem,cmd --sort=-%cpu | head
top
pgrep -a ssh
```

Sinais solicitam ações ao processo:

```bash
kill -TERM PID
kill -KILL PID
```

Use `SIGTERM` primeiro; `SIGKILL` impede limpeza e deve ser último recurso.

## Serviços com systemd

```bash
systemctl status ssh
systemctl is-active ssh
systemctl is-enabled ssh
sudo systemctl restart ssh
sudo systemctl enable ssh
systemctl list-units --type=service --state=failed
```

- **active:** estado atual;
- **enabled:** configuração para iniciar no boot;
- um serviço pode estar ativo e não habilitado, ou habilitado e falhar ao iniciar.

## Logs

```bash
journalctl -b
journalctl -u ssh --since today
journalctl -p err..alert
journalctl -xeu ssh
```

## Método de diagnóstico

1. reproduzir o sintoma;
2. verificar estado e código de saída;
3. consultar logs próximos ao evento;
4. validar configuração;
5. alterar uma causa provável por vez;
6. reiniciar/recarregar;
7. testar e registrar.

!!! example "Validação de configuração"
    Muitos serviços oferecem teste de sintaxe. Use-o antes de reiniciar, por exemplo `sshd -t`, `apachectl configtest` ou `nginx -t`.

## Prática guiada

1. Escolha um serviço não crítico do laboratório.
2. Registre `status`, estado ativo e habilitação.
3. Consulte logs apenas da unidade.
4. Pare e inicie o serviço, observando PID e registros.
5. Com autorização do professor, introduza um erro simples em uma cópia de configuração ou serviço preparado.
6. Diagnostique sem apagar os logs.
7. Corrija e valide após reinicialização da VM.

## Desafio

Explique um caso em que `systemctl status` não basta. Mostre quais filtros de `journalctl` permitiram reduzir o volume de registros.

## Evidência de entrega

<div class="evidence-box">
Linha do tempo contendo sintoma, evidência, hipótese, teste, correção e validação final.
</div>

## Checklist

- [ ] diferencio processo e serviço
- [ ] verifiquei estado atual e persistência
- [ ] usei logs filtrados por unidade e período
- [ ] testei configuração antes de reiniciar
- [ ] validei após reboot


