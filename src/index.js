function component() {
    var element = document.createElement('div');

    element.innerHTML = 'Hallo Welt, change';

    return element;
}

document.body.appendChild(component());