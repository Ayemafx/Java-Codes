const matrix = [
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "QWERTYUIOPASDFGHJKLZXCVBNM",
    "MNBVCXZLKJHGFDSAPOIUYTREWQ",
    "ZXCVBNMASDFGHJKLQWERTYUIOP"
];

let isEncryptMode = true;

document.getElementById('encrypt-mode').addEventListener('click', () => isEncryptMode = true);
document.getElementById('decrypt-mode').addEventListener('click', () => isEncryptMode = false);

function processText() {
    const inputText = document.getElementById('inputText').value.toUpperCase();
    let outputText = '';

    let c = 1;
    for (let i = 0; i < inputText.length; i++) {
        const char = inputText[i];
        if (matrix[0].includes(char)) {
            if (c === 4) c = 1;

            const index = isEncryptMode
                ? matrix[0].indexOf(char)
                : matrix[c].indexOf(char);

            outputText += isEncryptMode
                ? matrix[c][index]
                : matrix[0][index];

            c++;
        } else {
            outputText += char;
        }
    }

    document.getElementById('outputText').textContent = outputText;
}
