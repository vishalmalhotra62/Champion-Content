const [c] = ["#fff"];
const section1 = document.querySelector(".nn1");

window.addEventListener("scroll", () => {
  let y = window.pageYOffset;
  //   y = y < 1 ? 1 : y; // ensure y is always >= 1 (due to Safari's elastic scroll)
  //   const [r, g, b] = [red / y, green / y, blue / y].map(Math.round);

  console.log(y);
  if (y > 200) {
    section1.style.backgroundColor = `${c}`;
  } else {
    section1.style.backgroundColor = "transparent";
  }
});
