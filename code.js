
  // Set up canvas
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Set up snowflakes
  const snowflakes = [];
  const numSnowflakes = 100;
  const minSnowflakeRadius = 2;
  const maxSnowflakeRadius = 5;
  const minSnowflakeVelocity = 0.5;
  const maxSnowflakeVelocity = 2;

  // Generate snowflakes
  for (let i = 0; i < numSnowflakes; i++) {
    const radius = Math.random() * (maxSnowflakeRadius - minSnowflakeRadius) + minSnowflakeRadius;
    const x = Math.random() * (canvas.width - radius * 2) + radius;
    const y = Math.random() * (canvas.height - radius * 2) + radius;
    const velocity = Math.random() * (maxSnowflakeVelocity - minSnowflakeVelocity) + minSnowflakeVelocity;
    snowflakes.push({ radius, x, y, velocity });
  }

  // Render snowflakes
  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    snowflakes.forEach(snowflake => {
      ctx.beginPath();
      ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  // Update snowflakes
  function update() {
    snowflakes.forEach(snowflake => {
      snowflake.y += snowflake.velocity;
      if (snowflake.y + snowflake.radius > canvas.height) {
        snowflake.y = -snowflake.radius;
      }
    });
  }

  // Animate snowflakes
  function animate() {
    render();
    update();
    requestAnimationFrame(animate);
  }

  animate();