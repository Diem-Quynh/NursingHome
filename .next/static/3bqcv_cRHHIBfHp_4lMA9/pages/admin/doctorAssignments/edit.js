(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"2b5P":function(e,t,r){"use strict";var n=r("1OyB"),a=r("Ji7U"),c=r("md7G"),o=r("foSv");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(o.a)(e);if(t){var a=Object(o.a)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return Object(c.a)(this,r)}}var i=function(e){Object(a.a)(r,e);var t=s(r);function r(e){var a;return Object(n.a)(this,r),(a=t.call(this,e)).name="rooms",a}return r}(r("zjTY").a);t.a=i},"6Ajk":function(e,t,r){"use strict";var n=r("q1tI"),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm104 316.9c0 10.2-4.9 19.9-13.2 25.9L457.4 512l145.4 105.2c8.3 6 13.2 15.6 13.2 25.9V690c0 6.5-7.4 10.3-12.7 6.5l-246-178a7.95 7.95 0 010-12.9l246-178a8 8 0 0112.7 6.5v46.8z"}}]},name:"left-circle",theme:"filled"},c=r("6VBw"),o=function(e,t){return n.createElement(c.a,Object.assign({},e,{ref:t,icon:a}))};o.displayName="LeftCircleFilled";t.a=n.forwardRef(o)},"6u4D":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/doctorAssignments/edit",function(){return r("g9mj")}])},QEW4:function(e,t,r){"use strict";var n=r("q1tI"),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M893.3 293.3L730.7 130.7c-12-12-28.3-18.7-45.3-18.7H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 176h256v112H384V176zm128 554c-79.5 0-144-64.5-144-144s64.5-144 144-144 144 64.5 144 144-64.5 144-144 144zm0-224c-44.2 0-80 35.8-80 80s35.8 80 80 80 80-35.8 80-80-35.8-80-80-80z"}}]},name:"save",theme:"filled"},c=r("6VBw"),o=function(e,t){return n.createElement(c.a,Object.assign({},e,{ref:t,icon:a}))};o.displayName="SaveFilled";t.a=n.forwardRef(o)},ajDV:function(e,t,r){"use strict";var n=r("q1tI"),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z"}}]},name:"delete",theme:"filled"},c=r("6VBw"),o=function(e,t){return n.createElement(c.a,Object.assign({},e,{ref:t,icon:a}))};o.displayName="DeleteFilled";t.a=n.forwardRef(o)},g9mj:function(e,t,r){"use strict";r.r(t);var n=r("wx14"),a=r("o0o1"),c=r.n(a),o=r("HaE+"),s=r("ODXe"),i=r("jz6S"),u=r("q1tI"),d=r.n(u),l=r("dk5U"),f=r("2fM7"),m=r("Vl3Y"),p=r("+eQT"),h=r("5rEg"),g=r("2/Rp"),b=r("tkEX"),v=r("2b5P"),j=r("3PWm"),w=r("LvDl"),O=r.n(w),y=r("FxId"),x=r("38j0"),E=r("6Ajk"),k=r("QEW4"),R=r("ajDV"),D=r("6nNS"),I=r("wd/R"),A=r.n(I),S=d.a.createElement,B=f.a.Option,z={labelCol:{xs:{span:24},sm:{span:4}},wrapperCol:{xs:{span:24},sm:{span:18}}},C=function(e){var t=e.rooms,r=e.users,a=e.doctorAssign,v=e.doctorAssignError,j=Object(x.a)(),w=j.t,O=j.notify,I=j.redirect,C=(j.setStore,j.getAuth,j.getStore,Object(u.useState)(!1)),q=C[0],Y=C[1],P=m.a.useForm(),V=Object(s.a)(P,1)[0],M=new b.a,T=d.a.createRef(),H=(0,Object(D.a)().checkPermission)({"admin.doctorAssignments":"D"}),N=function(e){return O(w("errors:".concat(e.code)),w(e.message),"error")},F=function(){var e=Object(o.a)(c.a.mark((function e(t){var r,n,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!v){e.next=2;break}return e.abrupt("return",N(v));case 2:return Y(!0),e.next=5,Object(y.a)(M.edit({id:a.id,values:t}));case 5:if(r=e.sent,n=Object(s.a)(r,2),o=n[0],n[1],Y(!1),!o){e.next=12;break}return e.abrupt("return",N(o));case 12:O(w("message.recordUpdated")),I("frontend.admin.doctorAssignments.index");case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(o.a)(c.a.mark((function e(){var t,r,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!v){e.next=2;break}return e.abrupt("return",N(v));case 2:return e.next=4,Object(y.a)(M.delete({ids:[a.id]}));case 4:if(t=e.sent,r=Object(s.a)(t,2),n=r[0],r[1],!n){e.next=10;break}return e.abrupt("return",N(n));case 10:O(w("message.recordDeleted")),I("frontend.admin.doctorAssignments.index");case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return S(l.a,null,S("div",{className:"content"},S(m.a,Object(n.a)({},z,{form:V,name:"createPatient",initialValues:{doctorId:a.doctorId,roomCode:a.roomCode,dateBegin:a.dateBegin?A()(a.dateBegin).subtract(7,"h"):"",dateEnd:a.dateEnd?A()(a.dateEnd).subtract(7,"h"):"",note:a.note},onFinish:F,scrollToFirstError:!0}),S(m.a.Item,{label:w("doctor"),name:"doctorId",rules:[{required:!0,message:w("form.required")}]},S(f.a,{showSearch:!0,placeholder:w("placeholder.user"),filterOption:function(e,t){return t.children[2].toLowerCase().indexOf(e.toLowerCase())>=0}},function(){var e=[];return r.map((function(t){e.push(S(B,{value:t.id,key:t.id},t.code," - ",t.fullname))})),e}())),S(m.a.Item,{label:w("room"),name:"roomCode",rules:[{required:!0,message:w("form.required")}]},S(f.a,{showSearch:!0,placeholder:w("placeholder.room")},function(){var e=[];return t.map((function(t){e.push(S(B,{value:t.code,key:t.code},t.code))})),e}())),S(m.a.Item,{label:w("doctorAssignments.dateBegin"),name:"dateBegin",rules:[{required:!0,message:w("form.required")}]},S(p.a,{format:"YYYY-MM-DD",showTime:!1,placeholder:w("placeholder.date")})),S(m.a.Item,{label:w("doctorAssignments.dateEnd"),name:"dateEnd"},S(p.a,{format:"YYYY-MM-DD",showTime:!1,placeholder:w("placeholder.date")})),S(m.a.Item,{label:w("note"),name:"note"},S(h.a,null)),S(m.a.Item,{wrapperCol:{span:24},style:{textAlign:"center"}},S(g.a,{onClick:function(){return I("frontend.admin.doctorAssignments.index")},style:{marginRight:8}},S(E.a,null)," ",w("cancel")),S(g.a,{type:"primary",htmlType:"submit",loading:q,style:{marginRight:8}},S(k.a,null)," ",w("submit")),S(g.a,{hidden:!H,danger:!0,onClick:function(){T.current&&T.current.show(a.id)}},S(R.a,null)," ",w("deleteItem")))),S(i.a,{ref:T,onSubmit:L,title:w("deleteItem"),content:w("message.deleteConfirm")})))};C.getInitialProps=function(){var e=Object(o.a)(c.a.mark((function e(t){var r,n,a,o,i,u,d,l,f,m,p,h,g,w,x,E;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new b.a(t),n=new v.a(t),a=new j.a(t),(o=t.query).id||(i={code:9996,message:"missing ID"}),e.next=7,Object(y.a)(r.detail({id:o.id}));case 7:return u=e.sent,d=Object(s.a)(u,2),l=d[0],f=d[1],l&&(f={}),e.next=14,Object(y.a)(n.index({pageSize:-1}));case 14:return m=e.sent,p=Object(s.a)(m,2),p[0],h=p[1],g=JSON.stringify({field:"position",operator:"contains",value:"B\xe1c s\u1ef9"}),e.next=21,Object(y.a)(a.index({pageSize:-1,filters:[g]}));case 21:return w=e.sent,x=Object(s.a)(w,2),x[0],E=x[1],e.abrupt("return",{namespacesRequired:["common","pages","menu","errors"],error:i,doctorAssign:f,doctorAssignError:l,rooms:O.a.get(h,"data",[]),users:O.a.get(E,"data",[])});case 26:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C.permissions={"admin.doctorAssignments":"U"},t.default=C},tkEX:function(e,t,r){"use strict";var n=r("1OyB"),a=r("Ji7U"),c=r("md7G"),o=r("foSv");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(o.a)(e);if(t){var a=Object(o.a)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return Object(c.a)(this,r)}}var i=function(e){Object(a.a)(r,e);var t=s(r);function r(e){var a;return Object(n.a)(this,r),(a=t.call(this,e)).name="doctorAssignments",a}return r}(r("zjTY").a);t.a=i}},[["6u4D",1,2,3,5,0,4,6,7]]]);
//# sourceMappingURL=edit.js.map