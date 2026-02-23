(function () {
  'use strict';

  // ===== Confetti Effect =====
  function runConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const colors = ['#f093fb', '#667eea', '#764ba2', '#ffd700', '#87ceeb', '#dda0dd'];
    const confettiCount = 80;
    const duration = 3500;
    const confetti = [];

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    for (let i = 0; i < confettiCount; i++) {
      confetti.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        w: Math.random() * 8 + 4,
        h: Math.random() * 4 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * 2 + 1,
        angle: Math.random() * 360,
        rotation: (Math.random() - 0.5) * 4
      });
    }

    const startTime = Date.now();

    function animate() {
      const elapsed = Date.now() - startTime;
      if (elapsed > duration) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      confetti.forEach(function (c) {
        ctx.save();
        ctx.translate(c.x, c.y);
        ctx.rotate((c.angle * Math.PI) / 180);
        ctx.fillStyle = c.color;
        ctx.globalAlpha = Math.max(0, 1 - elapsed / duration);
        ctx.fillRect(-c.w / 2, -c.h / 2, c.w, c.h);
        ctx.restore();

        c.y -= c.speed;
        c.x += Math.sin(elapsed / 200) * 0.5;
        c.angle += c.rotation;
      });

      requestAnimationFrame(animate);
    }

    animate();
  }

  // ===== Music Button =====
  function initMusic() {
    const btn = document.getElementById('music-btn');
    const audio = document.getElementById('birthday-audio');

    if (!btn || !audio) return;

    btn.addEventListener('click', function () {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(function () {
            btn.classList.add('hidden');
          })
          .catch(function () {
            console.warn('Could not play audio. Add flute.mp3 to the audio/ folder.');
          });
      } else {
        btn.classList.add('hidden');
      }
    });
  }

  // ===== Init =====
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      runConfetti();
      initMusic();
    });
  } else {
    runConfetti();
    initMusic();
  }
})();
