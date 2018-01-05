
          window.__NEXT_REGISTER_PAGE('/documentation/design-guidelines', function() {
            var comp = module.exports=webpackJsonp([18],{1649:function(e,t,r){e.exports=r(1650)},1650:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=r(43),i=n(s),o=r(44),a=n(o),l=r(25),h=n(l),u=r(16),p=n(u),c=r(17),f=n(c),d=r(26),g=n(d),y=r(27),b=n(y),m=r(1),x=n(m),k=r(9),_=r(47),w=n(_),v=r(13),A=n(v),S=r(49),E=function(e){function t(){return(0,p.default)(this,t),(0,g.default)(this,(t.__proto__||(0,h.default)(t)).apply(this,arguments))}return(0,b.default)(t,e),(0,f.default)(t,[{key:"render",value:function(){return x.default.createElement(A.default,{pathname:this.props.url.pathname},x.default.createElement(k.Card,null,x.default.createElement(w.default,{markdownContent:this.props.content})))}}],[{key:"getInitialProps",value:function(){function e(){return t.apply(this,arguments)}var t=(0,a.default)(i.default.mark(function e(){var t;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,S.fetchFromRepo)("/docs/design-guidelines.md",1);case 2:return t=e.sent,e.abrupt("return",{content:t});case 4:case"end":return e.stop()}},e,this)}));return e}()}]),t}(x.default.Component);t.default=E},47:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=r(18),i=n(s),o=r(1),a=n(o),l=r(48),h=n(l),u=r(23),p=n(u),c=(r(122),p.default.div(function(e){var t=e.theme;return{"& h2":(0,i.default)({},t.typography.heading1),"& h3":(0,i.default)({},t.typography.heading2),"& p, & li":(0,i.default)({},t.typography.body),"& ul":{paddingLeft:1.25*t.spacing}}})),f=function(e){var t=e.css,r=e.className,n=e.markdownContent,s=e.children;return n?a.default.createElement(c,{css:t,className:r,dangerouslySetInnerHTML:{__html:(0,h.default)(n)}}):a.default.createElement(c,{css:t,className:r},s)};t.default=f},48:function(e,t,r){(function(t){(function(){function t(e){this.tokens=[],this.tokens.links={},this.options=e||p.defaults,this.rules=c.normal,this.options.gfm&&(this.options.tables?this.rules=c.tables:this.rules=c.gfm)}function r(e,t){if(this.options=t||p.defaults,this.links=e,this.rules=f.normal,this.renderer=this.options.renderer||new n,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.gfm?this.options.breaks?this.rules=f.breaks:this.rules=f.gfm:this.options.pedantic&&(this.rules=f.pedantic)}function n(e){this.options=e||{}}function s(e){this.tokens=[],this.token=null,this.options=e||p.defaults,this.options.renderer=this.options.renderer||new n,this.renderer=this.options.renderer,this.renderer.options=this.options}function i(e,t){return e.replace(t?/&/g:/&(?!#?\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function o(e){return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,function(e,t){return t=t.toLowerCase(),"colon"===t?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""})}function a(e,t){return e=e.source,t=t||"",function r(n,s){return n?(s=s.source||s,s=s.replace(/(^|[^\[])\^/g,"$1"),e=e.replace(n,s),r):new RegExp(e,t)}}function l(e,t){return baseUrls[" "+e]||(/^[^:]+:\/*[^\/]*$/.test(e)?baseUrls[" "+e]=e+"/":baseUrls[" "+e]=e.replace(/[^\/]*$/,"")),e=baseUrls[" "+e],"//"===t.slice(0,2)?e.replace(/:[^]*/,":")+t:"/"===t.charAt(0)?e.replace(/(:\/*[^\/]*)[^]*/,"$1")+t:e+t}function h(){}function u(e){for(var t,r,n=1;n<arguments.length;n++){t=arguments[n];for(r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}function p(e,r,n){if(n||"function"==typeof r){n||(n=r,r=null),r=u({},p.defaults,r||{});var o,a,l=r.highlight,h=0;try{o=t.lex(e,r)}catch(e){return n(e)}a=o.length;var c=function(e){if(e)return r.highlight=l,n(e);var t;try{t=s.parse(o,r)}catch(t){e=t}return r.highlight=l,e?n(e):n(null,t)};if(!l||l.length<3)return c();if(delete r.highlight,!a)return c();for(;h<o.length;h++)!function(e){"code"!==e.type?--a||c():l(e.text,e.lang,function(t,r){return t?c(t):null==r||r===e.text?--a||c():(e.text=r,e.escaped=!0,void(--a||c()))})}(o[h])}else try{return r&&(r=u({},p.defaults,r)),s.parse(t.lex(e,r),r)}catch(e){if(e.message+="\nPlease report this to https://github.com/chjj/marked.",(r||p.defaults).silent)return"<p>An error occured:</p><pre>"+i(e.message+"",!0)+"</pre>";throw e}}var c={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:h,hr:/^( *[-*_]){3,} *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:h,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,blockquote:/^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,table:h,paragraph:/^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,text:/^[^\n]+/};c.bullet=/(?:[*+-]|\d+\.)/,c.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,c.item=a(c.item,"gm")(/bull/g,c.bullet)(),c.list=a(c.list)(/bull/g,c.bullet)("hr","\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def","\\n+(?="+c.def.source+")")(),c._tag="(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b",c.html=a(c.html)("comment",/<!--[\s\S]*?-->/)("closed",/<(tag)[\s\S]+?<\/\1>/)("closing",/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g,c._tag)(),c.paragraph=a(c.paragraph)("hr",c.hr)("heading",c.heading)("lheading",c.lheading)("blockquote",c.blockquote)("tag","<"+c._tag)("def",c.def)(),c.normal=u({},c),c.gfm=u({},c.normal,{fences:/^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/}),c.gfm.paragraph=a(c.paragraph)("(?!","(?!"+c.gfm.fences.source.replace("\\1","\\2")+"|"+c.list.source.replace("\\1","\\3")+"|")(),c.tables=u({},c.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/}),t.rules=c,t.lex=function(e,r){return new t(r).lex(e)},t.prototype.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.token(e,!0)},t.prototype.token=function(e,t,r){for(var n,s,i,o,a,l,h,u,p,e=e.replace(/^ +$/gm,"");e;)if((i=this.rules.newline.exec(e))&&(e=e.substring(i[0].length),i[0].length>1&&this.tokens.push({type:"space"})),i=this.rules.code.exec(e))e=e.substring(i[0].length),i=i[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",text:this.options.pedantic?i:i.replace(/\n+$/,"")});else if(i=this.rules.fences.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"code",lang:i[2],text:i[3]||""});else if(i=this.rules.heading.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"heading",depth:i[1].length,text:i[2]});else if(t&&(i=this.rules.nptable.exec(e))){for(e=e.substring(i[0].length),l={type:"table",header:i[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:i[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:i[3].replace(/\n$/,"").split("\n")},u=0;u<l.align.length;u++)/^ *-+: *$/.test(l.align[u])?l.align[u]="right":/^ *:-+: *$/.test(l.align[u])?l.align[u]="center":/^ *:-+ *$/.test(l.align[u])?l.align[u]="left":l.align[u]=null;for(u=0;u<l.cells.length;u++)l.cells[u]=l.cells[u].split(/ *\| */);this.tokens.push(l)}else if(i=this.rules.lheading.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"heading",depth:"="===i[2]?1:2,text:i[1]});else if(i=this.rules.hr.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"hr"});else if(i=this.rules.blockquote.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"blockquote_start"}),i=i[0].replace(/^ *> ?/gm,""),this.token(i,t,!0),this.tokens.push({type:"blockquote_end"});else if(i=this.rules.list.exec(e)){for(e=e.substring(i[0].length),o=i[2],this.tokens.push({type:"list_start",ordered:o.length>1}),i=i[0].match(this.rules.item),n=!1,p=i.length,u=0;u<p;u++)l=i[u],h=l.length,l=l.replace(/^ *([*+-]|\d+\.) +/,""),~l.indexOf("\n ")&&(h-=l.length,l=this.options.pedantic?l.replace(/^ {1,4}/gm,""):l.replace(new RegExp("^ {1,"+h+"}","gm"),"")),this.options.smartLists&&u!==p-1&&(a=c.bullet.exec(i[u+1])[0],o===a||o.length>1&&a.length>1||(e=i.slice(u+1).join("\n")+e,u=p-1)),s=n||/\n\n(?!\s*$)/.test(l),u!==p-1&&(n="\n"===l.charAt(l.length-1),s||(s=n)),this.tokens.push({type:s?"loose_item_start":"list_item_start"}),this.token(l,!1,r),this.tokens.push({type:"list_item_end"});this.tokens.push({type:"list_end"})}else if(i=this.rules.html.exec(e))e=e.substring(i[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===i[1]||"script"===i[1]||"style"===i[1]),text:i[0]});else if(!r&&t&&(i=this.rules.def.exec(e)))e=e.substring(i[0].length),this.tokens.links[i[1].toLowerCase()]={href:i[2],title:i[3]};else if(t&&(i=this.rules.table.exec(e))){for(e=e.substring(i[0].length),l={type:"table",header:i[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:i[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:i[3].replace(/(?: *\| *)?\n$/,"").split("\n")},u=0;u<l.align.length;u++)/^ *-+: *$/.test(l.align[u])?l.align[u]="right":/^ *:-+: *$/.test(l.align[u])?l.align[u]="center":/^ *:-+ *$/.test(l.align[u])?l.align[u]="left":l.align[u]=null;for(u=0;u<l.cells.length;u++)l.cells[u]=l.cells[u].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */);this.tokens.push(l)}else if(t&&(i=this.rules.paragraph.exec(e)))e=e.substring(i[0].length),this.tokens.push({type:"paragraph",text:"\n"===i[1].charAt(i[1].length-1)?i[1].slice(0,-1):i[1]});else if(i=this.rules.text.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"text",text:i[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens};var f={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<([^ >]+(@|:\/)[^ >]+)>/,url:h,tag:/^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code:/^(`+)([\s\S]*?[^`])\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:h,text:/^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/};f._inside=/(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/,f._href=/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/,f.link=a(f.link)("inside",f._inside)("href",f._href)(),f.reflink=a(f.reflink)("inside",f._inside)(),f.normal=u({},f),f.pedantic=u({},f.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/}),f.gfm=u({},f.normal,{escape:a(f.escape)("])","~|])")(),url:/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:a(f.text)("]|","~]|")("|","|https?://|")()}),f.breaks=u({},f.gfm,{br:a(f.br)("{2,}","*")(),text:a(f.gfm.text)("{2,}","*")()}),r.rules=f,r.output=function(e,t,n){return new r(t,n).output(e)},r.prototype.output=function(e){for(var t,r,n,s,o="";e;)if(s=this.rules.escape.exec(e))e=e.substring(s[0].length),o+=s[1];else if(s=this.rules.autolink.exec(e))e=e.substring(s[0].length),"@"===s[2]?(r=i(":"===s[1].charAt(6)?this.mangle(s[1].substring(7)):this.mangle(s[1])),n=this.mangle("mailto:")+r):(r=i(s[1]),n=r),o+=this.renderer.link(n,null,r);else if(this.inLink||!(s=this.rules.url.exec(e))){if(s=this.rules.tag.exec(e))!this.inLink&&/^<a /i.test(s[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(s[0])&&(this.inLink=!1),e=e.substring(s[0].length),o+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(s[0]):i(s[0]):s[0];else if(s=this.rules.link.exec(e))e=e.substring(s[0].length),this.inLink=!0,o+=this.outputLink(s,{href:s[2],title:s[3]}),this.inLink=!1;else if((s=this.rules.reflink.exec(e))||(s=this.rules.nolink.exec(e))){if(e=e.substring(s[0].length),t=(s[2]||s[1]).replace(/\s+/g," "),!(t=this.links[t.toLowerCase()])||!t.href){o+=s[0].charAt(0),e=s[0].substring(1)+e;continue}this.inLink=!0,o+=this.outputLink(s,t),this.inLink=!1}else if(s=this.rules.strong.exec(e))e=e.substring(s[0].length),o+=this.renderer.strong(this.output(s[2]||s[1]));else if(s=this.rules.em.exec(e))e=e.substring(s[0].length),o+=this.renderer.em(this.output(s[2]||s[1]));else if(s=this.rules.code.exec(e))e=e.substring(s[0].length),o+=this.renderer.codespan(i(s[2].trim(),!0));else if(s=this.rules.br.exec(e))e=e.substring(s[0].length),o+=this.renderer.br();else if(s=this.rules.del.exec(e))e=e.substring(s[0].length),o+=this.renderer.del(this.output(s[1]));else if(s=this.rules.text.exec(e))e=e.substring(s[0].length),o+=this.renderer.text(i(this.smartypants(s[0])));else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0))}else e=e.substring(s[0].length),r=i(s[1]),n=r,o+=this.renderer.link(n,null,r);return o},r.prototype.outputLink=function(e,t){var r=i(t.href),n=t.title?i(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(r,n,this.output(e[1])):this.renderer.image(r,n,i(e[1]))},r.prototype.smartypants=function(e){return this.options.smartypants?e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014\/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):e},r.prototype.mangle=function(e){if(!this.options.mangle)return e;for(var t,r="",n=e.length,s=0;s<n;s++)t=e.charCodeAt(s),Math.random()>.5&&(t="x"+t.toString(16)),r+="&#"+t+";";return r},n.prototype.code=function(e,t,r){if(this.options.highlight){var n=this.options.highlight(e,t);null!=n&&n!==e&&(r=!0,e=n)}return t?'<pre><code class="'+this.options.langPrefix+i(t,!0)+'">'+(r?e:i(e,!0))+"\n</code></pre>\n":"<pre><code>"+(r?e:i(e,!0))+"\n</code></pre>"},n.prototype.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},n.prototype.html=function(e){return e},n.prototype.heading=function(e,t,r){return"<h"+t+' id="'+this.options.headerPrefix+r.toLowerCase().replace(/[^\w]+/g,"-")+'">'+e+"</h"+t+">\n"},n.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},n.prototype.list=function(e,t){var r=t?"ol":"ul";return"<"+r+">\n"+e+"</"+r+">\n"},n.prototype.listitem=function(e){return"<li>"+e+"</li>\n"},n.prototype.paragraph=function(e){return"<p>"+e+"</p>\n"},n.prototype.table=function(e,t){return"<table>\n<thead>\n"+e+"</thead>\n<tbody>\n"+t+"</tbody>\n</table>\n"},n.prototype.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},n.prototype.tablecell=function(e,t){var r=t.header?"th":"td";return(t.align?"<"+r+' style="text-align:'+t.align+'">':"<"+r+">")+e+"</"+r+">\n"},n.prototype.strong=function(e){return"<strong>"+e+"</strong>"},n.prototype.em=function(e){return"<em>"+e+"</em>"},n.prototype.codespan=function(e){return"<code>"+e+"</code>"},n.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},n.prototype.del=function(e){return"<del>"+e+"</del>"},n.prototype.link=function(e,t,r){if(this.options.sanitize){try{var n=decodeURIComponent(o(e)).replace(/[^\w:]/g,"").toLowerCase()}catch(e){return""}if(0===n.indexOf("javascript:")||0===n.indexOf("vbscript:")||0===n.indexOf("data:"))return""}this.options.baseUrl&&!originIndependentUrl.test(e)&&(e=l(this.options.baseUrl,e));var s='<a href="'+e+'"';return t&&(s+=' title="'+t+'"'),s+=">"+r+"</a>"},n.prototype.image=function(e,t,r){this.options.baseUrl&&!originIndependentUrl.test(e)&&(e=l(this.options.baseUrl,e));var n='<img src="'+e+'" alt="'+r+'"';return t&&(n+=' title="'+t+'"'),n+=this.options.xhtml?"/>":">"},n.prototype.text=function(e){return e},s.parse=function(e,t,r){return new s(t,r).parse(e)},s.prototype.parse=function(e){this.inline=new r(e.links,this.options,this.renderer),this.tokens=e.reverse();for(var t="";this.next();)t+=this.tok();return t},s.prototype.next=function(){return this.token=this.tokens.pop()},s.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},s.prototype.parseText=function(){for(var e=this.token.text;"text"===this.peek().type;)e+="\n"+this.next().text;return this.inline.output(e)},s.prototype.tok=function(){switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,this.token.text);case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":var e,t,r,n,s="",i="";for(r="",e=0;e<this.token.header.length;e++)({header:!0,align:this.token.align[e]}),r+=this.renderer.tablecell(this.inline.output(this.token.header[e]),{header:!0,align:this.token.align[e]});for(s+=this.renderer.tablerow(r),e=0;e<this.token.cells.length;e++){for(t=this.token.cells[e],r="",n=0;n<t.length;n++)r+=this.renderer.tablecell(this.inline.output(t[n]),{header:!1,align:this.token.align[n]});i+=this.renderer.tablerow(r)}return this.renderer.table(s,i);case"blockquote_start":for(var i="";"blockquote_end"!==this.next().type;)i+=this.tok();return this.renderer.blockquote(i);case"list_start":for(var i="",o=this.token.ordered;"list_end"!==this.next().type;)i+=this.tok();return this.renderer.list(i,o);case"list_item_start":for(var i="";"list_item_end"!==this.next().type;)i+="text"===this.token.type?this.parseText():this.tok();return this.renderer.listitem(i);case"loose_item_start":for(var i="";"list_item_end"!==this.next().type;)i+=this.tok();return this.renderer.listitem(i);case"html":var a=this.token.pre||this.options.pedantic?this.token.text:this.inline.output(this.token.text);return this.renderer.html(a);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText())}},baseUrls={},originIndependentUrl=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i,h.exec=h,p.options=p.setOptions=function(e){return u(p.defaults,e),p},p.defaults={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,sanitizer:null,mangle:!0,smartLists:!1,silent:!1,highlight:null,langPrefix:"lang-",smartypants:!1,headerPrefix:"",renderer:new n,xhtml:!1,baseUrl:null},p.Parser=s,p.parser=s.parse,p.Renderer=n,p.Lexer=t,p.lexer=t.lex,p.InlineLexer=r,p.inlineLexer=r.output,p.parse=p,e.exports=p}).call(function(){return this||("undefined"!=typeof window?window:t)}())}).call(t,r(24))},49:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fetchFromRepo=void 0;var n=r(50),s=function(e){return e&&e.__esModule?e:{default:e}}(n);t.fetchFromRepo=function(e,t,r){return(0,s.default)("https://rawgit.com/Contiamo/operational-ui/master"+e).then(function(e){return e.text()}).then(function(e){return t?e.split("\n").slice(t,r).join("\n"):e})}},50:function(e,t,r){r(51),e.exports=self.fetch.bind(self)},51:function(e,t){!function(e){"use strict";function t(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function r(e){return"string"!=typeof e&&(e=String(e)),e}function n(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return b.iterable&&(t[Symbol.iterator]=function(){return t}),t}function s(e){this.map={},e instanceof s?e.forEach(function(e,t){this.append(t,e)},this):Array.isArray(e)?e.forEach(function(e){this.append(e[0],e[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function i(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function o(e){return new Promise(function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}})}function a(e){var t=new FileReader,r=o(t);return t.readAsArrayBuffer(e),r}function l(e){var t=new FileReader,r=o(t);return t.readAsText(e),r}function h(e){for(var t=new Uint8Array(e),r=new Array(t.length),n=0;n<t.length;n++)r[n]=String.fromCharCode(t[n]);return r.join("")}function u(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function p(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,e)if("string"==typeof e)this._bodyText=e;else if(b.blob&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(b.formData&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(b.searchParams&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else if(b.arrayBuffer&&b.blob&&x(e))this._bodyArrayBuffer=u(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!b.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(e)&&!k(e))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=u(e)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):b.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},b.blob&&(this.blob=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?i(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(a)}),this.text=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return l(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(h(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},b.formData&&(this.formData=function(){return this.text().then(d)}),this.json=function(){return this.text().then(JSON.parse)},this}function c(e){var t=e.toUpperCase();return _.indexOf(t)>-1?t:e}function f(e,t){t=t||{};var r=t.body;if(e instanceof f){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new s(e.headers)),this.method=e.method,this.mode=e.mode,r||null==e._bodyInit||(r=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"omit",!t.headers&&this.headers||(this.headers=new s(t.headers)),this.method=c(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function d(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var r=e.split("="),n=r.shift().replace(/\+/g," "),s=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(n),decodeURIComponent(s))}}),t}function g(e){var t=new s;return e.split(/\r?\n/).forEach(function(e){var r=e.split(":"),n=r.shift().trim();if(n){var s=r.join(":").trim();t.append(n,s)}}),t}function y(e,t){t||(t={}),this.type="default",this.status="status"in t?t.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new s(t.headers),this.url=t.url||"",this._initBody(e)}if(!e.fetch){var b={searchParams:"URLSearchParams"in e,iterable:"Symbol"in e&&"iterator"in Symbol,blob:"FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in e,arrayBuffer:"ArrayBuffer"in e};if(b.arrayBuffer)var m=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],x=function(e){return e&&DataView.prototype.isPrototypeOf(e)},k=ArrayBuffer.isView||function(e){return e&&m.indexOf(Object.prototype.toString.call(e))>-1};s.prototype.append=function(e,n){e=t(e),n=r(n);var s=this.map[e];this.map[e]=s?s+","+n:n},s.prototype.delete=function(e){delete this.map[t(e)]},s.prototype.get=function(e){return e=t(e),this.has(e)?this.map[e]:null},s.prototype.has=function(e){return this.map.hasOwnProperty(t(e))},s.prototype.set=function(e,n){this.map[t(e)]=r(n)},s.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},s.prototype.keys=function(){var e=[];return this.forEach(function(t,r){e.push(r)}),n(e)},s.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),n(e)},s.prototype.entries=function(){var e=[];return this.forEach(function(t,r){e.push([r,t])}),n(e)},b.iterable&&(s.prototype[Symbol.iterator]=s.prototype.entries);var _=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];f.prototype.clone=function(){return new f(this,{body:this._bodyInit})},p.call(f.prototype),p.call(y.prototype),y.prototype.clone=function(){return new y(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new s(this.headers),url:this.url})},y.error=function(){var e=new y(null,{status:0,statusText:""});return e.type="error",e};var w=[301,302,303,307,308];y.redirect=function(e,t){if(-1===w.indexOf(t))throw new RangeError("Invalid status code");return new y(null,{status:t,headers:{location:e}})},e.Headers=s,e.Request=f,e.Response=y,e.fetch=function(e,t){return new Promise(function(r,n){var s=new f(e,t),i=new XMLHttpRequest;i.onload=function(){var e={status:i.status,statusText:i.statusText,headers:g(i.getAllResponseHeaders()||"")};e.url="responseURL"in i?i.responseURL:e.headers.get("X-Request-URL");var t="response"in i?i.response:i.responseText;r(new y(t,e))},i.onerror=function(){n(new TypeError("Network request failed"))},i.ontimeout=function(){n(new TypeError("Network request failed"))},i.open(s.method,s.url,!0),"include"===s.credentials&&(i.withCredentials=!0),"responseType"in i&&b.blob&&(i.responseType="blob"),s.headers.forEach(function(e,t){i.setRequestHeader(t,e)}),i.send(void 0===s._bodyInit?null:s._bodyInit)})},e.fetch.polyfill=!0}}("undefined"!=typeof self?self:this)}},[1649]);
            return { page: comp.default }
          })
        