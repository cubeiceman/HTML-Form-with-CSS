const params = new URLSearchParams(window.location.search);


for (const pair of params.entries()) {
  const para = document.createElement("p");
  const node = document.createTextNode(`${pair[0]}: ${pair[1]}`);
  para.appendChild(node);

  const element = document.getElementById("results");
  element.appendChild(para);
}