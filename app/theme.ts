import { extendTheme } from "@chakra-ui/react";

    const mainCSS = {
  styles: {
        global: {
                "body": {
                    "font-family": "'Open Sans', sans-serif",
                    "color": "#272829"
                },
                "a": {
                    "color": "#622F75"
                },
                "a:hover": {
                    "color": "#067ded",
                    "textDecoration": "none"
                },
                "h1, h2, h3, h4, h5, h6": {
                    "font-family": "'Raleway', sans-serif"
                },
                ".brand": {
                    "color": "#622F75 !important"
                },
                ".mt-3": {
                    "margin-top": "30px"
                },
                ".back-to-top": {
                    "position": "fixed",
                    "display": "none",
                    "width": "40px",
                    "height": "40px",
                    "border-radius": "50px",
                    "right": "15px",
                    "bottom": "15px",
                    "background": "#622F75",
                    "color": "#fff",
                    "transition": "display 0.5s ease-in-out",
                    "z-index": "99999"
                },
                ".back-to-top i": {
                    "font-size": "24px",
                    "position": "absolute",
                    "top": "7px",
                    "left": "8px"
                },
                ".back-to-top:hover": {
                    "color": "#fff",
                    "background": "#738495",
                    "transition": "background 0.2s ease-in-out"
                },
                "#preloader": {
                    "position": "fixed",
                    "top": "0",
                    "left": "0",
                    "right": "0",
                    "bottom": "0",
                    "z-index": "9999",
                    "overflow": "hidden",
                    "background": "#fff"
                },
                "#preloader:before": {
                    "content": "'",
                    "position": "fixed",
                    "top": "calc(50% - 30px)",
                    "left": "calc(50% - 30px)",
                    "border": "6px solid #622F75",
                    "border-top-color": "#fff",
                    "border-bottom-color": "#fff",
                    "border-radius": "50%",
                    "width": "60px",
                    "height": "60px",
                    "-webkit-animation": "animate-preloader 1s linear infinite",
                    "animation": "animate-preloader 1s linear infinite"
                },
                "@-webkit-keyframes animate-preloader": {
                    "0%": {
                        "transform": "rotate(0deg)",
                    },
                    "100%": {
                        "transform": "rotate(360deg)",
                    }
                },
                "@keyframes animate-preloader": {
                    "0%": {
                        "transform": "rotate(0deg)",
                    },
                    "100%": {
                        "transform": "rotate(360deg)",
                    }
                },
                "@media screen and (max-width: 768px)": {
                    "[data-aos-delay]": {
                        "transition-delay": "0 !important",
                    }
                },
                "#header": {
                    "position": "fixed",
                    "top": "0",
                    "left": "0",
                    "bottom": "0",
                    "z-index": "9997",
                    "transition": "all 0.5s",
                    "padding": "15px",
                    "overflow-y": "auto"
                },
                "@media (max-width: 992px)": {
                    "#header": {
                        "width": "300px",
                        "background": "#fff",
                        "border-right": "1px solid #e6e9ec",
                        "left": "-300px",
                    }
                },
                "@media (min-width: 992px)": {
                    "#main": {
                        "margin-left": "100px",
                    }
                },
                ".nav-menu *": {
                    "margin": "0",
                    "padding": "0",
                    "list-style": "none"
                },
                ".nav-menu > ul > li": {
                    "position": "relative",
                    "white-space": "nowrap"
                },
                ".nav-menu a": {
                    "display": "flex",
                    "align-items": "center",
                    "color": "#45505b",
                    "padding": "10px 18px",
                    "margin-bottom": "8px",
                    "transition": "0.3s",
                    "font-size": "15px",
                    "border-radius": "50px",
                    "background": "#f2f3f5",
                    "height": "56px",
                    "width": "100%",
                    "overflow": "hidden",
                    "transition": "0.3s"
                },
                ".nav-menu a i": {
                    "font-size": "20px"
                },
                ".nav-menu a span": {
                    "padding": "0 5px 0 7px",
                    "color": "#45505b"
                },
                "@media (min-width: 992px)": {
                    ".nav-menu a": {
                        "width": "56px"
                    },
                    ".nav-menu a span": {
                        "display": "none",
                        "color": "#fff"
                    }
                },
                ".nav-menu a": "hover",
                ".nav-menu .active > a ,.nav-menu li:hover > a": {
                    "color": "#fff",
                    "background": "#622F75"
                },
                ".nav-menu a": "hover",
                "span, .nav-menu .active > a span, .nav-menu li:hover > a span": {
                    "color": "#fff"
                },
                ".nav-menu li:hover > a": {
                    "width": "100%",
                    "color": "#fff"
                },
                "span, .nav-menu li:hover > a span": {
                    "display": "block"
                },
                ".mobile-nav-toggle": {
                    "position": "fixed",
                    "right": "15px",
                    "top": "15px",
                    "z-index": "9998",
                    "border": "0",
                    "background": "none",
                    "font-size": "24px",
                    "transition": "all 0.4s",
                    "outline": "none !important",
                    "line-height": "1",
                    "cursor": "pointer",
                    "text-align": "right"
                },
                ".mobile-nav-toggle i": {
                    "color": "#45505b"
                },
                ".mobile-nav-active": {
                    "overflow": "hidden"
                },
                ".mobile-nav-active #header": {
                    "left": "0"
                },
                ".mobile-nav-active .mobile-nav-toggle i": {
                    "color": "#622F75"
                },
                "#hero": {
                    "width": "100%",
                    "height": "100vh",
                    "background": "url('../img/coolkiel1.jpg') top right no-repeat",
                    "background-size": "cover",
                    "position": "relative"
                },
                "@media (min-width: 992px)": {
                    "#hero": {
                        "padding-left": "160px",
                    }
                },
                "#hero:before": {
                    "content": "'",
                    "background": "rgba(255, 255, 255, 0.8)",
                    "position": "absolute",
                    "bottom": "0",
                    "top": "0",
                    "left": "0",
                    "right": "0"
                },
                "#hero h1": {
                    "margin": "0",
                    "font-size": "64px",
                    "font-weight": "700",
                    "line-height": "56px",
                    "color": "#45505b"
                },
                "#hero p": {
                    "color": "#45505b",
                    "margin": "15px 0 0 0",
                    "font-size": "26px",
                    "font-family": "'Poppins', sans-serif"
                },
                "#hero p span": {
                    "color": "#622F75",
                    "letter-spacing": "1px"
                },
                "#hero .social-links": {
                    "margin-top": "30px"
                },
                "#hero .social-links a": {
                    "font-size": "24px",
                    "display": "inline-block",
                    "color": "#45505b",
                    "line-height": "1",
                    "margin-right": "20px",
                    "transition": "0.3s"
                },
                "#hero .social-links a:hover": {
                    "color": "#622F75"
                },
                "@media (max-width: 992px)": {
                    "#hero": {
                        "text-align": "center",
                    },
                    "#hero h1": {
                        "font-size": "32px",
                        "line-height": "36px",
                    },
                    "#hero p": {
                        "margin-top": "10px",
                        "font-size": "20px",
                        "line-height": "24px",
                    }
                },
                "section": {
                    "padding": "60px 0",
                    "overflow": "hidden"
                },
                ".section-title": {
                    "text-align": "center",
                    "padding-bottom": "30px"
                },
                ".section-title h2": {
                    "font-size": "32px",
                    "font-weight": "bold",
                    "text-transform": "uppercase",
                    "margin-bottom": "20px",
                    "padding-bottom": "20px",
                    "position": "relative",
                    "color": "#45505b"
                },
                ".section-title h2::before": {
                    "content": "''",
                    "position": "absolute",
                    "display": "block",
                    "width": "120px",
                    "height": "1px",
                    "background": "#ddd",
                    "bottom": "1px",
                    "left": "calc(50% - 60px)"
                },
                ".section-title h2::after": {
                    "content": "''",
                    "position": "absolute",
                    "display": "block",
                    "width": "40px",
                    "height": "3px",
                    "background": "#622F75",
                    "bottom": "0",
                    "left": "calc(50% - 20px)"
                },
                ".section-title p": {
                    "margin-bottom": "0"
                },
                ".about .content h3": {
                    "font-weight": "700",
                    "font-size": "26px",
                    "color": "#728394"
                },
                ".about .content ul": {
                    "list-style": "none",
                    "padding": "0"
                },
                ".about .content ul li": {
                    "padding-bottom": "10px"
                },
                ".about .content ul i": {
                    "font-size": "20px",
                    "padding-right": "2px",
                    "color": "#622F75"
                },
                ".about .content p:last-child": {
                    "margin-bottom": "0"
                },
                ".facts .count-box": {
                    "padding": "30px 30px 25px 30px",
                    "margin-top": "30px",
                    "width": "100%",
                    "position": "relative",
                    "text-align": "center",
                    "background": "#fff"
                },
                ".facts .count-box i": {
                    "position": "absolute",
                    "top": "-25px",
                    "left": "50%",
                    "transform": "translateX(-50%)",
                    "font-size": "24px",
                    "background": "#622F75",
                    "padding": "12px",
                    "color": "#fff",
                    "border-radius": "50px"
                },
                ".facts .count-box span": {
                    "font-size": "36px",
                    "display": "block",
                    "font-weight": "600",
                    "color": "#011426"
                },
                ".facts .count-box p": {
                    "padding": "0",
                    "margin": "0",
                    "font-family": "'Raleway', sans-serif",
                    "font-size": "14px"
                },
                ".skills .progress": {
                    "height": "50px",
                    "display": "block",
                    "background": "none"
                },
                ".skills .progress .skill": {
                    "padding": "10px 0",
                    "margin": "0 0 6px 0",
                    "text-transform": "uppercase",
                    "display": "block",
                    "font-weight": "600",
                    "font-family": "'Poppins', sans-serif",
                    "color": "#45505b"
                },
                ".skills .progress .skill .val": {
                    "float": "right",
                    "font-style": "normal"
                },
                ".skills .progress-bar-wrap": {
                    "background": "#f2f3f5"
                },
                ".skills .progress-bar": {
                    "width": "1px",
                    "height": "10px",
                    "transition": ".9s",
                    "background-color": "#622F75"
                },
                ".resume .resume-title": {
                    "font-size": "26px",
                    "font-weight": "700",
                    "margin-top": "20px",
                    "margin-bottom": "20px",
                    "color": "#45505b"
                },
                ".resume .resume-item": {
                    "padding": "0 0 20px 20px",
                    "margin-top": "-2px",
                    "border-left": "2px solid #622F75",
                    "position": "relative"
                },
                ".resume .resume-item h4": {
                    "line-height": "18px",
                    "font-size": "18px",
                    "font-weight": "600",
                    "text-transform": "uppercase",
                    "font-family": "'Poppins', sans-serif",
                    "color": "#622F75",
                    "margin-bottom": "10px"
                },
                ".resume .resume-item h5": {
                    "font-size": "16px",
                    "background": "#f7f8f9",
                    "padding": "5px 15px",
                    "display": "inline-block",
                    "font-weight": "600",
                    "margin-bottom": "10px"
                },
                ".resume .resume-item ul": {
                    "padding-left": "20px"
                },
                ".resume .resume-item ul li": {
                    "padding-bottom": "10px"
                },
                ".resume .resume-item:last-child": {
                    "padding-bottom": "0"
                },
                ".resume .resume-item::before": {
                    "content": "'",
                    "position": "absolute",
                    "width": "16px",
                    "height": "16px",
                    "border-radius": "50px",
                    "left": "-9px",
                    "top": "0",
                    "background": "#fff",
                    "border": "2px solid #622F75"
                },
                ".portfolio .portfolio-item": {
                    "margin-bottom": "30px"
                },
                ".portfolio #portfolio-flters": {
                    "padding": "0",
                    "margin": "0 auto 25px auto",
                    "list-style": "none",
                    "text-align": "center",
                    "background": "#fff",
                    "border-radius": "50px",
                    "padding": "2px 15px"
                },
                ".portfolio #portfolio-flters li": {
                    "cursor": "pointer",
                    "display": "inline-block",
                    "padding": "10px 15px",
                    "font-size": "14px",
                    "font-weight": "600",
                    "line-height": "1",
                    "text-transform": "uppercase",
                    "color": "#272829",
                    "margin-bottom": "5px",
                    "transition": "all 0.3s ease-in-out"
                },
                ".portfolio #portfolio-flters li": "hover",
                ".portfolio #portfolio-flters li.filter-active": {
                    "color": "#622F75"
                },
                ".portfolio #portfolio-flters li:last-child": {
                    "margin-right": "0"
                },
                ".portfolio .portfolio-wrap": {
                    "transition": "0.3s",
                    "position": "relative",
                    "overflow": "hidden",
                    "z-index": "1",
                    "background": "rgba(69, 80, 91, 0.8)"
                },
                ".portfolio .portfolio-wrap::before": {
                    "content": "'",
                    "background": "rgba(255, 255, 255, 0.7)",
                    "position": "absolute",
                    "left": "30px",
                    "right": "30px",
                    "top": "30px",
                    "bottom": "30px",
                    "transition": "all ease-in-out 0.3s",
                    "z-index": "2",
                    "opacity": "0"
                },
                ".portfolio .portfolio-wrap .portfolio-info": {
                    "opacity": "0",
                    "position": "absolute",
                    "top": "0",
                    "left": "0",
                    "right": "0",
                    "bottom": "0",
                    "text-align": "center",
                    "z-index": "3",
                    "transition": "all ease-in-out 0.3s",
                    "display": "flex",
                    "flex-direction": "column",
                    "justify-content": "center",
                    "align-items": "center"
                },
                ".portfolio .portfolio-wrap .portfolio-info::before": {
                    "display": "block",
                    "content": "'",
                    "width": "48px",
                    "height": "48px",
                    "position": "absolute",
                    "top": "35px",
                    "left": "35px",
                    "border-top": "3px solid #d7dce1",
                    "border-left": "3px solid #d7dce1",
                    "transition": "all 0.5s ease 0s",
                    "z-index": "9994"
                },
                ".portfolio .portfolio-wrap .portfolio-info::after": {
                    "display": "block",
                    "content": "'",
                    "width": "48px",
                    "height": "48px",
                    "position": "absolute",
                    "bottom": "35px",
                    "right": "35px",
                    "border-bottom": "3px solid #d7dce1",
                    "border-right": "3px solid #d7dce1",
                    "transition": "all 0.5s ease 0s",
                    "z-index": "9994"
                },
                ".portfolio .portfolio-wrap .portfolio-info h4": {
                    "font-size": "20px",
                    "color": "#45505b",
                    "font-weight": "600"
                },
                ".portfolio .portfolio-wrap .portfolio-info p": {
                    "color": "#45505b",
                    "font-size": "14px",
                    "text-transform": "uppercase",
                    "padding": "0",
                    "margin": "0"
                },
                ".portfolio .portfolio-wrap .portfolio-links": {
                    "text-align": "center",
                    "z-index": "4"
                },
                ".portfolio .portfolio-wrap .portfolio-links a": {
                    "color": "#45505b",
                    "margin": "0 2px",
                    "font-size": "28px",
                    "display": "inline-block",
                    "transition": "0.3s"
                },
                ".portfolio .portfolio-wrap .portfolio-links audio": {
                    "color": "#45505b",
                    "margin": "0 2px",
                    "font-size": "28px",
                    "display": "inline-block",
                    "transition": "0.3s"
                },
                ".portfolio .portfolio-wrap .portfolio-links a:hover": {
                    "color": "#148af9"
                },
                ".portfolio .portfolio-wrap:hover::before": {
                    "top": "0",
                    "left": "0",
                    "right": "0",
                    "bottom": "0",
                    "opacity": "1"
                },
                ".portfolio .portfolio-wrap:hover .portfolio-info": {
                    "opacity": "1"
                },
                ".portfolio .portfolio-wrap:hover .portfolio-info::before": {
                    "top": "15px",
                    "left": "15px"
                },
                ".portfolio .portfolio-wrap:hover .portfolio-info::after": {
                    "bottom": "15px",
                    "right": "15px"
                },
                ".services .icon-box": {
                    "text-align": "center",
                    "padding": "70px 20px 80px 20px",
                    "transition": "all ease-in-out 0.3s",
                    "background": "#fff",
                    "box-shadow": "0px 5px 90px 0px rgba(110, 123, 131, 0.05)"
                },
                ".services .icon-box .icon": {
                    "margin": "0 auto",
                    "width": "100px",
                    "height": "100px",
                    "display": "flex",
                    "align-items": "center",
                    "justify-content": "center",
                    "transition": "ease-in-out 0.3s",
                    "position": "relative"
                },
                ".services .icon-box .icon i": {
                    "font-size": "36px",
                    "transition": "0.5s",
                    "position": "relative"
                },
                ".services .icon-box .icon svg": {
                    "position": "absolute",
                    "top": "0",
                    "left": "0"
                },
                ".services .icon-box .icon svg path": {
                    "transition": "0.5s",
                    "fill": "#f5f5f5"
                },
                ".services .icon-box h4": {
                    "font-weight": "600",
                    "margin": "10px 0 15px 0",
                    "font-size": "22px"
                },
                ".services .icon-box h4 a": {
                    "color": "#45505b",
                    "transition": "ease-in-out 0.3s"
                },
                ".services .icon-box p": {
                    "line-height": "24px",
                    "font-size": "14px",
                    "margin-bottom": "0"
                },
                ".services .icon-box:hover": {
                    "border-color": "#fff",
                    "box-shadow": "0px 0 35px 0 rgba(0, 0, 0, 0.08)"
                },
                ".services .iconbox-blue i": {
                    "color": "#47aeff"
                },
                ".services .iconbox-blue:hover .icon i": {
                    "color": "#fff"
                },
                ".services .iconbox-blue:hover .icon path": {
                    "fill": "#47aeff"
                },
                ".services .iconbox-purple i": {
                    "color": "#622f75"
                },
                ".services .iconbox-purple:hover .icon i": {
                    "color": "#fff"
                },
                ".services .iconbox-purple:hover .icon path": {
                    "fill": "#622f75"
                },
                ".services .iconbox-orange i": {
                    "color": "#ffa76e"
                },
                ".services .iconbox-orange:hover .icon i": {
                    "color": "#fff"
                },
                ".services .iconbox-orange:hover .icon path": {
                    "fill": "#ffa76e"
                },
                ".services .iconbox-pink i": {
                    "color": "#e80368"
                },
                ".services .iconbox-pink:hover .icon i": {
                    "color": "#fff"
                },
                ".services .iconbox-pink:hover .icon path": {
                    "fill": "#e80368"
                },
                ".services .iconbox-yellow i": {
                    "color": "#ffbb2c"
                },
                ".services .iconbox-yellow:hover .icon i": {
                    "color": "#fff"
                },
                ".services .iconbox-yellow:hover .icon path": {
                    "fill": "#ffbb2c"
                },
                ".services .iconbox-red i": {
                    "color": "#ff5828"
                },
                ".services .iconbox-red:hover .icon i": {
                    "color": "#fff"
                },
                ".services .iconbox-red:hover .icon path": {
                    "fill": "#ff5828"
                },
                ".services .iconbox-teal i": {
                    "color": "#11dbcf"
                },
                ".services .iconbox-teal:hover .icon i": {
                    "color": "#fff"
                },
                ".services .iconbox-teal:hover .icon path": {
                    "fill": "#11dbcf"
                },
                ".middleme": {
                    "text-align": "center",
                    "margin": "10px auto"
                },
                ".testimonials .section-header": {
                    "margin-bottom": "40px"
                },
                ".testimonials .testimonial-item": {
                    "text-align": "center"
                },
                ".testimonials .testimonial-item .testimonial-img": {
                    "width": "120px",
                    "border-radius": "50%",
                    "border": "4px solid #fff",
                    "margin": "0 auto"
                },
                ".testimonials .testimonial-item h3": {
                    "font-size": "20px",
                    "font-weight": "bold",
                    "margin": "10px 0 5px 0",
                    "color": "#111"
                },
                ".testimonials .testimonial-item h4": {
                    "font-size": "14px",
                    "color": "#999",
                    "margin": "0 0 15px 0"
                },
                ".testimonials .testimonial-item .quote-icon-left, .testimonials .testimonial-item .quote-icon-right": {
                    "color": "#90c8fc",
                    "font-size": "26px"
                },
                ".testimonials .testimonial-item .quote-icon-left": {
                    "display": "inline-block",
                    "left": "-5px",
                    "position": "relative"
                },
                ".testimonials .testimonial-item .quote-icon-right": {
                    "display": "inline-block",
                    "right": "-5px",
                    "position": "relative",
                    "top": "10px"
                },
                ".testimonials .testimonial-item p": {
                    "font-style": "italic",
                    "margin": "0 auto 15px auto"
                },
                ".testimonials .owl-nav, .testimonials .owl-dots": {
                    "margin-top": "5px",
                    "text-align": "center"
                },
                ".testimonials .owl-dot": {
                    "display": "inline-block",
                    "margin": "0 5px",
                    "width": "12px",
                    "height": "12px",
                    "border-radius": "50%",
                    "background-color": "#ddd !important"
                },
                ".testimonials .owl-dot.active": {
                    "background-color": "#622F75 !important"
                },
                "@media (min-width: 992px)": {
                    ".testimonials .testimonial-item p": {
                        "width": "80%",
                    }
                },
                ".contact .info": {
                    "width": "100%",
                    "background": "#fff"
                },
                ".contact .info i": {
                    "font-size": "20px",
                    "color": "#622F75",
                    "float": "left",
                    "width": "44px",
                    "height": "44px",
                    "background": "#eef7ff",
                    "display": "flex",
                    "justify-content": "center",
                    "align-items": "center",
                    "border-radius": "50px",
                    "transition": "all 0.3s ease-in-out"
                },
                ".contact .info h4": {
                    "padding": "0 0 0 60px",
                    "font-size": "22px",
                    "font-weight": "600",
                    "margin-bottom": "5px",
                    "color": "#45505b"
                },
                ".contact .info p": {
                    "padding": "0 0 0 60px",
                    "margin-bottom": "0",
                    "font-size": "14px",
                    "color": "#728394"
                },
                ".contact .info .email, .contact .info .phone": {
                    "margin-top": "40px"
                },
                ".contact .info .email:hover i, .contact .info .address": "hover",
                "i, .contact .info .phone:hover i": {
                    "background": "#622F75",
                    "color": "#fff"
                },
                ".contact .php-email-form": {
                    "width": "100%",
                    "background": "#fff"
                },
                ".contact .php-email-form .form-group": {
                    "padding-bottom": "8px"
                },
                ".contact .php-email-form .validate": {
                    "display": "none",
                    "color": "red",
                    "margin": "0 0 15px 0",
                    "font-weight": "400",
                    "font-size": "13px"
                },
                ".contact .php-email-form .error-message": {
                    "display": "none",
                    "color": "#fff",
                    "background": "#ed3c0d",
                    "text-align": "left",
                    "padding": "15px",
                    "font-weight": "600"
                },
                ".contact .php-email-form .error-message br + br": {
                    "margin-top": "25px"
                },
                ".contact .php-email-form .sent-message": {
                    "display": "none",
                    "color": "#fff",
                    "background": "#18d26e",
                    "text-align": "center",
                    "padding": "15px",
                    "font-weight": "600"
                },
                ".contact .php-email-form .loading": {
                    "display": "none",
                    "background": "#fff",
                    "text-align": "center",
                    "padding": "15px"
                },
                ".contact .php-email-form .loading:before": {
                    "content": "'",
                    "display": "inline-block",
                    "border-radius": "50%",
                    "width": "24px",
                    "height": "24px",
                    "margin": "0 10px -6px 0",
                    "border": "3px solid #18d26e",
                    "border-top-color": "#eee",
                    "-webkit-animation": "animate-loading 1s linear infinite",
                    "animation": "animate-loading 1s linear infinite"
                },
                ".contact .php-email-form input, .contact .php-email-form textarea": {
                    "border-radius": "4px",
                    "box-shadow": "none",
                    "font-size": "14px"
                },
                ".contact .php-email-form input": {
                    "height": "44px"
                },
                ".contact .php-email-form textarea": {
                    "padding": "10px 12px"
                },
                ".contact .php-email-form button[type="submit"]": {
                    "background": "#622F75",
                    "border": "0",
                    "padding": "10px 35px",
                    "color": "#fff",
                    "transition": "0.4s",
                    "border-radius": "50px"
                },
                ".contact .php-email-form button[type="submit"]:hover": {
                    "background": "#738495"
                },
                "@-webkit-keyframes animate-loading": {
                    "0%": {
                        "transform": "rotate(0deg)",
                    },
                    "100%": {
                        "transform": "rotate(360deg)",
                    }
                },
                "@keyframes animate-loading": {
                    "0%": {
                        "transform": "rotate(0deg)",
                    },
                    "100%": {
                        "transform": "rotate(360deg)",
                    }
                },
                ".portfolio-details": {
                    "padding": "40px 0"
                },
                ".portfolio-details .portfolio-title": {
                    "font-size": "26px",
                    "font-weight": "700",
                    "margin-bottom": "20px"
                },
                ".portfolio-details .portfolio-details-carousel .owl-nav, .portfolio-details .portfolio-details-carousel .owl-dots": {
                    "margin-top": "5px",
                    "text-align": "center"
                },
                ".portfolio-details .portfolio-details-carousel .owl-dot": {
                    "display": "inline-block",
                    "margin": "0 5px",
                    "width": "12px",
                    "height": "12px",
                    "border-radius": "50%",
                    "background-color": "#ddd !important"
                },
                ".portfolio-details .portfolio-details-carousel .owl-dot.active": {
                    "background-color": "#622F75 !important"
                },
                ".portfolio-details .portfolio-info": {
                    "padding-top": "45px"
                },
                ".portfolio-details .portfolio-info h3": {
                    "font-size": "22px",
                    "font-weight": "400",
                    "margin-bottom": "20px"
                },
                ".portfolio-details .portfolio-info ul": {
                    "list-style": "none",
                    "padding": "0",
                    "font-size": "15px"
                },
                ".portfolio-details .portfolio-info ul li + li": {
                    "margin-top": "10px"
                },
                ".portfolio-details .portfolio-info p": {
                    "font-size": "15px",
                    "padding": "15px 0 0 0"
                },
                "@media (max-width: 992px)": {
                    ".portfolio-details .portfolio-info": {
                        "padding-top": "20px",
                    }
                },
                "#footer": {
                    "background": "#f7f8f9",
                    "color": "#45505b",
                    "font-size": "14px",
                    "text-align": "center",
                    "padding": "30px 0"
                },
                "#footer h3": {
                    "font-size": "36px",
                    "font-weight": "700",
                    "position": "relative",
                    "font-family": "'Poppins', sans-serif",
                    "padding": "0",
                    "margin": "0 0 15px 0"
                },
                "#footer p": {
                    "font-size": "15",
                    "font-style": "italic",
                    "padding": "0",
                    "margin": "0 0 40px 0"
                },
                "#footer .social-links": {
                    "margin": "0 0 40px 0"
                },
                "#footer .social-links a": {
                    "font-size": "18px",
                    "display": "inline-block",
                    "background": "#622F75",
                    "color": "#fff",
                    "line-height": "1",
                    "padding": "8px 0",
                    "margin-right": "4px",
                    "border-radius": "50%",
                    "text-align": "center",
                    "width": "36px",
                    "height": "36px",
                    "transition": "0.3s"
                },
                "#footer .social-links a:hover": {
                    "background": "#738495",
                    "color": "#fff",
                    "textDecoration": "none"
                },
                "#footer .copyright": {
                    "margin": "0 0 5px 0"
                },
                "#footer .credits": {
                    "font-size": "13px"
                }
    },
  },
};

const customTheme = extendTheme(mainCSS)

export default customTheme
