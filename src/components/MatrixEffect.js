import React, { useEffect, useRef } from 'react';

function MatrixEffect({ isActive }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      const resizeCanvas = () => {
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;
      };

      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);

      const fontSize = 16;
      const columns = canvas.width / fontSize;
      const drops = new Array(Math.floor(columns)).fill(1);

      function drawMatrix() {
        context.fillStyle = 'rgba(0, 0, 0, 0.05)';
        context.fillRect(0, 0, canvas.width, canvas.height);

        context.fillStyle = '#a9d5de'; // BINARY CODE COLOR
        context.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
          const text = Math.random() > 0.5 ? '1' : '0';
          context.fillText(text, i * fontSize, drops[i] * fontSize);

          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i]++;
        }
      }

      const interval = setInterval(drawMatrix, 30);

      return () => {
        clearInterval(interval);
        window.removeEventListener('resize', resizeCanvas);
      };
    }
  }, [isActive]);

  return <canvas ref={canvasRef} id="matrixEffectCanvas" style={{ display: isActive ? 'block' : 'none' }} />;
}

export default MatrixEffect;
