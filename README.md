# 🛒 React E-Commerce App

A simple and responsive e-commerce web app built with **React**, **Next.js 15**, **Bootstrap**, and **CSS Modules**.
It features authentication, product management, and a fully functional cart system synced with product stock.

---

## 🚀 Features

- 🧾 **User Authentication** (via Auth Context)
- 🛍️ **Add / Remove Products** from the Cart
- 💬 **Error Handling & Console Logging** for debugging and testing
- 💎 **Responsive UI** with Bootstrap and custom CSS Modules
- 🔐 **Cart linked to Authenticated User**

---

## 🧠 Tech Stack

- **React 19 / Next.js 15**
- **Bootstrap 5**
- **CSS Modules**
- **React Context API** (Auth, Products, Cart)
- **LocalStorage** (for persisting data)

## 🧩 Project Structure

```
src/
 ├─ components/
 │   ├─ ProductCard/
 │   ├─ CartPage/
 ├─ context/
 │   ├─ AuthContext.js
 │   ├─ ProductsContext.js
 │   └─ CartContext.js
 ├─ pages/
 │   ├─ index.jsx
 │   ├─ cart.jsx
 │   └─ login.jsx
 └─ styles/
```

---

## 🧪 Testing

All cart and product interactions are logged to the **console** for easy debugging and validation.
