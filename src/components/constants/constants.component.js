import React, { Component } from "react";
const newsApi =
  "https://karandeepvirk.com/api/wp-admin/admin-ajax.php?action=get_news";

const contactController =
  "https://karandeepvirk.com/api/contact_controller.php";

const blogApi =
  "https://karandeepvirk.com/api/wp-admin/admin-ajax.php?action=get_blogs";

const categoryBlog =
  "https://karandeepvirk.com/api/wp-admin/admin-ajax.php?action=get_blogs&category=";

export { newsApi, contactController, blogApi, categoryBlog };
