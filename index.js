document.querySelectorAll('.categories .nav-link').forEach((button) => {
  console.log(button);
  button.addEventListener('mouseover', function() {
    button.classList.add('onMouse'); 
  })

  button.addEventListener('mouseout', function() {
    button.classList.remove('onMouse'); 
  }) 
})

document.querySelectorAll('.btn-group > button').forEach((button) => {
  button.addEventListener('mouseover', function() {
    button.style.backgroundColor = "#AFE1AF"; 
  })

  button.addEventListener('mouseout', function() {
    button.style.backgroundColor = "white"; 
  })
})

document.querySelectorAll('.car-type button').forEach((button) => {
  button.addEventListener('click', function(event) {
    if (event.target.id === 'auto') {
      document.querySelector('.prices-auto').removeAttribute('hidden'); 
      document.querySelector('.prices-manual').setAttribute('hidden', 'true');
    } else if (event.target.id === 'manual') {
      document.querySelector('.prices-manual').removeAttribute('hidden'); 
      document.querySelector('.prices-auto').setAttribute('hidden', 'true');
    } 
  })
})

document.querySelectorAll('.socials svg').forEach((icon) => {
  icon.addEventListener('click', function(event) {
    console.log(event.target.id);
  })
})