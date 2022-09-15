const isLocalHost = false;
const apiDomain =
    isLocalHost === true
        ? "http://localhost/react-portfolio/api"
        : "https://kdeep.ca/api";
const newsApi = apiDomain + "/wp-admin/admin-ajax.php?action=get_news";
const contactController = apiDomain + "/contact_controller.php";
const blogApi = apiDomain + "/wp-admin/admin-ajax.php?action=get_blogs";
const categoryBlog =
    apiDomain + "/wp-admin/admin-ajax.php?action=get_blogs&category=";
const googleMapAddress =
    "https://www.google.com/maps?q=14373+82b+Ave,+Surrey,+BC+V3W+0J4&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjj8KCqipLrAhWuKDQIHc_LCEMQ_AUoAXoECAwQAw";
const portfolioEmail = "ikarandeep.singh.virk@gmail.com";
const portfolioPhone = "(437) 286-4350";
const portfolioAddress = "275 Fleetwood Crescent, Toronto, ON";
const portfolioLinkedIn = "https://www.linkedin.com/in/kv85/";
const portfolioGithub = "https://github.com/karandeepvirk85";
const siteDomain = "https://www.kdeep.ca";

export {
    newsApi,
    contactController,
    blogApi,
    categoryBlog,
    apiDomain,
    portfolioEmail,
    portfolioPhone,
    portfolioAddress,
    googleMapAddress,
    portfolioLinkedIn,
    portfolioGithub,
    siteDomain,
};
