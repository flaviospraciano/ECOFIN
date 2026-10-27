/* ===== CONFIGURAÇÃO DO ECOFIN =====
   Sem preencher o Firebase, o app roda em MODO DEMONSTRAÇÃO (dados só neste aparelho).
   Para usar com a turma toda, siga o LEIA-ME.md e preencha os dados abaixo. */
window.ECOFIN_CONFIG = {
  firebase: {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  },
  // E-mails que são administradores (têm acesso total). Ex.: ["voce@ufc.br"]
  adminEmails: [],
  // Limita o cadastro a e-mails institucionais. Ex.: ["ufc.br"] (aceita @ufc.br e @alu.ufc.br). Vazio = qualquer e-mail.
  dominiosPermitidos: []
};
