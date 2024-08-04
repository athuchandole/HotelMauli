$(function () {
    // Function to show popup
    $('#open-popup').click(function () {
      $('#popup').fadeIn();
    });
  
    // Function to close popup
    $('#close-popup').click(function () {
      $('#popup').fadeOut();
    });
  
    // Close popup when clicking outside of it
    $(document).click(function (e) {
      if (!$(e.target).closest('#popup').length && !$(e.target).is('#open-popup')) {
        $('#popup').fadeOut();
      }
    });
  
    // Load special.html into #home and then load Rise.html into #home
    $("#home").load("special.html", function () {
      $("#home").append('<div id="homeNoodles"></div>');
      $("#homeNoodles").load("noodles.html");
      $("#home").append('<div id="homeRise"></div>');
      $("#homeRise").load("Rise.html");
    });
  
    // Load special.html into #special
    $("#special").load("special.html");
  
    // Load noodles.html into #noodles
    $("#noodles").load("noodles.html");
  
    // Load Rise.html into #Rise
    $("#Rise").load("Rise.html");
  });
  
  // Fetch and insert footer
  fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer-placeholder').innerHTML = data;
    });
  
  // Instagram button script 
  document.getElementById('open-instagram').addEventListener('click', function () {
    window.open('https://www.instagram.com/hotel_mauli_sinnar/', '_blank');
  });
  
  // WhatsApp button script
  document.getElementById('open-whatsapp').addEventListener('click', function() {
    let phoneNumber = '+919130203039';
    let message = 'Hi, Hotel Mauli !';
    let whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  });
  
  // Call Rajesh Tibhe
  document.querySelector('.callrajesh').addEventListener('click', function() {
    window.open('tel:+918087044007');
  });
  
  // Call Yesh Chandole
  document.querySelector('.callyesh').addEventListener('click', function() {
    window.open('tel:+919309584322');
  });
  