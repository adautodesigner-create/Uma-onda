# Um Passo — versão 0.2

PWA estática, sem build e sem dependências. Recursos:
- Criar, editar, concluir e excluir tarefas.
- Organização simples e campos opcionais de horário/lembrete.
- Cronômetro de foco com pausa, retomada e reinício.
- Temas Natural, Lavanda, Oceano, Azul e âmbar, Alto contraste e Escuro.
- Ajuste de tamanho do texto, espaçamento, visual simplificado e redução de movimento.
- Persistência local no navegador.
- Manifest e Service Worker para instalação/cache offline.

## Testar no computador
Abra `index.html` diretamente para testar as funções básicas. Para instalar a PWA e testar o Service Worker, sirva por HTTPS ou localhost.

## Publicar no GitHub Pages
1. Extraia os arquivos do ZIP.
2. Crie um repositório no GitHub e envie `index.html`, `manifest.webmanifest`, `sw.js`, `README.md` e a pasta `icons`.
3. No repositório, abra Settings → Pages.
4. Em Build and deployment, selecione Deploy from a branch, escolha `main` e `/ (root)`, e salve.
5. Aguarde a publicação e abra o endereço Pages no celular. Use “Adicionar à tela inicial” ou “Instalar app”, conforme o navegador.

## Limitações conhecidas
- Alarmes em segundo plano ainda não estão implementados. Os campos de lembrete são preparatórios nesta versão.
- Notificações dependem de suporte e permissão do navegador. A PWA não garante execução em horário exato quando fechada.
- Dados são locais neste navegador; não há sincronização nem backup nesta etapa.
- Para atualizar uma instalação, pode ser necessário recarregar ou limpar o cache do navegador.


## Versão 0.3
- Cinco novos temas: Rosa, Solar, Menta, Grafite e Céu (11 temas no total).
- Alarmes com aviso visual, som, vibração quando suportada e notificação do navegador quando a permissão estiver concedida.
- Botão para testar o som do alarme.
- Lembretes exigem um horário informado.
- O alarme funciona enquanto o app está aberto e ativo. O navegador pode suspender a execução em segundo plano ou com o app fechado; não é um alarme de sistema garantido.

### Lembretes em segundo plano (v0.4)
A versão inclui uma checagem auxiliar em Web Worker e envia uma notificação do sistema quando o lembrete é detectado com a página em segundo plano (com permissão concedida). Isso pode melhorar o comportamento ao alternar de abas, mas não garante alarmes com o navegador encerrado, o celular em economia agressiva de bateria ou a página descartada pelo sistema. Para esse nível de confiabilidade, é necessário implementar Web Push com um servidor que faça o agendamento.
