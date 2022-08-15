const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};
const turno = (lesson2, turno, noite) => {
  lesson2[turno] = noite;
}
turno(lesson2, 'turno', 'noite');
console.log(lesson2);

const keys = (objeto) => {
  return console.log(Object.keys(objeto));
}
keys(lesson1);

const tamanho = (objeto) => {
  return console.log(Object.keys(objeto).length);
}
tamanho(lesson3);

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

const getStudentNumber = (obj) => {
  const aula1 = parseInt(obj.lesson1.numeroEstudantes);
  const aula2 = parseInt(obj.lesson2.numeroEstudantes);
  const aula3 = parseInt(obj.lesson3.numeroEstudantes);
  const total = aula1 + aula2 + aula3;
  return console.log(`O número total de estudantes é ${total}.`)
}
getStudentNumber(allLessons);