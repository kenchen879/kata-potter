export class Potter {
    private _basket: number[] = [];
    addToBasket(book: number[]) {
        this._basket = [];
        for (let i = 0; i < book.length; i++)
            this._basket.push(book[i]);
    }
    get price() {
        let price = 0;
        let totalBooks = 0;
        totalBooks = this._basket.length;
        console.log(totalBooks);
        price = 8 * totalBooks;
        return price;
    }
}