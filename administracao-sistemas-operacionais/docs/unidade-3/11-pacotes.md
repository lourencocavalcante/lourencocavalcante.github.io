# 11. Gerência de pacotes de software

<div class="lesson-meta"><span>Aula 11</span><span>2 aulas</span><span>Administração</span></div>

## Objetivos

- explicar pacote, repositório e dependência
- pesquisar, instalar, atualizar e remover software
- identificar arquivos de um pacote
- avaliar impacto de atualizações

## Modelo de pacotes

Um gerenciador de pacotes mantém metadados, dependências, versões e arquivos instalados. O repositório é uma fonte configurada e assinada de pacotes.

### Sistemas baseados em Debian

```bash
apt search nginx
apt show nginx
sudo apt update
sudo apt install nginx
dpkg -L nginx
apt list --upgradable
sudo apt remove nginx
sudo apt purge nginx
sudo apt autoremove
```

### Sistemas da família Red Hat

```bash
dnf search nginx
dnf info nginx
sudo dnf install nginx
rpm -ql nginx
dnf check-update
sudo dnf remove nginx
```

## Antes de atualizar

- leia a lista de mudanças proposta;
- identifique serviços afetados;
- confirme espaço em disco;
- possua snapshot/backup conforme criticidade;
- defina janela e teste de retorno;
- verifique se reinicialização será necessária.

## Origem e integridade

Pacotes de origem desconhecida ampliam o risco. Em servidores, prefira repositórios oficiais e fontes institucionalmente aprovadas. Chaves e assinaturas validam a origem, mas não eliminam a necessidade de avaliar o software.

## Prática guiada

1. Pesquise dois servidores Web sem instalá-los.
2. Compare descrição, dependências, tamanho e arquivos previstos.
3. Instale uma ferramenta pequena aprovada pelo professor.
4. Descubra qual pacote fornece um executável:

```bash
command -v NOME
# Debian/Ubuntu, quando disponível:
dpkg -S /caminho/do/executavel
# Red Hat:
rpm -qf /caminho/do/executavel
```

5. Liste atualizações pendentes.
6. Registre o plano antes de aplicar qualquer atualização.

## Desafio

Identifique quais serviços seriam reiniciados ou afetados por uma atualização selecionada. Proponha testes antes e depois.

## Evidência de entrega

<div class="evidence-box">
Tabela com pacote, origem, versão, função, arquivos principais, serviço relacionado e plano de validação.
</div>

## Checklist

- [ ] sei pesquisar antes de instalar
- [ ] identifiquei origem e versão
- [ ] diferencio remover e purgar
- [ ] avaliei dependências e serviços afetados
- [ ] documentei testes de atualização


