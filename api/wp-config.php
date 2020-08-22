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
define( 'DB_NAME', 'react_blog' );

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
define( 'AUTH_KEY',         '3=y@](x!DP137aI.%<@D2`lrX!4mZ;j`P;g^I+I4RLT4 6=FRm/<9zk>uh7R1%}7' );
define( 'SECURE_AUTH_KEY',  '1NO41c^SH#c@3!]nOgsJ{v6w#,8;~[8@hWT<`GxI$1` L^HMm=OqcZg |kvpj)>i' );
define( 'LOGGED_IN_KEY',    'tj!VOq pKoG.yTl}yIBQi*4g 6[WUFXN5!{;bVDAhtu0n]GXkMG[Ge0CA&0!KKk9' );
define( 'NONCE_KEY',        'Wv*3VFhUpI}LEi?en`Bu~s/Z+HE[.= 3$=S2L#AgRWcl:tLr{T>L)q+7n5IhtoPl' );
define( 'AUTH_SALT',        ':11}^<8Az/:480FYKjQMFi0fS?jC*Urm.cP|]lLhrRqxSKsD^~v+iR6<xsUvaIzD' );
define( 'SECURE_AUTH_SALT', 'i/;Q}xn6$DQwjYM7cXyT!Og*8:0u$}=Rz/|s:eGUc#bsPWt[?d#MVd0;^[#g{oiD' );
define( 'LOGGED_IN_SALT',   '|R2sx8TMz+qx7~mPP%,1wx%X3]d9U`~(@OevoCXGNx) Ka>(|<=Dv,}#|7_ck+,|' );
define( 'NONCE_SALT',       '.ov| ;e!1L;7G`hCAJ1ES!L9vQ8;`GlJC>s=5(G1NAu[HB^3AK(bl;?JVK!0!WyQ' );

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
define( 'WP_DEBUG', true );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
