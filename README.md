# Blog do Pedro Mendes

Blog pessoal estático, feito em HTML/CSS/JS puro, hospedado gratuitamente
no GitHub Pages.

## Estrutura

```
blog_pedro/
├── index.html          # Página inicial, lista de posts
├── about.html          # Página "Sobre mim"
├── css/style.css        # Estilo (com suporte a tema claro/escuro)
├── js/theme.js           # Alternância de tema claro/escuro
├── posts/
│   └── primeiro-post.html   # Exemplo de post
└── images/               # Fotos, imagens dos posts, etc.
```

## Como publicar no GitHub Pages

1. **Crie um repositório no GitHub.**
   - Pode se chamar `blog`, `blog_pedro`, o que preferir — a não ser que
     você queira usar o endereço `usuario.github.io` como domínio raiz,
     caso em que o repositório **precisa** se chamar exatamente
     `SEU-USUARIO.github.io`.

2. **Suba este projeto para o repositório.**

   ```bash
   cd blog_pedro
   git init
   git add .
   git commit -m "Primeiro commit do blog"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/NOME-DO-REPO.git
   git push -u origin main
   ```

3. **Ative o GitHub Pages.**
   - No GitHub, vá em **Settings → Pages** do repositório.
   - Em "Build and deployment", escolha **Source: Deploy from a branch**.
   - Escolha a branch `main` e a pasta `/ (root)`.
   - Clique em **Save**.
   - Em alguns minutos o site estará no ar em:
     - `https://SEU-USUARIO.github.io/NOME-DO-REPO/` (repositório normal), ou
     - `https://SEU-USUARIO.github.io/` (se o repositório se chamar `SEU-USUARIO.github.io`)

4. **(Opcional) Domínio próprio.**
   - Se você tiver um domínio (ex: `pedromendes.com`), crie um arquivo
     `CNAME` na raiz do projeto com o domínio dentro, e configure o DNS
     do domínio apontando para o GitHub Pages. O GitHub tem um guia
     oficial para isso em Settings → Pages → Custom domain.

## Como adicionar um novo post

1. Copie `posts/primeiro-post.html` para `posts/nome-do-novo-post.html`.
2. Edite o `<title>`, a data e o conteúdo dentro de `<article class="post">`.
3. Abra `index.html` e adicione um novo `<li class="post-item">` no topo
   da lista `<ul class="post-list">`, apontando para o novo arquivo.
4. Comite e dê push — o GitHub Pages atualiza o site automaticamente em
   1-2 minutos.

## Como editar a página "Sobre"

Edite diretamente `about.html`. Há um comentário mostrando onde colocar
uma foto sua (coloque o arquivo em `images/avatar.jpg`, por exemplo).

## Testando localmente antes de publicar

Não precisa de nenhuma ferramenta especial — é só HTML estático. Dá para
abrir `index.html` direto no navegador, ou, melhor, rodar um servidor
local simples:

```bash
cd blog_pedro
python3 -m http.server 8000
```

E acessar `http://localhost:8000` no navegador.
