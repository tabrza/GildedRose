describe("update", function(){
  beforeEach(function(){
    class DoubleItem{
      constructor(name, sellIn, quality) {
        this.name     = name;
        this.sellIn   = sellIn;
        this.quality  = quality;
      }
    }

    update = new Update();
    item = new Item('milk', 4, 3);
  });

  describe("item update", function(){
    it('increases item quality', function(){
      update.quality(item, 1);
      expect(item.quality).toEqual(4);
    });

    it('decreases item quality', function(){
      update.quality(item, -1);
      expect(item.quality).toEqual(2);
    });

    it('reduces sellIn', function(){
      update.sellIn(item);
      expect(item.sellIn).toEqual(3);
    });

    it('sets quality to zero', function(){
      update.qualityToZero(item);
      expect(item.quality).toEqual(0);
    });
  });
});
