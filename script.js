const shapes = document.querySelectorAll(".shape");

shapes.forEach((shape) => {
  const animate = () => {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const rotate = Math.random() * 360;
    const duration = 3 + Math.random() * 5;

    shape.style.transition = `all ${duration}s ease-in-out`;
    shape.style.transform = `translate(${x}px, ${y}px) rotate(${rotate}deg)`;

    setTimeout(animate, duration * 1000);
  };

  animate();
});
