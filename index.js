/*
Função que retorna sucesso e monta JSON com os dados.
Devido ao button do HTML gerar o submit, recarregando assim a página, os dados preenchidos serão mostrados em um alert.
*/
function resposta() {
  let checkedboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  let values = [];
  for (let i = 0; i < checkedboxes.length; i++) {
    values.push(checkedboxes[i].value);
  }
  result.innerHTML = '';
  result.setAttribute("style", "opacity: 100;");
  result.appendChild(document.createTextNode("Formulário enviado com sucesso!"));

  const observacoes = document.querySelector('#descricao').value;

  alert(JSON.stringify({ Stickers: values, Quantidade: counter.value, Observações: observacoes }));
  //console.log(JSON.stringify({ Stickers: values, Quantidade: counter.value, Observações: observacoes }));
}
//Valida os checkboxs
function validate() {
  let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked').length;
  if (checkboxes == 0) {
    document.querySelectorAll('input[type="checkbox"]').forEach((function (x) { x.setAttribute("required", ""); }));
  } else {
    document.querySelectorAll('input[type="checkbox"]').forEach((function (x) { x.removeAttribute("required", ""); }));
  }
  if (counter.value == 0) {
    counter.setAttribute("required", "");
  } else {
    counter.removeAttribute("required", "");
  }
  if ((counter.value != 0) && (checkboxes != 0)) {
    resposta();
  } else {
    result.innerHTML = '';
    result.setAttribute("style", "opacity: 100; color: red;");
    result.appendChild(document.createTextNode("Acho que você esqueceu algo."));
  }
}

//Desabilita o botão menos se o valor for 0.
function stickers() {
  if (counter.value == 0) {
    minus.setAttribute("class", "minus");
  } else {
    minus.removeAttribute("class");
  }
}

//Contador
function clicks(clicked) {
  if (clicked == "minus") {
    counter.value--;
  } else {
    counter.value++;
  }
}
//Variáveis do contador
const counter = document.querySelector('#stickers');
const minus = document.querySelector('#minus');
const plus = document.querySelector('#plus');


//Inicio Borda Focus Custom Checkbox
const react = document.querySelector('#react');
const reactInput = document.querySelector('#reactInput');
const vue = document.querySelector('#vue');
const vueInput = document.querySelector('#vueInput');
const angular = document.querySelector('#angular');
const angularInput = document.querySelector('#angularInput');

reactInput.addEventListener("focus", function () { react.setAttribute("style", "border: 1px solid #2f3676;"); });
reactInput.addEventListener("focusout", function () { react.removeAttribute("style", "border: 1px solid #2f3676;"); });
vueInput.addEventListener("focus", function () { vue.setAttribute("style", "border: 1px solid #2f3676;"); });
vueInput.addEventListener("focusout", function () { vue.removeAttribute("style", "border: 1px solid #2f3676;"); });
angularInput.addEventListener("focus", function () { angular.setAttribute("style", "border: 1px solid #2f3676;"); });
angularInput.addEventListener("focusout", function () { angular.removeAttribute("style", "border: 1px solid #2f3676;"); });
//Fim Borda Focus Custom Checkbox


//Desabilita o botão menos para o início do formulário/
stickers();

var result = document.querySelector('#result');
const button = document.querySelector('#submit');

minus.onclick = function () { clicks("minus"); stickers(); };
plus.onclick = function () { clicks("plus"); stickers(); };

button.onclick = validate;