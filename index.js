function changeBeatColor(color, element) {
  const beatImage = document.getElementById('beatImage');
  beatImage.style.transition = 'opacity 0.3s ease-in-out';
  beatImage.style.opacity = '0';
  
  document.querySelectorAll('.color-option').forEach(option => {
      option.classList.remove('active');
  });
  
  element.classList.add('active');
  
  setTimeout(() => {
      const colorUrls = {
          'Black': 'https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-550,f-auto,pr-true/uploads/product-draft/colors/beat-street-varian-515x504-black-03062024-045130.png',
          'Brown': 'https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-550,f-auto,pr-true/uploads/product-draft/colors/beat-street-varian-515x504-brown-2-03062024-045126.png'
      };
      
      beatImage.src = colorUrls[color] || colorUrls['brown'];
      beatImage.style.opacity = '1';
  }, 300);
}

function changeScoopyColor(color, element) {
  const scoopyImage = document.getElementById('scoopyImage');
  scoopyImage.style.transition = 'opacity 0.3s ease-in-out';
  scoopyImage.style.opacity = '0';
  
  document.querySelectorAll('.color-option').forEach(option => {
      option.classList.remove('active');
  });
  
  element.classList.add('active');
  
  setTimeout(() => {
      const colorUrls = {
          'Prestige Black': 'https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-550,f-auto,pr-true/uploads/product-draft/colors/5-39-05112024-030657.png',
          'Prestige White': 'https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-550,f-auto,pr-true/uploads/product-draft/colors/6-33-05112024-030712.png',
          'Stylish Red': 'https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-550,f-auto,pr-true/uploads/product-draft/colors/8-18-05112024-030730.png',
          'Stylish Green': 'https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-550,f-auto,pr-true/uploads/product-draft/colors/7-25-05112024-030746.png',
          'Fashion Blue': 'https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-550,f-auto,pr-true/uploads/product-draft/colors/4-38-05112024-030758.png',
          'Fashion Brown': 'https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-550,f-auto,pr-true/uploads/product-draft/colors/3-38-05112024-030814.png',
          'Energetic Silver': 'https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-550,f-auto,pr-true/uploads/product-draft/colors/1-60-05112024-030828.png',
          'Energetic Red': 'https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-550,f-auto,pr-true/uploads/product-draft/colors/2-56-05112024-030842.png'
      };
      
      scoopyImage.src = colorUrls[color] || colorUrls['Prestige Black'];
      scoopyImage.style.opacity = '1';
  }, 300);
}

function changePcxColor(color, element) {
  const pcxImage = document.getElementById('pcxImage');
  pcxImage.style.transition = 'opacity 0.3s ease-in-out';
  pcxImage.style.opacity = '0';
  
  document.querySelectorAll('.color-option').forEach(option => {
      option.classList.remove('active');
  });
  
  element.classList.add('active');
  
  setTimeout(() => {
      const colorUrls = {
          'Road Sync Red': 'https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-550,f-auto,pr-true/uploads/product-draft/colors/variant-web-roadsync-red-515x504px-r5-06122024-030945.png',
          'Road Sync Matte Black': 'https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-550,f-auto,pr-true/uploads/product-draft/colors/variant-web-roadsync-matte-black-515x504px-r5-06122024-031040.png',
          'Phenomenal White': 'https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-550,f-auto,pr-true/uploads/product-draft/colors/variant-web-abs-phenomenal-white-515x504px-r5-06122024-031050.png',
          'Phenomenal Matte Red': 'https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-550,f-auto,pr-true/uploads/product-draft/colors/variant-web-abs-phenomenal-matte-red-515x504px-r5-06122024-031056.png',
          'Phenomenal Matte Silver': 'https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-550,f-auto,pr-true/uploads/product-draft/colors/variant-web-abs-phenomenal-matte-silver-515x504px-r5-06122024-083053.png',
          'Phenomenal Matte Black': 'https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-550,f-auto,pr-true/uploads/product-draft/colors/variant-web-abs-phenomenal-matte-black-515x504px-r5-06122024-031125.png',
          'Exceptional White': 'https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-550,f-auto,pr-true/uploads/product-draft/colors/variant-web-cbs-exceptional-white-515x504px-r5-06122024-031147.png',
          'Exceptional Red': 'https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-550,f-auto,pr-true/uploads/product-draft/colors/variant-web-cbs-exceptional-red-515x504px-r5-06122024-031155.png',
          'Exceptional Matte Silver': 'https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-550,f-auto,pr-true/uploads/product-draft/colors/variant-web-cbs-exceptional-matte-silver-515x504px-r5-1-06122024-031207.png',
          'Exceptional Black': 'https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-550,f-auto,pr-true/uploads/product-draft/colors/variant-web-cbs-exceptional-black-515x504px-r5-06122024-031216.png',
      };
      
      pcxImage.src = colorUrls[color] || colorUrls['Road Sync Red'];
      pcxImage.style.opacity = '1';
  }, 300);
}

function sendToWhatsApp(productName) {
  let message;
  if (productName) {
    const activeColor = document.querySelector('.color-option.active').title;
    message = `Halo, saya tertarik dengan ${productName} warna ${activeColor}. Mohon info detail dan promo yang tersedia.`;
  } else {
    message = 'Halo, saya ingin tanya soal promo bulan ini';
  }
  const whatsappUrl = `https://wa.me/6285190340088?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
}