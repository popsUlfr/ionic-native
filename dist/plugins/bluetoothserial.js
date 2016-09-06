"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Bluetooth Serial
 * @description This plugin enables serial communication over Bluetooth. It was written for communicating between Android or iOS and an Arduino.
 * @usage
 * ```typescript
 * import { BluetoothSerial } from 'ionic-native';
 *
 *
 * // Write a string
 * BluetoothSerial.write("hello world").then(success, failure);
 *
 * // Array of int or bytes
 * BluetoothSerial.write([186, 220, 222]).then(success, failure);
 *
 * // Typed Array
 * var data = new Uint8Array(4);
 * data[0] = 0x41;
 * data[1] = 0x42;
 * data[2] = 0x43;
 * data[3] = 0x44;
 * BluetoothSerial.write(data).then(success, failure);
 *
 * // Array Buffer
 * BluetoothSerial.write(data.buffer).then(success, failure);
 * ```
 */
var BluetoothSerial = (function () {
    function BluetoothSerial() {
    }
    /**
     * Connect to a Bluetooth device
     * @param {string} macAddress_or_uuid Identifier of the remote device
     * @returns {Observable} Subscribe to connect, unsubscribe to disconnect.
     */
    BluetoothSerial.connect = function (macAddress_or_uuid) { return; };
    /**
     * Connect insecurely to a Bluetooth device
     * @param {string} macAddress Identifier of the remote device
     * @returns {Observable} Subscribe to connect, unsubscribe to disconnect.
     */
    BluetoothSerial.connectInsecure = function (macAddress) { return; };
    /**
    * Disconnects the current connection.
    * @param {string} macAddress_or_uuid Identifier of the remote device, if not specified the identifier of the last connect or connectInsecure is used. [optional]
    * @returns {Promise} returns a promise when disconnection succeeded or failed
    */
    BluetoothSerial.disconnect = function (macAddress_or_uuid) { return; };
    /**
     * Writes data to the serial port
     * @param {any} data ArrayBuffer of data
     * @param {string} macAddress Identifier of the remote device, if not specified the identifier of the last connect or connectInsecure is used. [optional]
     * @returns {Promise} returns a promise when data has been written
     */
    BluetoothSerial.write = function (data, macAddress) { return; };
    /**
     * Gets the number of bytes of data available
     * @param {string} macAddress Identifier of the remote device, if not specified the identifier of the last connect or connectInsecure is used. [optional]
     * @returns {Promise} returns a promise that contains the available bytes
     */
    BluetoothSerial.available = function (macAddress) { return; };
    /**
     * Reads data from the buffer
     * @param {string} macAddress Identifier of the remote device, if not specified the identifier of the last connect or connectInsecure is used. [optional]
     * @returns {Promise} returns a promise with data from the buffer
     */
    BluetoothSerial.read = function (macAddress) { return; };
    /**
     * Reads data from the buffer until it reaches a delimiter
     * @param {string} delimiter string that you want to search until
     * @param {string} macAddress Identifier of the remote device, if not specified the identifier of the last connect or connectInsecure is used. [optional]
     * @returns {Promise} returns a promise
     */
    BluetoothSerial.readUntil = function (delimiter, macAddress) { return; };
    /**
     * Subscribe to be notified when data is received
     * @param {string} delimiter the string you want to watch for
     * @param {string} macAddress Identifier of the remote device, if not specified the identifier of the last connect or connectInsecure is used. [optional]
     * @returns {Observable} returns an observable.
     */
    BluetoothSerial.subscribe = function (delimiter, macAddress) { return; };
    /**
    * Unsubscribe from a subscription.
    * @param {string} macAddress Identifier of the remote device, if not specified the identifier of the last connect or connectInsecure is used. [optional]
    * @returns {Promise} returns a promise
    */
    BluetoothSerial.unsubscribe = function (macAddress) { return; };
    /**
     * Subscribe to be notified when data is received
     * @param {string} macAddress Identifier of the remote device, if not specified the identifier of the last connect or connectInsecure is used. [optional]
     * @returns {Observable} returns an observable
     */
    BluetoothSerial.subscribeRawData = function (macAddress) { return; };
    /**
    * Unsubscribe from a raw data subscription.
    * @param {string} macAddress Identifier of the remote device, if not specified the identifier of the last connect or connectInsecure is used. [optional]
    * @returns {Promise} returns a promise
    */
    BluetoothSerial.unsubscribeRawData = function (macAddress) { return; };
    /**
     * Clears data in buffer
     * @param {string} macAddress Identifier of the remote device, if not specified the identifier of the last connect or connectInsecure is used. [optional]
     * @returns {Promise} returns a promise when completed
     */
    BluetoothSerial.clear = function (macAddress) { return; };
    /**
     * Lists bonded devices
     * @returns {Promise} returns a promise
     */
    BluetoothSerial.list = function () { return; };
    /**
     * Reports if bluetooth is enabled
     * @returns {Promise} returns a promise
     */
    BluetoothSerial.isEnabled = function () { return; };
    /**
     * Reports the connection status
     * @param {string} macAddress Identifier of the remote device, if not specified the identifier of the last connect or connectInsecure is used. [optional]
     * @returns {Promise} returns a promise
     */
    BluetoothSerial.isConnected = function (macAddress) { return; };
    /**
     * Reads the RSSI from the connected peripheral
     * @param {string} macAddress Identifier of the remote device, if not specified the identifier of the last connect or connectInsecure is used. [optional]
     * @returns {Promise} returns a promise
     */
    BluetoothSerial.readRSSI = function (macAddress) { return; };
    /**
     * Show the Bluetooth settings on the device
     * @returns {Promise} returns a promise
     */
    BluetoothSerial.showBluetoothSettings = function () { return; };
    /**
     * Enable Bluetooth on the device
     * @returns {Promise} returns a promise
     */
    BluetoothSerial.enable = function () { return; };
    /**
     * Discover unpaired devices
     * @returns {Promise} returns a promise
     */
    BluetoothSerial.discoverUnpaired = function () { return; };
    /**
     * Subscribe to be notified on Bluetooth device discovery. Discovery process must be initiated with the `discoverUnpaired` function.
     * @returns {Observable} Returns an observable
     */
    BluetoothSerial.setDeviceDiscoveredListener = function () { return; };
    /**
     * Sets the human readable device name that is broadcasted to other devices
     * @param {string} newName Desired name of device
     */
    BluetoothSerial.setName = function (newName) { };
    /**
     * Makes the device discoverable by other devices
     * @param {number} discoverableDuration Desired number of seconds device should be discoverable for
     */
    BluetoothSerial.setDiscoverable = function (discoverableDuration) { };
    /**
     * Initiate pairing with a Bluetooth device
     * @param {string} macAddress Identifier of the remote device
     * @param {string} pin PIN number of the remote device [optional]
     * @returns {Promise} returns a promise
     */
    BluetoothSerial.pair = function (macAddress, pin) { return; };
    /**
     * Initiate unpairing with a Bluetooth device
     * @param {string} macAddress Identifier of the remote device
     * @returns {Promise} returns a promise
     */
    BluetoothSerial.unpair = function (macAddress) { return; };
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android', 'iOS', 'Windows Phone'],
            observable: true,
            clearFunction: 'disconnect',
            clearWithArgs: true,
            clearCallbackOrder: 'reverse'
        })
    ], BluetoothSerial, "connect", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android'],
            observable: true,
            clearFunction: 'disconnect',
            clearWithArgs: true,
            clearCallbackOrder: 'reverse'
        })
    ], BluetoothSerial, "connectInsecure", null);
    __decorate([
        plugin_1.Cordova({
            callbackOrder: 'reverse'
        })
    ], BluetoothSerial, "disconnect", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android', 'iOS', 'Windows Phone'],
            successIndex: 1,
            errorIndex: 2
        })
    ], BluetoothSerial, "write", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android', 'iOS', 'Windows Phone'],
            callbackOrder: 'reverse'
        })
    ], BluetoothSerial, "available", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android', 'iOS', 'Windows Phone'],
            callbackOrder: 'reverse'
        })
    ], BluetoothSerial, "read", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android', 'iOS', 'Windows Phone'],
            successIndex: 1,
            errorIndex: 2
        })
    ], BluetoothSerial, "readUntil", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android', 'iOS', 'Windows Phone'],
            observable: true,
            clearFunction: 'unsubscribe',
            clearWithArgs: true,
            clearParamIndex: 1,
            clearCallbackOrder: 'reverse',
            successIndex: 1,
            errorIndex: 2
        })
    ], BluetoothSerial, "subscribe", null);
    __decorate([
        plugin_1.Cordova({
            callbackOrder: 'reverse'
        })
    ], BluetoothSerial, "unsubscribe", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android', 'iOS', 'Windows Phone'],
            observable: true,
            clearFunction: 'unsubscribeRawData',
            clearWithArgs: true,
            clearCallbackOrder: 'reverse',
            callbackOrder: 'reverse'
        })
    ], BluetoothSerial, "subscribeRawData", null);
    __decorate([
        plugin_1.Cordova({
            callbackOrder: 'reverse'
        })
    ], BluetoothSerial, "unsubscribeRawData", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android', 'iOS', 'Windows Phone'],
            callbackOrder: 'reverse'
        })
    ], BluetoothSerial, "clear", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android', 'iOS', 'Windows Phone']
        })
    ], BluetoothSerial, "list", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android', 'iOS', 'Windows Phone']
        })
    ], BluetoothSerial, "isEnabled", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android', 'iOS', 'Windows Phone'],
            callbackOrder: 'reverse'
        })
    ], BluetoothSerial, "isConnected", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android', 'iOS', 'Windows Phone'],
            callbackOrder: 'reverse'
        })
    ], BluetoothSerial, "readRSSI", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android', 'iOS', 'Windows Phone']
        })
    ], BluetoothSerial, "showBluetoothSettings", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android', 'iOS', 'Windows Phone']
        })
    ], BluetoothSerial, "enable", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android', 'iOS', 'Windows Phone']
        })
    ], BluetoothSerial, "discoverUnpaired", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android', 'iOS', 'Windows Phone'],
            observable: true,
            clearFunction: 'clearDeviceDiscoveredListener'
        })
    ], BluetoothSerial, "setDeviceDiscoveredListener", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android'],
            sync: true
        })
    ], BluetoothSerial, "setName", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android'],
            sync: true
        })
    ], BluetoothSerial, "setDiscoverable", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android']
        })
    ], BluetoothSerial, "pair", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android']
        })
    ], BluetoothSerial, "unpair", null);
    BluetoothSerial = __decorate([
        plugin_1.Plugin({
            repo: 'https://github.com/popsUlfr/BluetoothSerial',
            plugin: 'cordova-plugin-bluetooth-serial',
            pluginRef: 'bluetoothSerial',
            platforms: ['Android', 'iOS', 'Windows Phone', 'Browser']
        })
    ], BluetoothSerial);
    return BluetoothSerial;
}());
exports.BluetoothSerial = BluetoothSerial;
//# sourceMappingURL=bluetoothserial.js.map