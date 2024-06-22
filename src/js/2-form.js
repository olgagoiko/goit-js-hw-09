let formData = {
    email: '',
    message: ''
};

const form = document.querySelector('.feedback-form');

const saveToLocalStorage = () => {
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const populateFormFromLocalStorage = () => {
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
        formData = JSON.parse(savedData);
        form.elements.email.value = formData.email || '';
        form.elements.message.value = formData.message || '';
    }
};

form.addEventListener('input', (event) => {
    formData[event.target.name] = event.target.value.trim();
    saveToLocalStorage();
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!email || !message) {
        alert('Fill please all fields');
        return;
    }

    console.log(formData);

    localStorage.removeItem('feedback-form-state');
    formData = { email: '', message: '' };
    form.reset();
});

populateFormFromLocalStorage();
