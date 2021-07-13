const { hash } = window.location;

const decryptedMsg = atob(hash.replace("#", ""));

const secretContainer = document.querySelector(".secret-container");
const encryptionContainer = document.querySelector(".encryption-container");
const messagecontainer = document.querySelector(".message-container");

const form = document.querySelector("#secret-form");
const secretInput = document.querySelector("#secret-input");
const encryptionInput = document.querySelector("#encryption-input");
const secretMsg = document.querySelector(".message__secret");

if (decryptedMsg) {
	secretContainer.classList.add("hidden");
	messagecontainer.classList.remove("hidden");
	secretMsg.innerHTML = decryptedMsg;
}

form.addEventListener("submit", (evt) => {
	evt.preventDefault();

	secretContainer.classList.add("hidden");
	encryptionContainer.classList.remove("hidden");

	const encrypted = btoa(secretInput.value);

	encryptionInput.value = `${window.location}#${encrypted}`;
	encryptionInput.select();
});
