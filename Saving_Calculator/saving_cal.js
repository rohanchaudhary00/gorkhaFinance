// For maximum investment input and Dont give user to input more value 
const planSelect = document.getElementById("planSelect");
const poundInput = document.getElementById("poundInput");
const maxValues = {
    "Option1 Basic Saving Plan": 20000,
    "Option2 Savings Plan Plus": 30000,
    "Option3 Managed Stock Investments": Infinity, // Set to Infinity for unlimited
    // Add other options and their max values here
};
planSelect.addEventListener("change", function () {
    const selectedOption = planSelect.value;
    const maxLimit = maxValues[selectedOption];

    if (maxLimit !== undefined) {
        poundInput.max = maxLimit;
        poundInput.setCustomValidity(""); // Clear any previous validation message
    }
    poundInput.value = ""; // Clear the input when changing options
});
poundInput.addEventListener("input", function () {
    const selectedOption = planSelect.value;
    const maxLimit = maxValues[selectedOption];

    if (maxLimit !== undefined && parseFloat(poundInput.value) > maxLimit) {
        poundInput.value = maxLimit; // Limit input value to the maxLimit
    }
});



// For showing up predictReturn according to investment plan choosen 
    const PlanSelect = document.getElementById("planSelect");
    const predictedReturnContainer = document.getElementById("predictedReturnContainer");
    const predictedReturnSelect = document.getElementById("predictedReturn");

    PlanSelect.addEventListener("change", function () {
        const selectedOption = PlanSelect.value;

        if (selectedOption === "Option1 Basic Saving Plan" || selectedOption === "Option2 Savings Plan Plus" || selectedOption === "Option3 Managed Stock Investments") {
            predictedReturnContainer.style.display = "block";

            // Show the predicted return corresponding to the selected plan
            if (selectedOption === "Option1 Basic Saving Plan") {
                predictedReturnSelect.value = "2.4%";
            } else if (selectedOption === "Option2 Savings Plan Plus") {
                predictedReturnSelect.value = "5.5%";
            } else if (selectedOption === "Option3 Managed Stock Investments") {
                predictedReturnSelect.value = "23%";
            }
        }
        // } else {
        //     predictedReturnContainer.style.display = "none";
        // }
    });


// For showing taxRate according to investment plan choosen 
const PlansSelect = document.getElementById("planSelect");
const taxContainer = document.getElementById("taxContainer");
const tax = document.getElementById("tax");

PlansSelect.addEventListener("change", function () {
    const selectedOption = PlansSelect.value;

    if (selectedOption === "Option1 Basic Saving Plan" || selectedOption === "Option2 Savings Plan Plus" || selectedOption === "Option3 Managed Stock Investments") {
        predictedReturnContainer.style.display = "block";

        // Show the predicted return corresponding to the selected plan
        if (selectedOption === "Option1 Basic Saving Plan") {
            tax.value = "0%";
        } else if (selectedOption === "Option2 Savings Plan Plus") {
            tax.value = "10%";
        } else if (selectedOption === "Option3 Managed Stock Investments") {
           tax.value = "20%";
        }} 
});


// For showing up RBXS fee according to investment plan choosen 
const PlanedSelect = document.getElementById("planSelect");
const rbxsContainer = document.getElementById("rbxsContainer");
const rbxs = document.getElementById("rbxsFee");

PlanedSelect.addEventListener("change", function () {
    const selectedOption = PlanedSelect.value;

    if (selectedOption === "Option1 Basic Saving Plan" || selectedOption === "Option2 Savings Plan Plus" || selectedOption === "Option3 Managed Stock Investments") {
        predictedReturnContainer.style.display = "block";

        // Show the predicted return corresponding to the selected plan
        if (selectedOption === "Option1 Basic Saving Plan") {
            rbxs.value = "0.25%";
        } else if (selectedOption === "Option2 Savings Plan Plus") {
            rbxs.value = "0.3%";
        } else if (selectedOption === "Option3 Managed Stock Investments") {
           rbxs.value = "1.3%"

        }
    }
});


// For Calculation Result 
function calculate() {
    const input = parseFloat(document.getElementById("poundInput").value);
    const predictedReturn = parseFloat(document.getElementById("predictedReturn").value);
    const rbxsFee = parseFloat(document.getElementById("rbxsFee").value);
    const taxRate = parseFloat(document.getElementById("tax").value);
    const rbxsValueElement = document.getElementById("rbxsValue");
    const profitValue = document.getElementById("profitValue");
    const totalValue = document.getElementById("totalValue");
    const taxValue = document.getElementById("taxValue");
    const resultDisplay = document.getElementById("resultDisplay");
    const rbxsDisplay = document.getElementById("rbxsDisplay");
    const totalDisplay = document.getElementById("totalDisplay");
    const taxDisplay = document.getElementById("taxDisplay");

    const selectedPlan = document.getElementById("planSelect").value;
    const selectedYear = document.getElementById("year").value;

    let profitMultiplier, rbxsMultiplier;

    if (selectedPlan === "Option1 Basic Saving Plan") {
        if (selectedYear === "year1") {
            profitMultiplier = 1;
            rbxsMultiplier = 12;
        } else if (selectedYear === "year5") {
            profitMultiplier = 5;
            rbxsMultiplier = 60;
        } else if (selectedYear === "year10") {
            profitMultiplier = 10;
            rbxsMultiplier = 120;
        }

        // Perform calculations for Option1 Basic Saving Plan

        const rbxs =(rbxsFee * rbxsMultiplier);
        rbxsValueElement.textContent = rbxs.toFixed(2);
        rbxsDisplay.style.display = "block";

        const profit = input * profitMultiplier * (predictedReturn / 100) - rbxs;
        profitValue.textContent = profit.toFixed(2);
        resultDisplay.style.display = "block";

        const total = input + profit;
        totalValue.textContent = total.toFixed(2);
        totalDisplay.style.display = "block";

        const tax = profit * (taxRate / 100);
        taxValue.textContent = tax.toFixed(2);
        taxDisplay.style.display = "block";
        //For option 2 Saving Plan Plus
    } else if (selectedPlan === "Option2 Savings Plan Plus") {
        if (selectedYear === "year1") {
            profitMultiplier = 1;
            rbxsMultiplier = 12;
        } else if (selectedYear === "year5") {
            profitMultiplier = 5;
            rbxsMultiplier = 60;
        } else if (selectedYear === "year10") {
            profitMultiplier = 10;
            rbxsMultiplier = 120;
        }

        // Perform calculations for Option2 Savings Plan Plus

        const rbxs =  (rbxsFee * rbxsMultiplier);
        rbxsValueElement.textContent = rbxs.toFixed(2);
        rbxsDisplay.style.display = "block";

        const profit = input * profitMultiplier * (predictedReturn / 100) - rbxs;
        profitValue.textContent = profit.toFixed(2);

        if (profit >= 12000) {
            const taxPaid = profit * (taxRate / 100);
            taxValue.textContent = taxPaid.toFixed(2);
            taxDisplay.style.display = "block";
        } else {
            taxValue.textContent = "";
            taxDisplay.style.display = "none";
        }

        const total = input + profit - (profit >= 12000 ? (profit * (taxRate / 100)) : 0);
        totalValue.textContent = total.toFixed(2);
        totalDisplay.style.display = "block";

        resultDisplay.style.display = "block";
        // For Option3 Managed Stock Investment 
    } else if (selectedPlan === "Option3 Managed Stock Investments") {
        if (selectedYear === "year1") {
            profitMultiplier = 1;
            rbxsMultiplier = 12;
        } else if (selectedYear === "year5") {
            profitMultiplier = 5;
            rbxsMultiplier = 60;
        } else if (selectedYear === "year10") {
            profitMultiplier = 10;
            rbxsMultiplier = 120;
        }

        // Perform calculations for Option3 Managed Stock Investments

        const rbxs = rbxsFee * rbxsMultiplier;
        rbxsValueElement.textContent = rbxs.toFixed(2);
        rbxsDisplay.style.display = "block";

        const profit = input * profitMultiplier * (predictedReturn / 100) - rbxs;
        profitValue.textContent = profit.toFixed(2);

        if (profit >= 40000) {
            const taxPaid = profit * (taxRate / 100);
            taxValue.textContent = taxPaid.toFixed(2);
            taxDisplay.style.display = "block";
        } else {
            taxValue.textContent = "";
            taxDisplay.style.display = "none";
        }
        
        const total = input + profit - ((profit >= 12000) ? (profit * (taxRate / 100)) : 0);
        totalValue.textContent = total.toFixed(2);
        totalDisplay.style.display = "block";
        
        resultDisplay.style.display = "block";
        
    } else {
        // Hide the result displays for other options
        rbxsDisplay.style.display = "none";
        totalDisplay.style.display = "none";
        resultDisplay.style.display = "none";
    }
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

function clearResult(){
    document.getElementById("rbxsDisplay").innerHTML=" ";
    document.getElementById("taxDisplay").innerHTML=" ";
    document.getElementById("resultDisplay").innerHTML=" ";
    document.getElementById("totalDisplay").innerHTML=" ";
}