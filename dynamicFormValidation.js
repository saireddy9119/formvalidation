//DYNAMIC FORM VALIDATION IN JAVASCRIPT
class DynamicFormValidation {
    constructor(inputs) {
        this.inputs = inputs;
        this.errors = {};
        this.validationRules = {      //REGULAR EXPRESSIONS FOR VALIDATE INPUTS
            text: /^[a-zA-Z\s]+$/,
            email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            password: /^.{6,}$/,//PASSWORD SHOULD BE ATLEAST 6 DIGITS
        };
    }
    //METHOD TO VALIDATE INPUTS
    validate() {
        this.errors = {};

        //ITERATE THROUGH EACH INPUT
        this.inputs.forEach(input => {
            const value = input.value.trim();
            const rules = input.validation.split(',');

            rules.forEach(rule => {
                //CHECK VALUE MATCHES WITH REGULAR EXPRESSION VALUE
                if (!this.validationRules[rule].test(value)) {
                    //ADD ERROR MESSAGE IF IT IS NOT VALID
                    if (!this.errors[input.name]) {
                        this.errors[input.name] = [];
                    }
                    this.errors[input.name].push(`Invalid ${rule} format`);
                }
            });
        });

        this.displayErrors();
    }

    //DISPLAY ERRORS IF INPUT IS INVALID
    displayErrors() {
        for (const input in this.errors) {
            const errorMessages = this.errors[input];
            errorMessages.forEach(errorMessage => {
                console.log(`${input} : ${errorMessage}`);
            });
        }
    }
}

export default DynamicFormValidation;

