<?php 
// Exit if accessed directly
defined('ABSPATH') OR exit;
header("Access-Control-Allow-Origin: *");
class Blog_Controller{
    function __construct(){
	    add_action('wp_ajax_get_blogs', array(__CLASS__, 'getBlogs'));
		add_action('wp_ajax_nopriv_get_blogs', array(__CLASS__, 'getBlogs'));	
		add_action('wp_ajax_get_single', array(__CLASS__, 'getSingle'));
		add_action('wp_ajax_nopriv_get_single', array(__CLASS__, 'getSingle'));	
		add_action('wp_ajax_get_news', array(__CLASS__, 'getNews'));
		add_action('wp_ajax_nopriv_get_news', array(__CLASS__, 'getNews'));	
		add_action('wp_ajax_get_terms', array(__CLASS__, 'getPostsTerms'));
		add_action('wp_ajax_nopriv_get_terms', array(__CLASS__, 'getPostsTerms'));	
		add_action('wp_ajax_get_page', array(__CLASS__, 'getPage'));
		add_action('wp_ajax_nopriv_get_page', array(__CLASS__, 'getPage'));
		//add_action('init',array(__CLASS__,'getNews'));
	}
	
	/**
    * Function To Return Blogs
    * Post Type => post
    * 
    */
    public static function getSingle(){
    	// Return Array for React
    	$arrReturn = array(
    		'error' => true,
    		'data' => array()
    	);
		$strSlug  = !empty($_GET['slug']) ? $_GET['slug'] : '';
    	// Args for Blog Posts
    	$arrArgs = array(
			'name' => $strSlug,
    		'post_type' => 'post'
    	);

    	// Get All Posts 
		$arrPosts = get_posts($arrArgs);
		if(!empty($arrPosts)){
			$arrBlog = array();
			$strAuthorName = self::getAuthorName($arrPosts[0]);
			$arrBlog = array(
				'title' => $arrPosts[0]->post_title,
				'content' => apply_filters('the_content', $arrPosts[0]->post_content),
				'small_content' => substr(apply_filters('the_content', strip_tags($arrPosts[0]->post_content), 0, 500)),
				'author' => $strAuthorName,
				'date' => date('d F Y', strtotime($arrPosts[0]->post_date)),
				'image_thumb' => self::getFeaturedImage($arrPosts[0]->ID)['thumb'],
				'image_full' => self::getFeaturedImage($arrPosts[0]->ID)['full'],
				'category' => get_the_terms($arrPosts[0]->ID,'category'),
				'url' => 'post/'.$arrPosts[0]->post_name
			);
		}
    	
    	$arrReturn = array(
    		'error' => false,
    		'data' => $arrBlog
    	);
    	echo json_encode($arrReturn);
    	die;
	}
    /**
    * Function To Return Blogs
    * Post Type => post
    * 
    */
    public static function getBlogs(){
    	// Return Array for React
    	$arrReturn = array(
    		'error' => true,
    		'data' => array()
		);
		$arrTaxQuery = array();
		$strSlug  = !empty($_GET['category']) ? $_GET['category'] : '';
		
		if($strSlug != 'all'){
			$arrTaxQuery =  array(
				array(
					'taxonomy' => 'category',
					'field' => 'slug',
					'terms' =>  $strSlug
				)
			);
		}
    	// Args for Blog Posts
    	$arrArgs = array(
    		'post_type' => 'post',
    		'posts_per_page' => -1,
    		'numberposts' => -1,
    		'order_by' => 'date',
    		'order' => 'DESC',
			'category_name' => array('blog'),
			'tax_query' => $arrTaxQuery
    	);

    	// Get All Posts 
		$arrPosts = get_posts($arrArgs);
		if(!empty($arrPosts)){
			$arrBlogs = array();
			foreach($arrPosts as $objPosts){
				$strAuthorName = self::getAuthorName($objPosts);
				$arrBlogs[] = array(
					'title' => $objPosts->post_title,
					'content' => apply_filters('the_content', $objPosts->post_content),
					'small_content' => substr(strip_tags($objPosts->post_content), 0, 300),
					'author' => $strAuthorName,
					'date' => date('d F Y', strtotime($objPosts->post_date)),
					'image_thumb' => self::getFeaturedImage($objPosts->ID)['medium'],
					'image_full' => self::getFeaturedImage($objPosts->ID)['full'],
					'category' => get_the_terms($objPosts->ID,'category'),
					'url' => 'post/'.$objPosts->post_name
				);
			}
		}
    	
    	$arrReturn = array(
    		'error' => false,
    		'data' => $arrBlogs
    	);
    	echo json_encode($arrReturn);
    	die;
	}

	/**
	 * Get WordPress Featured Image
	 * 
	 */
	public static function getFeaturedImage($intPostId){
		// Set Return Array
		$arrImageFeatured = array(
			'thumb' =>'',
			'medium' => '',
			'full' =>''
		);

		$arrImageFeatured['thumb'] = wp_get_attachment_image_src(get_post_thumbnail_id($intPostId),'small')[0];
		$arrImageFeatured['medium'] = wp_get_attachment_image_src(get_post_thumbnail_id($intPostId),'medium')[0];
		$arrImageFeatured['full'] = wp_get_attachment_image_src(get_post_thumbnail_id($intPostId),'full')[0];
		
		return $arrImageFeatured;
	}

	/**
	 * Get Author First and Last Name
	 * Using WordPress Default get_the_author_meta() function
	 * 
	 */
	public static function getAuthorName($objPosts){
		return get_the_author_meta('first_name', $objPosts->post_author).' '.get_the_author_meta('last_name', $objPosts->post_author);
	}

	/**
	 * Get Blog Terms
	 * 
	 */
	public static function getPostsTerms(){

		$arrReturn = array();

		$arrTerms = get_terms(array(
			'taxonomy' => 'category',
			'hide_empty' => true,
		));
		foreach ($arrTerms as $objTerms) {

			$arrReturn[] = array(
				'name' =>$objTerms->name,
				'slug' =>$objTerms->slug
			);
		}

		echo json_encode($arrReturn);
		die;
	}

	/**
	 * Get Custom News
	 * 
	 */
	public static function getNews(){

		$args = array(
			'post_type' => 'news',
			'posts_per_page' => -1,
			'numberposts' => -1,
			'post_status' => 'publish',
			'order_by' => 'date',
			'order' => 'DESC'
		);
		
		$arrNews = get_posts($args);
		$arrNewsData = array();
		foreach ($arrNews as $objNews){
		$strNewsDate = date('d F Y',strtotime($objNews->post_date));
			$arrNewsData[] = array(
				'title' => $objNews->post_title,
				'description' => substr(stripcslashes(strip_tags($objNews->post_content)),0,250).'..',
				'published_at' => $strNewsDate  ,
				'short_description' => stripcslashes(strip_tags($objNews->post_excerpt)),
				'news_url' =>urldecode(get_post_meta($objNews->ID,'meta_news_url', true)),
				'author_name' => trim(get_post_meta($objNews->ID,'meta_author_name',true)),
				'news_image' =>  wp_get_attachment_image_url(get_post_meta($objNews->ID,'_thumbnail_id',true),'large'),
			);
		}
		echo json_encode($arrNewsData);
		die;
	}

	/**
	 * Get WP Page
	 *  
	 */
	public static function getPage(){
		$arrReturn = array(
    		'error' => true,
    		'data' => array()
		);
		
		$strSlug  = !empty($_GET['slug']) ? $_GET['slug'] : '';
    	// Args for Blog Posts
    	$arrArgs = array(
			'name' => $strSlug,
    		'post_type' => 'page',
    		'posts_per_page' => 1,
    		'numberposts' => 1
    	);

    	// Get All Posts 
		$arrPosts = get_posts($arrArgs);
		if(!empty($arrPosts)){
			$arrPage = array();
			$strAuthorName = self::getAuthorName($arrPosts[0]);
			$arrPage = array(
				'content' => apply_filters('the_content', $arrPosts[0]->post_content),
			);
		}
    	
    	$arrReturn = array(
    		'error' => false,
    		'data' => $arrPage
    	);
    	echo json_encode($arrReturn);
    	die;
	}
}
new Blog_Controller;
?>