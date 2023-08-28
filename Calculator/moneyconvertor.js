        function displayErrorMessage(message) {
            document.getElementById('result').textContent = message;
        }

        function convertCurrency() {
            const amountInput = document.getElementById('amount');
            const amount = parseFloat(amountInput.value);

            if (isNaN(amount) || amount < 0) {
                displayErrorMessage('Please enter a positive number.');
                return; // Exit the function if input is not valid
            }

            const fromCurrency = document.getElementById('fromCurrency').value;
            const toCurrency = document.getElementById('toCurrency').value;

            const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    const rate = data.rates[toCurrency];
                    const convertedAmount = (amount * rate).toFixed(2);

                    document.getElementById('result').textContent = `${amount} ${fromCurrency} is equal to ${convertedAmount} ${toCurrency}`;
                })
                .catch(error => {
                    document.getElementById('result').textContent = 'Error fetching exchange rate data.';
                });
        }

        function clearResult(){
            document.getElementById("result").innerHTML="";
            document.getElementById("amount").value=" ";
        }
// Get the button element
var backToTopButton = document.getElementById("backToTopBtn");

// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Scroll to the top of the document when the button is clicked
backToTopButton.addEventListener("click", function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});
