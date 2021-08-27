# 开发指南

## 怎么增删改图标

1. 在packages/icons-svg/svg/shopee下新增svg图标
2. 新增的svg文件请将外层的fill去掉
   
## 怎么调试

1. 根目录下运行 ```yarn gen```
2. npm link包进行调试
 ```sh
  cd packages/icons/react
  npm link
 ```
3. 业务项目中
   ```sh
    npm link infra-design-icons
   ```

## 怎么发布

1. 将变更分支提交pull request到master，注意组请选择infra-fe组（默认是@antd-design组）
2. 在切到master分支 ```npm run publish```,此时npm账号若无权限请找```shengbo.ma@shopee.com```添加npm账号至infra组