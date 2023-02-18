const fibonacci = require("./fibonacci")

test("Büyük değeri olan argümanlar aldığında doğru dizini dönmeli", () => { expect(fibonacci(1,1000000)).toEqual([1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765,10946,17711,28657,46368,75025,121393,196418,317811,514229,832040])
})

test("Başlangıç ve bitiş değerine uygun fibonacci dizinini getirmeli", ()=> {expect(fibonacci(3,8)).toEqual([3,5,8])})


test("Başlangıç ve bitiş değeri fibonacci sayısıysa dizinde dönmeli", ()=> {
  expect(fibonacci(3,8)).toContain(3)
  expect(fibonacci(3,8)).toContain(8)
  expect(fibonacci(4,8)).not.toContain(4)
})

test("Dönülen dizin array olmalı", ()=> {expect(Array.isArray(fibonacci(10, 20))).toBeTruthy})


test("Negatif değer olduğunda hata yollamalı", () => {
  expect(() => fibonacci(-3, 8)).toThrow();
  expect(() => fibonacci(3, -8)).toThrow();
  expect(() => fibonacci(-3, -8)).toThrow();
});

test("Decimal argüman aldığında dönüş yapmalı", () => {expect(fibonacci(4.3, 18.8)).toEqual([5,8,13])})
  
test("Başlangıç değeri sıfır olduğunda doğru dizini getirmeli", () => {
  expect(fibonacci(0, 5)).toEqual([1, 1, 2, 3, 5]);
});
  
test("Hem başlangıç hem de bitiş değeri sıfır olursa boş dizin getirmeli", () => {
  expect(fibonacci(0, 0)).toEqual([]);
});

test("Argümanlar eksik olursa veya hiç argüman olmazsa hata yollamalı", () => {
  expect(() => fibonacci(3)).toThrow();
  expect(() => fibonacci()).toThrow();
})

test("Başlangıç değeri bitiş değerinden büyük olursa hata yollamalı", () => {
  expect(() => fibonacci(8, 3)).toThrow();
  expect(() => fibonacci(5, 4)).toThrow();
})

test("Başlangıç değeri ve bitiş değeri birbirine eşit olduğu durumda fibonacci değeriyse değer dönmeli, değilse boş dizin dönmeli", () => {
  expect(fibonacci(3, 3)).toEqual([3])
  expect(fibonacci(4, 4)).toEqual([])
})

test("Argümanlar sayı değilse hata yollamalı", () => {
  expect(() => fibonacci("string", "string")).toThrow()
  expect(() => fibonacci([1, 2, 3], {name: "leonardo", surname: "fibonacci"})).toThrow()
})


