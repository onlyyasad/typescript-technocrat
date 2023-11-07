{
    // Type Alias

    type UserName = string

    const userName: UserName = "Asad"

    type IsAdmin = boolean;

    const isAdmin: IsAdmin = true
    
    type Student = {
        name: string;
        age: number;
        gender: string;
        contactNo?: string;
        address: string
    }

    const student1: Student = {
        name: "Asad",
        age: 30,
        gender: "Male",
        contactNo: "013333333",
        address: "Dhaka"
    }
    const student2: Student = {
        name: "Mamun",
        age: 30,
        gender: "Male",
        address: "Mymensingh"
    }

    type Add = (num1: number, num2: number) => number

    const add: Add = (num1, num2) => num1 + num2
}