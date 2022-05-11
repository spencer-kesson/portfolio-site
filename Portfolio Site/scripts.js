/* code to implement popup window (modal) for portfolio descriptions */
// initialize modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("project-desc");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
function portfolioClick(portfolio) {
  modal.style.display = "block";

  // TODO: change if statement to switch statement - OR implement array containing all criteria that can have portfolio loop through 
  var modalLocation = document.getElementById('modal-text');
  var modalImg = document.getElementById('modal-img');
  if(portfolio == 'mentor') {
        modalLocation.innerHTML = document.getElementById('mentor-text').innerHTML;
        modalImg.innerHTML = document.getElementById('mentor-img').innerHTML;
    }     
    else if (portfolio == 'restaurant-search') {
        modalLocation.innerHTML = document.getElementById('rsearch-text').innerHTML;
        modalImg.innerHTML = document.getElementById('rsearch-img').innerHTML;
    }
    else if (portfolio == 'jbs-restaurant'){
        modalLocation.innerHTML = document.getElementById('jbs-text').innerHTML;
        modalImg.innerHTML = document.getElementById('jbs-img').innerHTML;
    }
    else if(portfolio == 'invest'){
        modalLocation.innerHTML = document.getElementById('invest-text').innerHTML;
        modalImg.innerHTML = document.getElementById('invest-img').innerHTML;
    }
    else if(portfolio == 'color-picker'){
        modalLocation.innerHTML = document.getElementById('color-text').innerHTML;
        modalImg.innerHTML = document.getElementById('color-img').innerHTML;
    }
    else if(portfolio == 'calculator') {
        modalLocation.innerHTML = document.getElementById('calculator-text').innerHTML;
        modalImg.innerHTML = document.getElementById('calculator-img').innerHTML;
    }
    else if(portfolio == 'student-mgmt') {
        modalLocation.innerHTML = document.getElementById('student-mgmt-text').innerHTML;
        modalImg.innerHTML = document.getElementById('student-mgmt-img').innerHTML;
    }
        
    else if(portfolio == 'checkout-system') {
        modalLocation.innerHTML = document.getElementById('library-checkout-text').innerHTML;
        modalImg.innerHTML = document.getElementById('library-checkout-img').innerHTML;
    }
    else if(portfolio == 'manager') {
        modalLocation.innerHTML = document.getElementById('manager-text').innerHTML;
        modalImg.innerHTML = document.getElementById('manager-img').innerHTML;
    }
    else if(portfolio == 'chat-server'){
        modalLocation.innerHTML = document.getElementById('chat-text').innerHTML;
        modalImg.innerHTML = document.getElementById('chat-img').innerHTML;
    }    
    else if(portfolio == 'phone-1'){
        modalLocation.innerHTML = document.getElementById('mob1-text').innerHTML;
        modalImg.innerHTML = document.getElementById('mob1-img').innerHTML;
    }    
    else if(portfolio == 'phone-2') {
        modalLocation.innerHTML = document.getElementById('mob2-text').innerHTML;
        modalImg.innerHTML = document.getElementById('mob2-img').innerHTML;
    }
    else if(portfolio == 'phone-3'){
        modalLocation.innerHTML = document.getElementById('mob3-text').innerHTML;
        modalImg.innerHTML = document.getElementById('mob3-img').innerHTML;
    }
    else if(portfolio == 'sql-dog') {
        modalLocation.innerHTML = document.getElementById('dog-text').innerHTML;
        modalImg.innerHTML = document.getElementById('dog-img').innerHTML;
    }
    else if(portfolio == 'music-1') {
        modalLocation.innerHTML = document.getElementById('music-1-text').innerHTML;
        modalImg.innerHTML = document.getElementById('music-1-img').innerHTML;
    }
    else if(portfolio == 'music-2') {
        modalLocation.innerHTML = document.getElementById('music-2-text').innerHTML;
        modalImg.innerHTML = document.getElementById('music-2-img').innerHTML;
    }
    else if(portfolio == 'music-3') {
        modalLocation.innerHTML = document.getElementById('music-3-text').innerHTML;
        modalImg.innerHTML = document.getElementById('music-3-img').innerHTML;
    }
    



}

// exit modal on click of x button
span.onclick = function() {
  modal.style.display = "none";
}

// exit modal on click anywhere outside of modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}