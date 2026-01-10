const paragraph = document.getElementById('PAR');

function ChangeFont(font) {
    paragraph.style.fontFamily = font;
}

function ChangeAlign(align) {
    paragraph.style.textAlign = align;
}

function ChangeHeight(height) {
    paragraph.style.lineHeight = height;
}

function ChangeLSpace(space) {
    paragraph.style.letterSpacing = space;
}

function ChangeIndent(indent) {
    paragraph.style.textIndent = indent;
}

function ChangeTransform(transform) {
    paragraph.style.textTransform = transform;
}

function ChangeDecorate(decorate) {
    paragraph.style.textDecoration = decorate;
}

function ChangeBorder(border) {
    paragraph.style.borderStyle = border;
}

function ChangeBorderColor(color) {
    paragraph.style.borderColor = color;
    paragraph.style.borderWidth = '2px';
}
