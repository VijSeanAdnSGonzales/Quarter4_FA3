let contacts = [];

function updateDisplay() {
  const list = document.getElementById("contactList");
  list.innerHTML = "";
  contacts.forEach(contact => {
    const li = document.createElement("li");
    li.textContent = contact;
    list.appendChild(li);
  });
}

function addContact() {
  const name = document.getElementById("nameInput").value.trim();
  if (name === "") return;

  if (contacts.length === 7) {
    contacts.shift();
  }
  contacts.push(name);
  updateDisplay();
}

function removeContact() {
  contacts.pop();
  updateDisplay();
}
