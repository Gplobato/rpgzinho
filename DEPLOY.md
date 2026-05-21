# Deploy — GitHub + celular

## 1. Subir no GitHub

```bash
cd ~/Projects/aimmorpg-solo
git add .
git commit -m "Aether Quest: campanha jogável, loot, API Nano GPT, PWA mobile"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/aimmorpg-solo.git
git push -u origin main
```

Substitua `SEU_USUARIO` e o nome do repo se for diferente.

## 2. Ativar GitHub Pages

1. No GitHub: **Settings → Pages**
2. **Build and deployment** → Source: **GitHub Actions**
3. O workflow `.github/workflows/deploy-pages.yml` roda no push em `main`
4. URL final: `https://SEU_USUARIO.github.io/aimmorpg-solo/`

Se o nome do repositório não for `aimmorpg-solo`, edite `VITE_BASE_PATH` no workflow para `/<nome-do-repo>/`.

## 3. Jogar no celular

1. Abra a URL do Pages no Safari/Chrome
2. **Compartilhar → Adicionar à Tela de Início** (PWA)
3. Abra o ícone **Aether Quest** em tela cheia
4. **Config** → cole a API key Nano GPT → **Testar conexão**
5. Marque **Usar IA** para campanha narrada pela API

A API key fica só no `localStorage` do celular — não vai para o GitHub.

## 4. Campanha completa (offline)

Sem API, a campanha **A Queda do Rei de Aether** (3 atos) funciona:

| Ato | Zona | Boss |
|-----|------|------|
| 1 | Ruínas de Vael | Guardião das Ruínas |
| 2 | Floresta Umbral | Matriarca das Sombras |
| 3 | Cripta dos Reis | Rei de Aether Corrompido |

Fluxo: **Explorar** → achar fragmento → **Enfrentar boss** → **Viajar** para próxima zona.

## 5. Build local

```bash
npm install
npm run dev        # desenvolvimento
npm run build      # produção em dist/
```
