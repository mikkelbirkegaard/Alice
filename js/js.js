/**
 * file: js.js
 * purpose: interactivity
 **/
console.log('JavaScript from js/js.js: up and running!');


// Alle varer er oprettet i en funktion og linker til bestillingslisten
sum = 0 

test.addEventListener('click',
  function(){
    bestillinger.innerHTML += "<p>Nyfortolket forårsrulle</p>"
    //bestillinger.innerHTML +=  parseInt( sessionStorage.getItem("make")) + parseInt( sessionStorage.getItem("make"))
    sum = sum + 70
    ialt.innerHTML = sum;
  })

  prove.addEventListener('click',
  function(){
    bestillinger.innerHTML += "<p>Salat</p>"
    sum = sum + 80
    ialt.innerHTML = sum;
  })


  provekylling.addEventListener('click',
  function(){
   bestillinger.innerHTML += "<p>Hindbærkage</p>"
   sum = sum + 100
   ialt.innerHTML = sum;
  })

  avo.addEventListener('click',
  function(){
   bestillinger.innerHTML += "<p>Avocado mad</p>"
   sum = sum + 60
   ialt.innerHTML = sum;
  })

  rejer.addEventListener('click',
  function(){
   bestillinger.innerHTML += "<p>Rejer</p>"
   sum = sum + 65
   ialt.innerHTML = sum;
  })

  granat.addEventListener('click',
  function(){
   bestillinger.innerHTML += "<p>Granatæble salat</p>"
   sum = sum + 50
   ialt.innerHTML = sum;
  })

  burgernr2.addEventListener('click',
  function(){
   bestillinger.innerHTML += "<p>Burger</p>"
   sum = sum + 75
   ialt.innerHTML = sum;
  })

  rundkage.addEventListener('click',
  function(){
   bestillinger.innerHTML += "<p>Sandkage</p>"
   sum = sum + 75
   ialt.innerHTML = sum;
  })

  fishchips.addEventListener('click',
  function(){
   bestillinger.innerHTML += '<p>Fish n´chips</p>'
   sum = sum + 75
   ialt.innerHTML = sum;
  })



  betal.addEventListener('click', function(){
      localStorage.setItem("newlist", bestillinger.innerHTML)
    
  })



	// Funktion der ændre sproget
	function changeLanguage(lang) {
    location.hash = lang;
    location.reload();
    }
  
    // Her bliver sproget defineret
    var language = {
    da: {
      welcome: "Bestil din mad her"
    },
    eng: {
      welcome: "Order your food her"
    },
    ger: {
      welcome: "Bestellen Sie Ihr Essen hier"
    }
    };
  
    // Her bliver der checket om den ønskede URL findes i koden
    if (window.location.hash) {
  
    // Her bliver teksten defineret
    if (window.location.hash == "#eng") {
      siteContent.textContent =
      language.eng.welcome;
    }
    else if (window.location.hash == "#ger") {
      siteContent.textContent =
      language.ger.welcome;
    }
    }