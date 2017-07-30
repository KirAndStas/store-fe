import { observable } from 'mobx';

class TestStore {
    @observable list = [];
}

export default new TestStore();
