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
