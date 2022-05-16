export class Potter {
    private _basket: number[] = [];
    addToBasket(book: number[]) {
        this._basket = [];
        for (let i = 0; i < book.length; i++)
            this._basket.push(book[i]);
    }
    get price() {
        let price = 8;
        let discount = [1, 1, 0.95, 0.9, 0.8, 0.75];
        let totalBookNumber = 0;
        let distinctBookNumber = 0;

        totalBookNumber = this._basket.length;

        // 取得不重複的購物籃
        const distinctBasket = this.distinctBasket;
        // 取得不重複購物籃的數量
        distinctBookNumber = distinctBasket.length;

        if (distinctBookNumber == 1) {
            price *= totalBookNumber;
        } else {
            switch (totalBookNumber) {
                case 2:
                    price *= 2 * discount[2];
                    break;
                case 3:
                    price *= 3 * discount[3];
                    break;
                case 4:
                    price *= 4 * discount[4];
                    break;
                case 5:
                    price *= 5 * discount[5];
                    break;
                default:
                    price = 0;
            }
        }
        return price;
    }

    get distinctBasket () {
        const distinctBasket = [...(new Set(this._basket))];
        return distinctBasket;
    }
}