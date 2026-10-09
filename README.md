# Rachô

Aplicativo de caronas entre estudantes universitários.
Projeto da disciplina **Desenvolvimento de Software para Web 2** — DC/UFSCar, 2026.2

> *Vai pra lá? Rachô.*

## Sobre

O Rachô conecta estudantes que vão de carro para uma cidade ou para o campus
com estudantes que precisam de carona, dividindo o custo do trajeto.
O acesso é feito com e-mail institucional, o que garante que todos na
plataforma são estudantes.

## Fase 1 (AA1) — HTML + CSS

Esta entrega cobre os requisitos R1, R2 e R3.

| Requisito | Como foi atendido |
|---|---|
| **R1** — identidade visual e layout | Marca própria (logo, nome, slogan), paleta definida em variáveis CSS, tipografia Poppins + Inter e ícones Material Symbols |
| **R2** — mais de uma tela | 7 telas desenhadas |
| **R3** — layout responsivo | Mobile-first, com 3 breakpoints (640px, 1024px, 1280px) |

### Telas

| Arquivo | Tela |
|---|---|
| `login.html` | Entrar com e-mail institucional (cadastro previsto para a AA2) |
| `index.html` | Busca e feed de caronas |
| `carona.html` | Detalhe da carona e pedido de vaga |
| `oferecer.html` | Formulário para publicar uma carona |
| `minhas.html` | Minhas viagens, pedidos recebidos e histórico |
| `perfil.html` | Meu perfil: avaliações, veículo e preferências |
| `perfil-publico.html` | Perfil de outro estudante (motorista), visto a partir de uma carona |

### Identidade visual

| Cor | Hex | Uso |
|---|---|---|
| Laranja | `#FF6B35` | Ações principais, destaques |
| Azul-petróleo | `#1B4965` | Marca, títulos, elementos de confiança |
| Fundo | `#F7F7F7` | Fundo das telas |
| Texto | `#1E1E1E` | Texto principal |
| Sucesso | `#2E9E6A` | Confirmações |

O logo é uma gota de combustível dividida ao meio (a "rachada") com uma seta
de estrada no centro — a ideia de dividir o custo e seguir junto.

### Responsividade

- **Celular (até 639px):** uma coluna, navegação fixa na base, botão flutuante para oferecer carona.
- **Tablet (640px+):** feed em 2 colunas, formulários em 2 colunas.
- **Desktop (1024px+):** menu lateral substitui a navegação inferior, feed em 3 colunas.
- **Telas largas (1280px+):** detalhe da carona e perfis em duas colunas.

## Estrutura

```
racho/
├── index.html            feed de caronas
├── carona.html           detalhe
├── oferecer.html         publicar carona
├── minhas.html           minhas caronas
├── perfil.html           meu perfil
├── perfil-publico.html   perfil de outro estudante
├── login.html            entrar
├── css/
│   ├── base.css          variáveis, reset, tipografia, utilitários
│   ├── components.css    estrutura do app e componentes
│   └── pages.css         estilos específicos de cada tela
└── img/
    ├── logo.svg          logo colorido
    └── logo-mono.svg     logo monocromático (fundos coloridos)
```

## Como abrir

Basta abrir `index.html` no navegador. Não há build nem dependências:
apenas fontes e ícones carregados do Google Fonts.

## Fase 2 (AA2) — planejado

- **R4** — telas funcionais: busca com filtros e publicação de carona, em React.
- **R5** — acesso à rede: back-end simulado com `json-server` (ou MockAPI) para caronas, usuários e pedidos de vaga.
- **R6** — API adicional: Geolocation API para "caronas perto de mim" e mapa da rota; `localStorage` para filtros e caronas salvas.
