"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name CanvasCamera
 * @description
 *
 * @usage
 * ```
 * import {CanvasCamera} from 'ionic-native';
 *
 * let object = document.getElementById('myDiv');
 * // or
 * @ViewChild('myDiv') object;
 *
 * CanvasCamera.initialize(object);
 *
 * CanvasCamera.start();
 *
 * CanvasCamera.takePicture().then(picture => { });
 *
 * ```
 */
var CanvasCamera = (function () {
    function CanvasCamera() {
    }
    /**
     * Initialize the Camera
     * @param htmlElement {HTMLElement} The HTML Element to preview the camera in
     */
    CanvasCamera.initialize = function (htmlElement) { };
    /**
     * Start capture video as images from camera to preview camera on web page.
     * @param options
     */
    CanvasCamera.start = function (options) { };
    /**
     * Takes a photo
     * @returns {Promise<any>}
     */
    CanvasCamera.takePicture = function () { return; };
    /**
     * Sets the flash mode
     * @param flashMode {number} Flash mode, use CanvasCamera.FlashMode constant to set
     */
    CanvasCamera.setFlashMode = function (flashMode) { };
    /**
     * Set camera position
     * @param cameraPosition {number} Camera Position, use CanvasCamera.CameraPosition constant
     */
    CanvasCamera.setCameraPosition = function (cameraPosition) { };
    CanvasCamera.DestinationType = {
        DATA_URL: 0,
        FILE_URI: 1
    };
    CanvasCamera.PictureSourceType = {
        PHOTOLIBRARY: 0,
        CAMERA: 1,
        SAVEDPHOTOALBUM: 2
    };
    CanvasCamera.EncodingType = {
        JPEG: 0,
        PNG: 1
    };
    CanvasCamera.CameraPosition = {
        BACK: 0,
        FRONT: 1
    };
    CanvasCamera.FlashMode = {
        OFF: 0,
        ON: 1,
        AUTO: 2
    };
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], CanvasCamera, "initialize", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], CanvasCamera, "start", null);
    __decorate([
        plugin_1.Cordova()
    ], CanvasCamera, "takePicture", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], CanvasCamera, "setFlashMode", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], CanvasCamera, "setCameraPosition", null);
    CanvasCamera = __decorate([
        plugin_1.Plugin({
            plugin: 'com.keith.cordova.plugin.canvascamera',
            pluginRef: 'CanvasCamera',
            repo: 'https://github.com/donaldp24/CanvasCameraPlugin'
        })
    ], CanvasCamera);
    return CanvasCamera;
}());
exports.CanvasCamera = CanvasCamera;
//# sourceMappingURL=canvas-camera.js.map