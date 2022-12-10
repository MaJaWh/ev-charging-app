import { expressjwt } from "express-jwt";

const fakeServer = (details) => {
    const validUser = [
        {
            username: "Ben",
            email: "benseed.bs@gmail.com",
            password: "password"
        },
        {
            username: "Mark",
            email: "mark@gmail.com",
            password: "password"
        }
    ]
    const isUser = validUser.some((user) => {
        return (
            user.username === details.username &&
            user.email === details.email &&
            user.password === details.password
        )
    })
    if (isUser) {
        const token = expressjwt.sign({
            email: details.email,
            username: details.username
        },
            process.env.REACT_APP_KEY
        )
        return { token: token }
    } else {
        return { error: "details are incorrect" }
    }
}

export default fakeServer;