import { Potter } from './potter';

describe('Kata - Harry Potter Book', () => {
  it('should create an instance', () => {
    expect(new Potter()).toBeTruthy();
  });

  test('testBasics: buy one book', () => {
    let potter = new Potter();
    potter.addToBasket([]);
    expect(potter.price).toBe(0);
    potter = new Potter();
    potter.addToBasket([1]);
    expect(potter.price).toBe(8);
    potter = new Potter();
    potter.addToBasket([2]);
    expect(potter.price).toBe(8);
    potter = new Potter();
    potter.addToBasket([3]);
    expect(potter.price).toBe(8);
    potter = new Potter();
    potter.addToBasket([4]);
    expect(potter.price).toBe(8);
    potter = new Potter();
    potter.addToBasket([1, 1, 1]);
    expect(potter.price).toBe(8 * 3);
  });
});
