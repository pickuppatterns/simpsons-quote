import React from 'react';
import AllQuotes from '../../containers/AllQuotes';
import { css } from 'emotion';


export default function App() {
  return (
    <>
    <main
      className={css`
    text-align: center;
    font-family: helvetica;
    color: #fff;
    margin: 0 auto;
    background-color: #0099ff;
    font-size: 24px;
    font-family: helvetica;
    border-radius: 4px;
    }
  `}>
      <h1 className={css`
    color: hotpink;
    }
  `} >SIMPSONS QUOTES</h1>
      <AllQuotes />
    </main>
  </>
  );
}


/*Page Loader Background*/
.tana-loader {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 99999;
  background-color:#ffffff;
  background-image: http://pdxpopnow.com/wp-content/uploads/imgs/page_loader.png;
  -webkit-transition: all 0.25s ease;
  -moz-transition: all 0.25s ease;
  -ms-transition: all 0.25s ease;
  -o-transition: all 0.25s ease;
  transition: all 0.25s ease;
}
/*Page Loader Color*/
.tana-loader .loader-content .loader-line-mask .loader-line {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  box-shadow: inset 0 0 0 3px rgb(31, 224, 137);
}

.category-block .post.first .date a {
 pointer-events: none;
 cursor: default;
}
.version2 .category-block .post.first.text-bigger.hover-dark.blog-loop h4 {
 pointer-events: none;
 cursor: default;
}
/*GLOBAL STYLES*/
strong,
u {
  color: #e7851e;
}
a {
  color: #1ea964;
}
a:focus {
  outline: none;
  text-decoration: none;
}
a:hover {
  color: #e7851e;
  text-decoration: none;
}
/*Top Bar Turned off */
/*#topbar .topbar-container-left {
    display: none;}*/



/*Turn off left hand side Mobile Menu*/
 .panel-header .burger-menu  {display:none;}

#header.header-fashion .header-wrapper 
.right-content .search-panel .search-handler svg path {
  fill: #ffffff;
}
#header.header-fashion .header-wrapper .right-content .search-panel .burger-menu svg path {
  fill: #ffffff;
}
.push-menu .pm-container .pm-wrap .close-menu:hover::before,
.push-menu .pm-container .pm-wrap .close-menu:hover::after {
  background-color: #1aad74;}
.push-menu .pm-container .pm-wrap .big-menu ul li a:hover {
  color: #1aad74;}
.push-menu .pm-container .pm-wrap .close-menu:hover::before,
.push-menu .pm-container .pm-wrap .close-menu:hover::after {
  background-color: #1aad74;}

/*Turn on Desktop/Laptop Menu*/
#header nav.main-nav > ul {
   display:flex;
   flex-wrap: flex;
}
/*Fix Header Wrapper*/
#header.header-fashion .header-wrapper {
    position: relative;
    width: 120%;
    height: 168px;
}
#header.header-fashion .container-fluid{
   /* background: url(http://pdxpopnow.com/wp-content/uploads/2019/02/Header_Background.png);*/
    width: 1160px;}
#header .header-wrapper .site-branding img {float:left;
}
#header.header-fashion .header-wrapper nav.main-nav {
    text-align: center;
    display:flex;
    flex-wrap:wrap;
    font-family: 'SF-UI-Display';
    font-size: 13px;
    letter-spacing: 0.3px;
}
#header.header-fashion .header-wrapper nav.main-nav > ul {
    margin-right: 0px;
}
#header.header-fashion .header-wrapper nav.main-nav > ul > li {
    padding-top:10%;  
/*removing padding 25px finally allowed other styles to do their magic */
    padding-left: 5px;
    padding-right: 5px;
}
#header.header-fashion .header-wrapper nav.main-nav > ul > li > a {
    color: #1ea965;
    display: flex;
    flex-wrap:wrap;
    padding-bottom: 7px;

}
}
#header.header-fashion .header-wrapper nav.main-nav > ul > li > a::before {
    content: '';
    width: 0px;
    height: 2px;
    background-color: #e6615b;
    position: absolute;
    top: 85%;
    left: 10px;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    -webkit-transition: all 0.25s ease;
    -moz-transition: all 0.25s ease;
    -ms-transition: all 0.25s ease;
    -o-transition: all 0.25s ease;
    transition: all 0.25s ease;
}
#header.header-fashion .header-wrapper nav.main-nav > ul > li.current-menu-item > a,
#header.header-fashion .header-wrapper nav.main-nav > ul > li:hover > a {
    color: #e6615b;
}
#header.header-fashion .header-wrapper nav.main-nav > ul > li.current-menu-item > a::before,
#header.header-fashion .header-wrapper nav.main-nav > ul > li:hover > a::before {
    width: 50%;
}
#header.header-fashion .header-wrapper nav.main-nav > ul > li.menu-item-has-children:hover::before {
    color: #000000;
}
#header.header-fashion .header-wrapper nav.main-nav > ul > li.menu-item-has-children:hover > a {
    color: #13ba6b;
}
#header.header-fashion .header-wrapper .right-content {
    width: 250px;
    position: relative;
    top: auto;
    -webkit-transform: none;
    -moz-transform: none;
    transform: none;
}
#header.header-fashion .header-wrapper .right-content .search-panel {
    display: inline-block;
    border: 0px;
    position: relative;
    padding: 0px;
    width: auto;
    height: 35px;
    line-height: 35px;
    width: 100%;
}
#header.header-fashion .header-wrapper .right-content .search-panel form {
  position: absolute;
  border-bottom: 1px solid rgba(255, 0, 0, 0.1);
  top: 0px;
  right: 50px;
  width: 0px;
  height: 34px;
  overflow: hidden;
  z-index: 10;
  -webkit-transition: all 0.25s ease;
  -moz-transition: all 0.25s ease;
  -ms-transition: all 0.25s ease;
  -o-transition: all 0.25s ease;
  transition: all 0.25s ease;
}

@media screen and (max-width: 1400px) {
  #header.header-fashion .header-wrapper nav.main-nav > ul > li {
    padding-left: 15px;
    padding-right: 15px;
  }
  #header.header-fashion .header-wrapper .site-branding {
    width: 200px;
  }
  #header.header-fashion .header-wrapper .right-content {
    width: 200px;
  }
}
@media screen and (max-width: 1030px) {
  #header.header-fashion .header-wrapper nav.main-nav {
    display: none;
  }
}
#header .news-search-menu a svg path, #header .news-search-menu a svg polygon {display:none;
} 
#footer {
    background-color: #1a1a1a !important;
    padding: 100px 0;}
/*increases social media font size*/
.widget .social-links a {font-size:32px;}

/*Post Picture Styles*/
.entry-media {
    position: relative;
    overflow: hidden;
    background-color: #ffffff;
}

/*FRONT PAGE STYLES*/
.instagram_frontpage{ height:264px; }
.youtube_frontpage{width:640px !important; float:right;}
.vc_gitem_row .vc_gitem-col {background-color: #ffffff;}
.vc_separator.vc_sep_color_grey .vc_sep_line {display:none;}

/*Posts*/
/*Post Search Results Styling*/
/* Card
====================================*/
.entry-media {
  position: relative;
  float:left;
  max-width:150px;
  overflow: hidden;
}
/*Remove the list of category excerpts*/
.category-block .post.first p {
    display:none;
}
/*Remove the list of category authors*/
.category-block .post.first .author {
    display:none;
}
/*Style the list of category date*/
.category-block .post.first .date {
    font-family:Arial, Helvetica, sans-serif;
    font-size:16px !important;
    text-transform: capitalize;
}
/*margin date into upper right hand corner*/
.version2 .category-block .post.first.text-bigger.hover-dark.blog-loop .meta {
  text-align:right;
  padding-right: 50px;
  margin-bottom: 40px;
  padding-top: 40px;
}
/*push post img photo inward off the edge*/
.post p:last-child,
.post h4:last-child,
.post img:last-child {
  margin-bottom: 0;
  margin-top:5%;
  margin-left:5%;
}
/*post tiles centered*/
.version2 .category-block .post.first.text-bigger.hover-dark.blog-loop h4 {
  line-height: 33px;
  font-size: 25px;
  text-align:center;
  font-family: 'SF-UI-Display' !important;
}

/*Clock icon for event posts*/
 ul { list-style-type: none; }   
#event_time ul li:before {
  content: '\f017';
  font-family: 'FontAwesome';
  float: left;
  margin-left: -1.5em;
  color: #0074D9;
}
/*Category name headings gradient*/ 
.version2 .entry-title-wrap .entry-big-text {
  background: linear-gradient(268deg, #29fc0f 20%, #c53615 100%);}
.title-block .entry-title-wrap .entry-big-text {
  color: #000;
  display: inline-block;
  white-space: nowrap;
  position: absolute;
  top: 0px;
  left: 0px;
/*Turning these on turns entry big text*/
 /* -webkit-background-clip: text;*/
  -webkit-text-fill-color: #ffffff;
}
/*category list stylings | button*/
.version2 .category-block .post.first.text-bigger.hover-dark.blog-loop .category-more {
  margin-right: 50px;
  margin-left: 50px;
  box-sizing: border-box;
  line-height: 0px !important;
  padding: 20px 40px !important;
  text-transform: uppercase;
  background-color: #010101 !important;
  color: #fff !important;
  letter-spacing: 1px !important;
  font-size: 12px !important;
  line-height: 12px;
  border: none !important;
  font-weight: 600 !important;
  transition: all 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1) !important;
  overflow: visible;
  vertical-align: middle;
  display: inline-block;
  text-align: center;
}

/* fb Events Posts*/
._2lqh {
    display: none !important;
}
#event_loc ul li:before {
  content: '\f276';
  font-family: 'FontAwesome';
  float: left;
  margin-left: -1.5em;
  color: #0074D9;
}
/*Open Positions*/
.two_column {
    column-count: 2;
    column-width:150px;
    column-gap: 5em;}

/*CD-Compilation Post Page Layout */
/*Album info track listing*/
#track_listing{
column-count: 2;
}

#the-cd ul {display:flex; flex-wrap:wrap;}
#the-cd ul li {padding:2% 2% 5% 5%;}

/*Rev Slider On mouse click*/
.start img{cursor:pointer !important}


.version2 .category-block .post.first.text-bigger.hover-dark.blog-loop .category-more{
background: #fff!important;
    color: #000!important;
    border: 2px solid #000!important;
    border-radius: 0px!important;
}
/*lineup2018*/
* {
    box-sizing: border-box;
}

.row {
    display: flex;
}

/* Create two equal columns that sits next to each other */
.column {
    flex: 50%;
    padding: 10px;
    }
.event-info ul  {
  list-style-type:none;
}
.artists_sounds ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  }
.artists_socials ul {
  font-size:2em;
  margin-left: -2em;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  }
.sched_vids ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  }
 #lineup2018{
    text-align:center;
    font-weight:500;
}
 ul.lcp_catlist {display:flex; flex-wrap:wrap;}
ul.lcp_catlist li {padding:1% .25% .5% 1%;}

#lineup2018 img{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width:75%;
    padding:1em;
}
  #lineup2018 ul#lcp_instance_0.lcp_catlist {font-size: 2.5em
}
.content_tags {display:none;}

/*Reformat Post Title Details*/
.single .content-area .post-title {text-align:center;}

.artists_socials{text-align:right;}

/*Open-Position Bullets*/
.position_responsibilities li, .position_qualifications li{list-style-type:disc}



