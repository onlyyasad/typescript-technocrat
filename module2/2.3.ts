{
    const rollNumbers: number[] = [2, 3, 5];  //Regular number Array
    const rollNumbers2: Array<number> = [2, 3, 5];  // Generic number Array

    const mentors: string[] = ["Abul", "Babul", "Gabul"];  //Regular string Array
    const mentors2: Array<string> = ["Abul", "Babul", "Gabul"];  // Generic string Array

    const boolArray: boolean[] = [true, false, true]  //Regular boolean Array
    const boolArray2: Array<boolean> = [true, false, true]  // Generic boolean Array

    type GenericArray<T> = Array<T>

    const rollNumbers3: GenericArray<number> = [2, 3, 5]; 
    const mentors3: GenericArray<string> = ["Abul", "Babul", "Gabul"]; 
    const boolArray3: GenericArray<boolean> = [true, false, true] 

    // const rollNumbers3: Array<number> = [2, 3, 5]; 

    const user: GenericArray<{name: string, age: number}> = [
        {
            name: "Asad",
            age: 30
        },
        {
            name: "Abul",
            age: 33
        }
    ]

    const add = (x: number, y: number) => x+y


    //Generic Tuple

    type GenericTuple<X, Y> = [X, Y]

    const human: GenericTuple<string, string> = ["Mr. X", "Mrs. Y"]

    const userWithId: GenericTuple<number, {name: string, email: string}> = [23, {name: "Asad", email: "a@gmail.com"}]

}