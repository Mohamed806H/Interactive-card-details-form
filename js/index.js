const cardNumber = document.querySelector(".cardnumber");
const numberInp = document.querySelector(".NumberInp");
const nameInp = document.querySelector(".CardNameInp");
const cardName = document.querySelector(".name");
const cardMonth = document.querySelector(".month");
const cardYear = document.querySelector(".year");
const monthInp = document.querySelector(".MonthInp");
const yearInp = document.querySelector(".YearInp");
const cardCvc = document.querySelector(".Cvc");
const cvcInp = document.querySelector(".CVCINP");
const submitBtn = document.querySelector("#submit-btn");
const compeleted = document.querySelector(
  ".app__header-section-right-side-Thank"
);
const form = document.querySelector("form");

function setCardNumber(e) {
  cardNumber.innerText = format(e.target.value);
}
function setCardName(e) {
  cardName.innerText = format(e.target.value);
}
function setCardMonth(e) {
  cardMonth.innerText = format(e.target.value);
}
function setCardYear(e) {
  cardYear.innerText = format(e.target.value);
}
function setCardCvc(e) {
  cardCvc.innerText = format(e.target.value);
}

function handleSubmit(e) {
  e.preventDefault();
  if (nameInp.value.trim() === "") {
    document.querySelector(".error-cardname").style.display = "block";
  } else {
    document.querySelector(".error-cardname").style.display = "none";
  }
  if (numberInp.value.trim() === "") {
    document.querySelector(".error-cardnumber").style.display = "block";
  } else if (numberInp.value.length < 16) {
    document.querySelector(".error-cardnumber").style.display = "block";
    document.querySelector(".error-cardnumber").innerHTML = "must be 16 number";
  } else {
    document.querySelector(".error-cardnumber").style.display = "none";
  }
  if (monthInp.value.trim() === "") {
    document.querySelector(".error-carddate").style.display = "block";
    document.querySelector(".edit").style.margin = "-106px 0 0 166px";
  } else {
    document.querySelector(".error-carddate").style.display = "none";
    document.querySelector(".edit").style.margin = "-68px 0 0 166px";
  }
  if (yearInp.value.trim() === "") {
    document.querySelector(".error-carddate").style.display = "block";
    document.querySelector(".edit").style.margin = "-106px 0 0 166px";
  } else {
    document.querySelector(".error-carddate").style.display = "none";
    document.querySelector(".edit").style.margin = "-68px 0 0 166px";
  }
  if (cvcInp.value.trim() === "") {
    document.querySelector(".error-cardCVC").style.display = "block";
  } else {
    document.querySelector(".error-cardCVC").style.display = "none";
  }
  if (
    nameInp.value &&
    numberInp.value &&
    monthInp.value &&
    yearInp.value &&
    cvcInp.value &&
    numberInp.value.length == 16
  ) {
    compeleted.classList.remove("hidden");
    form.classList.add("hidden");
  }
}
function format(s) {
  return s.toString().replace(/\d{4}(?=.)/g, "$& ");
}

numberInp.addEventListener("keyup", setCardNumber);
nameInp.addEventListener("keyup", setCardName);
monthInp.addEventListener("keyup", setCardMonth);
yearInp.addEventListener("keyup", setCardYear);
cvcInp.addEventListener("keyup", setCardCvc);
submitBtn.addEventListener("click", handleSubmit);
