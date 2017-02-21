var nav = ["精选大牌", "手机必抢", "电脑必抢", "数码必抢", "彩电必抢", "冰洗必抢", "空调必抢", "厨卫必抢", "生活电器", "百货必抢", "超市必抢", "母婴必抢", "海外必抢"],
    imgArray = [{
        link: "http://m.suning.com/product/0000000000/171958785.html",
        img: "img/1.jpg"
    }, {
        link: "http://m.suning.com/product/0000000000/136368730.html",
        img: "img/2.jpg"
    }, {
        link: "http://m.suning.com/product/0000000000/127345183.html",
        img: "img/3.jpg"
    }, {
        link: "http://m.suning.com/product/0000000000/140843141.html",
        img: "img/4.jpg"
    }, {
        link: "http://m.suning.com/product/0000000000/151436937.html",
        img: "img/5.jpg"
    }, {
        link: "http://m.suning.com/product/0000000000/181059989.html",
        img: "img/6.jpg"
    }, {
        link: "http://m.suning.com/product/0000000000/146715326.html",
        img: "img/7.jpg"
    }, {
        link: "http://m.suning.com/product/0000000000/161842828.html",
        img: "img/8.jpg"
    }, {
        link: "http://m.suning.com/product/0000000000/103798029.html",
        img: "img/9.jpg"
    }],
    goodsData = [
        [{
            link: "http://m.suning.com/product/0000000000/181059981.html",
            goodsName: "红米4 2+16GB 金色",
            price: "699",
            sale: "699"
        }, {
            link: "http://m.suning.com/product/0000000000/171958785.html",
            goodsName: "iPhone 7 128GB 亮黑色",
            price: "5888",
            sale: "5?88"
        }, {
            link: "http://m.suning.com/product/0000000000/104885911.html",
            goodsName: "iPad mini2 32G",
            price: "1888",
            sale: "1788"
        }, {
            link: "http://m.suning.com/product/0000000000/103798029.html",
            goodsName: "佳能单反700D(18-55)",
            price: "3699",
            sale: "3??9"
        }, {
            link: "http://m.suning.com/product/0000000000/102365474.html",
            goodsName: "佳能单反5D MARKⅢ (24-105)",
            price: "19999",
            sale: "18299"
        }, {
            link: "http://m.suning.com/product/0000000000/162039807.html",
            goodsName: "索尼55英寸4K安卓智能6.0",
            price: "6999",
            sale: "4399"
        }, {
            link: "http://m.suning.com/product/0000000000/133089241.html",
            goodsName: " 海信55英寸14核智能炫彩4K",
            price: "5151",
            sale: "3099"
        }],
        [{
            link: "http://m.suning.com/product/0000000000/139903290.html",
            goodsName: "华为畅享5S 移动版 金色",
            price: "999",
            sale: "999"
        }, {
            link: "http://m.suning.com/product/0000000000/139678517.html",
            goodsName: "华为Mate 8 3+32GB 移动版 月光银",
            price: "2699",
            sale: "2499"
        }, {
            link: "http://m.suning.com/product/0000000000/148179309.html",
            goodsName: "华为 P9 4+64GB 琥珀金 全网通",
            price: "4388",
            sale: "3688"
        }, {
            link: "http://m.suning.com/product/0000000000/174909655.html",
            goodsName: "HUAWEI nova 4GB+64GB 全网通 玫瑰金",
            price: "2399",
            sale: "2399"
        }, {
            link: "http://m.suning.com/product/0000000000/173153783.html",
            goodsName: "三星 On7 2016 臻金版 3+32G 全网通",
            price: "1799",
            sale: "1399"
        }, {
            link: "http://m.suning.com/product/0000000000/142929539.html",
            goodsName: "三星 S7 edge 4+32G 铂光金",
            price: "5688",
            sale: "5688"
        }, {
            link: "http://m.suning.com/product/0000000000/123192521.html",
            goodsName: "三星 Note4 幻影白 3+16G",
            price: "3599",
            sale: "1599"
        }, {
            link: "http://m.suning.com/product/0000000000/159964889.html",
            goodsName: "三星 C7 4+64G版 枫叶金",
            price: "2799",
            sale: "2399"
        }, {
            link: "http://m.suning.com/product/0000000000/176613751.html",
            goodsName: "锤子M1 4+32GB 咖啡金 全网通",
            price: "2499",
            sale: "2499"
        }],
        [{
            link: "http://m.suning.com/product/0000000000/123350217.html",
            goodsName: "罗技M280无线鼠标 黑色",
            price: "89",
            sale: "79"
        }, {
            link: "http://m.suning.com/product/0000000000/132888848.html",
            goodsName: "西部数据 1TB 移动硬盘",
            price: "499",
            sale: "419"
        }, {
            link: "http://m.suning.com/product/0000000000/120538244.html",
            goodsName: "腾达300M穿墙王无线路由器 N313",
            price: "59",
            sale: "39"
        }, {
            link: "http://m.suning.com/product/0000000000/105087001.html",
            goodsName: "金士顿DTSE9H 16GB U盘 银色亮薄",
            price: "68",
            sale: "29.9"
        }, {
            link: "http://m.suning.com/product/0000000000/140571324.html",
            goodsName: "瑞士军刀14.6寸双肩电脑背包 ",
            price: "99",
            sale: "59"
        }],
        [{
            link: "http://m.suning.com/product/0000000000/148110884.html",
            goodsName: "森海塞尔 Momentum in-Ear I 耳机 Black",
            price: "749",
            sale: "569"
        }, {
            link: "http://m.suning.com/product/0000000000/164771585.html",
            goodsName: "小天才电话手表Y03 蓝黑",
            price: "998",
            sale: "998"
        }, {
            link: "http://m.suning.com/product/0000000000/129219430.html",
            goodsName: "步步高家教机S2 ",
            price: "3498",
            sale: "3443"
        }, {
            link: "http://m.suning.com/product/0000000000/156519444.html",
            goodsName: "索尼 无线立体声耳机MDR-EX750BT（朱砂红色）",
            price: "1099",
            sale: "829"
        }, {
            link: "http://m.suning.com/product/0000000000/126160878.html",
            goodsName: "飞利浦蓝牙音箱 BT2200B 黑色",
            price: "499",
            sale: "199"
        }],
        [{
            link: "http://m.suning.com/product/0000000000/154099975.html",
            goodsName: " 创维60英寸21核4色4K HDR ",
            price: "6683",
            sale: "4599"
        }, {
            link: "http://m.suning.com/product/0000000000/147377990.html",
            goodsName: " 长虹55英寸曲面4K HDR ",
            price: "5520",
            sale: "3799"
        }, {
            link: "http://m.suning.com/product/0000000000/143025071.html",
            goodsName: " 先锋32英寸网络智能",
            price: "1499",
            sale: "999"
        }, {
            link: "http://m.suning.com/product/0000000000/140574633.html",
            goodsName: " 先锋48英寸网络智能 ",
            price: "2199",
            sale: "1649"
        }],
        [{
            link: "http://m.suning.com/product/0000000000/125066323.html",
            goodsName: "西门子610升双独立循环不易串味",
            price: "8499",
            sale: "5399"
        }, {
            link: "http://m.suning.com/product/0000000000/134026361.html",
            goodsName: "美的220升双温双室可移式蝶形门",
            price: "1299",
            sale: "1099"
        }, {
            link: "http://m.suning.com/product/0000000000/126551965.html",
            goodsName: "星星219升低能耗大容积单温变温柜",
            price: "1384",
            sale: "849"
        }],
        [{
            link: "http://m.suning.com/product/0000000000/125390340.html",
            goodsName: "美的1.5匹变频静音空调",
            price: "2899",
            sale: "2799"
        }, {
            link: "http://m.suning.com/product/0000000000/164900797.html",
            goodsName: "格力i酷3匹圆柱空调",
            price: "6999",
            sale: "6099"
        }, {
            link: "http://m.suning.com/product/0000000000/144797289.html",
            goodsName: "格力Q铂2匹变频柜机空调",
            price: "5880",
            sale: "4999"
        }, {
            link: "http://m.suning.com/product/0000000000/144799111.html",
            goodsName: "格力Q铂3匹变频柜机空调",
            price: "7280",
            sale: "5999"
        }],
        [{
            link: "http://m.suning.com/product/0070067831/164003715.html",
            goodsName: "AO史密斯12升燃气热水器",
            price: "3378",
            sale: "2728"
        }, {
            link: "http://m.suning.com/product/0070068550/123742944.html",
            goodsName: "方太ENJOY云魔方",
            price: "5190",
            sale: "3890"
        }],
        [{
            link: "http://m.suning.com/product/0000000000/146275857.html",
            goodsName: "苏泊尔电磁炉SDHCB9E10-210",
            price: "169",
            sale: "149"
        }, {
            link: "http://m.suning.com/product/0000000000/143177759.html",
            goodsName: "九阳豆浆机DJ13B-C652SG",
            price: "499",
            sale: "399"
        }, {
            link: "http://m.suning.com/product/0000000000/163990947.html",
            goodsName: "九阳豆浆机DJ13E-Q3",
            price: "699",
            sale: "？？9"
        }, {
            link: "http://m.suning.com/product/0000000000/136913837.html",
            goodsName: "亚都空气净化器KJ455G-S4",
            price: "1999",
            sale: "1？99"
        }],
        [{
            link: "http://m.suning.com/product/0070131590/104424068.html",
            goodsName: "天梭力洛克自动机械男表",
            price: "2899",
            sale: "2549"
        }, {
            link: "http://m.suning.com/product/0070088224/183009973.html",
            goodsName: "威顿VEADONS手表男表石英表",
            price: "228",
            sale: "168"
        }, {
            link: "http://m.suning.com/product/0070063122/108039610.html",
            goodsName: "钻石快线 心形黄金戒指",
            price: "793",
            sale: "749"
        }, {
            link: "http://m.suning.com/product/0070069672/137466201.html",
            goodsName: "周大生黄金小猴子吊坠",
            price: "998",
            sale: "963"
        }],
        [{
            link: "http://m.suning.com/product/0070140835/158635130.html",
            goodsName: "膳魔师高真空不锈钢保温瓶/杯 SK2010 CBW 1.2L/咖啡色 带杯盖",
            price: "320",
            sale: "179"
        }, {
            link: "http://m.suning.com/product/0000000000/139576899.html",
            goodsName: "杜蕾斯 避孕套 易进易出42只（经典四合一+love10+激情6+随机2）安全套 （苏宁定制）",
            price: "59",
            sale: "38.9"
        }, {
            link: "http://m.suning.com/product/0000000000/146355580.html",
            goodsName: "光明 莫斯利安 原味酸牛奶 常温酸奶 200ml*6*4箱",
            price: "109",
            sale: "79"
        }, {
            link: "http://m.suning.com/product/0000000000/137192474.html",
            goodsName: "蒙牛 纯甄 原味酸牛奶 常温酸奶 200g*24盒",
            price: "112",
            sale: "79（1111价）"
        }],
        [{
            link: "http://m.suning.com/product/0000000000/102410014.html",
            goodsName: "花王L44片拉拉裤",
            price: "177.7",
            sale: "99"
        }, {
            link: "http://m.suning.com/product/0000000000/102295661.html",
            goodsName: "花王妙而舒L54片",
            price: "180",
            sale: "99（9点79元抢）"
        }, {
            link: "http://m.suning.com/product/0000000000/108096860.html",
            goodsName: "安儿乐纸尿裤L40+6片",
            price: "102.2",
            sale: "49"
        }, {
            link: "http://m.suning.com/product/0000000000/102666842.html",
            goodsName: "菲比拉拉裤XL19片",
            price: "64.1",
            sale: "16.9"
        }, {
            link: "http://m.suning.com/product/0000000000/137035737.html",
            goodsName: "美德乐丝韵电动吸乳器",
            price: "1880",
            sale: "100元券后1199"
        }, {
            link: "http://m.suning.com/product/0000000000/140808469.html",
            goodsName: "飞利浦辅食料理机",
            price: "769",
            sale: "568"
        }, {
            link: "http://m.suning.com/product/0000000000/106065067.html",
            goodsName: "强生婴儿牛奶沐浴露1.3L",
            price: "50.4",
            sale: "29.9"
        }, {
            link: "http://m.suning.com/product/0000000000/102430262.html",
            goodsName: "贝亲婴儿柔湿巾80片*3",
            price: "49",
            sale: "23.9"
        }, {
            link: "http://m.suning.com/product/0000000000/124194918.html",
            goodsName: "费雪脚踏钢琴健身器",
            price: "429",
            sale: "279"
        }, {
            link: "http://m.suning.com/product/0000000000/107799901.html",
            goodsName: "澳贝好动小猴床铃",
            price: "103.7",
            sale: "49"
        }],
        [{
            link: "http://m.suning.com/product/0070088237/151748842.html",
            goodsName: "尤妮佳 拉拉裤/XL38片(男）",
            price: "288",
            sale: "119"
        }, {
            link: "http://m.suning.com/product/0070088237/143026189.html",
            goodsName: "好奇铂金装婴儿纸尿裤中号M72片",
            price: "198",
            sale: "135"
        }, {
            link: "http://m.suning.com/product/0070088237/125907468.html",
            goodsName: "英国Cow&Gate 牛栏奶粉4段",
            price: "289",
            sale: "109"
        }, {
            link: "http://m.suning.com/product/0070088237/151748860.html",
            goodsName: "尤妮佳 纸尿裤/L54片大号 ",
            price: "198",
            sale: "95"
        }, {
            link: "http://m.suning.com/product/0070088237/128243376.html",
            goodsName: "挪威小鱼Nordic Naturals 婴幼儿鳕鱼鱼油婴儿DHA滴剂",
            price: "188",
            sale: "79"
        }, {
            link: "http://m.suning.com/product/0070088237/164483103.html",
            goodsName: "荷兰诺优能(Nutrilon)4段幼儿配方奶粉",
            price: "198",
            sale: "59"
        }, {
            link: "http://m.suning.com/product/0070088237/154108014.html",
            goodsName: "水光 JAYJUN 水光针面膜（桔色）10片 【CJ】",
            price: "98",
            sale: "78"
        }, {
            link: "http://m.suning.com/product/0070088237/154113423.html",
            goodsName: "芭妮兰 Banila co 卸妆膏 100ml",
            price: "112",
            sale: "79"
        }, {
            link: "http://m.suning.com/product/0070088237/128243376.html",
            goodsName: "挪威小鱼Nordic Naturals 婴幼儿鳕鱼鱼油婴儿DHA滴剂",
            price: "188",
            sale: "79"
        }, {
            link: "http://m.suning.com/product/0070088237/164483103.html",
            goodsName: "荷兰诺优能(Nutrilon)4段幼儿配方奶粉",
            price: "198",
            sale: "59"
        }, {
            link: "http://m.suning.com/product/0070088237/154108014.html",
            goodsName: "水光 JAYJUN 水光针面膜（桔色）10片 【CJ】",
            price: "98",
            sale: "78"
        }, {
            link: "http://m.suning.com/product/0070088237/154113423.html",
            goodsName: "芭妮兰 Banila co 卸妆膏 100ml",
            price: "112",
            sale: "79"
        }]
    ];

$(function() {
    //自定义楼层组件
    Vue.component('goods-list', {
        template: '\
			<p class="moduleTitle">{{ headline }}</p>\
			<ul class="goodsList">\
				<li class="goodsName">商品</li>\
				<li class="price">参考价</li>\
				<li class="sale">促销价</li>\
			</ul>\
			<ul class="goodsList" v-for="ele in floorData">\
				<a :href="ele.link">\
					<li class="goodsName">{{ ele.goodsName }}</li>\
				</a>\
				<li class="price">￥{{ ele.price }}</li>\
				<li class="sale">￥{{ ele.sale }}</li>\
			</ul>\
		',
        props: ['floorData', 'headline'],
    });
    new Vue({
        el: "#floor-box",
        data: {
            floorArray: goodsData,
            headline: nav
        }
    });

    new Vue({
        el: "#baokuanBox",
        data: {
            imgArray: imgArray
        }
    });
    new Vue({
        el: "#nav-list",
        data: {
            nav: nav
        }
    });
    new Vue({
        el: "#nav-module",
        data: {
            nav: nav
        }
    });
});