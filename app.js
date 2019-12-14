
// --------------
// Hover animaton
// --------------

const mouthSpeed = 0.3;
const easeType = Power2.easeOut;
const mouthOpen = gsap.timeline({ paused: true });
mouthOpen.to('.mouth-back', {duration: mouthSpeed, ease: easeType, y: -60}, 0);
mouthOpen.to('.tongue', {duration: mouthSpeed * 1.5, ease: easeType, y: -73}, 0);
mouthOpen.to('.teeth-bottom', {duration: mouthSpeed, ease: easeType, y: -72, scaleY: 1.2}, 0);
mouthOpen.to('.teeth-top', {duration: mouthSpeed, ease: easeType, y: -55, scaleY: 1.2}, 0);
mouthOpen.to('.body', {duration: mouthSpeed, ease: easeType, transformOrigin: 'center bottom'}, 0);
mouthOpen.to('.ears', {duration: mouthSpeed, ease: easeType, y: 6}, 0);
mouthOpen.to('.eye-right', {duration: mouthSpeed, ease: easeType, x: -2}, 0);
mouthOpen.to('.eye-left', {duration: mouthSpeed, ease: easeType, x: 2}, 0);
mouthOpen.to('.eyes', {duration: mouthSpeed, ease: easeType, y: 2}, 0);
mouthOpen.to('.nose', {duration: mouthSpeed, ease: easeType, y: -6}, 0);

// ------------
// Mouse events
// ------------

const button = document.querySelector('button');

button.addEventListener('mouseenter', enterButton);
button.addEventListener('mouseleave', leaveButton);

function enterButton() { mouthOpen.play(); }
function leaveButton() { mouthOpen.reverse(); }