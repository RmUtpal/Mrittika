// app.js - simple interactivity for the Mrittika landing page
document.addEventListener('DOMContentLoaded', function(){
  const qtyInput = document.getElementById('qty');
  const inc = document.getElementById('increase');
  const dec = document.getElementById('decrease');
  const addToCartBtn = document.getElementById('addToCart');
  const cartCount = document.getElementById('cartCount');

  inc.addEventListener('click', ()=> { qtyInput.value = Number(qtyInput.value) + 1; });
  dec.addEventListener('click', ()=> { if(Number(qtyInput.value) > 1) qtyInput.value = Number(qtyInput.value) - 1; });

  addToCartBtn.addEventListener('click', ()=>{
    const count = Number(cartCount.textContent) + Number(qtyInput.value);
    cartCount.textContent = count;
    addToCartBtn.textContent = 'Added ✓';
    setTimeout(()=> addToCartBtn.textContent = 'অর্ডার করুন', 1500);
  });

  // Tabs
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(t=>{
    t.addEventListener('click', ()=>{
      document.querySelectorAll('.tab').forEach(x=> x.classList.remove('active'));
      t.classList.add('active');
      const target = t.getAttribute('data-tab');
      document.querySelectorAll('.tab-content').forEach(tc=> tc.classList.add('hidden'));
      document.getElementById(target).classList.remove('hidden');
    });
  });

  // Gallery thumbs click to replace hero image
  const thumbs = document.querySelectorAll('.gallery-thumbs img');
  const hero = document.querySelector('.hero-image');
  thumbs.forEach((img)=>{
    img.addEventListener('click', ()=> {
      hero.src = img.src;
    });
  });

});
