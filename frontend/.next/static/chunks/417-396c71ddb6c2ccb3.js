(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[417],{8456:function(e,t,r){"use strict";r.d(t,{Z:function(){return L}});var n=r(3366),o=r(7462),s=r(7294),i=r(512),a=r(4780),l=r(917),u=r(8216),c=r(1657),h=r(948),d=r(1588),p=r(4867);function f(e){return(0,p.Z)("MuiCircularProgress",e)}(0,d.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var m=r(5893);let v=["className","color","disableShrink","size","style","thickness","value","variant"],g=e=>e,y,R,b,_,E=(0,l.F4)(y||(y=g`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),S=(0,l.F4)(R||(R=g`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),x=e=>{let{classes:t,variant:r,color:n,disableShrink:o}=e,s={root:["root",r,`color${(0,u.Z)(n)}`],svg:["svg"],circle:["circle",`circle${(0,u.Z)(r)}`,o&&"circleDisableShrink"]};return(0,a.Z)(s,f,t)},C=(0,h.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[r.variant],t[`color${(0,u.Z)(r.color)}`]]}})(({ownerState:e,theme:t})=>(0,o.Z)({display:"inline-block"},"determinate"===e.variant&&{transition:t.transitions.create("transform")},"inherit"!==e.color&&{color:(t.vars||t).palette[e.color].main}),({ownerState:e})=>"indeterminate"===e.variant&&(0,l.iv)(b||(b=g`
      animation: ${0} 1.4s linear infinite;
    `),E)),T=(0,h.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,t)=>t.svg})({display:"block"}),w=(0,h.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.circle,t[`circle${(0,u.Z)(r.variant)}`],r.disableShrink&&t.circleDisableShrink]}})(({ownerState:e,theme:t})=>(0,o.Z)({stroke:"currentColor"},"determinate"===e.variant&&{transition:t.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,l.iv)(_||(_=g`
      animation: ${0} 1.4s ease-in-out infinite;
    `),S)),P=s.forwardRef(function(e,t){let r=(0,c.Z)({props:e,name:"MuiCircularProgress"}),{className:s,color:a="primary",disableShrink:l=!1,size:u=40,style:h,thickness:d=3.6,value:p=0,variant:f="indeterminate"}=r,g=(0,n.Z)(r,v),y=(0,o.Z)({},r,{color:a,disableShrink:l,size:u,thickness:d,value:p,variant:f}),R=x(y),b={},_={},E={};if("determinate"===f){let e=2*Math.PI*((44-d)/2);b.strokeDasharray=e.toFixed(3),E["aria-valuenow"]=Math.round(p),b.strokeDashoffset=`${((100-p)/100*e).toFixed(3)}px`,_.transform="rotate(-90deg)"}return(0,m.jsx)(C,(0,o.Z)({className:(0,i.Z)(R.root,s),style:(0,o.Z)({width:u,height:u},_,h),ownerState:y,ref:t,role:"progressbar"},E,g,{children:(0,m.jsx)(T,{className:R.svg,ownerState:y,viewBox:"22 22 44 44",children:(0,m.jsx)(w,{className:R.circle,style:b,ownerState:y,cx:44,cy:44,r:(44-d)/2,fill:"none",strokeWidth:d})})}))});var L=P},1752:function(e,t,r){e.exports=r(7905)},3454:function(e,t,r){"use strict";var n,o;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(o=r.g.process)?void 0:o.env)?r.g.process:r(7663)},7663:function(e){!function(){var t={229:function(e){var t,r,n,o=e.exports={};function s(){throw Error("setTimeout has not been defined")}function i(){throw Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===s||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:s}catch(e){t=s}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var l=[],u=!1,c=-1;function h(){u&&n&&(u=!1,n.length?l=n.concat(l):c=-1,l.length&&d())}function d(){if(!u){var e=a(h);u=!0;for(var t=l.length;t;){for(n=l,l=[];++c<t;)n&&n[c].run();c=-1,t=l.length}n=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function f(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new p(e,t)),1!==l.length||u||a(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=f,o.addListener=f,o.once=f,o.off=f,o.removeListener=f,o.removeAllListeners=f,o.emit=f,o.prependListener=f,o.prependOnceListener=f,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var s=r[e]={exports:{}},i=!0;try{t[e](s,s.exports,n),i=!1}finally{i&&delete r[e]}return s.exports}n.ab="//";var o=n(229);e.exports=o}()},1108:function(e,t,r){"use strict";r.d(t,{D5:function(){return M},GI:function(){return k}});var n=r(7294);let o=n.createContext(null);function s(e,t){if(e===t)return!0;if(!e||!t)return!1;if(Array.isArray(e)){if(!Array.isArray(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(!s(e[r],t[r]))return!1;return!0}if(Array.isArray(t))return!1;if("object"==typeof e&&"object"==typeof t){let r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(let n of r)if(!t.hasOwnProperty(n)||!s(e[n],t[n]))return!1;return!0}return!1}function i(e,t){if(!e.getProjection)return;let r=e.getProjection(),n=t.getProjection();s(r,n)||t.setProjection(r)}function a(e){return{longitude:e.center.lng,latitude:e.center.lat,zoom:e.zoom,pitch:e.pitch,bearing:e.bearing,padding:e.padding}}function l(e,t){let r=t.viewState||t,n=!1;if("longitude"in r&&"latitude"in r){let t=e.center;e.center=new t.constructor(r.longitude,r.latitude),n=n||t!==e.center}if("zoom"in r){let t=e.zoom;e.zoom=r.zoom,n=n||t!==e.zoom}if("bearing"in r){let t=e.bearing;e.bearing=r.bearing,n=n||t!==e.bearing}if("pitch"in r){let t=e.pitch;e.pitch=r.pitch,n=n||t!==e.pitch}return r.padding&&!e.isPaddingEqual(r.padding)&&(n=!0,e.padding=r.padding),n}let u=["type","source","source-layer","minzoom","maxzoom","filter","layout"];function c(e){if(!e)return null;if("string"==typeof e||("toJS"in e&&(e=e.toJS()),!e.layers))return e;let t={};for(let r of e.layers)t[r.id]=r;let r=e.layers.map(e=>{let r=null;"interactive"in e&&(r=Object.assign({},e),delete r.interactive);let n=t[e.ref];if(n)for(let t of(r=r||Object.assign({},e),delete r.ref,u))t in n&&(r[t]=n[t]);return r||e});return{...e,layers:r}}var h=r(3454);let d={version:8,sources:{},layers:[]},p={mousedown:"onMouseDown",mouseup:"onMouseUp",mouseover:"onMouseOver",mousemove:"onMouseMove",click:"onClick",dblclick:"onDblClick",mouseenter:"onMouseEnter",mouseleave:"onMouseLeave",mouseout:"onMouseOut",contextmenu:"onContextMenu",touchstart:"onTouchStart",touchend:"onTouchEnd",touchmove:"onTouchMove",touchcancel:"onTouchCancel"},f={movestart:"onMoveStart",move:"onMove",moveend:"onMoveEnd",dragstart:"onDragStart",drag:"onDrag",dragend:"onDragEnd",zoomstart:"onZoomStart",zoom:"onZoom",zoomend:"onZoomEnd",rotatestart:"onRotateStart",rotate:"onRotate",rotateend:"onRotateEnd",pitchstart:"onPitchStart",pitch:"onPitch",pitchend:"onPitchEnd"},m={wheel:"onWheel",boxzoomstart:"onBoxZoomStart",boxzoomend:"onBoxZoomEnd",boxzoomcancel:"onBoxZoomCancel",resize:"onResize",load:"onLoad",render:"onRender",idle:"onIdle",remove:"onRemove",data:"onData",styledata:"onStyleData",sourcedata:"onSourceData",error:"onError"},v=["minZoom","maxZoom","minPitch","maxPitch","maxBounds","projection","renderWorldCopies"],g=["scrollZoom","boxZoom","dragRotate","dragPan","keyboard","doubleClickZoom","touchZoomRotate","touchPitch"];class y{constructor(e,t,r){this._map=null,this._internalUpdate=!1,this._inRender=!1,this._hoveredFeatures=null,this._deferredEvents={move:!1,zoom:!1,pitch:!1,rotate:!1},this._onEvent=e=>{let t=this.props[m[e.type]];t?t(e):"error"===e.type&&console.error(e.error)},this._onPointerEvent=e=>{("mousemove"===e.type||"mouseout"===e.type)&&this._updateHover(e);let t=this.props[p[e.type]];t&&(this.props.interactiveLayerIds&&"mouseover"!==e.type&&"mouseout"!==e.type&&(e.features=this._hoveredFeatures||this._queryRenderedFeatures(e.point)),t(e),delete e.features)},this._onCameraEvent=e=>{if(!this._internalUpdate){let t=this.props[f[e.type]];t&&t(e)}e.type in this._deferredEvents&&(this._deferredEvents[e.type]=!1)},this._MapClass=e,this.props=t,this._initialize(r)}get map(){return this._map}get transform(){return this._renderTransform}setProps(e){let t=this.props;this.props=e;let r=this._updateSettings(e,t);r&&this._createShadowTransform(this._map);let n=this._updateSize(e),o=this._updateViewState(e,!0);this._updateStyle(e,t),this._updateStyleComponents(e,t),this._updateHandlers(e,t),(r||n||o&&!this._map.isMoving())&&this.redraw()}static reuse(e,t){let r=y.savedMaps.pop();if(!r)return null;let n=r.map,o=n.getContainer();for(t.className=o.className;o.childNodes.length>0;)t.appendChild(o.childNodes[0]);n._container=t;let s=n._resizeObserver;s&&(s.disconnect(),s.observe(t)),r.setProps({...e,styleDiffing:!1}),n.resize();let{initialViewState:i}=e;return i&&(i.bounds?n.fitBounds(i.bounds,{...i.fitBoundsOptions,duration:0}):r._updateViewState(i,!1)),n.isStyleLoaded()?n.fire("load"):n.once("styledata",()=>n.fire("load")),n._update(),r}_initialize(e){let{props:t}=this,{mapStyle:r=d}=t,n={...t,...t.initialViewState,accessToken:t.mapboxAccessToken||function(){let e=null;if("undefined"!=typeof location){let t=/access_token=([^&\/]*)/.exec(location.search);e=t&&t[1]}try{e=e||h.env.MapboxAccessToken}catch(e){}try{e=e||h.env.REACT_APP_MAPBOX_ACCESS_TOKEN}catch(e){}return e}()||null,container:e,style:c(r)},o=n.initialViewState||n.viewState||n;if(Object.assign(n,{center:[o.longitude||0,o.latitude||0],zoom:o.zoom||0,pitch:o.pitch||0,bearing:o.bearing||0}),t.gl){let e=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=()=>(HTMLCanvasElement.prototype.getContext=e,t.gl)}let s=new this._MapClass(n);o.padding&&s.setPadding(o.padding),t.cursor&&(s.getCanvas().style.cursor=t.cursor),this._createShadowTransform(s);let a=s._render;s._render=e=>{this._inRender=!0,a.call(s,e),this._inRender=!1};let l=s._renderTaskQueue.run;s._renderTaskQueue.run=e=>{l.call(s._renderTaskQueue,e),this._onBeforeRepaint()},s.on("render",()=>this._onAfterRepaint());let u=s.fire;for(let e in s.fire=this._fireEvent.bind(this,u),s.on("resize",()=>{this._renderTransform.resize(s.transform.width,s.transform.height)}),s.on("styledata",()=>{this._updateStyleComponents(this.props,{}),i(s.transform,this._renderTransform)}),s.on("sourcedata",()=>this._updateStyleComponents(this.props,{})),p)s.on(e,this._onPointerEvent);for(let e in f)s.on(e,this._onCameraEvent);for(let e in m)s.on(e,this._onEvent);this._map=s}recycle(){let e=this.map.getContainer(),t=e.querySelector("[mapboxgl-children]");null==t||t.remove(),y.savedMaps.push(this)}destroy(){this._map.remove()}redraw(){let e=this._map;!this._inRender&&e.style&&(e._frame&&(e._frame.cancel(),e._frame=null),e._render())}_createShadowTransform(e){let t=function(e){let t=e.clone();return t.pixelsToGLUnits=e.pixelsToGLUnits,t}(e.transform);e.painter.transform=t,this._renderTransform=t}_updateSize(e){let{viewState:t}=e;if(t){let e=this._map;if(t.width!==e.transform.width||t.height!==e.transform.height)return e.resize(),!0}return!1}_updateViewState(e,t){if(this._internalUpdate)return!1;let r=this._map,n=this._renderTransform,{zoom:o,pitch:s,bearing:i}=n,u=r.isMoving();u&&(n.cameraElevationReference="sea");let c=l(n,{...a(r.transform),...e});if(u&&(n.cameraElevationReference="ground"),c&&t){let e=this._deferredEvents;e.move=!0,e.zoom||(e.zoom=o!==n.zoom),e.rotate||(e.rotate=i!==n.bearing),e.pitch||(e.pitch=s!==n.pitch)}return u||l(r.transform,e),c}_updateSettings(e,t){let r=this._map,n=!1;for(let o of v)if(o in e&&!s(e[o],t[o])){n=!0;let t=r[`set${o[0].toUpperCase()}${o.slice(1)}`];null==t||t.call(r,e[o])}return n}_updateStyle(e,t){if(e.cursor!==t.cursor&&(this._map.getCanvas().style.cursor=e.cursor),e.mapStyle!==t.mapStyle){let{mapStyle:t=d,styleDiffing:r=!0}=e,n={diff:r};return"localIdeographFontFamily"in e&&(n.localIdeographFontFamily=e.localIdeographFontFamily),this._map.setStyle(c(t),n),!0}return!1}_updateStyleComponents(e,t){let r=this._map,n=!1;return r.isStyleLoaded()&&("light"in e&&r.setLight&&!s(e.light,t.light)&&(n=!0,r.setLight(e.light)),"fog"in e&&r.setFog&&!s(e.fog,t.fog)&&(n=!0,r.setFog(e.fog)),"terrain"in e&&r.setTerrain&&!s(e.terrain,t.terrain)&&(!e.terrain||r.getSource(e.terrain.source))&&(n=!0,r.setTerrain(e.terrain))),n}_updateHandlers(e,t){var r,n;let o=this._map,i=!1;for(let a of g){let l=null===(r=e[a])||void 0===r||r,u=null===(n=t[a])||void 0===n||n;s(l,u)||(i=!0,l?o[a].enable(l):o[a].disable())}return i}_queryRenderedFeatures(e){let t=this._map,{interactiveLayerIds:r=[]}=this.props;try{return t.queryRenderedFeatures(e,{layers:r.filter(t.getLayer.bind(t))})}catch(e){return[]}}_updateHover(e){var t;let{props:r}=this,n=r.interactiveLayerIds&&(r.onMouseMove||r.onMouseEnter||r.onMouseLeave);if(n){let r=e.type,n=(null===(t=this._hoveredFeatures)||void 0===t?void 0:t.length)>0,o=this._queryRenderedFeatures(e.point),s=o.length>0;!s&&n&&(e.type="mouseleave",this._onPointerEvent(e)),this._hoveredFeatures=o,s&&!n&&(e.type="mouseenter",this._onPointerEvent(e)),e.type=r}else this._hoveredFeatures=null}_fireEvent(e,t,r){let n=this._map,o=n.transform,s="string"==typeof t?t:t.type;return("move"===s&&this._updateViewState(this.props,!1),s in f&&("object"==typeof t&&(t.viewState=a(o)),this._map.isMoving()))?(n.transform=this._renderTransform,e.call(n,t,r),n.transform=o,n):(e.call(n,t,r),n)}_onBeforeRepaint(){let e=this._map;for(let t in this._internalUpdate=!0,this._deferredEvents)this._deferredEvents[t]&&e.fire(t);this._internalUpdate=!1;let t=this._map.transform;e.transform=this._renderTransform,this._onAfterRepaint=()=>{i(this._renderTransform,t),e.transform=t}}}y.savedMaps=[];let R=["setMaxBounds","setMinZoom","setMaxZoom","setMinPitch","setMaxPitch","setRenderWorldCopies","setProjection","setStyle","addSource","removeSource","addLayer","removeLayer","setLayerZoomRange","setFilter","setPaintProperty","setLayoutProperty","setLight","setTerrain","setFog","remove"],b="undefined"!=typeof document?n.useLayoutEffect:n.useEffect,_=["baseApiUrl","maxParallelImageRequests","workerClass","workerCount","workerUrl"],E=n.createContext(null);var S=r(3935);let x=/box|flex|grid|column|lineHeight|fontWeight|opacity|order|tabSize|zIndex/;function C(e,t){if(!e||!t)return;let r=e.style;for(let e in t){let n=t[e];Number.isFinite(n)&&!x.test(e)?r[e]=`${n}px`:r[e]=n}}function T(e){return new Set(e?e.trim().split(/\s+/):[])}(0,n.memo)((0,n.forwardRef)(function(e,t){let{map:r,mapLib:o}=(0,n.useContext)(E),s=(0,n.useRef)({props:e});s.current.props=e;let i=(0,n.useMemo)(()=>{let t=!1;n.Children.forEach(e.children,e=>{e&&(t=!0)});let r={...e,element:t?document.createElement("div"):null},a=new o.Marker(r);return a.setLngLat([e.longitude,e.latitude]),a.getElement().addEventListener("click",e=>{var t,r;null===(r=(t=s.current.props).onClick)||void 0===r||r.call(t,{type:"click",target:a,originalEvent:e})}),a.on("dragstart",e=>{var t,r;e.lngLat=i.getLngLat(),null===(r=(t=s.current.props).onDragStart)||void 0===r||r.call(t,e)}),a.on("drag",e=>{var t,r;e.lngLat=i.getLngLat(),null===(r=(t=s.current.props).onDrag)||void 0===r||r.call(t,e)}),a.on("dragend",e=>{var t,r;e.lngLat=i.getLngLat(),null===(r=(t=s.current.props).onDragEnd)||void 0===r||r.call(t,e)}),a},[]);(0,n.useEffect)(()=>(i.addTo(r.getMap()),()=>{i.remove()}),[]);let{longitude:a,latitude:l,offset:u,style:c,draggable:h=!1,popup:d=null,rotation:p=0,rotationAlignment:f="auto",pitchAlignment:m="auto"}=e;return(0,n.useEffect)(()=>{C(i.getElement(),c)},[c]),(0,n.useImperativeHandle)(t,()=>i,[]),(i.getLngLat().lng!==a||i.getLngLat().lat!==l)&&i.setLngLat([a,l]),u&&!function(e,t){let r=Array.isArray(e)?e[0]:e?e.x:0,n=Array.isArray(e)?e[1]:e?e.y:0,o=Array.isArray(t)?t[0]:t?t.x:0,s=Array.isArray(t)?t[1]:t?t.y:0;return r===o&&n===s}(i.getOffset(),u)&&i.setOffset(u),i.isDraggable()!==h&&i.setDraggable(h),i.getRotation()!==p&&i.setRotation(p),i.getRotationAlignment()!==f&&i.setRotationAlignment(f),i.getPitchAlignment()!==m&&i.setPitchAlignment(m),i.getPopup()!==d&&i.setPopup(d),(0,S.createPortal)(e.children,i.getElement())}));var w=(0,n.memo)((0,n.forwardRef)(function(e,t){let{map:r,mapLib:o}=(0,n.useContext)(E),i=(0,n.useMemo)(()=>document.createElement("div"),[]),a=(0,n.useRef)({props:e});a.current.props=e;let l=(0,n.useMemo)(()=>{let t={...e},r=new o.Popup(t);return r.setLngLat([e.longitude,e.latitude]),r.once("open",e=>{var t,r;null===(r=(t=a.current.props).onOpen)||void 0===r||r.call(t,e)}),r},[]);if((0,n.useEffect)(()=>{let e=e=>{var t,r;null===(r=(t=a.current.props).onClose)||void 0===r||r.call(t,e)};return l.on("close",e),l.setDOMContent(i).addTo(r.getMap()),()=>{l.off("close",e),l.isOpen()&&l.remove()}},[]),(0,n.useEffect)(()=>{C(l.getElement(),e.style)},[e.style]),(0,n.useImperativeHandle)(t,()=>l,[]),l.isOpen()&&((l.getLngLat().lng!==e.longitude||l.getLngLat().lat!==e.latitude)&&l.setLngLat([e.longitude,e.latitude]),e.offset&&!s(l.options.offset,e.offset)&&l.setOffset(e.offset),(l.options.anchor!==e.anchor||l.options.maxWidth!==e.maxWidth)&&(l.options.anchor=e.anchor,l.setMaxWidth(e.maxWidth)),l.options.className!==e.className)){let t=T(l.options.className),r=T(e.className);for(let e of t)r.has(e)||l.removeClassName(e);for(let e of r)t.has(e)||l.addClassName(e);l.options.className=e.className}return(0,S.createPortal)(e.children,i)})),P=function(e,t,r,o){let s=(0,n.useContext)(E),i=(0,n.useMemo)(()=>e(s),[]);return(0,n.useEffect)(()=>{let e=o||r||t,n="function"==typeof t&&"function"==typeof r?t:null,a="function"==typeof r?r:"function"==typeof t?t:null,{map:l}=s;return!l.hasControl(i)&&(l.addControl(i,null==e?void 0:e.position),n&&n(s)),()=>{a&&a(s),l.hasControl(i)&&l.removeControl(i)}},[]),i};(0,n.memo)(function(e){let t=P(({mapLib:t})=>new t.AttributionControl(e),{position:e.position});return(0,n.useEffect)(()=>{C(t._container,e.style)},[e.style]),null}),(0,n.memo)(function(e){let t=P(({mapLib:t})=>new t.FullscreenControl({container:e.containerId&&document.getElementById(e.containerId)}),{position:e.position});return(0,n.useEffect)(()=>{C(t._controlContainer,e.style)},[e.style]),null}),(0,n.memo)((0,n.forwardRef)(function(e,t){let r=(0,n.useRef)({props:e}),o=P(({mapLib:t})=>{let n=new t.GeolocateControl(e),o=n._setupUI;return n._setupUI=e=>{n._container.hasChildNodes()||o(e)},n.on("geolocate",e=>{var t,n;null===(n=(t=r.current.props).onGeolocate)||void 0===n||n.call(t,e)}),n.on("error",e=>{var t,n;null===(n=(t=r.current.props).onError)||void 0===n||n.call(t,e)}),n.on("outofmaxbounds",e=>{var t,n;null===(n=(t=r.current.props).onOutOfMaxBounds)||void 0===n||n.call(t,e)}),n.on("trackuserlocationstart",e=>{var t,n;null===(n=(t=r.current.props).onTrackUserLocationStart)||void 0===n||n.call(t,e)}),n.on("trackuserlocationend",e=>{var t,n;null===(n=(t=r.current.props).onTrackUserLocationEnd)||void 0===n||n.call(t,e)}),n},{position:e.position});return r.current.props=e,(0,n.useImperativeHandle)(t,()=>o,[]),(0,n.useEffect)(()=>{C(o._container,e.style)},[e.style]),null})),(0,n.memo)(function(e){let t=P(({mapLib:t})=>new t.NavigationControl(e),{position:e.position});return(0,n.useEffect)(()=>{C(t._container,e.style)},[e.style]),null}),(0,n.memo)(function(e){let t=P(({mapLib:t})=>new t.ScaleControl(e),{position:e.position}),r=(0,n.useRef)(e),o=r.current;r.current=e;let{style:s}=e;return void 0!==e.maxWidth&&e.maxWidth!==o.maxWidth&&(t.options.maxWidth=e.maxWidth),void 0!==e.unit&&e.unit!==o.unit&&t.setUnit(e.unit),(0,n.useEffect)(()=>{C(t._container,s)},[s]),null});let L=r.e(634).then(r.t.bind(r,6158,23)),M=n.forwardRef(function(e,t){return function(e,t,r){let s=(0,n.useContext)(o),[i,a]=(0,n.useState)(null),l=(0,n.useRef)(),{current:u}=(0,n.useRef)({mapLib:null,map:null});(0,n.useEffect)(()=>{let t;let n=e.mapLib,o=!0;return Promise.resolve(n||r).then(r=>{if(!o)return;if(!r)throw Error("Invalid mapLib");let n="Map"in r?r:r.default;if(!n.Map)throw Error("Invalid mapLib");if(function(e,t){for(let r of _)r in t&&(e[r]=t[r]);let{RTLTextPlugin:r="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js"}=t;r&&e.getRTLTextPluginStatus&&"unavailable"===e.getRTLTextPluginStatus()&&e.setRTLTextPlugin(r,e=>{e&&console.error(e)},!1)}(n,e),!n.supported||n.supported(e))e.reuseMaps&&(t=y.reuse(e,l.current)),t||(t=new y(n.Map,e,l.current)),u.map=function(e){if(!e)return null;let t=e.map,r={getMap:()=>t,getCenter:()=>e.transform.center,getZoom:()=>e.transform.zoom,getBearing:()=>e.transform.bearing,getPitch:()=>e.transform.pitch,getPadding:()=>e.transform.padding,getBounds:()=>e.transform.getBounds(),project:r=>{let n=t.transform;t.transform=e.transform;let o=t.project(r);return t.transform=n,o},unproject:r=>{let n=t.transform;t.transform=e.transform;let o=t.unproject(r);return t.transform=n,o},queryTerrainElevation:(r,n)=>{let o=t.transform;t.transform=e.transform;let s=t.queryTerrainElevation(r,n);return t.transform=o,s}};for(let e of function(e){let t=new Set,r=e;for(;r;){for(let n of Object.getOwnPropertyNames(r))"_"!==n[0]&&"function"==typeof e[n]&&"fire"!==n&&"setEventedParent"!==n&&t.add(n);r=Object.getPrototypeOf(r)}return Array.from(t)}(t))e in r||R.includes(e)||(r[e]=t[e].bind(t));return r}(t),u.mapLib=n,a(t),null==s||s.onMapMount(u.map,e.id);else throw Error("Map is not supported by this browser")}).catch(t=>{let{onError:r}=e;r?r({type:"error",target:null,originalEvent:null,error:t}):console.error(t)}),()=>{o=!1,t&&(null==s||s.onMapUnmount(e.id),e.reuseMaps?t.recycle():t.destroy())}},[]),b(()=>{i&&i.setProps(e)}),(0,n.useImperativeHandle)(t,()=>u.map,[i]);let c=(0,n.useMemo)(()=>({position:"relative",width:"100%",height:"100%",...e.style}),[e.style]);return n.createElement("div",{id:e.id,ref:l,style:c},i&&n.createElement(E.Provider,{value:u},n.createElement("div",{"mapboxgl-children":"",style:{height:"100%"}},e.children)))}(e,t,L)}),k=w},7848:function(e,t,r){"use strict";let n;r.d(t,{a:function(){return L}});var o=r(2161),s=r(81),i=r(5761),a=r(3989),l=r(2379);class u extends a.l{constructor(e,t){super(),this.client=e,this.options=t,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(t)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){1===this.listeners.size&&(this.currentQuery.addObserver(this),c(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return h(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return h(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(e,t){let r=this.options,n=this.currentQuery;if(this.options=this.client.defaultQueryOptions(e),(0,o.VS)(r,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),void 0!==this.options.enabled&&"boolean"!=typeof this.options.enabled)throw Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=r.queryKey),this.updateQuery();let s=this.hasListeners();s&&d(this.currentQuery,n,this.options,r)&&this.executeFetch(),this.updateResult(t),s&&(this.currentQuery!==n||this.options.enabled!==r.enabled||this.options.staleTime!==r.staleTime)&&this.updateStaleTimeout();let i=this.computeRefetchInterval();s&&(this.currentQuery!==n||this.options.enabled!==r.enabled||i!==this.currentRefetchInterval)&&this.updateRefetchInterval(i)}getOptimisticResult(e){let t=this.client.getQueryCache().build(this.client,e),r=this.createResult(t,e);return e.keepPreviousData||(void 0!==e.placeholderData?!r.isPlaceholderData:(0,o.VS)(this.getCurrentResult(),r))||(this.currentResult=r,this.currentResultOptions=this.options,this.currentResultState=this.currentQuery.state),r}getCurrentResult(){return this.currentResult}trackResult(e){let t={};return Object.keys(e).forEach(r=>{Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(r),e[r])})}),t}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:e,...t}={}){return this.fetch({...t,meta:{refetchPage:e}})}fetchOptimistic(e){let t=this.client.defaultQueryOptions(e),r=this.client.getQueryCache().build(this.client,t);return r.isFetchingOptimistic=!0,r.fetch().then(()=>this.createResult(r,t))}fetch(e){var t;return this.executeFetch({...e,cancelRefetch:null==(t=e.cancelRefetch)||t}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(e){this.updateQuery();let t=this.currentQuery.fetch(this.options,e);return null!=e&&e.throwOnError||(t=t.catch(o.ZT)),t}updateStaleTimeout(){if(this.clearStaleTimeout(),o.sk||this.currentResult.isStale||!(0,o.PN)(this.options.staleTime))return;let e=(0,o.Kp)(this.currentResult.dataUpdatedAt,this.options.staleTime);this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},e+1)}computeRefetchInterval(){var e;return"function"==typeof this.options.refetchInterval?this.options.refetchInterval(this.currentResult.data,this.currentQuery):null!=(e=this.options.refetchInterval)&&e}updateRefetchInterval(e){this.clearRefetchInterval(),this.currentRefetchInterval=e,!o.sk&&!1!==this.options.enabled&&(0,o.PN)(this.currentRefetchInterval)&&0!==this.currentRefetchInterval&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||i.j.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(e,t){let r;let n=this.currentQuery,s=this.options,i=this.currentResult,a=this.currentResultState,u=this.currentResultOptions,h=e!==n,f=h?e.state:this.currentQueryInitialState,m=h?this.currentResult:this.previousQueryResult,{state:v}=e,{dataUpdatedAt:g,error:y,errorUpdatedAt:R,fetchStatus:b,status:_}=v,E=!1,S=!1;if(t._optimisticResults){let r=this.hasListeners(),o=!r&&c(e,t),i=r&&d(e,n,t,s);(o||i)&&(b=(0,l.Kw)(e.options.networkMode)?"fetching":"paused",g||(_="loading")),"isRestoring"===t._optimisticResults&&(b="idle")}if(t.keepPreviousData&&!v.dataUpdatedAt&&null!=m&&m.isSuccess&&"error"!==_)r=m.data,g=m.dataUpdatedAt,_=m.status,E=!0;else if(t.select&&void 0!==v.data){if(i&&v.data===(null==a?void 0:a.data)&&t.select===this.selectFn)r=this.selectResult;else try{this.selectFn=t.select,r=t.select(v.data),r=(0,o.oE)(null==i?void 0:i.data,r,t),this.selectResult=r,this.selectError=null}catch(e){this.selectError=e}}else r=v.data;if(void 0!==t.placeholderData&&void 0===r&&"loading"===_){let e;if(null!=i&&i.isPlaceholderData&&t.placeholderData===(null==u?void 0:u.placeholderData))e=i.data;else if(e="function"==typeof t.placeholderData?t.placeholderData():t.placeholderData,t.select&&void 0!==e)try{e=t.select(e),this.selectError=null}catch(e){this.selectError=e}void 0!==e&&(_="success",r=(0,o.oE)(null==i?void 0:i.data,e,t),S=!0)}this.selectError&&(y=this.selectError,r=this.selectResult,R=Date.now(),_="error");let x="fetching"===b,C="loading"===_,T="error"===_,w={status:_,fetchStatus:b,isLoading:C,isSuccess:"success"===_,isError:T,isInitialLoading:C&&x,data:r,dataUpdatedAt:g,error:y,errorUpdatedAt:R,failureCount:v.fetchFailureCount,failureReason:v.fetchFailureReason,errorUpdateCount:v.errorUpdateCount,isFetched:v.dataUpdateCount>0||v.errorUpdateCount>0,isFetchedAfterMount:v.dataUpdateCount>f.dataUpdateCount||v.errorUpdateCount>f.errorUpdateCount,isFetching:x,isRefetching:x&&!C,isLoadingError:T&&0===v.dataUpdatedAt,isPaused:"paused"===b,isPlaceholderData:S,isPreviousData:E,isRefetchError:T&&0!==v.dataUpdatedAt,isStale:p(e,t),refetch:this.refetch,remove:this.remove};return w}updateResult(e){let t=this.currentResult,r=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,(0,o.VS)(r,t))return;this.currentResult=r;let n={cache:!0};(null==e?void 0:e.listeners)!==!1&&(()=>{if(!t)return!0;let{notifyOnChangeProps:e}=this.options,r="function"==typeof e?e():e;if("all"===r||!r&&!this.trackedProps.size)return!0;let n=new Set(null!=r?r:this.trackedProps);return this.options.useErrorBoundary&&n.add("error"),Object.keys(this.currentResult).some(e=>{let r=this.currentResult[e]!==t[e];return r&&n.has(e)})})()&&(n.listeners=!0),this.notify({...n,...e})}updateQuery(){let e=this.client.getQueryCache().build(this.client,this.options);if(e===this.currentQuery)return;let t=this.currentQuery;this.currentQuery=e,this.currentQueryInitialState=e.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(null==t||t.removeObserver(this),e.addObserver(this))}onQueryUpdate(e){let t={};"success"===e.type?t.onSuccess=!e.manual:"error"!==e.type||(0,l.DV)(e.error)||(t.onError=!0),this.updateResult(t),this.hasListeners()&&this.updateTimers()}notify(e){s.V.batch(()=>{var t,r,n,o,s,i,a,l;e.onSuccess?(null==(t=(r=this.options).onSuccess)||t.call(r,this.currentResult.data),null==(n=(o=this.options).onSettled)||n.call(o,this.currentResult.data,null)):e.onError&&(null==(s=(i=this.options).onError)||s.call(i,this.currentResult.error),null==(a=(l=this.options).onSettled)||a.call(l,void 0,this.currentResult.error)),e.listeners&&this.listeners.forEach(({listener:e})=>{e(this.currentResult)}),e.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function c(e,t){return!1!==t.enabled&&!e.state.dataUpdatedAt&&!("error"===e.state.status&&!1===t.retryOnMount)||e.state.dataUpdatedAt>0&&h(e,t,t.refetchOnMount)}function h(e,t,r){if(!1!==t.enabled){let n="function"==typeof r?r(e):r;return"always"===n||!1!==n&&p(e,t)}return!1}function d(e,t,r,n){return!1!==r.enabled&&(e!==t||!1===n.enabled)&&(!r.suspense||"error"!==e.state.status)&&p(e,r)}function p(e,t){return e.isStaleByTime(t.staleTime)}var f=r(7294),m=r(4001);let v=f.createContext((n=!1,{clearReset:()=>{n=!1},reset:()=>{n=!0},isReset:()=>n})),g=()=>f.useContext(v);var y=r(5945);let R=f.createContext(!1),b=()=>f.useContext(R);R.Provider;var _=r(4798);let E=(e,t)=>{(e.suspense||e.useErrorBoundary)&&!t.isReset()&&(e.retryOnMount=!1)},S=e=>{f.useEffect(()=>{e.clearReset()},[e])},x=({result:e,errorResetBoundary:t,useErrorBoundary:r,query:n})=>e.isError&&!t.isReset()&&!e.isFetching&&(0,_.L)(r,[e.error,n]),C=e=>{e.suspense&&"number"!=typeof e.staleTime&&(e.staleTime=1e3)},T=(e,t)=>e.isLoading&&e.isFetching&&!t,w=(e,t,r)=>(null==e?void 0:e.suspense)&&T(t,r),P=(e,t,r)=>t.fetchOptimistic(e).then(({data:t})=>{null==e.onSuccess||e.onSuccess(t),null==e.onSettled||e.onSettled(t,null)}).catch(t=>{r.clearReset(),null==e.onError||e.onError(t),null==e.onSettled||e.onSettled(void 0,t)});function L(e,t,r){let n=(0,o._v)(e,t,r);return function(e,t){let r=(0,y.NL)({context:e.context}),n=b(),o=g(),i=r.defaultQueryOptions(e);i._optimisticResults=n?"isRestoring":"optimistic",i.onError&&(i.onError=s.V.batchCalls(i.onError)),i.onSuccess&&(i.onSuccess=s.V.batchCalls(i.onSuccess)),i.onSettled&&(i.onSettled=s.V.batchCalls(i.onSettled)),C(i),E(i,o),S(o);let[a]=f.useState(()=>new t(r,i)),l=a.getOptimisticResult(i);if((0,m.$)(f.useCallback(e=>{let t=n?()=>void 0:a.subscribe(s.V.batchCalls(e));return a.updateResult(),t},[a,n]),()=>a.getCurrentResult(),()=>a.getCurrentResult()),f.useEffect(()=>{a.setOptions(i,{listeners:!1})},[i,a]),w(i,l,n))throw P(i,a,o);if(x({result:l,errorResetBoundary:o,useErrorBoundary:i.useErrorBoundary,query:a.getCurrentQuery()}))throw l.error;return i.notifyOnChangeProps?l:a.trackResult(l)}(n,u)}}}]);