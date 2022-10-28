document.querySelector("button").addEventListener("click", function (evt) {
  console.log(evt);
});
const input = document.querySelector("input");
input.addEventListener("keydown", function (e) {
  console.log("Keydown");
  console.log(e.code);
});
// // const input = document.querySelector('input');
// // input.addEventListener('keydown', function (e) {
// //     console.log(e.key)
// //     console.log(e.code)
// // })
// // input.addEventListener('keyup', function () {
// //     console.log("KEYUP")
// // })

window.addEventListener("keydown", function (e) {
  //keybord event
  switch (
    e.code //Свойство KeyboardEvent.code представляет физическую клавишу на клавиатуре
  ) {
    // в отличие от символа, сгенерированного нажатием клавиши). Другими словами, это свойство возвращает
    // значение, которое не зависит от раскладки клавиатуры или состояния клавиш-модификаторов.
    case "ArrowUp":
      console.log("UP!");
      break;
    case "ArrowDown":
      console.log("DOWN!");
      break;
    case "ArrowLeft":
      console.log("LEFT!");
      break;
    case "ArrowRight":
      console.log("RIGHT!");
      break;
    default:
      console.log("IGNORED!");
  }
});
// Объект события
// Чтобы хорошо обработать событие, могут понадобиться детали того, что произошло. Не просто «клик» или «нажатие клавиши»,
// а также – какие координаты указателя мыши, какая клавиша нажата и так далее.

// Когда происходит событие, браузер создаёт объект события, записывает в него детали и передаёт его в качестве аргумента функции-обработчику.

// Пример ниже демонстрирует получение координат мыши из объекта события

// Мы можем назначить обработчиком не только функцию, но и объект при помощи addEventListener.
//  В этом случае, когда происходит событие, вызывается метод объекта handleEvent.
{
  /* <button id="elem">Нажми меня</button>

<script>
  elem.addEventListener('click', {
    handleEvent(event) {
      alert(event.type + " на " + event.currentTarget);
    }
  });
</script> */
}
