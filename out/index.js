"use strict";
document.addEventListener("DOMContentLoaded", () => {
    console.log("Loaded");
    const counterEl = document.querySelector("#view-count");
    let url = "https://pbr3r32egvo27ids7gpjohrcnu0dwucw.lambda-url.ap-southeast-2.on.aws/";
    async function updateCounter() {
        console.log("updating counter!");
        let response = await fetch(url);
        let data = await response.json();
        console.log("value: " + data);
        if (counterEl) {
            console.log("found the counter el!");
            counterEl.innerHTML = `Views: ${data}`;
        }
    }
    updateCounter();
});
//# sourceMappingURL=index.js.map