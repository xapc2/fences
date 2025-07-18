import { CylinderGeometry, MeshStandardMaterial, Mesh, Color } from "three";

class Borehole extends Mesh {
    

    constructor (name = "BH", strata = [{ht:1}, {ht:1}, {ht:1}], colors = ['green', 'orange', 'blue','steelblue', 'indigo', 'firebrick'] ){
        let depth = 0;
        super();
        this.colors = colors;
        this.isBorehole = true;
        //this.type = 'Borehole';
        for (let layer in strata){
            let bhSegment = new Mesh(new CylinderGeometry(1, 1, strata[layer]), new MeshStandardMaterial({color:new Color(colors[layer])}));
            depth -= strata[layer];
            bhSegment.position.y = depth + strata[layer]/2;
            this.name = name;
            this.add(bhSegment);
        } 
        return this;
    }


    length(){
        let len = 0;
        for (let segment of this.children){
            len += Number(segment.geometry.parameters.height);
        } 
        return len;
    }

    changeColors(bhcolors = this.colors){
        for (let i in this.children){
            this.children[i].material.color = new Color(bhcolors[i]);
        }
    }

    changeRadius(rscale){
        for (let segment of this.children){
            segment.scale.set( rscale, 1, rscale );
        }
    }

}

export { Borehole }
