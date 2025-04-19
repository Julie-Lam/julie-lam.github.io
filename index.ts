const url: string =
  "https://pbr3r32egvo27ids7gpjohrcnu0dwucw.lambda-url.ap-southeast-2.on.aws/";
document.addEventListener("DOMContentLoaded", () => {
  const counterEl = document.querySelector("#view-count");

  async function updateCounter() {
    let response = await fetch(url);
    let data = await response.json();

    if (counterEl) {
      counterEl.innerHTML = "${data}";
    }
  }

  updateCounter();
});
