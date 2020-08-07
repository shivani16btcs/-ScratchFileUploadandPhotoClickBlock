const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const Cast = require('../../util/cast');
const log = require('../../util/log');
const Video = require('../../io/video');
const mobilenet = require('@tensorflow-models/mobilenet')


class Scratch3Snapshot {
    constructor (runtime) {
        this.runtime = runtime;
    }

    static get WIDTH() { return 480; }
    static get HEIGHT() { return 460; }

    /**
     * Dimensions the video stream is analyzed at after its rendered to the
     * sample canvas.
     * @type {Array.<number>}
     */
    static get DIMENSIONS() {
        return [
            Scratch3Snapshot.WIDTH,
            Scratch3Snapshot.HEIGHT
        ];
    }

    getInfo () {
        return {
            id: 'snapshot',
            name: 'Snapshot',
            blocks: [
                {
                    opcode: 'writeLog',
                    blockType: BlockType.COMMAND,
                    text: 'log [TEXT]',
                    arguments: {
                        TEXT: {
                            type: ArgumentType.STRING,
                            defaultValue: "hello",
                            menu: "languages"
                        }
                    }
                },

                {
                    opcode: 'upload',
                    blockType: BlockType.REPORTER,
                    text: 'upload image'
                },
                {
                    opcode: 'snapshot',
                    blockType: BlockType.REPORTER,
                    text: 'take snapshot'
                },
                {
                    opcode: 'predict',
                    blockType: BlockType.COMMAND,
                    text: 'predict [IMAGE]',
                    arguments: {
                        IMAGE: {
                            type: ArgumentType.STRING,
                            defaultValue: 'ImageData'
                        }
                    }
                }

            ],
            menus: {
                languages: {
                    acceptReporters: true,
                    items: [{ text: "test", value: "test"}, {text: "hello", value: "hello"}]
                }
            }
        };
    }

    
    upload(args) {
        const fileSelector = document.getElementById('44378668b07052b6b918c8da420f120c');
        fileSelector.addEventListener('change', (event) => {
            const fileList = event.target.files;
            this.readImage(fileList[0]);
        });
        fileSelector.click();
    }

    snapshot(args) {
        const frame = this.runtime.ioDevices.video.getFrame({
            format: Video.FORMAT_IMAGE_DATA,
            dimensions: Scratch3Snapshot.DIMENSIONS
        });
        // Get dataURI from ImageData
        return this.getDataUrl(frame);
    }

    predict(args) {
        if (!args.IMAGE || args.IMAGE == 'ImageData') return;
        log.log('predicting', args.IMAGE);
    }

    getDataUrl(img) {
        if (!img) return;
        /// Create canvas
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        // Set width and height
        canvas.width = Scratch3Snapshot.WIDTH;
        canvas.height = Scratch3Snapshot.HEIGHT;
        // Put the image
        ctx.putImageData(img, 0, 0);
        return canvas.toDataURL('image/jpeg');
    }

    readImage(file) {
        // Check if the file is an image.
        if (file.type && file.type.indexOf('image') === -1) {
            console.log('File is not an image.', file.type, file);
            return;
        }

        const reader = new FileReader();
        reader.addEventListener('load', (event) => {
            console.log('Upload file', event.target.result);
             return event.target.result;
        });
        reader.readAsDataURL(file);
    }
    writeLog (args) {
        const text = Cast.toString(args.TEXT);
        log.log(text);
    }
    
    nowprediction(takeimage){
        console.log(takeimage)
    }

}
module.exports = Scratch3Snapshot;