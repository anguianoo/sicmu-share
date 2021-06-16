(this["webpackJsonpapollo-music-share"]=this["webpackJsonpapollo-music-share"]||[]).push([[0],{169:function(e,t,n){"use strict";n.r(t);var a,i,r=n(0),c=n.n(r),o=n(21),s=n.n(o),l=n(15),u=n(68),d=n.n(u),j=n(92),b=n(16),O=n(28),g=n(206),p=n(243),h=n(210),m=n(211),x=n(238),f=n(213),y=n(214),v=n(215),S=n(216),w=n(217),N=n(89),C=n.n(N),I=n(90),k=n.n(I),P=n(73),q=n.n(P),E=n(237),_=n(42),F=n(239),T=Object(F.a)(a||(a=Object(_.a)(["\n  mutation addOrRemoveFromQueue($input: SongInput!) {\n    addOrRemoveFromQueue(input: $input) @client\n  }\n"]))),G=Object(F.a)(i||(i=Object(_.a)(["\n  mutation addSong(\n    $title: String!\n    $artist: String!\n    $thumbnail: String!\n    $duration: Float\n    $url: String\n  ) {\n    insert_songs(\n      objects: {\n        artist: $artist\n        duration: $duration\n        thumbnail: $thumbnail\n        title: $title\n        url: $url\n      }\n    ) {\n      affected_rows\n    }\n  }\n"]))),A=n(5),Q=Object(g.a)((function(e){return{container:{display:"flex",alignItems:"center"},urlInput:{margin:e.spacing(1)},addSongButton:{margin:e.spacing(1)},dialog:{textAlign:"center"},thumbnail:{width:"90%"}}})),$={duration:0,title:"",artist:"",thumbnail:""};var R=function(){var e=Q(),t=Object(E.a)(G),n=Object(l.a)(t,2),a=n[0],i=n[1].error,c=Object(r.useState)(""),o=Object(l.a)(c,2),s=o[0],u=o[1],g=Object(r.useState)(!1),N=Object(l.a)(g,2),I=N[0],P=N[1],_=Object(r.useState)(!1),F=Object(l.a)(_,2),T=F[0],R=F[1],D=Object(r.useState)($),M=Object(l.a)(D,2),U=M[0],B=M[1];function L(e){var t=e.target,n=t.name,a=t.value;B((function(e){return Object(O.a)(Object(O.a)({},e),{},Object(b.a)({},n,a))}))}function J(){R(!1)}function W(){return(W=Object(j.a)(d.a.mark((function e(t){var n,a,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.player,!(a=n.player.player).getVideoData){e.next=6;break}i=z(a),e.next=10;break;case 6:if(!a.getCurrentSound){e.next=10;break}return e.next=9,V(a);case 9:i=e.sent;case 10:B(Object(O.a)(Object(O.a)({},i),{},{url:s}));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Y(){return(Y=Object(j.a)(d.a.mark((function e(){var t,n,i,r,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=U.url,n=U.thumbnail,i=U.duration,r=U.title,c=U.artist,e.next=4,a({variables:{url:t.length>0?t:null,thumbnail:n.length>0?n:null,duration:i>0?i:null,title:r.length>0?r:null,artist:c.length>0?c:null}});case 4:J(),B($),u(""),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("Error adding song",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function z(e){var t=e.getDuration(),n=e.getVideoData(),a=n.title,i=n.video_id;return{duration:t,title:a,artist:n.author,thumbnail:"http://img.youtube.com/vi/".concat(i,"/0.jpg")}}function V(e){return new Promise((function(t){e.getCurrentSound((function(e){e&&t({duration:Number(e.duration/1e3),title:e.title,artist:e.user.username,thumbnail:e.artwork_url.replace("-large","-t500x500")})}))}))}function H(e){var t;return null===i||void 0===i||null===(t=i.graphQLErrors[0])||void 0===t?void 0:t.extensions.path.includes(e)}Object(r.useEffect)((function(){var e=C.a.canPlay(s)||k.a.canPlay(s);P(e)}),[s]);var K=U.thumbnail,X=U.title,Z=U.artist;return Object(A.jsxs)("div",{className:e.container,children:[Object(A.jsxs)(p.a,{className:e.dialog,open:T,onClose:J,children:[Object(A.jsx)(h.a,{children:"Edit Song"}),Object(A.jsxs)(m.a,{className:e.thumbnail,children:[Object(A.jsx)("img",{src:K,height:"540px",alt:"Song thumbnail"}),Object(A.jsx)(x.a,{value:X,onChange:L,margin:"dense",name:"title",label:"Title",fullWidth:!0,error:H("title"),helperText:H("title")&&"Fill out field"}),Object(A.jsx)(x.a,{value:Z,onChange:L,margin:"dense",name:"artist",label:"Artist",fullWidth:!0,error:H("artist"),helperText:H("artist")&&"Fill out field"}),Object(A.jsx)(x.a,{value:K,margin:"dense",name:"thumbnail",label:"Thumbnail",fullWidth:!0,error:H("thumbnail"),helperText:H("thumbnail")&&"Fill out field"})]}),Object(A.jsxs)(f.a,{children:[Object(A.jsx)(y.a,{onClick:J,color:"secondary",children:"Cancel"}),Object(A.jsx)(y.a,{onClick:function(){return Y.apply(this,arguments)},variant:"outlined",color:"primary",children:"Add Song"})]})]}),Object(A.jsx)(x.a,{className:e.urlInput,onChange:function(e){return u(e.target.value)},value:s,placeholder:"Add Youtube or Soundcloud Url",fullWidth:!0,margin:"normal",type:"url",InputProps:{startAdornment:Object(A.jsx)(v.a,{position:"start",children:Object(A.jsx)(S.a,{})})}}),Object(A.jsx)(y.a,{disabled:!I,className:e.addSongButton,onClick:function(){return R(!0)},variant:"contained",color:"primary",endIcon:Object(A.jsx)(w.a,{}),children:"Add"}),Object(A.jsx)(q.a,{url:s,hidden:!0,onReady:function(e){return W.apply(this,arguments)}})]})},D=n(218),M=n(219),U=n(120),B=n(220),L=Object(g.a)((function(e){return{title:{marginLeft:e.spacing(2)}}}));var J,W=function(){var e=L();return Object(A.jsx)(D.a,{color:"primary",position:"fixed",children:Object(A.jsxs)(M.a,{children:[Object(A.jsx)(B.a,{}),Object(A.jsx)(U.a,{className:e.title,variant:"h6",component:"h1",children:"SicMu"})]})})},Y=n(247),z=n(221),V=n(222),H=n(223),K=n(224),X=n(225),Z=n(244),ee=n(226),te=n(227),ne=n(228),ae=Object(F.a)(J||(J=Object(_.a)(["\n  subscription getSongs {\n    songs(order_by: { created_at: desc }) {\n      artist\n      duration\n      id\n      thumbnail\n      title\n      url\n    }\n  }\n"])));var ie=Object(g.a)((function(e){return{container:{margin:e.spacing(3)},songInfoContainer:{display:"flex",alignItems:"center"},songInfo:{width:"100%",display:"flex",justifyContent:"space-between"},thumbnail:{objectfit:"cover",width:140,height:140}}}));function re(e){var t=e.song,n=t.id,a=ie(),i=Object(E.a)(T,{onCompleted:function(e){localStorage.setItem("queue",JSON.stringify(e.addOrRemoveFromQueue))}}),r=Object(l.a)(i,1)[0],o=c.a.useContext(we),s=o.state,u=o.dispatch,d=c.a.useState(!1),j=Object(l.a)(d,2),b=j[0],g=j[1],p=t.title,h=t.artist,m=t.thumbnail;function x(){console.log("changing")}return c.a.useEffect((function(){var e=s.isPlaying&&n===s.song.id;g(e)}),[s.song.id,s.isPlaying]),Object(A.jsx)(V.a,{className:a.container,children:Object(A.jsxs)("div",{className:a.songInfoContainer,children:[Object(A.jsx)(H.a,{image:m,className:a.thumbnail}),Object(A.jsx)("div",{className:a.songInfo,children:Object(A.jsxs)(K.a,{children:[Object(A.jsx)(U.a,{onChange:x,gutterBottom:!0,variant:"h5",component:"h2",children:p}),Object(A.jsx)(U.a,{onChange:x,variant:"body1",component:"p",children:h}),Object(A.jsxs)(K.a,{children:[Object(A.jsx)(X.a,{onClick:function(){u({type:"SET_SONG",payload:{song:t}}),u(s.isPlaying?{type:"PAUSE_SONG"}:{type:"PLAY_SONG"})},size:"small",color:"primary",children:b?Object(A.jsx)(ee.a,{color:"yellow"}):Object(A.jsx)(te.a,{color:"secondary"})}),Object(A.jsx)(Z.a,{title:"add to Playlist",children:Object(A.jsx)(X.a,{onClick:function(){r({variables:{input:Object(O.a)(Object(O.a)({},t),{},{__typename:"Song"})}})},size:"small",color:"primary",children:Object(A.jsx)(ne.a,{color:"secondary"})})})]})]})})]})})}var ce=function(){var e=Object(Y.a)(ae),t=e.data,n=e.loading,a=e.error;return n?Object(A.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",marginTop:50},children:Object(A.jsx)(z.a,{})}):a?Object(A.jsx)("div",{children:"Error fetching songs"}):Object(A.jsx)("div",{children:t.songs.map((function(e){return Object(A.jsx)(re,{song:e},e.id)}))})},oe=n(246),se=n(231),le=n(232),ue=n(229),de=n(245),je=n(230);var be=Object(g.a)({avatar:{width:44,height:44},text:{textOverflow:"ellipsis",overflow:"hidden"},container:{display:"grid",gridAutoFlow:"column",gridTemplateColumns:"50px auto 50px",gridGap:12,alignItems:"center",marginTop:10},songInfoContainer:{overflow:"hidden",whiteSpace:"nowrap"}});function Oe(e){var t=e.song,n=be(),a=Object(E.a)(T,{onCompleted:function(e){localStorage.setItem("queue",JSON.stringify(e.addOrRemoveFromQueue))}}),i=Object(l.a)(a,1)[0],r=t.thumbnail,c=t.artist,o=t.title;return Object(A.jsxs)("div",{className:n.container,children:[Object(A.jsx)(de.a,{src:r,alt:"Song thumbnail"}),Object(A.jsxs)("div",{className:n.songInfoContainer,children:[Object(A.jsx)(U.a,{variant:"subtitle2",className:n.text,children:o}),Object(A.jsx)(U.a,{color:"textSecondary",variant:"body2",className:n.text,children:c})]}),Object(A.jsx)(X.a,{onClick:function(){i({variables:{input:Object(O.a)(Object(O.a)({},t),{},{__typename:"Song"})}})},children:Object(A.jsx)(je.a,{color:"error"})})]})}var ge,pe=function(e){var t=e.queue;return Object(ue.a)((function(e){return e.breakpoints.up("md")}))&&Object(A.jsxs)("div",{style:{margin:"10px 0"},children:[Object(A.jsxs)(U.a,{color:"textSecondary",variant:"button",children:["QUEUE (",t.length,")"]}),t.map((function(e,t){return Object(A.jsx)(Oe,{song:e},t)}))]})},he=n(242),me=Object(F.a)(ge||(ge=Object(_.a)(["\n  query getQueuedSongs {\n    queue @client {\n      id\n      duration\n      title\n      artist\n      thumbnail\n      url\n    }\n  }\n"]))),xe=Object(g.a)((function(e){return{container:{display:"flex",justifyContent:"space-between"},details:{display:"flex",flexDirection:"column",padding:"0px 15px"},content:{flex:"1 0 auto"},thumbnail:{width:150},controls:{display:"flex",alignItems:"center",paddingLeft:e.spacing(1),paddingRight:e.spacing(1)},playIcon:{height:38,width:38}}}));var fe=function(){var e,t=Object(he.a)(me).data,n=c.a.useRef(),a=c.a.useContext(we),i=a.state,o=a.dispatch,s=Object(r.useState)(0),u=Object(l.a)(s,2),d=u[0],j=u[1],b=Object(r.useState)(0),O=Object(l.a)(b,2),g=O[0],p=O[1],h=c.a.useState(!1),m=Object(l.a)(h,2),x=m[0],f=m[1],y=Object(r.useState)(0),v=Object(l.a)(y,2),S=v[0],w=v[1],N=xe();return c.a.useEffect((function(){var e=t.queue.findIndex((function(e){return e.id===i.song.id}));w(e)}),[t.queue,i.song.id]),c.a.useEffect((function(){var e=t.queue[S+1];.99===d&&e&&(j(0),o({type:"SET_SONG",payload:{song:e}}))}),[t.queue,d,o,S]),Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)(V.a,{className:N.container,variant:"outlined",children:[Object(A.jsxs)("div",{className:N.details,children:[Object(A.jsxs)(K.a,{className:N.content,children:[Object(A.jsx)(U.a,{variant:"h5",component:"h3",children:i.song.title}),Object(A.jsx)(U.a,{variant:"subtitle1",component:"p",color:"textSecondary",children:i.song.artist})]}),Object(A.jsxs)("div",{className:N.controls,children:[Object(A.jsx)(X.a,{onClick:function(){var e=t.queue[S-1];e&&o({type:"SET_SONG",payload:{song:e}})},children:Object(A.jsx)(se.a,{})}),Object(A.jsx)(X.a,{onClick:function(){o(i.isPlaying?{type:"PAUSE_SONG"}:{type:"PLAY_SONG"})},children:i.isPlaying?Object(A.jsx)(ee.a,{className:N.playIcon}):Object(A.jsx)(te.a,{className:N.playIcon})}),Object(A.jsx)(X.a,{onClick:function(){var e=t.queue[S+1];e&&o({type:"SET_SONG",payload:{song:e}})},children:Object(A.jsx)(le.a,{})}),Object(A.jsx)(U.a,{variant:"subtitle1",component:"p",color:"textSecondary",children:(e=g,new Date(1e3*e).toISOString().substr(11,8))})]}),Object(A.jsx)(oe.a,{onMouseUp:function(){f(!1),n.current.seekTo(d)},onMouseDown:function(){f(!0)},onChange:function(e,t){j(t)},value:d,type:"range",min:0,max:1,step:.01})]}),Object(A.jsx)(q.a,{ref:n,onProgress:function(e){var t=e.played,n=e.playedSeconds;x||(j(t),p(n))},url:i.song.url,playing:i.isPlaying,hidden:!0}),Object(A.jsx)(H.a,{className:N.thumbnail,image:i.song.thumbnail})]}),Object(A.jsx)(pe,{queue:t.queue})]})},ye=n(241),ve=n(233);var Se=function(e,t){switch(t.type){case"PLAY_SONG":return Object(O.a)(Object(O.a)({},e),{},{isPlaying:!0});case"PAUSE_SONG":return Object(O.a)(Object(O.a)({},e),{},{isPlaying:!1});case"SET_SONG":return Object(O.a)(Object(O.a)({},e),{},{song:t.payload.song});default:return e}},we=c.a.createContext({song:{id:"b45a2f2b-4118-43c1-b829-0a4a66b4123a",title:"Music Mix 2021 \ud83c\udfa7 Remixes of Popular Songs \ud83c\udfa7 EDM Best Music Mix",artist:"magic music",thumbnail:"http://img.youtube.com/vi/EIecjyG4vxs/0.jpg",url:"https://www.youtube.com/watch?v=EIecjyG4vxs",duration:4760},isPlaying:!1});var Ne,Ce=function(){var e=Object(r.useContext)(we),t=Object(r.useReducer)(Se,e),n=Object(l.a)(t,2),a=n[0],i=n[1],c=Object(ue.a)((function(e){return e.breakpoints.up("sm")})),o=Object(ue.a)((function(e){return e.breakpoints.up("md")}));return Object(A.jsxs)(we.Provider,{value:{state:a,dispatch:i},children:[Object(A.jsx)(ye.a,{only:"xs",children:Object(A.jsx)(W,{})}),Object(A.jsxs)(ve.a,{container:!0,spacing:3,children:[Object(A.jsxs)(ve.a,{style:{paddingTop:c?80:10},item:!0,xs:12,md:7,children:[Object(A.jsx)(R,{}),Object(A.jsx)(ce,{})]}),Object(A.jsx)(ve.a,{style:o?{position:"fixed",width:"100%",right:0,top:70}:{position:"fixed",width:"100%",left:0,bottom:0},item:!0,xs:12,md:5,children:Object(A.jsx)(fe,{})})]})]})},Ie=n(235),ke=n(236),Pe=n(234),qe=n(115),Ee=n(83),_e=Object(qe.a)({palette:{type:"dark",primary:Ee.a,secondary:{main:"#94FFC0"},yellow:{main:"#ffd359"}}}),Fe=n(35),Te=n(113),Ge=n(117),Ae=n(116),Qe=new Te.a({link:new Ge.a({uri:"wss://sicmu.hasura.app/v1/graphql",options:{reconnect:!0}}),cache:new Ae.a,typeDefs:Object(F.a)(Ne||(Ne=Object(_.a)(["\n    type Song {\n      id: uuid!\n      title: String!\n      artist: String!\n      thumbnail: String!\n      duration: Float!\n      url: String!\n    }\n\n    input SongInput {\n      id: uuid!\n      title: String!\n      artist: String!\n      thumbnail: String!\n      duration: Float!\n      url: String!\n    }\n\n    type Query {\n      queue: [Song]!\n    }\n\n    type Mutation {\n      addOrRemoveFromQueue(input: SongInput!): [Song]!\n    }\n  "]))),resolvers:{Mutation:{addOrRemoveFromQueue:function(e,t,n){var a=t.input,i=n.cache,r=i.readQuery({query:me});if(r){var c=r.queue,o=c.some((function(e){return e.id===a.id}))?c.filter((function(e){return e.id!==a.id})):[].concat(Object(Fe.a)(c),[a]);return i.writeQuery({query:me,data:{queue:o}}),o}return[]}}}}),$e={queue:Boolean(localStorage.getItem("queue"))?JSON.parse(localStorage.getItem("queue")):[]};Qe.writeData({data:$e});var Re=Qe;s.a.render(Object(A.jsx)(Pe.a,{client:Re,children:Object(A.jsxs)(Ie.a,{theme:_e,children:[Object(A.jsx)(ke.a,{}),Object(A.jsx)(Ce,{})]})}),document.getElementById("root"))}},[[169,1,2]]]);
//# sourceMappingURL=main.27537f9b.chunk.js.map