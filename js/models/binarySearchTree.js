import { Category } from "./Category";

export class binarySearchTree {

  constructor() {
    this.root = null;
  }

  //Add
  insert(value) {

    //create a new node/category
    var newCategory = new Category(value);

    //if it's the first category, create it as the rootCategory
    if (this.root === null) {
      this.root = newCategory;
      return this;
    }

    //not the first category
    let current = this.root;

    while (true) {
      if (value === current.value)
        return undefined;

      //check if the value is less than the root value
      if (value < current.value) {
        //if there is no left subcategory, then insert the current category there, and return
        if (current.left === null) {
          current.left = newCategory;
          return this;
        }
      } else {
        if (current.right === null) {
          current.right = newCategory;
          return this;
        }
      }

      current = current.right
    }

  }


  //Search
  find(value) {

    let found = false;
    //nothing exists
    if (this.root === null)
      return false;

    let current = this.root;

    //iterate through the categories. 
    while (current && !found) {
      //search the left category and set is a the current, same as the right category
      if (value < current.value) {
        current = current.left;
      } else
        if (value > current.value) {
          current = current.right
        } else
          this.found = true;
    }

    if (!found)
      return undefined

    return current

  }
}