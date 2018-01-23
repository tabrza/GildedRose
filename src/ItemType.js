
const MINSELLBY = 0;
const MAXQUALITY = 50;
const MINQUALITY = 0;

class ItemType {
  constructor(update = new Update()){
    this.update = update;
  }

  _updateElixir(item){
    if(item.sellIn > MINSELLBY && item.quality > MINQUALITY){
      this.update.quality(item, -1);
      this.update.sellIn(item);
    } else if(item.sellIn <= MINSELLBY && item.quality > MINQUALITY){
      this.update.quality(item, -2);
    } else {
      this.update.qualityToZero(item);
    }
  };

  _updateDexterity(item){
    if(item.sellIn > MINSELLBY && item.quality > MINQUALITY){
      this.update.quality(item, -1);
      this.update.sellIn(item);
    } else if(item.sellIn <= MINSELLBY && item.quality > MINQUALITY){
      item.quality -= 2;
    } else {
      this.update.qualityToZero(item);
    }
  };

  _updateBrie(item){
    this.update.quality(item, 1);
  }

  _updateConcert(item){
    if(item.quality == 49){
      this.update.quality(item, 1);
      this.update.sellIn(item);
    } else if(item.quality < MAXQUALITY && item.sellIn > 10){
      this.update.quality(item, 1);
      this.update.sellIn(item);
    } else if(item.quality < MAXQUALITY && item.sellIn > 5){
      this.update.quality(item, 2);
      this.update.sellIn(item);
    } else if(item.quality < MAXQUALITY && item.sellIn > MINSELLBY){
      this.update.quality(item, 3);
      this.update.sellIn(item);
    } else {
      this.update.qualityToZero(item);
    }
  }

   _updateConjured(item){
    if(item.sellIn > MINSELLBY && item.quality > MINQUALITY){
      this.update.quality(item, -2);
      this.update.sellIn(item);
    } else if(item.sellIn <= MINSELLBY && item.quality > MINQUALITY){
      this.update.quality(item, -4);
    } else {
      this.update.qualityToZero(item);
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
