$ sudo nano script_name.sh
Write '#!/bin/bash' in the file and save
$ sudo chmod +x script_name.sh

' cd into the project directory { cd ~/Desktop/project-name }
sudo npm cache clean --force
cd android
sudo ./gradlew clean
cd ..
sudo fuser -k 8081/tcp
sudo npm run android-bundle '

$ sudo ./script_name.sh