(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{145:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a.n(n),r=a(0),o=a.n(r),l=a(146),s=a(161),c=a(153),p=a(147),d=a.n(p),m=a(154),u=a(156),f=a(155),g=a(157),h=function(e){var t=e.title,a=void 0===t?"about":t,n=e.text,i=void 0===n?"":n;return o.a.createElement(r.Fragment,null,o.a.createElement("h1",null,a),o.a.createElement("p",{dangerouslySetInnerHTML:{__html:i}}))},v=(a(152),function(e){var t=e.className,a=e.name;e.level;return o.a.createElement("div",{className:t},o.a.createElement("label",{htmlFor:a+"-bar"},a),o.a.createElement("div",{id:a+"-bar",className:"skill__bar"},o.a.createElement("div",{className:"skill__level"})))});v.displaName="SkillBar";var b=Object(l.default)(v).withConfig({displayName:"skill-bar",componentId:"sc-1tv82hj-0"})([".skill__bar{height:10px;background-color:lightgrey;padding:1px;}.skill__level{background-color:#25303B;width:","%;height:8px;}"],function(e){return e.level||0}),x=function(e){var t=e.title,a=void 0===t?"Skills":t,n=e.skills,i=void 0===n?[]:n;return o.a.createElement(r.Fragment,null,o.a.createElement("h1",null,a),i.map(function(e){return o.a.createElement(b,{key:e.name,name:e.name,level:e.level})}))},y=a(175),_=a.n(y);function w(){var e=_()(["\n  .timeline__item div.inner {\n    width: 40%;\n    margin: 5px 0 0 0;\n  }\n\n  .timeline__item div.inner h2:after {\n    top: 20px;\n    left: unset;\n    right: -5px;\n  }\n  .timeline__item:nth-child(2n+2) div.inner h2:after {\n    left: -5px;\n  }\n\n  "]);return w=function(){return e},e}var k=Object(l.default)(function(e){var t=e.className;return o.a.createElement("div",{className:t},o.a.createElement("h1",null,"Experience"),d.a.jobs&&d.a.jobs.map(function(e){return o.a.createElement("article",{key:e.begin.month+e.begin.year,className:"timeline__item"},o.a.createElement("div",{className:"inner"},o.a.createElement("span",{className:"timeline__date"},o.a.createElement("span",{className:"timeline__month"},e.begin.month),o.a.createElement("span",{className:"timeline__year"},e.begin.year)),o.a.createElement("h2",{className:"timeline__title"},e.occupation," at ",e.company," ",o.a.createElement("br",null),o.a.createElement("small",{className:"timeline__title--small"},"(",e.duration||"present",")")),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.description}})))}))}).withConfig({displayName:"timeline",componentId:"sc-1p0hdle-0"})(["position:relative;:before{content:'';display:block;position:absolute;left:50%;top:0;margin:70px 0 0 -1px;width:1px;height:calc(100% - 70px);background:#25303B;}.timeline__item{width:100%;margin:0 0 20px 0;position:relative;}.timeline__item:after{content:'';display:block;clear:both;}.timeline__item div.inner{width:100%;float:left;margin:85px 0 0 0;border-radius:6px;border:1px solid #25303B;}.timeline__date{display:block;width:60px;padding:3px 5px;position:absolute;top:0;left:50%;margin:0 0 0 -30px;border-radius:100%;font-size:12px;font-weight:900;text-transform:uppercase;background:#25303B;color:#fff;box-shadow:0 0 0 7px #fff;}.timeline__date span{display:block;text-align:center;}.timeline__month{font-size:18px;padding-top:4px;}.timeline__year{font-size:10px;}.timeline__title{padding:15px;margin:0;color:#fff;font-size:20px;text-transform:uppercase;border-radius:3px 3px 0 0;position:relative;}.timeline__title:after{content:'';position:absolute;top:-5px;left:30%;width:10px;height:10px;transform:rotate(-45deg);}.timeline__item div.inner p{padding:15px;margin:0;font-size:14px;background:#fff;color:#656565;border-radius:0 0 6px 6px;}.timeline__item:nth-child(2n+2) div.inner{float:right;}.timeline__title{background:#25303B;}.timeline__title:after{background:#25303B;}.timeline__title--small{font-size:10px;}",""],function(e){return Object(s.config)().media.sm(w())}),E=a(176),N=a.n(E),C=(a(162),a(177)),I=a.n(C),j=a(178),S=a.n(j),z=Object(l.default)(function(e){var t=e.className;return o.a.createElement("div",{className:t},o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null))}).withConfig({displayName:"loader",componentId:"c3nj0n-0"})(["display:inline-block;position:relative;width:64px;height:64px;margin:0 auto;div{box-sizing:border-box;display:block;position:absolute;width:51px;height:51px;margin:6px;border:6px solid #25303B;border-radius:50%;animation:lds-ring 1.2s cubic-bezier(0.5,0,0.5,1) infinite;border-color:#25303B transparent transparent transparent;}div:nth-child(1){animation-delay:-0.45s;}div:nth-child(2){animation-delay:-0.3s;}div:nth-child(3){animation-delay:-0.15s;}@keyframes lds-ring{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}"]),R="https://api.github.com/users/"+d.a.githubUsername+"/repos?type=owner&sort=updated&per_page=5&page=1",A=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={repos:[],status:"loading"},a}i()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=I()(N.a.mark(function e(){var t;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S()(R);case 2:(t=e.sent).json&&t.json.length&&this.setState({repos:t.json,status:"ready"});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),a.render=function(){var e=this.state.status;return o.a.createElement("div",{className:this.props.className},o.a.createElement("h2",null,"Latest repositories on Github"),"loading"===e&&o.a.createElement("div",{className:"repositories__loader"},o.a.createElement(z,null)),"ready"===e&&this.state.repos&&o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"repositories__content"},this.state.repos.map(function(e){return o.a.createElement(o.a.Fragment,{key:e.name},o.a.createElement("div",{className:"repositories__repo"},o.a.createElement("a",{className:"repositories__repo-link",href:e.html_url},o.a.createElement("strong",null,e.name)),o.a.createElement("div",null,e.description),o.a.createElement("div",{className:"repositories__repo-date"},"Updated: ",new Date(e.updated_at).toUTCString()),o.a.createElement("div",{className:"repositories__repo-star"},"★ ",e.stargazers_count)),o.a.createElement("hr",null))}))))},t}(o.a.Component),D=Object(l.default)(A).withConfig({displayName:"repositories",componentId:"sc-8n2gji-0"})(["position:relative;.repositories__content{margin-bottom:40px;}.repositories__repo{position:relative;}.repositories__repo-link{text-decoration:none;color:#25303B;}.repositories__repo-date{color:#bbb;font-size:10px;}.repositories__repo-star{position:absolute;top:0;right:0;}.repositories__loader{display:flex;}hr{margin-top:16px;}"]),K=l.default.hr.withConfig({displayName:"pages__Separator",componentId:"g1kolw-0"})(["margin-top:24px;margin-bottom:16px;"]),q=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){"UA-000000000-1"===d.a.googleAnalyticsId&&console.error("WARNING: Please set a proper googleAnalyticsId. See https://analytics.google.com for details.");var e=d.a.siteTitle,t=d.a.keywords;return o.a.createElement(m.a,{location:this.props.location},o.a.createElement(f.a,{title:e,keywords:t}),o.a.createElement(u.a,{heroImg:d.a.siteCover,title:e}),o.a.createElement(g.a,{className:this.props.className},o.a.createElement(s.Container,{className:"page-content",fluid:!0},o.a.createElement(s.Row,null,o.a.createElement(s.Col,{xs:4,className:"avatar"},o.a.createElement("img",{className:"avatar__image",src:"/images/avatar.jpg",alt:"user avatar"}),o.a.createElement("div",{className:"social"},d.a.social.github&&o.a.createElement("a",{className:"social-link github",href:d.a.social.github},o.a.createElement(c.b,{className:"social-icon",size:"32"})),d.a.social.linkedin&&o.a.createElement("a",{className:"social-link linkedin",href:d.a.social.linkedin},o.a.createElement(c.c,{className:"social-icon",size:"32"})),d.a.social.twitter&&o.a.createElement("a",{className:"social-link twitter",href:d.a.social.twitter},o.a.createElement(c.d,{className:"social-icon",size:"32"})),d.a.social.email&&o.a.createElement("a",{className:"social-link email",href:"mailto:"+d.a.social.email},o.a.createElement(c.a,{className:"social-icon",size:"32"}))))),o.a.createElement(s.Row,null,o.a.createElement(s.Col,{xs:4,sm:4},o.a.createElement(h,{title:"About",text:d.a.authorDescription})),o.a.createElement(s.Col,{xs:4,sm:4},o.a.createElement(x,{title:"Skills",skills:d.a.skills}))),o.a.createElement(K,null),o.a.createElement(k,null),o.a.createElement(K,null),o.a.createElement(D,null))))},t}(o.a.Component);t.default=Object(l.default)(q).withConfig({displayName:"pages",componentId:"g1kolw-1"})([".page-content{max-width:100%;margin-bottom:40px;}.avatar{align-items:center;margin-bottom:24px;}.avatar__image{box-shadow:3px 3px 15px 0px rgba(0,0,0,0.75);max-width:200px;border-radius:100px;margin:0 auto 24px;}.social{margin-top:12px;margin-bottom:12px;}.social-link{padding:8px;color:#555;}a.social-link.twitter:hover{color:#1da1f2;}a.social-link.github:hover{color:#24292e;}a.social-link.linkedin:hover{color:#0077B5;}a.social-link.email:hover{color:#c23a2b;}"])},147:function(e,t){e.exports={siteTitle:"Hello! I'm Kristian!",siteDescription:"Korneev Kristian CV",keyWords:["gatsbyjs","react"],authorName:"Kristian Korneev",twitterUsername:"",githubUsername:"TriKNero",authorAvatar:"/images/avatar.jpg",authorDescription:"Hey there! My name is Kristian Korneev. I am a web developer with 4+ years of experience. I've been working at regional Social Security Fund for 1 year and at TechGC Holding, Inc for 2 year and half of year in astraload corp besides temporary small projects.",skills:[{name:"CSS",level:90},{name:"JSS",level:90},{name:"JavaScript",level:94},{name:"Node JS",level:92},{name:"KOA",level:90},{name:"ES 6",level:90},{name:"React",level:95},{name:"Meteor",level:90},{name:"Gatsby",level:82},{name:"Git",level:90},{name:"Mongo DB",level:92},{name:"Python",level:47},{name:"Ruby",level:42}],jobs:[{company:"Astraload",begin:{month:"apr",year:"2019"},duration:null,occupation:"Fullstack Web Developer",description:'<p><strong>Responsibilities:</strong></p> \n      <ul>\n        <li>Develop soft for analyzing web applications performance</li>\n        <li>Develop landing page for <a href="https://astraload.com/">astraload.com</a>.</li>\n      </ul>\n      <p><strong>Advantages:</strong></p>\n      <ul>\n        <li>Scaled performance for <a href="https://selfleaders.com/">SelfLeaders</a> application from 1000 active users to 4000.</li>\n      </ul>\n      '},{company:"TechGC Holding, Inc",begin:{month:"may",year:"2017"},duration:"2 years",occupation:"Fullstack Web Developer",description:'<p>\n        <strong>Responsibilities:</strong>\n        \n        <ul> \n        <li>Develop the social network for American senior lawyers with Meteor and React <a href="https://members.techgc.co/">members.techgc.co</a></li>\n         <li>Develop the microservice for a dump data from legacy soft</li> \n        <li>Develop the microservice for a messaging feature with KOA framework</li>\n        <li>Write end-to-end tests</li>\n        <li>Write unit tests</li>\n        <li>Support a responsive design</li> \n        <li>Write stories for storybook</li> \n        <li>Improve UX design</li> \n        <li>Develop the custom analytic</li> \n        </ul>\n        \n        <strong>Advantages:</strong>\n        \n        <ul>\n        <li>\n        Began develop <a href="https://members.techgc.co/">members.techgc.co</a> from scratch\n        <li>Helped invent and develop many extra features.</li>\n        </li>\n        </ul>\n      </p>'},{company:"Novatest",begin:{month:"feb",year:"2017"},duration:"3 month",occupation:"Frontend developer",description:'<p><strong>Responsibilities:</strong>\n        <ul> \n          <li>Integrate frontend for different websites</li>\n        </ul>\n        <strong>Advantages:</strong>\n        <ul> \n          <li>Developed frontend for: <a href="https://www.conceptclub.ru">conceptclub.ru</a>, <a href="https://acoolakids.ru/">acoolakids.ru</a>,  \n          <a href="http://www.rbc.group/">rbc.group</a>\n          </li>\n        </ul></p>\n'},{company:"Mafia food",begin:{month:"oct",year:"2016"},duration:"3 month",occupation:"Frontend developer",description:'\n        <p><strong>Responsibilities:</strong></p>\n        <ul>\n        <li>Develop and implement frontend for <a href="http://www.mafiafood.ru">mafiafood.ru</a></li>\n        </ul>'},{company:"Social Security Fund ",begin:{month:"aug",year:"2015"},duration:"1 yrs e 1 mos",occupation:"Fullstack Web Developer",description:"\n     <p><strong>Responsibilities:</strong>\n     <ul> \n       <li>Develop soft for staff job optimization on PHP, React, Jquery and Flask </li>\n       <li>Support legacy soft</li> \n       <li>Write end to end testing</li> \n       <li>Write queries and migrations for large database</li> \n       <li>Support intranet portal.</li>\n     </ul>\n     \n     <strong>Advantages:</strong>\n     \n     <ul>\n     <li>Automatized some staff job.</li>\n     </ul></p>\n        "}],social:{linkedin:"https://www.linkedin.com/in/kristian-korneev-920b34121",github:"https://github.com/TriKNero",email:"krisnerodev@gmail.com"},siteUrl:"https://triknero.github.io",pathPrefix:"/gatsby-starter-cv",siteCover:"/images/cover.jpg",googleAnalyticsId:"UA-146463065-1",background_color:"#ffffff",theme_color:"#25303B",display:"minimal-ui",icon:"src/assets/my_favicon.png",headerLinks:[{label:"Kristian Korneev",url:"/"}]}},148:function(e,t,a){"use strict";a.d(t,"b",function(){return p});var n=a(0),i=a.n(n),r=a(4),o=a.n(r),l=a(33),s=a.n(l);a.d(t,"a",function(){return s.a}),a.d(t,"c",function(){return l.withPrefix});a(149);var c=i.a.createContext({}),p=function(e){return i.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},149:function(e,t,a){var n;e.exports=(n=a(150))&&n.default||n},150:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),i=a.n(n),r=a(4),o=a.n(r),l=a(56),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return a?i.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Hello! I'm Kristian!",description:"Korneev Kristian CV",author:"Kristian Korneev"}}}}},154:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(4),o=a.n(r),l=a(147),s=a.n(l),c=a(7),p=a.n(c),d=a(148),m=a(146),u=a(153),f=m.default.header.withConfig({displayName:"header__HeaderWrapper",componentId:"dsp75d-0"})(["position:fixed;top:0;left:0;margin:0 auto;display:block;width:100%;z-index:1000;background-color:#25303B;"]),g=m.default.nav.withConfig({displayName:"header__HeaderNav",componentId:"dsp75d-1"})(["margin-left:auto;margin-right:auto;height:60px;display:flex;flex-direction:row;max-width:960px;z-index:1000;justify-content:space-between;overflow-x:auto;overflow-y:hidden;background-color:#25303B;"]),h=m.default.div.withConfig({displayName:"header__HeaderLinkGroup",componentId:"dsp75d-2"})(["display:flex;flex-direction:row;"]),v=Object(m.default)(d.a).withConfig({displayName:"header__HeaderLink",componentId:"dsp75d-3"})(["position:relative;text-decoration:none;display:flex;align-items:center;color:#fff;border:0;margin:0;margin-right:0.5rem;padding-left:20px;padding-right:20px;min-width:42px;z-index:10;"]),b=Object(m.default)(function(e){var t=e.className;return i.a.createElement("a",{className:t,href:"https://github.com/"+s.a.githubUsername,target:"_blank",rel:"noopener noreferrer"},i.a.createElement(u.b,{size:32}))}).withConfig({displayName:"header__GithubLink",componentId:"dsp75d-4"})(["position:relative;display:flex;align-items:center;color:#fff;border:0;margin:0;margin-right:0.5rem;padding-left:20px;padding-right:20px;min-width:42px;z-index:10;"]),x=function(e){function t(){return e.apply(this,arguments)||this}return p()(t,e),t.prototype.render=function(){var e=s.a.headerLinks;return i.a.createElement(f,null,i.a.createElement(g,null,i.a.createElement(h,null,e.map(function(e,t){return i.a.createElement(v,{to:e.url,key:"header-link-"+t},e.label)})),i.a.createElement(b,null)))},t}(i.a.Component),y=(a(158),function(e){var t=e.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement(x,{headerLinks:s.a.headerLinks}),i.a.createElement("div",null,t))});y.propTypes={children:o.a.node.isRequired};var _=y;a.d(t,"a",function(){return _})},155:function(e,t,a){"use strict";var n=a(151),i=a(0),r=a.n(i),o=a(4),l=a.n(o),s=a(159),c=a.n(s),p=a(148);function d(e){var t=e.description,a=e.lang,i=e.meta,o=e.keywords,l=e.title;return r.a.createElement(p.b,{query:u,render:function(e){var n=t||e.site.siteMetadata.description;return r.a.createElement(c.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:l},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(i)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired};var m=d,u="1025518380";a.d(t,"a",function(){return m})},156:function(e,t,a){"use strict";var n=a(7),i=a.n(n),r=a(0),o=a.n(r),l=a(148),s=a(147),c=a.n(s),p=a(146),d=p.default.div.withConfig({displayName:"hero__HeroContainer",componentId:"uqwd53-0"})(["position:relative;display:table;width:100%;overflow:hidden;background-repeat:no-repeat;background-position:center;background-size:cover;"]),m=p.default.div.withConfig({displayName:"hero__TitleContainer",componentId:"uqwd53-1"})(["display:table-cell;vertical-align:middle;text-align:center;width:100%;"]),u=p.default.h1.withConfig({displayName:"hero__HeroTitle",componentId:"uqwd53-2"})(["font-weight:700;font-size:3rem;margin:10px 60px;color:#fff;text-shadow:1px 1px 4px rgba(34,34,34,0.6);"]),f=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.className;return o.a.createElement(d,{className:a},o.a.createElement(m,null,o.a.createElement(u,null,t)))},t}(o.a.Component),g=Object(p.default)(f).withConfig({displayName:"hero",componentId:"uqwd53-3"})([""," height:70vh;background-attachment:fixed;background-position:center;background-repeat:no-repeat;background-size:cover;"],function(e){return"background-image: url("+(e.heroImg||Object(l.c)(c.a.siteCover))+");"});a.d(t,"a",function(){return g})},157:function(e,t,a){"use strict";var n=a(146).default.main.attrs({role:"main"}).withConfig({displayName:"wrapper__Wrapper",componentId:"sc-10vqfep-0"})(["position:relative;border-radius:3px;width:80%;max-width:960px;border-bottom:1px solid #ebf2f6;word-wrap:break-word;background-color:#fff;margin:0px auto 30px auto;top:-100px;padding:50px;box-shadow:0 0 0 0,0 6px 12px rgba(0,0,0,0.1);min-height:150px;@media (max-width:780px){width:90%;padding:25px;}"]);a.d(t,"a",function(){return n})}}]);
//# sourceMappingURL=component---src-pages-index-js-2e373486fed52a586071.js.map