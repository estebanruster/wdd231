export function thankyou(timestamp) {
    //Using the URLSearchParams, get the info in the string in the url in window.location.search
    const myInfo = new URLSearchParams(window.location.search);

    const subinfo = document.querySelector('#subscriptionInfo')
    //Constructing the subscription thankyou message in thankyou.html

    if (subinfo) {
        subinfo.innerHTML = `
        <p>New subscriptor: ${myInfo.get('first')} ${myInfo.get('last')}</p>
        <p>Your email is: ${myInfo.get('email')}</p>
        <p>Your phone is: ${myInfo.get('phone')}</p>
        <p>The form was loaded on: ${myInfo.get('timestamp')}</p>`;
    }
}