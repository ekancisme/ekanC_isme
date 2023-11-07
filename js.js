document.addEventListener("DOMContentLoaded", function() {
    const passwordDiv = document.getElementById("password-div");
    const resultDiv = document.getElementById("result-div");
    const passwordInput = document.getElementById("password");
    const passwordButton = document.getElementById("password-button");
    const resultText = document.getElementById("result-text");

    passwordButton.addEventListener("click", function() {
        const password = passwordInput.value;
        if (password === "cuongle") {
            const answer = prompt("Em có nhớ hôm nay là ngày gì không (yes or no)?");
            if (answer && answer.toLowerCase() === "yes") {
                window.location.href = "https://ekancisme.github.io/ekanC_isme/hihi.html";
            } else {
                resultText.textContent = "Câu trả lời không đúng!";
                resultDiv.style.display = "block";
            }
        } else {
            resultText.textContent = "Mật khẩu không đúng!";
            resultDiv.style.display = "block";
        }
    });
});

