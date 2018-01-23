class ItemType {
  constructor(){

  }


  _updateElixir(item){
    if(item.sellIn > MINSELLBY && item.quality > MINQUALITY){
      item.quality -= 1;
      item.sellIn -= 1;
    } else if(item.sellIn <= MINSELLBY && item.quality > MINQUALITY){
      item.quality -= 2;
    } else {
      item.quality = 0;
    }
  };

  _updateDexterity(item){
    if(item.sellIn > MINSELLBY && item.quality > MINQUALITY){
      item.quality -= 1;
      item.sellIn -= 1;
    } else if(item.sellIn <= MINSELLBY && item.quality > MINQUALITY){
      item.quality -= 2;
    } else {
      item.quality = 0;
    }
  };

  _updateBrie(item){
    item.quality += 1;
  }

  _updateConcert(item){
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

   _updateConjured(item){
    if(item.sellIn > MINSELLBY && item.quality > MINQUALITY){
      item.quality -= 2;
      item.sellIn -= 1;
    } else if(item.sellIn <= MINSELLBY && item.quality > MINQUALITY){
      item.quality -= 4;
    } else {
      item.quality = 0;
    }
  }


  check(item){
    if(item.name === 'Elixir of the Mongoose'){
      this._updateElixir(item)
    } else if (item.name === '+5 Dexterity Vest') {
      this._updateDexterity(item)
    } else if (item.name === 'Conjured Mana Cake') {
      this._updateConjured(item);
    } else if (item.name === 'Backstage passes to a TAFKAL80ETC concert'){
      this._updateConcert(item);
    } else if (item.name === 'Aged Brie' && item.quality < MAXQUALITY ) {
      this._updateBrie(item);
    }
  }

}
