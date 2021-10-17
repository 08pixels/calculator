const rewire = require("rewire")
const CustomButton = rewire("./CustomButton")
const selectStyleButton = CustomButton.__get__("selectStyleButton")
const selectTextColor = CustomButton.__get__("selectTextColor")
// @ponicode
describe("selectStyleButton", () => {
    test("0", () => {
        let callFunction = () => {
            selectStyleButton("=")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            selectStyleButton("Elio")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            selectStyleButton("Dillenberg")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            selectStyleButton("elio@example.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            selectStyleButton(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("selectTextColor", () => {
    test("0", () => {
        let callFunction = () => {
            selectTextColor("Elio")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            selectTextColor("=")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            selectTextColor("elio@example.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            selectTextColor("C")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            selectTextColor("Dillenberg")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            selectTextColor(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
