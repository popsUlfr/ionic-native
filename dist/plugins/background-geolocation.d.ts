export interface Location {
    /**
     * ID of location as stored in DB (or null)
     */
    locationId: number;
    /**
     * Service provider
     */
    serviceProvider: string;
    /**
     * true if location recorded as part of debug
     */
    debug: boolean;
    /**
     * UTC time of this fix, in milliseconds since January 1, 1970.
     */
    time: number;
    /**
     * latitude, in degrees.
     */
    latitude: number;
    /**
     * longitude, in degrees.
     */
    longitude: number;
    /**
     * estimated accuracy of this location, in meters.
     */
    accuracy: number;
    /**
     * speed if it is available, in meters/second over ground.
     */
    speed: number;
    /**
     * altitude if available, in meters above the WGS 84 reference ellipsoid.
     */
    altitude: number;
    /**
     * bearing, in degrees.
     */
    bearing: number;
    /**
     * A Coordinates object defining the current location
     */
    coords: Coordinates;
    /**
     * A timestamp representing the time at which the location was retrieved.
     */
    timestamp: number;
}
export interface Config {
    /**
     * Desired accuracy in meters. Possible values [0, 10, 100, 1000]. The lower
     * the number, the more power devoted to GeoLocation resulting in higher
     * accuracy readings. 1000 results in lowest power drain and least accurate
     * readings. @see Apple docs (https://developer.apple.com/library/ios/documentation/CoreLocation/Reference/CLLocationManager_Class/index.html#//apple_ref/occ/instp/CLLocationManager/desiredAccuracy)
     */
    desiredAccuracy: number;
    /**
     * Stationary radius in meters. When stopped, the minimum distance the device
     * must move beyond the stationary location for aggressive background-tracking
     * to engage.
     */
    stationaryRadius: number;
    /**
     * When enabled, the plugin will emit sounds for life-cycle events of
     * background-geolocation! See debugging sounds table.
     */
    debug?: boolean;
    /**
     * The minimum distance (measured in meters) a device must move horizontally
     * before an update event is generated. @see Apple docs. (https://developer.apple.com/library/ios/documentation/CoreLocation/Reference/CLLocationManager_Class/CLLocationManager/CLLocationManager.html#//apple_ref/occ/instp/CLLocationManager/distanceFilter)
     */
    distanceFilter: number;
    /**
     * IOS, ANDROID ONLY
     * Enable this in order to force a stop() when the application terminated
     * (e.g. on iOS, double-tap home button, swipe away the app).o
     *
     * Defaults to true
     */
    stopOnTerminate?: boolean;
    /**
     * ANDROID, WP8 ONLY
     * The minimum time interval between location updates in seconds.
     * @see Android docs (http://developer.android.com/reference/android/location/LocationManager.html#requestLocationUpdates(long,%20float,%20android.location.Criteria,%20android.app.PendingIntent))
     * and the MS doc (http://msdn.microsoft.com/en-us/library/windows/apps/windows.devices.geolocation.geolocator.reportinterval)
     * for more information
     */
    interval?: number;
    /**
     * ANDROID ONLY
     * Custom notification title in the drawer.
     */
    notificationTitle?: string;
    /**
     * ANDROID ONLY
     * Custom notification text in the drawer.
     */
    notificationText?: string;
    /**
     * ANDROID ONLY
     * The accent color to use for notification. Eg. #4CAF50.
     */
    notificationIconColor?: string;
    /**
     * ANDROID ONLY
     * The filename of a custom notification icon. See android quirks.
     * NOTE: Only available for API Level >=21.
     */
    notificationIcon?: string;
    /**
     * ANDROID ONLY
     * Set location service provider @see wiki (https://github.com/mauron85/cordova-plugin-background-geolocation/wiki/Android-providers)
     */
    locationProvider?: number;
    /**
     * IOS ONLY
     * [AutomotiveNavigation, OtherNavigation, Fitness, Other] Presumably,
     * this affects iOS GPS algorithm. @see Apple docs for more information
     * (https://developer.apple.com/library/ios/documentation/CoreLocation/Reference/CLLocationManager_Class/CLLocationManager/CLLocationManager.html#//apple_ref/occ/instp/CLLocationManager/activityType)
     */
    activityType?: string;
}
/**
 * @name BackgroundGeolocation
 * @description
 * This plugin provides foreground and background geolocation with battery-saving "circular region monitoring" and "stop detection". For
 * more detail, please see https://github.com/mauron85/cordova-plugin-background-geolocation
 *
 * @usage
 *
 * ```typescript
 * import { BackgroundGeolocation } from 'ionic-native';
 *
 *
 * // When device is ready :
 * platform.ready().then(() => {
 *
 *     // BackgroundGeolocation is highly configurable. See platform specific configuration options
 *     let config = {
 *             desiredAccuracy: 10,
 *             stationaryRadius: 20,
 *             distanceFilter: 30,
 *             debug: true, //  enable this hear sounds for background-geolocation life-cycle.
 *             stopOnTerminate: false, // enable this to clear background location settings when the app terminates
 *     };
 *
 *     BackgroundGeolocation.configure((location) => {
         console.log('[js] BackgroundGeolocation callback:  ' + location.latitude + ',' + location.longitude);

          // IMPORTANT:  You must execute the finish method here to inform the native plugin that you're finished,
          // and the background-task may be completed.  You must do this regardless if your HTTP request is successful or not.
          // IF YOU DON'T, ios will CRASH YOUR APP for spending too much time in the background.
          BackgroundGeolocation.finish(); // FOR IOS ONLY

 *      }, (error) => {
 *        console.log('BackgroundGeolocation error');
 *      }, config);
 *
 *     // Turn ON the background-geolocation system.  The user will be tracked whenever they suspend the app.
 *     BackgroundGeolocation.start();
 * })
 *
 * // If you wish to turn OFF background-tracking, call the #stop method.
 * BackgroundGeolocation.stop();
 *
 * ```
 */
export declare class BackgroundGeolocation {
    /**
     * Configure the plugin.
     *
     * @param {Function} Success callback will be called when background location is determined.
     * @param {Function} Fail callback to be executed every time a geolocation error occurs.
     * @param {Object} An object of type Config
     *
     * @return Location object, which tries to mimic w3c Coordinates interface.
     * See http://dev.w3.org/geo/api/spec-source.html#coordinates_interface
     * Callback to be executed every time a geolocation is recorded in the background.
     */
    static configure(callback: Function, errorCallback: Function, options: Config): void;
    /**
     * Turn ON the background-geolocation system.
     * The user will be tracked whenever they suspend the app.
     */
    static start(): Promise<any>;
    /**
     * Turn OFF background-tracking
     */
    static stop(): Promise<any>;
    /**
     * Inform the native plugin that you're finished, the background-task may be completed
     * NOTE: IOS, WP only
     */
    static finish(): void;
    /**
     * Force the plugin to enter "moving" or "stationary" state
     * NOTE: IOS, WP only
     */
    static changePace(isMoving: boolean): void;
    /**
     * Setup configuration
     */
    static setConfig(options: Config): Promise<any>;
    /**
     * Returns current stationaryLocation if available. null if not
     * NOTE: IOS, WP only
     */
    static getStationaryLocation(): Promise<Location>;
    /**
     * Add a stationary-region listener. Whenever the devices enters "stationary-mode",
     * your #success callback will be executed with #location param containing #radius of region
     * NOTE: IOS, WP only
     */
    static onStationary(): Promise<any>;
    /**
     * Check if location is enabled on the device
     * @returns {Promise<number>} Returns a promise with int argument that takes values 0, 1 (true).
     * NOTE: ANDROID only
     */
    static isLocationEnabled(): Promise<number>;
    /**
     * Display device location settings
     */
    static showLocationSettings(): void;
    /**
     * Method can be used to detect user changes in location services settings.
     * If user enable or disable location services then success callback will be executed.
     * In case or error (SettingNotFoundException) fail callback will be executed.
     * NOTE: ANDROID only
     */
    static watchLocationMode(): Promise<boolean>;
    /**
     * Stop watching for location mode changes.
     * NOTE: ANDROID only
     */
    static stopWatchingLocationMode(): void;
    /**
     * Method will return all stored locations.
     * Locations are stored when:
     *  - config.stopOnTerminate is false and main activity was killed
     *    by the system
     *  or
     *  - option.debug is true
     * NOTE: ANDROID only
     */
    static getLocations(): Promise<any>;
    /**
     * Delete stored location by given locationId.
     * NOTE: ANDROID only
     */
    static deleteLocation(locationId: number): Promise<any>;
    /**
     * Delete all stored locations.
     * NOTE: ANDROID only
     */
    static deleteAllLocations(): Promise<any>;
}
