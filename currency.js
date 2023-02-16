
//json verstion + API fetch

var input_amount = document.getElementById("original-currency-amount");
var from_currency = document.getElementById("from_currency");
var to_currency = document.getElementById("to_currency");
var exchange_rate = document.getElementById("exchange-rate");
var exchange = document.getElementById("exchange");
var output_amount = document.getElementById("output-text");
var output_from = document.getElementById("from");
var output_to = document.getElementById("to");

exchange.addEventListener("click", () => {
  [from_currency.value, to_currency.value] = [
    to_currency.value,
    from_currency.value,
  ];
  calculate();
});

var to_amount = 0;
function calculate() {
  const from_currency_value = from_currency.value;
  const to_currency_value = to_currency.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${from_currency_value}`)
    .then((res) => res.json())
    .then((res) => {
      const rate = res.rates[to_currency_value];
      exchange_rate.value = `${rate}`;
      to_amount = (input_amount.value * rate).toFixed(3);
      output_from.innerText = `${input_amount.value} ${from_currency_value}`;
      output_to.innerText = `${to_amount} ${to_currency_value}`;
      output_amount.style.display = "block";
    });
}

document.getElementById("exchange_button").addEventListener("click", () => {
  calculate();
});





//no API 
// const currencies = {
//   CAD: "Canadian Dollar",
//   CZD: "Czech Koruna",
//   EUR: "Euro",
//   GBP: "British Pound",
//   BGN: "Bulgarian Leva",
//   USD: "Inited States Dollar"
// }
// //currency rates
// var gbp, usd, eur, cad, aud;
// function init()
// {
//     gbp = document.getElementById("GBP");
//     usd = document.getElementById("USD");
//     eur = document.getElementById("EUR");
//     cad = document.getElementById("CAD");
//     aud = document.getElementById("AUD");
// }

// function gbpfunc()
// {
//     usd.value = parseFloat(gbp.value) * 0.49246;
//     eur.value = parseFloat(gbp.value) * 0.69714;
//     cad.value = parseFloat(gbp.value) * 0.50221;
//     aud.value = parseFloat(gbp.value) * 0.43497;
// }

// function eurfunc()
// {
//     gbp.value = parseFloat(eur.value) * 1.43448;
//     usd.value = parseFloat(eur.value) * 0.70641;
//     cad.value = parseFloat(eur.value) * 0.72037;
//     aud.value = parseFloat(eur.value) * 0.62382;
// }

// function cadfunc()
// {
//     gbp.value = parseFloat(cad.value) * 1.99169;
//     usd.value = parseFloat(cad.value) * 0.98054;
//     eur.value = parseFloat(cad.value) * 1.38814;
//     aud.value = parseFloat(cad.value) * 0.86613;
// }

// function audfunc()
// {
//     gbp.value = parseFloat(aud.value) * 2.29964;
//     usd.value = parseFloat(aud.value) * 1.13262;
//     eur.value = parseFloat(aud.value) * 1.60329;
//     cad.value = parseFloat(aud.value) * 0.88297;    
// }

// function usdfunc()
// {
//     gbp.value = parseFloat(usd.value) * 2.03032;
//     eur.value = parseFloat(usd.value) * 1.41544;
//     cad.value = parseFloat(usd.value) * 1.01941;
//     aud.value = parseFloat(usd.value) * 0.88297;
// }

// init();

// //convertion 


// const conv = { "gbp": { usd: 1.39, eur: 1.17, cad: 1.75, aud: 1.80 }, "eur": { gbp: 0.86, usd: 1.19, cad: 1.50, aud: 1.54 }, "cad": { gbp: 0.57, usd: 0.79, eur: 0.67, aud: 1.03 }, "aud": { gbp: 0.55, usd: 0.97, eur: 0.65, cad: 0.97 }, "usd": { gbp: 0.72, eur: 0.84, cad: 1.26, aud: 1.30 } };

// const formatVal = num =>  {
//   const dec = num % 1 ? 2 : 0; // https://twitter.com/wesbos/status/1369713969007575043
//   return (num).toFixed(dec);
// };
// window.addEventListener("load", function() {
//   const fs = document.getElementById("fs");
//   const fields = [...fs.querySelectorAll("input")].reduce((acc, fld) => (acc[fld.id.toLowerCase()] = fld, acc), {})
//   fs.addEventListener("input", function(e) {
//     const tgt = e.target;
//     const from = tgt.id.toLowerCase();
//     let fromVal = +tgt.value;
//     Object.entries(conv[from]).forEach(([key, val]) => fields[key].value = formatVal(val * fromVal));
//   });
// });