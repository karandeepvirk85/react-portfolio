<?php 
defined('ABSPATH') OR exit;
class News_Controller{
    
    public function __construct(){
        add_action('init', array(__CLASS__,'registerNewPostType'));
    }

    public static function registerNewPostType(){
        register_post_type('news',
            array(
                'labels' => array(
                'name' => __( 'News' ),
                'singular_name' => __( 'News' )
            ),
                'public' => true,
                'has_archive' => false,
                'rewrite' => array('slug' => 'news'),
            )
        );
    }
}
new News_Controller();
?>