# ECOFIN · Economia e Finanças

Aplicativo feito por **Flávio S. Praciano** · feito para quem estuda Economia e Finanças (UFC, Campus de Sobral).

Aplicativo (PWA) para alunos de **Economia e Finanças** acompanharem o curso do primeiro semestre à formatura:
trilha de primeiros passos, calendário, árvore de disciplinas, estudo com questões, carreira e "Voz do aluno".
Cores: azul e verde. Funciona no celular e no computador, instala na tela inicial e abre sem internet.

---

## 1. Ver funcionando agora (modo demonstração)
Sem configurar nada, o app já roda: os dados ficam **só no aparelho** e a primeira conta criada vira administrador.
Serve para testar e apresentar. Para usar com a turma toda, faça o passo 3.

## 2. Publicar no GitHub Pages
1. Crie um repositório no GitHub (ex.: `ecofin`).
2. Envie **todos os arquivos desta pasta** para a raiz do repositório (incluindo `.nojekyll`).
3. Em **Settings > Pages**: Source = *Deploy from a branch*, Branch = `main`, pasta `/ (root)`. Salve.
4. Em ~1 minuto o app abre em `https://SEU-USUARIO.github.io/ecofin/`.

## 3. Modo oficial (Firebase) — já configurado
O `config.js` já tem o projeto `ecofin-9f54e` e o administrador `flaviosantosp12@gmail.com`. Falta só fazer no console do Firebase:
1. **Authentication** > Método de login > **E-mail/senha** > Ativar.
2. **Authentication** > Configurações > **Domínios autorizados** > adicionar `flaviospraciano.github.io`.
3. **Firestore Database** > Criar banco de dados > modo de produção > região `southamerica-east1` (São Paulo).
4. **Firestore > Regras**: cole o conteúdo de `firestore.rules`, troque `CODIGO_ADMIN` pelo código secreto de administrador e clique em **Publicar**.
   **Não salve o código verdadeiro no `firestore.rules` do GitHub**: o repositório é público. O código só deve existir dentro do console do Firebase.
5. Crie sua conta no app com `flaviosantosp12@gmail.com` **antes de divulgar o link**.

> As regras de segurança do passo 4 são o que realmente protege os dados. Não pule esse passo.

## 4. Primeiros ajustes como administrador
- **Links:** RU, Minha Biblioteca, grupo geral, CAES, CAFINS e ônibus já vêm preenchidos (Admin > Conteúdo > Links úteis para mudar).
- **Grade curricular:** já vem a grade **oficial do SIGAA** (emitida em 27/10/2026) das quatro matrizes: Economia 2025.1 e 2006.2, Finanças 2025.1 e 2010.1, com códigos, carga horária, créditos, pré-requisitos e optativas. Quando o pré-requisito oficial tem "OU", a árvore liga o caminho da própria grade e mostra a regra oficial ao tocar na disciplina.
- **Professores e e-mails:** a lista do DAECOF já vem no app. Vincule as disciplinas de cada professor em Início > Professores (lápis).
- **Frases do Início:** Admin > Conteúdo > Frases do Início, para acrescentar outras (uma por linha: `frase — autor`).
- **Calendário oficial:** Admin > Conteúdo > "Novo evento oficial" (semanas acadêmicas, prazos).
- **Calendário Universitário UFC 2026:** já vem no app (só o que vale para Economia e Finanças em Sobral), conferido com o site da UFC em 27/10/2026. Fica em `CAL_UFC_TXT` no `index.html`; novas datas entram sempre no **fim** da lista (não reordene nem apague linhas, porque os alunos guardam o id de cada data ao adicioná-la ao próprio calendário). Recessos e dias sem aula ficam em `SEM_AULA_2026`.
- **Trilha de primeiros passos:** Admin > Conteúdo > Trilha (edite textos e a ordem).

## 5. Níveis de acesso
| Nível | O que pode |
|---|---|
| **Aluno** | tudo do dia a dia; sugere materiais e questões (ficam em revisão), envia ideias, avalia empresas e indica serviços |
| **Professor** | publica materiais/questões direto, aprova sugestões, edita calendário oficial e vê as ideias aprovadas sobre ele |
| **Administrador** | tudo, inclusive ver todas as contas, grade, links, trilha, frases, moderação e relatório de adoção |

- Na tela de entrada a pessoa escolhe **Aluno, Professor ou Administrador**.
- **Professor:** a conta nasce como aluno com um pedido; um administrador aprova em **Admin > Usuários** (os pedidos aparecem no topo).
- **Administrador:** exige o código secreto (conferido pelas regras do Firestore, nunca pelo código do app). Também dá para informar o código depois, em Meu perfil.
- Alunos não veem as contas de outros alunos e professores não veem as de outros professores. Só administradores veem todas.

## 6. O que o app faz
- **Início:** saudação conforme o turno, frase do dia (Housel, Buffett, Kahneman, Eker e outros, sem repetir até passar por todas), trilha, RU, próximos compromissos, datas oficiais, comunidade e links.
- **Calendário:** provas, trabalhos, listas e eventos; feriados (nacionais, do Ceará e de Sobral); recessos e datas do Calendário Universitário UFC 2026; lembretes 2 dias, 1 dia e 2 horas antes.
- **Campus e serviços:** grupo geral, CAES e CAFINS; ônibus intracampus com a próxima saída; Biblioteca BCSO; RU; e-mails úteis do DAECOF.
- **Indicações:** veteranos avaliam até 5 empresas de Sobral e região (nota e comentário de até 500 caracteres, sem nome); serviços úteis (gráficas, fotografia, academia e outros).
- **Disciplinas:** escolha Economia ou Finanças; árvore dos 8 semestres (esquerda para direita) com pré-requisitos; marque *cursando* e *concluída*; veja a grade do outro curso.
- **Disciplina:** professores com e-mail, provas antigas, listas, videoaulas, resumos, questões e "estilo de cobrança" (como cada professor costuma cobrar).
- **Estudo:** treino de questões, trilha de conhecimento por tema (indica o próximo passo), desempenho por disciplina.
- **Carreira:** caminhos bancário, acadêmico, contábil e de concursos; como se destacar; rede de contatos; currículo.
- **Voz do aluno:** ideias para professores (revisadas antes de chegar, com opção anônima) e pesquisa mensal de 5 perguntas.
- **Admin:** relatório de adoção, usuários, moderação e conteúdo.

## 7. Limites que você deve conhecer
- **Notificações** (2 dias, 1 dia e 2 horas antes) aparecem enquanto o app está aberto ou rodando em segundo plano no celular. Aviso com o app totalmente fechado exige um servidor de push (Firebase Cloud Messaging com Cloud Functions, plano pago Blaze), que não está incluído. Se o app ficar fechado, o aviso aparece na próxima abertura.
- **Questões geradas por IA** não estão incluídas. O fluxo atual é: alunos, monitores e professores cadastram; staff revisa e aprova.
- **Arquivos** (PDF de provas) entram como **link** (Drive, YouTube). O app não hospeda arquivos.
- **Provas antigas e direitos autorais:** peça autorização dos professores antes de publicar.
- **Anonimato:** ideia anônima não guarda o autor; por isso o aluno não vê o status dela depois de enviar.
- **Domínio de e-mail** é verificado na tela de cadastro; a proteção definitiva está nas regras do Firestore.
- **Aviso LGPD:** a política em `privacidade.html` é um modelo; peça validação da universidade.

## 8. Arquivos
`index.html` (o app) · `config.js` (suas configurações) · `sw.js` (funcionar offline) · `ecofin.webmanifest` e `ecofin-*.png` (ícones) ·
`firestore.rules` (segurança do banco) · `privacidade.html` · `.nojekyll`.
