# ECOFIN · Economia e Finanças

Aplicativo (PWA) para alunos de **Economia e Finanças** acompanharem os 8 semestres:
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

## 3. Ativar o modo oficial (Firebase, grátis)
Assim todos usam o mesmo banco: grade, materiais, ideias, pesquisa, calendário oficial.
1. Acesse <https://console.firebase.google.com> > **Adicionar projeto** (ex.: ecofin-ufc).
2. **Authentication** > Primeiros passos > **E-mail/senha** > Ativar.
3. **Firestore Database** > Criar banco de dados > modo de produção > região `southamerica-east1` (São Paulo).
4. **Configurações do projeto** (engrenagem) > Seus apps > ícone **</>** (Web) > registre o app e copie o objeto `firebaseConfig`.
5. Abra `config.js` e cole os valores em `firebase: { ... }`. Preencha também:
   - `adminEmails: ["seu-email@ufc.br"]` (administradores);
   - `dominiosPermitidos: ["ufc.br"]` para aceitar só e-mail institucional (aceita `@ufc.br` e `@alu.ufc.br`).
6. **Authentication > Settings > Domínios autorizados** > adicione `SEU-USUARIO.github.io`.
7. **Firestore > Regras**: cole o conteúdo de `firestore.rules`, trocando `SEU_EMAIL@ufc.br` pelo seu e-mail, e **Publicar**.
8. Envie o `config.js` atualizado ao GitHub, abra o app e crie sua conta com o e-mail de administrador.

> As regras de segurança do passo 7 são o que realmente protege os dados. Não pule esse passo.

## 4. Primeiros ajustes como administrador
- **Link do RU:** Início > "Cadastrar link" (ou Admin > Conteúdo > Links úteis). O endereço oficial de recarga não veio preenchido: cole o da UFC.
- **Grade curricular:** a grade que vem no app é um **MODELO** (nomes comuns do curso, não o PPC oficial). Em Admin > Conteúdo > Grade curricular, corrija disciplinas, créditos e pré-requisitos (ou use *Importar JSON*) e toque em **"Marcar esta grade como conferida"**. Enquanto não for conferida, o aluno vê um aviso amarelo.
- **Professores e e-mails:** Início > Professores > +, vinculando as disciplinas.
- **Calendário oficial:** Admin > Conteúdo > "Novo evento oficial" (semanas acadêmicas, prazos).
- **Trilha de primeiros passos:** Admin > Conteúdo > Trilha (edite textos e a ordem).

## 5. Níveis de acesso
| Nível | O que pode |
|---|---|
| **Aluno** | tudo do dia a dia; sugere materiais e questões (ficam em revisão), envia ideias e responde a pesquisa |
| **Monitor** | publica materiais/questões direto, aprova sugestões, edita calendário oficial, cadastra contatos |
| **Professor** | igual ao monitor + vê as ideias aprovadas sobre ele (vincule o nome em Admin > Usuários) |
| **Administrador** | tudo, inclusive usuários, grade, links, trilha, moderação das ideias e relatório de adoção |

Mude o nível em **Admin > Usuários** (vale na próxima abertura do app da pessoa).

## 6. O que o app faz
- **Início:** trilha de primeiros passos, link do RU, próximos compromissos, disciplinas do semestre, links úteis.
- **Calendário:** provas, trabalhos, listas e eventos; feriados (nacionais e do Ceará); eventos oficiais do curso; lembretes.
- **Disciplinas:** escolha Economia ou Finanças; árvore dos 8 semestres (esquerda para direita) com pré-requisitos; marque *cursando* e *concluída*; veja a grade do outro curso.
- **Disciplina:** professores com e-mail, provas antigas, listas, videoaulas, resumos, questões e "estilo de cobrança" (como cada professor costuma cobrar).
- **Estudo:** treino de questões, trilha de conhecimento por tema (indica o próximo passo), desempenho por disciplina.
- **Carreira:** caminhos bancário, acadêmico, contábil e de concursos; como se destacar; rede de contatos; currículo.
- **Voz do aluno:** ideias para professores (revisadas antes de chegar, com opção anônima) e pesquisa mensal de 5 perguntas.
- **Admin:** relatório de adoção, usuários, moderação e conteúdo.

## 7. Limites que você deve conhecer
- **Notificações** funcionam enquanto o app está aberto ou instalado e em uso. Aviso com o app totalmente fechado exige um servidor de push (Firebase Cloud Messaging), que não está incluído.
- **Questões geradas por IA** não estão incluídas. O fluxo atual é: alunos, monitores e professores cadastram; staff revisa e aprova.
- **Arquivos** (PDF de provas) entram como **link** (Drive, YouTube). O app não hospeda arquivos.
- **Provas antigas e direitos autorais:** peça autorização dos professores antes de publicar.
- **Anonimato:** ideia anônima não guarda o autor; por isso o aluno não vê o status dela depois de enviar.
- **Domínio de e-mail** é verificado na tela de cadastro; a proteção definitiva está nas regras do Firestore.
- **Aviso LGPD:** a política em `privacidade.html` é um modelo; peça validação da universidade.

## 8. Arquivos
`index.html` (o app) · `config.js` (suas configurações) · `sw.js` (funcionar offline) · `ecofin.webmanifest` e `ecofin-*.png` (ícones) ·
`firestore.rules` (segurança do banco) · `privacidade.html` · `.nojekyll`.
