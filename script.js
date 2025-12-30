let leftbox = document.querySelector(".leftbox");
let rightbox = document.querySelector(".rightbox");
let rightbtn = document.querySelector(".rightbtn");
let leftbtn = document.querySelector(".leftbtn");
let historybtn = document.querySelector(".historybtn");
let ul = document.querySelector("ul");

let arr = [];

rightbtn.addEventListener("click", () => {
  let checkedItems = leftbox.querySelectorAll("input:checked");

  checkedItems.forEach((item) => {
    let text = item.parentElement.innerText;
    arr.push(text);
    rightbox.append(item.parentElement);
    item.checked = false;
  });
});

leftbtn.addEventListener("click", () => {
  let checkedItems = rightbox.querySelectorAll("input:checked");

  checkedItems.forEach((item) => {
    let text = item.parentElement.innerText;
    arr.push(text);
    leftbox.append(item.parentElement);
    item.checked = false;
  });
});

historybtn.addEventListener("click", () => {
  ul.innerHTML = "";
  arr.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.append(li);
  });
});
