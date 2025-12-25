---
title: "JavaScript 1 – Câu điều kiện, vòng lặp và hàm"
slug: "javascript-1-condition-loops-functions"
description: "Hiểu sâu về if/else, switch, vòng lặp và hàm – nền tảng tư duy lập trình trong JavaScript."
date: "2025-01-22"
author: "Ryan Quý"
tags:
  - JavaScript
  - Condition
  - Loop
  - Function
  - Programming Fundamentals
category: "JavaScript 1"
readingTime: "28 min"
cover: "blog3.jpg"
published: true
---

# JavaScript 1 – Câu điều kiện, vòng lặp và hàm

## 1. Giới thiệu

Sau khi đã nắm được biến, kiểu dữ liệu và toán tử, bước tiếp theo cực kỳ quan trọng trong JavaScript là **điều khiển luồng chương trình**.  
Ba khái niệm cốt lõi giúp bạn làm được điều đó chính là:

- Câu điều kiện (Condition)
- Vòng lặp (Loop)
- Hàm (Function)

Đây là nền tảng của **mọi chương trình**, từ script đơn giản đến ứng dụng web phức tạp.


## 2. Câu điều kiện trong JavaScript

### 2.1 if / else

Câu lệnh `if` cho phép chương trình **ra quyết định** dựa trên điều kiện.

```js
const age = 20;

if (age >= 18) {
  console.log("Bạn đủ tuổi");
} else {
  console.log("Bạn chưa đủ tuổi");
}
```

Nguyên tắc:
- Điều kiện phải trả về `true` hoặc `false`
- Code chỉ chạy khi điều kiện đúng


### 2.2 else if

Dùng khi có **nhiều nhánh điều kiện**.

```js
const score = 85;

if (score >= 90) {
  console.log("Xuất sắc");
} else if (score >= 70) {
  console.log("Khá");
} else {
  console.log("Trung bình");
}
```


### 2.3 switch case

`switch` phù hợp khi so sánh **một giá trị với nhiều trường hợp cố định**.

```js
const role = "admin";

switch (role) {
  case "admin":
    console.log("Quản trị viên");
    break;
  case "user":
    console.log("Người dùng");
    break;
  default:
    console.log("Khách");
}
```

⚠️ Luôn nhớ `break` để tránh lỗi logic.


## 3. Vòng lặp trong JavaScript

Vòng lặp giúp bạn **lặp lại hành động** nhiều lần.


### 3.1 for loop

```js
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

Cấu trúc:
- Khởi tạo
- Điều kiện
- Tăng/giảm


### 3.2 while loop

```js
let count = 0;

while (count < 3) {
  console.log(count);
  count++;
}
```



### 3.3 do...while

Luôn chạy ít nhất **một lần**.

```js
let x = 5;

do {
  console.log(x);
  x++;
} while (x < 5);
```



### 3.4 for...of (khuyến khích)

```js
const fruits = ["Apple", "Banana", "Orange"];

for (const fruit of fruits) {
  console.log(fruit);
}
```


### 3.5 for...in (ít dùng)

```js
const user = { name: "Alex", age: 20 };

for (const key in user) {
  console.log(key, user[key]);
}
```


## 4. Hàm trong JavaScript

Hàm giúp bạn:
- Tái sử dụng code
- Code gọn gàng
- Dễ bảo trì



### 4.1 Function declaration

```js
function greet(name) {
  return `Hello ${name}`;
}
```


### 4.2 Function expression

```js
const greet = function (name) {
  return `Hello ${name}`;
};
```


### 4.3 Arrow function

```js
const greet = (name) => {
  return `Hello ${name}`;
};
```

Viết ngắn hơn:

```js
const greet = name => `Hello ${name}`;
```


## 5. Tham số và giá trị trả về

```js
function sum(a, b) {
  return a + b;
}

sum(2, 3); // 5
```

Nếu không có `return` → hàm trả về `undefined`.


## 6. Scope trong hàm

```js
let globalVar = "Global";

function test() {
  let localVar = "Local";
  console.log(globalVar);
}
```

- Biến trong hàm không dùng được bên ngoài
- Tránh dùng global variable quá nhiều


## 7. Callback function

Hàm có thể truyền làm tham số.

```js
function handle(callback) {
  callback();
}

handle(() => {
  console.log("Callback executed");
});
```

## 8. Lỗi phổ biến của người mới

- Quên `return`
- Infinite loop
- Lạm dụng `for...in`
- Không hiểu scope


## 9. Best Practices

- Ưu tiên `for...of`
- Dùng arrow function cho code ngắn
- Hàm chỉ nên làm **1 nhiệm vụ**
- Đặt tên hàm rõ nghĩa


## 10. Kết luận

Câu điều kiện, vòng lặp và hàm là **trái tim của lập trình JavaScript**.  
Khi nắm vững phần này, bạn đã sẵn sàng bước sang **JavaScript 2** với các chủ đề nâng cao hơn như array methods, async, DOM và API.