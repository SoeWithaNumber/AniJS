const {aniClient} =  require("../src/client")

describe("Generating query strings", ()=>{
    test("Simple query object", ()=>{
        let client = new aniClient("")
        let queryString = client.generateQueryString({header:`Media(search:"Cowboy Bebop")`, fields:["id", {header:"title", fields: ["romaji"]}]})

        expect(queryString).toBe(`Media(search:"Cowboy Bebop"){id title{romaji }}`)
    })
})