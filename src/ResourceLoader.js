import * as PIXI from 'pixi.js';
import url from 'url'

export default class ResourcesLoader {


    static add(params) {

    }

    static  pre(resource, next) {
        return next();
    }

    static use(resource, next) {
        if (!resource.data || resource.type !== PIXI.LoaderResource.TYPE.JSON) {
            return next();
        }

        if (resource.data.metadata && resource.data.metadata.type && resource.data.metadata.type === 'assetsList') {
            const assets = resource.data.assets;
            const params = resource.data.params;
            const fileBaseUrl = params ? params.baseUrl ? params.baseUrl : './' : './';
            if (assets && assets.length > 0) {
                let options = {
                    crossOrigin: resource.crossOrigin,
                    parentResource: resource,
                    metadata: {}
                };
                assets.forEach(function (assetItem) {
                    if (assetItem.path && assetItem.path !== '') {
                        options.metadata = {
                            type: 'assetsListChild'
                        }
                        options.name = assetItem.name || null;

                        /*const u0 = resource.url.replace(this.baseUrl, '');
                        const u1 = url.resolve(u0, fileBaseUrl);
                        const u2 = url.resolve(u1, assetItem.path);
                        const u3 = u2.replace(this.baseUrl, '');*/
                        //options.url = u3;

                        options.url = url.resolve(url.resolve(resource.url.replace(this.baseUrl, ''), fileBaseUrl), assetItem.path).replace(this.baseUrl, '');
                        options.metadata = Object.assign(options.metadata, assetItem.metadata || {});
                        this.add(options);
                    }
                }, this);
            }
        }
        return next();
    }
}
