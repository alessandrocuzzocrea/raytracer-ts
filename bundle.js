!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Color=void 0;var i=function(){function t(t,e,n){this.r=t,this.g=e,this.b=n}return t.Red=function(){return new t(231,76,60)},t.Black=function(){return new t(0,0,0)},t.MidnightBlue=function(){return new t(44,62,80)},t.Magenta=function(){return new t(155,89,182)},t.White=function(){return new t(255,255,255)},t.Yellow=function(){return new t(241,196,15)},t.Green=function(){return new t(46,204,113)},t}();e.Color=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Vec3=void 0;var i=function(){function t(t,e,n){this.x=t,this.y=e,this.z=n}return t.Zero=function(){return new t(0,0,0)},t.Up=function(){return new t(0,1,0)},t.Forward=function(){return new t(0,0,1)},t.prototype.Length=function(){var t=Math.pow(this.x,2),e=Math.pow(this.y,2),n=Math.pow(this.z,2);return Math.sqrt(t+e+n)},t.prototype.Normalized=function(){var e=this.Length();return new t(this.x/e,this.y/e,this.z/e)},t.prototype.Add=function(e){return new t(this.x+e.x,this.y+e.y,this.z+e.z)},t.prototype.Subtract=function(e){return new t(this.x-e.x,this.y-e.y,this.z-e.z)},t.prototype.ScalarMultiply=function(e){return new t(this.x*e,this.y*e,this.z*e)},t.prototype.Dot=function(t){return this.x*t.x+this.y*t.y+this.z*t.z},t}();e.Vec3=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Settings=void 0;var i=function(){function t(){}return t.WIDTH=640,t.HEIGHT=480,t.DEBUG_NORMALS=!1,t.AA=!0,t.RENDER_YELLOW_SPHERE=!0,t.RENDER_RED_SPHERE=!0,t.RENDER_PLANE=!0,t}();e.Settings=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.AbstractRay=void 0;var i=function(){function t(t,e){this.origin=t,this.direction=e.Normalized(),this.hitInfo=new Array}return t.prototype.CalcPointAtT=function(t){return this.origin.Add(this.direction.ScalarMultiply(t))},t.prototype.AddHit=function(t){this.hitInfo.push(t),this.hitInfo.sort((function(t,e){return t.t>e.t?1:t.t<e.t?-1:0}))},t.prototype.GetNearerHit=function(){return 0==this.hitInfo.length?null:this.hitInfo[0]},t}();e.AbstractRay=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.HitInfo=void 0;var i=n(1),r=n(0),o=n(2),u=function(){function t(t,e,n,i,r){this.hit=t,this.t=e,this.hitPoint=n,this.normal=i,this.color=r}return t.prototype.HitPoint=function(){return new i.Vec3(this.hitPoint.x,this.hitPoint.y,this.hitPoint.z)},t.prototype.GetColor=function(){return o.Settings.DEBUG_NORMALS?new r.Color(255*this.normal.x,255*this.normal.y,255*this.normal.z*-1):new r.Color(this.color.r,this.color.g,this.color.b)},t}();e.HitInfo=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),r=n(6),o=n(14),u=n(15),a=new o.UI(i.Settings.WIDTH,i.Settings.HEIGHT),s=new r.Raytracer(i.Settings.WIDTH,i.Settings.HEIGHT),c=new u.Controller(a,s);c.Clear(),c.Render()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Raytracer=void 0;var i=n(7),r=n(10),o=n(0),u=n(2),a=function(){function t(t,e){this.viewport=new i.Viewport(t,e),this.scene=new r.Scene}return t.prototype.Clear=function(){this.viewport.Clear()},t.prototype.FillRandom=function(){this.viewport.FillRandom()},t.prototype.Render=function(){for(var t=this,e=this.viewport.ClearColor(),n=0;n<this.viewport.Height();n++)for(var i=function(){var i=r.viewport.GetRays(a,n,u.Settings.AA?4:1),s=0,c=0,h=0;i.forEach((function(n){var i=n.Shoot(t.scene);s+=i?i.r:e.r,c+=i?i.g:e.g,h+=i?i.b:e.b})),r.viewport.DrawPixel(a,n,new o.Color(s/i.length,c/i.length,h/i.length))},r=this,a=0;a<this.viewport.Width();a++)i()},t.prototype.GetBuffer=function(){return this.viewport.GetBuffer()},t}();e.Raytracer=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Viewport=void 0;var i=n(1),r=n(0),o=n(8),u=function(){function t(t,e){this.width=t,this.height=e,this.buffer=new Uint8ClampedArray(t*e*4),this.Clear()}return t.prototype.GetBuffer=function(){return this.buffer},t.prototype.Width=function(){return this.width},t.prototype.Height=function(){return this.height},t.prototype.Ratio=function(){return this.width/this.height},t.prototype.ClearColor=function(){return r.Color.Magenta()},t.prototype.Clear=function(){for(var t=this.ClearColor(),e=0;e<this.width*this.height*4;)this.buffer[e+0]=t.r,this.buffer[e+1]=t.g,this.buffer[e+2]=t.b,this.buffer[e+3]=255,e+=4},t.prototype.FillRandom=function(){for(var t=0;t<this.width*this.height*4;)this.buffer[t+0]=255*Math.random(),this.buffer[t+1]=255*Math.random(),this.buffer[t+2]=255*Math.random(),this.buffer[t+3]=255,t+=4},t.prototype.GetRays=function(t,e,n){for(var r=new Array,u=0;u<1;u+=1/n)for(var a=0;a<1;a+=1/n){var s=this.Ratio()/this.width*(t+a)-this.Ratio()/2,c=.5-1/this.height*(e+u);r.push(new o.CameraRay(new i.Vec3(0,0,0),new i.Vec3(s,c,1)))}return r},t.prototype.DrawPixel=function(t,e,n){var i=this.width*e+t;this.buffer[4*i+0]=n.r,this.buffer[4*i+1]=n.g,this.buffer[4*i+2]=n.b,this.buffer[4*i+3]=255},t}();e.Viewport=u},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0}),e.CameraRay=void 0;var o=n(0),u=n(3),a=n(9),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.Shoot=function(t){for(var e=null,n=0;n<t.Objects().length;n++){var i=t.Objects()[n].intersect(this);i.hit&&this.AddHit(i)}var r=this.GetNearerHit();if(r){this.SpawnChildIlluminationRay(t.Light());var u=this.illuminationRay.Shoot(t),a=r.GetColor();e=new o.Color(a.r*u.r,a.g*u.g,a.b*u.b)}return e},e.prototype.SpawnChildIlluminationRay=function(t){var e=this.GetNearerHit().HitPoint(),n=t.position.Subtract(e).Normalized();this.illuminationRay=new a.IlluminationRay(e,n),this.illuminationRay.parentRay=this},e}(u.AbstractRay);e.CameraRay=s},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0}),e.IlluminationRay=void 0;var o=n(0),u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.Shoot=function(t){for(var e=0;e<t.Objects().length;e++){var n=t.Objects()[e].intersect(this);if(n.hit)return this.AddHit(n),new o.Color(0,0,0)}var i=Math.max(0,this.direction.Dot(this.parentRay.GetNearerHit().normal));return new o.Color(i,i,i)},e}(n(3).AbstractRay);e.IlluminationRay=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Scene=void 0;var i=n(0),r=n(1),o=n(11),u=n(12),a=n(13),s=n(2),c=function(){function t(){this.objects=new Array,this.light=new u.Light(new r.Vec3(1e3,1e3,3)),s.Settings.RENDER_YELLOW_SPHERE&&this.objects.push(new o.Sphere(new r.Vec3(.9,.5,2.4),.1,i.Color.Yellow())),s.Settings.RENDER_RED_SPHERE&&this.objects.push(new o.Sphere(new r.Vec3(0,0,3),1,i.Color.Red())),s.Settings.RENDER_PLANE&&this.objects.push(new a.Plane(r.Vec3.Up(),i.Color.Green()))}return t.prototype.Objects=function(){return this.objects},t.prototype.Light=function(){return this.light},t}();e.Scene=c},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Sphere=void 0;var i=n(1),r=n(4),o=n(0),u=function(){function t(t,e,n){this.origin=t,this.radius=e,this.color=n}return t.prototype.intersect=function(t){var e=t.origin.x,n=t.origin.y,u=t.origin.z,a=t.direction.x,s=t.direction.y,c=t.direction.z,h=this.origin.x,l=this.origin.y,f=this.origin.z,p=this.radius,d=Math.pow(a,2)+Math.pow(s,2)+Math.pow(c,2),y=2*(a*(e-h)+s*(n-l)+c*(u-f)),v=Math.pow(e-h,2)+Math.pow(n-l,2)+Math.pow(u-f,2)-Math.pow(p,2),w=Math.pow(y,2)-4*d*v;if(w>=0){var b=(-y-Math.sqrt(w))/2*d;if(b<0)return new r.HitInfo(!1,-Math.E,null,null,null);var g=e+a*b,_=n+s*b,R=u+c*b,m=new i.Vec3(g,_,R),C=new i.Vec3((g-h)/p,(_-l)/p,(R-f)/p);return new r.HitInfo(!0,b,m,C,new o.Color(this.color.r,this.color.g,this.color.b))}return new r.HitInfo(!1,-Math.E,null,null,null)},t}();e.Sphere=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Light=void 0;var i=function(t){this.position=t};e.Light=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Plane=void 0;var i=n(1),r=n(4),o=n(0),u=function(){function t(t,e){this.normal=t.Normalized(),this.color=e}return t.prototype.intersect=function(t){var e=this.normal,n=t.origin,u=t.direction,a=-(e.Dot(n)+1)/e.Dot(u);if(a>0){var s=t.origin.x+t.direction.x*a,c=t.origin.y+t.direction.y*a,h=t.origin.z+t.direction.z*a,l=new i.Vec3(s,c,h),f=e,p=Math.abs(l.x%1),d=Math.abs(l.z%1),y=null;return y=p<.5&&d<.5||p>.5&&d>.5?this.color:o.Color.White(),new r.HitInfo(!0,a,l,f,y)}return new r.HitInfo(!1,-Math.E,null,null,null)},t}();e.Plane=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.UI=void 0;var i=function(){function t(t,e){this.div=document.createElement("div"),document.body.append(this.div),this.canvas=document.createElement("canvas"),this.div.appendChild(this.canvas),this.context=this.canvas.getContext("2d"),this.canvas.width=t,this.canvas.height=e,this.clearButton=document.createElement("button"),this.clearButton.innerText="Clear",this.div.appendChild(this.clearButton),this.fillRandomButton=document.createElement("button"),this.fillRandomButton.innerText="fillRandom",this.div.appendChild(this.fillRandomButton),this.renderButton=document.createElement("button"),this.renderButton.innerText="render",this.div.appendChild(this.renderButton),this.saveToPNGButton=document.createElement("button"),this.saveToPNGButton.innerText="saveToPNG",this.div.appendChild(this.saveToPNGButton)}return t.prototype.SetClearButtonOnClick=function(t){this.clearButton.onclick=t},t.prototype.SetFillRandomButtonOnClick=function(t){this.fillRandomButton.onclick=t},t.prototype.SetRenderButtonOnClick=function(t){this.renderButton.onclick=t},t.prototype.SetSaveToPNGButtonOnClick=function(t){this.saveToPNGButton.onclick=t},t.prototype.DrawCanvas=function(t){this.context.putImageData(new ImageData(t,this.canvas.width,this.canvas.height),0,0)},t.prototype.SaveToPNG=function(){window.open().document.body.innerHTML='<img src="'+this.canvas.toDataURL()+'">'},t}();e.UI=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Controller=void 0;var i=function(){function t(t,e){var n=this;this.ui=t,this.raytracer=e,t.SetClearButtonOnClick((function(){return n.Clear()})),t.SetFillRandomButtonOnClick((function(){return n.FillRandom()})),t.SetRenderButtonOnClick((function(){return n.Render()})),t.SetSaveToPNGButtonOnClick((function(){return n.SaveToPNG()}))}return t.prototype.Clear=function(){this.raytracer.Clear(),this.ui.DrawCanvas(this.raytracer.GetBuffer())},t.prototype.FillRandom=function(){this.raytracer.FillRandom(),this.ui.DrawCanvas(this.raytracer.GetBuffer())},t.prototype.Render=function(){this.raytracer.Render(),this.ui.DrawCanvas(this.raytracer.GetBuffer())},t.prototype.SaveToPNG=function(){this.ui.SaveToPNG()},t}();e.Controller=i}]);
//# sourceMappingURL=bundle.js.map