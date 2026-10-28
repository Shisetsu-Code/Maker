const params = new URLSearchParams(location.search);
document.getElementById("game").textContent =
  params.get("game") || "Vista de demostración";
document.getElementById("vendor").textContent = params.get("vendor") || "";
