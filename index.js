function message() {
    var name = document.getElementById('your-name');
    var program = document.getElementById('program');
    var check = document.getElementsByClassName('form-check-input');
    const success = document.getElementById('success');    

    if(name.value === '' || program.value === '') {
        alert('Please complete all required fields to submit your  request.')
    } else 
    {
        setTimeout(() => {
            document.location.reload();
        }, 6000)
        success.style.display = 'block';
        console.log("Form submitted successfully.")
         };
    } 