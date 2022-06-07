import { Panel, Label } from '@playcanvas/pcui';
import { PixelFormatTable, TextureTypeTable } from './const.js';

class TextureInfoPanel extends Panel {
    constructor(textureManager, args = { }) {
        Object.assign(args, {
            headerText: '-',
            flexGrow: 0,
            flexShrink: 0
        });
        super(args);

        // footer
        this.textureStructure = new Label({
            width: 80,
            class: 'centerAlign'
        });

        this.textureDims = new Label({
            width: 80,
            class: 'centerAlign'
        });

        this.texturePixelFormat = new Label({
            width: 80,
            class: 'centerAlign'
        });

        this.textureType = new Label({
            width: 80,
            class: 'centerAlign'
        });

        this.cursorTexel = new Label({
            width: 80,
            class: 'centerAlign'
        });

        this.header.append(this.textureStructure);
        this.header.append(this.textureDims);
        this.header.append(this.texturePixelFormat);
        this.header.append(this.textureType);
        this.header.append(this.cursorTexel);

        textureManager.on('textureSelected', (texture) => {
            this.setTexture(texture);
        });
    }

    setTexture(texture) {
        // filename
        this.headerText = texture.filename;

        // texture structure
        this.textureStructure.text = texture.cubemap ? ' cubemap' : '2d';

        // texture dims
        this.textureDims.text = `${texture.width}x${texture.height}`;

        // pixel format
        this.texturePixelFormat.text = `${PixelFormatTable[texture.format] || '???'}`;

        // texture type
        this.textureType.text = `${TextureTypeTable[texture.type] || '???'}`;
    }
};

export {
    TextureInfoPanel
};
