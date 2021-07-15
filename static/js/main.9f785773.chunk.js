(this.webpackJsonpmovie_list=this.webpackJsonpmovie_list||[]).push([[0],{111:function(e,t,r){},128:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),i=r(10),c=r.n(i),o=(r(111),r(26)),s=r(13),l=r(101),d=r(198),j=r(192),h=r(58),b=r(14),m=r(11),u=r(172),p=r(175),g=r(94),x=r.n(g),O=r(1),f=Object(u.a)((function(e){return{searchInput:{maxWidth:"10rem",borderBottom:"1px solid",backgroundColor:"transparent",borderStyle:"none",fontFamily:"inherit",fontSize:"1rem",color:"white",padding:".5rem .2rem",transition:"border-color .2s ease-in","&:focus":{outline:0}},searchBtn:{minWidth:"45px",minHeight:"35px",border:"1px solid white",borderRadius:"0 5px 5px 0",backgroundColor:"transparent",padding:0,"&:hover":{backgroundColor:"rgba(255,255,255, .2)",borderColor:"white"}},searchIconBtn:{fontSize:"2rem",padding:".2rem ",fill:"white"}}}));function v(e){var t=e.setOpenMenu,r=f(),n=Object(s.g)(),i=Object(a.useState)(!1),c=Object(b.a)(i,2),o=c[0],l=c[1];return Object(O.jsx)("div",{style:{display:"flex"},children:Object(O.jsxs)("form",{className:r.form,onSubmit:function(e){return function(e){var r=e.target[0].value.trim().toLowerCase(),a=new RegExp("[A-Za-z0-9]");if(!a.test(r))return l(!0);n.location.pathname="/";var i=new URLSearchParams({query:r,media_type:"movie"});return n.push("search?".concat(i)),t(!1),a.test(r)?(l(!1),e.target[0].value=""):void 0}(e)},children:[Object(O.jsx)("input",{type:"text",placeholder:"Search a title",style:o?{borderColor:"#900603"}:{borderColor:"white"},className:r.searchInput}),Object(O.jsx)(p.a,{style:o?{borderColor:"#900603"}:{borderColor:"white"},className:r.searchBtn,variant:"outlined",type:"submit",color:"secondary",disableRipple:!0,children:Object(O.jsx)(x.a,{style:o?{fill:"#900603"}:{fill:"white"},className:r.searchIconBtn})})]})})}var y=r(22),w=r(176),S=r(177),C=r(196),_=r(179),k=r(180),N=r(181),z=r(182),T=r(183),I=r.p+"static/media/logo_transparent.41790b04.png",L=r.p+"static/media/tmdb-2.de1a664e.svg",W=r(95),R=r.n(W),E=Object(u.a)((function(e){var t;return{menuIcon:{position:"fixed",top:"2rem",left:"2rem",transition:"opacity .2s ease-in-out",zIndex:2e4},drawerPaper:Object(m.a)({width:"357px",display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center",backgroundColor:"transparent",border:"none"},e.breakpoints.down("md"),{minWidth:"300px",maxWidth:"40%",width:"40%",backgroundColor:"#202B34"}),navLink:{width:"100%",textTransform:"capitalize",color:"rgba(255, 255, 255, 0.5)"},list:{width:"100%"},listItem:(t={display:"flex",padding:"1.5rem 25%"},Object(m.a)(t,e.breakpoints.down("md"),{padding:".8rem 25%"}),Object(m.a)(t,e.breakpoints.down("sm"),{padding:".5rem 25%"}),t),typography:{fontWeight:100},icon:{marginRight:"1.3rem",fontSize:"2rem",fill:"rgba(255, 255, 255, 0.5)"},logo:Object(m.a)({width:"9rem"},e.breakpoints.down("md"),{width:"10rem"})}}));function B(){var e=E(),t=["trending_up","theaters","arrow_upward","movie_filter","star","settings"],r=Object(a.useState)(!1),n=Object(b.a)(r,2),i=n[0],c=n[1],s=Object(y.a)(),l=Object(w.a)(s.breakpoints.down("md"));return Object(O.jsxs)(O.Fragment,{children:[l&&Object(O.jsx)(S.a,{className:e.menuIcon,style:i?{visibility:"hidden",opacity:"0"}:{visibility:"visible",opacity:"1"},color:"primary",onClick:function(){return c(!0)},children:Object(O.jsx)(R.a,{})}),Object(O.jsx)("nav",{style:l?{minWidth:0}:{height:"100vh",flex:"0 0 350px"},children:Object(O.jsxs)(C.a,{open:i,onClose:function(){return c(!1)},variant:l?"temporary":"permanent",classes:{paper:e.drawerPaper},children:[Object(O.jsx)(_.a,{className:e.logo,component:"img",alt:"Logo",image:I}),Object(O.jsx)(v,{setOpenMenu:c}),Object(O.jsx)(k.a,{className:e.list,children:["trending","newest","upcoming","discover","watchlist"].map((function(r,a){return Object(O.jsx)(o.c,{to:"/".concat(r),activeStyle:{color:"white",fill:"white"},className:e.navLink,onClick:function(){return c(!1)},children:Object(O.jsxs)(N.a,{button:!0,className:e.listItem,children:[Object(O.jsx)(z.a,{className:e.icon,children:t[a]}),Object(O.jsx)(T.a,{variant:"h4",className:e.typography,children:r})]})},a)}))}),Object(O.jsx)(_.a,{className:e.logo,component:"img",alt:"The movie data base logo",image:L})]})})]})}var D=r(71),F=r(184),H=r(197),A=r(193),P=Object(u.a)((function(e){return{wrapper:{display:"flex",justifyContent:"space-evenly"},formControl:{minWidth:150,margin:"2rem 0"}}}));function M(){var e=P(),t=Object(s.g)();console.log("History ",t);var r=Object(a.useState)({media_type:"movie"}),n=Object(b.a)(r,2),i=n[0],c=n[1],o=new URLSearchParams(i);Object(a.useEffect)((function(){t.push("/discover?".concat(o.toString()),Object(D.a)({},i))}),[i]);var l=function(e){e.preventDefault();var t=e.target.id,r=e.target.value;c((function(e){return Object(D.a)(Object(D.a)({},e),{},Object(m.a)({},t,r))}))};return Object(O.jsxs)("div",{className:e.wrapper,children:[Object(O.jsxs)(F.a,{className:e.formControl,children:[Object(O.jsx)(H.a,{id:"media_type-select",children:"Media Type"}),Object(O.jsxs)(A.a,{labelId:"media_type-select",id:"media_type",native:!0,value:i.media_type,onChange:l,children:[Object(O.jsx)("option",{"aria-label":"None",value:""}),Object(O.jsx)("option",{value:"movie",children:"Movies"}),Object(O.jsx)("option",{value:"tv",children:"Tv Shows"})]})]}),Object(O.jsxs)(F.a,{className:e.formControl,children:[Object(O.jsx)(H.a,{id:"sort-by-select",children:"Sort By"}),Object(O.jsxs)(A.a,{labelId:"sort-by-select",id:"sort-by",native:!0,value:i.sort_by,onChange:l,children:[Object(O.jsx)("option",{"aria-label":"None",value:""}),Object(O.jsx)("option",{value:"popularity.desc",children:"Popularity High"}),Object(O.jsx)("option",{value:"popularity.asc",children:"Popularity Low"}),Object(O.jsx)("option",{value:"release_date.desc",children:"Release Date Newer"}),Object(O.jsx)("option",{value:"release_date.asc",children:"Release Date Older"}),Object(O.jsx)("option",{value:"vote_average.desc",children:"Vote Average High"}),Object(O.jsx)("option",{value:"vote_average.asc",children:"Vote Average Low"}),Object(O.jsx)("option",{value:"vote_count.desc",children:"Vote Count High"}),Object(O.jsx)("option",{value:"vote_count.asc",children:"Vote Count Low"})]})]}),Object(O.jsxs)(F.a,{className:e.formControl,children:[Object(O.jsx)(H.a,{id:"vote-average-select",children:"Vote Average"}),Object(O.jsxs)(A.a,{labelId:"vote-average-select",id:"vote-average",native:!0,value:i.vote_average,onChange:l,children:[Object(O.jsx)("option",{"aria-label":"None",value:""}),function(e){for(var t=[],r=e;r>=1;r--)t.push(r);return t}(10).map((function(e){return Object(O.jsx)("option",{value:e,children:e})}))]})]}),Object(O.jsxs)(F.a,{className:e.formControl,children:[Object(O.jsx)(H.a,{id:"year-select",children:"Year"}),Object(O.jsxs)(A.a,{labelId:"year-select",id:"year",native:!0,value:i.year,onChange:l,children:[Object(O.jsx)("option",{"aria-label":"None",value:""}),function(e){for(var t=[],r=(new Date).getFullYear();r>e;r--)t.push(r);return t}(1900).map((function(e){return Object(O.jsx)("option",{value:e,children:e})}))]})]})]})}var G=r(24),U=r(15),V=function(){return fetch.apply(void 0,arguments).then((function(e){return e.json()}))};function Q(e){return"https://api.themoviedb.org/3/".concat(e,"?api_key=").concat("cd001a6467f4a6dd11d1fcd4ae1044a7")}function J(e,t){var r=[];return e.forEach((function(e){r.push(Object.assign({},e,{media_type:"".concat(t)}))})),r}var q=Object(a.createContext)(),Y=function(e){var t=e.children,r=Object(U.a)(Q("genre/movie/list"),V),a=r.data,n=r.error,i=Object(U.a)(Q("genre/tv/list"),V),c=i.data,o=i.error;if(!a||!c)return Object(O.jsx)("h2",{children:"Loading..."});if(n||o)return Object(O.jsx)("h2",{children:"Error!!!"});var s=a.genres,l=c.genres;return Object(O.jsx)(q.Provider,{value:{moviesGenres:s,showsGenres:l},children:t})},X=r(185);function Z(e){var t=e.genreIds,r=e.mediaType,n=Object(a.useState)([]),i=Object(b.a)(n,2),c=i[0],o=i[1],s=Object(a.useContext)(q),l=s.moviesGenres,d=s.showsGenres,j="movie"===r?l:d;return Object(a.useEffect)((function(){o(j.filter((function(e){return t.some((function(t){return e.id===t||e.id===t.id}))})))}),[]),Object(O.jsx)(X.a,{style:{display:"flex",justifyContent:"center"},children:Object(O.jsx)(T.a,{style:{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",color:"#adb5bd",fontSize:"12px",lineHeight:"25px",wordSpacing:".5ch",fontWeight:100},children:function(){var e=[];return c.forEach((function(t){return e.push(t.name)})),e.sort().join(" ")}()})})}r(118);var K=Object(a.createContext)();function $(e){var t=JSON.parse(localStorage.getItem("movie-list_watchlist"))||[],r=Object(a.useState)(t),n=Object(b.a)(r,2),i=n[0],c=n[1];Object(a.useEffect)((function(){localStorage.setItem("movie-list_watchlist",JSON.stringify(i))}),[i]);var o={hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0};return Object(O.jsx)(K.Provider,{value:{list:i,addItem:function(e){var t=e.title||e.name;h.b.success(Object(O.jsxs)("p",{style:{textAlign:"center"},children:[Object(O.jsx)("b",{children:t})," has been added to Watch List"]}),o),c((function(t){return[].concat(Object(G.a)(t),[e])}))},removeItem:function(e){var t=e.title||e.name;h.b.warn(Object(O.jsxs)("p",{style:{textAlign:"center"},children:[Object(O.jsx)("b",{children:t})," has been removed from Watch List"]}),o),c(i.filter((function(t){return t.id!==e.id})))}},children:e.children})}var ee=r(178),te=r(186),re=r(96),ae=r.n(re),ne=r(97),ie=r.n(ne),ce=Object(u.a)((function(e){return{backToTopBtn:Object(m.a)({minWidth:"70px",minHeight:"70px",borderRadius:"50%",position:"fixed",bottom:"5rem",right:"5rem",zIndex:"10000",cursor:"pointer",backgroundColor:"rgb(58, 165, 170)",transition:"none",boxShadow:"0 1px 15px 1px rgba(0, 0, 0, .5)","&:hover":{boxShadow:"0 1px 15px 3px rgba(0, 0, 0, .9)",backgroundColor:"rgb(64, 191, 198)"}},e.breakpoints.down("sm"),{minWidth:"60px",minHeight:"60px",bottom:"2rem",right:"2rem"}),backToTopIcon:Object(m.a)({fontSize:"2.5rem"},e.breakpoints.down("sm"),{fontSize:"1.5rem"}),watchListSmallBtn:Object(m.a)({width:"15%",height:"7.2%",position:"absolute",top:"10px",left:"10px",zIndex:"500"},e.breakpoints.down("sm"),{top:"5px",left:"5px"}),watchListIcon:Object(m.a)({fontSize:"3.5rem",opacity:".8",transition:"opacity .2s ease","&:hover":{opacity:"1"}},e.breakpoints.down("sm"),{fontSize:"2.3rem"}),watchListLargeInactiveBtn:{width:"fit-content",borderColor:"rgb(255,147,79)",color:"rgb(255,147,79)","&:hover":{backgroundColor:"rgb(255,147,79)",borderColor:"rgb(255,147,79)",color:"rgb(255,255,255)"}},watchListLargeActiveBtn:{width:"fit-content",backgroundColor:"rgb(255,147,79)",borderColor:"rgb(255,147,79)",color:"rgb(255,255,255)","&:hover":{backgroundColor:"rgb(247, 108, 20)",borderColor:"rgb(247, 108, 20)",color:"rgb(255,255,255)"}}}})),oe=function(){var e=ce(),t=Object(a.useState)(!1),r=Object(b.a)(t,2),n=r[0],i=r[1];return document.onscroll=function(e){var t=e.target.scrollingElement.scrollTop;return i(t>600)},Object(O.jsx)(ee.a,{direction:"up",in:n,mountOnEnter:!0,unmountOnExit:!0,children:Object(O.jsx)(p.a,{onClick:function(){return window.scrollTo({top:0,behavior:"smooth"})},className:e.backToTopBtn,variant:"contained",color:"primary",children:Object(O.jsx)(ae.a,{className:e.backToTopIcon,fontSize:"large"})})})},se=function(e){var t=e.movie,r=e.type,n=ce(),i=Object(a.useContext)(K),c=i.list,o=i.addItem,s=i.removeItem,l=c.some((function(e){return e.id===t.id}));return"large"===r?Object(O.jsx)(p.a,{onClick:l?function(){return s(t)}:function(){return o(t)},variant:l?"contained":"outlined",className:l?n.watchListLargeActiveBtn:n.watchListLargeInactiveBtn,children:l?"Remove from watch list":"Add to watch list"}):"small"===r?Object(O.jsx)(te.a,{onClick:l?function(){return s(t)}:function(){return o(t)},className:n.watchListSmallBtn,children:Object(O.jsx)(ie.a,{className:n.watchListIcon,style:l?{fill:"rgb(255,147,79)",opacity:"1"}:{stroke:"rgb(255,147,79)",strokeWidth:"1.5px",fill:"transparent"}})}):void 0},le=r(69),de=(r(85),r(187)),je=r(188),he=r(131),be=r(189),me=Object(u.a)((function(e){var t,r;return{root:{position:"relative",display:"flex",flexDirection:"column",justifyItems:"flex-start",border:0,backgroundColor:"transparent",boxShadow:"3px 3px 10px 2px rgba(0,0,0, .2)"},cardActionArea:{height:"100%",transition:"all .2s ease",zIndex:"200","&:hover":{backgroundColor:"rgba(255,255,255,.2)"}},img:{aspectRatio:"2/3"},cardContent:{minHeight:"70px",display:"flex",flexDirection:"column",justifyContent:"space-around",textAlign:"center",margin:".2rem 0",padding:"0 .4rem"},title:Object(m.a)({padding:"0 .5rem",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",color:"#fff"},e.breakpoints.down("sm"),{padding:".5rem .2rem"}),paragraph:{color:"#fff",lineHeight:"1.5rem"},score:(t={width:"38px",height:"38px",padding:".2rem",position:"absolute",top:"10px",right:"10px",borderWidth:"3px",borderStyle:"solid",borderRadius:"50%",color:"white",backgroundColor:"rgba(0,0,0, .9)",boxShadow:"0 0 5px 2px rgba(0,0,0,.4)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:"100"},Object(m.a)(t,e.breakpoints.down("md"),{width:"35px",height:"35px",top:"7px",right:"7px"}),Object(m.a)(t,e.breakpoints.down("sm"),{top:"2px",right:"2px",borderWidth:"2px",width:"30px",height:"30px"}),t),scoreFont:(r={fontSize:".9rem",fontWeight:700},Object(m.a)(r,e.breakpoints.down("md"),{fontSize:".8rem"}),Object(m.a)(r,e.breakpoints.down("sm"),{fontSize:".7rem"}),r)}})),ue=function(e){var t,r=e.movie,a=me(),n=r.id,i=r.poster_path,c=r.vote_average,l=r.media_type,d=r.title||r.name,j=r.genre_ids||r.genres,h=i?"https://image.tmdb.org/t/p/w200/".concat(i):"https://www.translationvalley.com/wp-content/uploads/2020/03/no-iamge-placeholder.jpg",b=(Object(s.i)().url,d.replace(/\s/g,"+")),m="?media_type=".concat(l,"&id=").concat(n,"&name=").concat(b);return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(de.a,{className:a.root,children:[Object(O.jsx)(se,{movie:r,type:"small"}),Object(O.jsx)(o.b,{to:{pathname:"/trending/selected",search:m},children:Object(O.jsxs)(je.a,{className:a.cardActionArea,children:[Object(O.jsx)(he.a,{className:a.score,style:{borderColor:"".concat((t=c,t<1?"white":t>=8?"green":t>5?"orange":t<=5?"red":void 0))},children:Object(O.jsx)(T.a,{variant:"caption",className:a.scoreFont,children:c<1?"N/A":c})}),Object(O.jsx)(le.LazyLoadImage,{className:a.img,height:"100%",width:"100%",effect:"blur",alt:"".concat(d," poster"),src:h,threshold:400}),Object(O.jsxs)(be.a,{className:a.cardContent,children:[Object(O.jsx)(T.a,{variant:"h5",className:a.title,children:d}),Object(O.jsx)(Y,{children:Object(O.jsx)(Z,{genreIds:j,mediaType:l})})]})]})})]})})},pe=r(190),ge=function(e){var t=e.children,r=Object(w.a)((function(e){return e.breakpoints.down("sm")}));return Object(O.jsx)(pe.a,{container:!0,spacing:r?1:2,justify:"flex-start",children:t})},xe=function(e){var t=e.children,r=e.index;return Object(O.jsx)(pe.a,{item:!0,xs:4,sm:3,md:3,lg:2,children:t},r)},Oe=Object(u.a)((function(e){return{root:{display:"grid",gridTemplateColumns:"repeat(15, 1fr)"},container:{padding:"0 .5rem",paddingTop:"1rem",minHeight:"50vh",display:"flex",flexDirection:"column",justifyContent:"space-between"},btn:Object(m.a)({width:"15%",margin:"1.5rem auto"},e.breakpoints.down("sm"),{width:"100%",padding:".5rem 0"})}}));function fe(e){var t=Oe(),r=e.data,a=e.sectionTitle,i=e.setShowMore,c=n.a.useState(6),o=Object(b.a)(c,2);o[0],o[1];return console.log("Data length ",r.length),Object(O.jsxs)("section",{className:t.container,children:[Object(O.jsx)("h1",{style:{fontSize:"3rem",fontWeight:200,margin:"2rem auto"},children:a}),Object(O.jsx)(ge,{children:r.map((function(e){return Object(O.jsx)(xe,{children:Object(O.jsx)(ue,{movie:e})},e.id)}))}),r.length>=100?Object(O.jsx)("h3",{style:{margin:"2rem auto"},children:"That is it!"}):Object(O.jsx)(p.a,{variant:"contained",color:"primary",className:t.btn,onClick:function(){i((function(e){return e+1}))},children:"Show More"})]})}function ve(e){var t=e.pageTitle,r=Object(w.a)((function(e){return e.breakpoints.down("md")}));Object(w.a)((function(e){return e.breakpoints.down("sm")}));return Object(O.jsx)(T.a,{variant:"h1",style:r?{display:"flex",justifyContent:"center",margin:"2.5rem 0"}:{display:"none"},children:t})}var ye=r(27),we=r.n(ye);function Se(e){var t=e.moviesQuery,r=e.showsQuery,a=e.pageTitle;document.title="".concat(a);var n=Object(U.b)((function(e){return"".concat(Q(t),"&page=").concat(e+1)}),V),i=n.data,c=n.error,o=n.setSize,s=Object(U.b)((function(e){return"".concat(Q(r),"&page=").concat(e+1)}),V),l=s.data,d=s.error,j=s.setSize;if(!i||!l)return Object(O.jsx)(we.a,{color:"RGB(240, 5, 75)",css:"color: white; margin: auto;",size:100});if(c||d)return Object(O.jsx)("h1",{style:{margin:"auto"},children:"Error!"});var h=[],b=[];return i.forEach((function(e){return h.push.apply(h,Object(G.a)(J(e.results,"movie")))})),l.forEach((function(e){return b.push.apply(b,Object(G.a)(J(e.results,"tv")))})),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(ve,{pageTitle:a}),Object(O.jsx)(fe,{data:h,sectionTitle:"Movies",setShowMore:o}),Object(O.jsx)(fe,{data:b,sectionTitle:"Tv Shows",setShowMore:j})]})}function Ce(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(Se,{moviesQuery:"trending/movie/day",showsQuery:"trending/tv/day",pageTitle:"Trending"})})}function _e(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(Se,{moviesQuery:"movie/now_playing",showsQuery:"tv/airing_today",pageTitle:"Newest"})})}var ke=r(70),Ne=r(98),ze=r(99),Te=r.n(ze);function Ie(e){var t,r,a=e.media,n=e.setSize,i=e.totalResults;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(Ne.a,{style:{paddingTop:"1rem",overflowX:"hidden"},dataLength:a.length,next:function(){return n((function(e){return e+2}))},hasMore:(t=i,r=a.length,t!==r),loader:Object(O.jsxs)("div",{style:{display:"flex"},children:[" ",Object(O.jsx)(Te.a,{color:"RGB(240, 5, 75)",css:"margin: 1rem auto;",size:10})," "]}),endMessage:Object(O.jsx)("p",{style:{display:"block",textAlign:"center",padding:"2rem 0"},children:Object(O.jsx)("b",{children:"You have seen it all"})}),children:Object(O.jsx)(ge,{children:a.map((function(e){return Object(O.jsx)(xe,{children:Object(O.jsx)(ue,{movie:e})},e.id)}))})}),Object(O.jsx)(oe,{})]})}var Le,We=r(47),Re=Object(We.css)(Le||(Le=Object(ke.a)(["\n  color: white;\n  margin: auto;\n"])));function Ee(){document.title="Upcoming";var e=Object(U.b)((function(e){return"".concat(Q("movie/upcoming"),"&page=").concat(e+1)}),V),t=e.data,r=e.error,a=e.isValidating,n=(e.mutate,e.size),i=e.setSize;if(!t)return Object(O.jsx)(we.a,{color:"RGB(240, 5, 75)",css:Re,size:100});if(r)return Object(O.jsx)("h1",{style:{margin:"auto",color:"red"},children:"Error!"});return Object(O.jsxs)("div",{children:[Object(O.jsx)(ve,{pageTitle:"Upcoming"}),Object(O.jsx)(Ie,{media:function(){var e=[],r=Date.parse(t[0].dates.minimum);return t.forEach((function(t){return t.results.forEach((function(t){return r<Date.parse(t.release_date)&&e.push(t)}))})),n<15?i((function(e){return e+1})):e}(),setSize:i,isValidating:a})]})}var Be,De=r(100),Fe=Object(We.css)(Be||(Be=Object(ke.a)(["\n  color: white;\n  margin: auto;\n"])));function He(){document.title="Discover";var e=Object(a.useState)(!0),t=Object(b.a)(e,2),r=t[0],n=(t[1],Object(s.h)().search),i=new URLSearchParams(n),c=i.get("media_type");Object(a.useEffect)((function(){var e,t=Object(De.a)(i.entries());try{for(t.s();!(e=t.n()).done;){var r=e.value;console.log("".concat(r[0]," = ").concat(r[1]))}}catch(a){t.e(a)}finally{t.f()}}),[i]);var o,l,d=Object(a.useState)(),j=Object(b.a)(d,2);j[0],j[1];"movie"===c&&(o="discover/movie",l="sort_by=&vote_average.lte=&include_adult=false&year=&primary_release_year=&with_genres="),"tv"===c&&(o="discover/tv",l="sort_by=&vote_average.lte=&include_adult=false&first_air_date_year=&primary_release_year=&with_genres=");var h=Object(U.b)((function(e){return"".concat(Q(o),"&").concat(l,"&page=").concat(e+1)}),V),m=h.data,u=h.error,p=h.setSize;if(!m)return Object(O.jsx)(we.a,{color:"RGB(240, 5, 75)",css:Fe,size:100});if(u)return Object(O.jsx)("h1",{style:{margin:"auto",color:"red"},children:"Error!"});var g=[],x=[];return r&&m.forEach((function(e){g.push.apply(g,Object(G.a)(J(e.results,"movie")))})),r||m.forEach((function(e){x.push.apply(x,Object(G.a)(J(e.results,"tv")))})),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(ve,{pageTitle:"Discover"}),Object(O.jsx)(Ie,{media:r?g:x,setSize:p,totalResults:m[0].total_results})]})}var Ae=Object(u.a)((function(e){return{root:{display:"grid",gridTemplateColumns:"repeat(15, 1fr)"},container:{padding:"0 .5rem",paddingTop:"1rem",minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center"},btn:{width:"10%",margin:"0 auto"}}})),Pe=function(){document.title="Watch list";Ae();var e=Object(a.useContext)(K).list;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(ve,{pageTitle:"Watch list"}),0===e.length?Object(O.jsx)("h2",{style:{fontWeight:"300",margin:"auto",opacity:".5"},children:"Nothing here yet"}):Object(O.jsx)(ge,{children:e.map((function(e,t){return Object(O.jsx)(xe,{index:t,children:Object(O.jsx)(ue,{movie:e},t)})}))})]})},Me=r(194),Ge=r(191);function Ue(){var e=Object(s.g)(),t=Object(w.a)((function(e){return e.breakpoints.down("md")})),r=new URLSearchParams(e.location.search),i=r.get("query"),c=r.get("media_type"),o=n.a.useState(c),l=Object(b.a)(o,2),d=l[0],j=l[1];Object(a.useEffect)((function(){j(c)}),[c]);var h=Object(U.b)((function(e){return"".concat(Q("search/movie"),"&include_adult=false&query=").concat(i,"&page=").concat(e+1)}),V),m=h.data,u=h.error,p=h.setSize,g=Object(U.b)((function(e){return"".concat(Q("search/tv"),"&include_adult=false&query=").concat(i,"&page=").concat(e+1)}),V),x=g.data,f=g.error,v=g.setSize;if(!m||!x)return Object(O.jsx)(we.a,{color:"RGB(240, 5, 75)",css:"margin: auto;",size:100});if(u||f)return Object(O.jsx)("h1",{children:"Error!"});var y=m[0].total_results,S=x[0].total_results,C=[],_=[];m.forEach((function(e){return C.push.apply(C,Object(G.a)(J(e.results,"movie")))})),x.forEach((function(e){return _.push.apply(_,Object(G.a)(J(e.results,"tv")))}));var k=function(e,t){return Object(O.jsxs)("h4",{style:{display:"flex",gap:10,fontWeight:300,fontSize:"1.5rem",textTransform:"capitalize",color:"white"},children:[e,":",Object(O.jsx)("span",{style:{fontWeight:500},children:t})]})};return Object(O.jsxs)(O.Fragment,{children:[t&&Object(O.jsxs)(T.a,{variant:"h1",style:{textAlign:"center",margin:"2rem 0"},children:["Results for: ",Object(O.jsx)("br",{}),i.toUpperCase()]}),Object(O.jsxs)(Me.a,{style:{margin:"2rem"},value:"movies"===d?0:1,onChange:function(t,a){var n=a?"tv":"movies";r.set("media_type",n),e.push("search?".concat(r.toString()))},indicatorColor:"primary",textColor:"primary",centered:!0,children:[Object(O.jsx)(Ge.a,{label:k("Movies",y)}),Object(O.jsx)(Ge.a,{label:k("Tv Shows",S)})]}),"movies"===c?Object(O.jsx)(Ie,{media:C,setSize:p,totalResults:y}):Object(O.jsx)(Ie,{media:_,setSize:v,totalResults:S})]})}var Ve=function(e){var t=e.children;return Object(O.jsx)(pe.a,{container:!0,spacing:1,children:t})},Qe=function(e){var t=e.children;return Object(O.jsx)(pe.a,{item:!0,xs:12,md:6,lg:6,children:t})},Je=Object(u.a)((function(e){return{poster:{maxWidth:"100px",maxHeight:"100px",borderRadius:"50%",objectFit:"cover",objectPosition:"top"},itemWrapper:{maxHeight:"116px",display:"flex",flexDirection:"row",backgroundColor:"hsla(0, 100%, 100%,.08)",padding:".5rem 1rem"},content:{alignSelf:"center",marginLeft:"2rem"},paragraph:{fontSize:"1.5rem",fontWeight:"700","& span":{fontSize:"1.2rem",fontWeight:"100"}}}}));function qe(e){var t=Je(),r=e.id,a="movie"===e.mediaType?"movie/".concat(r,"/credits"):"tv/".concat(r,"/credits"),n=Object(U.a)(Q(a),V),i=n.data,c=n.error;if(!i)return Object(O.jsx)("h3",{children:"Loading..."});if(c)return Object(O.jsx)("h3",{children:"Error!"});return Object(O.jsx)(Ve,{children:i.cast.map((function(e){return Object(O.jsx)(Qe,{children:Object(O.jsxs)("div",{className:t.itemWrapper,children:[Object(O.jsx)(_.a,{className:t.poster,component:"img",src:(r=e.profile_path,r?"https://image.tmdb.org/t/p/original".concat(r):"https://www.translationvalley.com/wp-content/uploads/2020/03/no-iamge-placeholder.jpg"),alt:"".concat(e.name," profile image")}),Object(O.jsx)(be.a,{className:t.content,children:Object(O.jsxs)(T.a,{variant:"body1",component:"p",className:t.paragraph,children:[e.name," ",e.character&&Object(O.jsxs)(T.a,{variant:"body1",component:"span",children:[" ","as ",e.character]})]})})]})},e.id);var r}))})}var Ye=Object(u.a)((function(e){return{poster:{width:"100px",height:"150px"},itemWrapper:{display:"flex",flexDirection:"row",backgroundColor:"hsla(0, 100%, 100%,.08)",padding:".5rem 1rem"},content:{alignSelf:"center",marginLeft:"2rem"},paragraph:{color:"white",fontSize:"1.5rem",fontWeight:"700","& span":{fontSize:"1.2rem",fontWeight:"100"}}}}));function Xe(e){var t=e.id,r=e.mediaType,a=(e.fromTitle,Ye()),n="movie"===r?"movie/".concat(t,"/recommendations"):"tv/".concat(t,"/recommendations"),i=Object(U.b)((function(e){return"".concat(Q(n),"&page=").concat(e+1)}),V),c=i.data,s=i.error,l=i.setSize;if(!c)return Object(O.jsx)("h3",{children:"Loading..."});if(s)return Object(O.jsx)("h3",{children:"Error!"});var d=c[0].total_results,j=[];c.forEach((function(e){return j.push.apply(j,Object(G.a)(e.results))}));j.length;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(Ve,{children:j.map((function(e){return Object(O.jsx)(Qe,{children:Object(O.jsx)(o.b,{to:{pathname:"/recommended/selected",search:"?media_type=".concat(e.media_type,"&id=").concat(e.id,"&name=").concat(e.title||e.name)},children:Object(O.jsxs)("div",{className:a.itemWrapper,children:[Object(O.jsx)(le.LazyLoadImage,{className:a.poster,height:"100%",width:"100px",effect:"blur",alt:"".concat(e.title," poster"),src:(t=e.poster_path,t?"https://image.tmdb.org/t/p/original".concat(t):"https://www.translationvalley.com/wp-content/uploads/2020/03/no-iamge-placeholder.jpg"),threshold:400}),Object(O.jsx)(be.a,{className:a.content,children:Object(O.jsxs)(T.a,{variant:"body1",component:"p",className:a.paragraph,children:[e.title||e.name," "]})})]})})},e.id);var t}))}),d<=j.length?Object(O.jsx)(T.a,{variant:"h4",style:{margin:"1rem auto"},children:"That is it"}):Object(O.jsx)(p.a,{variant:"contained",color:"primary",onClick:function(){l((function(e){return e+1}))},style:{width:"20%",padding:".5rem 0",margin:"1rem auto"},children:"Show More"})]})}var Ze=r(79),Ke=r.n(Ze),$e=Object(u.a)((function(e){return{videPlayer:Object(m.a)({minWidth:"300px",margin:"1.5rem auto",aspectRatio:"16/9"},e.breakpoints.down("sm"),{aspectRatio:"1/1"})}}));function et(e){var t=e.id,r=e.mediaType,a=$e(),n=(Object(w.a)((function(e){return e.breakpoints.down("md")})),Object(w.a)((function(e){return e.breakpoints.down("sm")}))),i=Object(U.a)(Q("".concat(r,"/").concat(t,"/videos")),V),c=i.data,o=i.error;if(!c)return Object(O.jsx)(we.a,{color:"RGB(240, 5, 75)",css:"margin: 0 auto;",size:100});if(o)return Object(O.jsx)("h2",{children:"Error!"});var s=c.results;function l(e){var t=[];return e.filter((function(e){return"trailer"===e.type.toLowerCase()||"teaser"===e.type.toLowerCase()})).forEach((function(e){var r="https://www.youtube.com/watch?v=".concat(e.key);if(Ke.a.canPlay(r))return t.push([r])})),t.slice(0,2)}return Object(O.jsx)(O.Fragment,{children:l(s).length?Object(O.jsxs)(pe.a,{item:!0,lg:3,md:4,sm:12,className:a.gridItem,children:[Object(O.jsx)(T.a,{variant:"h2",style:{textAlign:"center"},children:"Trailers"}),l(s).map((function(e){return Object(O.jsx)(Ke.a,{className:a.videPlayer,playing:!1,muted:!0,controls:!0,width:"100%",height:n?"13rem":"40%",url:e},e)}))]}):""})}var tt=Object(u.a)((function(e){return{container:{position:"fixed",top:0,left:0,width:"100%",height:"100vh",zIndex:-5},image:{width:"100%",height:"100vh",objectFit:"cover",objectPosition:"50% 50%"},overlay:{position:"inherit",top:0,left:0,width:"100%",height:"100vh",background:"radial-gradient(circle, rgba(0,54,77,.8) 10% , rgba(0,11,15,0.98) 70%)"}}}));function rt(e){var t=tt(),r=e.backdropPath,a=e.title,n="https://image.tmdb.org/t/p/original/".concat(r);return Object(O.jsxs)("div",{className:t.container,children:[Object(O.jsx)("img",{src:n,alt:"".concat(a," poster"),className:t.image}),Object(O.jsx)("div",{className:t.overlay})]})}function at(e){var t,r,a=Math.trunc(e/60),n=e%60;return a||n?"".concat((r=a,0===r?"":1===r?"0".concat(r," hour"):r<10?"0".concat(r," hours"):r>10?"".concat(r," hours"):void 0)," ").concat(0===(t=n)?"":1===t?"0".concat(t," minute"):t<10?"0".concat(t," minutes"):t>10?"".concat(t," minutes"):void 0):"No info"}function nt(e){var t=e.mediaData,r=(0,e.useStyles)(),a=t.first_air_date,n=t.next_episode_to_air,i=t.last_air_date,c=t.number_of_seasons,o=t.number_of_episodes,s=t.episode_run_time,l=t.overview;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(T.a,{variant:"h5",paragraph:!0,children:[a.slice(0,4)," ~"," ",n?"next episode: ".concat(n.air_date.split("-").reverse().join("/")):i.slice(0,4)]}),Object(O.jsxs)(T.a,{variant:"h5",paragraph:!0,children:["Seasons: ",c]}),Object(O.jsxs)(T.a,{variant:"h5",paragraph:!0,children:["Total Episodes: ",o]}),Object(O.jsxs)(T.a,{variant:"h5",paragraph:!0,children:["Runtime per episode: ",at(s[0])]}),Object(O.jsx)(T.a,{variant:"h6",className:r.overview,children:l})]})}function it(e){var t,r=e.mediaData,a=(0,e.useStyles)(),n=r.release_date,i=r.runtime,c=r.overview;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(T.a,{variant:"h5",paragraph:!0,children:(t=n,t.split("-").slice(0,1).reverse().join(" "))}),Object(O.jsx)(T.a,{variant:"h5",paragraph:!0,children:at(i)}),Object(O.jsx)(T.a,{variant:"p",paragraph:!0,className:a.overview,children:c})]})}var ct=Object(u.a)((function(e){return{wrapper:{minHeight:"94vh",display:"flex",alignItems:"center",justifyContent:"center"},gridItem:Object(m.a)({display:"flex",flexDirection:"column",width:"100%"},e.breakpoints.down("sm"),{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",margin:"3rem 0"}),gridItemDetails:{minHeight:"550px"},title:Object(m.a)({fontWeight:800},e.breakpoints.down("sm"),{margin:"2.5rem",textAlign:"center"}),genres:Object(m.a)({fontSize:"1.5rem",lineHeight:"1.7",margin:"1.5rem 0",fontWeight:100},e.breakpoints.down("sm"),{textAlign:"center"}),overview:Object(m.a)({minHeight:"7rem",marginTop:"auto",marginRight:"2rem",lineHeight:1.8,columnCount:2,columnFill:"auto",columnGap:"5ch"},e.breakpoints.down("md"),{columnCount:1,marginRight:0}),tabs:{marginBottom:"1rem","& .MuiTabs-flexContainer":{flexDirection:"row"}},tab:Object(m.a)({color:"white",fontSize:".9rem",fontWeight:"800",backgroundColor:"hsla(0,100%,100%, .3)",marginRight:".5rem"},e.breakpoints.down("sm"),{width:"50%"})}}));function ot(){var e=ct(),t=Object(s.g)(),r=new URLSearchParams(t.location.search),n=JSON.parse(r.get("id")),i=r.get("media_type"),c=Object(a.useState)(0),o=Object(b.a)(c,2),l=o[0],d=o[1],j=Object(U.a)(Q("".concat(i,"/").concat(n)),V),h=j.data,m=j.error;if(!h)return Object(O.jsx)(we.a,{color:"RGB(240, 5, 75)",css:"margin: 0 auto;",size:100});if(m)return Object(O.jsx)("h2",{children:"Fetching media data error!"});var u=h.backdrop_path,p=h.genres,g=h.title||h.name,x=J([h],i);document.title=g;var f=[Object(O.jsx)(qe,{id:n,mediaType:i}),Object(O.jsx)(Xe,{id:n,mediaType:i})];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:e.wrapper,children:[Object(O.jsx)(rt,{backdropPath:u,title:g}),Object(O.jsxs)(pe.a,{container:!0,children:[Object(O.jsxs)(pe.a,{item:!0,lg:9,md:8,sm:12,className:e.gridItem,style:{minHeight:"550px"},children:[Object(O.jsx)(T.a,{variant:"h1",paragraph:!0,className:e.title,children:g}),Object(O.jsx)(se,{movie:x[0],type:"large"}),Object(O.jsx)(T.a,{variant:"overline",className:e.genres,children:p.map((function(e){return"".concat(e.name,"  ")}))}),"movie"===i?Object(O.jsx)(it,{mediaData:h,useStyles:ct}):Object(O.jsx)(nt,{mediaData:h,useStyles:ct})]}),Object(O.jsx)(et,{id:n,mediaType:i})]})]}),Object(O.jsxs)(Me.a,{className:e.tabs,value:l,onChange:function(e,t){d(t)},indicatorColor:"secondary",textColor:"secondary",children:[Object(O.jsx)(Ge.a,{label:"Cast",className:e.tab}),Object(O.jsx)(Ge.a,{label:"Recommended",className:e.tab})]}),f[l]]})}var st=Object(l.a)({typography:{htmlFontSize:20}});st=Object(d.a)(st);var lt=function(){return Object(O.jsxs)("div",{className:"App",style:{maxWidth:"100vw",display:"flex"},children:[Object(O.jsx)(h.a,{position:"top-center",autoClose:2500,hideProgressBar:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,limit:3}),Object(O.jsx)(j.a,{theme:st,children:Object(O.jsxs)(o.a,{basename:"/movie-list",children:[Object(O.jsx)(B,{}),Object(O.jsx)("main",{style:{maxWidth:"100vw",minHeight:"100vh",display:"flex",flexDirection:"column",flexGrow:"2",padding:"0 .5rem"},children:Object(O.jsx)(s.d,{children:Object(O.jsxs)($,{children:[Object(O.jsx)(s.b,{exact:!0,path:"/",children:Object(O.jsx)(s.a,{exact:!0,to:"/trending"})}),Object(O.jsx)(s.b,{exact:!0,path:"/trending",component:Ce}),Object(O.jsx)(s.b,{exact:!0,path:"/newest",component:_e}),Object(O.jsx)(s.b,{exact:!0,path:"/upcoming",component:Ee}),Object(O.jsxs)(s.b,{exact:!0,path:"/discover",children:[Object(O.jsx)(M,{}),Object(O.jsx)(He,{})]}),Object(O.jsx)(s.b,{exact:!0,path:"/watchlist",component:Pe}),Object(O.jsx)(s.b,{exact:!0,path:"/search",component:Ue}),Object(O.jsx)(s.b,{exact:!0,path:["/search/:type/:id/:title","/trending/selected","/newest/selected","/upcoming/selected","/discover/selected","/watchlist/selected","/recommended/selected"],component:ot})]})})})]})})]})};c.a.render(Object(O.jsx)(lt,{}),document.getElementById("root"))}},[[128,14,15]]]);
//# sourceMappingURL=main.9f785773.chunk.js.map