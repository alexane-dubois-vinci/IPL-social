import { validateEmail } from "../src/emailValidator";

describe("Email Validator", () => {
    it("should return false when given an email that does not contain @", () => {
        expect(validateEmail("emailexample")).toBe(false);
    });

    it("should return false when given an email that with no characters prior to @", () => {
        expect(validateEmail("@vinci.be")).toBe(false);
    })
})