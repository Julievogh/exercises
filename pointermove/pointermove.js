document.addEventListener("DOMContentLoaded", function () {
  // Function to update HSL color based on mouse position
  function updateColor(event) {
    // Calculate lightness based on mouse Y-position
    let lightness = (event.clientY / window.innerHeight) * 100;

    // Update CSS custom property
    document.documentElement.style.setProperty("--lightness", lightness + "%");

    // Calculate saturation based on mouse X-position
    let saturation = (event.clientX / window.innerWidth) * 100;

    // Update CSS custom property for saturation
    document.documentElement.style.setProperty(
      "--saturation",
      saturation + "%"
    );
  }

  // Event listener for mousemove event
  document.addEventListener("mousemove", updateColor);
});
