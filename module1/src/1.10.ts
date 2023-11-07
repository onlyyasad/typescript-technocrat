{
    // Union types

    // type FrontendDeveloper = "fakibazDeveloper" | "juniorDeveloper";
    // type FullstackDeveloper = "frontendDeveloper" | "expertDeveloper";
    // type Developer = FrontendDeveloper | FullstackDeveloper;

    // const newDeveloper: FrontendDeveloper = "juniorDeveloper"

    // const experiencedDeveloper: Developer = "expertDeveloper"

    // type User = {
    //     name: string;
    //     email: string;
    //     gender: "Male" | "Female";
    //     bloodGroup: "O+" | "A+" | "AB+"
    // }

    // const user1: User = {
    //     name: "Asad",
    //     email: "asad@email.com",
    //     gender: "Male",
    //     bloodGroup: "A+"
    // }


    type FrontendDeveloper = {
        skills: string[];
        designation1: "Frontend Developer"
    }
    type BackendDeveloper = {
        skills: string[];
        designation2: "Backend Developer"
    }

    type FullstackDeveloper = FrontendDeveloper & BackendDeveloper

    const fullstackDeveloper: FullstackDeveloper = {
        skills: ["HTML", "CSS", "Express"],
        designation1: "Frontend Developer",
        designation2: "Backend Developer"
    }
}