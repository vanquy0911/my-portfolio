---
title: "Networking Basics – IP Address, Domain và DNS hoạt động như thế nào?"
slug: "networking-basics-ip-domain-dns"
description: "Giải thích IP Address, Domain, DNS và cách trình duyệt tìm server khi người dùng truy cập website."
date: "2025-01-12"
author: "Ryan Quý"
tags:
  - Networking
  - DNS
  - IP Address
  - Internet
category: "Networking Basics"
readingTime: "12 min"
cover: "blog2.jpg"
published: true
---

# Networking Basics – IP Address, Domain và DNS hoạt động như thế nào?

## 1. Giới thiệu

Khi bạn truy cập một website như `google.com`, trình duyệt phải tìm được địa chỉ IP chính xác của server. Quá trình này được thực hiện bởi hệ thống DNS.

---

## 2. IP Address là gì?

IP Address là địa chỉ định danh của thiết bị trong mạng.

Ví dụ:
- `192.168.1.1`
- `8.8.8.8`

### Public IP và Private IP
- Public IP: truy cập từ Internet
- Private IP: mạng nội bộ

---

## 3. IPv4 và IPv6

### IPv4
- 32-bit
- Số lượng giới hạn

### IPv6
- 128-bit
- Giải quyết vấn đề thiếu IP

---

## 4. Domain là gì?

Domain là tên đại diện cho IP, giúp người dùng dễ nhớ hơn.

Ví dụ:
- `facebook.com`
- `github.com`

---

## 5. DNS là gì?

DNS (Domain Name System) là hệ thống chuyển đổi domain thành IP, giống như danh bạ của Internet.

---

## 6. Quy trình DNS hoạt động

1. Người dùng nhập domain
2. Trình duyệt kiểm tra cache
3. Gửi request tới DNS resolver
4. DNS trả về IP
5. Trình duyệt kết nối server

---

## 7. Các loại DNS Record phổ biến

- **A Record** – IPv4
- **AAAA Record** – IPv6
- **CNAME** – Alias
- **MX** – Mail server

---

## 8. DNS và Load Balancing

Một domain có thể trỏ tới nhiều IP để phân tải và tăng độ ổn định cho hệ thống.

---

## 9. Kết luận

Hiểu IP, Domain và DNS giúp developer tự tin hơn khi deploy và vận hành website.
