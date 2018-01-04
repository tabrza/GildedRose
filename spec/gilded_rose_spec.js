describe("Gilded Rose", function() {
  var gildedRose, items;

  xdescribe("Aged brie", function(){
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

  xdescribe("Sulfuras, Hand of Ragnaros", function(){
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

  xdescribe("TAFKAL80ETC concert", function(){
    beforeEach(function(){
      gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 11, 40) ]);
      items = gildedRose.updateQuality();
    });

    it("returns Backstage passes to a TAFKAL80ETC concert", function() {
      expect(items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
    });

    it("does not have negative quality", function(){
      for(var i = 0; i < 50; i++){
        gildedRose.updateQuality();
      }
      expect(items[0].quality).toEqual(0);
    });

    it("does not have quality over 50", function(){
      for(var i = 0; i < 5; i++){
        gildedRose.updateQuality();
      }
      expect(items[0].quality).toEqual(50);
    });

    it("increases by quality by 2 when less than 10 days left", function(){
      gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 40) ]);
      items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(42);
    });

    it("increases by quality by 3 when less than 5 days left", function(){
      gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 40) ]);
      items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(43);
    });
  });

  describe("Elixir of the Mongoose", function(){
    beforeEach(function(){
      gildedRose = new Shop([ new Item("Elixir of the Mongoose", 5, 10) ]);
      items = gildedRose.updateQuality();
    });

    it("returns Elixir of the Mongoose", function() {
      expect(items[0].name).toEqual("Elixir of the Mongoose");
    });

    it("reduces quality by double after sell by date", function(){
      gildedRose = new Shop([ new Item("Elixir of the Mongoose", 0, 10) ]);
      items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(8);
    });

    it("reduces quality by one before sell by date", function(){
      gildedRose = new Shop([ new Item("Elixir of the Mongoose", 1, 10) ]);
      items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(9);
    });

    it("does not have quality below 0", function(){
      for (var i = 0; i < 10; i++){
        gildedRose.updateQuality();
      }
      expect(items[0].quality).toEqual(0);
    });
  });

  describe("+5 Dexterity Vest", function(){
    beforeEach(function(){
      gildedRose = new Shop([ new Item("+5 Dexterity Vest", 0, 0) ]);
      items = gildedRose.updateQuality();
    });

    it("returns +5 Dexterity Vest", function() {
      expect(items[0].name).toEqual("+5 Dexterity Vest");
    });

    it("reduces quality by double after sell by date", function(){
      gildedRose = new Shop([ new Item("+5 Dexterity Vest", 0, 10) ]);
      items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(8);
    });

    it("reduces quality by one before sell by date", function(){
      gildedRose = new Shop([ new Item("+5 Dexterity Vest", 1, 10) ]);
      items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(9);
    });

    it("does not have quality below 0", function(){
      for (var i = 0; i < 10; i++){
        gildedRose.updateQuality();
      }
      expect(items[0].quality).toEqual(0);
    });

  });

  xdescribe("Conjured Mana Cake", function(){
    it("returns Conjured Mana Cake", function() {
      const gildedRose = new Shop([ new Item("Conjured Mana Cake", 0, 0) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).toEqual("Conjured Mana Cake");
    });
  });
});
