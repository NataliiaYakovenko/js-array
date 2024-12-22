//1. Об’явити масив з довільними елементами.
//За допомогою циклу вивести всі елементи масиву послідовно в консоль
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numbersArray.length; i++) {
  console.log(numbersArray[i]);
}
//-------------------------------------------------------------------------
//2. Дан масив з цілими числами.
//За допомогою циклу вивести елементи масива, які є парними числами
const numbersArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numbersArray1.length; i++) {
  if (numbersArray1[i] % 2 === 0) {
    console.log(numbersArray1[i]);
  }
}
//-------------------------------------------------------------------------
//(завдання на методи масивів):
//3.  Дано два масива: [1, 2, 3] і [4, 5, 6]. Об'єднати їх разом
const arrays1 = [1, 2, 3];
const arrays2 = arrays1.concat(4, 5, 6);
console.log(arrays2);
//-------------------------------------------------------------------------
//4. Даний масив [6, 5, 4]. Зробити з нього масив [4, 5,6]
const arrays3 = [6, 5, 4];
arrays3.reverse(4, 5, 6);
console.log(arrays3);
//--------------------------------------------------------------------------
//5. Даний масив [1, 2, 3]. Додати йому в кінець елементи 4, 5, 6
const arrays4 = [1, 2, 3];
arrays4.push(4, 5, 6);
console.log(arrays4);
//--------------------------------------------------------------------------
//6. Даний масив [7, 8, 9]. Додати йому на початок 1, 2, 3
const arrays5 = [7, 8, 9];
arrays5.unshift(1, 2, 3);
console.log(arrays5);
//--------------------------------------------------------------------------
//7. Даний масив ['aaa', 'bbb', 'ccc'].
//Виведіть в консоль перший елемент та видаліть його.
const arrays6 = ["aaa", "bbb", "ccc"];
console.log(arrays6[0]);
arrays6.shift();
console.log(arrays6);
//--------------------------------------------------------------------------
//8. Даний масив ['aaa', 'bbb', 'ccc'].
//Виведіть в консоль та видаліть останній елемент
const arrays7 = ["aaa", "bbb", "ccc"];
console.log(arrays7[arrays7.length - 1]);
arrays7.pop();
console.log(arrays7);
//--------------------------------------------------------------------------
//9. Даний масив [9, 10, 11, 12, 13].
//Скопіювати в новий масив елементи з другого по п'ятий
const arrays8 = [9, 10, 11, 12, 13];
const newArrays8 = arrays8.slice(1);
console.log(newArrays8);
//---------------------------------------------------------------------------
//10. З масиву [1, 2, 3, 4, 5] зробити масив [1, 4, 5]
//(оригінальний має змінитись)
const arrays9 = [1, 2, 3, 4, 5];
arrays9.splice(1, 2);
console.log(arrays9);
//---------------------------------------------------------------------------
//11. З масиву [1, 2, 3, 4, 5] скопіювати в новий масив [3, 4, 5]
const arrays10 = [1, 2, 3, 4, 5];
const newArrays10 = arrays10.slice(2);
console.log(newArrays10);
//---------------------------------------------------------------------------
//12. З масиву  [1, 2, 3, 4, 5] (не однією командою)
//зробити масив [1, 'w', 'trtr', 2, 3, 4, 'vvv', 'a', 'hello']
//варіант1
const arrays11 = [1, 2, 3, 4, 5];
arrays11.splice(1, 0, "w", "trtr");
arrays11.pop();
arrays11.push("vvv", "a", "hello");
console.log(arrays11);

//варіант2
const arrays12 = [1, 2, 3, 4, 5];
arrays12.splice(1, 0, "w", "trtr");
arrays12.splice(6, 1, "vvv", "a", "hello");
console.log(arrays12);
//---------------------------------------------------------------------------
/*Таска з *:
Написати функцію, яка приймає рядок і масив голосних літер, 
повертає кількість включень голосних у заданому рядку
function countVovels(str, vovelsArray)
vovelsArray = [a, e, i, o, u, y]
'hello to you' //6
'lorem ipsum dolor sit amet' // 9
*/
function countVovels(str, vovelsArray) {
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    for (let g = 0; g < vovelsArray.length; g++) {
      if (str[i] === vovelsArray[g]) {
        result += 1;
      };
    };
  };
  return result;
}
vovelsArray = ["a", "e", "i", "o", "u", "y"];
const vovelsCount = countVovels("hello to you", vovelsArray);
const vovelsCount1 = countVovels("lorem ipsum dolor sit amet", vovelsArray);
console.log(vovelsCount);
console.log(vovelsCount1);
