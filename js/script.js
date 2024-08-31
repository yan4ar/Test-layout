const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

  function openTab(evt, name) {
    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tab__content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tab__links");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" done", "");
    }

    document.getElementById(name).style.display = "block";
    evt.currentTarget.className += " done";
}

