# PIXI-ASSETSLIST-LOADER
Simple library for PIXI.js to help download all assets using one (or some) config file.
___
## How to use
All paths for assets from config file must be relative to config file location.  
All paths is relative to baseUrl from PIXI Loader.  
As asset to download can be all what you can use in PIXI.js (images, sounds, sprite sheets, animations etc.).  
As asset you can use another json config file for PIXI-ASSETSLIST-LOADER.  
To use assets list files with PIXI Loader, just connect the library to the project as follows:  
```javascript
import * as PIXI from "pixi.js";
import "pixi-assetslist-loader";
```
Assets list files is simple json files, and have this structure:  
```json
{
  "params": {
    "baseUrl": "./"
  },
  "assets": [
    {
      "name": "background",
      "path": "/assets/background.jpg",
      "metadata": {}
    }
  ],
  "metaData": {
    "type": "assetsList"
  }
}
```
**params** - object with parameters for downloading assets.  
- baseUrl - base path for all assets in relative to config file location.  

**assets** - array with assets to download.
- name - name for the loaded resource, it can be used in PIXI. If you do not need access to the asset by name, you dont need this parameter.
- path - asset path in relative to config file location.  
- metadata - object with any data what you want. Will be available into PIXI Loader like 'resource.metadata'. Not required parameter.

**metaData** - description for loader. Must be like in example.  
## For example
### Simple usage
In this example downloading two images and one spritesheet.  
This example for this file structure:  
- \dist  
  - \images  
      - \ui
        - ui-spritesheet.json
        - ui-spritesheet.png
      - background.jpg  
      - logo.png 
  - assetsList.json  
  
Download assets list file:  
```javascript
PIXI.Loader.shared.add("./assets/assetList.json");
PIXI.Loader.shared.load()
```
**assetsList.json**
```json
{
  "params": {
    "baseUrl": "./images/"
  },
  "assets": [
    {
      "name": "background",
      "path": "background.jpg"
    },
    {
      "name": "logo",
      "path": "logo.png"
    },
    {
      "path": "ui/ui-spritesheet.json"
    }
  ],
  "metaData": {
    "type": "assetsList"
  }
}
```
### Usage multiply config files
In this example downloading another assets list config as asset. And using PIXI Loader.baseUrl.  
This example for this file structure:  
- \dist  
  - \assets
    - \configs  
      - imagesList.json
      - spritesheetsList.json
    - \assets  
      - \spritesheets
        - buttons.json
        - buttons.png
        - decorations.json
        - decorations.png
      - \images
        - background.jpg  
        - logo.png 
    - assetsList.json  
    
Download assets list file:  
```javascript
PIXI.Loader.shared.baseUrl = './assets/';
PIXI.Loader.shared.add("./assets/assetList.json");
PIXI.Loader.shared.load()
```
**assetsList.json**
```json
{
  "params": {
    "baseUrl": "./configs/"
  },
  "assets": [
    {
      "path": "spritesheetsList.json"
    },
    {
      "path": "imagesList.json"
    }
  ],
  "metaData": {
    "type": "assetsList"
  }
}
```
**spritesheetsList.json**
```json
{
  "params": {
    "baseUrl": "../spritesheets/"
  },
  "assets": [
    {
      "path": "buttons.json"
    },
    {
      "path": "decorations.json"
    }
  ],
  "metaData": {
    "type": "assetsList"
  }
}
```
**imagesList.json**
```json
{
  "params": {
    "baseUrl": "../images/"
  },
  "assets": [
    {
      "name": "background",
      "path": "background.jpg"
    },
    {
      "name": "logo",
      "path": "logo.png"
    }
  ],
  "metaData": {
    "type": "assetsList"
  }
}
```
## Using another loaders plugins
For simple loading sprite sheets made using TexturePacker with 'multipack' option you can try [pixi-tps-loader](https://www.npmjs.com/package/pixi-tps-loader).  
This loader also work with this assets list loader.  
___
### Contacts
Telegram [@rocket_ua](https://t.me/rocket_ua)