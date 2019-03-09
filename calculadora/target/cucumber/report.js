$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Calc.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 2,
  "name": "Calc",
  "description": "Como usuario entrar com dois valores\nCom o objetivo de obter um resultado",
  "id": "calc",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "line": 6,
  "name": "Somar",
  "description": "",
  "id": "calc;somar",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 7,
  "name": "que eu escolha somar",
  "keyword": "Dado "
});
formatter.step({
  "line": 8,
  "name": "eu preencho o primeiro número com o valor \u00271\u0027",
  "keyword": "Quando "
});
formatter.step({
  "line": 9,
  "name": "eu preencho o segundo número com \u00271\u0027",
  "keyword": "E "
});
formatter.step({
  "line": 10,
  "name": "eu devo ver o resultado como \u00272\u0027",
  "keyword": "Então "
});
formatter.match({
  "location": "CalcSteps.que_eu_escolha_somar()"
});
formatter.result({
  "duration": 1052604934,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 43
    }
  ],
  "location": "CalcSteps.eu_preencho_o_primeiro_número_com_o_valor(int)"
});
formatter.result({
  "duration": 2946682,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 34
    }
  ],
  "location": "CalcSteps.eu_preencho_o_segundo_número_com(int)"
});
formatter.result({
  "duration": 226528,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 30
    }
  ],
  "location": "CalcSteps.eu_devo_ver_o_resultado_como(int)"
});
formatter.result({
  "duration": 2726286,
  "status": "passed"
});
});