//hàm để user nhập giá trị vào tính toán
let numArray = [];
//hàm thêm số vào mảng
function showNumber() {
  let number = +document.getElementById("number").value;
  numArray.push(number);
  document.getElementById("result").innerHTML = numArray;
}
//hàm xóa số vừa nhập khỏi mảng
function removeNumber() {
  numArray.pop();
  document.getElementById("result").innerHTML = numArray;
}
//-----------------------------------------------------------------------------------
//hàm tính tổng số dương của bt1
function sumPositive() {
  let sumPositive = 0;
  for (let i = 0; i < numArray.length; i++) {
    //kiểm tra nếu phần tử là số dương thì cộng dồn vào tổng rồi xuất kết quả
    if (numArray[i] > 0) {
      sumPositive += numArray[i];
    }
  }
  document.getElementById("sum").innerHTML = `Tổng số dương : ${sumPositive}`;
}
//----------------------------------------------------------------------------------
// hàm đếm số dương bt2
function countPositive() {
  let count = 0;
  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] > 0) {
      count += 1;
    }
  }
  document.getElementById("count").innerHTML = ` Số dương: ${count}`;
}
//----------------------------------------------------------------------------------
// hàm tìm số nhỏ nhất bt3
//hàm để đưa vào sort để săp xếp giá trị từ thấp đến cao
function compare(a, b) {
  return a - b;
}
function smallestNumber() {
  numArray.sort(compare);
  //lấy giá trị đầu tiên do trước đó đã sort
  let smNumber = numArray[0];
  document.getElementById("smNumber").innerHTML = `Số nhỏ nhất: ${smNumber}`;
}
//----------------------------------------------------------------------------------
//hàm tìm số dương nhỏ nhất bt 4
function smallestPositive() {
  let newArray = [];
  for (let i = 0; i <= numArray.length; i++) {
    //tìm số >0 và gắn vào mảng mới để sort lấy giá trị nhỏ nhất
    if (numArray[i] > 0) {
      newArray.push(numArray[i]);
    }
  }
  if (newArray.length > 0) {
    newArray.sort(compare);
    let smPositive = newArray[0];
    document.getElementById(
      "smPositive"
    ).innerHTML = `Số dương nhỏ nhất: ${smPositive}`;
  } else {
    document.getElementById(
      "smPositive"
    ).innerHTML = `Không có số dương trong mảng`;
  }
}
//----------------------------------------------------------------------------------
//hàm tìm số chẵn cuối cùng bt5
function lastEven() {
  let numberEven = 0;
  for (let i = 0; i <= numArray.length; i++) {
    if (numArray[i] % 2 === 0) {
      numberEven = numArray[i];
    }
  }
  document.getElementById(
    "numberEven"
  ).innerHTML = `Số chẵn cuối cùng: ${numberEven}`;
}
//----------------------------------------------------------------------------------
//bt6
//hàm đổi vị trí 2 giá trị bất kì trong mảng,gán giá trị như gợi ý
function changePlace() {
  let index1 = +document.getElementById("index1").value;
  let index2 = +document.getElementById("index2").value;
  if (
    index1 < 0 ||
    index1 > numArray.length ||
    index2 < 0 ||
    index2 > numArray.length
  ) {
    document.getElementById("place").innerHTML = `Vị trí cần đổi không hợp lệ`;
  } else {
    let temporary = numArray[index1];
    numArray[index1] = numArray[index2];
    numArray[index2] = temporary;
    document.getElementById(
      "place"
    ).innerHTML = ` Mảng sau khi đổi chỗ: ${numArray} `;
  }
}
//----------------------------------------------------------------------------------
//bt7
function sort() {
  numArray.sort(compare);
  document.getElementById(
    "sortAscending"
  ).innerHTML = `Mảng sau khi sắp xếp : ${numArray}`;
}
//----------------------------------------------------------------------------------
// //bt8
//hàm kiểm tra số nguyên tố
function isPrime(n) {
  if (n < 2) {
    return false;
  }
  if (n === 2) {
    return true;
  }
  if (n % 2 === 0) {
    return false;
  }
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
//hàm tìm số nguyên tố
function fisrtPrime() {
  // tạo biến để nhận giá trị snt đầu khi tìm khi trong mảng
  let fisrtPrime = 0;
  for (let i = 0; i <= numArray.length; i++) {
    if (isPrime(numArray[i])) {
      fisrtPrime = numArray[i];
    }
    break;
  }
  //kiểm tra nếu có giá trị thì sẽ lớn hơn 0 thì xuất ra kết quả và ngược lại
  if (fisrtPrime > 0) {
    document.getElementById(
      "prime"
    ).innerHTML = `Số nguyên tố đầu tiên : ${fisrtPrime}`;
  } else {
    document.getElementById(
      "prime"
    ).innerHTML = `Không có số nguyên tố trong mảng`;
  }
}
//----------------------------------------------------------------------------------
//đếm số nguyên bt 9
let array = [];
function showNumber2() {
  let number2 = +document.getElementById("number2").value;
  array.push(number2);
  document.getElementById("result2").innerHTML = array;
}
// hàm đếm số nguyên
function countInteger() {
  //tạo biến đếm số nguyên
  let count = 0;
  for (let i = 0; i <= array.length; i++) {
    //Sử dụng Number.isInteger để kiểm tra số nguyên sau đó cộng dần vào biến đếm và xuất ra giá trị
    if (Number.isInteger(array[i])) {
      count++;
    }
  }
  document.getElementById("integer").innerHTML = `Số nguyên: ${count}`;
}
//----------------------------------------------------------------------------------
//bt10
function compareQuantity() {
  //tạo biến đếm số âm và dương
  let negative = 0;
  let positive = 0;
  //dùng vòng lặp duyệt mảng rồi xét điều kiện để đếm số lượng số âm và dương
  for (let i = 0; i <= numArray.length; i++) {
    if (numArray < 0) {
      negative++;
    } else {
      positive++;
    }
  }
  if (negative > positive) {
    document.getElementById("compare").innerHTML = `Số âm > Số dương`;
  } else if (negative < positive) {
    document.getElementById("compare").innerHTML = `Số âm < Số dương`;
  } else {
    document.getElementById("compare").innerHTML = `Số âm = Số dương`;
  }
}
