class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

const MINSELLBY = 0;
const MAXQUALITY = 50;
const MINQUALITY = 0;

class Shop {
  constructor(items=[], type = new ItemType()){
    this.items = items;
    this.type = type;
  }

  updateQuality() {
    this.items.forEach( item => {
      this.type.check(item);
    })

    return this.items;

  }


}
