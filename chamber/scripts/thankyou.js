//const timestamp = document.querySelector('#timestamp');
//timestamp.value = new Date().toDateString();

const myInfo = new URLSearchParams(window.location.search);

document.querySelector('#subscriptionInfo').innerHTML = `
<p>New member ${myInfo.get('first')} ${myInfo.get('last')}</p>
<p>Your email is: ${myInfo.get('email')}</p>
<p>Your phone is: ${myInfo.get('phone')}</p>
<p>Representative of the organization/business: ${myInfo.get('organization')}</p>
<p>The form was loaded on: ${myInfo.get('timestamp')}</p>`;