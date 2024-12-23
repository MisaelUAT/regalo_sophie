var struct_modal1 = document.getElementById("modal-sect-1");
var button_close1 = document.getElementById("btn_close1");
var button_open1 = document.getElementById("btn_open1");

button_open1.onclick = () => {
  struct_modal1.classList.remove("hidden");
};

button_close1.onclick = () => {
  struct_modal1.classList.add("hidden");
};
