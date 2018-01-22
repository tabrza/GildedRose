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

      if(this.items[i].name === 'Elixir of the Mongoose'){
        updateElixir(this.items[i]);
      }

      if(this.items[i].name === '+5 Dexterity Vest'){
        updateDexterity(this.items[i]);
      }

      if(this.items[i].name === 'Sulfuras, Hand of Ragnaros'){

      }

      if(this.items[i].name === 'Conjured Mana Cake'){
        updateConjured(this.items[i]);
      }

      if(this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert'){
        updateConcert(this.items[i]);
      }

      if(this.items[i].name === 'Aged Brie' && this.items[i].quality < MAXQUALITY ){
        updateBrie(this.items[i]);
      }

      function updateElixir(item){
        if(item.sellIn > MINSELLBY && item.quality > MINQUALITY){
          item.quality -= 1;
          item.sellIn -= 1;
        } else if(item.sellIn <= MINSELLBY && item.quality > MINQUALITY){
          item.quality -= 2;
        } else {
          item.quality = 0;
        }
      };

      function updateDexterity(item){
        if(item.sellIn > MINSELLBY && item.quality > MINQUALITY){
          item.quality -= 1;
          item.sellIn -= 1;
        } else if(item.sellIn <= MINSELLBY && item.quality > MINQUALITY){
          item.quality -= 2;
        } else {
          item.quality = 0;
        }
      };

      function updateBrie(item){
        item.quality += 1;
      }

      function updateConcert(item){
          if(item.quality == 49){
            item.quality += 1;
            item.sellIn -= 1;
          } else if(item.quality < MAXQUALITY && item.sellIn > 10){
            item.quality += 1;
            item.sellIn -= 1;
          } else if(item.quality < MAXQUALITY && item.sellIn > 5){
            item.quality += 2;
            item.sellIn -= 1;
          } else if(item.quality < MAXQUALITY && item.sellIn > MINSELLBY){
            item.quality += 3;
            item.sellIn -= 1;
          } else {
            item.quality = 0;
          }
      }

      function updateConjured(item){
        if(item.sellIn > MINSELLBY && item.quality > MINQUALITY){
          item.quality -= 2;
          item.sellIn -= 1;
        } else if(item.sellIn <= MINSELLBY && item.quality > MINQUALITY){
          item.quality -= 4;
        } else {
          item.quality = 0;
        }
      }


    }

    return this.items;

  }


}
