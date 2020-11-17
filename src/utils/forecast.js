const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/7578f84d49f5f6ddc877e5a053e74a0c/${latitude},${longitude}?units=si`
    request({ url, json: true }, (error, {body})=> {
        if(error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location!', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary +' It is currently ' + body.currently.temperature + ' degrees out. The high today is '+ body.daily.data[0].temperatureHigh + ' degrees, with a low of ' + body.daily.data[0].temperatureLow +' degrees. There is a ' + body.currently.precipProbability + ' % chance to rain.')
        }
    })
}

module.exports = forecast