# 总仓库更新日志

## 20200629
1. 支持仓库通知，仓库JSON格式要改为 { notice:仓库通知, data:原本的规则数组 }
2. 作者仓库列表移至小棉袄的码云的 [authorList.json(点击跳转到链接)](https://gitee.com/qiusunshine233/hikerView/blob/master/ruleversion/authorList.json)，与总仓库JSON同目录，以后更新作者仓库用这个
3. 增加例子隐藏符号"[例子]"，通过 needHideEtc 变量控制。默认不隐藏，若需要隐藏请找到  needHideEtc 变量 并把值设为 true。
4. 优化一些提示
5. 规则仓库加入 tips 字段，大佬们可以给自己的规则加点提示

## 20200628
1. 现在支持公开仓库和私人仓库混合显示啦！具体请看规则中的私人仓库例子~
2. 修复总仓库更新程序

## 20200627
1. 二级列表版初版，二级列表的注意事项一定要看！