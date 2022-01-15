// alert('hello');

// const result = confirm('хуй будешь?');
// console.log(result);

// const answer = prompt("сколько будешь?","10")
console.log(typeof(answer)) // любая информация от пользователя будет в виде строк, "+" преобразует строку в число (пытается) попытка преобразовать символы к числу образует NaN
console.log(1)

let answers = []//задаем переменной answers значение пустого массива
answers[0] = prompt("how old are you")//задаем три элемента массива с тремя разными значениями
answers[1] = prompt("where are you from")
answers[2] = prompt("what is your name") 
//answers - массив [] - обращение к массиву, цифры - индекс элементов массива
//answers[2] - обращение к элементу массива под индексом 2
document.write(answers)