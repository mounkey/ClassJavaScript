
const date = document.querySelector("#fecha"); //fecha.

// fecha
const today =  luxon.DateTime;
date.innerHTML = `<b> ${today.now().toLocaleString()} </b>`;