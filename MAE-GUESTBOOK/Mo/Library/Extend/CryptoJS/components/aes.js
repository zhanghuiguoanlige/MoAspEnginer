(function(){var a=exports;var b=a.lib;var p=b.BlockCipher;var k=a.algo;var d=[];var l=[];var o=[];var n=[];var m=[];var j=[];var i=[];var h=[];var g=[];var f=[];(function(){var s=[];for(var r=0;r<256;r++){if(r<128){s[r]=r<<1}else{s[r]=(r<<1)^283}}var w=0;var u=0;for(var r=0;r<256;r++){var v=u^(u<<1)^(u<<2)^(u<<3)^(u<<4);v=(v>>>8)^(v&255)^99;d[w]=v;l[v]=w;var q=s[w];var A=s[q];var y=s[A];var z=(s[v]*257)^(v*16843008);o[w]=(z<<24)|(z>>>8);n[w]=(z<<16)|(z>>>16);m[w]=(z<<8)|(z>>>24);j[w]=z;var z=(y*16843009)^(A*65537)^(q*257)^(w*16843008);i[v]=(z<<24)|(z>>>8);h[v]=(z<<16)|(z>>>16);g[v]=(z<<8)|(z>>>24);f[v]=z;if(!w){w=u=1}else{w=q^s[s[s[y^q]]];u^=s[s[u]]}}}());var c=[0,1,2,4,8,16,32,64,128,27,54];var e=k.AES=p.extend({_doReset:function(){var z=this._key;var r=z.words;var y=z.sigBytes/4;var x=this._nRounds=y+6;var q=(x+1)*4;var s=this._keySchedule=[];for(var w=0;w<q;w++){if(w<y){s[w]=r[w]}else{var A=s[w-1];if(!(w%y)){A=(A<<8)|(A>>>24);A=(d[A>>>24]<<24)|(d[(A>>>16)&255]<<16)|(d[(A>>>8)&255]<<8)|d[A&255];A^=c[(w/y)|0]<<24}else{if(y>6&&w%y==4){A=(d[A>>>24]<<24)|(d[(A>>>16)&255]<<16)|(d[(A>>>8)&255]<<8)|d[A&255]}}s[w]=s[w-y]^A}}var u=this._invKeySchedule=[];for(var v=0;v<q;v++){var w=q-v;if(v%4){var A=s[w]}else{var A=s[w-4]}if(v<4||w<=4){u[v]=A}else{u[v]=i[d[A>>>24]]^h[d[(A>>>16)&255]]^g[d[(A>>>8)&255]]^f[d[A&255]]}}},encryptBlock:function(r,q){this._doCryptBlock(r,q,this._keySchedule,o,n,m,j,d)},decryptBlock:function(s,r){var q=s[r+1];s[r+1]=s[r+3];s[r+3]=q;this._doCryptBlock(s,r,this._invKeySchedule,i,h,g,f,l);var q=s[r+1];s[r+1]=s[r+3];s[r+3]=q},_doCryptBlock:function(z,y,H,v,t,r,q,G){var E=this._nRounds;var x=z[y]^H[0];var w=z[y+1]^H[1];var u=z[y+2]^H[2];var s=z[y+3]^H[3];var F=4;for(var I=1;I<E;I++){var D=v[x>>>24]^t[(w>>>16)&255]^r[(u>>>8)&255]^q[s&255]^H[F++];var C=v[w>>>24]^t[(u>>>16)&255]^r[(s>>>8)&255]^q[x&255]^H[F++];var B=v[u>>>24]^t[(s>>>16)&255]^r[(x>>>8)&255]^q[w&255]^H[F++];var A=v[s>>>24]^t[(x>>>16)&255]^r[(w>>>8)&255]^q[u&255]^H[F++];x=D;w=C;u=B;s=A}var D=((G[x>>>24]<<24)|(G[(w>>>16)&255]<<16)|(G[(u>>>8)&255]<<8)|G[s&255])^H[F++];var C=((G[w>>>24]<<24)|(G[(u>>>16)&255]<<16)|(G[(s>>>8)&255]<<8)|G[x&255])^H[F++];var B=((G[u>>>24]<<24)|(G[(s>>>16)&255]<<16)|(G[(x>>>8)&255]<<8)|G[w&255])^H[F++];var A=((G[s>>>24]<<24)|(G[(x>>>16)&255]<<16)|(G[(w>>>8)&255]<<8)|G[u&255])^H[F++];z[y]=D;z[y+1]=C;z[y+2]=B;z[y+3]=A},keySize:256/32});a.AES=p._createHelper(e)}());