import { Potter } from './potter';

describe('Kata - Harry Potter Book', () => {
  let potter: Potter;

  beforeEach(() => {
    potter = new Potter();
  });
  it('should create an instance', () => {
    expect(potter).toBeTruthy();
  });

  test('testBasics', () => {
    potter.addToBasket([]);
    expect(potter.price).toBe(0);
    potter.addToBasket([1]);
    expect(potter.price).toBe(8);
    potter.addToBasket([2]);
    expect(potter.price).toBe(8);
    potter.addToBasket([3]);
    expect(potter.price).toBe(8);
    potter.addToBasket([4]);
    expect(potter.price).toBe(8);
    potter.addToBasket([1, 1, 1]);
    expect(potter.price).toBe(8 * 3);
  });
  test('testSimpleDiscounts', () => {
    potter.addToBasket([0, 1]);
    expect(potter.price).toBe(8 * 2 * 0.95);
    potter.addToBasket([0, 2, 4]);
    expect(potter.price).toBe(8 * 3 * 0.9);
    potter.addToBasket([0, 1, 2, 4]);
    expect(potter.price).toBe(8 * 4 * 0.8);
    potter.addToBasket([0, 1, 2, 3, 4]);
    expect(potter.price).toBe(8 * 5 * 0.75);
  });

  test('testSeveralDiscounts', () => {
    potter.addToBasket([0, 0, 1]);
    expect(potter.price).toBe(8 + (8 * 2 * 0.95));
    potter.addToBasket([0, 0, 1, 1]);
    expect(potter.price).toBe(2 * (8 * 2 * 0.95));
    potter.addToBasket([0, 0, 1, 2, 2, 3]);
    expect(potter.price).toBe((8 * 4 * 0.8) + (8 * 2 * 0.95));
    potter.addToBasket([0, 1, 1, 2, 3, 4]);
    expect(potter.price).toBe(8 + (8 * 5 * 0.75));
  });

  test('testEdgeCases', () => {
    potter.addToBasket([0, 0, 1, 1, 2, 2, 3, 4]);
    expect(potter.price).toBe(2 * (8 * 4 * 0.8));
    potter.addToBasket([0, 0, 0, 0, 0, 
                        1, 1, 1, 1, 1, 
                        2, 2, 2, 2, 
                        3, 3, 3, 3, 3, 
                        4, 4, 4, 4]);
    expect(potter.price).toBe(3 * (8 * 5 * 0.75) + 2 * (8 * 4 * 0.8));
  });
});
