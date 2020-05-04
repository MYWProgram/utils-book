var count = 1, container = document.querySelector("#container");

function getUserAction() {
  container.innerHTML = count++;
  console.info(this);
}
container.onmousemove = getUserAction;
// function debounce(func, wait, immediate) {
//   var timeout, result;
//   var debounced = function() {
//     var context = this;
//     var args = arguments;
//     if(timeout) clearTimeout(timeout);
//     if(immediate) {
//       var callNow = !timeout;
//       timeout = setTimeout(function() {
//         timeout = null;
//       }, wait);
//       if(callNow) result = func.apply(context, args);
//     } else {
//       timeout = setTimeout(function() {
//         func.apply(context, args);
//       }, wait);
//     }
//     return result;
//   };
//   debounced.cancel = function() {
//     clearTimeout(timeout);
//     timeout = null;
//   }
//   return debounced;
// }

// var setUserAction = debounce(getUserAction, 10000, true);
// container.onmousemove = setUserAction;
// document.querySelector("#button").addEventListener("click", function() {
//   setUserAction.cancel();
// });
