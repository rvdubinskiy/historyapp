import { observable, action, computed } from 'mobx';

import { History } from 'history';

interface IData {
    pageNumber?: number;
    title?: string;
    name?: string;
    maxLevel?: number;
    pointsCoint?:  number;
}


export default class {

    @observable
    private _result: Array<IData> = [];

    history: History;

    constructor(history?: History) {
        this.history = history;
    }

    @computed
    get result(): Array<IData> {
        return this._result;
    }

    @computed
    get resultLast(): IData {
        return this._result.length ? this._result[this._result.length - 1] : {} as IData;
    }

    @action
    public pushData = (data: IData): void => {
        this._result.length === 0 
        ||this._result.filter(item => JSON.stringify(item) === JSON.stringify(data)).length === 0 
        && this._result.push(data);
    };
}
