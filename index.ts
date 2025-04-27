const url: string =
  "https://z4duurglrlw5wczlr7ukpo5bs40saqxa.lambda-url.ap-southeast-2.on.aws/";
document.addEventListener("DOMContentLoaded", () => {
  const counterEl = document.querySelector("#view-count");

  async function updateCounter() {
    let response = await fetch(url);
    let data = await response.json();

    if (counterEl) {
      counterEl.innerHTML = `${data}`;
    }
  }

  updateCounter();
});
