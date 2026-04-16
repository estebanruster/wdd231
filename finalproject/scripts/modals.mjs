export function modals() {
    //Asigning buttons to constants to make the addEventListener
    const privatebutton = document.querySelector('#private');
    const closeprivate = document.querySelector('#close-private');

    const businessbutton = document.querySelector('#business');
    const closebusiness = document.querySelector('#close-business');

    //Asigning modals to const
    const privatemodal = document.querySelector('#modal-private');
    const businessmodal = document.querySelector('#modal-business');

    //addEventListener to open and close modal

    if (privatebutton) {
        privatebutton.addEventListener('click', () => {
            privatemodal.showModal();
        });
    }

    if (businessbutton) {
        businessbutton.addEventListener('click', () => {
            businessmodal.showModal();
        });
    }

    if (closeprivate) {
        closeprivate.addEventListener('click', () => {
            privatemodal.close();
        });
    }

    if (closebusiness) {
        closebusiness.addEventListener('click', () => {
            businessmodal.close();
        });
    }
}