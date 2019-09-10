const productRouter = {
  route: null,
  name: null,
  title: '商品管理',
  type: 'folder', // 类型: folder, tab, view
  icon: 'iconfont icon-shangpin',
  filePath: 'views/product/', // 文件路径
  order: null,
  inNav: true,
  children: [
    {
      title: '添加商品',
      type: 'view',
      name: 'productAdd',
      route: '/product/add',
      filePath: 'views/product/ProductAdd.vue',
      inNav: true,
      icon: 'iconfont icon-shangpin',
    },
    {
      title: '商品列表',
      type: 'view',
      name: 'productList',
      route: '/product/list',
      filePath: 'views/product/ProductList.vue',
      inNav: true,
      icon: 'iconfont icon-shangpin',
    },
  ],
}

export default productRouter
