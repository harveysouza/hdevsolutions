# HDEV Solutions – Deploy e Checklist

Este projeto é um site profissional desenvolvido em React + Vite, com foco em performance, SEO avançado, integração com Google Tag Manager, formulário conectado ao Make (Integromat) e portfólio dinâmico.

---

## 🚀 Deploy Rápido

### 1. Build de Produção
```bash
npm install
npm run build
```

### 2. Teste Local do Build
```bash
npm run preview
```
Acesse o endereço exibido e teste todas as páginas e formulários.

---

## 🌐 Publicação em Plataformas

### **Vercel**
1. Crie uma conta em [vercel.com](https://vercel.com)
2. Conecte seu repositório (GitHub, GitLab, Bitbucket) ou faça upload manual
3. Vercel detecta Vite automaticamente
4. Build command: `npm run build`  
   Output directory: `dist`
5. Após o deploy, acesse a URL gerada

### **Netlify**
1. Crie uma conta em [netlify.com](https://netlify.com)
2. Faça upload da pasta `dist` ou conecte o repositório
3. Build command: `npm run build`  
   Publish directory: `dist`
4. Publique e acesse a URL

### **cPanel/FTP**
1. Faça o build: `npm run build`
2. Faça upload do conteúdo da pasta `dist` para a pasta `public_html` do seu domínio
3. Certifique-se de que o arquivo `index.html` está na raiz

---

## 🔒 Domínio e Configurações Finais
- Aponte seu domínio para a plataforma escolhida (DNS)
- Configure HTTPS (SSL) na plataforma
- Ajuste as URLs canônicas se necessário

---

## 📈 Google Search Console & Analytics
- Adicione seu domínio no [Google Search Console](https://search.google.com/search-console/about)
- Envie o sitemap: `/sitemap.xml`
- Verifique o arquivo `/robots.txt`
- O Google Tag Manager já está integrado (GTM-TCZP5SHX)
- Ative o Google Analytics pelo painel do GTM

---

## ✅ Checklist Pós-Deploy
- [ ] Todas as páginas carregam corretamente
- [ ] Formulário envia para o Make/Integromat
- [ ] SEO (título, descrição, canonical) está correto em cada página
- [ ] GTM está ativo (verifique no painel do Google Tag Manager)
- [ ] Imagens do portfólio aparecem normalmente
- [ ] Sitemap e robots.txt acessíveis
- [ ] Links e botões funcionam em mobile e desktop

---

## 🛠️ Dicas Extras
- Sempre que adicionar novas páginas, atualize o `sitemap.xml`
- Teste o formulário após deploy real
- Use o [Lighthouse](https://developers.google.com/web/tools/lighthouse) para checar performance e SEO
- Se usar domínio diferente, ajuste as URLs canônicas e do sitemap

---

**Dúvidas ou precisa de suporte?**
Entre em contato com a equipe HDEV Solutions! 