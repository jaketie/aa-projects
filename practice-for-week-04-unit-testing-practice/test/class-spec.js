const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {

  let couple;

  beforeEach(() => {
    couple = new Word('couple');
  });

  afterEach(() => {
    couple = null;
  });

  describe("Word constructor function", function () {

    it('should have a "word" property', function () {
      expect(couple.word).to.exist;
    });

    it('should set the "word" property when a new word is created', function () {
      expect(couple.word).to.equal('couple');
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      expect(couple.removeVowels()).to.equal('cpl');
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      expect(couple.removeConsonants()).to.equal('oue');
    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      expect(couple.pigLatin()).to.equal('ouplecay');
    });
  });
});
