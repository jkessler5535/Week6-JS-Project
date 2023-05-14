const expect = chai.expect;


describe ('Deck', function (){
  describe('shuffle', function(){
    it('should return an array', function(){
      const deck = [1, 2, 3];
      const result = shuffle(deck);
      expect(result).to.be.an('array');
    });
    it('should shuffle the array', function(){
      const deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const result = shuffle(deck);
      expect(result).to.not.deep.equal('deck');
    });
   });
  });

