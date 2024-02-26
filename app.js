const btn = document.querySelector("#btn");
let userInput = document.querySelector("#date");
let age = document.querySelector('#age');
let years = document.querySelector('#years');
let months = document.querySelector('#months');
let day = document.querySelector('#days');
// console.log(userInput.value);


btn.addEventListener("click", () => {
  // !birth date
  let birthDate = new Date(userInput.value)
  let d = birthDate.getDate();
  let m = birthDate.getMonth() + 1;
  let y = birthDate.getFullYear();
  console.log(`${d}-${m}-${y}`);

  //! today's date
  let today = new Date();
  let d1 = today.getDate();
  let m1 = today.getMonth() + 1;
  let y1 = today.getFullYear();
  console.log(`${d1}-${m1}-${y1}`);

  let ad, am, ay;
  ay = y1 - y;
  // * calculate days
  if (d1 < d) {
    m1--;
    d1 += 30;
    ad = d1 - d;
  }
  else {
    ad = d1 - d;
  }
  // * calculate months;
  if (m1 >= m) {
    am = m1 - m;
  }
  else {
    ay--;
    m1 += 12;
    am = m1 - m;
  }
  years.innerText = ay;
  days.innerText = ad;
  months.innerText = am;
  console.log(`You are ${ay} years ${am} months and ${ad} Days old`)
  // age.innerText = `You are ${ay} years ${am} months and ${ad} Days old`
})

