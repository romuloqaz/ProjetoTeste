package com.tdd.calculadora;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;

import static junit.framework.TestCase.assertEquals;

public class CalcSteps {

    Calc calculadora;
    int num1;
    int num2;

    @Dado("^que eu escolha somar$")
    public void que_eu_escolha_somar()  {

        calculadora = new Calc();

    }

    @Quando("^eu preencho o primeiro número com o valor '(\\d+)'$")
    public void eu_preencho_o_primeiro_número_com_o_valor(int arg1) {
        num1 = arg1;
    }

    @Quando("^eu preencho o segundo número com '(\\d+)'$")
    public void eu_preencho_o_segundo_número_com(int arg1) throws Throwable{
    num2 = arg1;
    }

    @Então("^eu devo ver o resultado como '(\\d+)'$")
    public void eu_devo_ver_o_resultado_como(int arg1) throws Throwable{
        assertEquals(num1 + num2,calculadora.somar(num1,num2));
    }
}
