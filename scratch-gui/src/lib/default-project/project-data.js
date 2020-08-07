import { defineMessages } from "react-intl";
import sharedMessages from "../shared-messages";

let messages = defineMessages({
    meow: {
        defaultMessage: "Meow",
        description: "Name for the meow sound",
        id: "gui.defaultProject.meow",
    },
    variable: {
        defaultMessage: "my variable",
        description: "Name for the default variable",
        id: "gui.defaultProject.variable",
    },
});

messages = { ...messages, ...sharedMessages };

// use the default message if a translation function is not passed
const defaultTranslator = (msgObj) => msgObj.defaultMessage;

/**
 * Generate a localized version of the default project
 * @param {function} translateFunction a function to use for translating the default names
 * @return {object} the project data json for the default project
 */

const projectData = (translateFunction) => {
   // const translator = translateFunction || defaultTranslator;
    return {
        targets: [
            {
                isStage: true,
                name: "Stage",
                variables: {
                    "`jEk@4|i[#Fk?(8x)AV.-my variable": ["my variable", 0],
                },
                lists: {},
                broadcasts: {},
                blocks: {},
                comments: {},
                currentCostume: 0,
                costumes: [
                    {
                        assetId: "cd21514d0531fdffb22204e0ec5ed84a",
                        name: "backdrop1",
                        md5ext: "cd21514d0531fdffb22204e0ec5ed84a.svg",
                        dataFormat: "svg",
                        rotationCenterX: 240,
                        rotationCenterY: 180,
                    },
                ],
                sounds: [
                    {
                        assetId: "83a9787d4cb6f3b7632b4ddfebf74367",
                        name: "pop",
                        dataFormat: "wav",
                        format: "",
                        rate: 44100,
                        sampleCount: 1032,
                        md5ext: "83a9787d4cb6f3b7632b4ddfebf74367.wav",
                    },
                ],
                volume: 100,
                layerOrder: 0,
                tempo: 60,
                videoTransparency: 50,
                videoState: "off",
                textToSpeechLanguage: null,
            },
            {
                isStage: false,
                name: "Chick",
                variables: {},
                lists: {},
                broadcasts: {},
                blocks: {
                    ".mN;0YQt*OVnV;X=EUTn": {
                        opcode: "videoSensing_videoToggle",
                        next: null,
                        parent: "JfxBe^1mP}qRtnBV+#Y_",
                        inputs: {
                            VIDEO_STATE: [1, "V{IdTCc,UXRpDj9luN3i"],
                        },
                        fields: {},
                        shadow: false,
                        topLevel: false,
                    },
                    "V{IdTCc,UXRpDj9luN3i": {
                        opcode: "videoSensing_menu_VIDEO_STATE",
                        next: null,
                        parent: ".mN;0YQt*OVnV;X=EUTn",
                        inputs: {},
                        fields: {
                            VIDEO_STATE: ["off", null],
                        },
                        shadow: true,
                        topLevel: false,
                    },
                    "JfxBe^1mP}qRtnBV+#Y_": {
                        opcode: "event_whenflagclicked",
                        next: ".mN;0YQt*OVnV;X=EUTn",
                        parent: null,
                        inputs: {},
                        fields: {},
                        shadow: false,
                        topLevel: true,
                        x: 234,
                        y: 181,
                    },
                },
                comments: {},
                currentCostume: 0,
                costumes: [
                    {
                        assetId: "80abbc427366bca477ccf1ef0faf240a",
                        name: "chick-a",
                        bitmapResolution: 1,
                        md5ext: "80abbc427366bca477ccf1ef0faf240a.svg",
                        dataFormat: "svg",
                        rotationCenterX: 32,
                        rotationCenterY: 37,
                    },
                    {
                        assetId: "5e23c8c28ffd390df7deb2414be37781",
                        name: "chick-b",
                        bitmapResolution: 1,
                        md5ext: "5e23c8c28ffd390df7deb2414be37781.svg",
                        dataFormat: "svg",
                        rotationCenterX: 32,
                        rotationCenterY: 37,
                    },
                    {
                        assetId: "77911bbe5e11ede35871e8002a26356d",
                        name: "chick-c",
                        bitmapResolution: 1,
                        md5ext: "77911bbe5e11ede35871e8002a26356d.svg",
                        dataFormat: "svg",
                        rotationCenterX: 21,
                        rotationCenterY: 24,
                    },
                ],
                sounds: [
                    {
                        assetId: "3b8236bbb288019d93ae38362e865972",
                        name: "Chirp",
                        dataFormat: "wav",
                        format: "adpcm",
                        rate: 22050,
                        sampleCount: 6097,
                        md5ext: "3b8236bbb288019d93ae38362e865972.wav",
                    },
                ],
                volume: 100,
                layerOrder: 1,
                visible: true,
                x: -148,
                y: -42,
                size: 100,
                direction: 90,
                draggable: false,
                rotationStyle: "all around",
            },
        ],
        monitors: [],
        extensions: ["videoSensing"],
        meta: {
            semver: "3.0.0",
            vm: "0.2.0",
            agent:
                "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36",
        },
    };
};

export default projectData;
