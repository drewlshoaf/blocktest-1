(window.webpackJsonpblocktest=window.webpackJsonpblocktest||[]).push([[0],{19:function(e,t,a){e.exports=a(42)},24:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),s=a(18),c=a.n(s),i=(a(24),a(2)),r=a(3),o=a(5),m=a(4),d=a(6),h=(a(8),a(7)),u=a.n(h),p=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).get=function(){u.a.get("https://blockchain.info/rawblock/".concat(a.state.hash,"?cors=true")).then(function(e){a.setState({data:e.data,nextblock:e.data.next_block[0].slice(0,4)+"..."+e.data.next_block[0].slice(e.data.next_block[0].length-4,e.data.next_block[0].length),tx:e.data.tx,show:!0})}).catch(function(e){a.setState({data:{},nextblock:"",tx:[],hash:"",show:!1})})},a.state={data:{},nextblock:"",tx:[],hash:"",show:!1},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"App",style:{width:"90%",margin:"0 auto"}},n.a.createElement("div",{style:{margin:"5% 0%"}},n.a.createElement("div",{className:"input-group mb-3"},n.a.createElement("input",{onChange:function(t){return e.setState({hash:t.target.value})},type:"text",className:"form-control",placeholder:"Enter Raw Hash","aria-label":"Enter Raw Hash","aria-describedby":"button-addon2"}),n.a.createElement("div",{className:"input-group-append"},n.a.createElement("button",{onClick:function(){e.get()},className:"btn btn-outline-secondary",type:"button",id:"button-addon2"},"Get Details"))," "),this.state.show?n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-4 col-sm-12"},n.a.createElement("div",{style:{textAlign:"left"}},n.a.createElement("h3",null,"Raw Block")),n.a.createElement("ul",{className:"list-group"},n.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},n.a.createElement("span",{style:{fontWeight:"bold"}},"Bits"),n.a.createElement("span",null,this.state.data.bits)),n.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},n.a.createElement("span",{style:{fontWeight:"bold"}}," Block Index"),n.a.createElement("span",null,this.state.data.block_index)),n.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},n.a.createElement("span",{style:{fontWeight:"bold"}}," Fee"),n.a.createElement("span",null,this.state.data.fee)),n.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},n.a.createElement("span",{style:{fontWeight:"bold"}}," Hash"),void 0!==this.state.data.hash?n.a.createElement("span",null,this.state.data.hash.slice(0,4),"...",this.state.data.hash.slice(this.state.data.hash.length-4,this.state.data.hash.length)):n.a.createElement("span",null)),n.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},n.a.createElement("span",{style:{fontWeight:"bold"}}," Height"),n.a.createElement("span",null,this.state.data.height)),n.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},n.a.createElement("span",{style:{fontWeight:"bold"}}," Main Chain"),n.a.createElement("span",null,JSON.stringify(this.state.data.main_chain))),n.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},n.a.createElement("span",{style:{fontWeight:"bold"}}," MRKL Root"),void 0!==this.state.data.mrkl_root?n.a.createElement("span",null,this.state.data.mrkl_root.slice(0,4),"...",this.state.data.mrkl_root.slice(this.state.data.mrkl_root.length-4,this.state.data.mrkl_root.length)):n.a.createElement("span",null)),n.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},n.a.createElement("span",{style:{fontWeight:"bold"}}," N TX"),n.a.createElement("span",null,this.state.data.n_tx)),n.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},n.a.createElement("span",{style:{fontWeight:"bold"}}," Next Block"),n.a.createElement("span",null,this.state.nextblock)),n.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},n.a.createElement("span",{style:{fontWeight:"bold"}}," Data Nonce"),n.a.createElement("span",null,this.state.data.nonce)),n.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},n.a.createElement("span",{style:{fontWeight:"bold"}}," Previous Block"),void 0!==this.state.data.prev_block?n.a.createElement("span",null,this.state.data.prev_block.slice(0,4),"...",this.state.data.prev_block.slice(this.state.data.prev_block.length-4,this.state.data.prev_block.length)):n.a.createElement("span",null)),n.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},n.a.createElement("span",{style:{fontWeight:"bold"}}," Received Time"),n.a.createElement("span",null,this.state.data.received_time)),n.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},n.a.createElement("span",{style:{fontWeight:"bold"}}," Relayed By"),n.a.createElement("span",null,this.state.data.relayed_by)),n.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},n.a.createElement("span",{style:{fontWeight:"bold"}}," Size"),n.a.createElement("span",null,this.state.data.size)),n.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},n.a.createElement("span",{style:{fontWeight:"bold"}}," Time"),n.a.createElement("span",null,this.state.data.time)),n.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},n.a.createElement("span",{style:{fontWeight:"bold"}}," Ver"),n.a.createElement("span",null,this.state.data.ver)))),n.a.createElement("div",{className:"col-md-8 col-sm-12"},n.a.createElement("div",{style:{textAlign:"left"}},n.a.createElement("h3",null,"TX")),n.a.createElement("table",{className:"table"},n.a.createElement("thead",{className:"thead-dark"},n.a.createElement("tr",null,n.a.createElement("th",{scope:"col"},"Hash"),n.a.createElement("th",{scope:"col"},"Lock Time"),n.a.createElement("th",{scope:"col"},"Relayed By"),n.a.createElement("th",{scope:"col"},"Size"),n.a.createElement("th",{scope:"col"},"Time"),n.a.createElement("th",{scope:"col"},"TX Index"),n.a.createElement("th",{scope:"col"},"Ver"),n.a.createElement("th",{scope:"col"},"Vin SZ"),n.a.createElement("th",{scope:"col"},"Vout SZ"),n.a.createElement("th",{scope:"col"},"Weight"))),this.state.tx.length>0?n.a.createElement("tbody",null,this.state.tx.map(function(e,t){return n.a.createElement("tr",{key:t},n.a.createElement("th",null,e.hash.slice(0,4)+"..."+e.hash.slice(e.hash.length-4,e.hash.length)),n.a.createElement("td",null,e.lock_time),n.a.createElement("td",null,e.relayed_by),n.a.createElement("td",null,e.size),n.a.createElement("td",null,e.time),n.a.createElement("td",null,e.tx_index),n.a.createElement("td",null,e.ver),n.a.createElement("td",null,e.vin_sz),n.a.createElement("td",null,e.vout_sz),n.a.createElement("td",null,e.weight))})):""))):""))}}]),t}(n.a.Component),E=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).get=function(){u.a.get("https://blockchain.info/rawtx/".concat(a.state.hash,"?cors=true")).then(function(e){console.log(e),a.setState({data:e.data,show:!0,tx:e.data.out,tx2:e.data.inputs})}).catch(function(e){a.setState({data:{},tx:[],tx2:[],show:!1})})},a.state={data:{},nextblock:"",tx:[],tx2:[],hash:"",show:!1},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"App",style:{width:"90%",margin:"0 auto"}},n.a.createElement("div",{style:{margin:"5% 0%"}},n.a.createElement("div",{className:"input-group mb-3"},n.a.createElement("input",{onChange:function(t){return e.setState({hash:t.target.value})},type:"text",className:"form-control",placeholder:"Enter TX Hash","aria-label":"Enter TX Hash","aria-describedby":"button-addon2"}),n.a.createElement("div",{className:"input-group-append"},n.a.createElement("button",{onClick:function(){e.get()},className:"btn btn-outline-secondary",type:"button",id:"button-addon2"},"Get Details"))," "),this.state.show?n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-4 col-sm-12"},n.a.createElement("div",{style:{textAlign:"left"}},n.a.createElement("h3",null,"Raw TX")),n.a.createElement("ul",{className:"list-group"},n.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},n.a.createElement("span",{style:{fontWeight:"bold"}},"Block Height"),n.a.createElement("span",null,this.state.data.block_height)),n.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},n.a.createElement("span",{style:{fontWeight:"bold"}}," Block Index"),n.a.createElement("span",null,this.state.data.block_index)),n.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},n.a.createElement("span",{style:{fontWeight:"bold"}}," Double Spend"),n.a.createElement("span",null,this.state.data.double_spend)),n.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},n.a.createElement("span",{style:{fontWeight:"bold"}}," Hash"),void 0!==this.state.data.hash?n.a.createElement("span",null,this.state.data.hash.slice(0,4),"...",this.state.data.hash.slice(this.state.data.hash.length-4,this.state.data.hash.length)):n.a.createElement("span",null)),n.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},n.a.createElement("span",{style:{fontWeight:"bold"}}," Lock Time"),n.a.createElement("span",null,this.state.data.lock_time)),n.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},n.a.createElement("span",{style:{fontWeight:"bold"}}," Relayed By"),n.a.createElement("span",null,JSON.stringify(this.state.data.relayed_by))),n.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},n.a.createElement("span",{style:{fontWeight:"bold"}}," Size"),n.a.createElement("span",null,this.state.data.size)),n.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},n.a.createElement("span",{style:{fontWeight:"bold"}},"Tx Index"),n.a.createElement("span",null,this.state.data.tx_index)),n.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},n.a.createElement("span",{style:{fontWeight:"bold"}},"Ver"),n.a.createElement("span",null,this.state.data.ver)),n.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},n.a.createElement("span",{style:{fontWeight:"bold"}}," Vin SZ"),n.a.createElement("span",null,this.state.data.vin_sz)),n.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},n.a.createElement("span",{style:{fontWeight:"bold"}}," Vout SZ"),n.a.createElement("span",null,this.state.data.vout_sz)),n.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},n.a.createElement("span",{style:{fontWeight:"bold"}}," Weight"),n.a.createElement("span",null,this.state.data.weight)))),n.a.createElement("div",{className:"col-md-8 col-sm-12"},n.a.createElement("div",{style:{textAlign:"left"}},n.a.createElement("h3",null,"Out")),n.a.createElement("table",{className:"table"},n.a.createElement("thead",{className:"thead-dark"},n.a.createElement("tr",null,n.a.createElement("th",{scope:"col"},"Script"),n.a.createElement("th",{scope:"col"},"Addr"),n.a.createElement("th",{scope:"col"},"N"),n.a.createElement("th",{scope:"col"},"Spent"),n.a.createElement("th",{scope:"col"},"Type"),n.a.createElement("th",{scope:"col"},"TX Index"),n.a.createElement("th",{scope:"col"},"Value"))),this.state.tx.length>0?n.a.createElement("tbody",null,this.state.tx.map(function(e,t){return n.a.createElement("tr",{key:t},n.a.createElement("th",null,e.script.slice(0,4)+"..."+e.script.slice(e.script.length-4,e.script.length)),n.a.createElement("td",null," ",e.addr.slice(0,4)+"..."+e.addr.slice(e.addr.length-4,e.addr.length)),n.a.createElement("td",null,e.n),n.a.createElement("td",null,JSON.stringify(e.spent)),n.a.createElement("td",null,e.type),n.a.createElement("td",null,e.tx_index),n.a.createElement("td",null,e.value))})):""),n.a.createElement("div",{style:{textAlign:"left"}},n.a.createElement("h3",null,"Inputs")),n.a.createElement("table",{className:"table"},n.a.createElement("thead",{className:"thead-dark"},n.a.createElement("tr",null,n.a.createElement("th",{scope:"col"},"Script"),n.a.createElement("th",{scope:"col"},"Sequence"),n.a.createElement("th",{scope:"col"},"Prv.Out Script"),n.a.createElement("th",{scope:"col"},"Prv.Out Addr"),n.a.createElement("th",{scope:"col"},"Prv.Out N"),n.a.createElement("th",{scope:"col"},"Prv.Out Spent"),n.a.createElement("th",{scope:"col"},"Prv.Out Type"),n.a.createElement("th",{scope:"col"},"Prv.Out TX Index"),n.a.createElement("th",{scope:"col"},"Prv.Out Value"))),this.state.tx2.length>0?n.a.createElement("tbody",null,this.state.tx2.map(function(e,t){return n.a.createElement("tr",{key:t},n.a.createElement("th",null,e.script.slice(0,4)+"..."+e.script.slice(e.script.length-4,e.script.length)),n.a.createElement("td",null,e.sequence),n.a.createElement("td",null," ",e.prev_out.script.slice(0,4)+"..."+e.prev_out.script.slice(e.prev_out.script.length-4,e.prev_out.script.length)),n.a.createElement("td",null," ",e.prev_out.addr.slice(0,4)+"..."+e.prev_out.addr.slice(e.prev_out.addr.length-4,e.prev_out.addr.length)),n.a.createElement("td",null,e.prev_out.n),n.a.createElement("td",null,JSON.stringify(e.prev_out.spent)),n.a.createElement("td",null,e.prev_out.type),n.a.createElement("td",null,e.prev_out.tx_index),n.a.createElement("td",null,e.prev_out.value))})):""))):""))}}]),t}(n.a.Component),g=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).get=function(){u.a.get("https://blockchain.info/latestblock?cors=true").then(function(e){a.setState({data:e.data,tx:e.data.txIndexes,tx2:e.data.txIndexes.length>10?e.data.txIndexes.slice(0,10):e.data.txIndexes,datalength:e.data.txIndexes.length>10?10:e.data.txIndexes.length,show:!0})}).catch(function(e){a.setState({data:{},tx:[],tx2:[],datalength:0,show:!1})})},a.state={data:{},tx:[],tx2:[],datalength:0,show:!1},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"App",style:{width:"90%",margin:"0 auto"}},n.a.createElement("div",{style:{margin:"5% 0%"}},n.a.createElement("div",{className:"input-group mb-3"},n.a.createElement("div",{className:"input-group-append"},n.a.createElement("button",{onClick:function(){e.get()},className:"btn btn-outline-secondary",type:"button",id:"button-addon2"},"Get Details"))," "),this.state.show?n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-4 col-sm-12"},n.a.createElement("div",{style:{textAlign:"left"}},n.a.createElement("h3",null,"Latest Block")),n.a.createElement("ul",{className:"list-group"},n.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},n.a.createElement("span",{style:{fontWeight:"bold"}},"Block Index"),n.a.createElement("span",null,this.state.data.block_index)),n.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},n.a.createElement("span",{style:{fontWeight:"bold"}}," Height"),n.a.createElement("span",null,this.state.data.height)),n.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},n.a.createElement("span",{style:{fontWeight:"bold"}}," Time"),n.a.createElement("span",null,this.state.data.time)),n.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},n.a.createElement("span",{style:{fontWeight:"bold"}}," Hash"),void 0!==this.state.data.hash?n.a.createElement("span",null,this.state.data.hash.slice(0,4),"...",this.state.data.hash.slice(this.state.data.hash.length-4,this.state.data.hash.length)):n.a.createElement("span",null)))),n.a.createElement("div",{className:"col-md-8 col-sm-12"},n.a.createElement("div",{style:{textAlign:"left"}},n.a.createElement("h3",null,"TX Indexes")),n.a.createElement("table",{className:"table"},n.a.createElement("thead",{className:"thead-dark"},n.a.createElement("tr",null,n.a.createElement("th",{scope:"col"},"#"),n.a.createElement("th",{scope:"col"},"TX Indexes"))),this.state.tx2.length>0?n.a.createElement("tbody",null,this.state.tx2.map(function(e,t){return n.a.createElement("tr",{key:t},n.a.createElement("td",null,t),n.a.createElement("td",null,e))})):"",n.a.createElement("div",{className:"input-group-append"},n.a.createElement("button",{onClick:function(){e.setState({tx2:e.state.tx.slice(0,e.state.datalength+10),datalength:e.state.datalength+10})},className:"btn btn-outline-secondary",type:"button",id:"button-addon2"},"Load More"))))):""))}}]),t}(n.a.Component),b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={data:{},nextblock:"",tx:[],hash:"",show:!1},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return n.a.createElement("div",{className:"App",style:{width:"90%",margin:"0 auto"}},n.a.createElement("div",{style:{margin:"5% 0%",textAlign:"left"}},n.a.createElement("h4",null,"Blockchain.info API's")),n.a.createElement("ul",{className:"nav nav-tabs",id:"myTab",role:"tablist"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link active",id:"home-tab","data-toggle":"tab",href:"#home",role:"tab","aria-controls":"home","aria-selected":"true"},"Raw Block")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",id:"profile-tab","data-toggle":"tab",href:"#profile",role:"tab","aria-controls":"profile","aria-selected":"false"},"TX Block")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",id:"contact-tab","data-toggle":"tab",href:"#contact",role:"tab","aria-controls":"contact","aria-selected":"false"},"Latest Block"))),n.a.createElement("div",{className:"tab-content",id:"myTabContent"},n.a.createElement("div",{className:"tab-pane fade show active",id:"home",role:"tabpanel","aria-labelledby":"home-tab"},n.a.createElement(p,null)),n.a.createElement("div",{className:"tab-pane fade",id:"profile",role:"tabpanel","aria-labelledby":"profile-tab"},n.a.createElement(E,null)),n.a.createElement("div",{className:"tab-pane fade",id:"contact",role:"tabpanel","aria-labelledby":"contact-tab"},n.a.createElement(g,null))))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){}},[[19,1,2]]]);
//# sourceMappingURL=main.65d43ec4.chunk.js.map