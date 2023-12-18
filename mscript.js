document.addEventListener("DOMContentLoaded", function () {
  for (let i = 0; i < 10; i++) {
    createTwinklingLight();
  }
});

function createTwinklingLight() {
  const light = document.createElement("div");
  light.className = "twinkling-light";
  light.style.left = `${Math.random() * 100}vw`;
  light.style.top = `${Math.random() * 100}vh`;
  document.body.appendChild(light);
}
document.addEventListener("DOMContentLoaded", function () {
  for (let i = 0; i < 10; i++) {
    createSnowflake();
  }
});

function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.className = "snowflake";
  snowflake.style.left = `${Math.random() * 100}vw`;
  snowflake.style.top = `${Math.random() * 100}vh`;
  document.body.appendChild(snowflake);
}

function openModal() {
  const modal = document.getElementById("modal-container");
  modal.style.display = "flex";
}

function closeModal() {
  const modal = document.getElementById("modal-container");
  modal.style.display = "none";
}
