module.exports = Collection;

/**
 * Конструктор коллекции
 */
function Collection() {
  Array.prototype.constructor.apply(this, arguments);
}

Collection.prototype = Object.create(Array.prototype);
Collection.prototype.constructor = Collection;


// Методы коллекции
Collection.prototype.at = function (index) {
  if (index <= 0 || index > this.length) return null;
  else return this[index - 1];
};

Collection.prototype.removeAt = function (index) {
  if (index === 0 || index > this.length) return false;
  this.splice(index - 1, 1);
  return true;
};

Collection.prototype.append = function (concat) {
  if (concat instanceof Collection) {
    for (let value of concat) this.push(value);
  } else this.push(concat);
};

Collection.prototype.count = function () {
  return this.length;
};

Collection.prototype.values = function () {
  return Array.from(this);
};
// другие методы


/**
 * Создание коллекции из массива значений
 */
Collection.from = function (...items) {
  let collection = new Collection();
  if (items[0] instanceof Array) {
    let array = items[0];
    for (let value of array) {
      collection.push(value);
    }
  }else{
    for(value of items){
      collection.push(value);
    }
  }
  return collection;
};

