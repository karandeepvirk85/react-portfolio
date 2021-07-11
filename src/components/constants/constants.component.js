const siteDomain = "http://localhost/react-portfolio/api/";
const newsApi = siteDomain + "/wp-admin/admin-ajax.php?action=get_news";
const contactController = siteDomain + "/contact_controller.php";
const blogApi = siteDomain + "/wp-admin/admin-ajax.php?action=get_blogs";
const categoryBlog =
    siteDomain + "wp-admin/admin-ajax.php?action=get_blogs&category=";
const googleMapAddress =
    "https://www.google.com/maps?q=14373+82b+Ave,+Surrey,+BC+V3W+0J4&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjj8KCqipLrAhWuKDQIHc_LCEMQ_AUoAXoECAwQAw";
const portfolioEmail = "karandeep.virk@yahoo.com";
const portfolioPhone = "204-898-7629";
const portfolioAddress = "14373 82b Ave, Surrey, BC V3W 0J4";
const portfolioLinkedIn = "https://www.linkedin.com/in/kv85/";
const portfolioGithub = "https://github.com/karandeepvirk85";

export {
    newsApi,
    contactController,
    blogApi,
    categoryBlog,
    siteDomain,
    portfolioEmail,
    portfolioPhone,
    portfolioAddress,
    googleMapAddress,
    portfolioLinkedIn,
    portfolioGithub,
};
