{
    // Ternary operator , Optional chaining, nullish coalescing operator

    const age: number = 15;

    if(age >= 18){
        console.log("adult");
    } else{
        console.log("not adult");
    }

    const isAdult = age >= 18? "adult" : "not adult";
    console.log({isAdult});

    //nullish coalescing operator

    // null / undefined ---> decision making

    const isAuthenticated = "";

    const result1 = isAuthenticated ?? "Guest"
    
    console.log({result1});

    const result2 = isAuthenticated ? isAuthenticated : "Guest"

    type User = {
        name: string;
        address: {
            city: string;
            road: string;
            presentAddress: string;
            permanentAddress?: string;
        }
    }

    const user: User = {
        name: "Asad",
        address: {
            city: "Mym",
            road: "10",
            presentAddress: "Moshakhali"
        }
    }

    const permanentAddress = user?.address?.permanentAddress ?? "No Permanent Address";
    console.log({permanentAddress});
}