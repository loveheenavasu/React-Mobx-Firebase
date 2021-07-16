import { makeAutoObservable } from 'mobx';
 
class CarStore {
   cars = null;
 
  constructor(rootStore) {
    this.rootStore = rootStore
    makeAutoObservable(this, { rootStore: false })
   // this.cars = [];
  }
 
  setCars = cars => {
    this.cars = cars;
  };
 
  setCar = (car, id) => {
    console.log("sdfghjkl;l'", car,id)
    if (!this.cars) {
      this.cars = {};
    }
 
    this.cars[id] = car;
  };
 
  get carList() {
    return Object.keys(this.cars || {}).map(key => ({
      ...this.cars[key],
      id: key,
    }));
  }
}
 

export default  CarStore;
