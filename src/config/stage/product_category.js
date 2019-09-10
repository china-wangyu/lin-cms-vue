const productCategoryRouter = {
  route: null,
  name: null,
  title: '分类管理',
  type: 'folder', // 类型: folder, tab, view
  icon: 'iconfont icon-shangpinfenlei',
  filePath: 'views/product_category/', // 文件路径
  order: null,
  inNav: true,
  children: [
    {
      title: '添加分类',
      type: 'view',
      name: 'productCategoryAdd',
      route: '/product_category/add',
      filePath: 'views/product_category/ProductCategoryAdd.vue',
      inNav: true,
      icon: 'iconfont icon-shangpinfenlei',
    },
    {
      title: '分类列表',
      type: 'view',
      name: 'productCategoryList',
      route: '/product_category/list',
      filePath: 'views/product_category/ProductCategoryList.vue',
      inNav: true,
      icon: 'iconfont icon-shangpinfenlei',
    },
  ],
}

export default productCategoryRouter
