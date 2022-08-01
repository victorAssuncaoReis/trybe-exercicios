window.onload = function() {
    let select = document.getElementById('backgroundColor');
    select.addEventListener('change', function() {
        let selected = select.selectedOptions[0];
        document.body.style.backgroundColor = selected.value;
        localStorage.setItem('backgroundColor', selected.value);
    })
    let selectFonte = document.getElementById('fontColor');
    selectFonte.addEventListener('change', function() {
        let selectedFonte = selectFonte.selectedOptions[0];
        document.body.style.color = selectedFonte.value;
        localStorage.setItem('fontColor', selectedFonte.value);
    })
    let tamanhoFonte = document.getElementById('tamanhoFonte');
    tamanhoFonte.addEventListener('change', function() {
    let paragrafo = document.querySelector('p');
    paragrafo.style.fontSize = `${tamanhoFonte.value}px`;
    localStorage.setItem('fontSize', `${tamanhoFonte.value}px`);
    })
    let espacamentoFonte = document.getElementById('espacamentoFonte');
    espacamentoFonte.addEventListener('change', function() {
    let paragrafo = document.querySelector('p');
    paragrafo.style.lineHeight = `${espacamentoFonte.value}px`;
    localStorage.setItem('espacamentoFonte', `${espacamentoFonte.value}px`);
    })
    let selectFontFamily = document.getElementById('fontFamily');
    selectFontFamily.addEventListener('change', function() {
        let paragrafo = document.querySelector('p');
        let selectedFamily = selectFontFamily.selectedOptions[0];
        paragrafo.style.fontFamily = selectedFamily.value;
        localStorage.setItem('fontFamily', selectedFamily.value);
    })

    let storageBackground = localStorage.getItem('backgroundColor');
    let storageFontColor = localStorage.getItem('fontColor');
    let storageFontSize = localStorage.getItem('fontSize');
    let storageLineHeight = localStorage.getItem('espacamentoFonte');
    let storageFontFamily = localStorage.getItem('fontFamily');
    let paragrafo = document.querySelector('p');
    document.body.style.backgroundColor = storageBackground;
    document.body.style.color = storageFontColor;
    paragrafo.style.fontSize = storageFontSize;
    paragrafo.style.lineHeight = storageLineHeight;
    paragrafo.style.fontFamily = storageFontFamily;
}

