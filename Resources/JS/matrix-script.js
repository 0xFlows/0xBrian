document.addEventListener('DOMContentLoaded', () => {
    const unlockBox = document.getElementById('unlock');

    unlockBox.addEventListener('mouseenter', function() {
        const matrixCanvas = document.createElement('canvas');
        matrixCanvas.id = 'matrixEffectCanvas';
        this.appendChild(matrixCanvas);
        startMatrixEffect(matrixCanvas);
    });

    unlockBox.addEventListener('mouseleave', function() {
        const matrixCanvas = document.getElementById('matrixEffectCanvas');
        if (matrixCanvas) {
            matrixCanvas.remove();
        }
    });

    function startMatrixEffect(canvas) {
        const context = canvas.getContext('2d');
        canvas.width = unlockBox.offsetWidth;
        canvas.height = unlockBox.offsetHeight;

        const fontSize = 16;
        const columns = canvas.width / fontSize;
        const drops = new Array(Math.floor(columns)).fill(1);

        function drawMatrix() {
            context.fillStyle = 'rgba(0, 0, 0, 0.05)';
            context.fillRect(0, 0, canvas.width, canvas.height);
            
            context.fillStyle = '#C90076'; // Green text
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

        setInterval(drawMatrix, 30);
    }
});
