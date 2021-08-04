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
                'show_in_rest' => true,
                'rewrite' => array('slug' => 'news'),
                'supports' =>array(
                    'title' => 'title',
                    'editor' => 'editor',
                    'thumbnail' => 'thumbnail',
                    'custom-fields' => 'custom-fields',
                    'excerpt' => 'excerpt'
                ), 
            )
        );
    }
}
new News_Controller();
?>