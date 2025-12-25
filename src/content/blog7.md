---
title: "JavaScript 2 – Array & Object nâng cao"
slug: "javascript-2-array-object-nang-cao"
description: "Hiểu sâu về Array và Object trong JavaScript: phương thức nâng cao, immutable, destructuring, spread/rest, deep vs shallow copy và ứng dụng thực tế."
date: 2025-01-10
author: "Nguyễn Văn Quý"
tags: ["JavaScript", "JavaScript 2", "Array", "Object", "Web Development"]
category: "JavaScript 2"
readingTime: "25 min"
cover: "blog3.jpg"
published: true
---

# JavaScript 2 – Array & Object nâng cao

## 1. Giới thiệu

Trong JavaScript, **Array** và **Object** là hai kiểu dữ liệu nền tảng và được sử dụng thường xuyên nhất. Ở JavaScript 1, chúng ta thường chỉ làm quen với các thao tác cơ bản như khai báo mảng, truy cập phần tử, thêm/xóa phần tử đơn giản hoặc thao tác với object thông qua key/value.

Sang **JavaScript 2**, yêu cầu đặt ra không chỉ là “biết dùng”, mà là **hiểu sâu cách chúng hoạt động**, viết code **clean, tối ưu, dễ bảo trì**, và phù hợp với các framework hiện đại như **React, Node.js**.

Bài viết này sẽ đi sâu vào:
- Các phương thức Array nâng cao
- Immutable vs Mutable
- Destructuring, Spread, Rest
- Làm việc nâng cao với Object
- Shallow copy vs Deep copy
- Ứng dụng thực tế trong dự án web

---

## 2. Array nâng cao trong JavaScript

### 2.1 Array là gì? (nhắc lại ngắn gọn)

Array là một tập hợp các phần tử, được đánh chỉ số (index) bắt đầu từ 0.

```js
const numbers = [1, 2, 3, 4, 5];
```

Trong JavaScript, Array thực chất là một **object đặc biệt**, có các phương thức tích hợp sẵn để thao tác dữ liệu.

---

### 2.2 Các phương thức Array quan trọng

#### map()

`map()` dùng để **tạo ra một mảng mới** từ mảng ban đầu, mỗi phần tử được biến đổi theo một logic nhất định.

```js
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);

console.log(doubled); // [2, 4, 6]
```

👉 Đặc điểm:
- Không làm thay đổi mảng gốc
- Rất phổ biến trong React để render list

---

#### filter()

`filter()` dùng để **lọc dữ liệu** theo điều kiện.

```js
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(n => n % 2 === 0);

console.log(evenNumbers); // [2, 4]
```

👉 Dùng nhiều trong:
- Tìm kiếm
- Lọc danh sách
- Xử lý dữ liệu API

---

#### reduce()

`reduce()` là phương thức **mạnh nhất và khó nhất**, dùng để gộp mảng thành một giá trị duy nhất.

```js
const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((total, current) => {
  return total + current;
}, 0);

console.log(sum); // 10
```

Ứng dụng thực tế:
- Tính tổng
- Gom nhóm dữ liệu
- Chuyển array → object

---

#### some() và every()

- `some()` → kiểm tra **ít nhất một phần tử đúng**
- `every()` → kiểm tra **tất cả phần tử đúng**

```js
const scores = [70, 80, 90];

scores.some(score => score < 75); // true
scores.every(score => score >= 60); // true
```

---

### 2.3 Mutable vs Immutable Array

#### Mutable (thay đổi mảng gốc)
- push()
- pop()
- splice()
- sort()

```js
const arr = [1, 2, 3];
arr.push(4); // arr bị thay đổi
```

#### Immutable (không thay đổi mảng gốc)
- map()
- filter()
- concat()
- spread operator

```js
const arr = [1, 2, 3];
const newArr = [...arr, 4];
```

👉 Trong React, **luôn ưu tiên immutable** để tránh bug và re-render sai.

---

## 3. Object nâng cao trong JavaScript

### 3.1 Object là gì?

Object lưu trữ dữ liệu dưới dạng **key – value**.

```js
const user = {
  name: "Alex",
  age: 20,
  isStudent: true
};
```

---

### 3.2 Truy cập và thao tác với Object

```js
console.log(user.name);
console.log(user["age"]);
```

Thêm / sửa thuộc tính:

```js
user.email = "alex@email.com";
user.age = 21;
```

---

### 3.3 Destructuring Object

Destructuring giúp **viết code ngắn gọn và rõ ràng hơn**.

```js
const user = {
  name: "Alex",
  age: 20,
  country: "Vietnam"
};

const { name, age } = user;
console.log(name, age);
```

👉 Rất phổ biến trong:
- React props
- API response

---

### 3.4 Spread & Rest với Object

#### Spread

```js
const user = { name: "Alex", age: 20 };
const newUser = { ...user, age: 21 };

console.log(newUser);
```

#### Rest

```js
const { name, ...rest } = user;
console.log(rest); // { age: 20 }
```

---

### 3.5 Object methods hữu ích

- Object.keys()
- Object.values()
- Object.entries()

```js
Object.keys(user);    // ["name", "age"]
Object.values(user); // ["Alex", 20]
Object.entries(user); // [["name", "Alex"], ["age", 20]]
```

👉 Dùng khi cần loop object.

---

## 4. Shallow Copy vs Deep Copy

### 4.1 Shallow Copy

```js
const user = { name: "Alex", address: { city: "HCM" } };
const copyUser = { ...user };

copyUser.address.city = "HN";
console.log(user.address.city); // "HN"
```

👉 Vấn đề: object lồng nhau vẫn bị tham chiếu.

---

### 4.2 Deep Copy

#### Cách 1: JSON

```js
const deepCopy = JSON.parse(JSON.stringify(user));
```

❌ Nhược điểm:
- Mất function
- Không dùng được với Date, undefined

#### Cách 2: structuredClone()

```js
const deepCopy = structuredClone(user);
```

👉 Cách hiện đại, an toàn hơn.

---

## 5. Ứng dụng thực tế

### 5.1 Trong React

```js
setUsers(prevUsers =>
  prevUsers.map(user =>
    user.id === id ? { ...user, active: true } : user
  )
);
```

### 5.2 Khi xử lý API

```js
const formattedData = data.map(item => ({
  id: item.id,
  name: item.name,
  price: item.price
}));
```

---

## 6. Lỗi phổ biến cần tránh

- Mutate state trực tiếp
- Dùng map nhưng không return
- Hiểu sai shallow copy
- Lạm dụng reduce

---

## 7. Kết luận

Array và Object nâng cao là **nền tảng cực kỳ quan trọng** để:
- Viết code JavaScript chuyên nghiệp
- Làm việc hiệu quả với React, Node.js
- Xử lý dữ liệu API

Nắm vững các khái niệm trong bài này sẽ giúp bạn:
- Code sạch hơn
- Ít bug hơn
- Tư duy tốt hơn khi xây dựng ứng dụng web thực tế

---

**Gợi ý học tiếp:**
- JavaScript 2 – Promise & Async/Await  
- JavaScript 2 – Closure & Scope  
- JavaScript 2 – Prototype & OOP