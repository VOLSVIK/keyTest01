        /* этот код помечает картинки, для удобства разработки */
    //     let hhh = document.querySelector('div')
        let ddd = new Date()
        console.log(ddd)

let nambeKey = [103, 104, 106]
// document.onkeypress = function (params) {
//   nambeKey.push(params.charCode )
//   console.log(nambeKey)
// }

function start() {
  let keyNode = ''
  for (let i = 0; i < nambeKey.length; i++) {
    keyNode += '<div class="knop" data="' + nambeKey[i] + '">' + String.fromCharCode(nambeKey[i]) + '</div>';
  }
  document.querySelector('.displ').innerHTML = keyNode;
}
start()
// получить координаты вставки
let arrobj =  {
  'start': 0,
  'end': 0
};
var getText = document.getElementById("story");

function getCaretPosition(ctrl) {
  arrobj.start = ctrl.selectionStart
  arrobj.end = ctrl.selectionEnd
  console.log(arrobj)
  console.log(getText.value)
  console.log(getText.value.length)
    return arrobj
}

// ввод с эрана
document.addEventListener("keypress", function (params) {
  console.log(arrobj)
  console.log(params.key)
  document.querySelectorAll('.displ .knop').forEach(n => {
    n.classList.remove('activ')
  });
  document.querySelector('.displ .knop[data="' + params.keyCode + '"]').classList.add('activ')
         if (!(document.activeElement === getText )) {
          let sub1 = getText.value.substr(0, arrobj.start);
          let sub2 = getText.value.substr(arrobj.start);
  document.querySelector('.display').value = sub1 + params.key + sub2
            // document.querySelector('.display').value += params.key
            // getCaretPosition(getText)
         } else {
          console.log(777777)
          getCaretPosition(getText)
         }
})

// ввод с клавиатуры
document.querySelectorAll('.displ .knop').forEach(n => {
//   let focused = (document.activeElement === getText )
// console.log(focused)
  n.onclick = function (params) {
    console.log(arrobj)

    document.querySelectorAll('.displ .knop').forEach(n => {
      n.classList.remove('activ')
    });
    let clik = this.getAttribute('data')
    let clikLit = this.textContent
    this.classList.add('activ')
    let sub1 = getText.value.substr(0, arrobj.start);
    let sub2 = getText.value.substr(arrobj.start);
document.querySelector('.display').value = sub1 + clikLit + sub2
          // document.querySelector('.display').value += clikLit
          // getCaretPosition(getText)
  }

});


let focused = (document.activeElement === getText );
console.log(focused)

document.querySelector('.display').onclick = function() {
  let focused = (document.activeElement === getText );
console.log(focused)
console.log(arrobj)
getCaretPosition(getText)
}

//function getCaretPosition(ctrl) {
  // // IE < 9 Support 
  // if (document.selection) {
  //     ctrl.focus();
  //     var range = document.selection.createRange();
  //     var rangelen = range.text.length;
  //     range.moveStart('character', -ctrl.value.length);
  //     var start = range.text.length - rangelen;
  //     arrobj.start = start
  //     arrobj.end = start + rangelen
  //     console.log(arrobj)
  //     console.log(111111)
  //     return arrobj
  // } // IE >=9 and other browsers
  // else if (ctrl.selectionStart || ctrl.selectionStart == '0') {
  //   arrobj.start = ctrl.selectionStart
  //   arrobj.end = ctrl.selectionEnd
  //   console.log(arrobj)
  //   console.log(222222)
  //     return arrobj
  // } else {
  //   arrobj.start = 0
  //   arrobj.end = 0
  //   console.log(arrobj)
  //   console.log(3333333)
  //     return arrobj
  // }
//}


// document.querySelector('.display').oninput = function (even) {
  // even.date = 'b'
// document.querySelector('.display').onkeypress = function (even) {
  // document.querySelector('.display').value += even.key
  // console.log(even)
  // return false
// }

// let key = document.querySelectorAll('.knop');
// let displayGet = document.getElementById('story');
// let display = document.querySelector('.display');
// // display.innerText = 'display';
// for(let k of key){
// k.onclick = function(){

//   // console.log(k.textContent.trim())
//     // display.value += k.textContent;
//     mm = key[0].parentNode.previousElementSibling
//     x = mm.value
//         console.log(mm)
//         mm.innerText = x + k.textContent.trim();
//         // console.log(key[0].parentNode.previousElementSibling)
//     // displayGet = document.getElementById('story');
//     // displayGet.innerHTML += k.textContent;
//     x = displayGet.value
//     console.log(x)
//   }
// }  

// // обработчик ввода символа
// function onkeypress(e){
//   // получаем элемент printBlock
//   var printBlock = document.getElementById("printBlock");
//   // получаем введенный символ
//   var val = String.fromCharCode(e.keyCode);
//   // добавление символа
//   printBlock.textContent += val;
// }
// clear.onclick = function(evt){
//   evt.preventDefault();
//   display.textContent = '';
// }
    //     console.log(Object.prototype.toString.call(ddd))
    //     console.log(Date.prototype.getFullYear.call(new Date(1994, 1, 2, 3, 4, 5)))
    //     console.log(ddd.getFullYear())
        
    //     let i = 1;
    //     for(let li of carousel.querySelectorAll('li')) {
    //       li.style.position = 'relative';
    //       li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
    //       i++;
    //     }
    
    //     let width = 130; // ширина картинки
    //     let count = 3; // видимое количество изображений
    
    //     let list = carousel.querySelector('ul');
    //     let listElems = carousel.querySelectorAll('li');
    
    //     let position = -390; // положение ленты прокрутки
    // let leftFist, leftEnd /*==================*/
    // carousel.querySelector('.next').onclick = function() {

    //       list.style.transition = '0s'
    //       for (let y = 0; y < 3; y++) {
    //       leftFist = list.firstElementChild;
    //       leftEnd = leftFist.cloneNode(true);
    //       list.appendChild(leftEnd);
	  //       list.removeChild(leftFist)
    //       }
    //       list.style.transform = 'translateX(390px)';
    //       setTimeout(function() {
    //       list.style.transition = '1s'
    //       list.style.transform = 'translateX(0px)';
    //       }, 1);
    //     };
    
    //     carousel.querySelector('.prev').onclick = function() {
    //       list.style.transition = '1s'
    //       list.style.transform = 'translateX(390px)';
    //       console.log(position)
    //       setTimeout(function() {
    //       list.style.transition = '0s'
    //       for (let y = 0; y < 3; y++) {
    //       leftEnd = list.lastElementChild;
    //       leftFist = leftEnd.cloneNode(true);
    //       list.insertBefore(leftFist, list.firstElementChild);
	  //       list.removeChild(leftEnd)
    //       console.log(list.firstElementChild)
    //       }
    //       list.style.transform = 'translateX(0px)';
    //       }, 1000);
    //     };