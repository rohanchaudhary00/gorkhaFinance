const passwordInputs = document.querySelectorAll('.password-input');

passwordInputs.forEach((input) => {
    const toggle = input.nextElementSibling;

    toggle.addEventListener('click', () => {
        if (input.type === 'password') {
            input.type = 'text';
            toggle.innerHTML = '<i class="fa fa-eye"></i>';
        } else {
            input.type = 'password';
            toggle.innerHTML = '<i class="fa fa-eye-slash"></i>';
        }
    });

    input.addEventListener('input', () => {
        if (input.value === '') {
            input.type = 'password';
            toggle.style.display = 'none';
        } else {
            toggle.style.display = 'block';
        }
    });
});

document.getElementById('password1').addEventListener('input', checkPasswordMatch);
document.getElementById('password2').addEventListener('input', checkPasswordMatch);

function checkPasswordMatch() {
    var password1 = document.getElementById('password1').value;
    var password2 = document.getElementById('password2').value;
    
    var errorDiv = document.getElementById('error');
    
    if (password1 === password2) {
        errorDiv.textContent = ''; // Clear any previous error messages
    } else {
        errorDiv.textContent = 'Passwords do not match.';
    }
}

async function validateAndCreateAccount() {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;

    var errorDiv = document.getElementById('error');

    if (firstname === "" || lastname === "" || email === "" || password1 === "" || password2 === "") {
        errorDiv.textContent = "Please fill in all required fields.";
    } else if (password1 !== password2) {
        errorDiv.textContent = "Passwords do not match.";
    } else {
        // Call the createAccount() function here if all validations pass
        await createAccount();
    }
}

async function createAccount() {
    const body = {
        FirstName: document.getElementById('firstname').value,
        LastName: document.getElementById('lastname').value,
        DateOfBirth: document.getElementById('date').value,
        Email: document.getElementById('email').value,
        Password: document.getElementById('password2').value     
    };
    
    try {
        const response = await fetch('https://localhost:7163/api/UserValues', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
            },
        });
        
        if (!response.ok) {
            throw new Error('Failed to create Account');
        }
        
        alert('Account created successfully');
        
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to create Account, Please try again later.');
    }
}