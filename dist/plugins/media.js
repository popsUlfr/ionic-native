"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
var Observable_1 = require('rxjs/Observable');
/**
 * @name MediaPlugin
 * @description
 * @usage
 * ```typescript
 * import { MediaPlugin } from 'ionic-native';
 *
 *
 *
 * // Create a MediaPlugin instance.  Expects path to file or url as argument
 * var file = new MediaPlugin('path/to/file.mp3');
 *
 * // Catch the Success & Error Output
 * // Platform Quirks
 * // iOS calls success on completion of playback only
 * // Android calls success on completion of playback AND on release()
 * file.init.then(() => {
 *   console.log('Playback Finished');
 * }, (err) => {
 *   console.log('somthing went wrong! error code: ' + err.code + ' message: ' + err.message);
 * });
 *
 * // play the file
 * file.play();
 *
 * // pause the file
 * file.pause();
 *
 * // get current playback position
 * file.getCurrentPosition().then((position) => {
 *   console.log(position);
 * });
 *
 * // get file duration
 * file.getDuration().then((duration) => {
 *   console.log(position);
 * });
 *
 * // skip to 10 seconds (expects int value in ms)
 * file.seekTo(10000);
 *
 * // stop playing the file
 * file.stop();
 *
 * // release the native audio resource
 * // Platform Quirks:
 * // iOS simply create a new instance and the old one will be overwritten
 * // Android you must call release() to destroy instances of media when you are done
 * file.release();
 *
 * // Recording to a file
 * var newFile = new MediaPlugin('path/to/file.mp3');
 * newFile.startRecord();
 *
 * newFile.stopRecord();
 *
 *
 *
 * ```
 */
var MediaPlugin = (function () {
    // Methods
    /**
     * Open a media file
     * @param src {string} A URI containing the audio content.
     */
    function MediaPlugin(src) {
        var res, rej, next;
        this.init = new Promise(function (resolve, reject) { res = resolve; rej = reject; });
        this.status = new Observable_1.Observable(function (observer) {
            next = function (data) { return observer.next(data); };
        });
        this._objectInstance = new Media(src, res, rej, next);
    }
    /**
     * Returns the current amplitude of the current recording.
     */
    MediaPlugin.prototype.getCurrentAmplitude = function () { return; };
    /**
     * Returns the current position within an audio file. Also updates the Media object's position parameter.
     */
    MediaPlugin.prototype.getCurrentPosition = function () { return; };
    /**
     * Returns the duration of an audio file in seconds. If the duration is unknown, it returns a value of -1.
     */
    MediaPlugin.prototype.getDuration = function () { return; };
    /**
     * Starts or resumes playing an audio file.
     */
    MediaPlugin.prototype.play = function (iosOptions) { };
    /**
     * Pauses playing an audio file.
     */
    MediaPlugin.prototype.pause = function () { };
    /**
     * Releases the underlying operating system's audio resources. This is particularly important for Android, since there are a finite amount of OpenCore instances for media playback. Applications should call the release function for any Media resource that is no longer needed.
     */
    MediaPlugin.prototype.release = function () { };
    /**
     * Sets the current position within an audio file.
     * @param milliseconds
     */
    MediaPlugin.prototype.seekTo = function (milliseconds) { };
    /**
     * Set the volume for an audio file.
     * @param volume The volume to set for playback. The value must be within the range of 0.0 to 1.0.
     */
    MediaPlugin.prototype.setVolume = function (volume) { };
    /**
     * Starts recording an audio file.
     */
    MediaPlugin.prototype.startRecord = function () { };
    /**
     * Stops recording
     */
    MediaPlugin.prototype.stopRecord = function () { };
    /**
     * Stops playing an audio file.
     */
    MediaPlugin.prototype.stop = function () { };
    // Constants
    MediaPlugin.MEDIA_NONE = 0;
    MediaPlugin.MEDIA_STARTING = 1;
    MediaPlugin.MEDIA_RUNNING = 2;
    MediaPlugin.MEDIA_PAUSED = 3;
    MediaPlugin.MEDIA_STOPPED = 4;
    // error codes
    MediaPlugin.MEDIA_ERR_ABORTED = 1;
    MediaPlugin.MEDIA_ERR_NETWORK = 2;
    MediaPlugin.MEDIA_ERR_DECODE = 3;
    MediaPlugin.MEDIA_ERR_NONE_SUPPORTED = 4;
    __decorate([
        plugin_1.CordovaInstance()
    ], MediaPlugin.prototype, "getCurrentAmplitude", null);
    __decorate([
        plugin_1.CordovaInstance()
    ], MediaPlugin.prototype, "getCurrentPosition", null);
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], MediaPlugin.prototype, "getDuration", null);
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], MediaPlugin.prototype, "play", null);
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], MediaPlugin.prototype, "pause", null);
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], MediaPlugin.prototype, "release", null);
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], MediaPlugin.prototype, "seekTo", null);
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], MediaPlugin.prototype, "setVolume", null);
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], MediaPlugin.prototype, "startRecord", null);
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], MediaPlugin.prototype, "stopRecord", null);
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], MediaPlugin.prototype, "stop", null);
    MediaPlugin = __decorate([
        plugin_1.Plugin({
            repo: 'https://github.com/apache/cordova-plugin-media',
            plugin: 'cordova-plugin-media',
            pluginRef: 'Media'
        })
    ], MediaPlugin);
    return MediaPlugin;
}());
exports.MediaPlugin = MediaPlugin;
//# sourceMappingURL=media.js.map