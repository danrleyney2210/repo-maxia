(function(){
    'use strict'
    
    window.addEventListener("load", function(){
        
        let $txt_area = document.getElementById("texto_redacao")
        let $cont_letras = document.getElementById("num_letras")
        let $cont_paragrafos = document.getElementById("num_paragrafos")
        let $cont_linhas = document.getElementById("num_linhas")
        
        monitoraTxtArea($txt_area)
        $txt_area.addEventListener("keyup", monitoraTxtArea.bind(this, $txt_area))
        
        function monitoraTxtArea(txtDigitado) {
            $cont_letras.textContent = contadorDeLetras(txtDigitado.value)
            $cont_linhas.textContent = contadorDeLinhas(txtDigitado.value)
            $cont_paragrafos.textContent = contadorDeParagrafo(txtDigitado.value)
        }
        
        function contadorDeLetras(txtDigitado){
            return txtDigitado.length
        }
        
        
        function contadorDeParagrafo(txtDigitado){
            let rgx = txtDigitado.match(/[.][\n\r]/g)
            return rgx ? rgx.length : 0
        }
        
        
        function contadorDeLinhas(txtDigitado){
            let rgx = txtDigitado.match(/[\n\r]/g)
            let num_linhas = Math.trunc(txtDigitado.length / 20)
            return rgx ? (parseInt(rgx.length) + parseInt(num_linhas)) : num_linhas
        }
    })
    
})()