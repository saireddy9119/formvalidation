import Form from './dynamicFormValidation.js';

//FORM INPUTS;
const inputs = [
    { name: 'username', type: 'text', value: 'JohnDoe', validation: 'text' },
    { name: 'email', type: 'email', value: 'john@example.com', validation: 'email' },
    { name: 'password', type: 'password', value: 'Sai', validation: 'password' },
];


let form =new Form(inputs);
form.validate();
