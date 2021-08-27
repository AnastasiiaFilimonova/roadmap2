const MovieLayout = ({ children }) => {
    return (
        <><meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <title>Memico - Cinema Bootstrap HTML5 Template</title>
            {/* Animate.css */}
            <link href="/html/animate.css/animate.css" rel="stylesheet" type="text/css" />
            {/* Font Awesome iconic font */}
            <link
                href="/html/fontawesome/css/fontawesome-all.css"
                rel="stylesheet"
                type="text/css"
            />
            {/* Magnific Popup */}
            <link
                href="/html/magnific-popup/magnific-popup.css"
                rel="stylesheet"
                type="text/css"
            />
            {/* Slick carousel */}
            <link href="/html/slick/slick.css" rel="stylesheet" type="text/css" />
            {/* Fonts */}
            <link
                href="https://fonts.googleapis.com/css?family=Oswald:300,400,500,700"
                rel="stylesheet"
                type="text/css"
            />
            <link
                href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
                rel="stylesheet"
                type="text/css"
            />
            {/* Theme styles */}
            <link href="/html/css/dot-icons.css" rel="stylesheet" type="text/css" />
            <link href="/html/css/theme.css" rel="stylesheet" type="text/css" />
            <header className="header header-horizontal header-view-pannel">
                <div className="container">
                    <nav className="navbar">
                        <a className="navbar-brand" href="/html/">
                            <span className="logo-element">
                                <span className="logo-tape">
                                    <span
                                        className="svg-content svg-fill-theme"
                                        data-svg="/html/images/svg/logo-part.svg"
                                    />
                                </span>
                                <span className="logo-text text-uppercase">
                                    <span>M</span>emico
                                </span>
                            </span>
                        </a>
                        <button className="navbar-toggler" type="button">
                            <span className="th-dots-active-close th-dots th-bars">
                                <span />
                                <span />
                                <span />
                            </span>
                        </button>
                        <div className="navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item nav-item-arrow-down nav-hover-show-sub">
                                    <a className="nav-link" href="#">
                                        Homepage
                                    </a>
                                    <div className="nav-arrow">
                                        <i className="fas fa-chevron-down" />
                                    </div>
                                    <ul className="collapse nav">
                                        <li className="nav-item">
                                            <a className="nav-link" href="homepage-1.html">
                                                Homepage 1
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="homepage-2.html">
                                                Homepage 2
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="homepage-3.html">
                                                Homepage 3
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item nav-item-arrow-down nav-hover-show-sub">
                                    <a className="nav-link" href="#" data-role="nav-toggler">
                                        Pages
                                    </a>
                                    <div className="nav-arrow">
                                        <i className="fas fa-chevron-down" />
                                    </div>
                                    <ul className="collapse nav">
                                        <li className="nav-item nav-item-arrow-down nav-hover-show-sub">
                                            <a className="nav-link" href="#" data-role="nav-toggler">
                                                Movies
                                            </a>
                                            <div className="nav-arrow">
                                                <i className="fas fa-chevron-down" />
                                            </div>
                                            <ul className="collapse nav">
                                                <li className="nav-item">
                                                    <a className="nav-link" href="movies-blocks.html">
                                                        Blocks - No Sidebar
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link"
                                                        href="movies-blocks-sidebar-right.html"
                                                    >
                                                        Blocks - Sidebar right
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="movies-posters.html">
                                                        Posters - No Sidebar
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link"
                                                        href="movies-posters-sidebar-right.html"
                                                    >
                                                        Posters - Sidebar right
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="movies-list.html">
                                                        List - No Sidebar
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="movie-info-sidebar-right.html">
                                                Movie info
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="gallery.html">
                                                Gallery
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="news-blocks-sidebar-right.html">
                                                News
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="article-sidebar-right.html">
                                                Article
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="about-us.html">
                                                About us
                                            </a>
                                        </li>
                                        <li className="nav-item nav-item-arrow-down nav-hover-show-sub">
                                            <a className="nav-link" href="#" data-role="nav-toggler">
                                                User pages
                                            </a>
                                            <div className="nav-arrow">
                                                <i className="fas fa-chevron-down" />
                                            </div>
                                            <ul className="collapse nav">
                                                <li className="nav-item">
                                                    <a className="nav-link" href="sign-in.html">
                                                        Sign in
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="sign-up.html">
                                                        Sign up
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item nav-item-arrow-down nav-hover-show-sub">
                                            <a className="nav-link" href="#" data-role="nav-toggler">
                                                Status pages
                                            </a>
                                            <div className="nav-arrow">
                                                <i className="fas fa-chevron-down" />
                                            </div>
                                            <ul className="collapse nav">
                                                <li className="nav-item">
                                                    <a className="nav-link" href="under-construction.html">
                                                        Under construction
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="coming-soon.html">
                                                        Coming soon
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="404-1.html">
                                                        404 - 1
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="404-2.html">
                                                        404 - 2
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="movies-blocks.html">
                                        Movies
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="contact-us.html">
                                        Contact us
                                    </a>
                                </li>
                            </ul>
                            <div className="navbar-extra">
                                <a className="btn-theme btn" href="#">
                                    <i className="fas fa-ticket-alt" />
                                    &nbsp;&nbsp;Buy Ticket
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            <section className="after-head d-flex section-text-white position-relative">
                <div
                    className="d-background"
                    data-image-src="http://via.placeholder.com/1920x1080"
                    data-parallax="scroll"
                />
                <div className="d-background bg-black-80" />
                <div className="top-block top-inner container">
                    <div className="top-block-content">
                        <h1 className="section-title">Movies list</h1>
                        <div className="page-breadcrumbs">
                            <a className="content-link" href="#">
                                Home
                            </a>
                            <span className="text-theme mx-2">
                                <i className="fas fa-chevron-right" />
                            </span>
                            <span>Movies</span>
                        </div>
                    </div>
                </div>
            </section>
            {children}
            <footer className="section-text-white footer footer-links bg-darken">
                <div className="footer-body container">
                    <div className="row">
                        <div className="col-sm-6 col-lg-3">
                            <a className="footer-logo" href="/html/">
                                <span className="logo-element">
                                    <span className="logo-tape">
                                        <span
                                            className="svg-content svg-fill-theme"
                                            data-svg="/html/images/svg/logo-part.svg"
                                        />
                                    </span>
                                    <span className="logo-text text-uppercase">
                                        <span>M</span>emico
                                    </span>
                                </span>
                            </a>
                            <div className="footer-content">
                                <p className="footer-text">
                                    Sidestate NSW 4132,
                                    <br />
                                    Australia
                                </p>
                                <p className="footer-text">Call us:&nbsp;&nbsp;(555) 555-0312</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <h5 className="footer-title text-uppercase">Movies</h5>
                            <ul className="list-unstyled list-wide footer-content">
                                <li>
                                    <a className="content-link" href="#">
                                        All Movies
                                    </a>
                                </li>
                                <li>
                                    <a className="content-link" href="#">
                                        Upcoming movies
                                    </a>
                                </li>
                                <li>
                                    <a className="content-link" href="#">
                                        Top 100 movies
                                    </a>
                                </li>
                                <li>
                                    <a className="content-link" href="#">
                                        Blockbasters
                                    </a>
                                </li>
                                <li>
                                    <a className="content-link" href="#">
                                        British movies
                                    </a>
                                </li>
                                <li>
                                    <a className="content-link" href="#">
                                        Summer movies collection
                                    </a>
                                </li>
                                <li>
                                    <a className="content-link" href="#">
                                        Movie trailers
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <h5 className="footer-title text-uppercase">Information</h5>
                            <ul className="list-unstyled list-wide footer-content">
                                <li>
                                    <a className="content-link" href="#">
                                        Schedule
                                    </a>
                                </li>
                                <li>
                                    <a className="content-link" href="#">
                                        News
                                    </a>
                                </li>
                                <li>
                                    <a className="content-link" href="#">
                                        Contact us
                                    </a>
                                </li>
                                <li>
                                    <a className="content-link" href="#">
                                        Community
                                    </a>
                                </li>
                                <li>
                                    <a className="content-link" href="#">
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a className="content-link" href="#">
                                        Events
                                    </a>
                                </li>
                                <li>
                                    <a className="content-link" href="#">
                                        Help center
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <h5 className="footer-title text-uppercase">Follow</h5>
                            <ul className="list-wide footer-content list-inline">
                                <li className="list-inline-item">
                                    <a className="content-link" href="#">
                                        <i className="fab fa-slack-hash" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="content-link" href="#">
                                        <i className="fab fa-twitter" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="content-link" href="#">
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="content-link" href="#">
                                        <i className="fab fa-dribbble" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="content-link" href="#">
                                        <i className="fab fa-google-plus-g" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="content-link" href="#">
                                        <i className="fab fa-instagram" />
                                    </a>
                                </li>
                            </ul>
                            <h5 className="footer-title text-uppercase">Subscribe</h5>
                            <div className="footer-content">
                                <p className="footer-text">
                                    Get latest movie news right away with our subscription
                                </p>
                                <form className="footer-form" autoComplete="off">
                                    <div className="input-group">
                                        <input
                                            className="form-control"
                                            name="email"
                                            type="email"
                                            placeholder="Your email"
                                        />
                                        <div className="input-group-append">
                                            <button className="btn btn-theme" type="submit">
                                                <i className="fas fa-angle-right" />
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copy">
                    <div className="container">
                        Copyright 2019 © AmigosThemes. All rights reserved.
                    </div>
                </div>
            </footer>
            {/* jQuery library */}
            {/* Bootstrap */}
            {/* Paralax.js */}
            {/* Waypoints */}
            {/* Slick carousel */}
            {/* Magnific Popup */}
            {/* Inits product scripts */}

        </>


    )
}

export default MovieLayout