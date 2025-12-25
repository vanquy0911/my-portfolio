---
title: "JavaScript 2 – Promise, Async/Await và Xử Lý Bất Đồng Bộ"
slug: "javascript-2-promises-async-await"
description: "Tìm hiểu sâu về lập trình bất đồng bộ trong JavaScript với Callback, Promise và Async/Await, kèm ví dụ thực tế và best practices."
date: "2025-02-05"
author: "Alex"
tags:
  - JavaScript
  - Async
  - Promise
  - Async Await
  - Web Development
category: "JavaScript 2"
readingTime: "25 min"
cover: "blog3.jpg"
published: true
---

# JavaScript 2 – Promise, Async/Await và Xử Lý Bất Đồng Bộ

## 1. Giới thiệu

Trong JavaScript hiện đại, **bất đồng bộ (Asynchronous Programming)** là một trong những kiến thức quan trọng nhất mà lập trình viên bắt buộc phải nắm vững. Hầu hết các ứng dụng web ngày nay đều làm việc với:

- Gọi API
- Đọc / ghi dữ liệu
- Xử lý sự kiện người dùng
- Giao tiếp với server

Tất cả các tác vụ này đều **không nên chặn luồng chính (main thread)**. Vì vậy, JavaScript cung cấp nhiều cơ chế để xử lý bất đồng bộ, tiêu biểu là **Callback**, **Promise** và **Async/Await**.

Bài viết này sẽ giúp bạn hiểu rõ:
- Bất đồng bộ là gì?
- Vì sao cần Promise?
- Async/Await hoạt động như thế nào?
- Cách viết code sạch, dễ đọc và ít bug hơn

---

## 2. JavaScript và mô hình đơn luồng

JavaScript là ngôn ngữ **single-threaded** (đơn luồng), nghĩa là tại một thời điểm chỉ thực thi **một đoạn code**.

Nếu JavaScript chạy các tác vụ tốn thời gian (như gọi API) theo kiểu đồng bộ, giao diện web sẽ bị **đóng băng**.

Ví dụ đồng bộ (không nên dùng):

```js
const data = fetchDataFromServer(); // mất 3s
console.log(data);
```

👉 Giải pháp: sử dụng **bất đồng bộ**.

---

## 3. Callback và Callback Hell

### 3.1 Callback là gì?

Callback là một **hàm được truyền vào hàm khác** và sẽ được gọi khi tác vụ hoàn thành.

Ví dụ:

```js
function fetchData(callback) {
  setTimeout(() => {
    callback("Data loaded");
  }, 2000);
}

fetchData((result) => {
  console.log(result);
});
```

### 3.2 Callback Hell

Khi callback lồng nhau quá nhiều, code sẽ rất khó đọc:

```js
login(user, () => {
  getProfile(() => {
    getPosts(() => {
      getComments(() => {
        console.log("Done");
      });
    });
  });
});
```

👉 Nhược điểm:
- Khó bảo trì
- Khó debug
- Dễ lỗi

---

## 4. Promise – Giải pháp cho Callback Hell

### 4.1 Promise là gì?

**Promise** đại diện cho một giá trị **chưa có kết quả ngay**, nhưng sẽ có trong tương lai.

Promise có 3 trạng thái:
- `pending`
- `fulfilled`
- `rejected`

Ví dụ Promise cơ bản:

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success");
  }, 2000);
});
```

### 4.2 Sử dụng Promise

```js
promise
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error(error);
  });
```

### 4.3 Chuỗi Promise (Promise chaining)

```js
fetchUser()
  .then(user => fetchPosts(user.id))
  .then(posts => fetchComments(posts[0].id))
  .then(comments => console.log(comments))
  .catch(err => console.error(err));
```

👉 Code **phẳng hơn**, dễ đọc hơn callback.

---

## 5. Async / Await – Cách viết Promise hiện đại

### 5.1 Async/Await là gì?

`async/await` là cú pháp **viết Promise theo phong cách đồng bộ**, giúp code:

- Dễ đọc
- Dễ debug
- Dễ bảo trì

Ví dụ:

```js
async function fetchData() {
  const data = await fetch("/api/data");
  return data.json();
}
```

### 5.2 await hoạt động như thế nào?

- `await` chỉ dùng được trong hàm `async`
- Tạm dừng hàm đó cho đến khi Promise hoàn thành
- **Không chặn main thread**

---

## 6. Xử lý lỗi với try/catch

Khi dùng async/await, xử lý lỗi nên dùng `try/catch`:

```js
async function loadUser() {
  try {
    const res = await fetch("/api/user");
    const user = await res.json();
    console.log(user);
  } catch (error) {
    console.error("Error loading user:", error);
  }
}
```

👉 Code rõ ràng, dễ quản lý lỗi hơn `.catch()`.

---

## 7. Promise.all, Promise.race

### 7.1 Promise.all

Chạy **song song** nhiều Promise:

```js
const [users, posts] = await Promise.all([
  fetchUsers(),
  fetchPosts()
]);
```

👉 Tăng hiệu năng đáng kể.

### 7.2 Promise.race

Lấy Promise hoàn thành **sớm nhất**:

```js
Promise.race([
  fetchFast(),
  fetchSlow()
]).then(result => console.log(result));
```

---

## 8. Ứng dụng thực tế trong dự án Web

Async/Await thường được dùng trong:
- Gọi REST API
- Authentication
- Load dữ liệu trang
- Submit form

Ví dụ trong React:

```js
useEffect(() => {
  const fetchData = async () => {
    const res = await fetch("/api/posts");
    const data = await res.json();
    setPosts(data);
  };
  fetchData();
}, []);
```

---

## 9. Lỗi phổ biến khi dùng Async

❌ Quên `await`  
❌ Không bọc `try/catch`  
❌ Gọi async trong `forEach`  
❌ Không xử lý lỗi Promise

---

## 10. Best Practices

- Ưu tiên async/await
- Luôn xử lý lỗi
- Dùng Promise.all khi có thể
- Tránh callback lồng nhau

---

## 11. Kết luận

Promise và Async/Await là nền tảng của JavaScript hiện đại. Khi nắm vững bất đồng bộ, bạn sẽ:

- Viết code sạch hơn
- Ứng dụng chạy nhanh hơn
- Dễ tiếp cận các framework như React, Node.js

Đây là kiến thức **bắt buộc** cho mọi lập trình viên JavaScript chuyên nghiệp.