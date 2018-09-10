export default /* css*/ `
:host {
  display: block;
  overflow: hidden;
}

#designer-container {
    height: 100%;
    position: relative;
    user-select: none !important;
}

#designer-container #minimap {
    position: absolute;
    left: 10px;
    bottom: 10px;
    height: 75px;
    border-style: solid;
    border-width: 1px;
    background-color: #e3ebed;
}

#designer-container #minimap #viewpoint {
    fill: none;
    stroke-width: 10;
    stroke: black;
}

#designer-container #minimap .mini_table {
    fill: lightcyan;
    stroke-width: 10;
    stroke: black;
}

#designer-container #btn-zoom-in {
    position: absolute;
    left: 120px;
    bottom: 50px;
    width: 25px;
    height: 25px;
}

#designer-container #btn-zoom-out {
    position: absolute;
    left: 120px;
    bottom: 10px;
    width: 25px;
    height: 25px;
}

#designer {
    width: 100%;
    height: 100%;
    user-select: none;
    cursor: default;
    background-color: #e3ebed;
    font: normal 10px Verdana, Arial, sans-serif;
}

.tableGroup {
    stroke: #707070;
}

.table {
    background-color: white;
    min-width: 100px;
    border-collapse: collapse;

    border: 1px solid #BBB;
}

.table tr {
    border-bottom: 1px solid #BBB;
}

.table tr th {
    font-size: 1.2em;
    padding: 5px;
    background-color: lightcyan;
}

.table td {
    padding: 5px;
    padding-left: 10px;
    padding-right: 10px;
}

path {
    stroke-width: 1;
    stroke: #666;
    fill: none;
}

.pathHover {
    stroke-width: 2;
    stroke: black;
}

.fromRelation {
    background-color: lightgreen;
}

.toRelation {
    background-color: lightcoral;
}

.highlight {
    stroke-width: 12;
    stroke: transparent;
}
`;