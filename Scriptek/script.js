function handleChange(kival) {
  let ertekElem = document.getElementById(kival.id);
  let eredetiErtekElem = Number(ertekElem.getAttribute("data-value"));
  let valuta = document.getElementById("penznem-" + kival.id).value;

  let dollarArfolyam = 1.18;
  let forintArfolyam = 362;
  let fontArfolyam = 0.86;

  if (valuta === "usd") {
    let eredmeny = eredetiErtekElem * dollarArfolyam;
    ertekElem.textContent = eredmeny.toFixed(2);
  } else if (valuta === "eur") {
    ertekElem.textContent = eredetiErtekElem.toFixed(2);
  } else if (valuta === "huf") {
    let eredmeny = eredetiErtekElem * forintArfolyam;
    ertekElem.textContent = eredmeny.toFixed(2);
  } else if (valuta === "gbp") {
    let eredmeny = eredetiErtekElem * fontArfolyam;
    ertekElem.textContent = eredmeny.toFixed(2);
  }
}

function thx() {
  alert("Köszönjük, hogy kitöltötte a kérdőívünket!");
}

function urit() {
  alert("Az ürlap tartalma sikeresen törölve lett!");
}
