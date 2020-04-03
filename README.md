# How to activation jQuery Magnific Popup

**Live Demo**
[repositories.presstechit-institute.com](http://repositories.presstechit-institute.com/HTML-Quick-Started-Menu-Support-Sub-Menu-With-Preloader-Include/)

## Initialize Magnific Popup Plugin

##### Preloader Markup

<pre><code>
    &lt;!-- PRELOADER --&gt;
	&lt;div class="loader-popover" id="loader"&gt;
		&lt;div class="loader"&gt;
			&lt;div class="loader-container"&gt;
			&lt;div class="box1"&gt;&lt;/div&gt;
			&lt;div class="box2"&gt;&lt;/div&gt;
			&lt;div class="box3"&gt;&lt;/div&gt;
			&lt;div class="box4"&gt;&lt;/div&gt;
		&lt;/div&gt;
		&lt;/div&gt;
	&lt;/div&gt;
	&lt;!-- PLRELOADER END --&gt;
</code></pre>

##### PRELOADER / MOBILE MENU active.js

<pre><code>
        /**!-------------------------------------------
        01. PRELOADER
    --------------------------------------------**/
    var $mainwindow = $(window);
    $mainwindow.on('load', function() {

        $("#loader").fadeOut(1000);
    });
    
    /*-------------------------------
    MOBILE MENU
    ---------------------------------*/
    $('.mobile-menu nav').meanmenu({
        meanScreenWidth: "981",
        meanMenuContainer: ".mobile-menu"
    });
</code></pre>
    

### Ask Any Question or if you need help contact me 24/7 we are ready support team.

[Facebook:](https://www.facebook.com/PMPROSANTA0)<br />
[Web:](http://presstechit-institute.com/)\
[Personal:](http://pm-prosanto.themefusions.com/)\
[Email Me:](mailto:prosantomazumder@gmail.com)\
[Linkedin:](https://www.linkedin.com/in/prosantomazumder/)\
[Twitter:](https://twitter.com/prosantomazumd1)\
[Instagram:](https://www.instagram.com/prosantomazumder/)\
[Codepen:](https://codepen.io/ProsantaMazumder)


### Changelog
- [x] Version 1.0.1

##### Cradit
[Magnific Popup](https://dimsemenov.com/plugins/magnific-popup/)



