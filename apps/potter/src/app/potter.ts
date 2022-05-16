export class Potter {
    private _basket: number[] = [];
    addToBasket(book: number[]) {
        this._basket = [];
        for (let i = 0; i < book.length; i++)
            this._basket.push(book[i]);
    }
    get price() {
        let price = 0;
        let totalBookNumber = 0;
        let distunctBookNumber = 0;

        totalBookNumber = this._basket.length;
        const distinctBasket = this._basket.filter((ele , pos) => {
            return this._basket.indexOf(ele) == pos;
        });
        distunctBookNumber = distinctBasket.length;

        if (distunctBookNumber == 1) {
            price = 8 * totalBookNumber;
        } else {
            switch (totalBookNumber) {
                case 2:
                    price = 8 * 2 * 0.95;
                    break;
                case 3:
                    price = 8 * 3 * 0.9;
                    break;
                case 4:
                    price = 8 * 4 * 0.8;
                    break;
                case 5:
                    price = 8 * 5 * 0.75;
                    break;
                default:
                    break;
            }
        }
        return price;
    }
}