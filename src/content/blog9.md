---
title: "Khám Phá Sức Mạnh Của Built-in Objects Trong JavaScript"
slug: "kham-pha-built-in-objects-javascript"
description: "Tìm hiểu chi tiết về các Built-in Objects trong JavaScript: Object, Array, String, Math, Date, JSON, RegExp và ứng dụng thực tế trong lập trình web."
date: "2025-03-01"
author: "Alex"
tags:
  - JavaScript
  - Built-in Objects
  - Array
  - Object
  - Web Development
category: "JavaScript Essentials"
readingTime: "30 min"
cover: "blog3.jpg"
published: true
---

# Khám Phá Sức Mạnh Của Built-in Objects Trong JavaScript

## Giới Thiệu

Trong hành trình học JavaScript, sau khi đã nắm vững các khái niệm cơ bản về biến, kiểu dữ liệu, và cấu trúc điều khiển, chúng ta sẽ bước vào một chương quan trọng: **Built-in Objects** (Đối tượng có sẵn). Đây là Module 3 trong khóa học JavaScript Essentials 2 của Cisco Networking Academy, một phần quan trọng giúp bạn chuẩn bị cho chứng chỉ JSA – Certified Associate JavaScript Programmer.

Built-in Objects là những công cụ mạnh mẽ mà JavaScript cung cấp sẵn, giúp lập trình viên thao tác với dữ liệu, xử lý chuỗi, làm việc với ngày tháng, và thực hiện nhiều tác vụ phức tạp khác một cách hiệu quả. Hiểu rõ và sử dụng thành thạo các đối tượng này là chìa khóa để trở thành một JavaScript developer chuyên nghiệp.

## Built-in Objects Là Gì?

Built-in Objects trong JavaScript là những đối tượng được tích hợp sẵn trong ngôn ngữ, có sẵn để sử dụng mà không cần phải tự định nghĩa hay import từ thư viện bên ngoài. Các đối tượng này cung cấp các phương thức và thuộc tính giúp thực hiện nhiều tác vụ lập trình phổ biến.

Một số Built-in Objects quan trọng nhất bao gồm:

- **Object**: Đối tượng cơ sở cho tất cả các đối tượng khác
- **Array**: Làm việc với mảng dữ liệu
- **String**: Thao tác với chuỗi ký tự
- **Number**: Xử lý các phép toán số học
- **Math**: Các hàm toán học phức tạp
- **Date**: Làm việc với ngày tháng và thời gian
- **RegExp**: Biểu thức chính quy (Regular Expression)
- **JSON**: Xử lý dữ liệu định dạng JSON

## 1. Object - Nền Tảng Của Mọi Thứ

### Khái niệm cơ bản

Object là kiểu dữ liệu phức tạp nhất và quan trọng nhất trong JavaScript. Mọi giá trị phức tạp trong JavaScript đều là đối tượng hoặc kế thừa từ Object.

```javascript
// Tạo object bằng object literal
const person = {
  name: "Nguyễn Văn A",
  age: 25,
  email: "nguyenvana@example.com"
};

// Tạo object bằng constructor
const car = new Object();
car.brand = "Toyota";
car.model = "Camry";
car.year = 2024;
```

### Các phương thức quan trọng của Object

**Object.keys()**: Trả về mảng chứa tất cả các key của object

```javascript
const user = { name: "An", age: 30, city: "Hà Nội" };
const keys = Object.keys(user);
console.log(keys); // ["name", "age", "city"]
```

**Object.values()**: Trả về mảng chứa tất cả các giá trị

```javascript
const values = Object.values(user);
console.log(values); // ["An", 30, "Hà Nội"]
```

**Object.entries()**: Trả về mảng các cặp [key, value]

```javascript
const entries = Object.entries(user);
console.log(entries);
// [["name", "An"], ["age", 30], ["city", "Hà Nội"]]
```

**Object.assign()**: Sao chép các thuộc tính từ object này sang object khác

```javascript
const target = { a: 1 };
const source = { b: 2, c: 3 };
Object.assign(target, source);
console.log(target); // { a: 1, b: 2, c: 3 }
```

### Ứng dụng thực tế

Trong phát triển web, Object được sử dụng rộng rãi để:
- Lưu trữ thông tin người dùng
- Quản lý cấu hình ứng dụng
- Tổ chức dữ liệu từ API
- Tạo các mô hình dữ liệu phức tạp

## 2. Array - Làm Chủ Mảng Dữ Liệu

### Giới thiệu về Array

Array (mảng) là một cấu trúc dữ liệu cho phép lưu trữ nhiều giá trị trong một biến duy nhất. JavaScript cung cấp nhiều phương thức mạnh mẽ để thao tác với mảng.

```javascript
const fruits = ["táo", "chuối", "cam", "xoài"];
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, "hello", true, { name: "An" }];
```

### Các phương thức quan trọng

**push() và pop()**: Thêm và xóa phần tử ở cuối mảng

```javascript
const stack = [1, 2, 3];
stack.push(4); // [1, 2, 3, 4]
stack.pop(); // [1, 2, 3]
```

**shift() và unshift()**: Thêm và xóa phần tử ở đầu mảng

```javascript
const queue = [1, 2, 3];
queue.unshift(0); // [0, 1, 2, 3]
queue.shift(); // [1, 2, 3]
```

**map()**: Tạo mảng mới bằng cách biến đổi từng phần tử

```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
```

**filter()**: Lọc các phần tử thỏa mãn điều kiện

```javascript
const ages = [15, 18, 21, 25, 30];
const adults = ages.filter(age => age >= 18);
console.log(adults); // [18, 21, 25, 30]
```

**reduce()**: Rút gọn mảng thành một giá trị duy nhất

```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 15
```

**find() và findIndex()**: Tìm phần tử và chỉ số của phần tử

```javascript
const users = [
  { id: 1, name: "An" },
  { id: 2, name: "Bình" },
  { id: 3, name: "Chi" }
];

const user = users.find(u => u.id === 2);
console.log(user); // { id: 2, name: "Bình" }

const index = users.findIndex(u => u.id === 2);
console.log(index); // 1
```

**sort()**: Sắp xếp mảng

```javascript
const numbers = [3, 1, 4, 1, 5, 9, 2, 6];
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 1, 2, 3, 4, 5, 6, 9]
```

## 3. String - Xử Lý Chuỗi Ký Tự

### Các phương thức String quan trọng

**length**: Độ dài của chuỗi

```javascript
const message = "Hello World";
console.log(message.length); // 11
```

**toUpperCase() và toLowerCase()**: Chuyển đổi chữ hoa/thường

```javascript
const text = "JavaScript";
console.log(text.toUpperCase()); // "JAVASCRIPT"
console.log(text.toLowerCase()); // "javascript"
```

**substring() và slice()**: Cắt chuỗi con

```javascript
const str = "JavaScript Essentials";
console.log(str.substring(0, 10)); // "JavaScript"
console.log(str.slice(-10)); // "Essentials"
```

**split()**: Chia chuỗi thành mảng

```javascript
const csv = "An,25,Hà Nội";
const data = csv.split(",");
console.log(data); // ["An", "25", "Hà Nội"]
```

**trim()**: Loại bỏ khoảng trắng đầu cuối

```javascript
const messy = "   Hello World   ";
console.log(messy.trim()); // "Hello World"
```

**includes(), startsWith(), endsWith()**: Kiểm tra chuỗi con

```javascript
const url = "https://example.com/page";
console.log(url.includes("example")); // true
console.log(url.startsWith("https")); // true
console.log(url.endsWith(".com/page")); // true
```

**replace() và replaceAll()**: Thay thế chuỗi con

```javascript
const text = "Hello World! World is beautiful.";
console.log(text.replace("World", "JavaScript"));
// "Hello JavaScript! World is beautiful."

console.log(text.replaceAll("World", "JavaScript"));
// "Hello JavaScript! JavaScript is beautiful."
```

## 4. Math - Các Phép Toán Nâng Cao

### Thuộc tính Math

```javascript
console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045
```

### Các phương thức Math phổ biến

**Math.round(), Math.floor(), Math.ceil()**: Làm tròn số

```javascript
console.log(Math.round(4.7)); // 5
console.log(Math.round(4.4)); // 4
console.log(Math.floor(4.9)); // 4 (làm tròn xuống)
console.log(Math.ceil(4.1)); // 5 (làm tròn lên)
```

**Math.min() và Math.max()**: Tìm giá trị nhỏ nhất và lớn nhất

```javascript
console.log(Math.min(5, 10, 2, 8)); // 2
console.log(Math.max(5, 10, 2, 8)); // 10

// Sử dụng với mảng
const numbers = [5, 10, 2, 8];
console.log(Math.max(...numbers)); // 10
```

**Math.random()**: Tạo số ngẫu nhiên

```javascript
// Số ngẫu nhiên từ 0 đến 1
console.log(Math.random());

// Số ngẫu nhiên từ 1 đến 10
const randomNum = Math.floor(Math.random() * 10) + 1;

// Số ngẫu nhiên trong khoảng min-max
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
```

**Math.pow() và Math.sqrt()**: Lũy thừa và căn bậc hai

```javascript
console.log(Math.pow(2, 3)); // 8 (2^3)
console.log(Math.sqrt(16)); // 4
console.log(Math.sqrt(2)); // 1.4142135623730951
```

**Math.abs()**: Giá trị tuyệt đối

```javascript
console.log(Math.abs(-5)); // 5
console.log(Math.abs(5)); // 5
```

## 5. Date - Làm Việc Với Thời Gian

### Tạo đối tượng Date

```javascript
// Ngày giờ hiện tại
const now = new Date();

// Từ chuỗi
const specificDate = new Date("2024-12-25");

// Từ các tham số
const customDate = new Date(2024, 11, 25, 10, 30, 0);
// Lưu ý: tháng bắt đầu từ 0 (0 = tháng 1)
```

### Các phương thức Date quan trọng

**Lấy thông tin**

```javascript
const date = new Date();

console.log(date.getFullYear()); // Năm (2024)
console.log(date.getMonth()); // Tháng (0-11)
console.log(date.getDate()); // Ngày trong tháng (1-31)
console.log(date.getDay()); // Ngày trong tuần (0-6)
console.log(date.getHours()); // Giờ (0-23)
console.log(date.getMinutes()); // Phút (0-59)
console.log(date.getSeconds()); // Giây (0-59)
```

**Thiết lập thông tin**

```javascript
const date = new Date();
date.setFullYear(2025);
date.setMonth(5); // Tháng 6
date.setDate(15);
```

**Định dạng ngày tháng**

```javascript
const date = new Date();

console.log(date.toDateString());
// "Wed Dec 25 2024"

console.log(date.toLocaleDateString('vi-VN'));
// "25/12/2024"

console.log(date.toLocaleString('vi-VN'));
// "25/12/2024 10:30:00"
```

**Tính toán thời gian**

```javascript
// Tính số ngày giữa hai ngày
function daysBetween(date1, date2) {
  const oneDay = 24 * 60 * 60 * 1000;
  return Math.round(Math.abs((date1 - date2) / oneDay));
}

const start = new Date("2024-01-01");
const end = new Date("2024-12-31");
console.log(daysBetween(start, end)); // 365
```

## 6. JSON - Làm Việc Với Dữ Liệu

### JSON là gì?

JSON (JavaScript Object Notation) là định dạng trao đổi dữ liệu phổ biến nhất hiện nay, đặc biệt trong việc giao tiếp giữa client và server.

### JSON.stringify() - Chuyển đổi sang JSON

```javascript
const user = {
  name: "Nguyễn Văn An",
  age: 25,
  email: "an@example.com",
  hobbies: ["đọc sách", "thể thao"]
};

const jsonString = JSON.stringify(user);
console.log(jsonString);
// '{"name":"Nguyễn Văn An","age":25,"email":"an@example.com","hobbies":["đọc sách","thể thao"]}'

// Với indentation để dễ đọc
const prettyJson = JSON.stringify(user, null, 2);
```

### JSON.parse() - Phân tích chuỗi JSON

```javascript
const jsonString = '{"name":"An","age":25}';
const obj = JSON.parse(jsonString);
console.log(obj.name); // "An"
console.log(obj.age); // 25
```

### Ứng dụng thực tế với API

```javascript
// Gửi dữ liệu đến server
async function createUser(userData) {
  const response = await fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  });
  
  const result = await response.json();
  return result;
}

// Nhận dữ liệu từ server
async function getUser(id) {
  const response = await fetch(`/api/users/${id}`);
  const user = await response.json();
  return user;
}
```

## 7. RegExp - Biểu Thức Chính Quy

### Giới thiệu RegExp

Regular Expression (biểu thức chính quy) là công cụ mạnh mẽ để tìm kiếm và thao tác với chuỗi theo mẫu.

### Tạo RegExp

```javascript
// Sử dụng literal
const pattern1 = /hello/i; // i = case insensitive

// Sử dụng constructor
const pattern2 = new RegExp("hello", "i");
```

### Các phương thức RegExp

**test()**: Kiểm tra chuỗi có khớp với mẫu không

```javascript
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(emailPattern.test("user@example.com")); // true
console.log(emailPattern.test("invalid-email")); // false
```

**exec()**: Tìm kiếm và trả về thông tin chi tiết

```javascript
const pattern = /(\d{3})-(\d{3})-(\d{4})/;
const result = pattern.exec("Số điện thoại: 123-456-7890");
console.log(result[0]); // "123-456-7890"
console.log(result[1]); // "123"
console.log(result[2]); // "456"
console.log(result[3]); // "7890"
```

### Các phương thức String sử dụng RegExp

**match()**: Tìm tất cả kết quả khớp

```javascript
const text = "Giá: 100.000đ, 200.000đ, 300.000đ";
const prices = text.match(/\d+\.\d+/g);
console.log(prices); // ["100.000", "200.000", "300.000"]
```

**replace() với RegExp**

```javascript
const text = "Hello World! World is beautiful.";
const result = text.replace(/world/gi, "JavaScript");
console.log(result);
// "Hello JavaScript! JavaScript is beautiful."
```

**search()**: Tìm vị trí đầu tiên khớp

```javascript
const text = "JavaScript is amazing!";
const position = text.search(/is/);
console.log(position); // 11
```

### Ứng dụng thực tế

**Validation email**

```javascript
function validateEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}
```

**Validation số điện thoại Việt Nam**

```javascript
function validatePhone(phone) {
  const pattern = /^(0|\+84)(3|5|7|8|9)\d{8}$/;
  return pattern.test(phone);
}
```

**Validation mật khẩu mạnh**

```javascript
function validatePassword(password) {
  // Ít nhất 8 ký tự, có chữ hoa, chữ thường, số và ký tự đặc biệt
  const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return pattern.test(password);
}
```

**Trích xuất thông tin từ chuỗi**

```javascript
const text = "Họ tên: Nguyễn Văn An, Email: an@example.com, SĐT: 0912345678";

const nameMatch = text.match(/Họ tên:\s*([^,]+)/);
const emailMatch = text.match(/Email:\s*([^,]+)/);
const phoneMatch = text.match(/SĐT:\s*(\d+)/);

console.log(nameMatch[1]); // "Nguyễn Văn An"
console.log(emailMatch[1]); // "an@example.com"
console.log(phoneMatch[1]); // "0912345678"
```

## Dự Án Thực Hành: Ứng Dụng Quản Lý Sinh Viên

Để củng cố kiến thức về Built-in Objects, hãy xây dựng một ứng dụng quản lý sinh viên đơn giản:

```javascript
class StudentManager {
  constructor() {
    this.students = [];
  }

  // Thêm sinh viên
  addStudent(name, email, phone, birthDate) {
    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      throw new Error("Email không hợp lệ");
    }

    // Validate phone
    const phonePattern = /^(0|\+84)(3|5|7|8|9)\d{8}$/;
    if (!phonePattern.test(phone)) {
      throw new Error("Số điện thoại không hợp lệ");
    }

    const student = {
      id: Date.now(),
      name: name.trim(),
      email: email.toLowerCase(),
      phone,
      birthDate: new Date(birthDate),
      createdAt: new Date()
    };

    this.students.push(student);
    return student;
  }

  // Tìm sinh viên theo tên
  findByName(searchName) {
    return this.students.filter(student =>
      student.name.toLowerCase().includes(searchName.toLowerCase())
    );
  }

  // Tính tuổi sinh viên
  calculateAge(student) {
    const today = new Date();
    const birthDate = new Date(student.birthDate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age;
  }

  // Lấy danh sách sinh viên theo độ tuổi
  getStudentsByAgeRange(minAge, maxAge) {
    return this.students.filter(student => {
      const age = this.calculateAge(student);
      return age >= minAge && age <= maxAge;
    });
  }

  // Sắp xếp theo tên
  sortByName() {
    return [...this.students].sort((a, b) =>
      a.name.localeCompare(b.name, 'vi')
    );
  }

  // Export dữ liệu ra JSON
  exportToJSON() {
    return JSON.stringify(this.students, null, 2);
  }

  // Import dữ liệu từ JSON
  importFromJSON(jsonString) {
    try {
      const data = JSON.parse(jsonString);
      this.students = data.map(student => ({
        ...student,
        birthDate: new Date(student.birthDate),
        createdAt: new Date(student.createdAt)
      }));
      return true;
    } catch (error) {
      console.error("Lỗi import dữ liệu:", error);
      return false;
    }
  }

  // Thống kê
  getStatistics() {
    const ages = this.students.map(s => this.calculateAge(s));
    
    return {
      total: this.students.length,
      averageAge: Math.round(
        ages.reduce((sum, age) => sum + age, 0) / ages.length
      ),
      minAge: Math.min(...ages),
      maxAge: Math.max(...ages)
    };
  }
}

// Sử dụng
const manager = new StudentManager();

manager.addStudent(
  "Nguyễn Văn An",
  "an@example.com",
  "0912345678",
  "2000-05-15"
);

manager.addStudent(
  "Trần Thị Bình",
  "binh@example.com",
  "0987654321",
  "2001-08-20"
);

console.log("Tìm sinh viên:", manager.findByName("An"));
console.log("Thống kê:", manager.getStatistics());
console.log("Danh sách sắp xếp:", manager.sortByName());

// Export/Import
const jsonData = manager.exportToJSON();
console.log("Dữ liệu JSON:", jsonData);
```

## Best Practices Khi Sử Dụng Built-in Objects

### 1. Hiểu rõ tính Immutable và Mutable

Một số phương thức thay đổi mảng gốc (mutable), một số tạo mảng mới (immutable):

```javascript
// Mutable (thay đổi mảng gốc)
const arr1 = [1, 2, 3];
arr1.push(4); // arr1 = [1, 2, 3, 4]

// Immutable (tạo mảng mới)
const arr2 = [1, 2, 3];
const arr3 = arr2.concat(4); // arr2 vẫn là [1, 2, 3], arr3 là [1, 2, 3, 4]
```

### 2. Sử dụng Method Chaining

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = numbers
  .filter(n => n % 2 === 0)
  .map(n => n * 2)
  .reduce((sum, n) => sum + n, 0);

console.log(result); // 60
```

### 3. Tránh lạm dụng Regular Expression phức tạp

```javascript
// Khó đọc
const pattern1 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// Dễ hiểu hơn
function validatePassword(password) {
  const minLength = password.length >= 8;
  const hasLowerCase = /[a-z]/.test(password);
  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[@$!%*?&]/.test(password);
  
  return minLength && hasLowerCase && hasUpperCase && hasNumber && hasSpecialChar;
}
```

### 4. Cẩn thận với Date và Timezone

```javascript
// Sử dụng ISO string để tránh vấn đề timezone
const date = new Date();
const isoString = date.toISOString();
console.log(isoString); // "2024-12-25T03:30:00.000Z"

// Parse lại
const parsedDate = new Date(isoString);
```

### 5. Sử dụng Optional Chaining với Object

```javascript
const user = {
  name: "An",
  address: {
    city: "Hà Nội"
  }
};

// Cách cũ
const street = user.address && user.address.street;

// Cách mới (ES2020+)
const street2 = user.address?.street;
```

## Kết Luận

Built-in Objects là nền tảng của lập trình JavaScript hiện đại. Việc nắm vững các đối tượng này không chỉ giúp bạn viết code hiệu quả hơn mà còn mở ra khả năng xử lý các bài toán phức tạp một cách tự tin.

Những điểm chính cần nhớ:

1. **Object** là nền tảng của mọi kiểu dữ liệu phức tạp trong JavaScript
2. **Array** cung cấp các phương thức mạnh mẽ cho việc xử lý dữ liệu tập hợp
3. **String** giúp thao tác linh hoạt với văn bản
4. **Math** hỗ trợ các phép toán số học phức tạp
5. **Date** cho phép làm việc với thời gian một cách chính xác
6. **JSON** là cầu nối quan trọng trong việc trao đổi dữ liệu
7. **RegExp** mang lại sức mạnh trong pattern matching và validation
