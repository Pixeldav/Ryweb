    // script.js
    const tennaPopup = document.querySelector('#tennaPopup');
    const tennaTextbox = document.querySelector('#tennaTextbox');
    const btn1 = document.querySelector('#btn1');

    const squeak1 = new Audio('sounds/squeak1.mp3');
    var textboxNumTenna = 0
    var textboxVisibleTenna = false

    const hurt1 = new Audio('sounds/hurt1.wav');
    var jackDamaging = false

    tennaPopup.addEventListener('click', (e) => {
        if (textboxVisibleTenna === false) {
      e.preventDefault();
      squeak1.currentTime = 0;
      squeak1.play().catch(err => console.log('Playback blocked:', err));
        }
        if (textboxVisibleTenna === true && textboxNumTenna === 1) {
            tennaPopup.src = "images/tennaStandWobble.gif";
        }
    });

    btn1.addEventListener('click', () => {
      btn1.style.display = "none";
      setTimeout(() => {
        tennaPopup.src = "images/tennaWhatSquish.gif";
        tennaTextbox.src = "images/tennaTextbox1.gif";
        textboxVisibleTenna = true
        textboxNumTenna += 1
      }, 1500);
    });

const follower = document.getElementById('jackensteinFollower');
const jackImg = document.querySelector('#jackensteinFollower');

let targetX = 0;
let targetY = 0;
let currentX = 0;
let currentY = 0;
const speed = 0.01; // smaller = slower, smoother follow (try 0.05–0.15)

document.addEventListener('mousemove', (e) => {
  targetX = e.clientX;
  targetY = e.clientY;
});

function animate() {
  // move current position slightly toward target each frame
  currentX += (targetX - currentX) * speed;
  currentY += (targetY - currentY) * speed;

  follower.style.left = currentX + 'px';
  follower.style.top = currentY + 'px';
  follower.style.transform = 'translate(-50%, -50%)';

  requestAnimationFrame(animate);
}

animate();

follower.addEventListener('mouseenter', (e) => {
  jackDamaging = true
    e.preventDefault();
    hurt1.currentTime = 0;
    hurt1.play().catch(err => console.log('Playback blocked:', err));
    jackImg.style.backgroundImage = 'url("images/jack.gif")';

});

follower.addEventListener('mouseleave', () => {
  jackDamaging = false
  jackImg.style.backgroundImage = 'url("images/jack.png")';

  console.log('Mouse left myElement!');
});










