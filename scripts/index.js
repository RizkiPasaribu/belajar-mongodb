// Compound index
// Create index at category in products collection
// 1 artinya nanti di urutkan secara ascending
db.products.createIndex({
  category: 1,
});

// Get all indexes in products collection
db.products.getIndexes();

// Find products by category (will use index)
db.products.find({
  category: "food",
});

// Debugging query optimization
db.products
  .find({
    category: "food",
  })
  .explain();
db.products
  .find({})
  .sort({
    category: 1,
  })
  .explain();

// Compound index
// Create index at price and tags in products collection
db.products.createIndex({
  stock: 1,
  tags: 1,
});

// Find products by stock and tags (will use index)
db.products.find({
  stock: 10,
  tags: "popular",
});

// misal kita buat 3 index
//  1  kena index
//  1,2 kena index
//  1,2,3 kena index
//  2 tidak kena index
// Kesimpulan => jadi dia harus ber urutan

// Debugging query optimization
db.products
  .find({
    stock: 10,
  })
  .explain();
db.products
  .find({
    stock: 10,
    tags: "popular",
  })
  .explain();
db.products
  .find({
    tags: "popular",
  })
  .explain();
