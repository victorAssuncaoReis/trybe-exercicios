function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  // Escreva seu código abaixo.
  let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  // Crie um calendário dinamicamente.
// O array decemberDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. 
//Sua função deve criar dinamicamente cada dia do calendário e os adicionar dentro da tag <ul>.
  function diasDoMes () {
    const days = document.querySelector('#days');
    for (index = 0; index < decemberDaysList.length; index += 1) {
      let diaDoCalendario = decemberDaysList[index];
      let listaDia = document.createElement('li');
      listaDia.innerHTML = diaDoCalendario;
      if (diaDoCalendario === 24 || diaDoCalendario === 31) {
        listaDia.className = 'day holiday';
        days.appendChild(listaDia);
      } else if (diaDoCalendario === 4 || diaDoCalendario === 11 || diaDoCalendario === 18) {
        listaDia.className = 'day friday';
        days.appendChild(listaDia);
      } else if (diaDoCalendario === 25) {
        listaDia.className = 'day friday holiday';
        days.appendChild(listaDia);
      } else {
        listaDia.className = 'day';
        days.appendChild(listaDia);
      }
    }
  }
  diasDoMes();

  //Implemente uma função que crie dinamicamente um botão com o nome "Feriados".
//Sua função deve receber um parâmetro com a string 'Feriados'
// Adicione a este botão a ID "btn-holiday"
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container"
function feriadosButton(nomeBotao) {
  const buttonsContainer = document.querySelector('.buttons-container');
  let botao = document.createElement('button');
  let botaoId = 'btn-holiday';

  botao.id = botaoId;
  botao.innerHTML = nomeBotao;
  buttonsContainer.appendChild(botao);
}
feriadosButton('Feriados');

// Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday".
// Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem a classe "holiday"
function displayHolidays() {
  let getHolidayButton = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.holiday')
  let backgroundColor = 'rgb(238,238,238)';
  let setNewColor = 'white';

  getHolidayButton.addEventListener('click', function() {
    for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.backgroundColor === setNewColor) {
        getHolidays[index].style.backgroundColor = backgroundColor;
      } else {
        getHolidays[index].style.backgroundColor = setNewColor;
      }
    }
  });
}

displayHolidays();

// Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira". Sua função deve receber como parâmetro a string "Sexta-feira".
// Adicione a esse botão o ID "btn-friday";
// Adicione esse botão como filho/filha da tag <div> com classe "buttons-container".
function fridaysButton(botaoSexta) {
  let buttonContainer = document.querySelector('.buttons-container');
  let buttonFriday = document.createElement('button');
  let fridayId = 'btn-friday';

  buttonFriday.innerHTML = botaoSexta;
  buttonFriday.id = fridayId;
  buttonContainer.appendChild(buttonFriday);
}
fridaysButton('Sexta-feira');

