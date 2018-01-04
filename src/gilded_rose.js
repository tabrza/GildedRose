class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.items[i].quality > 0) {
          if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') { //here
            this.items[i].quality = this.items[i].quality - 1; // -=1
          }
        }
      } else {
        if (this.items[i].quality < 50) { //repeats 26 & 31 & 54
          this.items[i].quality = this.items[i].quality + 1;
          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) { //repeats 22
                this.items[i].quality = this.items[i].quality + 1; // +=1
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) { //repeats 22
                this.items[i].quality = this.items[i].quality + 1; // +=1
              }
            }
          }
        }
      }
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != 'Aged Brie') { // line 22
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') { //line 23
            if (this.items[i].quality > 0) {
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') { // line 22
                this.items[i].quality = this.items[i].quality - 1; // -=1
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality; // =0
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1; // +=1  -> line 22
          }
        }
      }
    }

    return this.items;
  }
}
