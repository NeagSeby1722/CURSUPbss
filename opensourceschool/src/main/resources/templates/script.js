const loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('mouseenter', () => {
  loginBtn.style.transform = 'scale(1.1)';
  loginBtn.style.backgroundColor = '#0056b3';
  
  const circleEffect = document.createElement('div');
  circleEffect.style.position = 'absolute';
  circleEffect.style.top = '50%';
  circleEffect.style.left = '50%';
  circleEffect.style.width = '300%';
  circleEffect.style.height = '300%';
  circleEffect.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
  circleEffect.style.borderRadius = '50%';
  circleEffect.style.transform = 'translate(-50%, -50%)';
  circleEffect.style.transition = 'width 0.4s, height 0.4s, top 0.4s, left 0.4s';
  
  loginBtn.appendChild(circleEffect);
  
  loginBtn.addEventListener('mouseleave', () => {
    circleEffect.style.width = '0';
    circleEffect.style.height = '0';
    circleEffect.style.top = '50%';
    circleEffect.style.left = '50%';
    
    setTimeout(() => {
      loginBtn.removeChild(circleEffect);
    }, 400);
    
    loginBtn.style.transform = 'scale(1)';
    loginBtn.style.backgroundColor = '#007BFF';
  });
});

loginBtn.addEventListener('click', () => {
  alert('Login button clicked!');
});
