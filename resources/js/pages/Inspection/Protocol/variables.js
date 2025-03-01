export const debug = false;

const a4_Width = 210;
const pagePaddingLeft = 15;
const pagePaddingRight = 10;
const protocolWidth = a4_Width - (pagePaddingLeft + pagePaddingRight);

const secondPageTableRowHeight = 5;

const secondPageTableWidth = 150;
const secondPageTableHalfWidth = secondPageTableWidth / 2;
const secondPageTableQuarterWidth = secondPageTableWidth / 4;

const secondPageTableColOneWidth = 10;
const secondPageTableColTwoWidth = 40;
const secondPageTableColRestWidth = secondPageTableWidth - secondPageTableColOneWidth - secondPageTableColTwoWidth;
const secondPageTableHalfColRestWidth = secondPageTableColRestWidth / 2;

const secondPageTableAdditionalPadding = 15;
const secondPageTablePaddingLeft = pagePaddingLeft + secondPageTableAdditionalPadding;

const secondPageTable2Col1Width = 7;
const secondPageTable2Col2Width = 60;
const secondPageTable2ColRestWidth = (secondPageTableWidth - secondPageTable2Col1Width - secondPageTable2Col2Width) / 3;
const secondPageTable2ColRestHalfWidth = secondPageTable2ColRestWidth / 2;

export const sizes = {
    headerHeight: '18mm',
    pagePaddingLeft: `${pagePaddingLeft}mm`,
    pagePaddingRight: `${pagePaddingRight}mm`,
    protocolWidth: `${protocolWidth}mm`,

    secondPageTablePaddingLeft: `${secondPageTablePaddingLeft}mm`,
    secondPageTableRowHeight: `${secondPageTableRowHeight}mm`,
    secondPageTableRowHeightX2: `${secondPageTableRowHeight * 2}mm`,
    secondPageTableRowHeightX5: `${secondPageTableRowHeight * 5}mm`,
    secondPageTableRowHeightX6: `${secondPageTableRowHeight * 6}mm`,
    secondPageTableWidth: `${secondPageTableWidth}mm`,
    secondPageTableHalfWidth: `${secondPageTableHalfWidth}mm`,
    secondPageTableQuarterWidth: `${secondPageTableQuarterWidth}mm`,
    secondPageTableColOneWidth: `${secondPageTableColOneWidth}mm`,
    secondPageTableColTwoWidth: `${secondPageTableColTwoWidth}mm`,
    secondPageTableColRestWidth: `${secondPageTableColRestWidth}mm`,
    secondPageTableHalfColRestWidth: `${secondPageTableHalfColRestWidth}mm`,
    // xxx: `${xxx}mm`,
    secondPageTable2Col1Width: `${secondPageTable2Col1Width}mm`,
    secondPageTable2Col2Width: `${secondPageTable2Col2Width}mm`,
    secondPageTable2ColRestWidth: `${secondPageTable2ColRestWidth}mm`,
    secondPageTable2ColRestHalfWidth: `${secondPageTable2ColRestHalfWidth}mm`,

    secondPageTablePaddingLeft: `${secondPageTablePaddingLeft}mm`,
};

export const colors = {
    page2CellBackground: '#ccc0d9',
};

export const borders = {
    borderThin: '0.1mm solid black',
    borderNormal: '0.2mm solid black',
    borderThick: '0.3mm solid black',
};
