//////////////////////////////////////////////
// Mapa Digital de M�xico v6.0  //
//          //
//////////////////////////////////////////////
eval((function(x){var d="";var p=0;while(p<x.length){if(x.charAt(p)!="`")d+=x.charAt(p++);else{var l=x.charCodeAt(p+3)-28;if(l>4)d+=d.substr(d.length-x.charCodeAt(p+1)*96-x.charCodeAt(p+2)+3104-l,l);else d+="`";p+=4}}return d})("define([\"OpenLayers\", \"config\"], function (OL, ` 2\") {var Map;var Data = {reg:{data:{}, type` $!add:` \\&i, t, p` \\#c = \"custom\";i[c] = p` $!.type = t` (\"item = \"point\"`!2!d =`!6!.reg` +\"`!B\"d.data` -!` ]#d` h!;data[i.id] = i;if (!type[t]) {` ## = {};}` '#` F%\"\";}, get`!(`!~#`!1#`!D$`!9\"respons`!:!`!3!] ?` E![i] : null;return ` C$;}}, layer:null, image:{active:\"` \"\"\", path:(typeof apiUrl !== \"un`$j\"d\" ?` 1$?` :$: \"\" : \"\") + \"img/marks/\", format:\".png\", width:\"35\", height:\"50\", measure:\"px\"`\"i\"I`!^!`\"j&`\"l#a = arguments[0]`\"C$this.`\"2!.path + a +` *(`!D\";}}`$l\"`\")!`&r! =`&`'map) {Map = m`&_#p =`$_\":\"Vector\", name:\"Mark`'R\"position:1, info:{renderers:Map.` (\", styleMap:new OL.S` )#({'default'` .)(OL.Util.applyD` =\"s({fillOpacity:1, externalGraphic:\"${`\"Q!}\", g` .\"W`#u\"${gWith` .'H`$!#${g` %\"}\", labelAlign:\"center`$h!ntColor:\"#000000` .#W` \\#bold` U$Outline` I#white` ,+`!L\"3` ]\"Family:\"Courier New, monospace`!!#Size:\"16px`#n!intRadius:10`\"&%YOffset:-43}, OL.Feature.`$V\".`#}![`#e%]))})}};Map.add`%M!(p);`)/!`(N! = Map.get` 7\"`%-%);`&&\"setA`&j$`& )`&0;a[0].attributes = a[1]`!%'.redraw(` w$getParamsforT`+q\"` d;`'-$a[0]` (!i`+=$`%P!;p` \"\"` -$`)%$(a[1]);p.`%]! = i.`)k!;p.`%S#` /!`)r\"`)0$p`!\\&`#b#FromWKT`!@Croje` ?\"= `'r#P` +%(`00\".mapC` $\"` F&)` [!f = (` Q#F`*=!.WKT(` <').read(a[0]` M\"b` T!v = false`/)!f) {` #!.constructor != Array) {f = [f];}for (x in ` L$!b) {b = f[x].geometry.getBounds();} else {b.extend(` 25);}}v = true;}`#]#{f`#T\"s:f, valid:v, b` N!:b}`#x&Last`&x\"`#n,` c#`&;'` l$[`&O'` ,$.length - 1]` w#creat`&:>`&J$store = a.` $\"? ` \"$:`#p#var zoom` @!` $!? ` \"#` 7(lon, lat, m`\"4!`'J\"nsert`\"$if (a.wkt`!J#info =`&`.` >#` K!info.`#F!) {l`&Y!` .!`#O\".bottom;la`'n!` .'top`$e%`!=%`!h\"}` 0$` i\"a.lon` [#a.lat;}`!3\"ser`!b$`\"-\" = [`';$`,?)`'Q$G`%a$Point(`\"k$))];` \\\"`+B-`+$,(a.p` +!, a.type`,u(.add`!2#s(` k\"`\"\"zoom) {}` F!reg.add` :#[0]` c$, ` u$)`*m$`!L&id`3j$getPropertieVisibility`*d>` l#a[0] ? null : \"display:none\"`.^&` MH` N!ource`#+\"S` '!`+$!,`.o!`+)\"prop`#K#`!m.(a[2]);`*k&` k\"`&a$tem =` -#[x].id ?` <#` (#: x`$$\"reg.data[item]`1`\" =`!9!`%s\"`)L7> 0) {`0M1`)v#leanMarksSelected`\":a`!yZ`'y$`1?$`\"T*` :!ol`&p% = jQuery`-{${}`*m\".custom)`(&!`'x*` T'`\"b^s`#5!`\"v>`#Z.`&\"-`&3?segment`4K).active`\"u~newAtt`#>%`#a3`#a&);` F(`!g\"` w$getImage(a[1] + \"_\" +`\"7$`$A0` _(`#t^remov`1U>`&l~`*10destroy();delete`#|1` +,type[a[1]]` :#`.6&`!o\"`\"!H`36\"[0] == \"all\") {`\"_%`!!/`2T%` <%a[0];}`.#` o#`.g%Data`.!eitems = [\"nom\", \"desc\"]`'2z` x!i in`!9\"` u#`2K! =` .\"[i]`#A#2][` 5!]) {`,1'` .#`#(!` :%;}}`$P&Geo`\"z)a`!!#`\"c/`$A!, \"georeference\"`.(``(u#`*]7element`!f!` G\".clone();` 3$`*!'.name =` M%` .)om` >1descrip`\"`!` D2desc;a.push(` 8$)`&W%a`&T#locateAndZoom`&M0id`&V([0`\";\"f`\"Q(get(id`&U\"l`!K!f.geometry.`#-\"la`0,!` -&y` 2!z`!/\"config.mapC` $\"resolution`,X%- 1;Map.map.setCenter(new OL.LonLat(lon, lat),` u!)`\"=#a`\",\"`(^<[0];switch (a`0^!on) {case \"`+W\"\":`-a\"(a.`'L!, a`*N!);break;` F\"hide\":setVisibility` A,, fals` I+show` 7=tru` G,`39!\":` \"\"`!=:un` F$`3j0` >8se` ~!`,D!`!D.a.`)g!s` F*`&7\"\":`&8)(a.id);default:`12*Las`%d!`$9,marker`*9\"LastM` +!();`$)#[{id:` ?\".id}],`$j));};`'q#{addLayer:define` '!, add:create, event:`%:\", reg:`'b$,`!1*:`!@),`!x'`%`#Last` O!Geo:`,W\"};});"))