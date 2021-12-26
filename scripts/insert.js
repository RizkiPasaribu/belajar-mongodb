// Insert document customers
db.customers.insertOne({
  _id: "khannedy",
  name: "Eko Kurniawan Khannedy",
});

// Insert document products dan sekaligus membuat collection jika colection tidak ada, numberlong merupkan tipe data
db.products.insertMany([
  {
    _id: 1,
    name: "Indomie Ayam Bawang",
    price: new NumberLong(2000),
  },
  {
    _id: 2,
    name: "Mie Sedap",
    price: new NumberLong(2000),
  },
]);

// Insert document orders and embeded
// new object id berfungsi agar menjenerate id
db.orders.insertOne({
  _id: new ObjectId(),
  total: new NumberLong(8000),
  items: [
    {
      product_id: 1,
      price: new NumberLong(2000),
      quantity: new NumberInt(2),
    },
    {
      product_id: 2,
      price: new NumberLong(2000),
      quantity: new NumberInt(2),
    },
  ],
});
