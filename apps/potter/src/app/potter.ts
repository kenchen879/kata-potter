export class Potter {
    private _basket: number[] = [];
    private totalBookNumber = 0;

    constructor () {
        this._basket = [];
        this.totalBookNumber = 0;
    }

    addToBasket(book: number[]) {
        book.forEach(e => this._basket.push(e));
        this.totalBookNumber = book.length;
    }

    get price() {
        let price = 0;
        const discount = [1, 1, 0.95, 0.9, 0.8, 0.75];
        // 取得不重複的購物籃
        let distinctBasket:number[] = [];
        // 取得不重複購物籃的數量
        let distinctBookNumber = 0;

        while (this.totalBookNumber > 0) {
            // 檢查是否有 5 3 情況，若有則將其改為 4 4
            if (this.checkOptimalPrice()) {
                price += 2 * 8 * 4 * discount[4];
            } else {
                distinctBasket = this.createDistinctBasket();
                distinctBookNumber = distinctBasket.length;
                price += 8 * distinctBookNumber * discount[distinctBookNumber];
                this.removeBook(distinctBasket, distinctBookNumber);
            }
        }
        return price;
    }

    checkOptimalPrice () {
        if (this.totalBookNumber < 8) return false;
        let distinctBasket1: number[] = [];
        let distinctBasket2: number[] = [];

        distinctBasket1 = this.createDistinctBasket();
        this.removeBook(distinctBasket1, distinctBasket1.length);
        distinctBasket2 = this.createDistinctBasket();
        this.removeBook(distinctBasket2, distinctBasket2.length);
        
        if (distinctBasket1.length == 5 && distinctBasket2.length == 3) {
            return true;
        } else {
            distinctBasket1.forEach(e => this._basket.push(e));
            this.totalBookNumber += distinctBasket1.length;
            distinctBasket2.forEach(e => this._basket.push(e));
            this.totalBookNumber += distinctBasket2.length;
            return false;
        }
    }

    removeBook (distinct: number[], num: number) {
        for (let i = 0; i < num; i++) {
            this._basket.splice(this._basket.indexOf(distinct[i]), 1);
        }
        this.totalBookNumber -= num;
    }

    createDistinctBasket () {
        // 取得不重複的購物籃
        const distinctBook = [...(new Set(this._basket))];
        // 取得不重複購物籃的數量
        return distinctBook;
    }
}