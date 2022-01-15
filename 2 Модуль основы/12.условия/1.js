const iHaveMoney = false

if (iHaveMoney) {
   console.log('ты богатовый')
} else {
   console.log('ты бедновый')
}

// 1 равноценно true
// 0 равноценно false
// строка всегда true, если пустая - false

iHaveMoney ? 'ты богатовый' : 'ты бедновый' //тернарный оператор

const myMoney = 100

switch (myMoney) {
   case 100:
      console.log('пиво')
      break;
   case 500:
      console.log('5 пива')
      break;
   case 99999:
      console.log('много пива')
      break;
   default:
      console.log('пососи')
      break;
      


}
 