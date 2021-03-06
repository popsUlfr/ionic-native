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
export declare class CanvasCamera {
    static DestinationType: {
        DATA_URL: number;
        FILE_URI: number;
    };
    static PictureSourceType: {
        PHOTOLIBRARY: number;
        CAMERA: number;
        SAVEDPHOTOALBUM: number;
    };
    static EncodingType: {
        JPEG: number;
        PNG: number;
    };
    static CameraPosition: {
        BACK: number;
        FRONT: number;
    };
    static FlashMode: {
        OFF: number;
        ON: number;
        AUTO: number;
    };
    /**
     * Initialize the Camera
     * @param htmlElement {HTMLElement} The HTML Element to preview the camera in
     */
    static initialize(htmlElement: HTMLElement): void;
    /**
     * Start capture video as images from camera to preview camera on web page.
     * @param options
     */
    static start(options?: {
        quality?: number;
        sourceType?: number;
        destinationType?: number;
        allowEdit?: boolean;
        correctOrientation?: boolean;
        saveToPhotoAlbum?: boolean;
        encodingType?: number;
        width?: number;
        height?: number;
    }): void;
    /**
     * Takes a photo
     * @returns {Promise<any>}
     */
    static takePicture(): Promise<any>;
    /**
     * Sets the flash mode
     * @param flashMode {number} Flash mode, use CanvasCamera.FlashMode constant to set
     */
    static setFlashMode(flashMode: number): void;
    /**
     * Set camera position
     * @param cameraPosition {number} Camera Position, use CanvasCamera.CameraPosition constant
     */
    static setCameraPosition(cameraPosition: number): void;
}
