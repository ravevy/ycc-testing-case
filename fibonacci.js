function fibonacci(first, last){
  if (first < 0 || last < 0) {
    throw new Error("Argümanlar pozitif olmalı.");
  }
  if (first > last) {
    throw new Error("Başlangıç parametresi bitiş parametresinden büyük olamaz.")
  }
  if(typeof first !== "number" || typeof last !== "number") {
    throw new Error("Argümanlar sayı haricinde bir değer olamaz.")
  }


  let list = [1, 0];
  let next = 1;
  (function listing(first, last){
    let num = list[0] + list[1]
    if(num > last){
      return list.reverse()
    }
    if (num >= first) {
      list.unshift(num)
    }
    else{
      let temp = next
      next += list[0]
      list[1] = list[0]
      list[0] = temp
    }
    listing(first, last)
  })(first, last);
  return first == 0 & last == 0 ? [] : first > 1 ? list.slice(2) : list.slice(1)
}

module.exports = fibonacci