function generateGeojson(coors) {
	return {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {},
			"geometry": {
				"type": "MultiLineString",
				"coordinates": coors
			}
		}]
	}
}

function flyToPoint(lon, lat, heading = 0.0, pitch = -24.0, roll = 0, range = 6000, duration = 2.5) {
	window.mapViewer.camera.flyTo({
		destination: Cesium.Cartesian3.fromDegrees(lon, lat - 0.13, range),
		orientation: {
			heading: Cesium.Math.toRadians(heading),
			pitch: Cesium.Math.toRadians(pitch),
			roll: Cesium.Math.toRadians(roll),
		},
		duration: duration,
	});
}
import {model_url} from '../config/index.js'
function addModel(lon, lat) {
	let modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(
		Cesium.Cartesian3.fromDegrees(lon, lat, Cesium.HeightReference.NONE));
	window.mapViewer.scene.primitives.add(Cesium.Model.fromGltf({
		url: model_url,
		modelMatrix: modelMatrix,
		scale: 1.6
	}));
}
/* 
	params:
	coors: [[lon1,lat1],[lon2,lat2].....]
	yearTag: [13-19,19-25,.....]
 */
import {
	colorList
} from '../config/index.js';
let yearTags = []
async function drawPoetLine(coors, yearTag) {
	window.mapViewer.dataSources.removeAll()
	let coor_index = 0
	let coors_format = []

	let colorMap = {}
	yearTag.forEach((yearItem, index) => {
		if (!(index === 0 || yearItem === yearTag[index - 1])) {
			coor_index += 1
		}
		if (coors_format[coor_index]) {
			coors_format[coor_index].push(coors[index])
		} else {
			coors_format[coor_index] = new Array(coors[index])
			colorMap[yearItem] = colorList[coor_index]
		}
	})
	yearTags = [...new Set(yearTag)] //去重
	let geojson_polyline = generateGeojson(coors_format)
	let dataSource = await Cesium.GeoJsonDataSource.load(geojson_polyline, {
		strokeWidth: 4,
	})
	let polyline_entities = dataSource.entities.values;
	for (let i = 0; i < polyline_entities.length; i++) {
		polyline_entities[i].polyline.material = new Cesium.ColorMaterialProperty(new Cesium.Color
			.fromCssColorString(colorMap[yearTag[i]]))
		polyline_entities[i].polyline.clampToGround = true;
	}
	window.mapViewer.dataSources.add(dataSource);
}
function showCurrentLine(year){
	if(yearTags.length>0){
		let dataSource = window.mapViewer.dataSources.get(0);
		let polyline_entities = dataSource.entities.values;
		for (let i = 0; i < polyline_entities.length; i++) {
			if(yearTags[i] !== year){
				polyline_entities[i].show = false;
			}else{
				polyline_entities[i].show = true;
			}				
		}
	}
}
function flyToHome(){
	flyToPoint(110, 18, 0, -60, 0, 1950000)
}
export {
	flyToPoint,
	addModel,
	drawPoetLine,
	showCurrentLine,
	flyToHome,
}
