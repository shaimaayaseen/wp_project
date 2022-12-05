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
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'four_p' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

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
define( 'AUTH_KEY',         'bG8h$*vRwx$#4Yjy{o$>`Sd3es_)F7BzH/FA-kn,KD.r~Wo;.Ogn@TBtxzM`b5B8' );
define( 'SECURE_AUTH_KEY',  '<-}3:sg6ixhAdK8^H%~}3Xl-4?nWVjduM~5KV}Xe|B06T.D2`?ldxDs4PrN|a5%Z' );
define( 'LOGGED_IN_KEY',    '5HFhit6uZzgzuK{hoaJb@CD)AxtssJikmp|gv;)QS_Qf,u7XTz_/|g_}q6b@2{ZO' );
define( 'NONCE_KEY',        'Ft:,?5LbfV@c9]H| v3axvv|9<o=^e6gVN2Om-h-| [WF+tlw$Ad/>>DAyaF:l)z' );
define( 'AUTH_SALT',        '2-EF0U>orG.hN=-aB-5=9Z{Ja?%oO/Gy)NH[~}nln:c,sI~T7]!@n#^#r[<XS8%p' );
define( 'SECURE_AUTH_SALT', 'w!}h;_.!9%JI=*SbjnA?p&C~px}Ewv.]/p.,|Ikv3Q@y}O#07 Ju2!mhgr`6E(Tw' );
define( 'LOGGED_IN_SALT',   '2S,GWI!RV?vZcf7uZ5|>/+QJES!/gizj&Q6XOo2cg.>~K{o;!ktwK;ItVPFHP5_K' );
define( 'NONCE_SALT',       'qAw%+%,rKA-EYlL#TSS?fHsm%a3({ufq#s4[Yj=h(]vNYu8UH0{xxsgSbktsT@,}' );

/**#@-*/

/**
 * WordPress database table prefix.
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

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
