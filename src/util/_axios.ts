const delay = (ms = 500) => new Promise(resolve => setTimeout(resolve, ms));

const todos = [
    {
        id: 1,
        details: "My first todo",
        completed: false,
        createdAt: new Date()
    },
    {
        id: 2,
        details: "My second todo",
        completed: true,
        createdAt: new Date()
    },
    {
        id: 3,
        details: "My third todo",
        completed: false,
        createdAt: new Date()
    },
    {
        id: 4,
        details: "My fourth todo",
        completed: false,
        createdAt: new Date()
    },

]

export default class _axios {
    public static get = async (url: string, options: any ) => {
        await delay();

        if(url.includes("todo")) {
            return { data: [ ...todos ] };
        }

        return { data: [] };    
    }

    public static post = async (url: string, data: any ) => {
        const { username, password } = data;

        await delay();

        if(!url.includes("login")) {
            throw new Error("404");
        }

        if(username === "username" && password === "password") {
            return { data: "THIS IS A TOKEN" }
        }

        throw new Error("Invalid username or password");
    }
}