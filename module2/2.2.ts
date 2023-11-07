{
    type User1 = {
        name: string;
        age: number
    }

    const user1: User1 = {
        name: "Asad",
        age: 30
    }

    type UserWithRole1 = User1 & { role: string }

    const user2: UserWithRole1 = {
        name: "Asad",
        age: 30,
        role: "Engineer"
    }

    interface User2 {
        name: string;
        age: number
    }
    const user3: User2 = {
        name: "Asad",
        age: 30
    }

    interface UserWithRole2 extends User2 {
        role: string
    }

    const user4: UserWithRole2 = {
        name: "Asad",
        age: 30,
        role: "Engineer"
    }


    type Roll1 = number[]

    const rollNumber1: Roll1 = [3, 5, 2]

    interface Roll2 {
        [index: number]: number
    }

    const rollNumber2: Roll2 = [2, 34, 5]

    type Add1 = (num1: number, num2: number) => number

    const add1: Add1 = (num1, num2) => num1 + num2

    interface Add2 {
        (num1: number, num2: number): number
    }
    const add2: Add2 = (num1, num2) => num1 + num2



}