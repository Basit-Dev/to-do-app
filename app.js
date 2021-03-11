var all = [];
var getInput = document.getElementById('input-field');
var ul = document.getElementById('list-ul');

// document.querySelector('.input__button').addEventListener('click', function () {
//   var inputValue = getInput.value;
//   var li = document.createElement('LI');
//   var button = document.createElement('BUTTON');
//   var button2 = document.createElement('BUTTON');
//   var imgDone = document.createElement('IMG');
//   var imgDone = document.createElement('IMG');
//   imgDone.src = './images/icon-check.svg';
//   var imgDelete = document.createElement('IMG');
//   imgDelete.src = './images/icon-cross.svg';
//   button.appendChild(imgDelete);
//   button2.appendChild(imgDone);
//   li.appendChild(document.createTextNode(inputValue));
//   li.appendChild(button);
//   li.appendChild(button2);
//   li.setAttribute('id', 'li');
//   button.setAttribute('class', 'btnD');
//   button2.setAttribute('class', 'btn2' + " " + 'id', 'b');
//   li.classList.add('list__dynamic');

//   ul.appendChild(li);
//   all.push(inputValue);
//   console.log(all);
//   //button.onclick = removeLi;
//   // button2.onclick = completed;
//   listItems = document.getElementsByTagName('li').length;
// });

// const removeLi = function () {
//   var getLi = document.getElementsByClassName('btnD');
//   for (let index = 0; index < getLi.length; index++) {
//     getLi[index].addEventListener('click', function () {
//       this.closest('.list__dynamic').remove();
//     });
//   }
// };

// const completed = function () {
//   var getLi = document.getElementsByClassName('btn2');
//   for (let index = 0; index < getLi.length; index++) {
//     getLi[index].addEventListener('click', function (ev1) {
//       if (ev1.target.tagName === 'LI') {
//         ev1.target.classList.toggle('li');
//       }
//       false
//   });
// }
// };

//var list = document.getElementById('list-ul');

var list = document.querySelector('.list__ul');
  list.addEventListener(
    'click',
    function (ev) {
      if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('li');
      }
    },
    false
  );

  // var list1 = document.querySelector('.list__ul')
  // list1.addEventListener(
  //   'click',
  //   function (ev) {
  //     if (ev.target.tagName === 'LI') {
  //       ev.target.classList.toggle('btn2');
  //     }
  //   },
  //   false
  // );
// document.getElementById('items-left').innerHTML = all.length + " items left";

// document.getElementById("list-ul").addEventListener("click",function(e) {
//   if (e.target && e.target.matches("li.item")) {
//     e.target.className = "li"; // new class name here

//     }
// });

// ADDS ARRAY ITEMS IN LI
var options = ['test0', 'test1','test3', 'test4'
// set0 = ['test', 'test1','test3', 'test4' ],
// set1 = ['First Option','Second Option','Third Option']
];
const removeLi = function (array) {
  // Create the list element:
  var list = document.createElement('ul');

  for(var i = 0; i < array.length; i++) {
      // Create the list item:
      var item = document.createElement('li');

      // Set its contents:
      item.appendChild(document.createTextNode(array[i]));

      // Add it to the list:
      list.appendChild(item);
  }

  // Finally, return the constructed list:
  return list;
}



document.querySelector('.input__button').addEventListener('click', function () {
  var inputValue = getInput.value;
  options.push(inputValue);
  console.log(options);
  document.getElementById('foo').appendChild(removeLi(options));

});
