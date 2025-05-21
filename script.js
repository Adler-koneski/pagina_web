<script>
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form-grid");

    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Impede o envio automático

      // Pega todos os campos de input do formulário
      const campos = form.querySelectorAll("input");
      let validado = true;

      campos.forEach((campo) => {
        if (campo.value.trim() === "") {
          validado = false;
        }
      });

      if (!validado) {
        alert("❌ Por favor, preencha todos os campos.");
        return;
      }

      // Se tudo estiver ok
      alert("✅ Cadastro realizado com sucesso!");

      // Limpa os campos
      form.reset();
    });
  });
</script>
