import {makeAutoObservable} from "mobx";

class Store {
    startPosition = {x: 0, y: 0};
    storedLines = [];

    constructor() {
        makeAutoObservable(this);
    }
}
const store = new Store()
export default store;