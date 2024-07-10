import { convertToPigLatin } from "./app";

describe("convertToPigLatin", () => {
  describe("Req 1", () => {
    it("should return the correct conversation for inputs", () => {
      expect(convertToPigLatin("pleased to meet you")).toEqual(
        "easedplay otay eetmay ouyay"
      );

      expect(convertToPigLatin("how much does it cost")).toEqual(
        "owhay uchmay oesday ityay ostcay"
      );

      expect(convertToPigLatin("i would rather be at the beach")).toEqual(
        "iyay ouldway atherray ebay atyay ethay eachbay"
      );

      expect(
        convertToPigLatin(
          "a tree whose elements have at most two children is called a binary tree"
        )
      ).toEqual(
        "ayay eetray osewhay elementsyay avehay atyay ostmay otway ildrenchay isyay alledcay ayay inarybay eetray"
      );
    });
  });

  describe("Req 2", () => {
    it("should respect casing of sentences", () => {
      expect(convertToPigLatin("Pleased to meet you")).toBe(
        "Easedplay otay eetmay ouyay"
      );

      expect(convertToPigLatin("Do you speak Pig Latin")).toBe(
        "Oday ouyay eakspay Igpay Atinlay"
      );

      expect(convertToPigLatin("Time flies when you are having fun")).toBe(
        "Imetay iesflay enwhay ouyay areyay avinghay unfay"
      );

      expect(
        convertToPigLatin(
          "A tree whose elements have at most two children is called a BINARY TREE"
        )
      ).toBe(
        "Ayay eetray osewhay elementsyay avehay atyay ostmay otway ildrenchay isyay alledcay ayay INARYBAY EETRAY"
      );
    });
  });
});
