{
    const user = {
        id: 321,
        name: {
            firstName: "Hafij",
            middleName: "Al",
            lastName: "Asad"
        },
        contactNo: 333444555,
        address: "dhaka"
    };

    const {contactNo, name: {middleName: midName}} = user;

    const myFriends = ["Abul", "Babul", "Mamun", "Kabul", "Dabul", "Pabul"]

    const [,, bestFriend, ...rest] = myFriends;
    console.log(rest[0]);
    // output: "Kabul"
}