export default function make(el,obj) {
    var elem = document.createElement(el);
    elem = setAllAttributes(elem, obj);

    if(obj.child){
        elem.appendChild(make(obj.child.obj,obj.child.el));
    }

    return elem;
}

function setAllAttributes(instance, obj) {
  Object.keys(obj).map((v,i)=>{
    if(v !='content' && v !='child'){
      instance.setAttribute(v,obj.v);
    }
    if(v=='content'){
      instance.textContent=obj.v;
    }
  });
    return instance;
}
