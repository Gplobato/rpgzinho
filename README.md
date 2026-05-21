# Aether Quest

MMORPG narrativo **single-player**, mobile-first, com campanha completa em 3 atos, loot estilo Diablo e integração **Nano GPT** (modelo + provider configuráveis).

![portrait](public/favicon.svg)

## Jogar no celular (recomendado)

1. Faça deploy no **GitHub Pages** — passo a passo em [DEPLOY.md](DEPLOY.md)
2. Abra `https://SEU_USUARIO.github.io/aimmorpg-solo/` no celular
3. **Adicionar à Tela de Início** para instalar como app (PWA)
4. Em **Config**, cole sua chave [Nano GPT](https://nano-gpt.com) e toque **Testar conexão**

## Campanha: *A Queda do Rei de Aether*

- **Ato 1** — Ruínas de Vael: fragmento da coroa, Guardião  
- **Ato 2** — Floresta Umbral: Wispmother, Matriarca  
- **Ato 3** — Cripta dos Reis: relíquias, Rei Corrompido  

Aba **Missões** mostra objetivos. Loot: common → set, affixes, equipar no inventário.

## Modos

| Modo | Quando |
|------|--------|
| **Offline** | Sem API key — engine local, campanha inteira |
| **IA** | API key + “Usar IA” — narrativa Nano GPT, JSON estruturado |

## Prompts

Editáveis na aba **Prompts**: Core, Campanha, Narrador, Loot, Combate, Mapas, NPCs. Export JSON incluído.

## Desenvolvimento local

```bash
cd ~/Projects/aimmorpg-solo
npm install
npm run dev
```

Acesse `http://localhost:5173` (ou IP da máquina no celular na mesma rede).

## Stack

React 19 · TypeScript · Vite · Zustand · Zod · PWA

## Segurança

Nunca commite `.env` com API key. A chave fica apenas no navegador do jogador.

## Licença

Uso pessoal do autor do repositório.
