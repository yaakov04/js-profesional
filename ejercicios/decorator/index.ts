class Field {
    errors: string[];
    input: HTMLInputElement;
  
    constructor(input: HTMLInputElement) {
      this.input = input;
      this.errors = [];
  
      let errorMessage = document.createElement('p');
      errorMessage.className = 'text-danger';
      this.input.parentNode.insertBefore(errorMessage, this.input.nextSibling);
  
      this.input.addEventListener('input', () => {
        this.errors = [];
        this.validate();
        errorMessage.innerText = this.errors[0] || '';
      });
    }
  
    validate() {}
  }
  
  function RequiredFieldDecorator(field: Field):Field {
    let validate = field.validate;

    field.validate = function(){
        validate();
        let value = field.input.value;
        if(!value){
            field.errors.push('Campo requerido');
        }
    }

    return field;
  }

  function EmaildFieldDecorator(field: Field):Field {
    let validate = field.validate;

    field.validate = function(){
        validate();
        
        let value = field.input.value;
        if(value.indexOf('@') === -1){
            field.errors.push('Debe ser un Email');
        }
    }
    
    return field;
  }
  
  let field = new Field(document.querySelector('#email'));
  field = RequiredFieldDecorator(field);
  field = EmaildFieldDecorator(field);