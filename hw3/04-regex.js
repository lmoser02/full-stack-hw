
function checkEmail(email) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (!reg.test(email)) return false;
    return true;
}

function email_val() {

    let email = document.getElementById('input').value;
    let output = document.getElementById('message');
    if(checkEmail(email))
    {
        output.className = 'text-success';
        output.textContent = 'Thank you. This is a valid email address.'
    }
    else 
    {
        output.className = 'text-danger';
        output.textContent = 'Error: Please enter a valid email address.'
    }
};