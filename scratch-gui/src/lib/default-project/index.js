import projectData from './project-data';

/* eslint-disable import/no-unresolved */
import popWav from '!arraybuffer-loader!./83a9787d4cb6f3b7632b4ddfebf74367.wav';
import meowWav from '!arraybuffer-loader!./3b8236bbb288019d93ae38362e865972.wav';
import backdrop from '!raw-loader!./5e23c8c28ffd390df7deb2414be37781.svg';
import costume1 from '!raw-loader!./80abbc427366bca477ccf1ef0faf240a.svg';
import costume2 from '!raw-loader!./77911bbe5e11ede35871e8002a26356d.svg';
import costume3 from '!raw-loader!./cd21514d0531fdffb22204e0ec5ed84a.svg';

/* eslint-enable import/no-unresolved */

const defaultProject = translator => {
    let _TextEncoder;
    if (typeof TextEncoder === 'undefined') {
        _TextEncoder = require('text-encoding').TextEncoder;
    } else {
        /* global TextEncoder */
        _TextEncoder = TextEncoder;
    }
    const encoder = new _TextEncoder();

    const projectJson = projectData(translator);
    return [{
        id: 0,
        assetType: 'Project',
        dataFormat: 'JSON',
        data: JSON.stringify(projectJson)
    }, {
        id: '83a9787d4cb6f3b7632b4ddfebf74367',
        assetType: 'Sound',
        dataFormat: 'WAV',
        data: new Uint8Array(popWav)
    }, {
        id: '3b8236bbb288019d93ae38362e865972',
        assetType: 'Sound',
        dataFormat: 'WAV',
        data: new Uint8Array(meowWav)
    }, {
        id: '5e23c8c28ffd390df7deb2414be37781',
        assetType: 'ImageVector',
        dataFormat: 'SVG',
        data: encoder.encode(backdrop)
    }, {
        id: '80abbc427366bca477ccf1ef0faf240a',
        assetType: 'ImageVector',
        dataFormat: 'SVG',
        data: encoder.encode(costume1)
    }, {
        id: '77911bbe5e11ede35871e8002a26356d',
        assetType: 'ImageVector',
        dataFormat: 'SVG',
        data: encoder.encode(costume2)
    },
    {
        id: 'cd21514d0531fdffb22204e0ec5ed84a',
        assetType: 'ImageVector',
        dataFormat: 'SVG',
        data: encoder.encode(costume3)
    }];
   // return {"targets":[{"isStage":true,"name":"Stage","variables":{"`jEk@4|i[#Fk?(8x)AV.-my variable":["my variable",0]},"lists":{},"broadcasts":{},"blocks":{},"comments":{},"currentCostume":0,"costumes":[{"assetId":"cd21514d0531fdffb22204e0ec5ed84a","name":"backdrop1","md5ext":"cd21514d0531fdffb22204e0ec5ed84a.svg","dataFormat":"svg","rotationCenterX":240,"rotationCenterY":180}],"sounds":[{"assetId":"83a9787d4cb6f3b7632b4ddfebf74367","name":"pop","dataFormat":"wav","format":"","rate":44100,"sampleCount":1032,"md5ext":"83a9787d4cb6f3b7632b4ddfebf74367.wav"}],"volume":100,"layerOrder":0,"tempo":60,"videoTransparency":50,"videoState":"on","textToSpeechLanguage":null},{"isStage":false,"name":"Chick","variables":{},"lists":{},"broadcasts":{},"blocks":{".mN;0YQt*OVnV;X=EUTn":{"opcode":"videoSensing_videoToggle","next":null,"parent":"JfxBe^1mP}qRtnBV+#Y_","inputs":{"VIDEO_STATE":[1,"V{IdTCc,UXRpDj9luN3i"]},"fields":{},"shadow":false,"topLevel":false},"V{IdTCc,UXRpDj9luN3i":{"opcode":"videoSensing_menu_VIDEO_STATE","next":null,"parent":".mN;0YQt*OVnV;X=EUTn","inputs":{},"fields":{"VIDEO_STATE":["on",null]},"shadow":true,"topLevel":false},"JfxBe^1mP}qRtnBV+#Y_":{"opcode":"event_whenflagclicked","next":".mN;0YQt*OVnV;X=EUTn","parent":null,"inputs":{},"fields":{},"shadow":false,"topLevel":true,"x":234,"y":181}},"comments":{},"currentCostume":0,"costumes":[{"assetId":"80abbc427366bca477ccf1ef0faf240a","name":"chick-a","bitmapResolution":1,"md5ext":"80abbc427366bca477ccf1ef0faf240a.svg","dataFormat":"svg","rotationCenterX":32,"rotationCenterY":37},{"assetId":"5e23c8c28ffd390df7deb2414be37781","name":"chick-b","bitmapResolution":1,"md5ext":"5e23c8c28ffd390df7deb2414be37781.svg","dataFormat":"svg","rotationCenterX":32,"rotationCenterY":37},{"assetId":"77911bbe5e11ede35871e8002a26356d","name":"chick-c","bitmapResolution":1,"md5ext":"77911bbe5e11ede35871e8002a26356d.svg","dataFormat":"svg","rotationCenterX":21,"rotationCenterY":24}],"sounds":[{"assetId":"3b8236bbb288019d93ae38362e865972","name":"Chirp","dataFormat":"wav","format":"adpcm","rate":22050,"sampleCount":6097,"md5ext":"3b8236bbb288019d93ae38362e865972.wav"}],"volume":100,"layerOrder":1,"visible":true,"x":-148,"y":-42,"size":100,"direction":90,"draggable":false,"rotationStyle":"all around"}],"monitors":[],"extensions":["videoSensing"],"meta":{"semver":"3.0.0","vm":"0.2.0","agent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36"}}]
};

export default defaultProject;
