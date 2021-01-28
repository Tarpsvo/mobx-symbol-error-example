import { makeAutoObservable } from 'mobx';

class ConfigStore {
  get isSsr() {
    return typeof window === 'undefined';
  }

  constructor(rootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }
}

export default ConfigStore;
