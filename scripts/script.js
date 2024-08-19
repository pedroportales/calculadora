document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    let currentInput = '';
    let operator = '';
    let firstOperand = '';

    // Função para atualizar a tela
    function updateDisplay(value) {
        display.textContent = value || '0';
    }

    // Função para realizar a operação
    function calculate() {
        const [num1, num2] = [parseFloat(firstOperand), parseFloat(currentInput)];
        switch (operator) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '/':
                return num1 / num2;
            default:
                return num2;
        }
    }

    // Adiciona eventos aos botões
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', () => {
            const value = button.dataset.value;

            if (value === 'C') {
                currentInput = '';
                operator = '';
                firstOperand = '';
                updateDisplay();
                return;
            }

            if (button.classList.contains('operator')) {
                if (currentInput !== '') {
                    firstOperand = calculate();
                    currentInput = '';
                }
                operator = value;
                return;
            }

            if (button.classList.contains('equal')) {
                if (currentInput !== '' && operator !== '' && firstOperand !== '') {
                    currentInput = calculate();
                    operator = '';
                    firstOperand = '';
                }
                updateDisplay(currentInput);
                return;
            }

            if (value === '.' && !currentInput.includes('.')) {
                currentInput += value;
            } else if (value !== '.') {
                currentInput += value;
            }

            updateDisplay(currentInput);
        });
    });
});
