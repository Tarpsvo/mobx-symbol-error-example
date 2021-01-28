import { makeAutoObservable } from 'mobx';
import ConfigStore from './config';

class RootStore {
  appName = 'MobX Symbol Error example application';

  constructor() {
    this.config = new ConfigStore(this);
    makeAutoObservable(this);
  }
}

export default RootStore;
