$('#login-form').submit(event => {
    event.preventDefault();
    $.ajax({
        type: 'POST',
        url: '/api/login/',
        headers: {
            'X-CSRFToken': csrftoken,
        },
        data: {
            username: $('#email').val(),
            password: $('#password').val(),
        },
        success: (data) => {
            if (data.status === 'Successful') {
                window.location.href = '/dashboard/';
            }
            else {
                alert('Username or Password is incorrect');
            }
        },
        error: (err) => {
            console.log(err);
        }
    });
})