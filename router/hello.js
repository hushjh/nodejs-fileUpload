var fn_hello = async (ctx, next) => {
  var name = ctx.params.name;
  ctx.response.body = `<h1>Hello, ${name}!</h1>`;
};
var products = [
  {
    name: 'iPhone',
    price: 6999
  }, {
    name: 'Kindle',
    price: 999
  }
]
var fn_products = async (ctx, next) => {
  // 设置Content-Type:
  ctx.response.type = 'application/json';
  // 设置Response Body:
  ctx.response.body = {
      products: products
  };
}
var fn_post_products =  async (ctx, next) => {
  var p = {
      name: ctx.request.body.name,
      price: ctx.request.body.price
  };
  console.log('p', p)
  products.push(p);
  ctx.response.type = 'application/json';
  ctx.response.body = p;
}

module.exports = [
  {
    method: 'get',
    path: '/hello/:name',
    fn: fn_hello
  },
  {
    method: 'get',
    path: '/api/products',
    fn: fn_products
  },
  {
    method: 'post',
    path: '/api/products',
    fn: fn_post_products
  }
];