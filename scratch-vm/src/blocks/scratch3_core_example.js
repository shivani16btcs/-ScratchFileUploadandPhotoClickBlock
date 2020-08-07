const BlockType = require('../extension-support/block-type');
const ArgumentType = require('../extension-support/argument-type');
const log = require('.././util/log');

const blockIconURI='data:image/svg+xml,%3Csvg id="rotate-counter-clockwise" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%233d79cc;%7D.cls-2%7Bfill:%23fff;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3Erotate-counter-clockwise%3C/title%3E%3Cpath class="cls-1" d="M22.68,12.2a1.6,1.6,0,0,1-1.27.63H13.72a1.59,1.59,0,0,1-1.16-2.58l1.12-1.41a4.82,4.82,0,0,0-3.14-.77,4.31,4.31,0,0,0-2,.8,4.25,4.25,0,0,0-1.34,1.73,5.06,5.06,0,0,0,.54,4.62A5.58,5.58,0,0,0,12,17.74h0a2.26,2.26,0,0,1-.16,4.52A10.25,10.25,0,0,1,3.74,18,10.14,10.14,0,0,1,2.25,8.78,9.7,9.7,0,0,1,5.08,4.64,9.92,9.92,0,0,1,9.66,2.5a10.66,10.66,0,0,1,7.72,1.68l1.08-1.35a1.57,1.57,0,0,1,1.24-.6,1.6,1.6,0,0,1,1.54,1.21l1.7,7.37A1.57,1.57,0,0,1,22.68,12.2Z"/%3E%3Cpath class="cls-2" d="M21.38,11.83H13.77a.59.59,0,0,1-.43-1l1.75-2.19a5.9,5.9,0,0,0-4.7-1.58,5.07,5.07,0,0,0-4.11,3.17A6,6,0,0,0,7,15.77a6.51,6.51,0,0,0,5,2.92,1.31,1.31,0,0,1-.08,2.62,9.3,9.3,0,0,1-7.35-3.82A9.16,9.16,0,0,1,3.17,9.12,8.51,8.51,0,0,1,5.71,5.4,8.76,8.76,0,0,1,9.82,3.48a9.71,9.71,0,0,1,7.75,2.07l1.67-2.1a.59.59,0,0,1,1,.21L22,11.08A.59.59,0,0,1,21.38,11.83Z"/%3E%3C/svg%3E';
const defaultURI = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQGpbTJKRRspASvvZXUlaZdN4TOpWsGHiMxQ&usqp=CAU';

/**
 * An example core block implemented using the extension spec.
 * This is not loaded as part of the core blocks in the VM but it is provided
 * and used as part of tests.
 */
class Scratch3CoreExample {

    constructor (runtime) {
        /**
         * The runtime instantiating this block package.
         * @type {Runtime}
         */
        this.myfiles = [];

        this.runtime = runtime;

    }

    /**
     * @returns {object} metadata for this extension and its blocks.
     */
    getInfo () {
        return {
            id: 'coreExample',
            name: 'UploadEx', // This string does not need to be translated as this extension is only used as an example.
            blocks: [
                {
                    func: 'MAKE_A_VARIABLE',
                    blockType: BlockType.BUTTON,
                    text: 'make a variable (UploadEx)'
                },
                {
                    opcode: 'exampleOpcode',
                    blockType: BlockType.REPORTER,
                    text: 'example block'
                },
                {
                    opcode: 'exampleWithInlineImage',
                    blockType: BlockType.COMMAND,
                    text: 'block with image [CLOCKWISE] [TEXT]',
                    arguments: {
                        CLOCKWISE: {
                            type: ArgumentType.IMAGE,
                            dataURI: blockIconURI
                        },
                        TEXT:{
                            type: ArgumentType.STRING,
                            defaultValue: this.example_textreturn(),

                        }
                    }
                },
                {
                    opcode: 'uploadImage',
                    blockType: BlockType.COMMAND,
                    text: 'upload image[CLOCKWISE] ',
                   
                    arguments: {
                        CLOCKWISE: {
                            type: ArgumentType.IMAGE,
                            dataURI: blockIconURI,
                            alt: 'This is an image',
                            flipRTL: true
                        
                        },  
                        // IMAGE: {
                        //     type: ArgumentType.IMAGE,
                        //     dataURI: this.getimg(),
                        //  },   
                }
                },
            ]
        };
    }

    /**
     * Example opcode just returns the name of the stage target.
     * @returns {string} The name of the first target in the project.
     */
    writeLog (args) {
        const text = Cast.toString(args.TEXT);
        log.log(text);
    }
    exampleOpcode () {
        const stage = this.runtime.getTargetForStage();
        return stage ? stage.getName() : 'no stage yet';
    }

    exampleWithInlineImage (args) {
        const text = Cast.toString(args.TEXT);
        log.log(text);
       
    }

    uploadImage(){
         const realfilebutton=document.getElementById('customfile');
         realfilebutton.click();
         fileselect=document.getElementById('customfile').files;
        if(fileselect.length>0){
            var fileselect=fileselect[0];
            var fileReader= new FileReader();
            fileReader.onload=function(event){
                var srcData=event.target.result;
                //document.getElementById("sprint").src=srcData;
                //document.getElementById("base64").innerHTML=srcData;
                console.log(srcData)
                window.open(srcData)

            }
            fileReader['readAsDataURL'](fileselect);

        }
           
          var canvas = document.getElementById('sprint');
        //  canvas.width = this.width;
        //  canvas.height = this.height;
        //    var ctx = canvas.getContext('2d');
        //     ctx.drawImage(this, 0,0);
//console.log(realfilebutton.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1]);
        return;
    }
   
    getimg(){
        return defaultURI;
    }
    example_textreturn(){
        return 'stallion Ai'
    }

}
module.exports = Scratch3CoreExample;


