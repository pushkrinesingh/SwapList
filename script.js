let leftbox = document.querySelector(".leftbox");
let rightbox = document.querySelector(".rightbox");
let rightbtn = document.querySelector(".rightbtn");
let leftbtn = document.querySelector(".leftbtn");

rightbtn.addEventListener("click", () => {
  let checkedItems = leftbox.querySelectorAll("input:checked");

  checkedItems.forEach(item => {
    item.checked = false;
    rightbox.append(item.parentElement);
  });
});

leftbtn.addEventListener("click", () => {
  let checkedItems = rightbox.querySelectorAll("input:checked");

  checkedItems.forEach(item => {
    item.checked = false;
    leftbox.append(item.parentElement);
  });
});
