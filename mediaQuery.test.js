const {mediaQuery} = require("../src/mediaQuery")

describe("\"Add\" methods", ()=>{

    describe("addTitle", ()=>{
        
        test("properly adds title to the array w/ default", ()=>{
            let testQuery = new mediaQuery({id: 1}).addTitle()
            expect(testQuery.toString()).toBe("[{\"title\":[\"romaji\"]}]")
        })

        test("properly adds arguments", ()=>{
            let testQuery = new mediaQuery({id: 1}).addTitle(["english", "native"])
            expect(testQuery.toString()).toBe(`[{"title":["english","native"]}]`)
        })
    })

})