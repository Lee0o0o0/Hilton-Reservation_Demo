import {browser} from "protractor";
import {ReservationResolver} from "../../resolvers/Reservation.Resolver";
import {ReservationObj} from "../../resolvers/Reservation.Obj";
const { Given, Then, When} = require( '@cucumber/cucumber');
const { assert } = require( 'chai');

let user;
let reservationInfo : ReservationObj;
let resolver : ReservationResolver

Given('User is in Reservation Page', function () {
    //mock the Reservation Page
    browser.get("http://localhost:4000/graphql")
});
When('User provide the userName \'{username}\', the phoneNumber \'{phoneNumber}\', the arriveTime \'{phoneNumber}\', the tableSize \'{phoneNumber}\'',
    function (userName, phoneNumber, arriveTime, tableSize) {
    user = {
        userName: userName,
        phoneNumber: phoneNumber,
        arriveTime: arriveTime,
        tableSize: tableSize
    }
});
When('User click on the book button', async function () {
    reservationInfo = await resolver.addReservation(user)
});
Then('User should see the status of the reservation \'Booked\'', function () {
    assert.equal('Booked', reservationInfo.reservationStatus);
})