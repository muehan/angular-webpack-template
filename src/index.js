function component() {
    var element = document.createElement('div');

    element.innerHTML = 'Hallo Welt';

    return element;
}

document.body.appendChild(component());