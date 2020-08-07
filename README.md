# how to run
1) nvm install 12.14.0
2) cd scratch-vm && yarn install && yarn link
3) cd scratch-gui && yarn link scratch-vm && yarn install
4) yarn start 
5) use http://localhost:8601/     instead of http://0.0.0.0:8601/


# Error while running yarn start :

1)cd scratch-vm && yarn install && yarn link

cd scratch-gui && yarn link scratch-vm && yarn install

2) if error commes then  =>  upgrade node version more than node >10.17
nvm install 12.14.0

3) again 
cd scratch-gui && yarn link scratch-vm && yarn install


4) still error   related to watcher limit then do :
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf

sudo sysctl -p
resource:   https://github.com/facebook/create-react-app/issues/7612


6) if PROBLEM WITH WEBCAM:
https://scratch.mit.edu/discuss/m/topic/290928/
use http://localhost:8601/     instead of http://0.0.0.0:8601/


7) ERROR related to nodemodules files then 
rm -rf node_modules && npm install

8) extension is mode to load any other extension by using the url of extension: 
client ml url= 
https://api.stallion.ai/public/202005-0513-1635-e1c1b7c1-e737-4f57-a1b4-751d879b5c4a-0001.js
https://sheeptester.github.io/javascripts/utilities.js

# some useful refrences
1) how to create block:  https://medium.com/@hiroyuki.osaki/how-to-develop-your-own-block-for-scratch-3-0-1b5892026421
2) how to create  extension to load any extension through its url:  
https://github.com/SheepTester/scratch-gui
Load an extension from the URL: gui, vm
https://drive.google.com/file/d/1nMmWN68Ca_8PKSgv_hgbZTacNIsyMzws/view?usp=sharing
render-gui
