import { Container } from 'pcui';
import { TextureViewSettingsPanel } from './texture-view-settings.js';
import { TextureReprojectPanel } from './texture-reproject.js';
import { TextureExportPanel } from './export-panel.js';
import { FeedbackPanel } from './feedback-panel.js';

class InspectorPanel extends Container {
    constructor(textureManager, args = {}) {
        Object.assign(args, {
            class: 'inspector-panel-container',
            resizable: 'left',
            resizeMin: 100,
            resizeMax: 1000,
            flex: true,
            flexDirection: 'column',
            flexGrow: 1
        });
        super(args);

        this.append(new TextureViewSettingsPanel(textureManager));
        this.append(new TextureReprojectPanel(textureManager));
        this.append(new TextureExportPanel(textureManager));
        this.append(new FeedbackPanel());
    }
}

export {
    InspectorPanel
};
