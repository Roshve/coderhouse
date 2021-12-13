##Orden de Escritura de Atributos

1. Método de diseño y posición

.container {
    /* Positioning */
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;

Composición (float, clear, display, box-sizing, visibility, overflow, clip)

    /* Box-model */
    display: block;
    float: right;
    width: 100px;
    height: 100px;

    /* Typography */
    font: normal 13px "Helvetica Neue", sans-serif;
    line-height: 1.5;
    color: #333;
    text-align: center;

    /* Visual */
    background-color: #f5f5f5;
    border: 1px solid #e5e5e5;
    border-radius: 3px;

    /* Misc */
    opacity: 1;
}

https://code.google.com/archive/p/zen-coding/wikis/ZenCSSPropertiesEn.wiki
https://webdesign.tutsplus.com/articles/outside-in-ordering-css-properties-by-importance--cms-21685