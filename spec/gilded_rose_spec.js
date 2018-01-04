describe("Gilded Rose", function() {
  var gildedRose, items;

  describe("Aged brie", function(){
    beforeEach(function(){
      gildedRose = new Shop([ new Item("Aged Brie", 1, 9) ]);
      items = gildedRose.updateQuality();
    });

    it("returns aged brie", function() {
      expect(items[0].name).toEqual("Aged Brie");
    });

    it("improves quality over time", function(){
      expect(items[0].quality).toEqual(10);
    });

    it("does not reduce quality by half if sell by date passed", function(){
      gildedRose.updateQuality();
      expect(items[0].quality).toEqual(12);
    });

    it("does not have a quality level greater than 50", function(){
      for (var i = 0; i < 50; i++){
        gildedRose.updateQuality();
      }
      expect(items[0].quality).toEqual(50);
    });

  });

  describe("Sulfuras, Hand of Ragnaros", function(){
    beforeEach(function(){
      gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 1, 9) ]);
      items = gildedRose.updateQuality();
    });

    it("returns Sulfuras, Hand of Ragnaros", function() {
      expect(items[0].name).toEqual("Sulfuras, Hand of Ragnaros");
    });

    it("does not increase in quality over time", function(){
      gildedRose.updateQuality();
      expect(items[0].quality).toEqual(9);
    });

    it("sellIn does not change", function(){
      gildedRose.updateQuality();
      gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(1);
    });

  });

  
});
