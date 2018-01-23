class Update {
  quality(item, value){
    item.quality += value;
  }

  sellIn(item){
    item.sellIn -= 1;
  }

  qualityToZero(item){
    item.quality = 0;
  }
}
