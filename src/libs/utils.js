export function setTitle(title) {
    document.title = title;
    let i = document.createElement('i');
    i.src = '/favicon.ico';
    i.style.display = 'none';
    i.onload = function() {
        setTimeout(function () {
            i.remove();
        }, 0);
    };
    document.body.appendChild(i);
}