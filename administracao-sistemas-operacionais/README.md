# Administração de Sistemas Operacionais

Site didático sequencial da disciplina **Administração de Sistemas Operacionais**, organizado para publicação no GitHub Pages com Zensical, sucessor oficial do Material for MkDocs.

## Recursos

- página inicial com apresentação do professor e da disciplina;
- 22 aulas organizadas em quatro unidades;
- navegação anterior/próxima, menu lateral e busca;
- exemplos de comandos com botão de cópia;
- práticas guiadas, desafios e evidências de entrega;
- acompanhamento local de progresso no navegador;
- tema claro/escuro e layout responsivo;
- publicação automática pelo GitHub Actions.

O arquivo `mkdocs.yml` é mantido porque o Zensical oferece compatibilidade direta com essa configuração.

## Executar localmente

### Com Python

```bash
python -m venv .venv
```

Linux/macOS:

```bash
source .venv/bin/activate
pip install -r requirements.txt
zensical serve
```

Windows PowerShell:

```powershell
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
zensical serve
```

Acesse `http://127.0.0.1:8000`.

### Com Docker

```bash
docker compose up
```

## Publicar no GitHub Pages

1. Crie um repositório no GitHub.
2. Substitua `SEU-USUARIO` em `mkdocs.yml`.
3. Envie os arquivos para a branch `main`.
4. Em **Settings → Pages**, selecione **GitHub Actions** como fonte.
5. O workflow `.github/workflows/pages.yml` fará a publicação.

## Personalização inicial

Edite principalmente:

- `docs/index.md`: apresentação do professor e da disciplina;
- `docs/organizacao/plano-de-ensino.md`: calendário, carga horária e regras da turma;
- `mkdocs.yml`: URL e nome do repositório;
- `docs/assets/stylesheets/extra.css`: identidade visual.

## Estrutura

```text
.
├── docs/
│   ├── index.md
│   ├── organizacao/
│   ├── unidade-1/
│   ├── unidade-2/
│   ├── unidade-3/
│   ├── unidade-4/
│   ├── referencias/
│   └── assets/
├── docente/
├── mkdocs.yml
├── requirements.txt
└── .github/workflows/pages.yml
```
