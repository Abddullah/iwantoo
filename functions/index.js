const functions = require('firebase-functions');
const fetch = require('node-fetch').default
const admin = require('firebase-admin');
admin.initializeApp();


exports.sendNotification = functions.database.ref("/pushNotifications/{newUser}").onCreate(event => {

    admin.database().ref('/users').on('child_added', (snapshot) => {

        fetch('https://exp.host/--/api/v2/push/send', {
            method: 'POST',
            headers: {
                "Accept": 'application/json',
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                to: snapshot.val().expoPushToken,
                sound: "default",
                title: event._data.title,
                body: event._data.body,
                data: { data: "goes here" },
                _displayInForeground: true,
            })
        })
    });
});



exports.sendNotificationOnUpdate = functions.database.ref("/pushNotifications/{newUser}").onUpdate(event => {

    admin.database().ref('/users').on('child_added', (snapshot) => {

        fetch('https://exp.host/--/api/v2/push/send', {
            method: 'POST',
            headers: {
                "Accept": 'application/json',
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                to: snapshot.val().expoPushToken,
                sound: "default",
                title: event.after._data.title,
                body: event.after._data.body,
                data: { data: "goes here" },
                _displayInForeground: true,
            })
        })
    });
});


