const button = document.querySelector(".silly-button");

// Tiny mouse-follow effect.
// Intentionally subtle so it feels playful rather than annoying.
window.addEventListener("mousemove", (event) => {
  const rect = button.getBoundingClientRect();

  const buttonCenterX = rect.left + rect.width / 2;
  const buttonCenterY = rect.top + rect.height / 2;

  const distanceX = event.clientX - buttonCenterX;
  const distanceY = event.clientY - buttonCenterY;

  const maxDistance = 180;
  const strength = 0.045;

  const distance = Math.sqrt(
    distanceX * distanceX + distanceY * distanceY
  );

  if (distance < maxDistance) {
    button.style.transform = `
      translate(
        ${distanceX * strength}px,
        ${distanceY * strength}px
      )
    `;
  } else {
    button.style.transform = "translate(0, 0)";
  }
});

button.addEventListener("mouseleave", () => {
  button.style.transform = "translate(0, 0)";
});