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
    "https://www.google.com/maps/place/275+Fleetwood+Crescent,+Brampton,+ON+L6T+2E7/@43.7209995,-79.7137878,17z/data=!3m1!4b1!4m5!3m4!1s0x882b3dc406aa9461:0x63ced13cb1b20c0c!8m2!3d43.7209995!4d-79.7115991";
const portfolioEmail = "ikarandeep.singh.virk@gmail.com";
const portfolioPhone = "(437) 286-4350";
const portfolioAddress = "275 Fleetwood Crescent, Toronto, Ontario, Canada";
const portfolioLinkedIn = "https://www.linkedin.com/in/kv85/";
const portfolioGithub = "https://github.com/karandeepvirk85";
const siteDomain = "https://www.kdeep.ca";
const themeColor = "#000176";  

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
    themeColor
};