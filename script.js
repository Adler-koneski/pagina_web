document.getElementById("formCadastro").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("mensagem").textContent = "Cadastro enviado com sucesso!";
  this.reset();
});
