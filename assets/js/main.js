function Calculadora() {
    this.display = document.querySelector('.display')

    this.inicia = () => {
        this.clear()
        this.display.focus()
        this.capturaEnter() 
        this.capturaCliques()
    }

    this.capturaEnter = function() {
        this.display.addEventListener('keyup', (event) => {
            if (event.keyCode === 13)
            this.realizaConta()
        });
    }

    this.realizaConta = () => {
        try {
            const conta = eval(this.display.value)
            
            if(!conta && conta != 0) {
                alert('Conta inválida')
                return
            }
            
            this.display.value = conta

        } catch(err) {
            alert('Conta inválida')
            return
        }
    }

    this.capturaCliques = () => {
        document.addEventListener('click', (event) => {
            const elemento = event.target
            if (elemento.classList.contains('btn-num') || elemento.classList.contains('btn-signal') || elemento.classList.contains('btn-parentheses')) this.addNumDisplay(elemento)
            if (elemento.classList.contains('btn-clear')) this.clear()
            if(elemento.classList.contains('btn-del')) this.del()
            if(elemento.classList.contains('btn-equal')) this.realizaConta()
        })
    }

    this.addNumDisplay = elemento => {
        this.display.value += elemento.innerText;
        this.display.focus()
    }
    this.clear = function() {
        this.display.value = ''
    }
    
    this.del = () => this.display.value = this.display.value.slice(0, -1);


}

const calculadora = new Calculadora();
calculadora.inicia()
