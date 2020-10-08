console.log('it works')

$(document).ready(function () {
    $('.submit').click(function (event) {
     event.preventDefault()
     console.log("clicked button")

     var name = $(".name").val()
     var email = $(".email").val()
     var phone = $(".phone").val()
     var subject = $(".subject").val()
     var message = $('.message').val()
     var statusElm = $('.status ')

     if(name.length > 5 ) {
        statusElm.append('<div>name is valid</div>')
    } else {
        statusElm.append('<div>name is not valid</div>')
    }

    if(email.length > 5 && email.includes('@') && email.includes('.')){
        statusElm.append('<div>email is valid</div>')
    } else {
        statusElm.append('<div>email is not valid</div>')
    }

    if(phone.length > 10 ) {
        statusElm.append('<div>number is valid</div>')
    } else {
        statusElm.append('<div>number is not valid</div>')
    }

    if (subject.length > 2 ) {
        statusElm.append('<div>subject is valid</div>')
    } else {
        statusElm.append('<div>subject is not valid</div>')
    
    }
    if(message.length > 10 ) {
        statusElm.append('<div>message is valid</div>')
    } else {
        statusElm.append('<div>message is not valid</div>')
    }
    
    })
})