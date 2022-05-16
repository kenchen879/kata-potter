export class Potter {
    private _basket: number[] = [];
    addToBasket(book: number[]) {
        this._basket = [];
        book.forEach(e => this._basket.push(e));
    }
    get price() {
        let price = 0;
        const discount = [1, 1, 0.95, 0.9, 0.8, 0.75];
        let totalBookNumber = 0;
        // 取得不重複的購物籃
        let distinctBasket = [];
        let distinctBookNumber = 0;
        let index = [];

        totalBookNumber = this._basket.length;

        while (totalBookNumber > 0) {
            // 取得不重複的購物籃
            distinctBasket = this.distinctBasket;
            // 取得不重複購物籃的數量
            distinctBookNumber = distinctBasket.length;
            switch (distinctBookNumber) {
                case 1:
                    price += 8 * distinctBookNumber;
                    break;
                case 2:
                    price += 8 * 2 * discount[2];
                    break;
                case 3:
                    price += 8 * 3 * discount[3];
                    break;
                case 4:
                    price += 8 * 4 * discount[4];
                    break;
                case 5:
                    price += 8 * 5 * discount[5];
                    break;
                default:
                    price = 0;
            }
            index = distinctBasket.filter(e => this._basket.indexOf(e));
            index.forEach(e => this._basket.splice(e, distinctBookNumber));
            totalBookNumber -= distinctBookNumber;
        }
        return price;
    }

    get distinctBasket () {
        const distinctBasket = [...(new Set(this._basket))];
        return distinctBasket;
    }
}