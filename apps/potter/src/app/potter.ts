export class Potter {
    private _basket: number[] = [];
    totalBookNumber = 0;
    addToBasket(book: number[]) {
        this._basket = [];
        for (let i = 0; i < book.length; i++) {
            this._basket.push(book[i]);
        }
    }
    get price() {
        let price = 0;
        const discount = [1, 1, 0.95, 0.9, 0.8, 0.75];
        // 取得不重複的購物籃
        let distinctBasket:number[] = [];
        let distinctBookNumber = 0;

        this.totalBookNumber = this._basket.length;

        while (this.totalBookNumber > 0) {
            if (this.checkOptimalPrice()) {
                price += 2 * 8 * 4 * discount[4];
            } else {
                // 取得不重複的購物籃
                distinctBasket = [...(new Set(this._basket))];
                // 取得不重複購物籃的數量
                distinctBookNumber = distinctBasket.length;
                price += 8 * distinctBookNumber * discount[distinctBookNumber];
                for (let i = 0; i < distinctBookNumber; i++) {
                    this._basket.splice(this._basket.indexOf(distinctBasket[i]), 1);
                }
                this.totalBookNumber -= distinctBookNumber;
            }
        }
        return price;
    }

    checkOptimalPrice () {
        if (this.totalBookNumber < 8) return false;
        let temp_basket: number[] = [];
        let distinctBasket1: number[] = [];
        let distinctBasket2: number[] = [];
        let distinctBookNumberThis = 0;
        let distinctBookNumberNext = 0;
        temp_basket = this._basket;

        distinctBasket1 = [...(new Set(temp_basket))];
        distinctBookNumberThis = distinctBasket1.length;
        for (let i = 0; i < distinctBookNumberThis; i++) {
            temp_basket.splice(temp_basket.indexOf(distinctBasket1[i]), 1);
        }
        distinctBasket2 = [...(new Set(temp_basket))];
        distinctBookNumberNext = distinctBasket2.length;
        for (let i = 0; i < distinctBookNumberThis; i++) {
            temp_basket.push(distinctBasket1[i]);
        }

        if (distinctBookNumberThis == 5 && distinctBookNumberNext == 3) {
            distinctBasket1 = [...(new Set(this._basket))];
            distinctBookNumberThis = distinctBasket1.length;
            for (let i = 0; i < distinctBookNumberThis; i++) {
                this._basket.splice(this._basket.indexOf(distinctBasket1[i]), 1);
            }
            this.totalBookNumber -= distinctBookNumberThis;
            distinctBasket2 = [...(new Set(this._basket))];
            distinctBookNumberNext = distinctBasket2.length;
            for (let i = 0; i < distinctBookNumberNext; i++) {
                this._basket.splice(this._basket.indexOf(distinctBasket2[i]), 1);
            }
            this.totalBookNumber -= distinctBookNumberNext;
            return true;
        } else {
            return false;
        }
    }
}