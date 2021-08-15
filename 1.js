const canvas = document.getElementById("canvas");//Ссылка на элем canvas
const ctx = canvas.getContext("2d");//контекст рисования для отрисовки всех элем

const Array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

Array.sort(()=> Math.random() - 0.5)//Метод sort + стрелоч ф. возвращающая случайное число в диапазоне -0.5 до 0.5

const drawSqr = function (x, y, value){     //ф. отрисовки квадрата
  ctx.fillStyle = "black";      //Цвет
  ctx.fillRect(x, y, 100, 100);   //левій верхний + размер

  if(value === 0){ //Условие изменения цвета блочка
    ctx.fillStyle = "white";
  }else{
    ctx.fillStyle = "rgb(172, 183, 142)";
  }

  ctx.fillRect(x + 5, y + 5, 90, 90); // Для контура маленького блочка

  ctx.font = "60px Arial";  //Шрифт
  ctx.fillStyle = "white";  // цвета Шрифта
  if(value < 10){ //Условие разности отображения цифр
    ctx.fillText (value, x + 35, y + 70)  //Позиционируем что именно? и относительно чего
  }else{
    ctx.fillText (value, x + 15, y + 70)  
  }
  
}




const drawTag = function(pos, cord){  
//Отрисвока кфадрата в зависимости от позиции

  switch(pos){  //Оператор
    case 0:     //Если позиция 0
      drawSqr(0, 0, cord)
      break

    case 1:     //Если позиция 1
      drawSqr(100, 0, cord)
      break

    case 2:     //Если позиция 2
      drawSqr(200, 0, cord)
      break

    case 3:     //Если позиция 3
      drawSqr(300, 0, cord)
      break

    case 4:     //Если позиция 4
      drawSqr(0, 100, cord)
      break

    case 5:     //Если позиция 5
      drawSqr(100, 100, cord)
      break

    case 6:     //Если позиция 6
      drawSqr(200, 100, cord)
      break

    case 7:     //Если позиция 7
      drawSqr(300, 100, cord)
      break

    case 8:     //Если позиция 8
      drawSqr(0, 200, cord)
      break

    case 9:     //Если позиция 9
      drawSqr(100, 200, cord)
      break

    case 10:     //Если позиция 10
      drawSqr(200, 200, cord)
      break 

    case 11:     //Если позиция 11
      drawSqr(300, 200, cord)
      break

    case 12:     //Если позиция 12
      drawSqr(0, 300, cord)
      break

    case 13:     //Если позиция 13
      drawSqr(100, 300, cord)
      break

    case 14:     //Если позиция 14
      drawSqr(200, 300, cord)
      break

    case 15:     //Если позиция 15
      drawSqr(300, 300, cord) 
      break

  }
}

for (var i = 0; i <= 15; i++) {//цикл для отрисовки всех блочков 
  drawTag(i, Array[i]); // i индекс массива = позиции
}

const checkPlace = function(actionclientX){
  if (actionclientX < 110) {
    return 1
  }
  if (actionclientX < 210) {
    return 2
  }
  if (actionclientX < 310) {
    return 3
  }
  if (actionclientX < 410) {
    return 4
  }
}
//Если есть пустая при клике переносим 

canvas.addEventListener("click", function(action){//Обработчик событий (какое действие, какое действие будет совершено при клике)
  if(action.clientY < 110){//clientX(Y) отсчет от левого угла браузера 
    const place = checkPlace(action.clientX);// какое место в ряду было нажато

    switch(place){//В зависимости какое место вернулось мы будем присваивать позиции
      case 1:
      var clickPosition = 0//По сути наши индексы в массиве
      break // Обязательно? 

      case 2:
      var clickPosition = 1
      break

      case 3:
      var clickPosition = 2
      break

      case 4:
      var clickPosition = 3
      break
    }
  } 
  if(action.clientY > 110 && action.clientY < 210){
    const place = checkPlace(action.clientX);

    switch(place){//В зависимости какое место вернулось мы будем присваивать позиции
      case 1://У нас всего 4 позиции
      var clickPosition = 4//По сути наши индексы в кажном ряду
      break // Обязательно? 

      case 2:
      var clickPosition = 5
      break

      case 3:
      var clickPosition = 6
      break

      case 4:
      var clickPosition = 7
      break
    }
  } 
  if(action.clientY > 210 && action.clientY < 310){
    const place = checkPlace(action.clientX);

    switch(place){//В зависимости какое место вернулось мы будем присваивать позиции
      case 1:
      var clickPosition = 8//По сути наши индексы в кажном ряду
      break // Обязательно? 

      case 2:
      var clickPosition = 9
      break

      case 3:
      var clickPosition = 10
      break

      case 4:
      var clickPosition = 11
      break
    }
  } 
  if(action.clientY > 310 && action.clientY < 410){
    const place = checkPlace(action.clientX);

    switch(place){//В зависимости какое место вернулось мы будем присваивать позиции
      case 1:
      var clickPosition = 12//По сути наши индексы в кажном ряду
      break // Обязательно? 

      case 2:
      var clickPosition = 13
      break

      case 3:
      var clickPosition = 14
      break

      case 4:
       clickPosition = 15
      break
    }
  }
  console.log(clickPosition) 



  if(Array[clickPosition - 4] === 0 ){//Если в массиве индекс соответствует позиции блочка находится над у нее значение 0 надо поменять єти єлм пмассива друг с другом
    Array[clickPosition - 4] = Array[clickPosition]//Блочку с нулевым мы присвоили значение блочка снизу и наоборот
    Array[clickPosition] = 0

    for (var i = 0; i <= 15; i++) {//цикл для отрисовки всех блочков 
      drawTag(i, Array[i]); // i индекс массива = позиции
    }
  }// Проверка вверх

  if(Array[clickPosition + 4] === 0){
    Array[clickPosition + 4] = Array[clickPosition]
    Array[clickPosition] = 0 

    for (var i = 0; i <= 15; i++) {
      drawTag(i, Array[i]);
    }
  } // Проверка вниз

    if(Array[clickPosition + 1] === 0 && clickPosition !== 3 && clickPosition !== 7 && clickPosition !== 11){//Чтоб не было перескока через противоположный угол
    Array[clickPosition + 1] = Array[clickPosition]
    Array[clickPosition] = 0

    for (var i = 0; i <= 15; i++) {
      drawTag(i, Array[i]);
    }
  } // Проверка право

    if(Array[clickPosition - 1] === 0 && clickPosition !== 4 && clickPosition !== 8 && clickPosition !== 12){//Чтоб не было перескока через противоположный угол
    Array[clickPosition - 1] = Array[clickPosition]
    Array[clickPosition] = 0

    for (var i = 0; i <= 15; i++) {
      drawTag(i, Array[i]);
    }
  }// Проверка лево
}) 


const victory = function() {
        if (Array.toString() === '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0') {
            return true;
        } else {
            return false;
        }
    }


const newGame = function(){

  Array.sort(()=> Math.random() - 0.5)
  for (var i = 0; i <= 15; i++) {//цикл для отрисовки всех блочков 
  drawTag(i, Array[i]); // i индекс массива = позиции
  }
}


const previous = function(){
  if(Array[clickPosition - 4] === 0 ){
    Array[clickPosition + 4] = Array[clickPosition]
    Array[clickPosition] = 0 

    for (var i = 0; i <= 15; i++) {
      drawTag(i, Array[i]);
    }
  }



}

const reload = function(){
  if (location = location) {}
  console.log(Array)
}

//console.log(Array);

