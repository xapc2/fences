import { BufferGeometry, BufferAttribute, MeshStandardMaterial, DoubleSide, Mesh, Color } from "three";

class Fence extends Mesh {
    constructor (bh0, bh1, colors = ['green', 'orange', 'blue', 'steelblue', 'indigo', 'firebrick'] ){
        let depth = [bh0.position.y, bh1.position.y];
        super();
        for (let i=0; i < Math.min(bh0.children.length,bh1.children.length); i++){
            let geometry = new BufferGeometry();
            let vertices = new Float32Array([
                bh0.position.x, depth[0]-bh0.children[i].geometry.parameters.height, bh0.position.z,  // v0
                bh1.position.x, depth[1]-bh1.children[i].geometry.parameters.height, bh1.position.z,   // v1
                bh1.position.x, depth[1], bh1.position.z,    // v2
                bh0.position.x, depth[0], bh0.position.z    // v3
            ]);
            depth[0] -= Number(bh0.children[i].geometry.parameters.height);
			depth[1] -= Number(bh1.children[i].geometry.parameters.height);
            geometry.setAttribute( 'position', new BufferAttribute(vertices, 3) );
            let indices = [0, 1, 2, 2, 3, 0]; // Indices for the two triangles that make the square
			geometry.setIndex(new BufferAttribute(new Uint16Array(indices), 1));
            let fenceSegment = new Mesh(geometry, new MeshStandardMaterial({color:colors[i], side: DoubleSide, transparent: true, opacity: 0.7}));
            this.add(fenceSegment);
        }
        this.isFence = true;
		this.bh0 = bh0.uuid;
		this.bh1 = bh1.uuid;
		this.colors=colors;
        this.name = "Fence";
        return this;
    }
    
    changeColors(fencecolors = this.colors){
        for (let i in this.children){
            this.children[i].material.color = new Color(fencecolors[i]);
        }
    }
    
    changeOpacity( value ){
		for (let i in this.children){
			this.children[i].material.opacity = value;
		}
	}

}

export { Fence };
