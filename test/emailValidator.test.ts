import { validateEmail } from "../src/emailValidator";

describe("Email Validator", () => {
    it("should return false when given an email that does not contain @", () => {
        expect(validateEmail("emailexample")).toBe(false);
    });

    it("should return false when given an email with no characters prior to @", () => {
        expect(validateEmail("@vinci.be")).toBe(false);
    });

    it("should return false when given an email that has no characters following @", () => {
        expect(validateEmail("alexane.dubois@")).toBe(false);
    });

    it("should return false when given an email containing space(s)", () => {
        expect(validateEmail("alexane.dubois @vinci.be")).toBe(false);
    });

    it("should return false when given an email with no dot", () => {
        expect(validateEmail("alexane@vinci")).toBe(false);
    });

    it("shoudl return false when givan an email with a dot being the last character", () => {
        expect(validateEmail("alexane@vinci.")).toBe(false);
    });

    it("should return true when given a valid email", () => {
        expect(validateEmail("alexane@vinci.be")).toBe(true);
    })
})