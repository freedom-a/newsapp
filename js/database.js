var lanmus=[
	{id:1,name:'订阅'},
	{id:2,name:'热点'},
	{id:3,name:'玩乐'},
	{id:4,name:'社区'}
];
var smalllanmus=[
	{id:1,name:'关注'},
	{id:2,name:'精选'},
	{id:3,name:'发现'}
];
var content=[
	{id:1,title:'今日看点',picture:'img/11.jpg',catid:1},
	{id:2,title:'头条新闻',picture:'img/22.jpg',catid:1},
	{id:3,title:'财经新闻',picture:'img/33.jpg',catid:1},
	{id:4,title:'科技频道',picture:'img/44.jpg',catid:1},
	{id:5,title:'视频',picture:'img/55.jpg',catid:1},
	{id:6,title:'冷笑话',picture:'img/66.jpg',catid:1},
	{id:7,title:'百思不得姐',picture:'img/77.jpg',catid:1},
	{id:8,title:'中新网',picture:'img/88.jpg',catid:1},
	{id:9,title:'国际在线',picture:'img/99.jpg',catid:1},
	{id:10,title:'数码测评',picture:'img/1010.jpg',catid:1},
	{id:11,title:'娱乐八卦',picture:'img/1111.jpg',catid:1},
	{id:12,title:'橘子娱乐',picture:'img/1212.jpg',catid:1},
	{id:13,title:'南都娱乐周刊',picture:'img/1313.jpg',catid:1},
	{id:14,title:'旅游频道',picture:'img/1414.jpg',catid:1},
	{id:15,title:'孤独星球杂志',picture:'img/1515.jpg',catid:1},
	{id:16,title:'时尚频道',picture:'img/1616.jpg',catid:1},
	{id:17,title:'VOGUE时尚网',picture:'img/1717.jpg',catid:1},
	{id:18,title:'投资理财',picture:'img/1818.jpg',catid:1},
	{id:19,title:'网贷之家',picture:'img/1919.jpg',catid:1},
	{id:20,title:'游戏资讯',picture:'img/2020.jpg',catid:1},
	{id:21,title:'电玩巴士',picture:'img/2121.jpg',catid:1},
	{id:22,title:'一个学校3学生 残疾教师38年走山路',content:'',small:'腾讯新闻 2分钟前',picture:'img/re1.jpg',catid:2},
	{id:23,title:'山东一高校学生每天“赶火车”吃饭',content:'',small:'中国日报 4分钟前',picture:'img/re2.jpg',catid:2},
	{id:24,title:'汽车高速发飘是因为车辆重量太轻吗？',content:'',small:'SUV大师 5分钟前',picture:'img/re3.jpg',catid:2},
	{id:25,title:'无惧PM2.5扎克伯格在天安门广场跑步',content:'',small:'IT之家 3分钟前',picture:'img/re4.jpg',catid:2},
	{id:26,title:'这些党外精英都是部委实权派 有何深意',content:'',small:'政知局 5分钟前',picture:'img/re5.jpg',catid:2},
	{id:26,title:'这些党外精英都是部委实权派 有何深意',content:'',small:'政知局 5分钟前',picture:'img/re5.jpg',catid:2},
	{id:26,title:'这些党外精英都是部委实权派 有何深意',content:'',small:'政知局 5分钟前',picture:'img/re5.jpg',catid:2},
	{id:27,title:'这些隐士小店 把春天都锁了起来',content:'',small:'今年探春来点不一样的',picture:'img/play1.jpg',catid:3},
	{id:28,title:'一个中国人少还免签的神秘海岛',content:'',small:'隐藏在斐济隔壁的库克群岛',picture:'img/play2.jpg',catid:3},
	{id:29,title:'光顾过定制西装店',content:'',small:'才有可能走上人生巅峰',picture:'img/play3.jpg',catid:3},
	{id:30,title:'结婚20年没买房 住车里却很幸福',content:'',small:'这对夫妇有点猛',picture:'img/play4.jpg',catid:3},
	{id:30,title:'结婚20年没买房 住车里却很幸福',content:'',small:'这对夫妇有点猛',picture:'img/play4.jpg',catid:3},
	{id:30,title:'结婚20年没买房 住车里却很幸福',content:'',small:'这对夫妇有点猛',picture:'img/play4.jpg',catid:3},
	{id:31,picture:'img/sheguan.jpg',smallid:1,catid:4},
	{id:32,smallpicture:'img/jing1.jpg',name:'胡子拉碴的二货',smallone:'7小时前',smalltwo:'#物质懂小姐的精神生活',content:'男士香水，有推荐的吗',picture:'img/re3.jpg',smallid:2,catid:4},
	{id:33,smallpicture:'img/jing2.jpg',name:'南瓜不是瓜',smallone:'17小时前',smalltwo:'#我们都爱化妆品',content:'大雨在家无聊，模仿微博上的网红妆',picture:'img/re4.jpg',smallid:2,catid:4},
	{id:34,title:'扎推',small:'活捉小秘书活动开始咯',picture:'img/fa1.jpg',smallpicture:'img/fatubiao.jpg',smallid:3,catid:4},
	{id:35,title:'女神转型计',small:'女生小天地',picture:'img/fa2.jpg',smallpicture:'img/fatubiao.jpg',smallid:3,catid:4},
	{id:36,title:'数码脑残粉',small:'数码科技达人聚集地',picture:'img/fa3.jpg',smallpicture:'img/fatubiao.jpg',smallid:3,catid:4},
	{id:37,title:'看了还拉别人看的电影',small:'观影福利:《蝙蝠侠大战超人》',picture:'img/fa4.jpg',smallpicture:'img/fatubiao.jpg',smallid:3,catid:4},
	{id:38,title:'颤抖吧，吃货！',small:'分享你的生活美食，做一枚快乐的吃货',picture:'img/fa5.jpg',smallpicture:'img/fatubiao.jpg',smallid:3,catid:4},
	{id:38,title:'颤抖吧，吃货！',small:'分享你的生活美食，做一枚快乐的吃货',picture:'img/fa5.jpg',smallpicture:'img/fatubiao.jpg',smallid:3,catid:4},
	{id:38,title:'颤抖吧，吃货！',small:'分享你的生活美食，做一枚快乐的吃货',picture:'img/fa5.jpg',smallpicture:'img/fatubiao.jpg',smallid:3,catid:4},
];