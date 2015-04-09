var WinHTTP=function(a){return F.activex("MSXML2.ServerXMLHttp",function(b){this.open("GET",b,false);this.send();return this},a)};var MPIHost="mpi.thinkasp.cn",installDirectory=IO.build(Mo.Config.Global.MO_CORE,"Library/Extend");function _install(k,l){if(typeof k!="object"){Mpi.message="package error.";return false}if(!k.name||!/^([\w\.\-]+)$/ig.test(k.name)){Mpi.message="package name format error.";return false}var q=IO.build(l,k.name);if(IO.directory.exists(q)){Mpi.message="package is exists.";return false}var f=Mpi.packageExists("jszip")?"jszip":(Mpi.packageExists("assets/tar")?"tar":(Mpi.packageExists("xmlpkg")?"xmlpkg":"none"));if(f=="none"){Mpi.message="can not find any method to unpack.";return false}var p,b,c;try{var h=IO.build(Mpi.PATH.CACHE,F.format("{0}@{1}.zip",k.name,k.version));p=IO.file[f=="jszip"?"readAllBytes":"readAllText"](h);if(f=="tar"){b=require("assets/tar");c=new b(h);IO.file.del(h)}else{b=require(f);IO.file.del(h);c=new b(f=="jszip"?base64.fromBinary(p):p,{base64:true})}}catch(j){Mpi.message=j.description;return false}var a=c.files,o=[];for(var g in a){if(!a.hasOwnProperty(g)){continue}var e=a[g];if(e.name.substr(0,1)=="."){Mpi.message="unsafe filename '"+e.name+"'.";while(o.length>0){var n=o.pop();if(n.substr(0,2)=="D~"){IO.directory.del(n.substr(2))}else{IO.file.del(n.substr(2))}}return false}var m=IO.build(q,e.name);if(e.dir){IO.directory.create(m);o.push("D~"+m)}else{var d=IO.parent(m);if(!IO.directory.exists(d)){IO.directory.create(d)}IO.file.writeAllBytes(m,f=="jszip"?base64.toBinary(base64.e(e._data.getContent())):e.data);o.push("F~"+m)}}return true}function _fetchJson(b){try{var a=WinHTTP(b);if(a.status==200){return JSON.parse(a.responseText)}else{if(a.status==500){Mpi.message="Server error. message from server:'"+a.responseText+"'."}else{Mpi.message="Can not load package.server error-"+a.status+"."}}}catch(c){Mpi.message=c.description}return null}function _saveBinary(b,d){try{var a=WinHTTP(b);if(a.status==200){IO.file.writeAllBytes(d,a.responseBody);return true}else{if(a.status==500){Mpi.message="Server error. message from server:'"+a.responseText+"'."}else{Mpi.message="Can not load package.server error-"+a.status+"."}}}catch(c){Mpi.message=c.description}return false}var Mpi={};Mpi.message="";Mpi.PATH={CORE:IO.build(Mo.Config.Global.MO_CORE,"Library/Extend"),APP:IO.build(Mo.Config.Global.MO_APP,"Library/Extend"),CACHE:IO.build(Mo.Config.Global.MO_APP,"Cache")};Mpi.Host=function(a){MPIHost=a};Mpi.setDefaultInstallDirectory=function(a){installDirectory=IO.build(a,"Library/Extend")};Mpi.download=function(a){var c=Mpi.packageExists("jszip")?"":(Mpi.packageExists("assets/tar")?"tar":(Mpi.packageExists("xmlpkg")?"xmlpkg":"none"));if(c=="none"){Mpi.message="can not find any method to unpack.";return false}var b="";if(c=="tar"){b="tar"}else{if(c=="xmlpkg"){b="xml"}}return _saveBinary(F.string.format("http://{0}/?/mpi/package/download/{1}/{2}",MPIHost,a.name,c),IO.build(Mpi.PATH.CACHE,F.format("{0}@{1}.zip",a.name,a.version)))};Mpi.fetchPackagesList=function(){return _fetchJson(F.string.format("http://{0}/?/mpi/package/list/fetch",MPIHost))};Mpi.fetchPackage=function(a){return _fetchJson(F.string.format("http://{0}/?/mpi/package/info/{1}/fetch",MPIHost,a))};Mpi.packageExists=function(a){if(typeof a=="string"){a={name:a}}if(!a.name||!/^([\w\.\-]+)$/ig.test(a.name)){Mpi.message="package name format error.";return true}return IO.directory.exists(IO.build(Mpi.PATH.APP,a.name))||IO.directory.exists(IO.build(Mpi.PATH.CORE,a.name))||IO.file.exists(IO.build(Mpi.PATH.APP,a.name))||IO.file.exists(IO.build(Mpi.PATH.CORE,a.name))};Mpi.checkDependencies=function(a){if(!a){return false}if(a.dependencies){var b=a.dependencies;for(var c in b){if(!b.hasOwnProperty(c)){continue}if(!Mpi.packageExists(c)){Mpi.message="depended module '"+c+"' is not exists, please install it first.";return false}}}return true};Mpi.install=function(a,b){var c=b?(b.dir||Mpi.PATH[b.path]):installDirectory;return _install(a,c)};Mpi.downloadAndInstall=function(c,b){if(Mpi.packageExists(c)){Mpi.message=Mpi.message||"package is exists.";return false}var a=Mpi.fetchPackage(c);if(!Mpi.checkDependencies(a)){return false}if(!Mpi.download(a)){return false}return Mpi.install(a,b)};module.exports=Mpi;