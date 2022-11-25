<template>
	<view class="map_content">
		<view id="container"></view>
	</view>
</template>
<script module="Cesium" lang="renderjs">
	import {
		CesiumToken,
		cesium_css_url,
		cesiumJS_url,
		tiandiMap_cva_url
	} from '../config/index.js';
	import {
		flyToPoint,flyToHome
	} from '../utils/mapUtils.js';
	export default {
		name: "cesiumMap",
		data() {
			return {
				mapViewer: null,
			};
		},
		mounted() {
			const linkDom = document.createElement('link');
			linkDom.rel = "stylesheet";
			linkDom.href = cesium_css_url;
			document.head.appendChild(linkDom);

			// 动态引入较大类库避免影响页面展示
			const script = document.createElement('script');
			script.src = cesiumJS_url;
			script.onload = this.init_cesium_map.bind(this);
			document.head.appendChild(script);
		},
		methods: {
			// 初始化cesium地图
			init_cesium_map() {
				// 申请cesium密钥
				Cesium.Ion.defaultAccessToken = CesiumToken;
				// 初始化Cesim三维地球查看器函数Viewer
				this.mapViewer = new Cesium.Viewer('container', {
					terrainProvider: Cesium.createWorldTerrain(),
					infoBox: false,
				});
				// 加载Web Tile Service服务
				let cva = new Cesium.WebMapTileServiceImageryProvider({
					url: tiandiMap_cva_url,
					layer: "cva_w",
					style: "default",
					format: "tiles",
					tileMatrixSetID: "GoogleMapsCompatible",
					subdomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"], //天地图8个服务器
					minimumLevel: 0,
					maximumLevel: 18,
				});
				this.mapViewer.imageryLayers.addImageryProvider(cva);
				let dom = document.getElementsByClassName('cesium-viewer-fullscreenContainer');
				dom[0].style.display = 'none';
				// this.mapViewer.scene.primitives.add(Cesium.createOsmBuildings());
				window.mapViewer = this.mapViewer; //暴露mapViewer到全局，方便进行地图操作
				flyToHome();
			},
		}
	}
</script>
<!-- 设cesium content相关样式 -->
<style scoped lang="less">
	.map_content {
		width: 100vw;
		height: 100vh;
	}

	#container {
		width: 100%;
		height: 100%;
	}
	
	/deep/ .cesium-viewer-bottom {
		display: none;
	}

	/deep/ .cesium-navigationHelpButton-wrapper {
		display: none;
	}

	/deep/ .cesium-home-button {
		display: none;
	}

	/deep/ .cesium-viewer-animationContainer {
		display: none;
	}

	/deep/ .cesium-viewer-timelineContainer {
		display: none;
	}

	/deep/ .cesium-viewer-fullscreenContainer {
		display: none;
	}

	/deep/ .cesium-sceneModePicker-wrapper {
		display: none;
	}

	/deep/ .cesium-button {
		display: none;
	}
	/deep/ .cesium-viewer-toolbar{
		display: none;
	}
</style>
