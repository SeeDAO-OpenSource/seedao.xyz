(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c71a842"],{"5ce9":function(t,s,i){"use strict";var a=function(){var t=this,s=t._self._c;return s("div",{staticClass:"bg-light border p-3 pt-2 pb-2",staticStyle:{left:"0px"},style:t.isVisible?"left: 0px":"left: -189px",attrs:{id:"style-switcher"}},[s("h6",{staticClass:"title text-center"},[t._v("Select Your Color")]),s("ul",{staticClass:"pattern text-center mb-2"},[s("li",{staticClass:"list-inline-item"},[s("a",{staticClass:"default",attrs:{href:"javascript: void(0);"},on:{click:function(s){return t.setTheme("default")}}})]),s("li",{staticClass:"list-inline-item"},[s("a",{staticClass:"green",attrs:{href:"javascript: void(0);"},on:{click:function(s){return t.setTheme("green")}}})]),s("li",{staticClass:"list-inline-item"},[s("a",{staticClass:"purple",attrs:{href:"javascript: void(0);"},on:{click:function(s){return t.setTheme("purple")}}})]),s("li",{staticClass:"list-inline-item"},[s("a",{staticClass:"red",attrs:{href:"javascript: void(0);"},on:{click:function(s){return t.setTheme("red")}}})]),s("li",{staticClass:"list-inline-item"},[s("a",{staticClass:"skyblue",attrs:{href:"javascript: void(0);"},on:{click:function(s){return t.setTheme("skyblue")}}})]),s("li",{staticClass:"list-inline-item"},[s("a",{staticClass:"skobleoff",attrs:{href:"javascript: void(0);"},on:{click:function(s){return t.setTheme("skobleoff")}}})]),s("li",{staticClass:"list-inline-item"},[s("a",{staticClass:"cyan",attrs:{href:"javascript: void(0);"},on:{click:function(s){return t.setTheme("cyan")}}})]),s("li",{staticClass:"list-inline-item"},[s("a",{staticClass:"slateblue",attrs:{href:"javascript: void(0);"},on:{click:function(s){return t.setTheme("slateblue")}}})]),s("li",{staticClass:"list-inline-item"},[s("a",{staticClass:"yellow",attrs:{href:"javascript: void(0);"},on:{click:function(s){return t.setTheme("yellow")}}})])]),s("h6",{staticClass:"title text-center pt-3 mb-0 border-top"},[t._v("Theme Option")]),s("div",{staticClass:"text-center"},[s("a",{staticClass:"btn btn-sm w-100 btn-primary rtl-version t-rtl-light mt-2",attrs:{href:"javascript: void(0);"},on:{click:function(s){return t.setRtl()}}},[t._v("RTL")]),s("a",{staticClass:"btn btn-sm w-100 btn-primary ltr-version t-ltr-light mt-2",attrs:{href:"javascript: void(0);"},on:{click:function(s){return t.setLtr()}}},[t._v("LTR")]),s("a",{staticClass:"btn btn-sm w-100 btn-primary dark-rtl-version t-rtl-dark mt-2",attrs:{href:"javascript: void(0);"},on:{click:function(s){return t.darkRtl()}}},[t._v("RTL")]),s("a",{staticClass:"btn btn-sm w-100 btn-primary dark-ltr-version t-ltr-dark mt-2",attrs:{href:"javascript: void(0);"},on:{click:function(s){return t.darkLtr()}}},[t._v("LTR")]),s("a",{staticClass:"btn btn-sm w-100 btn-dark dark-version t-dark mt-2",attrs:{href:"javascript: void(0);"},on:{click:function(s){return t.setDark()}}},[t._v("Dark")]),s("a",{staticClass:"btn btn-sm w-100 btn-dark light-version t-light mt-2",attrs:{href:"javascript: void(0);"},on:{click:function(s){return t.setLight()}}},[t._v("Light")])]),s("div",{staticClass:"bottom"},[s("a",{staticClass:"settings bg-white shadow d-block",attrs:{href:"javascript: void(0);"},on:{click:t.ToogleMenu}},[s("i",{staticClass:"mdi mdi-cog ml-1 mdi-24px position-absolute mdi-spin text-primary"})])])])},e=[],r={data(){return{isVisible:!1}},methods:{ToogleMenu(){this.isVisible=!this.isVisible},setTheme(t){document.getElementById("color-opt").setAttribute("href","./css/colors/"+t+".css")},setDark(){document.getElementById("theme-opt").setAttribute("href","./css/style-dark.css")},setLight(){document.getElementById("theme-opt").setAttribute("href","./css/style.css")},darkRtl(){document.getElementById("theme-opt").setAttribute("href","./css/style-dark-rtl.css")},darkLtr(){document.getElementById("theme-opt").setAttribute("href","./css/style-dark.css")},setRtl(){document.getElementById("theme-opt").setAttribute("href","./css/style-rtl.css")},setLtr(){document.getElementById("theme-opt").setAttribute("href","./css/style.css")}}},c=r,l=i("2877"),n=Object(l["a"])(c,a,e,!1,null,null,null);s["a"]=n.exports},"8df2":function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t._self._c;return s("div",[s("div",{staticClass:"back-to-home rounded d-none d-sm-block"},[s("router-link",{staticClass:"btn btn-icon btn-primary",attrs:{to:"/"}},[s("home-icon",{staticClass:"icons"})],1)],1),s("section",{staticClass:"cover-user bg-white"},[s("div",{staticClass:"container-fluid px-0"},[s("div",{staticClass:"row no-gutters position-relative"},[s("div",{staticClass:"col-lg-4 cover-my-30 order-2"},[s("div",{staticClass:"cover-user-img d-flex align-items-center"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"card login_page border-0",staticStyle:{"z-index":"1"}},[s("div",{staticClass:"card-body p-0"},[s("h4",{staticClass:"card-title text-center"},[t._v("Signup")]),s("form",{staticClass:"login-form mt-4"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"form-group"},[t._m(0),s("div",{staticClass:"position-relative"},[s("user-icon",{staticClass:"fea icon-sm icons"}),s("input",{staticClass:"form-control pl-5",attrs:{type:"text",placeholder:"First Name",name:"s",required:""}})],1)])]),s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"form-group"},[t._m(1),s("div",{staticClass:"position-relative"},[s("user-check-icon",{staticClass:"fea icon-sm icons"}),s("input",{staticClass:"form-control pl-5",attrs:{type:"text",placeholder:"Last Name",name:"s",required:""}})],1)])]),s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"form-group"},[t._m(2),s("div",{staticClass:"position-relative"},[s("mail-icon",{staticClass:"fea icon-sm icons"}),s("input",{staticClass:"form-control pl-5",attrs:{type:"email",placeholder:"Email",name:"email",required:""}})],1)])]),s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"form-group"},[t._m(3),s("div",{staticClass:"position-relative"},[s("key-icon",{staticClass:"fea icon-sm icons"}),s("input",{staticClass:"form-control pl-5",attrs:{type:"password",placeholder:"Password",required:""}})],1)])]),t._m(4),t._m(5),t._m(6),s("div",{staticClass:"mx-auto"},[s("p",{staticClass:"mb-0 mt-3"},[s("small",{staticClass:"text-dark mr-2"},[t._v("Already have an account ?")]),s("router-link",{staticClass:"text-dark font-weight-bold",attrs:{to:"/auth-cover-login"}},[t._v("Sign in")])],1)])])])])])])])])]),s("div",{staticClass:"col-lg-8 offset-lg-4 padding-less img order-1",staticStyle:{"background-image":"url('images/user/02.jpg')"},attrs:{"data-jarallax":'{"speed": 0.5}'}})])])])])},e=[function(){var t=this,s=t._self._c;return s("label",[t._v("First name "),s("span",{staticClass:"text-danger"},[t._v("*")])])},function(){var t=this,s=t._self._c;return s("label",[t._v("Last name "),s("span",{staticClass:"text-danger"},[t._v("*")])])},function(){var t=this,s=t._self._c;return s("label",[t._v("Your Email "),s("span",{staticClass:"text-danger"},[t._v("*")])])},function(){var t=this,s=t._self._c;return s("label",[t._v("Password "),s("span",{staticClass:"text-danger"},[t._v("*")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"form-group"},[s("div",{staticClass:"custom-control custom-checkbox"},[s("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"customCheck1"}}),s("label",{staticClass:"custom-control-label",attrs:{for:"customCheck1"}},[t._v("I Accept "),s("a",{staticClass:"text-primary",attrs:{href:"#"}},[t._v("Terms And Condition")])])])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"col-md-12"},[s("button",{staticClass:"btn btn-primary btn-block"},[t._v(" Register ")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"col-lg-12 mt-4 text-center"},[s("h6",[t._v("Or Signup With")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-6 mt-3"},[s("a",{staticClass:"btn btn-block btn-light",attrs:{href:"javascript:void(0)"}},[s("i",{staticClass:"mdi mdi-facebook text-primary"}),t._v(" Facebook")])]),s("div",{staticClass:"col-6 mt-3"},[s("a",{staticClass:"btn btn-block btn-light",attrs:{href:"javascript:void(0)"}},[s("i",{staticClass:"mdi mdi-google text-danger"}),t._v(" Google")])])])])}],r=i("5ce9"),c=i("0a35"),l={data(){return{}},components:{Switcher:r["a"],FacebookIcon:c["D"],InstagramIcon:c["P"],TwitterIcon:c["nb"],LinkedinIcon:c["T"],HomeIcon:c["O"],UserIcon:c["pb"],UserCheckIcon:c["ob"],MailIcon:c["U"],KeyIcon:c["R"],GitlabIcon:c["J"]}},n=l,o=i("2877"),d=Object(o["a"])(n,a,e,!1,null,null,null);s["default"]=d.exports}}]);
//# sourceMappingURL=chunk-7c71a842.4e763408.js.map