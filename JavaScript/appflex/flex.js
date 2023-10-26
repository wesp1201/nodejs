/**
 * App Flex
 * @author Weslley Moreira
 */

function calcular(){
    let etanol = frmFlex.txtEtanol.value
    let gasolina = frmFlex.txtGasolina.value
    if(etanol < 0.7 * gasolina) {
        document.getElementById('status').src='icons/etanol.png'
    } else {
        document.getElementById('status').src='icons/gasolina.png'
    }
}

function limpar(){
    document.getElementById('status').src='icons/neutro.png'
}