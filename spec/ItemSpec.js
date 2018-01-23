describe("Item", function(){
  beforeEach(function(){
    item = new Item('milk', 4, 3);
  });

  describe('values', function(){
    it('returns milk as the name', function(){
      expect(item.name).toEqual('milk');
    });

    it('returns 4 as sellIn', function(){
      expect(item.sellIn).toEqual(4);
    });

    it('returns 3 as quality', function(){
      expect(item.quality).toEqual(3);
    });
  });
});
