"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[4436],{40394:(t,e,o)=>{o.d(e,{b:()=>m,D:()=>g});var i=o(23174),n=o.n(i),l=o(67294),r=o(24405),d=o(53397),a=o(82990),c=o(12534),s=o(75024),h=o(12508),u=o(84787),w=o(89728);function m(t){let{columnRenderInfo:e,theme:o,containerMarginTop:i}=t;return{container:{marginTop:i??17,tableLayout:"fixed",borderCollapse:"collapse",width:"100%",minWidth:e.reduce(((t,e)=>t+x(e.widthData)+b),0)},tableHeaderRow:{},paddingRowCell:{height:8},firstColumn:{}}}function g(t){let{columnRenderInfo:e,sortState:o,onSortStateChanged:i,showRowBorders:d,hideHeaderRowPadding:a,renderRowChild:c,rows:s,onRowClick:h,renderNoRowsComponent:w,styles:m,getStyleForRow:g,multiselect:C,onScrollBottom:f,allowHorizontalScroll:b,maxHeight:v,setStickyHeaderRow:x}=t;window.__c={n:"BaseTable"};const S=(0,r.yK)((t=>({horizontalScrollContainer:{position:"relative",width:"100%",display:"grid",overflow:"auto"},scrollableContainer:{maxHeight:v,position:"relative",display:"grid",overflowX:"auto",width:"100%"},table:b?{...m.container,minWidth:"100%",width:void 0}:m.container})),[m.container,b,v]),k=(0,l.useCallback)((t=>{var e;if(!o)return;const n=t.id===(null===(e=o.column)||void 0===e?void 0:e.id)&&!o.sortAscending;i&&i({sortAscending:n,column:t})}),[o,i]),R=l.createElement(l.Fragment,null,n()("table",{style:S.table},void 0,n()("tr",{style:m.tableHeaderRow},void 0,e.map(((t,e)=>n()(y,{index:e,column:t,sortState:o,handleSortableColumnClick:k,shouldShowSortIcon:0!==s.length,multiselect:C,allowHorizontalScroll:b,setStickyHeaderRow:x,style:0===e?m.firstColumn:void 0},`header_${t.id}`)))),!a&&n()("tr",{},void 0,e.map((t=>n()("td",{style:m.paddingRowCell},`padding_row_${t.id}`)))),s.map((t=>n()(p,{columns:e,onRowClick:h,rowChild:null==c?void 0:c(t),showRowBorders:d,row:t,getStyleForRow:g,multiselect:C,allowHorizontalScroll:b,firstColumnStyle:m.firstColumn},`${t.id}_row`))),!b&&f&&n()(u.Z,{loading:!1,loadMoreOffsetThreshold:100,onLoadMore:f})),0===s.length&&w());return b?n()("div",{style:S.horizontalScrollContainer},void 0,n()("div",{style:S.scrollableContainer},void 0,R,v&&f&&n()(u.Z,{loading:!1,loadMoreOffsetThreshold:100,onLoadMore:f})),!v&&f&&n()(u.Z,{loading:!1,loadMoreOffsetThreshold:100,onLoadMore:f})):n()("div",{style:{maxHeight:v}},void 0,R)}function y(t){let{column:e,index:o,sortState:i,handleSortableColumnClick:l,shouldShowSortIcon:c,multiselect:s,allowHorizontalScroll:u,setStickyHeaderRow:m,style:g}=t;window.__c={n:"HeaderCell"};const y=0===o,p=1===o,C=(0,r.yK)((t=>({th:{boxShadow:`\n\t\t\t\t\tinset 0 1px 0 ${t.tableDividerColor},\n\t\t\t\t\tinset 0 -1px 0 ${t.tableDividerColor}\n\t\t\t\t`,...m&&{position:"sticky",top:0,zIndex:3,background:t.modalBackground},...S(e),...u&&y&&{position:"sticky",zIndex:4,left:0,background:t.modalBackground,boxShadow:`\n\t\t\t\t\t\t\tinset -1px 0px 0px ${t.tableDividerColor},\n\t\t\t\t\t\t\tinset 0 1px 0 ${t.tableDividerColor},\n\t\t\t\t\t\t\tinset 0 -1px 0 ${t.tableDividerColor}\n\t\t\t\t\t\t`,paddingRight:15},...u&&p&&{paddingLeft:15},height:32,...g},innerDiv:{display:"flex",alignItems:"center",height:"100%",minWidth:x(e.widthData),maxWidth:e.widthData.maxWidth},text:{fontSize:a.Z.fontSize.UISmall.desktop,fontWeight:a.Z.fontWeight.regular,color:t.mediumTextColor,...a.Z.textOverflowStyle},sortButton:{padding:5,margin:-5},sortIcon:{color:t.mediumTextColor,width:12,height:12,marginLeft:4,fill:"currentColor"},multiselectCheckbox:{color:t.selectLightGray[300],marginRight:16,opacity:null!=s&&s.header.isDisabled?.5:1}})),[e,s,u,m,g,y,p]),f=n()("div",{style:C.text},void 0,e.headerTitle),b=e.sortable?n()(w.Z,{style:C.sortButton,onClick:()=>l(e)},void 0,f,(()=>{if(i&&c&&e.id===i.column.id)return d.Z.arrowDownSmall({...C.sortIcon,...i.sortAscending&&{transform:"rotate(180deg)"}})})()):f,v=void 0!==s&&0===o?n()(h.Z,{style:C.multiselectCheckbox,disabled:s.header.isDisabled,onClick:()=>s.header.onClick(),checked:s.header.isSelected,size:14}):null;return n()("th",{style:C.th},void 0,n()("div",{style:C.innerDiv},void 0,v,b))}function p(t){let{row:e,columns:o,onRowClick:i,rowChild:d,showRowBorders:a,getStyleForRow:c,allowHorizontalScroll:s,multiselect:h,firstColumnStyle:u}=t;window.__c={n:"RowComponent"};const[w,m]=(0,l.useState)(!1),g=e.isClickable,y=(0,l.useCallback)((()=>m(!0)),[]),p=(0,l.useCallback)((()=>m(!1)),[]),b=(0,l.useCallback)((t=>{g&&void 0!==i&&f(t,(()=>i(e)))}),[g,i,e]),v=(0,r.yK)((t=>({row:{height:1,...g&&{cursor:"pointer"},...a&&{borderBottom:`1px solid ${t.tableDividerColor}`},...c&&c(e)}})),[g,a,c,e]);return l.createElement(l.Fragment,null,n()("tr",{onMouseLeave:p,onMouseEnter:y,style:v.row,onClick:b},void 0,o.map(((t,i)=>n()(C,{isRowHovered:w,isRowClickable:g,columnIndex:i,numColumns:o.length,data:e,column:t,multiselect:h,allowHorizontalScroll:s,cellStyle:0===i?u:void 0},`cell_${e.id}_${t.id}`)))),d&&n()("tr",{style:v.row},void 0,n()("td",{colSpan:o.length},void 0,d)))}function C(t){let{data:e,column:o,columnIndex:i,numColumns:l,isRowHovered:d,isRowClickable:c,multiselect:u,allowHorizontalScroll:w,cellStyle:m}=t;window.__c={n:"Cell"};const g=0===i,y=1===i,p=i===l-1,C=(0,r.yK)((t=>({td:{...S(o),height:"inherit",...g&&{borderRadius:(0,s.wK)({topLeft:3,bottomLeft:3})},...p&&{borderRadius:(0,s.wK)({topRight:3,bottomRight:3})},...w&&g&&{position:"sticky",zIndex:2,left:0,background:t.modalBackground,boxShadow:`inset -1px 0px 0px ${t.tableDividerColor}`,paddingRight:15},...w&&y&&{paddingLeft:15},...d&&c&&{background:t.buttonHoveredBackground},...m},innerDiv:{minWidth:x(o.widthData),maxWidth:o.widthData.maxWidth,fontSize:a.Z.fontSize.UIRegular.desktop,color:t.regularTextColor,minHeight:42,display:"flex",alignItems:"center",height:"100%"},multiselectCheckbox:{color:t.selectLightGray[300],marginRight:16,opacity:null!=u&&u.row.getDisabledState(e)?.5:1}})),[o,g,y,p,d,c,u,e,w,m]),b=Boolean(o.hasClickableContents)||!!o.computeClickableContents&&o.computeClickableContents(e),v=u&&g?n()(h.Z,{style:C.multiselectCheckbox,checked:u.row.getSelectedState(e),onClick:()=>u.row.onClick(e),disabled:u.row.getDisabledState(e),size:14}):null;return n()("td",{style:C.td},void 0,n()("div",{style:C.innerDiv,onClick:b?f:void 0},void 0,v,o.renderCell({...e,isRowHovered:d})))}const f=(t,e)=>{(0,c.ZP)({event:t,context:c.Af.BaseTableRowClick,callback:e})},b=10,v={paddingLeft:b/2,paddingRight:b/2};function x(t){return"minWidth"in t?t.minWidth:t.width}function S(t){let e;return e="width"in t.widthData?{width:t.widthData.width}:{width:`${t.widthData.widthPercent}%`,minWidth:t.widthData.minWidth},{...v,...e}}},53695:(t,e,o)=>{o.d(e,{N:()=>v,z:()=>S});var i=o(23174),n=o.n(i),l=o(10434),r=o.n(l),d=o(67294),a=o(81954),c=o(24405),s=o(53397),h=o(87279),u=o(61766),w=o(31945),m=o(78140),g=o(32163),y=o(89728),p=o(44532),C=o(72495),f=o(64369),b=o(69219);function v(t){let{title:e,items:o,disabled:i,hideDropdownIcon:l}=t;window.__c={n:"DropdownCell"};const s=(0,a.qz)(void 0,u.Z),y=(0,c.yK)((()=>({container:{minWidth:180}})),[]),f={key:"workspace-users-menu",render:t=>d.createElement(C.Z,t),items:o};return n()(w.ZP,{popupType:p.kQ.Popup,style:y.container,buttonPopupStore:s,disabled:i,renderOrigin:t=>d.createElement(x,r()({title:e,hideDropdownIcon:l,disabled:i},t)),render:()=>n()(m.Z,{menuType:h.og.Popup,maxWidth:250},void 0,n()(g.Z,{type:g.i.Vertical,initialFocus:0,sections:[f],onAccept:()=>{s.setState({open:!1})}}))})}function x(t){let{title:e,hideDropdownIcon:o,disabled:i,...l}=t;window.__c={n:"ClickableCellBody"};const a=(0,c.yK)((t=>({container:{display:"inline-flex",flexDirection:"row",justifyContent:"center",alignItems:"center",maxWidth:"100%"},name:{fontSize:14,maxWidth:150},chevron:{width:10,height:10,marginLeft:4,color:t.lightIconColor}})),[]);return d.createElement(y.Z,r()({style:a.container,disabled:i},l),n()(f.Z,{showTooltipWhenTruncated:!0},void 0,e),o||i?null:s.Z.chevronDown(a.chevron))}function S(){window.__c={n:"LoadingDropdownCell"};const t=(0,c.yK)((()=>({title:{width:"50%"}})),[]);return n()(b.H,{titleStyles:t.title})}},69219:(t,e,o)=>{o.d(e,{i:()=>a,H:()=>c});var i=o(23174),n=o.n(i),l=(o(67294),o(24405)),r=o(36596),d=o(64369);function a(t){let{title:e,byline:o,icon:i,useThinTitle:r}=t;window.__c={n:"IconCell"};const a=i?20:0,c=(0,l.yK)((t=>({container:{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center",padding:"8px 0",width:"100%"},summaryContainer:{width:`calc(100% - ${a}px)`},iconContainer:{height:a,width:a,flexGrow:0,flexShrink:0,flexBasis:a,marginRight:12,display:"flex",justifyContent:"center",alignItems:"center",borderRadius:6},name:{fontSize:14,fontWeight:r?400:500},byline:{fontSize:12,lineHeight:1.3,opacity:.5}})),[a,r]);return n()("div",{style:c.container},void 0,i?n()("div",{style:c.iconContainer},void 0,i):null,n()("div",{style:c.summaryContainer},void 0,n()(d.Z,{style:c.name,showTooltipWhenTruncated:!0},void 0,e),o?n()(d.Z,{style:c.byline},void 0,o):null))}function c(t){let{titleStyles:e,includeByline:o,bylineStyles:i,includeIcon:d,iconStyles:a}=t;window.__c={n:"LoadingIconCell"};const c=(0,l.yK)((()=>({container:{height:53,display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center",padding:"8px 0",width:"100%",gap:8},icon:{borderRadius:4,height:24,width:24,marginLeft:-2,...a},textContainer:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-start",width:"calc(100% - 32px)",gap:4},title:{borderRadius:4,height:14,width:"80%",...e},byline:{borderRadius:4,height:12,width:"60%",...i}})),[e,i,a]);return n()("div",{style:c.container},void 0,d?n()(r.Z,{style:c.icon}):null,n()("div",{style:c.textContainer},void 0,n()(r.Z,{style:c.title}),o?n()(r.Z,{style:c.byline}):null))}}}]);