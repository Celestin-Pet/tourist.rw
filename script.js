function _(id) {
	return document.getElementById(id);
}
function includeHTML() {
	let z, i, elmnt, file, xhttp;
		z = document.getElementsByTagName('*');
	for (i = 0; i < z.length; i++) {
		elmnt = z[i];
		file = elmnt.getAttribute('w3-include-html');
		if (file) {
			xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function () {
				if (this.readyState == 4) {
					if (this.status == 200) {
						elmnt.innerHTML = this.responseText;
					}
					if (this.status == 404) {
						elmnt.innerHTML = 'Page not found.';
					}
					
					elmnt.removeAttribute('w3-include-html');
					includeHTML();
				}
			};
			xhttp.open('GET', file, true);
			xhttp.send();
			
			return;
		}
	}

	
	document.logo.src = './images/logo.png';

	// In menu section, the first section below navbar
	document.querySelector('#company-title').innerHTML = 'Faustin Travels';
	document.querySelector('#company-desc').innerHTML = `
					<strong>Some of your best ideas come when you are on vacation</strong> `;

	// In who we are section
	document.querySelector(
		'#status'
	).innerHTML = `<p> Here we have plan for your favorite tour in different places such as Country side tours, City tours. we have also different services like Airport Pick up and Drop off just book in advance by contacting us either on emails or Phone calls.</p>
					`;

	document.querySelector('#email').innerHTML = 'info@faustintravels.rw';
	document.querySelector('#phone').innerHTML = '+250785644381/+250792407193';
	
	//Footer
	document.getElementById("copyright").innerHTML="Faustin Travels &copy; " + new Date().getFullYear();

	
}

function click_hamburger() {
	document.getElementById('hamburger_btn').click();
}

function send_email() {
	function _(id) {
		return document.getElementById(id);
	}
	var status = _('response_status');
	if (
		_('email_from').value !== '' &&
		_('email_from').value.includes('@') &&
		_('contact_message').value !== ''
	) {
		status.innerHTML = 'Sending message ...';
		var formdata = new FormData();
		formdata.append('email', _('email_from').value);
		formdata.append('message', _('contact_message').value);
		var ajax = new XMLHttpRequest();
		ajax.open('POST', 'send_email.php');
		ajax.onreadystatechange = function () {
			if (ajax.readyState == 4 && ajax.status == 200) {
				if (ajax.responseText == 'success') {
					_('email_from').value = '';
					_('contact_message').value = '';
					status.innerHTML = 'Thanks your message is sent';
					setTimeout(function () {
						status.innerHTML = '';
					}, 5000);
				} else {
					status.innerHTML = ajax.responseText;
					_('my_btn').disabled = false;
					setTimeout(function () {
						status.innerHTML = '';
					}, 5000);
				}
			}
		};
		ajax.send(formdata);
	}
}
// ------ script for gallery ---------
window.onload = ()=> {
const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".image");
    filterItem.onclick = (selectedItem)=>{
        if(selectedItem.target.classList.contains("item")){
            filterItem.querySelector(".active").classList.remove("active");
            selectedItem.target.classList.add("active");
            let filterName = selectedItem.target.getAttribute("data-name");
           filterImg.forEach((image)=>{
               let filterImages = image.getAttribute("data-name");
               
               if((filterImages == filterName) || filterName == "all"){
                image.classList.remove("hide");
                   image.classList.add("show");
               }else{
                image.classList.add("hide");
                image.classList.remove("show");
               }
           });
        }
    }
}
