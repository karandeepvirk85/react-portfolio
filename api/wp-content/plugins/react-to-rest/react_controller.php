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
    		'post_type' => 'post',
    		'posts_per_page' => 1,
    		'numberposts' => 1
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
				'image_thumb' => self::getFeaturedImage($arrPosts[0]->ID)['medium'],
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

    	// Args for Blog Posts
    	$arrArgs = array(
    		'post_type' => 'post',
    		'posts_per_page' => -1,
    		'numberposts' => -1,
    		'order_by' => 'date',
    		'order' => 'DESC',
    		'category_name' => array('blog')
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
					'small_content' => substr(strip_tags($objPosts->post_content), 0, 200),
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
				'slug' =>$objTerms->slug,
				'image' => z_taxonomy_image_url($objTerms->term_id)
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

		$strJson = '
		{
				"articles":[
				{
					"source":{
						"id":null,
						"name":"FXStreet"
					},
					"author":"Rajarshi Mitra",
					"title":"Top 3 Coins Bitcoin, Ethereum and Ripple Price Prediction: BTC & XRP lack healthy support – Confluence Detector",
					"description":"Bitcoin Open: $11,529.43 Current Price: $11,414 BTC/USD has one strong resistance level at $11,875, which has the one-day and one-week Fibonacci 23.6",
					"url":"https://www.fxstreet.com/cryptocurrencies/news/top-3-coins-bitcoin-ethereum-and-ripple-price-prediction-btc-xrp-lack-healthy-support-confluence-detector-202008220129",
					"urlToImage":"https://karandeepvirk.com/api/wp-content/uploads/2020/08/bitcoin.dd8a16.png",
					"publishedAt":"2020-08-22T01:29:25Z",
					"content":"Note: All information on this page is subject to change. The use of this website constitutes acceptance of our user agreement. Please read our privacy policy and legal disclaimer.\r\nTrading foreign ex… [+1338 chars]"
				},
				{
					"source":{
						"id":null,
						"name":"Pypi.org"
					},
					"author":null,
					"title":"http2py added to PyPI",
					"description":"Tools to create python binders to http web services.",
					"url":"https://pypi.org/project/http2py/",
					"urlToImage":"https://pypi.org/static/images/twitter.90915068.jpg",
					"publishedAt":"2020-08-22T01:28:55Z",
					"content":"the_one_where_we_have_an_http_service_that_we_want_call_through_normal_looking_python_functions\r\n(Http) Requests for humans\r\nTools to create python binders to http web services.\r\nHere, we develop pyt… [+3279 chars]"
				},
				{
					"source":{
						"id":null,
						"name":"PRNewswire"
					},
					"author":null,
					"title":"Ideaology Starting First Phase of ICO",
					"description":"ZUG, Switzerland, Aug. 21, 2020 /PRNewswire/ -- The Swiss-based startup is initiating the first phase of the IDEA (their new cryptocurrency) Initial Coin Offering - October 1st. Connecting project owners, industry professionals, freelancers, and investors on …",
					"url":"https://www.prnewswire.com/news-releases/ideaology-starting-first-phase-of-ico-301116393.html",
					"urlToImage":"https://mma.prnewswire.com/media/1231913/Ideaology_Logo.jpg?p=facebook",
					"publishedAt":"2020-08-22T00:00:00Z",
					"content":"ZUG, Switzerland, Aug. 21, 2020 /PRNewswire/ -- The Swiss-based startup is initiating the first phase of the IDEA (their new cryptocurrency) Initial Coin Offering - October 1st.\r\nConnecting project o… [+2726 chars]"
				},
				{
					"source":{
						"id":null,
						"name":"newsBTC"
					},
					"author":"Nick Chong",
					"title":"Top DeFi Token Yearn.finance (YFI) Craters 20%: Why Analysts Remain Bullish",
					"description":"Yearn.finance (YFI) has embarked on a parabolic run-up over the past few days. The Ethereum-based asset traded at $4,200 one week ago, and yesterday, it reached $16,500. This is a gain of almost 300% in around seven days. The asset is beginning to reverse, th…",
					"url":"https://www.newsbtc.com/2020/08/21/top-defi-token-yearn-finance-yfi-craters-20-why-analysts-remain-bullish/",
					"urlToImage":"https://www.newsbtc.com/wp-content/uploads/2020/06/shutterstock_340518350-scaled.jpg",
					"publishedAt":"2020-08-21T23:59:40Z",
					"content":"Yearn.finance (YFI) has embarked on a parabolic run-up over the past few days. The Ethereum-based asset traded at $4,200 one week ago, and yesterday, it reached $16,500. This is a gain of almost 300%… [+2136 chars]"
				},
				{
					"source":{
						"id":null,
						"name":"Cointelegraph"
					},
					"author":"Cointelegraph By Joseph Young",
					"title":"Bitcoin Macro Trend Unaffected by Chinese Investors’ $50B Tether Exodus",
					"description":"Bitcoin’s macro bullish trend remains intact even after data show Chinese investors moved $50 billion in crypto to overseas addresses in the past 12 months.",
					"url":"https://cointelegraph.com/news/bitcoin-macro-trend-unaffected-by-chinese-investors-50b-tether-exodus",
					"urlToImage":"https://s3.cointelegraph.com/storage/uploads/view/dacf39ddaaab951f46aad951a4f19cd4.jpg",
					"publishedAt":"2020-08-21T23:55:00Z",
					"content":"New data from Chainalysis shows Chinese investors reportedly used Tether (USDT) to move nearly $50 billion overseas. This has led some crypto investors to question whether or not Bitcoin price could … [+2828 chars]"
				},
				{
					"source":{
						"id":null,
						"name":"Newslocker.com"
					},
					"author":null,
					"title":"Police arrest 33-year-old man as part of terrorism investigation",
					"description":"The suspect remains in custody while searches are carried out at a property in PaultonA 33-year-old man has been arrested under the Terrorism Act and remains in custody, Avon and Somerset police said on Friday.The suspect was held as part of an investigation …",
					"url":"https://www.newslocker.com/en-uk/profession/security/police-arrest-33-year-old-man-as-part-of-terrorism-investigation/",
					"urlToImage":"https://img.newslocker.com/2020/08/22/215258501_1200.jpg",
					"publishedAt":"2020-08-21T23:25:00Z",
					"content":"<ul><li>\r\nThe suspect remains in custody while searches are carried out at a property in PaultonA 33-year-old man has been arrested under the Terrorism Act and remains in custody, Avon and Somerset p… [+14173 chars]"
				},
				{
					"source":{
						"id":null,
						"name":"newsBTC"
					},
					"author":"Cole Petersen",
					"title":"Here’s the Crucial Level That May Spark Bitcoin’s Next Bloodbath Decline",
					"description":"Bitcoin has been caught in the throes of an intense bout of sideways trading for the past few weeks, with attempts to break above or below the upper-$11,000 region proving to be highly fleeting. Earlier this week, the benchmark cryptocurrency rallied as high …",
					"url":"https://www.newsbtc.com/2020/08/21/heres-the-crucial-level-that-may-spark-bitcoins-next-bloodbath-decline/",
					"urlToImage":"https://www.newsbtc.com/wp-content/uploads/2020/08/joel-filipe-sMncX9OLr8o-unsplash-scaled.jpg",
					"publishedAt":"2020-08-21T23:00:28Z",
					"content":"Bitcoin has been caught in the throes of an intense bout of sideways trading for the past few weeks, with attempts to break above or below the upper-$11,000 region proving to be highly fleeting.\r\nEar… [+2285 chars]"
				},
				{
					"source":{
						"id":null,
						"name":"CyberScoop"
					},
					"author":"Sean Lyngaas",
					"title":"FBI, CISA warn of ‘voice phishing’ campaigns",
					"description":"financial FBI, CISA warn of ‘voice phishing’ campaigns.\n\nWritten by Aug 21, 2020 | CYBERSCOOP. Sean Lyngaas The FBI and the U.S. Cybersecurity and Infrastructure Security Agency on Thursday warned the private sector of a “voice phishing” campaign in which cyb…",
					"url":"https://www.cyberscoop.com/fbi-cisa-alert-vishing-credentials/",
					"urlToImage":"https://www.cyberscoop.com/wp-content/uploads/2019/11/GettyImages-1158778974.jpg",
					"publishedAt":"2020-08-21T22:56:00Z",
					"content":"Written by Sean Lyngaas Aug 21, 2020 | CYBERSCOOPThe FBI and the U.S. Cybersecurity and Infrastructure Security Agency on Thursday warned the private sector of a voice phishing campaign in which cybe… [+1653 chars]"
				},
				{
					"source":{
						"id":null,
						"name":"HackRead"
					},
					"author":"Zara Khan",
					"title":"Ex-Uber CSO Joseph Sullivan charged over 2016 data breach cover up",
					"description":"By Zara Khan\nJoseph Sullivan also paid hackers $100,000 in Bitcoin.\nThis is a post from HackRead.com Read the original post: Ex-Uber CSO Joseph Sullivan charged over 2016 data breach cover up",
					"url":"https://www.hackread.com/ex-uber-cso-joseph-sullivan-charged-2016-data-breach/",
					"urlToImage":"https://www.hackread.com/wp-content/uploads/2020/08/Joseph-Sullivan-uber-cso-charged-with-obstruction-of-justice-over-2016-data-breach-cover-up.jpg",
					"publishedAt":"2020-08-21T22:40:09Z",
					"content":"Former Chief Security Officer at Uber, Joseph Sullivan has been charged with obstruction of justice after allegedly covering up a massive data breach that exposed private details of a whopping 57 mil… [+3072 chars]"
				},
				{
					"source":{
						"id":null,
						"name":"Canaltech.com.br"
					},
					"author":"Rui Maciel",
					"title":"Pix: sistema do BC permitirá saques em dinheiro em lojas a partir de 2021",
					"description":"Previsto para entrar em funcionamento a partir de 16 de novembro, o Pix, sistema instantâneo de pagamentos e transferências desenvolvido pelo Banco Central (BC) terá diversas funções. E uma das principais delas é a possibilidade de efetuar saques em dinheiro …",
					"url":"https://canaltech.com.br/software/pix-sistema-do-bc-permitira-saques-em-dinheiro-em-lojas-a-partir-de-2021-170372/",
					"urlToImage":"https://ibcdn.canaltech.com.br/w700h394i2417/pix-sistema-do-bc-permitira-saques-em-dinheiro-em-lojas-a-partir-de-2021-170372.png",
					"publishedAt":"2020-08-21T22:35:00Z",
					"content":"Previsto para entrar em funcionamento a partir de 16 de novembro, o Pix, sistema instantâneo de pagamentos e transferências desenvolvido pelo Banco Central (BC) terá diversas funções. E uma das princ… [+8091 chars]"
				},
				{
					"source":{
						"id":null,
						"name":"Business 2 Community"
					},
					"author":"Mark Quadros",
					"title":"Digital Transformation: How to Transition Your Brick-and-Mortar Business to the Online Space in 2020",
					"description":"2020 has been a tough year for local stores. And for two obvious reasons: quarantine and social distancing. The retail…",
					"url":"https://www.business2community.com/ecommerce/digital-transformation-how-to-transition-your-brick-and-mortar-business-to-the-online-space-in-2020-02337825",
					"urlToImage":"https://cdn.business2community.com/wp-content/uploads/2020/08/Social-media-strategies-for-small-business.jpg",
					"publishedAt":"2020-08-21T22:30:01Z",
					"content":"2020 has been a tough year for local stores.\r\nAnd for two obvious reasons: quarantine and social distancing.\r\nThe retail world is now forced to transition brick-and-mortar businesses to online stores… [+12783 chars]"
				},
				{
					"source":{
						"id":null,
						"name":"Zerohedge.com"
					},
					"author":"Tyler Durden",
					"title":"Daily Briefing - August 21, 2020",
					"description":"Daily Briefing - August 21, 2020\n\r\n\n\n Tyler Durden\n \nFri, 08/21/2020 - 18:25\n\n Real Vision CEO Raoul Pal is joined by senior editor Ash Bennington to reflect on the future of markets at this unique juncture. Raoul begins by giving Ash a glimpse of how his “un…",
					"url":"https://www.zerohedge.com/markets/daily-briefing-august-21-2020",
					"urlToImage":"https://www.zerohedge.com/s3/files/styles/max_650x650/public/2020-08/thumbnail3830297235f4049bec4f425.03480476.jpg?itok=sDQam2Y-",
					"publishedAt":"2020-08-21T22:25:00Z",
					"content":null
				},
				{
					"source":{
						"id":null,
						"name":"Seeking Alpha"
					},
					"author":"Akanksha Bakshi",
					"title":"On the hour",
					"description":"S&P +0.33%.10-yr +0.10%.Euro -0.53% vs. dollar.Crude -1.21% to $42.30.Gold +0.06% to $1,947.60.Bitcoin -2.66% to $11,529..",
					"url":"https://seekingalpha.com/news/3608004-on-hour",
					"urlToImage":"https://static3.seekingalpha.com/assets/og_image_192-59bfd51c9fe6af025b2f9f96c807e46f8e2f06c5ae787b15bf1423e6c676d4db.png",
					"publishedAt":"2020-08-21T22:00:33Z",
					"content":"S&amp;P +0.33%.\r\n10-yr +0.10%.\r\nEuro -0.53% vs. dollar.\r\nCrude -1.21% to $42.30.\r\nGold +0.06% to $1,947.60.\r\nBitcoin -2.66% to $11,529."
				},
				{
					"source":{
						"id":null,
						"name":"Zerohedge.com"
					},
					"author":"Tyler Durden",
					"title":"Buy Gold, Bitcoin; \"Major Banking Crisis Coming Fast\", Rich-Dad-Poor-Dad Author",
					"description":"Buy Gold, Bitcoin; \"Major Banking Crisis Coming Fast\", Rich-Dad-Poor-Dad Author\n\n Tyler Durden\n \nFri, 08/21/2020 - 18:00\n\n Authored by Mac Slavo via SHTFplan.com,\r\n\n\nAuthor Robert Kiyosaki, who wrote the book Rich Dad, Poor Dad says the United States is heade…",
					"url":"https://www.zerohedge.com/geopolitical/buy-gold-bitcoin-major-banking-crisis-rich-dad-poor-dad-author",
					"urlToImage":"https://zh-prod-1cc738ca-7d3b-4a72-b792-20bd8d8fa069.storage.googleapis.com/s3fs-public/styles/max_650x650/public/2020-08/2020-08-21_7-17-32.jpg?itok=oX7GsA2b",
					"publishedAt":"2020-08-21T22:00:00Z",
					"content":"Authored by Mac Slavo via SHTFplan.com,\r\nAuthor Robert Kiyosaki, who wrote the book Rich Dad, Poor Dad says the United States is headed for totalitarianism and that he wants to flee the country with … [+2578 chars]"
				},
				{
					"source":{
						"id":null,
						"name":"Habr.com"
					},
					"author":"tyomitch",
					"title":"Аутенти(фи?)кация",
					"description":"Некоторые термины, заимствуемые из английского, входят в русский язык с нарушением всех языковых правил. Характерный пример из 90-х — слово флуд, непохожее ни на транскрипцию [flʌd], ни на транслитерацию flood. Более свежий пример — биткоин: окончание -оин ха…",
					"url":"https://habr.com/ru/post/506092/#post-content-body",
					"urlToImage":"https://habr.com/share/publication/506092/00ee6a277b230507b0e7c21388992679/?v=1",
					"publishedAt":"2020-08-21T21:50:01Z",
					"content":", , . 90- , [fld], flood. : - (, ..), , bitcoin; ., .. , authentication. authenticatus--, -fi---! , - - -.\r\n - - --. 1927, 1964 2002 ..:\r\nriskov, , : , , . « » **?\r\n, 1959, 1962 1964 ..:\r\n, ; 2004 fi… [+127 chars]"
				},
				{
					"source":{
						"id":null,
						"name":"newsBTC"
					},
					"author":"Cole Petersen",
					"title":"These Factors Suggest Tezos is Oversold; Traders Expect It to “Launch” Higher",
					"description":"Tezos has faced a massive influx of selling pressure today that has sent it reeling lower, making it one of the worst-performing major altcoins at the moment. This weakness has come about as the aggregated market shows some signs of being in a precarious posi…",
					"url":"https://www.newsbtc.com/2020/08/21/these-factors-suggest-tezos-is-oversold-traders-expect-it-to-launch-higher/",
					"urlToImage":"https://www.newsbtc.com/wp-content/uploads/2020/08/jordan-sanchez-71hQxE-Sfvg-unsplash-1-scaled.jpg",
					"publishedAt":"2020-08-21T21:00:46Z",
					"content":"Tezos has faced a massive influx of selling pressure today that has sent it reeling lower, making it one of the worst-performing major altcoins at the moment.\r\nThis weakness has come about as the agg… [+2413 chars]"
				},
				{
					"source":{
						"id":null,
						"name":"Seeking Alpha"
					},
					"author":"Vandana Singh",
					"title":"On the hour",
					"description":"S&P +0.34%.10-yr +0.10%.Euro -0.53% vs. dollar.Crude -1.26% to $42.27.Gold +0.06% to $1,947.75.Bitcoin -2.01% to $11,635.9.",
					"url":"https://seekingalpha.com/news/3607994-on-hour",
					"urlToImage":"https://static3.seekingalpha.com/assets/og_image_192-59bfd51c9fe6af025b2f9f96c807e46f8e2f06c5ae787b15bf1423e6c676d4db.png",
					"publishedAt":"2020-08-21T21:00:32Z",
					"content":"S&amp;P +0.34%.\r\n10-yr +0.10%.\r\nEuro -0.53% vs. dollar.\r\nCrude -1.26% to $42.27.\r\nGold +0.06% to $1,947.75.\r\nBitcoin -2.01% to $11,635.9"
				},
				{
					"source":{
						"id":null,
						"name":"newsBTC"
					},
					"author":"Tony Spilotro",
					"title":"This Tool Has Called Nearly Every Bitcoin Top, And It Just Triggered Again",
					"description":"Things have been looking up for Bitcoin. The cryptocurrency is currently the best-performing mainstream asset of 2020 so far, beating out the record-breaking gold rally, the stock market recovery, and anything else. But the top in Bitcoin could be in, accordi…",
					"url":"https://www.newsbtc.com/2020/08/21/this-tool-has-called-nearly-every-bitcoin-top-and-it-just-triggered-again/",
					"urlToImage":"https://www.newsbtc.com/wp-content/uploads/2020/08/bitcoin-top-indicator-td-sequential-Depositphotos_31297869_xl-2015-scaled.jpg",
					"publishedAt":"2020-08-21T21:00:09Z",
					"content":"Things have been looking up for Bitcoin. The cryptocurrency is currently the best-performing mainstream asset of 2020 so far, beating out the record-breaking gold rally, the stock market recovery, an… [+4208 chars]"
				},
				{
					"source":{
						"id":"cbc-news",
						"name":"CBC News"
					},
					"author":"CBC News",
					"title":"Saint John police issue warnings about scammers 2 days in a row",
					"description":"For the second day in a row Saint John police are warning people not to give out any personal information over the phone.",
					"url":"https://www.cbc.ca/news/canada/new-brunswick/saint-john-police-scammers-1.5695563",
					"urlToImage":"https://i.cbc.ca/1.5455171.1584391868!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/phone-landline-stock.jpg",
					"publishedAt":"2020-08-21T20:48:02Z",
					"content":"For the second day in a row, Saint John police are warning people not to give out any personal information over the phone. \r\nThe latest scam involves calls from people claiming they represent Service… [+2848 chars]"
				},
				{
					"source":{
						"id":null,
						"name":"CoinDesk"
					},
					"author":"Daniel Cawrey",
					"title":"Market Wrap: Bitcoin Dips to $11.6K, ETH Options Predict Price Below $400 by End of Year",
					"description":"Bitcoin’s price is trending down while ether options traders expect bearish moves to come.",
					"url":"https://www.coindesk.com/market-wrap-bitcoin-eth-options",
					"urlToImage":"https://static.coindesk.com/wp-content/uploads/2020/08/cdbpiaug21-scaled.jpg",
					"publishedAt":"2020-08-21T20:41:03Z",
					"content":"Bitcoin traders are hitting the sell button Friday while the ether options market loads up on lower prices.\r\n<ul><li>Bitcoin (BTC) trading around $11,674 as of 20:00 UTC (4 p.m. ET). Slipping 1.4% ov… [+4387 chars]"
				}
				]
			}';
		$strJson = json_decode($strJson);
		echo json_encode($strJson);
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