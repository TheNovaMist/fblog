/*
SQLyog Community v13.1.9 (64 bit)
MySQL - 8.0.23 : Database - fblog
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`fblog` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `fblog`;

/*Table structure for table `blog` */

DROP TABLE IF EXISTS `blog`;

CREATE TABLE `blog` (
  `blog_name` varchar(45) NOT NULL,
  `power` varchar(45) NOT NULL,
  `user_name` varchar(45) NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `user_password` varchar(45) NOT NULL,
  `user_display_name` varchar(45) DEFAULT NULL,
  `about` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

/*Data for the table `blog` */

insert  into `blog`(`blog_name`,`power`,`user_name`,`id`,`user_password`,`user_display_name`,`about`) values 
('kikukaji\'s blog','@kikukaji','kikukaji',1,'20010809','爱吃香菜的馄饨君','我的博客，快来看看吧！');

/*Table structure for table `post` */

DROP TABLE IF EXISTS `post`;

CREATE TABLE `post` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  `description` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `content` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `createAt` datetime NOT NULL,
  `updateAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8;

/*Data for the table `post` */

insert  into `post`(`id`,`title`,`description`,`content`,`createAt`,`updateAt`) values 
(1,'分离背景音乐和人声','一些参考，不得不感叹机器学习是真的厉害啊。','## 准备\r\n\r\n- 使用BBDown下载视频。\r\n- 重命名\r\n- 提取片段\r\n\r\n```powershell\r\nbbdown --audio-only https://www.bilibili.com/bangumi/play/ep477128 \r\nRename-Item -Path \'.\\测不准的阿波连同学`[P7`]7 这是艺术了吧？.mp4\' \'p7_audio.mp4\'\r\nffmpeg -ss 00:14:17 -to 00:14:50 -i p7_audio.mp4 -c:v copy -c:a copy p7_audio_v2.mp4\r\n```\r\n\r\np7_audio_v2.mp4\r\n\r\n**转换成WAV格式。**\r\n\r\n```powershell\r\nffmpeg -i .\\p7_audio_v2.mp4 -ac 2 -f wav p7_audio_v2.wav\r\n```\r\n\r\n\r\n\r\n## 提取人声\r\n\r\n- [LALAL.AI: 100% AI-Powered Vocal and Instrumental Tracks Remover](https://www.lalal.ai/) \r\n  免费版只支持上传 wav 格式音频，有使用10min总时长。**十几秒的需求就用它。**\r\n\r\n- [deezer/spleeter: Deezer source separation library including pretrained models. (github.com)](https://github.com/deezer/spleeter)\r\n  ❌下面的命令无法安装\r\n  使用 [spleeterGUI](https://makenweb.com/SpleeterGUI) \r\n  [一 键 完 美 提 取 人 声_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV163411C7Ax) **用百度网盘下吧。。**\r\n\r\n  ```powershell\r\n  mkdir MyApp\r\n  cd MyApp\r\n  py -m venv env\r\n  .\\env\\Scripts\\activate # 运行激活脚本就会进入虚拟环境\r\n  deactivate # 离开虚拟环境\r\n  # 接下来就可以在一个干净的环境安装包了\r\n  pip config set global.index-url https://mirrors.aliyun.com/pypi/simple/\r\n  pip config set install.trusted-host mirrors.aliyun.com\r\n  py -m pip install spleeter\r\n  \r\n  # download an example audio file (if you don\'t have wget, use another tool for downloading)\r\n  wget https://github.com/deezer/spleeter/raw/master/audio_example.mp3\r\n  # separate the example audio into two components\r\n  spleeter separate -p spleeter:2stems -o output audio_example.mp3\r\n  ```\r\n\r\n- **也可以去找多声道片源用pr提取**\r\n\r\n\r\n\r\n## 合成\r\n\r\nAVC — h.264\r\n\r\nHEVC — h.265\r\n\r\n必剪要用小丸先压一遍，否则画面会乱码。\r\n\r\n\r\n\r\n','2022-08-18 11:11:45','2022-08-19 18:09:00'),
(2,'电商平台月饼礼盒最贵不超500元 多数都是499元','距离中秋还有不到一个月的时间...据商家透露，今年不让做月饼加补品礼盒了，月饼包装被要求“减负”...家发展改革委等部门联合发布《关于遏制“天价”月饼、促进行业健康发展的公告》，表示要对单价超过500元的盒装月饼实行重点','为何曾经动辄上千元甚至高达万元的月饼礼盒今年在电商平台搜索不到了呢？一位从事月饼礼盒经销商商家告诉封面新闻记者“今年没有(加补品礼盒)，国家规定不让做了。”\r\n\r\n而具体缘由，我们需将时间轴拉回到今年6月，国家发展改革委等四部门联合发布了《关于遏制“天价”月饼、促进行业健康发展的公告》，强调月饼礼盒不得以任何形式搭售其他商品，提出要对单价超过500元的盒装月饼实行重点监管。\r\n\r\n同时，今年国家市场监管总局发布的《限制商品过度包装要求食品和化妆品》国家标准第1号修改单正式实施。修改单主要对月饼、粽子的包装作出明确规定。包装层数从最多不超过四层减少为最多不超过三层。还有压缩包装空隙、降低包装成本、不应与其他产品混装等。\r\n\r\n对此业内人士认为，该新规对行业发展是有利的。可能会对一些高端月饼品牌产生影响，但对中高端及以下的月饼品牌是一种利好。\r\n\r\n而对于网上购买由于无法看到实物，对月饼的生产日期、保质期、厂家、配料等具体情况了解相对困难；在邮寄过程中无法保证有良好的保存环境，可能出现挤压变形、包装破损而受到污染、变质等问题；同时月饼是易腐食品，不支持七天无理由退换，在售后服务消费维权等方面都存在很大的困难这类的问题，业内人士建议网购月饼时，尽量选择正规网站或知名品牌厂家的官方网站。\r\n\r\n并且需要特别注意的是，目前市面上销售的月饼类型较多，但月饼所标注的保质期差异较大。目前为止，国家并未明确统一保存期限，月饼能保存多久，多是企业按照自身工艺制定标准，根据不同工艺水平和风险考虑，制定了不同的保质期。其中，苏式月饼保质期较长，港式月饼保质期较短。所以无论是从食品安全角度还是从营养学角度而言，在加工工艺和配料条件相同的前提下，可优先考虑保质时间相对较短的商品。','2022-08-18 11:15:29',NULL),
(3,'Redmi K50 至尊版追货提量，年内还有多款新品发布','今年 7 月份，小米 MIX Fold 2 折叠屏手机、Redmi K50 至尊版发布，其中首销取得了小米 MIX Fold 2 折叠屏 5 分钟售罄，Redmi K50 至尊版 5 分钟销量突破 12 万台的成绩。','![f20acf04ab6bc0fce4d9c72de8eb244ec1a1b8e9.png (547×531) (hdslb.com)](/src/assets/Snipaste_2022-08-31_09-26-15.png)\r\n\r\n今年 7 月份，小米 MIX Fold 2 折叠屏手机、Redmi K50 至尊版发布，其中**首销取得了小米 MIX Fold 2 折叠屏 5 分钟售罄，Redmi K50 至尊版 5 分钟销量突破 12 万台的成绩**。\r\n\r\n小米 MIX Fold 2 搭载高通骁龙 8+ Gen 1 芯片、LPDDR5 内存、UFS 3.1 闪存。该机采用 8.02 英寸 2016×1914 内屏（三星 Eco² OLED，1000nit，120Hz 刷新率，LTPO 2.0，Pol-less 去偏光片，P3 广色域，JNCD≈0.29、ΔE≈0.34，杜比视界、HDR 10+，前后双光感，UTG 保护玻璃）以及 6.56 英寸 2520×1080 居中挖孔 OLED 外屏（三星 E5，1000nit，120Hz 刷新率，P3 广色域，JNCD≈0.29、ΔE≈0.34，杜比视界、HDR 10+，10bit 色深，前后双光感，康宁 Victus 保护玻璃），采用自研一体化微水滴转轴加持的铰链，转轴零件数量仅 87 个，转轴区域利用率 90%，转轴折叠厚度 8.8mm，重量减轻 35%；一体化超薄碳纤维浮板，1/5 不锈钢重量下实现 7 倍抗拉伸能力。\r\n\r\n小米 MIX Fold 2 外屏部分前置 20MP 镜头，采用 50MP 主摄 + 13MP 超广角 + 8MP 人像长焦镜头，通过徕卡 Summicron 认证，支持徕卡经典、徕卡生动双画质风格，支持 30 张 / 秒闪电连拍、CyberFocus 万物追焦、杜比视界 HDR 视频拍摄等。\r\n\r\n其他方面，小米 MIX Fold 2 采用了 4500mAh 双电池，支持 67W 快充，40 分钟可充电 100%，厚 5.4mm / 11.2mm，重 262g，有月影黑、星耀金 2 款配色，配双扬声器，支持哈曼卡顿调音、杜比全景声 + Hi-Res 双认证，配备线性马达，预装适配大屏的 MIUI Fold 13 系统（基于 Android 12L），兼容 5000 款应用。','2022-08-19 04:38:16',NULL),
(4,'《挪威的森林》：在摇摆中寻找意义','就是一些文本哪里会有人喜欢孤独！\r\n不过是不乱交朋友罢了。那样只会落得失望。 ','渡边在设定上就是一个特殊的人，性格不羁，不参加社团，大部分时候独来独往，常常联系的朋友也只有永泽一个。在餐厅初遇绿子时，渡边说：“哪里会有人喜欢孤独！不过是不乱交朋友罢了。那样只会落得失望。”渡边在高中时交过一个最好的朋友木月，也因此结识了木月的恋人直子。三人小团体外出游玩，谈天说地，极尽青春气息。但之后木月没有任何预兆地自杀，直子也因此患上了间歇性精神疾病。这场悲剧将渡边拉扯到了生与死的境地边缘，彻底地改变了渡边的人生。因为害怕失去，渡边逐渐在自身周围竖起壁垒，不再主动寻求友情和爱情。又或者，“不乱交朋友”指的是，渡边在内心抱着自卑却又自傲的心情，固执地认为身边的人大多是庸俗无为之辈，交往了也收获不了任何东西。但同时，渡边无法割舍对直子的感情，成为了直子精神上的慰藉。渡边也无法拒绝绿子热烈迅猛的爱意，身处漩涡亦听之任之。\r\n\r\n渡边习惯了被裹挟，被带领着前进，如若没有人打破局面，渡边便会如潜艇一般兀自扎进自己孤独的海洋里。\r\n\r\n渡边在过去和未来间摇摆。我读《挪》时总有一种感觉：直子映射着过去。这个过去有美好温馨的成分，却一直蒙着凄惨哀婉的外衣。渡边同情直子，之后渐渐爱上了直子，希望直子能治好精神疾病开始新的人生。其实，渡边也是在帮助直子的过程中尝试让自己摆脱过去的情结。那绿子这个豪爽的女生是映射着未来吗？不，因为渡边对自己的未来是完全迷惘的。舍友“敢死队”一生的梦想是在国土地理院绘制地图，渡边认为这卑微又可怜。朋友永泽展现惊人的才能，轻轻松松通过万里挑一的考试，渡边觉得厉害但也没有任何羡慕。\r\n\r\n渡边没有思考过自己最想要什么，想成为什么。\r\n\r\n![img](/src/assets/Snipaste_2022-08-31_09-35-40.png)\r\n\r\n关于这一点，许多人感同身受，尤其是大学生。处于半社会这一中间地段的大学生多多少少怀着既怀念旧生活制度的保护又渴望独立却对自身学习和就业无所适从的复杂心情。我们何尝没有摇摆过呢？学习专业课的时候，我们也经常会疑惑，这些知识是不是真的有用？我们参加各种各样的社团，却不敢肯定这些形形色色的活动到底有没有锻炼我们的能力，对未来究竟有没有帮助。我们时常平衡不了我们可以要什么和我们想要什么。沉溺于过去的人一眼可辨，但外表沉稳自信的人内心可能对未来也是彷徨迷惘的。\r\n\r\n叔本华曾说：“人生就像钟摆，在痛苦和倦怠之间摇摆。”这句话不无悲观之嫌，因为叔本华把人视作欲望的火焰，认为欲望得不到满足就是痛苦，欲望满足了之后紧接而来的就是倦怠。但这句话和渡边的生活有契合之处。渡边每天读着书，上着课，与两位女生联系着，但却没有认真想过自己想要什么。是想要给予直子爱，还是仅仅想给她安慰？是想要高尚独特的友情，还是只想一个人自由地过着？渡边在欲望中摇摆，在摇摆中寻找着人生的意义。\r\n\r\n或许在摇摆中寻找意义，是我们每个人都无可避免的事吧。但我们从未放弃思考。我们思考什么是正确的，什么是自己想要的，什么是有意义的。因为思考，因为怀疑，我们会痛苦，会迷惘。因为深知梦想和现实隔着厚实的冰墙，我们愿意在茫茫冰原上寻找方向，寻找最薄弱的冰层全力打破。\r\n\r\n《挪威的森林》描绘的是渡边的青春迷失，但我们有自己的后续。起码，我选择温暖而不是孤独，我选择奔走而不是守望。\r\n\r\n 作者：Peterjrui https://www.bilibili.com/read/cv2267860?from=search&spm_id_from=333.337.0.0 出处：bilibili','2022-08-19 04:38:16',NULL),
(5,'滚筒还是涡轮？该怎么选洗衣机','非常推荐大家单独购买一台干衣机，不仅更干净，维护时候也更轻松。如果空间不足，那么也只能踩坑洗烘一体的洗衣机，挑选时一定需要购买烘干风道比较短的，或是热泵一体式的，因为热泵式需要更好的处理好绒毛。','[不买可以先收藏 01：好的洗衣机贵在哪？](https://sspai.com/post/65393)\r\n\r\n> 结论：西门子、博世（同产线），更高预算选择美诺。\r\n\r\n| 滚筒式                                                       | 波轮式                                                       |\r\n| ------------------------------------------------------------ | ------------------------------------------------------------ |\r\n| 开头向前，**省空间，重量大。**                               | 开口向上                                                     |\r\n| 噪音小，**用水少。**                                         |                                                              |\r\n| 适合在家                                                     | **适合租房，搬动轻松**                                       |\r\n| <img src=\"https://i.loli.net/2021/03/27/wKyntDsN8CqjWvP.png\" alt=\"img\" style=\"zoom: 50%;\" /> | <img src=\"https://i.loli.net/2021/03/27/p3n7dhi1skG4eRy.png\" alt=\"img\" style=\"zoom:25%;\" /> |\r\n\r\n区分**最大容量** 和 **洗涤容量**。\r\n\r\n> 1-2 人需要 6kg，普通的一家三口就需要 8kg，如果人数多或是家里有两床以上的床单被套要洗， 一定要选择 9kg 及以上的洗衣机。\r\n\r\n**烘干**\r\n\r\n> 非常推荐大家单独购买一台干衣机，不仅更干净，维护时候也更轻松。如果空间不足，那么也只能踩坑洗烘一体的洗衣机，**挑选时一定需要购买烘干风道比较短的，或是热泵一体式的，因为热泵式需要更好的处理好绒毛。**','2022-08-19 04:38:16',NULL),
(6,'chocolatey设置代理','解决软件无法下载的问题','![chocolatey](/src/assets/chocolatey-icon.png)\r\n\r\n\r\n\r\nTODO：一些使用介绍。\r\n\r\n## 问题\r\n\r\n在之前配好了命令行的代理之后，使用 `curl` 命令测试能够访问 google。\r\n\r\n但是在使用 `choco` 命令时候又出现了错误。\r\n\r\n```cmd\r\nError retrieving packages from source \'https://chocolatey.org/api/v2/\':\r\n 无法连接到远程服务器\r\n```\r\n\r\n**研究了一下，发现还是需要为 `choco` 命令单独设置代理。**\r\n\r\n---\r\n\r\n## 设置 choco 代理\r\n\r\n```cmd\r\nchoco config set proxy http://127.0.0.1:[port]\r\nchoco config unset proxy # 重置\r\n```\r\n\r\n\r\n\r\n## 参考\r\n\r\n[Chocolatey Software Docs | Use Chocolatey w/Proxy Server](https://docs.chocolatey.org/en-us/guides/usage/proxy-settings-for-chocolatey#explicit-proxy-settings)\r\n\r\n','2022-08-19 04:38:16',NULL),
(28,'可以吗','测试','要是没有这条应该怎么办？？？','2022-09-23 15:48:56',NULL);

/*Table structure for table `post_has_tag` */

DROP TABLE IF EXISTS `post_has_tag`;

CREATE TABLE `post_has_tag` (
  `post_id` int NOT NULL,
  `tag_id` int NOT NULL,
  PRIMARY KEY (`post_id`,`tag_id`),
  KEY `fk_post_has_tag_tag1_idx` (`tag_id`),
  KEY `fk_post_has_tag_post_idx` (`post_id`),
  CONSTRAINT `fk_post_has_tag_post` FOREIGN KEY (`post_id`) REFERENCES `post` (`id`),
  CONSTRAINT `fk_post_has_tag_tag1` FOREIGN KEY (`tag_id`) REFERENCES `tag` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `post_has_tag` */

insert  into `post_has_tag`(`post_id`,`tag_id`) values 
(1,1),
(2,1),
(5,1),
(6,1),
(28,1),
(4,2),
(28,2),
(1,3),
(3,3),
(6,3);

/*Table structure for table `tag` */

DROP TABLE IF EXISTS `tag`;

CREATE TABLE `tag` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  `slug` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8;

/*Data for the table `tag` */

insert  into `tag`(`id`,`title`,`slug`) values 
(1,'生活','生活'),
(2,'读书','读书'),
(3,'科技','科技'),
(34,'测试','测试'),
(53,'你好','你好');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
