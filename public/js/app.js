console.log('Client side JavaScript is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const msg_1 = document.querySelector('#msg-1')
const msg_2 = document.querySelector('#msg-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    msg_1.textContent = 'Loading ...'
    msg_2.textContent = ''

    fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            if(data.error) {
                msg_1.textContent = data.error
            } else {
                msg_1.textContent = data.location
                msg_2.textContent = data.forecast
            }
        })
    })
    //console.log(location)
})