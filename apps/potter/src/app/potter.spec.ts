import { Potter } from './potter';

describe('Kata - Harry Potter Book', () => {
  let potter: Potter;

  beforeEach(() => {
    potter = new Potter();
  });
  it('should create an instance', () => {
    expect(potter).toBeTruthy();
  });

  test('testBasics: buy one book', () => {
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
});
