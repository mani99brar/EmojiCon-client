import{B as l,g as y,i as p,I as h,d as b,c as g,a as O,e as k,H as m,s as L,b as E}from"./index-bb6e2fa8.js";class x extends l{constructor({callbackSelector:e,cause:t,data:o,extraData:c,sender:s,urls:n}){super(t.shortMessage||"An error occurred while fetching for an offchain result.",{cause:t,metaMessages:[...t.metaMessages||[],t.metaMessages?.length?"":[],"Offchain Gateway Call:",n&&["  Gateway URL(s):",...n.map(d=>`    ${y(d)}`)],`  Sender: ${s}`,`  Data: ${o}`,`  Callback selector: ${e}`,`  Extra data: ${c}`].flat()}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupError"})}}class M extends l{constructor({result:e,url:t}){super("Offchain gateway response is malformed. Response data must be a hex value.",{metaMessages:[`Gateway URL: ${y(t)}`,`Response: ${JSON.stringify(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupResponseMalformedError"})}}class R extends l{constructor({sender:e,to:t}){super("Reverted sender address does not match target contract address (`to`).",{metaMessages:[`Contract address: ${t}`,`OffchainLookup sender address: ${e}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupSenderMismatchError"})}}function S(a,e){if(!p(a))throw new h({address:a});if(!p(e))throw new h({address:e});return a.toLowerCase()===e.toLowerCase()}const C="0x556f1830",$={name:"OffchainLookup",type:"error",inputs:[{name:"sender",type:"address"},{name:"urls",type:"string[]"},{name:"callData",type:"bytes"},{name:"callbackFunction",type:"bytes4"},{name:"extraData",type:"bytes"}]};async function P(a,{blockNumber:e,blockTag:t,data:o,to:c}){const{args:s}=b({data:o,abi:[$]}),[n,d,r,i,f]=s;try{if(!S(c,n))throw new R({sender:n,to:c});const u=await A({data:r,sender:n,urls:d}),{data:w}=await g(a,{blockNumber:e,blockTag:t,data:O([i,k([{type:"bytes"},{type:"bytes"}],[u,f])]),to:c});return w}catch(u){throw new x({callbackSelector:i,cause:u,data:o,extraData:f,sender:n,urls:d})}}async function A({data:a,sender:e,urls:t}){let o=new Error("An unknown error occurred.");for(let c=0;c<t.length;c++){const s=t[c],n=s.includes("{sender}")||s.includes("{data}")?"GET":"POST",d=n==="POST"?{data:a,sender:e}:void 0;try{const r=await fetch(s.replace("{sender}",e).replace("{data}",a),{body:JSON.stringify(d),method:n});let i;if(r.headers.get("Content-Type")?.startsWith("application/json")?i=(await r.json()).data:i=await r.text(),!r.ok){o=new m({body:d,details:L(i.error)||r.statusText,headers:r.headers,status:r.status,url:s});continue}if(!E(i)){o=new M({result:i,url:s});continue}return i}catch(r){o=new m({body:d,details:r.message,url:s})}}throw o}export{A as ccipFetch,P as offchainLookup,$ as offchainLookupAbiItem,C as offchainLookupSignature};
//# sourceMappingURL=ccip-86fc2fb6.js.map
