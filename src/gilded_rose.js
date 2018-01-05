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
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {

      if(this.items[i].name === 'Elixir of the Mongoose' || this.items[i].name === '+5 Dexterity Vest'){
        if(this.items[i].sellIn > MINSELLBY && this.items[i].quality > MINQUALITY){
          this.items[i].quality -= 1;
          this.items[i].sellIn -= 1;
        } else if(this.items[i].sellIn <= MINSELLBY && this.items[i].quality > MINQUALITY){
          this.items[i].quality -= 2;
        } else {
          this.items[i].quality = 0;
        }
      }

      if(this.items[i].name === 'Aged Brie' && this.items[i].quality < MAXQUALITY ){
          this.items[i].quality += 1;
      }

      if(this.items[i].name === 'Sulfuras, Hand of Ragnaros'){

      }

      if(this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert'){
        if(this.items[i].quality == 49){
          this.items[i].quality += 1;
          this.items[i].sellIn -= 1;
        } else if(this.items[i].quality < MAXQUALITY && this.items[i].sellIn > 10){
          this.items[i].quality += 1;
          this.items[i].sellIn -= 1;
        } else if(this.items[i].quality < MAXQUALITY && this.items[i].sellIn > 5){
          this.items[i].quality += 2;
          this.items[i].sellIn -= 1;
        } else if(this.items[i].quality < MAXQUALITY && this.items[i].sellIn > MINSELLBY){
          this.items[i].quality += 3;
          this.items[i].sellIn -= 1;
        } else {
          this.items[i].quality = 0;
        }
      }

      if(this.items[i].name === 'Conjured Mana Cake'){
        if(this.items[i].sellIn > MINSELLBY && this.items[i].quality > MINQUALITY){
          this.items[i].quality -= 2;
          this.items[i].sellIn -= 1;
        } else if(this.items[i].sellIn <= MINSELLBY && this.items[i].quality > MINQUALITY){
          this.items[i].quality -= 4;
        } else {
          this.items[i].quality = 0;
        }
      }
    }

    return this.items;

  }


}
