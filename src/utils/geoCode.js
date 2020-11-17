const request = require('request')

const geoCode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiYXl5b3ViYmVuIiwiYSI6ImNrZ2d0cDI1ZjA0c2YydGxqN2o2Ym1ibXoifQ.unU5hzMkcLv7eQ6hU4-Wvg&limit=1`
    
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to GeoCode service!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location!', undefined)
        } else {
            const data = {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            }
            callback(undefined, data)
        } 
    }) 
}

module.exports = geoCode