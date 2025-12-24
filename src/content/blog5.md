---
title: "JavaScript 1 – Biến, kiểu dữ liệu và toán tử"
slug: "javascript-1-variables-data-types-operators"
description: "Tìm hiểu sâu về biến, kiểu dữ liệu, dynamic typing, toán tử và cách JavaScript xử lý dữ liệu trong thực tế."
date: "2025-01-20"
author: "Ryan Quý"
tags:
  - JavaScript
  - Variables
  - Data Types
  - Operators
  - Programming Fundamentals
category: "JavaScript 1"
readingTime: "22 min"
cover: "blog2.jpg"
published: true
---

# JavaScript 1 – Biến, kiểu dữ liệu và toán tử

## 1. Giới thiệu

Trong JavaScript, biến và kiểu dữ liệu là nền tảng cốt lõi. Nếu không hiểu rõ phần này, bạn sẽ rất dễ gặp bug khó hiểu, đặc biệt khi làm việc với logic phức tạp hoặc framework như React, Node.js.

Bài viết này giúp bạn:
- Hiểu đúng cách khai báo biến
- Phân biệt rõ các kiểu dữ liệu
- Tránh các lỗi phổ biến về toán tử và so sánh
- Hiểu JavaScript xử lý dữ liệu như thế nào phía sau

---

## 2. Biến là gì?

Biến (variable) là nơi lưu trữ dữ liệu để sử dụng trong chương trình.

```js
let age = 20;
let name = "Alex";
```

Bạn có thể hình dung biến giống như một chiếc hộp có nhãn, bên trong chứa giá trị.

---

## 3. Các cách khai báo biến trong JavaScript

### 3.1 `var` – Cách cũ (không khuyến khích)

```js
var username = "Alex";
```

Nhược điểm:
- Không có block scope
- Dễ bị ghi đè
- Hoisting gây khó debug

👉 Tránh dùng `var` trong code hiện đại.

---

### 3.2 `let` – Cách dùng phổ biến

```js
let score = 100;
score = 120;
```

Đặc điểm:
- Có block scope
- Có thể gán lại giá trị
- An toàn hơn `var`

---

### 3.3 `const` – Khuyến khích sử dụng

```js
const PI = 3.14;
```

Đặc điểm:
- Không thể gán lại
- Code dễ đọc
- Ít bug hơn

⚠️ `const` không khóa object:

```js
const user = { name: "Alex" };
user.name = "John"; // Hợp lệ
```

---

## 4. Scope của biến

### 4.1 Global Scope
Biến khai báo ngoài function, dùng được ở mọi nơi.

### 4.2 Function Scope
Biến khai báo trong function, chỉ dùng trong function.

### 4.3 Block Scope
`let` và `const` chỉ tồn tại trong `{}`.

---

## 5. Kiểu dữ liệu trong JavaScript

JavaScript là ngôn ngữ **dynamic typing**.

### 5.1 Primitive Types

- Number
- String
- Boolean
- Undefined
- Null
- Symbol
- BigInt

```js
let age = 20;
let isLogin = true;
```

---

### 5.2 Reference Types

- Object
- Array
- Function

```js
const user = { name: "Alex", age: 20 };
```

---

## 6. Primitive vs Reference

```js
const a = { x: 1 };
const b = { x: 1 };

a === b; // false
```

Primitive so sánh bằng giá trị, Reference so sánh bằng địa chỉ bộ nhớ.

---

## 7. Type Coercion

```js
"5" + 1; // "51"
"5" - 1; // 4
```

👉 Luôn dùng `===` thay vì `==`.

---

## 8. Toán tử trong JavaScript

### 8.1 Toán tử số học
`+ - * / %`

### 8.2 Toán tử so sánh
- `==`
- `===`

### 8.3 Toán tử logic
`&& || !`

---

## 9. Truthy & Falsy

Falsy values:
- false
- 0
- ""
- null
- undefined
- NaN

---

## 10. Lỗi phổ biến của người mới

- Dùng `var`
- Nhầm `==` và `===`
- Không hiểu scope
- Hiểu sai reference

---

## 11. Best Practices

- Ưu tiên `const`
- Dùng `let` khi cần thay đổi
- Tránh global variable
- So sánh bằng `===`

---

## 12. Kết luận

Nắm vững biến, kiểu dữ liệu và toán tử sẽ giúp bạn học JavaScript nhanh và chắc hơn rất nhiều.
