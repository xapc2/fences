import { Text } from "troika-three-text";

class Label extends Text {
    constructor(borehole){
        super();
        this.text = borehole.name;
        this.fontSize = 1;
        this.anchorX = 'center';
        this.anchorY = 'bottom';
        this.position.x = borehole.position.x;
        this.position.y = borehole.position.y * borehole.scale.y;
        this.position.z = borehole.position.z;
        this.color = 'black';
        this.outlineColor = 'white';
        this.outlineWidth = "8%";
        borehole.lblId = this.uuid;
        return this;
        
    }

    fSize (size) {
        this.fontSize = size;
    }
    
}

export { Label }
