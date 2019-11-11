const express = require('express');
const bodyParser = require('body-parser');
let app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app
    .route('/jetpacks/:id?')
    .get(require('./controller/Jetpack/GetJetpackController'))
    .post(require('./controller/Jetpack/CreateJetpackController'));
app
    .route('/deletejetpack/:id?')
    .get(require('./controller/Jetpack/DeleteJetpackController'));
app
    .route('/updateName/:id?')
    .post(require('./controller/Jetpack/UpdateNameJetpackController'));
app
    .route('/updateImage/:id?')
    .post(require('./controller/Jetpack/UpdateImageJetpackController'));
app
    .route('/bookings/')
    .get(require('./controller/Booking/GetBookingController'))
    .post(require('./controller/Booking/CreateBookingController'));

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
