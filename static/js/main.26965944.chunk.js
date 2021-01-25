(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{13:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3ELbX",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__3r-R9"}},14:function(e,t,a){e.exports={Overlay:"Modal_Overlay__1Y84c",Modal:"Modal_Modal__1dJU3"}},25:function(e,t,a){e.exports={App:"App_App__1yRfp"}},26:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__3wlw_"}},27:function(e,t,a){e.exports={Button:"Button_Button__47EZu"}},29:function(e,t,a){e.exports={Loader:"Loader_Loader__3psQo"}},30:function(e,t,a){e.exports={Error:"Error_Error__3SP_F"}},36:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a(1),o=a.n(n),c=a(10),i=a.n(c),s=(a(36),a(16)),u=a(4),l=a.n(u),m=a(11),h=a(5),g=a(6),d=a(8),p=a(7),b=a(25),f=a.n(b),j=a(2),y=a.n(j),v=a(9),I=a.n(v),x=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(h.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={inputValue:""},e.hendleSubmitForm=function(t){var a=e.props.onSubmit,r=e.state.inputValue;t.preventDefault(),a(r),e.setState({inputValue:""})},e.handleChangeInput=function(t){var a=t.currentTarget;e.setState({inputValue:a.value})},e}return Object(g.a)(a,[{key:"render",value:function(){var e=this.state.inputValue;return Object(r.jsx)("header",{className:I.a.Searchbar,children:Object(r.jsxs)("form",{className:I.a.Searchform,onSubmit:this.handleSubmitForm,children:[Object(r.jsx)("button",{type:"submit",className:I.a.SearchFormButton,children:Object(r.jsx)("span",{className:I.a.SearchFormButtonLabel,children:"Search"})}),Object(r.jsx)("input",{className:I.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:e,onChange:this.handleChangeInput})]})})}}]),a}(n.Component);x.ptopTypes={onSubmit:y.a.func.isRequired};var O=x,S=a(13),_=a.n(S),L=function(e){var t=e.imagesArr,a=e.onImageClick;return t.map((function(e){var t=e.id,n=e.webformatURL,o=e.largeImageURL,c=e.pageURL.replace("https://pixabay.com/photos/","");return Object(r.jsx)("li",{onClick:function(){a(o,c)},className:_.a.ImageGalleryItem,children:Object(r.jsx)("img",{className:_.a.ImageGalleryItemImage,src:n,alt:c})},t)}))},k=a(26),w=a.n(k),C=function(e){var t=e.imagesArr,a=e.onImageClick;return Object(r.jsx)("ul",{className:w.a.ImageGallery,children:Object(r.jsx)(L,{imagesArr:t,onImageClick:a})})},A=a(27),F=a.n(A),N=function(e){var t=e.onClick;return Object(r.jsx)("button",{type:"button",className:F.a.Button,onClick:t,children:"Load more"})},B=a(28),P=a.n(B),G=a(29),R=a.n(G),E=function(e){var t=e.isLoading;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(P.a,{className:R.a.Loader,type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3,loading:t})})},M=a(30),Q=a.n(M),U=function(e){var t=e.text;return Object(r.jsx)("h2",{className:Q.a.Error,children:t})},D=a(14),V=a.n(D),T=document.querySelector("#modal-root"),q=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(h.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).handleKeyDown=function(t){var a=t.code,r=e.props.onClose;"Escape"===a&&r()},e.handleBackdropClick=function(t){var a=t.target,r=t.currentTarget,n=e.props.onClose;a===r&&n()},e}return Object(g.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props.children;return Object(c.createPortal)(Object(r.jsx)("div",{className:V.a.Overlay,onClick:this.handleBackdropClick,children:Object(r.jsx)("div",{className:V.a.Modal,children:e})}),T)}}]),a}(n.Component),J=a(15),K=a.n(J);K.a.defaults.baseURL="https://pixabay.com/api/";var H=function(e){var t=e.searchQuery,a=void 0===t?"":t,r=e.currentPage,n=void 0===r?1:r,o=e.perPage,c=void 0===o?12:o;return K.a.get("?image_type=photo&orientation=horizontal&q=".concat(a,"&page=").concat(n,"&per_page=").concat(c,"&key=").concat("19312613-88e2f4e8eebe9f93070d49b64")).then((function(e){return e.data.hits}))},Y=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(h.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={imagesArr:[],currentPage:1,searchQuery:"",isLoadingArr:!1,isLoadingImg:!1,error:null,largeImageLink:"",imageName:"",noResults:!1},e.componentDidUpdate=function(){var t=Object(m.a)(l.a.mark((function t(a,r){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.searchQuery===e.state.searchQuery){t.next=4;break}return t.next=3,e.fetchImages();case 3:0===e.state.imagesArr.length&&e.setState({noResults:!0});case 4:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.onSubmitSearch=function(t){t!==e.state.searchQuery&&e.setState({searchQuery:t,currentPage:1,imagesArr:[],error:null,noResults:!1})},e.onClickLoadMore=Object(m.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fetchImages();case 2:window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"});case 3:case"end":return t.stop()}}),t)}))),e.onImageClick=function(t,a){e.setState({largeImageLink:t,imageName:a,isLoadingImg:!0})},e.onCloseModal=function(){e.setState({largeImageLink:null})},e.onLoadLargeImg=function(){e.setState({isLoadingImg:!1})},e.fetchImages=Object(m.a)(l.a.mark((function t(){var a,r,n,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state,r=a.currentPage,n=a.searchQuery,o={currentPage:r,searchQuery:n},e.setState({isLoadingArr:!0,error:null}),t.next=5,H.fetchImages(o).then((function(t){e.setState((function(e){return{imagesArr:[].concat(Object(s.a)(e.imagesArr),Object(s.a)(t)),currentPage:e.currentPage+1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){e.setState({isLoadingArr:!1})}));case 5:case"end":return t.stop()}}),t)}))),e}return Object(g.a)(a,[{key:"render",value:function(){var e=this.state,t=e.imagesArr,a=e.isLoadingArr,n=e.isLoadingImg,o=e.error,c=e.largeImageLink,i=e.imageName,s=e.noResults,u=e.searchQuery,l=t.length>0&&!a;return Object(r.jsxs)("div",{className:f.a.App,children:[c&&Object(r.jsx)(q,{onClose:this.onCloseModal,children:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(E,{isLoading:n,position:"center"}),Object(r.jsx)("img",{onLoad:this.onLoadLargeImg,src:c,alt:i})]})}),Object(r.jsx)(O,{onSubmit:this.onSubmitSearch}),s&&Object(r.jsx)(U,{text:"Your search ".concat(u," did not match any image.")}),Object(r.jsx)(C,{imagesArr:t,onImageClick:this.onImageClick}),Object(r.jsx)(E,{isLoading:a,position:"bottom"}),o&&Object(r.jsx)(U,{text:"Something went wrong. Please try again."}),l&&Object(r.jsx)(N,{onClick:this.onClickLoadMore})]})}}]),a}(n.Component);i.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(Y,{})}),document.getElementById("root"))},9:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__1N-v7",Searchform:"Searchbar_Searchform__Phl_A",SearchFormButton:"Searchbar_SearchFormButton__Hr_SR",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__1Be10",SearchFormInput:"Searchbar_SearchFormInput__IfkFF"}}},[[77,1,2]]]);
//# sourceMappingURL=main.26965944.chunk.js.map