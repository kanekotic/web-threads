var worker=function(){function e(e){var t=e.data[0].context||self,n=e.data[0].fn,r=new Function(function(e){return e.substring(e.indexOf("(")+1,e.indexOf(")"))}(n),function(e){return e.substring(e.indexOf("{")+1,e.lastIndexOf("}"))}(n));postMessage([r.apply(t,e.data[0].args)])}return self.onmessage=e,e},workerString=worker.toString(),code=workerString.substring(workerString.indexOf("{")+1,workerString.lastIndexOf("return")),webWorker=new Worker(URL.createObjectURL(new Blob([code],{type:"text/javascript"})));function exec(e){var t=Object.assign({},e,{system:e.fn.toString()});webWorker.postMessage(t),webWorker.onmessage=function(t){e.context&&Object.assign(e.context,t.data[0]),resolve(t.data[1])}}export{exec};