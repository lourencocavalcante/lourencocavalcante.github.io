# Organização da disciplina

A aprendizagem está estruturada como uma trilha acumulativa. Cada unidade depende das competências praticadas anteriormente, mas as páginas também podem ser usadas como referência durante os laboratórios.

## Percurso recomendado

| Etapa | Foco | Produto esperado |
|---|---|---|
| Unidade I | preparação do ambiente e instalação | servidor virtual instalado e documentado |
| Unidade II | operação pela linha de comando | tarefas repetíveis e primeiro script administrativo |
| Unidade III | administração e proteção | servidor multiusuário monitorado e com backup |
| Unidade IV | serviços de rede | serviços acessíveis, testados e endurecidos |
| Projeto final | integração | servidor funcional, seguro e documentado |

## Convenções usadas

=== "Comando comum"

    ```bash
    ip address show
    ```

=== "Comando administrativo"

    ```bash
    sudo systemctl status ssh
    ```

=== "Valor que deve ser adaptado"

    ```bash
    ssh usuario@IP_DO_SERVIDOR
    ```

!!! tip "Registre antes de alterar"
    Em administração de sistemas, o estado anterior é parte da solução. Antes de editar um arquivo, salve uma cópia, anote o objetivo da mudança e defina como reverter.

## Documentação mínima de laboratório

Para cada prática, registre:

1. identificação da máquina virtual;
2. objetivo da intervenção;
3. comandos executados;
4. trechos relevantes da saída;
5. teste de validação;
6. dificuldade encontrada e solução aplicada.
