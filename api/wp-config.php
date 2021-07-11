<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'react_portfolio' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '2y!D]V/ay/lQrl4S+-qjVdu?:AE&4qi*}K;Uiqfg~_qT2dxye@8Tc)?/|YF)SAYQ' );
define( 'SECURE_AUTH_KEY',  'QtsPpdmY;*[jBtN^<87+l2rTd0@bX2:z9W=9><meU7 }`io{f.dM4V~e-DH?p$F2' );
define( 'LOGGED_IN_KEY',    'uVZ|9LTT#V~de^cA@Lf. sO`K{?Tx)QM2Xgm@t<z%1A-22&P]Rj<a@3 L?>G8xww' );
define( 'NONCE_KEY',        'pDX`=q~=bh1qu=n@:-{-7>Dr{rgz^Xa/]>wase4T4Zg{qLm?zDwcYMOo{x9(GUZ3' );
define( 'AUTH_SALT',        '6[[(^prqZ$3$At%i1*JqH8.D2zoSU=njaqEp[N|}?fs5i^B7*pHu}7+y2Ho{iamb' );
define( 'SECURE_AUTH_SALT', 'ru0H]O1Lg3:|e7!BXP+>M<E(Dk12> wSL6@>]4?U>HbEhu`{/(I5j#y:|DY4.,=L' );
define( 'LOGGED_IN_SALT',   '~XReUnYCb(R UQ0W4R/0XU{W%u4qX=l8WQUHK@o!sn#NC5cSP%7%; 9.6cf@gAW+' );
define( 'NONCE_SALT',       '>|J,Fq;GdfMgs(#vwlGxfaE_:/Hj];B5`~&t%/AVr|3Tn!sHfQ6Z;t-NB:d%7Wy(' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
