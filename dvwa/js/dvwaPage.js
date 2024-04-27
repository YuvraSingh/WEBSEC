/* Help popup */
// function toggleMenu() {
//   var menu = document.getElementById('vulnerability-menu');
//   var button = document.getElementById('toggleMenuButton');
//   if (menu.style.display === 'none' || menu.style.display === '') {
//       menu.style.display = 'block';
//       button.textContent = 'Hide Vulnerabilities'; // Change button text to 'Hide'
//   } else {
//       menu.style.display = 'none';
//       button.textContent = 'Show Vulnerabilities'; // Change back the button text to 'Show'
//   }
// }
function popUp(URL) {
	day = new Date();
	id = day.getTime();
	window.open(URL, '" + id + "', 'toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=1,width=800,height=300,left=540,top=250');
	//eval("page" + id + " = window.open(URL, '" + id + "', 'toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=1,width=800,height=300,left=540,top=250');");
}

/* Form validation */

function validate_required(field,alerttxt)
{
with (field) {
  if (value==null||value=="") {
    alert(alerttxt);return false;
  }
  else {
    return true;
  }
 }
}

function validateGuestbookForm(thisform) {
with (thisform) {

  // Guestbook form
  if (validate_required(txtName,"Name can not be empty.")==false)
  {txtName.focus();return false;}
  
  if (validate_required(mtxMessage,"Message can not be empty.")==false)
  {mtxMessage.focus();return false;}
  
  }
}

function confirmClearGuestbook() {
	return confirm("Are you sure you want to clear the guestbook?");
}
