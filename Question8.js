/*Implement a simple HashMap class with put, get, and remove methods.*/

class HashMap {
  constructor() {
    this.map = {};
  }

  put(key, value) {
    this.map[key] = value;
  }

  get(key) {
    return this.map[key];
  }

  remove(key) {
    delete this.map[key];
  }
}

const map = new HashMap();
map.put("name", "John");
map.put("age", 30);
console.log(map.get("name")); // John
console.log(map.get("age")); // 30
map.remove("name");
console.log(map.get("name")); // undefined  (key "name" has been removed)