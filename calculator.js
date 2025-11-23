    const display = document.querySelector(".grid-items1");
    let expression = "";


    document.querySelectorAll(".grid div").forEach(btn => {
        btn.addEventListener("click", () => {
            const value = btn.textContent.trim();

            if (value === "AC") {
                expression = "";
                display.textContent = "";
            } 
            else if (value === "X") {
                expression += "*"; 
                display.textContent = expression.replace("*", "×");
            } 
            else if (value === "/") {
                expression += "/";
                display.textContent = expression;
            }
            else if (value === "=") {
                try {
                    expression = eval(expression).toString();
                    display.textContent = expression;
                } catch {
                    display.textContent = "Error";
                    expression = "";
                }
            } 
            else {
                expression += value;
                display.textContent = expression;
            }
        });
    });