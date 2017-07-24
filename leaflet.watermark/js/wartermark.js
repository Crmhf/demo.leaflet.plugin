/**
 * Copyright © 2017 KingTopWare Corporation. All rights reserved.
 *
 * @title: wartermark
 * @prject:
 * @description: 用于展示地图中所用到的插件用法
 * @author: ChiRong
 * @date: 2017/7/24
 * @version: v1.0
 * @modify: 说明对该文件的修改内容、修改原因以及修改日期--请后续修改
 */

L.Control.Watermark = L.Control.extend({
	onAdd: function(map) {
		var img = L.DomUtil.create('img');

		img.src = 'img/logo.png'; // 展示地图上的图片，如果需要正常的显示，需要根据示例中的路径来实现
		img.style.width = '200px';

		return img;
	},

	onRemove: function(map) {
		// Nothing to do here
	}
});

L.control.watermark = function(opts) {
	return new L.Control.Watermark(opts);
}
