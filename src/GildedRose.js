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
      if(item.name === 'Elixir of the Mongoose'){
        updateElixir(item);
      }

      if(item.name === '+5 Dexterity Vest'){
        updateDexterity(item);
      }

      if(item.name === 'Sulfuras, Hand of Ragnaros'){

      }

      if(item.name === 'Conjured Mana Cake'){
        updateConjured(item);
      }

      if(item.name === 'Backstage passes to a TAFKAL80ETC concert'){
        updateConcert(item);
      }

      if(item.name === 'Aged Brie' && item.quality < MAXQUALITY ){
        updateBrie(item);
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

    })

    return this.items;

  }


}
