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
    privatebutton.addEventListener('click', () => {
        privatemodal.showModal();
    });

    businessbutton.addEventListener('click', () => {
        businessmodal.showModal();
    });

    closeprivate.addEventListener('click', () => {
        privatemodal.close();
    });

    closebusiness.addEventListener('click', () => {
        businessmodal.close();
    });
}