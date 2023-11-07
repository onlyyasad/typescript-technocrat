{
    const bros1: string[] = ["Habib", "Wahid", "Rupom"]
    const bros2: string[] = ["Rahim", "Karim", "Rafik"]

    bros1.push(...bros2)

    const mentors1: {
        typescript: string;
        redux: string;
        dbms: string
    } = {
        typescript: "Mezba",
        redux: "Mir",
        dbms: "Mizan"
    }

    const mentors2: {
        prisma: string;
        next: string;
        cloud: string
    } = {
        prisma: "Firoz",
        next: "Tanmoy",
        cloud: "Nahid"
    }

    const mentorList: {
        typescript: string;
        redux: string;
        dbms: string;
        prisma: string;
        next: string;
        cloud: string
    } = {
        ...mentors1,
        ...mentors2
    }


    const greeFriends = (...friends: string[]): void =>{
        friends.forEach((friend: string) => console.log(`Hi ${friend}`))
    }

    greeFriends("Abul", "Kabul", "Babul")
}