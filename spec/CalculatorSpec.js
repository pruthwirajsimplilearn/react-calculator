describe("evaluate",()=>{
    it("test all functionalities",()=>{
        expect(eval("5+6")).toEqual(11);
        expect(eval("5-6")).toEqual(-1);
        expect(eval("5*6")).toEqual(30);
        expect(eval("6/3")).toEqual(2);
    })
})