import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <div id="header">
{/* <!--Render Header--> */}
<div class="topStrip">
<div class="wrapInner">

<ul class="rightLinks">
<li>
<a class="skipContent" href="#container" accesskey="s" title="Skip to Main Content">Skip to Main Content</a>
</li>
<li>
<a href="/cms/screen-reader-access" title="Screen Reader Access">Screen Reader Access</a>
</li>
<li class="fontResize">
<div id="accessControl" class="textResizeWrapper cf">
<input type="button" name="font_normal" value="A" id="font_normal" title="Normal Font Size" class="fontScaler normal font-normal" />
<input type="button" name="font_large" value="A+" id="font_large" title="Increase Font Size" class="fontScaler large font-large" />
<input type="button" name="normal" value="Standard View" id="normal" title="Standard View" class="contrastChanger normal current" />
<input type="button" name="wob" value="High Contrast View" id="wob" title="High Contrast View" class="contrastChanger wob" />
</div>
</li>
<div class="language">
<div class="languageDrp">
<form action="/home/locale" id="locale_form" name="locale_form" novalidate="novalidate" autocomplete="off" method="post">                                <label for="lang" tabindex="1" class="displayNone">Language</label>

<div class="customSelectBox">
<select id="lang" name="lang">
<option selected="selected" value="en">English</option>
<option value="hi">हिन्दी</option>
</select>                </div>

</form>
</div>
</div>
</ul>
</div>
</div>
<div class="headerInner">

<div class="wrapInner">
<h1 id="logo">
<a href="/"><img src="employee_912316.png" title=".." alt=".."  /></a> 
swavlamban rojgar
</h1>    
<div class="swavlambanSeal">
<img src="swavlamban-logo.png" alt="Swavlamban" title="Swavlamban" width="106" height="96" />
</div>
<div class="headRight">
<ul class="headLink">       
    <li>
<Link class="loginLink " to="/login" title="Login">Login</Link>
{/* <!--<a class="loginLink fancybox" href="#loginPop" title="Login">Login</a>--> */}
</li>
<li>
<a class="loginLink " href="/admin" title="Department User Login">Department User Login</a>
</li>
<li>
<a class="regLink" href="/register" title="Register">Register</a>
</li>

</ul>

<div class="headSearch">
{/* <!--<a title="Search" class="searchIcon">Search</a>--> */}
<div class="searchBlock">

<div class="searchBoxRow cf">
<form method="post" action="/search">
                        <label for="sbmsearch" class="displayNone">Search</label>
<input accesskey="f" type="text" maxlength="128" placeholder="Search Keywords" name="search" value=""  title="Enter Keywords" autocomplete="off" id="sbmsearch"/>

<button class="searchBtn"  type="submit" title="Minimum 3 character required" name="submit"> </button>
</form>

</div>
</div>
</div>
</div>
</div>
</div>

{/* <!--Render Navigation bar--> */}
<div id="mainNav" class="mainNavigation">
<div class="wrapInner">
<div class="menuPart">
<ul id="nav">
      
<li class="active"><a accesskey="h" href="/">Home</a></li>
                                                <li class=" ">
                    <a class=" " href="/about">About Us</a>
                                            <ul>

                                                        <li>
                                    <a href="/about_one">About Department of Empowerment of Persons with Disabilities</a>
                                </li>
                                                </ul>
                                </li>


                <li class=""><a href="/cms/card-benefits">Card Benefits</a></li>
<li class=""><a href="/cms/about-persons-with-disability">About Persons with Disabilities</a></li>

{/* <!--<li class="">--> */}
<li class="">
<a href="/gallery/index">Media Gallery</a>
<ul>
<li><a href="/cms/success-stories">Success Stories</a></li>
<li><a href="/gallery/index">Photo Gallery</a></li>
<li><a href="/gallery/video">Video Gallery</a></li>
<li><a href="/press-release">Press Release</a></li>
<li><a href="/circulars">Circulars</a></li>
</ul>
</li>
<li class="">
<a href="/suggestion">Suggestions</a>
</li>
<li class="">
<a href="/faq">FAQs</a>
</li>

<li class=""><a href="/contact">Contact Us</a></li>
</ul>
</div>
</div>

<div class="home_marquee">
<div class="marqueeScrolling_top cf">
<ul id="js_Notification" class="marquee_top cf bulletText">
<li>
<strong>As per RPWD Act, 2016, UDID card can be issued by home district hospital as well as the hospital where the PWD is taking medical treatment.</strong>
</li>
</ul>
</div>
</div>

</div>
                          </div>
    </div>
  )
}
