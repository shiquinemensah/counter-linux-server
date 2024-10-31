<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wp_le6ek' );

/** Database username */
define( 'DB_USER', 'wp_bp7j3' );

/** Database password */
define( 'DB_PASSWORD', 'Xnyl$!5^jifdPT68' );

/** Database hostname */
define( 'DB_HOST', 'localhost:3306' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', '1]68c&*C9|&1/C_!/48Fz~1*g4;AEmg59|b0]SJb)|T&63r+@hmY6([z841w!/8m');
define('SECURE_AUTH_KEY', ']I06UPs016XhV0P@)dM1bw_C_38-32%1FacJx2Y82_+4##@6&mBF4iFL71(9xbR1');
define('LOGGED_IN_KEY', ':&C-f:6twY][vK#J)[7&q3i64_N34u5PE3F6xb_4-x!MS323|&z;w9)AunMjXi[F');
define('NONCE_KEY', '0F8N#Od533F5_5+a+6z:C;wDj[SN5;Z+079%mMzgYB4ss3e_u/23-Z9!e3HQ;;#b');
define('AUTH_SALT', 'mi-&w2b#XhG539c~_mie|[M944016ck]!Oj+_GbahWeu(-6G(6sXKxc8Sf937wRF');
define('SECURE_AUTH_SALT', 'B_6ht3D9ftwSgqvK3(5*z08zG;9VCf96!Q;~#|ASKBm[D&tzVH*nrLgvypvi4hhG');
define('LOGGED_IN_SALT', 'fg2c|Gz8x+NOW#[i)4@3~uTP;e-#Pzwz1y~437|[Y_#I]blWh376(34DC548r#6&');
define('NONCE_SALT', 'k5W~Y7803UK315S[gQK!r(uIbpM0j5|~5x7Cn4el42TZgR&EI;+V90u0!C2O|7Q|');


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'b7KjXPxf8_';


/* Add any custom values between this line and the "stop editing" line. */

define('WP_ALLOW_MULTISITE', true);
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
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
