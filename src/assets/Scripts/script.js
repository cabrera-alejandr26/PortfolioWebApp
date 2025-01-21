document.addEventListener("DOMContentLoaded", function() {
  const q = document.getElementById("matrix");
  if (!q) {
    console.error("Element with ID 'matrix' not found.");
  } else {
    const s = window.screen,
      w = q.width = s.width,
      h = q.height = s.height,
      c = q.getContext('2d'),
      m = Math;

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const p = Array.from({ length: Math.floor(w / 10) }, () => m.random() * h);

    function draw() {
      c.fillStyle = "rgba(0, 0, 0, 0.07)";
      c.fillRect(0, 0, w, h);
      c.fillStyle = "#cf454f";
      c.font = "12pt 'Rajdhani', sans-serif";

      p.forEach(function(value, index) {
        const char = characters.charAt(m.floor(m.random() * characters.length));
        c.fillText(char, index * 10, value);

        if (value > h + m.random() * 1e4) {
          p[index] = 0;
        } else {
          p[index] = value + 10;
        }
      });
    }

    setInterval(draw, 50);
  }
});
