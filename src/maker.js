export default function make(el, obj) {
    var elem = document.createElement(el);
    elem = setAllAttributes(elem, obj);
    if (obj.child) {
        obj.child.map((e) => {
            elem.appendChild(make(e.el, e.obj));
        });
    }
    return elem;
}

function setAllAttributes(instance, obj) {
    Object.keys(obj).map((v, i) => {
        if (v != "content" && v != "child" && v != "events" && v != "options") {
            instance.setAttribute(v, obj[v]);
        }
        if (v == "events") {
            Object.keys(obj.events).map((evento, index) => {
                instance.addEventListener(evento, function () {
                    obj.events[evento]["fn"](obj.events[evento]["params"]);
                });
            });
        }
        if (v == "options") {
            instance.appendChild(
                make("option", {
                    value: "",
                    content: "Seleccionar...",
                })
            );
            if (obj.options.type && obj.options.type === "async") {
                obj.options["fn"]().then((r) => {
                    r.map((opcion, index) => {
                        instance.appendChild(
                            make("option", {
                                value: opcion.id,
                                content: opcion.nombre,
                            })
                        );
                    });
                });
            } else {
                obj.options.map((opcion, index) => {
                    instance.appendChild(
                        make("option", {
                            value: opcion.value,
                            content: opcion.text,
                        })
                    );
                });
            }
        }
        if (v == "content") {
            instance.textContent = obj[v];
        }
    });
    return instance;
}
