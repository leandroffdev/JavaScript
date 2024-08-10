class Inscricao {
    constructor(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
    // Getters
    getFirstName() {
        return this.firstName;
    }
    getLastName() {
        return this.lastName;
    }
    getEmail() {
        return this.email;
    }
    // Setters
    setFirstName(firstName) {
        this.firstName = firstName;
    }
    setLastName(lastName) {
        this.lastName = lastName;
    }
    setEmail(email) {
        this.email = email;
    }
}

const inscricoes = [];

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();     // previne de seguir o action do form
    
    const formData = new FormData(form);
    formData.append('age', '36');
    // console.log(formData.entries());
    for(const item of [...formData.entries()]) {
        // console.log(item[0] + ':', item[1]);
    }
    for(const item of formData.keys()) {
        console.log(item);
    }
    for(const item of formData.values()) {
        console.log(item);
    }
    console.log(formData.get('firstName'))
});