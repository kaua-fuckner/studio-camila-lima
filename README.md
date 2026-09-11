# Studio Camila Lima — Site institucional

Site estático (HTML5 + CSS3 + JavaScript puro, sem frameworks) para o Studio Camila Lima, especialista em alongamento em fibra de vidro em Pinhais - PR.

## Estrutura de arquivos

```
/
├── index.html
├── style.css
├── script.js
├── images/
│   ├── hero/hero.jpg
│   ├── studio/studio.jpg
│   ├── servicos/especialidade-fibra.jpg
│   ├── galeria/
│   │   ├── fibra-01.jpg, fibra-02.jpg, fibra-03.jpg
│   │   ├── unhas-01.jpg, unhas-02.jpg, unhas-03.jpg
│   │   ├── cilios-01.jpg, cilios-02.jpg
│   │   └── lash-01.jpg, lash-02.jpg
│   └── instagram/
│       └── insta-01.jpg até insta-06.jpg
└── README.md
```

## Imagens — o que precisa ser substituído

Todas as imagens do site são **placeholders gerados automaticamente**, com o nome do arquivo escrito na própria imagem para facilitar a identificação. Nenhuma foto real ou de terceiros foi utilizada.

Para trocar uma imagem, basta substituir o arquivo mantendo **o mesmo nome e a mesma pasta** (ou, se usar outro nome, atualizar o `src` correspondente no `index.html`). Recomendações de tamanho mínimo:

| Imagem | Tamanho sugerido | Onde aparece |
|---|---|---|
| `images/hero/hero.jpg` | 1400×1750px (retrato) | Seção principal (topo do site) |
| `images/studio/studio.jpg` | 1200×1500px | Seção "Sobre" |
| `images/servicos/especialidade-fibra.jpg` | 1200×1500px | Seção "Especialista em Fibra de Vidro" |
| `images/galeria/*.jpg` | mínimo 1000px no lado maior | Galeria de trabalhos |
| `images/instagram/insta-0X.jpg` | 800×800px (quadradas) | Seção Instagram |

Dica: exporte as fotos em `.jpg` com qualidade 80-85% para manter o site rápido.

## Textos e informações

Todo o conteúdo (textos, depoimentos, endereço, serviços) usa **apenas as informações fornecidas** pelo cliente. Não foram criados preços, horários, promoções ou histórico da empresa — quando essas informações estiverem disponíveis, basta editar o texto correspondente diretamente no `index.html`.

## Mapa (Google Maps)

O mapa embutido na seção "Estamos em Pinhais" usa uma busca genérica pelo endereço. Para um resultado mais preciso:

1. Acesse [Google Maps](https://maps.google.com) e localize o endereço exato (Rua Gana, 39, Pinhais - PR).
2. Clique em **Compartilhar → Incorporar um mapa** e copie o código `<iframe>`.
3. Substitua o `<iframe>` dentro da seção `.localizacao__mapa` no `index.html`.

## WhatsApp

O número usado em todos os botões é `(41) 99973-1037`, no formato internacional `5541999731037`. Caso o número mude, basta buscar e substituir `5541999731037` em todo o `index.html`.

## Como testar localmente

Basta abrir o `index.html` em qualquer navegador — não é necessário instalar nada. Para uma experiência mais próxima da produção (URLs relativas, cache, etc.), você pode usar um servidor simples:

```bash
# Python
python3 -m http.server 8000

# ou com o VS Code, use a extensão "Live Server"
```

## Publicando na Netlify

1. Crie uma conta gratuita em [netlify.com](https://netlify.com).
2. Arraste a pasta do projeto (com `index.html` na raiz) para a área de deploy manual (**Sites → Add new site → Deploy manually**).
3. Pronto — a Netlify gera uma URL pública automaticamente. É possível configurar um domínio próprio depois em **Domain settings**.

## Observações técnicas

- Fontes: **Playfair Display** (títulos) e **Montserrat** (textos), via Google Fonts.
- Dados estruturados Schema.org (`BeautySalon`) incluídos no `<head>` para SEO local — atualize o campo `image` quando as fotos reais forem adicionadas.
- Todas as imagens usam `loading="lazy"` (exceto a foto principal do topo) para melhorar a performance.
- O botão flutuante de WhatsApp já abre com uma mensagem automática de agendamento.
- O menu mobile, os filtros da galeria e o lightbox de imagens funcionam com JavaScript puro (`script.js`), sem bibliotecas externas.
