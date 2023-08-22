class DataStorage<T extends string | number | object | boolean> {
  private items: T[] = [];

  constructor() {}
  addItem(item: T) {
    this.items.push(item);
  }
  removeItem(item: T) {
    let toBeRemovedIndex=this.items.indexOf(item)
    this.items.splice(toBeRemovedIndex,1)
  }
  getItems() {
    return this.items;
  }
}

const ds_string = new DataStorage<string>();
// array of strings
ds_string.addItem("item1");
ds_string.addItem("item2");
ds_string.addItem("removeMe");
ds_string.addItem("item3");
ds_string.removeItem("removeMe");
console.log(ds_string.getItems())
// array of numbers
const ds_numbers = new DataStorage<number>();
ds_numbers.addItem(1);
ds_numbers.addItem(2);
ds_numbers.addItem(999);
ds_numbers.addItem(3);
ds_numbers.removeItem(999);
console.log(ds_numbers.getItems())
// array of obj
const ds_obj = new DataStorage<object>();
ds_obj.addItem({name:"foo",});
ds_obj.addItem({age:"2",});
ds_obj.addItem({remove:"remove",});
ds_obj.addItem({age:"322",});
ds_obj.removeItem({remove:"foo",});
// in the case of object it will slice -1 which is the last item
// Later, you attempt to remove an object with the same content ({remove: "foo"}) from the array. However, since these two objects have different memory references, the indexOf method can't find the exact object you want to remove.
console.log(ds_obj.getItems())