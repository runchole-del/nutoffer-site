# 坚果留学（Nut Offer）官网 — 项目交接说明

> 这份文档是给 AI 编程助手（如 OpenCode）看的，请完整阅读后再动手改代码。
> 对话背景不在文件里，本文件即全部上下文。

## 一、项目背景

- **公司**：坚果留学（Nut Offer），留学咨询机构
- **Slogan**：精研每一颗坚果，助力破壳而出，绽放世界舞台
- **目标**：品牌展示 + 获客留资
- **目标访客**：想留学的学生（主），兼顾投资人、求职者
- **参考风格**：南安普顿大学官网（学术可信感）+ Booking 官网（转化效率）
- **域名**：暂未注册

## 二、当前状态

已由 OpenCode 接手并扩展为 **静态多页站点**（纯 HTML/CSS/JS，无需构建工具）：
- 页面：`index.html` / `about.html` / `services.html` / `cases.html` / `stories.html` / `story.html` / `news.html` / `news-detail.html` / `contact.html` / `join.html`
- 首页「Success Stories / 他们已经摘到了梦想的果实」板块已改为真实申请故事三卡布局（保留原构图，换成公众号原文故事 + 真实截图），并移除原先单独的申请故事板块；全站导航仍保留「申请故事」
- 共享样式：`assets/css/style.css`（原首页内联样式已抽取，保留原配色/圆角设计系统）
- 共享组件：`assets/js/components.js`（导航、页脚、联系方式集中维护）
- 共享数据与交互：`assets/js/data.js`（团队、案例、公众号申请故事、新闻、岗位示意数据）、`assets/js/main.js`（菜单、筛选、FAQ、新闻/故事详情渲染）
- 公众号 12 篇申请/就读故事已完整搬运：文字 + 本地图片（聊天记录、offer、表情包、感谢信），素材位于 `assets/stories/story-1/`（13 张）、`story-2/`（21 张）、`story-3/`（23 张）、`story-4/`（32 张）、`story-5/`（19 张）、`story-6/`（16 张）、`story-7/`（16 张）、`story-8/`（14 张）、`story-9/`（23 张）、`story-10/`（12 张）、`story-11/`（17 张）、`story-12/`（11 张）
- 响应式已保留并扩展，手机折叠菜单、卡片筛选、FAQ 折叠均已实测可用
- 团队真实头像已本地化到 `assets/team/`（6 张，来自公众号原文）；其余图片素材在 `assets/` 目录，多为示意图，**需替换为客户真实素材**

## 三、设计系统（必须遵守）

| 用途 | 色名 | 色值 |
|---|---|---|
| 主行动色 / 数据 | Tangerine 橘子橙 | `#EB7D00` |
| 深底色 / 标题 | Brunswick Green 不伦瑞克绿 | `#2C5745` |
| 深绿加深 | — | `#1E4032` |
| 点缀 / 标签 | Vanilla 香草黄 | `#EBE3A7` |
| 正文 / 页脚 | Drab Dark Brown 深棕 | `#2E2910` |
| 浅底 | Cream | `#FBF8EF` |

- 字体栈：PingFang SC / Microsoft YaHei / 系统无衬线
- 圆角：卡片 16px，按钮 8px
- 风格：干净、留白充足、卡片化、橙绿对比

## 四、站点地图（含申请故事，共 9 个页面文件）

1. `index.html` 首页 ✅（含醒目的申请故事板块）
2. `about.html` 关于我们 — 公司故事、使命愿景、6 位团队老师完整介绍、投资人/合作伙伴占位、加入我们入口 ✅
3. `services.html` 产品服务 — 4 项服务详情、服务流程 6 步、常见问题 ✅
4. `cases.html` 成功案例 — 6 张学生故事卡片，可按国家/地区与学历筛选 ✅
5. `stories.html` / `story.html` 申请故事 — 公众号原文搬运列表 + 详情（通过 `?id=` 读取）✅（已搬运 12 篇：s1–s12；首页 Success Stories 仍保留 3 卡构图）
6. `news.html` / `news-detail.html` 新闻资讯 — 列表 + 详情（通过 `?id=` 读取）✅
7. `contact.html` 联系我们 — 公司电话、老师手机、微信二维码、办公地址（不接后台表单）✅
8. `join.html` 加入我们 — 招聘岗位、职位详情、投递方式 ✅

## 五、品牌资料（来自公司公众号，可直接用于文案）

### 核心数据
- 申请成功率 99.7%
- 最快 48 小时完成申请
- 10 年+ 从业经验
- 上千所海外院校合作
- 满意度 100%

### 服务理念
没有套路、无任何隐形消费、不过高冲刺不过低保底、定位准确、细致个性化服务

### 服务项目
1. **研究生全程申请**：从申请规划到签证申请全程服务，含选校与专业指导
2. **本科直通车**：本科预科申请规划到签证申请全程服务
3. **名校申请**：高 GPA 学生定制全套名校申请策略，含面试指引
4. **单签证、陪读、探亲**：申根签证服务、联合签证服务，定制方案、指导材料

### 服务流程（6 步）
1. 前期咨询 — 沟通了解需求，介绍留学项目
2. 缴费 — 确定项目，学生缴费
3. 方案制定 — 根据学术背景制定方案，指导选校及准备材料
4. 递交申请 — 递交申请，跟进进度，学生拿 offer
5. 签证服务 — 指导准备签证材料，递交材料获签证
6. 后期服务 — 行前培训、协助申请宿舍、预定机票

### 团队（6 位，完整介绍与真实头像搬运自公众号原文）

来源：`https://mp.weixin.qq.com/s/8ezUrL0I5Usrz001rA4Gyw`《我想承包你所有的offer——坚果留学》「团队风采 / ABOUT US」板块。头像按原文顺序一一对应，位于 `assets/team/`；卡片上带「申请顾问 / 文案老师」标签。

- **Chloe 王老师（申请顾问）**：985 本硕连读，英国南安普顿大学教育学硕士，英国公立高中升学指导老师，CFA 一级，中科院心理咨询师，雅思 7.5（口语 7.5）。9 年经验，累计辅导数百名学生。擅长职业规划、文书头脑风暴、面试培训、美加澳新英顶尖名校本科申请。头像 `chloe.png`
- **米晨老师（申请顾问）**：小坚果留学资深留学规划申请老师，USNEWS 认证专业美国留学业务专家，雅思官方认证、雅思考试专业咨询专家。2010 年入行，15 年经验，擅长广泛国家与专业领域，善于制定个性化方案、梳理背景、明确专业定位、规划时间、挖掘亮点、背景提升。责任心强，深受学生及家长赞赏。头像 `michen.jpg`
- **李玉婷老师（申请顾问）**：985 高校英语专业，专八 + BEC 高级，曾任雅思老师。8 年经验，专注英美澳新低龄/本科/硕士/PhD 申请。头像 `liyuting.jpg`
- **范嘉星老师（文案老师）**：外交学院翻译硕士（英语口译），专八，CATTI 二级口笔译。曾为世界 500 强企业提供英语培训和会议翻译，任知名国际学校升学指导。精通英美文书撰写，擅长港新北美面试辅导，助力港大、港中文、NUS、IC 等录取。头像 `fanjiaxing.jpg`
- **李晶晶老师（文案老师）**：哈尔滨师范大学英语教育本硕，2014 年入行，11 年一线留学文案，服务个案 500+。深谙各国录取评判标准，精通英港新美澳各年龄段申请细节，擅长英港新顶级名校申请与低 GPA 逆袭。头像 `lijingjing.jpg`
- **成容老师（文案老师）**：西安外国语大学英语语言文学，9 年留学文书和申请经验，专八 + 上海高级口译。擅长英联邦硕士、北美硕士及本科高端文书，文笔细腻、情感真挚，助力 LSE、IC、NYU、哥大、UBC、港大、NUS 等录取。头像 `chengrong.jpg`

### 公司地址
陕西省西安市雁塔区 momopark 写字楼 8 楼 806

## 六、待替换的占位内容

1. 公司电话：`029-XXXX XXXX`
2. Chloe 老师手机号：`1XX-XXXX-XXXX`
3. 邮箱：`hello@nutoffer.com`
4. 微信二维码：`assets/js/components.js` 中的 SVG 占位图
5. 学生案例：3 条均为示意内容
6. 除团队真实头像（`assets/team/`）与申请故事真实截图（`assets/stories/`）外，其余图片（公司实景、学生案例等）仍为 Unsplash 示意图，需换客户真实素材

## 七、文件位置与发布说明

- **当前工作目录**：`D:\nutoffer`（所有开发成果都已放在这里）
- **网站根目录**：`D:\nutoffer` 本身（`*.html` + `assets/`）。发布时把这个目录里的网页文件和 `assets/` 上传到静态托管即可，**不要**上传 `deploy/`、`local-server/`、`_archive/`、`.workbuddy/`。
- **现成部署包**：`D:\nutoffer\deploy\nutoffer-site.zip`，重新打包后包含全部 12 篇故事及本地图片，路径均为标准 `/`，解压后直接可传 Netlify / Cloudflare Pages / GitHub Pages / OSS。
- **本地内部预览**：双击 `D:\nutoffer\local-server\START-SITE.bat` 启动；Windows 计划任务 `NutOfferLocalSite` 已配置为登录后自动启动；日志在 `local-server\server.log`。
- 同事访问需先**以管理员身份**运行 `local-server\ALLOW-FIREWALL.bat` 放行 8080 端口（脚本已覆盖 domain/private/public 三种防火墙配置文件；当前 WLAN 已改为「专用网络」，本机与局域网预览均已验证可打开）。
- 当前内网地址 `http://192.168.1.220:8080/`（换网络后 IP 会变，用 `ipconfig` 查 WLAN 的 IPv4 地址再替换）。本机自测可用 `http://127.0.0.1:8080/`。
- 若仍打不开：确认 `NutOfferLocalSite` 计划任务处于 Running，且防火墙规则 `NutOffer Local Site 8080` 已启用。
- `_archive\workbuddy-original\` 保存了 Workbuddy 最初交接的 `index.html` 和 `PROJECT_BRIEF.md` 备份。
- 公众号原文来源：
  - s1《迟来的决意，终赴港校山海》：`https://mp.weixin.qq.com/s/YNKGPGwUJQ-WS3S5nTI0zw`，13 张图 → `assets/stories/story-1/`
  - s2《当我抬起头，你正看向我——211艺术生的港硕传媒上岸之路》：`https://mp.weixin.qq.com/s/2h6LogJkjjS_M7I-R--kBw`，21 张图 → `assets/stories/story-2/`
  - s3《这场巅峰赛，我选择了好队友——打的就是逆风盘！》：`https://mp.weixin.qq.com/s/w5CAYtGO3D212koRqTtZ4Q`，23 张图 → `assets/stories/story-3/`
   - s4《申请故事｜把社科大 argue 进杜伦名单后，我并不想止步于此……》：`https://mp.weixin.qq.com/s/815XGIafZ2jkbaRcGTxtpA`，文章封面 + 正文 32 张图 → `assets/stories/story-4/`（封面存为 `cover.jpg`，正文 `img-01`…`img-32`）
   - s5《申请故事｜“过山车”般的申请季，是你们让我成功拥抱我想要的未来》：同上，临时签名链接，19 张图 → `assets/stories/story-5/`
   - s6《经验分享｜与世界交手的 24 年，我终于赢了一次……Top150》：同上，临时签名链接，16 张图 → `assets/stories/story-6/`
   - s7《就读体验｜从陕师大附中到“苏格兰衡水”》：同上，临时签名链接，16 张图 → `assets/stories/story-7/`
   - 注：s5–s7 的完整 `sourceUrl`（含全部签名参数）已写入 `assets/js/data.js`；因微信限制，桌面端无法取得永久短链，正文与图片已全部本地化，不依赖原文可访问性。
    - 排版说明：详情页正文改为接近公众号的排版（列宽 677px、字号 17px、行距 1.8，图片按原始尺寸居中、不拉伸不变形，且不再显示自加的“原文图片”图注）。
    - 装饰图处理：`decor` 栏目装饰图不展示；加载后宽高都 ≤200px 的小图（蝴蝶贴纸、闪片、栏目小图标等）自动隐藏；真实正文图/截图正常保留。s4 详情页首图为真正的文章封面 `cover.jpg`。
   - s8《就读体验｜“MFA的教育目标，是帮助你成为你想成为的艺术家。” 我的金匠就读体验》：`https://mp.weixin.qq.com/s/av-iknWO8TczPeRRvjxaeQ`，14 张图 → `assets/stories/story-8/`
   - s9《申请故事｜予以音乐人的无限可能，助力西安音乐学院才子斩获纽大、伯克利等名校offer》：`https://mp.weixin.qq.com/s/-TxG-nkduOS-rsDhi16CRA`，23 张图 → `assets/stories/story-9/`
   - s10《申请故事｜来自杨同学妈妈-北外博士兼英语系教授的肯定》：`https://mp.weixin.qq.com/s/xNOBdggGp5vKnJkG1NAOig`，12 张图 → `assets/stories/story-10/`
   - s11《申请故事｜梦想的光照进现实，KCL的奇迹录取之路》：`https://mp.weixin.qq.com/s/ZMYBwUmj4S4_D1xxHNtzJA`，17 张图 → `assets/stories/story-11/`
   - s12《申请故事｜我又划着我的断桨出发了——低GPA逆袭港大申请全历程》：`https://mp.weixin.qq.com/s/CEOCd-Et2yWpmIdFHPXzNA`，11 张图 → `assets/stories/story-12/`

## 八、给接手者的建议任务

- [x] 将单文件 `index.html` 改造为多页面静态工程
- [x] 抽取公共导航、页脚、配色变量为组件
- [x] 按站点地图补齐页面（含申请故事）
- [x] 保持响应式与现有设计语言
- [x] 表单不做后端，联系方式直接展示电话/手机/微信二维码
- [ ] 替换第六节列出的占位内容（电话、手机号、二维码、示意图）
- [x] 继续搬运公众号申请故事：每篇在 `assets/js/data.js` 的 `STORIES` 中新增一条，图片放 `assets/stories/story-N/`（当前已搬运 12 篇：s1–s12；科普读物、讲座、其他账号内容均已排除）
- [ ] 域名注册后，用 `deploy\nutoffer-site.zip` 发布并绑定正式域名
