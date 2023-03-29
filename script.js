const rows = document.querySelectorAll(".row");
let arr = [];

function reverseColor(arr) {
  let interval;
  clearInterval(interval);
  let index = 0;
  interval = setInterval(() => {
    if (index === arr.length) {
      arr = [];
      clearInterval(interval);
      return;
    }
    console.log(index, arr);
    arr[index].style.backgroundColor = "white";
    index++;
  }, 1000);
}

function customFind(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return true;
  }

  return false;
}

for (let i = 0; i < rows.length; i++) {
  let children = rows[i].children;
  for (let j = 0; j < children.length; j++) {
    children[j].addEventListener("click", (e) => {
      if (!customFind(arr, e.target)) {
        e.target.style.backgroundColor = "green";
        arr.push(e.target);
      }
      console.log("here", arr.length, arr);
      if (arr.length === 7) {
        reverseColor(arr);
      }
    });
  }
}
