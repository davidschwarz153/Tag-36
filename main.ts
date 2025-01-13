const myList = document.querySelector<HTMLUListElement>("#myList");
const firstChild = document.querySelector<HTMLButtonElement>("#firstC-btn");
const lastChild = document.querySelector<HTMLButtonElement>("#lastC-btn");
const nextSib = document.querySelector<HTMLButtonElement>("#first-sib-btn");
const prevSib = document.querySelector<HTMLButtonElement>("#last-sib-btn");
const outputElement = document.querySelector<HTMLDivElement>("#output-games");

firstChild?.addEventListener("click", () => {
  outputElement!.innerHTML = myList?.firstElementChild?.innerHTML || "";
});

lastChild?.addEventListener("click", () => {
  outputElement!.innerHTML = myList?.lastElementChild?.innerHTML || "";
});

nextSib?.addEventListener("click", () => {
  outputElement!.innerHTML =
    myList?.firstElementChild?.nextElementSibling?.innerHTML || "";
});

prevSib?.addEventListener("click", () => {
  outputElement!.innerHTML =
    myList?.lastElementChild?.previousElementSibling?.innerHTML || "";
});

//:

const colorSelect =
  document.querySelector<HTMLSelectElement>("#farbeAuswahlen");
const colorBtn = document.querySelector<HTMLButtonElement>("#color-button");
colorBtn?.addEventListener("click", () => {
  colorSelect?.remove(colorSelect.selectedIndex);
});

//:

type SimplePerson = {
  vorname: string;
  nachname: string;
  land: string;
};

document.querySelector("#form1")?.addEventListener("submit", (event) => {
  event.preventDefault();

  const vorname =
    document.querySelector<HTMLInputElement>("#vorname")?.value || "";
  const nachname =
    document.querySelector<HTMLInputElement>("#nachname")?.value || "";
  const land = document.querySelector<HTMLSelectElement>("#land")?.value || "";

  const person: SimplePerson = { vorname, nachname, land };
  console.log(person);
});

//:

document.addEventListener("DOMContentLoaded", () => {
  const colorAuswahl = document.getElementById(
    "colorAuswahlen"
  ) as HTMLSelectElement;
  const button2 = document.getElementById("color2button") as HTMLButtonElement;

  button2.addEventListener("click", (event) => {
    event.preventDefault();
    const ausgewählteFarbe = colorAuswahl.value.trim();
    document.body.style.backgroundColor = ausgewählteFarbe;
  });
});
