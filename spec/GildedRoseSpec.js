describe("Gilded Rose", function() {
  var gildedRose, items;

  beforeEach(function(){
    class DoubleItem{

    }

    class DoubleItemType{
      check(){

      }
    }

    gilded = new DoubleItem();
    rose = new DoubleItem();
    type= new DoubleItemType();
    shop = new Shop([gilded, rose], type);
  });

  describe("checks item type", function(){
    it('calls on check and passed item through', function(){
      spyOn(type, 'check');
      shop.updateQuality();
      expect(type.check).toHaveBeenCalledWith(gilded);
      expect(type.check).toHaveBeenCalledWith(rose);
    });
  });
});
