import { Cordova, Plugin } from './plugin';
import { Observable } from 'rxjs/Observable';

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
@Plugin({
  repo: 'https://github.com/popsUlfr/BluetoothSerial',
  plugin: 'cordova-plugin-bluetooth-serial',
  pluginRef: 'bluetoothSerial',
  platforms: ['Android', 'iOS', 'Windows Phone', 'Browser']
})
export class BluetoothSerial {

  /**
   * Connect to a Bluetooth device
   * @param {string} macAddress_or_uuid Identifier of the remote device
   * @returns {Observable} Subscribe to connect, unsubscribe to disconnect.
   */
  @Cordova({
    platforms: ['Android', 'iOS', 'Windows Phone'],
    observable: true,
    clearFunction: 'disconnect',
    clearWithArgs: true,
    clearCallbackOrder: 'reverse'
  })
  static connect(macAddress_or_uuid: string): Observable<any> { return; }

  /**
   * Connect insecurely to a Bluetooth device
   * @param {string} macAddress Identifier of the remote device
   * @returns {Observable} Subscribe to connect, unsubscribe to disconnect.
   */
  @Cordova({
    platforms: ['Android'],
    observable: true,
    clearFunction: 'disconnect',
    clearWithArgs: true,
    clearCallbackOrder: 'reverse'
  })
  static connectInsecure(macAddress: string): Observable<any> { return; }

  /**
  * Disconnects the current connection.
  * @param {string} macAddress_or_uuid Identifier of the remote device, if not specified the identifier of the last connect or connectInsecure is used. [optional]
  * @returns {Promise} returns a promise when disconnection succeeded or failed
  */
  @Cordova({
    callbackOrder: 'reverse'
  })
  static disconnect(macAddress_or_uuid?: string): Promise<any> { return; }

  /**
   * Writes data to the serial port
   * @param {any} data ArrayBuffer of data
   * @param {string} macAddress Identifier of the remote device, if not specified the identifier of the last connect or connectInsecure is used. [optional]
   * @returns {Promise} returns a promise when data has been written
   */
  @Cordova({
    platforms: ['Android', 'iOS', 'Windows Phone'],
    successIndex: 1,
    errorIndex: 2
  })
  static write(data: any, macAddress?: string): Promise<any> { return; }

  /**
   * Gets the number of bytes of data available
   * @param {string} macAddress Identifier of the remote device, if not specified the identifier of the last connect or connectInsecure is used. [optional]
   * @returns {Promise} returns a promise that contains the available bytes
   */
  @Cordova({
    platforms: ['Android', 'iOS', 'Windows Phone'],
    callbackOrder: 'reverse'
  }) static available(macAddress?: string): Promise<any> { return; }

  /**
   * Reads data from the buffer
   * @param {string} macAddress Identifier of the remote device, if not specified the identifier of the last connect or connectInsecure is used. [optional]
   * @returns {Promise} returns a promise with data from the buffer
   */
  @Cordova({
    platforms: ['Android', 'iOS', 'Windows Phone'],
    callbackOrder: 'reverse'
  })
  static read(macAddress?: string): Promise<any> { return; }

  /**
   * Reads data from the buffer until it reaches a delimiter
   * @param {string} delimiter string that you want to search until
   * @param {string} macAddress Identifier of the remote device, if not specified the identifier of the last connect or connectInsecure is used. [optional]
   * @returns {Promise} returns a promise
   */
  @Cordova({
    platforms: ['Android', 'iOS', 'Windows Phone'],
    successIndex: 1,
    errorIndex: 2
  })
  static readUntil(delimiter: string, macAddress?: string): Promise<any> { return; }

  /**
   * Subscribe to be notified when data is received
   * @param {string} delimiter the string you want to watch for
   * @param {string} macAddress Identifier of the remote device, if not specified the identifier of the last connect or connectInsecure is used. [optional]
   * @returns {Observable} returns an observable.
   */
  @Cordova({
    platforms: ['Android', 'iOS', 'Windows Phone'],
    observable: true,
    clearFunction: 'unsubscribe',
    clearWithArgs: true,
    clearParamIndex: 1,
    clearCallbackOrder: 'reverse',
    successIndex: 1,
    errorIndex: 2
  })
  static subscribe(delimiter: string, macAddress?: string): Observable<any> { return; }

  /**
  * Unsubscribe from a subscription.
  * @param {string} macAddress Identifier of the remote device, if not specified the identifier of the last connect or connectInsecure is used. [optional]
  * @returns {Promise} returns a promise
  */
  @Cordova({
    callbackOrder: 'reverse'
  })
  static unsubscribe(macAddress?: string): Promise<any> { return; }

  /**
   * Subscribe to be notified when data is received
   * @param {string} macAddress Identifier of the remote device, if not specified the identifier of the last connect or connectInsecure is used. [optional]
   * @returns {Observable} returns an observable
   */
  @Cordova({
    platforms: ['Android', 'iOS', 'Windows Phone'],
    observable: true,
    clearFunction: 'unsubscribeRawData',
    clearWithArgs: true,
    clearCallbackOrder: 'reverse',
    callbackOrder: 'reverse'
  })
  static subscribeRawData(macAddress?: string): Observable<any> { return; }

  /**
  * Unsubscribe from a raw data subscription.
  * @param {string} macAddress Identifier of the remote device, if not specified the identifier of the last connect or connectInsecure is used. [optional]
  * @returns {Promise} returns a promise
  */
  @Cordova({
    callbackOrder: 'reverse'
  })
  static unsubscribeRawData(macAddress?: string): Promise<any> { return; }

  /**
   * Clears data in buffer
   * @param {string} macAddress Identifier of the remote device, if not specified the identifier of the last connect or connectInsecure is used. [optional]
   * @returns {Promise} returns a promise when completed
   */
  @Cordova({
    platforms: ['Android', 'iOS', 'Windows Phone'],
    callbackOrder: 'reverse'
  })
  static clear(macAddress?: string): Promise<any> { return; }

  /**
   * Lists bonded devices
   * @returns {Promise} returns a promise
   */
  @Cordova({
    platforms: ['Android', 'iOS', 'Windows Phone']
  })
  static list(): Promise<any> { return; }

  /**
   * Reports if bluetooth is enabled
   * @returns {Promise} returns a promise
   */
  @Cordova({
    platforms: ['Android', 'iOS', 'Windows Phone']
  })
  static isEnabled(): Promise<any> { return; }

  /**
   * Reports the connection status
   * @param {string} macAddress Identifier of the remote device, if not specified the identifier of the last connect or connectInsecure is used. [optional]
   * @returns {Promise} returns a promise
   */
  @Cordova({
    platforms: ['Android', 'iOS', 'Windows Phone'],
    callbackOrder: 'reverse'
  })
  static isConnected(macAddress?: string): Promise<any> { return; }

  /**
   * Reads the RSSI from the connected peripheral
   * @param {string} macAddress Identifier of the remote device, if not specified the identifier of the last connect or connectInsecure is used. [optional]
   * @returns {Promise} returns a promise
   */
  @Cordova({
    platforms: ['Android', 'iOS', 'Windows Phone'],
    callbackOrder: 'reverse'
  })
  static readRSSI(macAddress?: string): Promise<any> { return; }

  /**
   * Show the Bluetooth settings on the device
   * @returns {Promise} returns a promise
   */
  @Cordova({
    platforms: ['Android', 'iOS', 'Windows Phone']
  })
  static showBluetoothSettings(): Promise<any> { return; }

  /**
   * Enable Bluetooth on the device
   * @returns {Promise} returns a promise
   */
  @Cordova({
    platforms: ['Android', 'iOS', 'Windows Phone']
  })
  static enable(): Promise<any> { return; }

  /**
   * Discover unpaired devices
   * @returns {Promise} returns a promise
   */
  @Cordova({
    platforms: ['Android', 'iOS', 'Windows Phone']
  })
  static discoverUnpaired(): Promise<any> { return; }

  /**
   * Subscribe to be notified on Bluetooth device discovery. Discovery process must be initiated with the `discoverUnpaired` function.
   * @returns {Observable} Returns an observable
   */
  @Cordova({
    platforms: ['Android', 'iOS', 'Windows Phone'],
    observable: true,
    clearFunction: 'clearDeviceDiscoveredListener'
  })
  static setDeviceDiscoveredListener(): Observable<any> { return; }

  /**
   * Sets the human readable device name that is broadcasted to other devices
   * @param {string} newName Desired name of device
   */
  @Cordova({
    platforms: ['Android'],
    sync: true
  })
  static setName(newName: string): void { }

  /**
   * Makes the device discoverable by other devices
   * @param {number} discoverableDuration Desired number of seconds device should be discoverable for
   */
  @Cordova({
    platforms: ['Android'],
    sync: true
  })
  static setDiscoverable(discoverableDuration: number): void { }

}
