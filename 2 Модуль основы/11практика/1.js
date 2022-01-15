const numberOfFilms = +prompt("сколько фильмов вы уже посмотрели?");

if(!numberOfFilms){alert('ты нахера буквы насрал?')}
   //1 пункт
const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genries: [],
   privat: false
};
   // 2 пункт
  const question = prompt('Один и последних просмотренных фильмов?')
  const question2 = prompt('Один и последних просмотренных фильмов?')
  const question3 = prompt('На сколько оцените его')
  const question4 = prompt('На сколько оцените его')

  personalMovieDB.movies[question] = question3
  personalMovieDB.movies[question2] = question4
  

  
  console.log(personalMovieDB)