import CarStore from './CarStore';
 
class RootStore {
  constructor() {
    this.CarStore = new CarStore(this);
  }
}
 
const rootStore = new RootStore();
 
export default rootStore;