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
define( 'DB_NAME', 'wordpress' );

/** Database username */
define( 'DB_USER', 'wordpress' );

/** Database password */
define( 'DB_PASSWORD', 'Hgo7gJ7H' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

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
define( 'AUTH_KEY',          'k*)L+[M&v*+<}xZ.b^8xw9q!2#xz7qE<wbgL1C!.F%P:eu+`$>-5Gd^;)$!Jx7bi' );
define( 'SECURE_AUTH_KEY',   '$/WL0>x9*-tRYfgI)j(tcqFrj9xyX3d>lI7MYmjum/d5c%xlO+iK:><ftX<>a$@{' );
define( 'LOGGED_IN_KEY',     'S@Lp!(bMj8W:)BP-p>_std@~-W87[Ja4Y;-d{Vi:<h-g#T6o.6|`Ga{oRU-5+`E*' );
define( 'NONCE_KEY',         '$Nt{]z|JPiP3,2oFtnypobePcU(bT;2YKZ{6}5@p=f?=kAd[o_hd=g/G_dVp73WM' );
define( 'AUTH_SALT',         'd(PS-<jx5}I7)}~QAmg:N6f2V;Lk`x;/r_-Gz686B@nJGhfWciyodD7Z@E`AMxxq' );
define( 'SECURE_AUTH_SALT',  'k!DG/4;*IQ,ci&;c`*DTsOU^Ba%bos1$lH!c|b</^BskPk~r%KqM!(XLqn[UXwd2' );
define( 'LOGGED_IN_SALT',    'vBGL)9gmK?y&VT;J0]YV=}g&uu_(W?{Xd^X>d*9@?bbTlm$n6CL$k=nr~3WB|>`H' );
define( 'NONCE_SALT',        '_NG}JLz[F$+H.MlS=^$y#K$Y%IHn/ADuGE8.uXW(khT?_Cx~UO3^1y8(Ycrt&an/' );
define( 'WP_CACHE_KEY_SALT', '5-&bgB*I}F_PYMyaE7EqXP-MyenX+&P@}1s+j+Qx,@T91;&YJ=aLj_~1w!2`s::T' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



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
