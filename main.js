import { Borehole } from '/modules/boreholeMesh.js';
import { Label } from '/modules/labels.js';
import { Fence } from '/modules/fenceMesh.js';
import { Box3, Vector3 } from 'three';

// Function to create a geotechnical borehole
function createBorehole(bh, bhcolors){
	let borehole = new Borehole(bh.properties.name, bh.properties.strata, bhcolors );
	let coords = bh.geometry.coordinates;
	borehole.position.set(...coords);
	return borehole;
}

function createLabel(borehole){
	let label = new Label(borehole);
	return label;
}

function createFence(a, b, colors){
	let fence = new Fence(a, b, colors);
	return fence;
}

	
function changevScale(bhs, fences, lbls, vscale){
	bhs.scale.set(1, vscale, 1);
	fences.scale.set(1, vscale, 1);
	for (let i in bhs.children){  
		lbls.children[i].position.y = bhs.children[i].position.y * vscale;
	}
}

function updateFences(fencedata, boreholes, fences, colors){
	for (let data of fencedata){
		let a = boreholes.getObjectByName(data.bh0);
		let b = boreholes.getObjectByName(data.bh1);
		if (a != undefined && b != undefined){
			let fence = createFence(a, b, colors)
			fences.add(fence);
			data.id = fence.uuid;
		}
	}
	return fences;
}

function getBox(boreholes){
	return new Box3().setFromObject(boreholes);
}

function centerView(camera, controls, grid){
	let target = new Vector3();
	camera.position.set(grid.position.x, (grid.scale.z)*5, grid.position.z + (grid.scale.z)*15);
	camera.lookAt(grid.position);
	controls.target = target.copy(grid.position);
	controls.saveState();
}

function resetScene(scene, bhdata, bhcolors){
	let boreholes = scene.children[3];
	let labels = scene.children[4];
	let fences = scene.children[5];
	let gridHelper = scene.children[6];
	let axesHelper = scene.children[7];
	
	boreholes.clear();
	labels.clear();
	fences.clear();
	for (let i of bhdata.features){
		boreholes.add(createBorehole(i, bhcolors));
	}
	
	for (let borehole of boreholes.children){
		let lbl = createLabel(borehole);
		labels.add(lbl);
	}
	let center = new Vector3();
	let size = new Vector3();
	getBox(boreholes).getCenter(center);
	getBox(boreholes).getSize(size);
	let gridScale = (Math.round(Math.max(size.x, size.z))+20)/10;
	gridHelper.position.set(Math.round(center.x), 0, Math.round(center.z))
	gridHelper.scale.set(gridScale, 1, gridScale);
	axesHelper.scale.set(gridScale/2, gridScale/2, gridScale/2);
	axesHelper.position.set(gridHelper.position.x, 0, gridHelper.position.z);
}

export { createBorehole, createLabel, createFence, changevScale, updateFences, centerView, resetScene }
