"use strict";
{
    var user_1 = {
        id: 321,
        name: {
            firstName: "Hafij",
            middleName: "Al",
            lastName: "Asad"
        },
        contactNo: 333444555,
        address: "dhaka"
    };
    var contactNo = user_1.contactNo, midName = user_1.name.middleName;
    var myFriends = ["Abul", "Babul", "Mamun", "Kabul", "Dabul", "Pabul"];
    var bestFriend = myFriends[2], rest = myFriends.slice(3);
    console.log(rest[0]);
}
