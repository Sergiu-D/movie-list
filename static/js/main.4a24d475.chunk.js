(this.webpackJsonpmovie_list=this.webpackJsonpmovie_list||[]).push([[0],{111:function(e,t,r){},128:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),i=r(11),c=r.n(i),o=(r(111),r(26)),s=r(13),l=r(101),d=r(198),j=r(192),h=r(57),m=r(15),b=r(10),u=r(172),p=r(175),g=r(94),x=r.n(g),v=r(1),O=Object(u.a)((function(e){return{searchInput:{maxWidth:"10rem",borderBottom:"1px solid",backgroundColor:"transparent",borderStyle:"none",fontFamily:"inherit",fontSize:"1rem",color:"white",padding:".5rem .2rem",transition:"border-color .2s ease-in","&:focus":{outline:0}},searchBtn:{minWidth:"45px",minHeight:"35px",border:"1px solid white",borderRadius:"0 5px 5px 0",backgroundColor:"transparent",padding:0,"&:hover":{backgroundColor:"rgba(255,255,255, .2)",borderColor:"white"}},searchIconBtn:{fontSize:"2rem",padding:".2rem ",fill:"white"}}}));function f(e){var t=e.setOpenMenu,r=O(),n=Object(s.g)(),i=Object(a.useState)(!1),c=Object(m.a)(i,2),o=c[0],l=c[1];return Object(v.jsx)("div",{style:{display:"flex"},children:Object(v.jsxs)("form",{className:r.form,onSubmit:function(e){return function(e){var r=e.target[0].value.trim().toLowerCase(),a=new RegExp("[A-Za-z0-9]");if(!a.test(r))return l(!0);n.location.pathname="/";var i=new URLSearchParams({query:r,media_type:"movie"});return n.push("search?".concat(i)),t(!1),a.test(r)?(l(!1),e.target[0].value=""):void 0}(e)},children:[Object(v.jsx)("input",{type:"text",placeholder:"Search a title",style:o?{borderColor:"#900603"}:{borderColor:"white"},className:r.searchInput}),Object(v.jsx)(p.a,{style:o?{borderColor:"#900603"}:{borderColor:"white"},className:r.searchBtn,variant:"outlined",type:"submit",color:"secondary",disableRipple:!0,children:Object(v.jsx)(x.a,{style:o?{fill:"#900603"}:{fill:"white"},className:r.searchIconBtn})})]})})}var y=r(22),w=r(176),_=r(177),S=r(196),C=r(179),k=r(180),N=r(181),z=r(182),T=r(183),I=r.p+"static/media/logo_transparent.41790b04.png",L=r.p+"static/media/tmdb-2.de1a664e.svg",W=r(95),R=r.n(W),E=Object(u.a)((function(e){var t;return{menuIcon:{position:"fixed",top:"2rem",left:"2rem",transition:"opacity .2s ease-in-out",zIndex:2e4},drawerPaper:Object(b.a)({width:"357px",display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center",backgroundColor:"transparent",border:"none"},e.breakpoints.down("md"),{minWidth:"300px",maxWidth:"40%",width:"40%",backgroundColor:"#202B34"}),navLink:{width:"100%",textTransform:"capitalize",color:"rgba(255, 255, 255, 0.5)"},list:{width:"100%"},listItem:(t={display:"flex",padding:"1.5rem 25%"},Object(b.a)(t,e.breakpoints.down("md"),{padding:".8rem 25%"}),Object(b.a)(t,e.breakpoints.down("sm"),{padding:".5rem 25%"}),t),typography:{fontWeight:100},icon:{marginRight:"1.3rem",fontSize:"2rem",fill:"rgba(255, 255, 255, 0.5)"},logo:Object(b.a)({width:"9rem"},e.breakpoints.down("md"),{width:"10rem"})}}));function B(){var e=E(),t=["trending_up","theaters","arrow_upward","movie_filter","star","settings"],r=Object(a.useState)(!1),n=Object(m.a)(r,2),i=n[0],c=n[1],s=Object(y.a)(),l=Object(w.a)(s.breakpoints.down("md"));return Object(v.jsxs)(v.Fragment,{children:[l&&Object(v.jsx)(_.a,{className:e.menuIcon,style:i?{visibility:"hidden",opacity:"0"}:{visibility:"visible",opacity:"1"},color:"primary",onClick:function(){return c(!0)},children:Object(v.jsx)(R.a,{})}),Object(v.jsx)("nav",{style:l?{minWidth:0}:{height:"100vh",flex:"0 0 350px"},children:Object(v.jsxs)(S.a,{open:i,onClose:function(){return c(!1)},variant:l?"temporary":"permanent",classes:{paper:e.drawerPaper},children:[Object(v.jsx)(C.a,{className:e.logo,component:"img",alt:"Logo",image:I}),Object(v.jsx)(f,{setOpenMenu:c}),Object(v.jsx)(k.a,{className:e.list,children:["trending","newest","upcoming","discover","watchlist"].map((function(r,a){return Object(v.jsx)(o.c,{to:"/".concat(r),activeStyle:{color:"white",fill:"white"},className:e.navLink,onClick:function(){return c(!1)},children:Object(v.jsxs)(N.a,{button:!0,className:e.listItem,children:[Object(v.jsx)(z.a,{className:e.icon,children:t[a]}),Object(v.jsx)(T.a,{variant:"h4",className:e.typography,children:r})]})},a)}))}),Object(v.jsx)(C.a,{className:e.logo,component:"img",alt:"The movie data base logo",image:L})]})})]})}var D=r(58),F=r(96);function A(e){var t=e.pageTitle,r=Object(w.a)((function(e){return e.breakpoints.down("md")}));Object(w.a)((function(e){return e.breakpoints.down("sm")}));return Object(v.jsx)(T.a,{variant:"h1",style:r?{display:"flex",justifyContent:"center",margin:"2.5rem 0"}:{display:"none"},children:t})}var H=r(184),P=r(197),M=r(193),G=Object(u.a)((function(e){return{wrapper:{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap"},formControl:{minWidth:150,margin:"2rem 0"}}}));function U(e){e.pageTitle;var t=G(),r=Object(s.g)(),n=r.location.search?r.location.search:{media_type:"movie",sort_by:"vote_count.desc"};Object(a.useEffect)((function(){var e,t=new URLSearchParams(n),r=Object(F.a)(t.entries());try{var a=function(){var t=e.value;l((function(e){return Object(D.a)(Object(D.a)({},e),{},Object(b.a)({},t[0],t[1]))}))};for(r.s();!(e=r.n()).done;)a()}catch(i){r.e(i)}finally{r.f()}}),[]);var i=Object(a.useState)({}),c=Object(m.a)(i,2),o=c[0],l=c[1];console.log("\ud83d\ude80 ~ file: Filters.jsx ~ line 40 ~ Filters ~ filtersValues",o);var d=new URLSearchParams(o);Object(a.useEffect)((function(){r.push("/discover?".concat(d.toString()))}),[o]);var j=function(e){e.preventDefault();var t=e.target.id,r=e.target.value;l((function(e){return Object(D.a)(Object(D.a)({},e),{},Object(b.a)({},t,r))}))};return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(A,{pageTitle:"Discover"}),Object(v.jsxs)("div",{className:t.wrapper,children:[Object(v.jsxs)(H.a,{className:t.formControl,children:[Object(v.jsx)(P.a,{id:"media_type-select",children:"Media Type"}),Object(v.jsxs)(M.a,{labelId:"media_type-select",id:"media_type",native:!0,value:o.media_type,onChange:j,children:[Object(v.jsx)("option",{"aria-label":"None",value:""}),Object(v.jsx)("option",{value:"movie",children:"Movies"}),Object(v.jsx)("option",{value:"tv",children:"Tv Shows"})]})]}),Object(v.jsxs)(H.a,{className:t.formControl,children:[Object(v.jsx)(P.a,{id:"sort_by-select",children:"Sort By"}),Object(v.jsxs)(M.a,{labelId:"sort_by-select",id:"sort_by",native:!0,value:o.sort_by,onChange:j,children:[Object(v.jsx)("option",{"aria-label":"None",value:""}),Object(v.jsx)("option",{value:"popularity.desc",children:"Popularity High"}),Object(v.jsx)("option",{value:"popularity.asc",children:"Popularity Low"}),Object(v.jsx)("option",{value:"release_date.desc",children:"Release Date Newer"}),Object(v.jsx)("option",{value:"release_date.asc",children:"Release Date Older"}),Object(v.jsx)("option",{value:"vote_average.desc",children:"Vote Average High"}),Object(v.jsx)("option",{value:"vote_average.asc",children:"Vote Average Low"}),Object(v.jsx)("option",{value:"vote_count.desc",children:"Vote Count High"}),Object(v.jsx)("option",{value:"vote_count.asc",children:"Vote Count Low"})]})]}),Object(v.jsxs)(H.a,{className:t.formControl,children:[Object(v.jsx)(P.a,{id:"vote_average-select",children:"Vote Average"}),Object(v.jsxs)(M.a,{labelId:"vote_average-select",id:"vote_average",native:!0,value:o.vote_average,onChange:j,children:[Object(v.jsx)("option",{"aria-label":"None",value:""}),function(e){for(var t=[],r=e;r>=1;r--)t.push(r);return t}(10).map((function(e){return Object(v.jsx)("option",{value:e,children:e})}))]})]}),Object(v.jsxs)(H.a,{className:t.formControl,children:[Object(v.jsx)(P.a,{id:"year-select",children:"Year"}),Object(v.jsxs)(M.a,{labelId:"year-select",id:"year",native:!0,value:o.year,onChange:j,children:[Object(v.jsx)("option",{"aria-label":"None",value:""}),function(e){for(var t=[],r=(new Date).getFullYear();r>e;r--)t.push(r);return t}(1900).map((function(e){return Object(v.jsx)("option",{value:e,children:e})}))]})]})]})]})}var V=r(24),Q=r(14),J=function(){return fetch.apply(void 0,arguments).then((function(e){return e.json()}))};function q(e){return"https://api.themoviedb.org/3/".concat(e,"?api_key=").concat("cd001a6467f4a6dd11d1fcd4ae1044a7")}function Y(e,t){var r=[];return e.forEach((function(e){r.push(Object.assign({},e,{media_type:"".concat(t)}))})),r}var X=r(70),Z=r.n(X),K=Object(a.createContext)(),$=function(e){var t=e.children,r=Object(Q.a)(q("genre/movie/list"),J),a=r.data,n=r.error,i=Object(Q.a)(q("genre/tv/list"),J),c=i.data,o=i.error;if(!a||!c)return Object(v.jsx)(Z.a,{color:"RGB(240, 5, 75)",css:"margin: 0 auto;",size:5});if(n||o)return Object(v.jsx)("h2",{children:"Error!!!"});var s=a.genres,l=c.genres;return Object(v.jsx)(K.Provider,{value:{moviesGenres:s,showsGenres:l},children:t})},ee=r(185);function te(e){var t=e.genreIds,r=e.mediaType,n=Object(a.useState)([]),i=Object(m.a)(n,2),c=i[0],o=i[1],s=Object(a.useContext)(K),l=s.moviesGenres,d=s.showsGenres,j="movie"===r?l:d;return Object(a.useEffect)((function(){o(j.filter((function(e){return t.some((function(t){return e.id===t||e.id===t.id}))})))}),[]),Object(v.jsx)(ee.a,{style:{display:"flex",justifyContent:"center"},children:Object(v.jsx)(T.a,{style:{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",color:"#adb5bd",fontSize:"12px",lineHeight:"25px",wordSpacing:".5ch",fontWeight:100},children:function(){var e=[];return c.forEach((function(t){return e.push(t.name)})),e.sort().join(" ")}()})})}r(122);var re=Object(a.createContext)();function ae(e){var t=JSON.parse(localStorage.getItem("movie-list_watchlist"))||[],r=Object(a.useState)(t),n=Object(m.a)(r,2),i=n[0],c=n[1];Object(a.useEffect)((function(){localStorage.setItem("movie-list_watchlist",JSON.stringify(i))}),[i]);var o={hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0};return Object(v.jsx)(re.Provider,{value:{list:i,addItem:function(e){var t=e.title||e.name;h.b.success(Object(v.jsxs)("p",{style:{textAlign:"center"},children:[Object(v.jsx)("b",{children:t})," has been added to Watch List"]}),o),c((function(t){return[].concat(Object(V.a)(t),[e])}))},removeItem:function(e){var t=e.title||e.name;h.b.warn(Object(v.jsxs)("p",{style:{textAlign:"center"},children:[Object(v.jsx)("b",{children:t})," has been removed from Watch List"]}),o),c(i.filter((function(t){return t.id!==e.id})))}},children:e.children})}var ne=r(178),ie=r(186),ce=r(97),oe=r.n(ce),se=r(98),le=r.n(se),de=Object(u.a)((function(e){return{backToTopBtn:Object(b.a)({minWidth:"70px",minHeight:"70px",borderRadius:"50%",position:"fixed",bottom:"5rem",right:"5rem",zIndex:"10000",cursor:"pointer",backgroundColor:"rgb(58, 165, 170)",transition:"none",boxShadow:"0 1px 15px 1px rgba(0, 0, 0, .5)","&:hover":{boxShadow:"0 1px 15px 3px rgba(0, 0, 0, .9)",backgroundColor:"rgb(64, 191, 198)"}},e.breakpoints.down("sm"),{minWidth:"60px",minHeight:"60px",bottom:"2rem",right:"2rem"}),backToTopIcon:Object(b.a)({fontSize:"2.5rem"},e.breakpoints.down("sm"),{fontSize:"1.5rem"}),watchListSmallBtn:Object(b.a)({width:"15%",height:"7.2%",position:"absolute",top:"10px",left:"10px",zIndex:"500"},e.breakpoints.down("sm"),{top:"5px",left:"5px"}),watchListIcon:Object(b.a)({fontSize:"3.5rem",opacity:".8",transition:"opacity .2s ease","&:hover":{opacity:"1"}},e.breakpoints.down("sm"),{fontSize:"2.3rem"}),watchListLargeInactiveBtn:{width:"fit-content",borderColor:"rgb(255,147,79)",color:"rgb(255,147,79)","&:hover":{backgroundColor:"rgb(255,147,79)",borderColor:"rgb(255,147,79)",color:"rgb(255,255,255)"}},watchListLargeActiveBtn:{width:"fit-content",backgroundColor:"rgb(255,147,79)",borderColor:"rgb(255,147,79)",color:"rgb(255,255,255)","&:hover":{backgroundColor:"rgb(247, 108, 20)",borderColor:"rgb(247, 108, 20)",color:"rgb(255,255,255)"}}}})),je=function(){var e=de(),t=Object(a.useState)(!1),r=Object(m.a)(t,2),n=r[0],i=r[1];return document.onscroll=function(e){var t=e.target.scrollingElement.scrollTop;return i(t>600)},Object(v.jsx)(ne.a,{direction:"up",in:n,mountOnEnter:!0,unmountOnExit:!0,children:Object(v.jsx)(p.a,{onClick:function(){return window.scrollTo({top:0,behavior:"smooth"})},className:e.backToTopBtn,variant:"contained",color:"primary",children:Object(v.jsx)(oe.a,{className:e.backToTopIcon,fontSize:"large"})})})},he=function(e){var t=e.movie,r=e.type,n=de(),i=Object(a.useContext)(re),c=i.list,o=i.addItem,s=i.removeItem,l=c.some((function(e){return e.id===t.id}));return"large"===r?Object(v.jsx)(p.a,{onClick:l?function(){return s(t)}:function(){return o(t)},variant:l?"contained":"outlined",className:l?n.watchListLargeActiveBtn:n.watchListLargeInactiveBtn,children:l?"Remove from watch list":"Add to watch list"}):"small"===r?Object(v.jsx)(ie.a,{onClick:l?function(){return s(t)}:function(){return o(t)},className:n.watchListSmallBtn,children:Object(v.jsx)(le.a,{className:n.watchListIcon,style:l?{fill:"rgb(255,147,79)",opacity:"1"}:{stroke:"rgb(255,147,79)",strokeWidth:"1.5px",fill:"transparent"}})}):void 0},me=r(71),be=(r(86),r(187)),ue=r(188),pe=r(131),ge=r(189),xe=Object(u.a)((function(e){var t,r;return{root:{position:"relative",display:"flex",flexDirection:"column",justifyItems:"flex-start",border:0,backgroundColor:"transparent",boxShadow:"3px 3px 10px 2px rgba(0,0,0, .2)"},cardActionArea:{height:"100%",transition:"all .2s ease",zIndex:"200","&:hover":{backgroundColor:"rgba(255,255,255,.2)"}},img:{aspectRatio:"2/3"},cardContent:{minHeight:"70px",display:"flex",flexDirection:"column",justifyContent:"space-around",textAlign:"center",margin:".2rem 0",padding:"0 .4rem"},title:Object(b.a)({padding:"0 .5rem",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",color:"#fff"},e.breakpoints.down("sm"),{padding:".5rem .2rem"}),paragraph:{color:"#fff",lineHeight:"1.5rem"},score:(t={width:"38px",height:"38px",padding:".2rem",position:"absolute",top:"10px",right:"10px",borderWidth:"3px",borderStyle:"solid",borderRadius:"50%",color:"white",backgroundColor:"rgba(0,0,0, .9)",boxShadow:"0 0 5px 2px rgba(0,0,0,.4)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:"100"},Object(b.a)(t,e.breakpoints.down("md"),{width:"35px",height:"35px",top:"7px",right:"7px"}),Object(b.a)(t,e.breakpoints.down("sm"),{top:"2px",right:"2px",borderWidth:"2px",width:"30px",height:"30px"}),t),scoreFont:(r={fontSize:".9rem",fontWeight:700},Object(b.a)(r,e.breakpoints.down("md"),{fontSize:".8rem"}),Object(b.a)(r,e.breakpoints.down("sm"),{fontSize:".7rem"}),r)}})),ve=function(e){var t=e.movie,r=xe(),a=Object(s.h)();console.log("\ud83d\ude80 ~ file: ContentCard.jsx ~ line 129 ~ ContentCard ~ location",a);var n,i=t.id,c=t.poster_path,l=t.vote_average,d=t.media_type,j=t.title||t.name,h=t.genre_ids||t.genres,m=c?"https://image.tmdb.org/t/p/w200/".concat(c):"https://www.translationvalley.com/wp-content/uploads/2020/03/no-iamge-placeholder.jpg",b=j.replace(/\s/g,"+"),u="?media_type=".concat(d,"&id=").concat(i,"&name=").concat(b);return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(be.a,{className:r.root,children:[Object(v.jsx)(he,{movie:t,type:"small"}),Object(v.jsx)(o.b,{to:{pathname:"".concat(a.pathname,"/selected"),search:u},children:Object(v.jsxs)(ue.a,{className:r.cardActionArea,children:[Object(v.jsx)(pe.a,{className:r.score,style:{borderColor:"".concat((n=l,n<1?"white":n>=8?"green":n>5?"orange":n<=5?"red":void 0))},children:Object(v.jsx)(T.a,{variant:"caption",className:r.scoreFont,children:l<1?"N/A":l})}),Object(v.jsx)(me.LazyLoadImage,{className:r.img,height:"100%",width:"100%",effect:"blur",alt:"".concat(j," poster"),src:m,threshold:400}),Object(v.jsxs)(ge.a,{className:r.cardContent,children:[Object(v.jsx)(T.a,{variant:"h5",className:r.title,children:j}),Object(v.jsx)($,{children:Object(v.jsx)(te,{genreIds:h,mediaType:d})})]})]})})]})})},Oe=r(190),fe=function(e){var t=e.children,r=Object(w.a)((function(e){return e.breakpoints.down("sm")}));return Object(v.jsx)(Oe.a,{container:!0,spacing:r?1:2,justify:"flex-start",children:t})},ye=function(e){var t=e.children,r=e.index;return Object(v.jsx)(Oe.a,{item:!0,xs:4,sm:3,md:3,lg:2,children:t},r)},we=Object(u.a)((function(e){return{root:{display:"grid",gridTemplateColumns:"repeat(15, 1fr)"},container:{padding:"0 .5rem",paddingTop:"1rem",minHeight:"50vh",display:"flex",flexDirection:"column",justifyContent:"space-between"},btn:Object(b.a)({width:"15%",margin:"1.5rem auto"},e.breakpoints.down("sm"),{width:"100%",padding:".5rem 0"})}}));function _e(e){var t=we(),r=e.data,a=e.sectionTitle,i=e.setShowMore,c=n.a.useState(6),o=Object(m.a)(c,2);o[0],o[1];return console.log("Data length ",r.length),Object(v.jsxs)("section",{className:t.container,children:[Object(v.jsx)("h1",{style:{fontSize:"3rem",fontWeight:200,margin:"2rem auto"},children:a}),Object(v.jsx)(fe,{children:r.map((function(e){return Object(v.jsx)(ye,{children:Object(v.jsx)(ve,{movie:e})},e.id)}))}),r.length>=100?Object(v.jsx)("h3",{style:{margin:"2rem auto"},children:"That is it!"}):Object(v.jsx)(p.a,{variant:"contained",color:"primary",className:t.btn,onClick:function(){i((function(e){return e+1}))},children:"Show More"})]})}var Se=r(27),Ce=r.n(Se);function ke(e){var t=e.moviesQuery,r=e.showsQuery,a=e.pageTitle;document.title="".concat(a);var n=Object(Q.b)((function(e){return"".concat(q(t),"&page=").concat(e+1)}),J),i=n.data,c=n.error,o=n.setSize,s=Object(Q.b)((function(e){return"".concat(q(r),"&page=").concat(e+1)}),J),l=s.data,d=s.error,j=s.setSize;if(!i||!l)return Object(v.jsx)(Ce.a,{color:"RGB(240, 5, 75)",css:"color: white; margin: auto;",size:100});if(c||d)return Object(v.jsx)("h1",{style:{margin:"auto"},children:"Error!"});var h=[],m=[];return i.forEach((function(e){return h.push.apply(h,Object(V.a)(Y(e.results,"movie")))})),l.forEach((function(e){return m.push.apply(m,Object(V.a)(Y(e.results,"tv")))})),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(A,{pageTitle:a}),Object(v.jsx)(_e,{data:h,sectionTitle:"Movies",setShowMore:o}),Object(v.jsx)(_e,{data:m,sectionTitle:"Tv Shows",setShowMore:j})]})}function Ne(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(ke,{moviesQuery:"trending/movie/day",showsQuery:"trending/tv/day",pageTitle:"Trending"})})}function ze(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(ke,{moviesQuery:"movie/now_playing",showsQuery:"tv/airing_today",pageTitle:"Newest"})})}var Te=r(99),Ie=r(100);function Le(e){var t,r,a=e.media,n=e.setSize,i=e.totalResults;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(Ie.a,{style:{paddingTop:"1rem",overflowX:"hidden"},dataLength:a.length,next:function(){return n((function(e){return e+2}))},hasMore:(t=i,r=a.length,t!==r),loader:Object(v.jsxs)("div",{style:{display:"flex"},children:[" ",Object(v.jsx)(Z.a,{color:"RGB(240, 5, 75)",css:"margin: 1rem auto;",size:10})," "]}),endMessage:Object(v.jsx)("p",{style:{display:"block",textAlign:"center",padding:"2rem 0"},children:Object(v.jsx)("b",{children:"You have seen it all"})}),children:Object(v.jsx)(fe,{children:a.map((function(e){return Object(v.jsx)(ye,{children:Object(v.jsx)(ve,{movie:e})},e.id)}))})}),Object(v.jsx)(je,{})]})}var We,Re=r(64),Ee=Object(Re.css)(We||(We=Object(Te.a)(["\n  color: white;\n  margin: auto;\n"])));function Be(){document.title="Upcoming";var e=Object(Q.b)((function(e){return"".concat(q("movie/upcoming"),"&page=").concat(e+1)}),J),t=e.data,r=e.error,a=e.isValidating,n=(e.mutate,e.size),i=e.setSize;if(!t)return Object(v.jsx)(Ce.a,{color:"RGB(240, 5, 75)",css:Ee,size:100});if(r)return Object(v.jsx)("h1",{style:{margin:"auto",color:"red"},children:"Error!"});return Object(v.jsxs)("div",{children:[Object(v.jsx)(A,{pageTitle:"Upcoming"}),Object(v.jsx)(Le,{media:function(){var e=[],r=Date.parse(t[0].dates.minimum);return t.forEach((function(t){return t.results.forEach((function(t){return r<Date.parse(t.release_date)&&e.push(t)}))})),n<15?i((function(e){return e+1})):e}(),setSize:i,isValidating:a})]})}function De(){document.title="Discover";var e=Object(a.useState)(!0),t=Object(m.a)(e,2),r=(t[0],t[1],Object(s.h)().search),n=new URLSearchParams(r);console.log("\ud83d\ude80 ~ file: Discover.jsx ~ line 29 ~ Discover ~ searchQuery",n.toString());var i,c,o=n.get("media_type")||"movie",l={mediaType:n.get("media_type"),sortBy:n.get("sort_by"),voteAverage:n.get("vote_average")||"",year:n.get("year")||""};"movie"===o&&(i="discover/movie",c="sort_by=".concat(l.sortBy,"&vote_average.lte=").concat(l.voteAverage,"&include_adult=false&year=").concat(l.year,"&primary_release_year=&with_genres=")),"tv"===o&&(i="discover/tv",c="sort_by=".concat(l.sortBy,"&vote_average.lte=").concat(l.voteAverage,"&include_adult=false&first_air_date_year=").concat(l.year,"&primary_release_year=&with_genres="));var d=Object(Q.b)((function(e){return"".concat(q(i),"&").concat(c,"&page=").concat(e+1)}),J),j=d.data,h=d.error,b=d.setSize;if(!j)return Object(v.jsx)(Ce.a,{color:"RGB(240, 5, 75)",css:"margin: 0 auto;",size:100});if(h)return Object(v.jsx)("h1",{style:{margin:"auto",color:"red"},children:"Error!"});var u=[],p=[];return"movie"===o&&j.forEach((function(e){u.push.apply(u,Object(V.a)(Y(e.results,"movie")))})),"tv"===o&&j.forEach((function(e){p.push.apply(p,Object(V.a)(Y(e.results,"tv")))})),Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(Le,{media:"movie"===o?u:p,setSize:b,totalResults:j[0].total_results})})}var Fe=Object(u.a)((function(e){return{root:{display:"grid",gridTemplateColumns:"repeat(15, 1fr)"},container:{padding:"0 .5rem",paddingTop:"1rem",minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center"},btn:{width:"10%",margin:"0 auto"}}})),Ae=function(){document.title="Watch list";Fe();var e=Object(a.useContext)(re).list;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(A,{pageTitle:"Watch list"}),0===e.length?Object(v.jsx)("h2",{style:{fontWeight:"300",margin:"auto",opacity:".5"},children:"Nothing here yet"}):Object(v.jsx)(fe,{children:e.map((function(e,t){return Object(v.jsx)(ye,{index:t,children:Object(v.jsx)(ve,{movie:e},t)})}))})]})},He=r(194),Pe=r(191);function Me(){var e=Object(s.g)(),t=Object(w.a)((function(e){return e.breakpoints.down("md")})),r=new URLSearchParams(e.location.search),i=r.get("query"),c=r.get("media_type"),o=n.a.useState(c),l=Object(m.a)(o,2),d=l[0],j=l[1];Object(a.useEffect)((function(){j(c)}),[c]);var h=Object(Q.b)((function(e){return"".concat(q("search/movie"),"&include_adult=false&query=").concat(i,"&page=").concat(e+1)}),J),b=h.data,u=h.error,p=h.setSize,g=Object(Q.b)((function(e){return"".concat(q("search/tv"),"&include_adult=false&query=").concat(i,"&page=").concat(e+1)}),J),x=g.data,O=g.error,f=g.setSize;if(!b||!x)return Object(v.jsx)(Ce.a,{color:"RGB(240, 5, 75)",css:"margin: auto;",size:100});if(u||O)return Object(v.jsx)("h1",{children:"Error!"});var y=b[0].total_results,_=x[0].total_results,S=[],C=[];b.forEach((function(e){return S.push.apply(S,Object(V.a)(Y(e.results,"movie")))})),x.forEach((function(e){return C.push.apply(C,Object(V.a)(Y(e.results,"tv")))}));var k=function(e,t){return Object(v.jsxs)("h4",{style:{display:"flex",gap:10,fontWeight:300,fontSize:"1.5rem",textTransform:"capitalize",color:"white"},children:[e,":",Object(v.jsx)("span",{style:{fontWeight:500},children:t})]})};return Object(v.jsxs)(v.Fragment,{children:[t&&Object(v.jsxs)(T.a,{variant:"h1",style:{textAlign:"center",margin:"2rem 0"},children:["Results for: ",Object(v.jsx)("br",{}),i.toUpperCase()]}),Object(v.jsxs)(He.a,{style:{margin:"2rem"},value:"movies"===d?0:1,onChange:function(t,a){var n=a?"tv":"movies";r.set("media_type",n),e.push("search?".concat(r.toString()))},indicatorColor:"primary",textColor:"primary",centered:!0,children:[Object(v.jsx)(Pe.a,{label:k("Movies",y)}),Object(v.jsx)(Pe.a,{label:k("Tv Shows",_)})]}),"movies"===c?Object(v.jsx)(Le,{media:S,setSize:p,totalResults:y}):Object(v.jsx)(Le,{media:C,setSize:f,totalResults:_})]})}var Ge=function(e){var t=e.children;return Object(v.jsx)(Oe.a,{container:!0,spacing:1,children:t})},Ue=function(e){var t=e.children;return Object(v.jsx)(Oe.a,{item:!0,xs:12,md:6,lg:6,children:t})},Ve=Object(u.a)((function(e){return{poster:{maxWidth:"100px",maxHeight:"100px",borderRadius:"50%",objectFit:"cover",objectPosition:"top"},itemWrapper:{maxHeight:"116px",display:"flex",flexDirection:"row",backgroundColor:"hsla(0, 100%, 100%,.08)",padding:".5rem 1rem"},content:{alignSelf:"center",marginLeft:"2rem"},paragraph:{fontSize:"1.5rem",fontWeight:"700","& span":{fontSize:"1.2rem",fontWeight:"100"}}}}));function Qe(e){var t=Ve(),r=e.id,a="movie"===e.mediaType?"movie/".concat(r,"/credits"):"tv/".concat(r,"/credits"),n=Object(Q.a)(q(a),J),i=n.data,c=n.error;if(!i)return Object(v.jsx)("h3",{children:"Loading..."});if(c)return Object(v.jsx)("h3",{children:"Error!"});return Object(v.jsx)(Ge,{children:i.cast.map((function(e){return Object(v.jsx)(Ue,{children:Object(v.jsxs)("div",{className:t.itemWrapper,children:[Object(v.jsx)(C.a,{className:t.poster,component:"img",src:(r=e.profile_path,r?"https://image.tmdb.org/t/p/original".concat(r):"https://www.translationvalley.com/wp-content/uploads/2020/03/no-iamge-placeholder.jpg"),alt:"".concat(e.name," profile image")}),Object(v.jsx)(ge.a,{className:t.content,children:Object(v.jsxs)(T.a,{variant:"body1",component:"p",className:t.paragraph,children:[e.name," ",e.character&&Object(v.jsxs)(T.a,{variant:"body1",component:"span",children:[" ","as ",e.character]})]})})]})},e.id);var r}))})}var Je=Object(u.a)((function(e){return{poster:{width:"100px",height:"150px"},itemWrapper:{display:"flex",flexDirection:"row",backgroundColor:"hsla(0, 100%, 100%,.08)",padding:".5rem 1rem"},content:{alignSelf:"center",marginLeft:"2rem"},paragraph:{color:"white",fontSize:"1.5rem",fontWeight:"700","& span":{fontSize:"1.2rem",fontWeight:"100"}}}}));function qe(e){var t=e.id,r=e.mediaType,a=(e.fromTitle,Je()),n="movie"===r?"movie/".concat(t,"/recommendations"):"tv/".concat(t,"/recommendations"),i=Object(Q.b)((function(e){return"".concat(q(n),"&page=").concat(e+1)}),J),c=i.data,s=i.error,l=i.setSize;if(!c)return Object(v.jsx)("h3",{children:"Loading..."});if(s)return Object(v.jsx)("h3",{children:"Error!"});var d=c[0].total_results,j=[];c.forEach((function(e){return j.push.apply(j,Object(V.a)(e.results))}));j.length;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(Ge,{children:j.map((function(e){return Object(v.jsx)(Ue,{children:Object(v.jsx)(o.b,{to:{pathname:"/recommended/selected",search:"?media_type=".concat(e.media_type,"&id=").concat(e.id,"&name=").concat(e.title||e.name)},children:Object(v.jsxs)("div",{className:a.itemWrapper,children:[Object(v.jsx)(me.LazyLoadImage,{className:a.poster,height:"100%",width:"100px",effect:"blur",alt:"".concat(e.title," poster"),src:(t=e.poster_path,t?"https://image.tmdb.org/t/p/original".concat(t):"https://www.translationvalley.com/wp-content/uploads/2020/03/no-iamge-placeholder.jpg"),threshold:400}),Object(v.jsx)(ge.a,{className:a.content,children:Object(v.jsxs)(T.a,{variant:"body1",component:"p",className:a.paragraph,children:[e.title||e.name," "]})})]})})},e.id);var t}))}),d<=j.length?Object(v.jsx)(T.a,{variant:"h4",style:{margin:"1rem auto"},children:"That is it"}):Object(v.jsx)(p.a,{variant:"contained",color:"primary",onClick:function(){l((function(e){return e+1}))},style:{width:"20%",padding:".5rem 0",margin:"1rem auto"},children:"Show More"})]})}var Ye=r(79),Xe=r.n(Ye),Ze=Object(u.a)((function(e){return{videPlayer:Object(b.a)({minWidth:"300px",margin:"1.5rem auto",aspectRatio:"16/9"},e.breakpoints.down("sm"),{aspectRatio:"1/1"})}}));function Ke(e){var t=e.id,r=e.mediaType,a=Ze(),n=(Object(w.a)((function(e){return e.breakpoints.down("md")})),Object(w.a)((function(e){return e.breakpoints.down("sm")}))),i=Object(Q.a)(q("".concat(r,"/").concat(t,"/videos")),J),c=i.data,o=i.error;if(!c)return Object(v.jsx)(Ce.a,{color:"RGB(240, 5, 75)",css:"margin: 0 auto;",size:100});if(o)return Object(v.jsx)("h2",{children:"Error!"});var s=c.results;function l(e){var t=[];return e.filter((function(e){return"trailer"===e.type.toLowerCase()||"teaser"===e.type.toLowerCase()})).forEach((function(e){var r="https://www.youtube.com/watch?v=".concat(e.key);if(Xe.a.canPlay(r))return t.push([r])})),t.slice(0,2)}return Object(v.jsx)(v.Fragment,{children:l(s).length?Object(v.jsxs)(Oe.a,{item:!0,lg:3,md:4,sm:12,className:a.gridItem,children:[Object(v.jsx)(T.a,{variant:"h2",style:{textAlign:"center"},children:"Trailers"}),l(s).map((function(e){return Object(v.jsx)(Xe.a,{className:a.videPlayer,playing:!1,controls:!0,width:"100%",height:n?"13rem":"40%",url:e},e)}))]}):""})}var $e=Object(u.a)((function(e){return{container:{position:"fixed",top:0,left:0,width:"100%",height:"100vh",zIndex:-5},image:{width:"100%",height:"100vh",objectFit:"cover",objectPosition:"50% 50%"},overlay:{position:"inherit",top:0,left:0,width:"100%",height:"100vh",background:"radial-gradient(circle, rgba(0,54,77,.8) 10% , rgba(0,11,15,0.98) 70%)"}}}));function et(e){var t=$e(),r=e.backdropPath,a=e.title,n="https://image.tmdb.org/t/p/original/".concat(r);return Object(v.jsxs)("div",{className:t.container,children:[Object(v.jsx)("img",{src:n,alt:"".concat(a," poster"),className:t.image}),Object(v.jsx)("div",{className:t.overlay})]})}function tt(e){var t,r,a=Math.trunc(e/60),n=e%60;return a||n?"".concat((r=a,0===r?"":1===r?"0".concat(r," hour"):r<10?"0".concat(r," hours"):r>10?"".concat(r," hours"):void 0)," ").concat(0===(t=n)?"":1===t?"0".concat(t," minute"):t<10?"0".concat(t," minutes"):t>10?"".concat(t," minutes"):void 0):"No info"}function rt(e){var t=e.mediaData,r=(0,e.useStyles)(),a=t.first_air_date,n=t.next_episode_to_air,i=t.last_air_date,c=t.number_of_seasons,o=t.number_of_episodes,s=t.episode_run_time,l=t.overview;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(T.a,{variant:"h5",paragraph:!0,children:[a.slice(0,4)," ~"," ",n?"next episode: ".concat(n.air_date.split("-").reverse().join("/")):i.slice(0,4)]}),Object(v.jsxs)(T.a,{variant:"h5",paragraph:!0,children:["Seasons: ",c]}),Object(v.jsxs)(T.a,{variant:"h5",paragraph:!0,children:["Total Episodes: ",o]}),Object(v.jsxs)(T.a,{variant:"h5",paragraph:!0,children:["Runtime per episode: ",tt(s[0])]}),Object(v.jsx)(T.a,{variant:"h6",className:r.overview,children:l})]})}function at(e){var t,r=e.mediaData,a=(0,e.useStyles)(),n=r.release_date,i=r.runtime,c=r.overview;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(T.a,{variant:"h5",paragraph:!0,children:(t=n,t.split("-").slice(0,1).reverse().join(" "))}),Object(v.jsx)(T.a,{variant:"h5",paragraph:!0,children:tt(i)}),Object(v.jsx)(T.a,{variant:"p",paragraph:!0,className:a.overview,children:c})]})}var nt=Object(u.a)((function(e){return{wrapper:{minHeight:"94vh",display:"flex",alignItems:"center",justifyContent:"center"},gridItem:Object(b.a)({display:"flex",flexDirection:"column",width:"100%"},e.breakpoints.down("sm"),{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",margin:"3rem 0"}),gridItemDetails:{minHeight:"550px"},title:Object(b.a)({fontWeight:800},e.breakpoints.down("sm"),{margin:"2.5rem",textAlign:"center"}),genres:Object(b.a)({fontSize:"1.5rem",lineHeight:"1.7",margin:"1.5rem 0",fontWeight:100},e.breakpoints.down("sm"),{textAlign:"center"}),overview:Object(b.a)({minHeight:"7rem",marginTop:"auto",marginRight:"2rem",lineHeight:1.8,columnCount:2,columnFill:"auto",columnGap:"5ch"},e.breakpoints.down("md"),{columnCount:1,marginRight:0}),tabs:{marginBottom:"1rem","& .MuiTabs-flexContainer":{flexDirection:"row"}},tab:Object(b.a)({color:"white",fontSize:".9rem",fontWeight:"800",backgroundColor:"hsla(0,100%,100%, .3)",marginRight:".5rem"},e.breakpoints.down("sm"),{width:"50%"})}}));function it(){var e=nt(),t=Object(s.g)(),r=new URLSearchParams(t.location.search),n=JSON.parse(r.get("id")),i=r.get("media_type"),c=Object(a.useState)(0),o=Object(m.a)(c,2),l=o[0],d=o[1],j=Object(Q.a)(q("".concat(i,"/").concat(n)),J),h=j.data,b=j.error;if(!h)return Object(v.jsx)("div",{style:{display:"flex",height:"100vh",width:"100%"},children:Object(v.jsx)(Ce.a,{color:"RGB(240, 5, 75)",css:"margin: auto;",size:100})});if(b)return Object(v.jsx)("h2",{children:"Fetching media data error!"});var u=h.backdrop_path,p=h.genres;console.log("\ud83d\ude80 ~ file: ContentDetails.jsx ~ line 126 ~ ContentDetails ~ mediaData",h);var g=h.title||h.name,x=Y([h],i);document.title=g;var O=[Object(v.jsx)(Qe,{id:n,mediaType:i}),Object(v.jsx)(qe,{id:n,mediaType:i})];return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("div",{className:e.wrapper,children:[Object(v.jsx)(et,{backdropPath:u,title:g}),Object(v.jsxs)(Oe.a,{container:!0,children:[Object(v.jsxs)(Oe.a,{item:!0,lg:9,md:8,sm:12,className:e.gridItem,style:{minHeight:"550px"},children:[Object(v.jsx)(T.a,{variant:"h1",paragraph:!0,className:e.title,children:g}),Object(v.jsx)(he,{movie:x[0],type:"large"}),Object(v.jsx)(T.a,{variant:"overline",className:e.genres,children:p.map((function(e){return"".concat(e.name,"  ")}))}),"movie"===i?Object(v.jsx)(at,{mediaData:h,useStyles:nt}):Object(v.jsx)(rt,{mediaData:h,useStyles:nt})]}),Object(v.jsx)(Ke,{id:n,mediaType:i})]})]}),Object(v.jsxs)(He.a,{className:e.tabs,value:l,onChange:function(e,t){d(t)},indicatorColor:"secondary",textColor:"secondary",children:[Object(v.jsx)(Pe.a,{label:"Cast",className:e.tab}),Object(v.jsx)(Pe.a,{label:"Recommended",className:e.tab})]}),O[l]]})}var ct=Object(l.a)({typography:{htmlFontSize:20}});ct=Object(d.a)(ct);var ot=function(){return Object(v.jsxs)("div",{className:"App",style:{maxWidth:"100vw",display:"flex"},children:[Object(v.jsx)(h.a,{position:"top-center",autoClose:2500,hideProgressBar:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,limit:3}),Object(v.jsx)(j.a,{theme:ct,children:Object(v.jsxs)(o.a,{basename:"/movie-list",children:[Object(v.jsx)(B,{}),Object(v.jsx)("main",{style:{maxWidth:"100vw",minHeight:"100vh",display:"flex",flexDirection:"column",flexGrow:"2",padding:"0 .5rem"},children:Object(v.jsx)(s.d,{children:Object(v.jsxs)(ae,{children:[Object(v.jsx)(s.b,{exact:!0,path:"/",children:Object(v.jsx)(s.a,{exact:!0,to:"/trending"})}),Object(v.jsx)(s.b,{exact:!0,path:"/trending",component:Ne}),Object(v.jsx)(s.b,{exact:!0,path:"/newest",component:ze}),Object(v.jsx)(s.b,{exact:!0,path:"/upcoming",component:Be}),Object(v.jsxs)(s.b,{exact:!0,path:"/discover",children:[Object(v.jsx)(U,{}),Object(v.jsx)(De,{})]}),Object(v.jsx)(s.b,{exact:!0,path:"/watchlist",component:Ae}),Object(v.jsx)(s.b,{exact:!0,path:"/search",component:Me}),Object(v.jsx)(s.b,{exact:!0,path:["/search/:type/:id/:title","/trending/selected","/newest/selected","/upcoming/selected","/discover/selected","/watchlist/selected","/recommended/selected"],component:it})]})})})]})})]})};c.a.render(Object(v.jsx)(ot,{}),document.getElementById("root"))}},[[128,14,15]]]);
//# sourceMappingURL=main.4a24d475.chunk.js.map