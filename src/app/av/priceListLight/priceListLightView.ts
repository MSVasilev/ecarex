/// <reference path="../../iis/form/form.ts" />
/// <reference path="priceListLight.ts" />

class Report {
    static update(pll:PriceListLight, tableBox:TableBox, findType:string, findValue:string){
    tableBox.rowList.clear();



    if(findType == "d"){
        Report.ByDescription(tableBox, pll);
    }else{
        Report.ByNumber(tableBox, pll, findValue);
    }
}

    static ByDescription(tableBox:TableBox, pll:PriceListLight) {
        var i:number = 0;
        pll.priceProductListLight.p.forEach(p => {
            tableBox.rowList.addByObject(p);
            i++
        });
    }

    static ByNumber(tableBox:TableBox, pll:PriceListLight, findValue:string) {

        // var PLRows:Array<Product> = Arrays.filterByField<Product>(pll.productListLight.p, "ns", findValue);
        // PLRows.forEach(product => {
        //     var PPRows:Array<PriceProduct> = Arrays.filterByField<PriceProduct>(pll.priceProductListLight.p, "pi", product.i);
        //
        //
        //     PPRows.forEach(products => {
        //        if (products.p1 == 0) {products.p1 = Math.ceil(products.p * 1.25)}
        //        else {products.p1 = Math.ceil(products.p * 1.25)}
        //        // else {products.p1 = Math.ceil(products.p1)}
        //         products.p2 = Math.ceil(products.p1 * 0.95);
        //         products.mo = '';
        //
        //     });
        //
        //     var PPRowsOwn:Array<PriceProduct> = Arrays.filterByField<PriceProduct>(PPRows, "o", 1);
        //     var PPRowsOrder:Array<PriceProduct> = Arrays.filterByField<PriceProduct>(PPRows, "o", 0);
        //
        //     if (PPRowsOwn.length == 0) {
        //         var PPRowsOrderFirstLine = PPRowsOrder.slice(0, 1);
        //         var PPRowsOrderMidLines = PPRowsOrder.slice(1, 3);
        //         var PPRowsOrderGroup = PPRowsOrder.slice(3);
        //
        //         var row:Row = tableBox.rowList.addByObject(PPRowsOrderFirstLine[0]);
        //         row.htmlElement.classList.add('firstLine');
        //
        //         PPRowsOrderMidLines.forEach(PPRow => {
        //             tableBox.rowList.addByObject(PPRow);
        //         });
        //
        //         if (PPRowsOrderGroup.length > 0) {
        //             var descriptionGroup2:string = "Показать остальные предложения " + PPRowsOrderGroup[0].mfd + " " + PPRowsOrderGroup[0].n + " (" + PPRowsOrderGroup.length + ")";
        //
        //             var RowListState = getRowListState() || {};
        //             if (RowListState[product.i] == 0 || RowListState[product.i] === null) {var expand:boolean = true;}
        //             else {var expand:boolean = false;}
        //
        //             var rowListGroup2:RowList = tableBox.rowList.addGroupItems(descriptionGroup2, expand, product.i.toString());
        //             PPRowsOrderGroup.forEach(PPRow => {
        //                 rowListGroup2.addByObject(PPRow);
        //             });
        //         }
        //     }
        //     else if (PPRowsOwn.length == 1){
        //         var row:Row = tableBox.rowList.addByObject(PPRowsOwn[0]);
        //         row.htmlElement.style.fontWeight = 'bold';
        //         row.htmlElement.classList.add('firstLine');
        //
        //             var PPRowsOrderMidLines = PPRowsOrder.slice(0, 3);
        //             var PPRowsOrderGroup = PPRowsOrder.slice(3);
        //
        //             PPRowsOrderMidLines.forEach(PPRow => {
        //                 tableBox.rowList.addByObject(PPRow);
        //             });
        //
        //             if (PPRowsOrderGroup.length > 0) {
        //                 var descriptionGroup2:string = "Показать остальные предложения " + PPRowsOrderGroup[0].mfd + " " + PPRowsOrderGroup[0].n + " (" + PPRowsOrderGroup.length + ")";
        //
        //                 var RowListState = getRowListState() || {};
        //                 if (RowListState[product.i] == 0 || RowListState[product.i] === null) {var expand:boolean = true;}
        //                 else {var expand:boolean = false;}
        //
        //                 var rowListGroup2:RowList = tableBox.rowList.addGroupItems(descriptionGroup2, expand, product.i.toString());
        //                 PPRowsOrderGroup.forEach(PPRow => {
        //                     rowListGroup2.addByObject(PPRow);
        //                 });
        //             }
        //     }
        //     else{
        //         var PPRowsOwnFirstLine = PPRowsOwn.slice(0, 1);
        //         var PPRowsOwnMidLines = PPRowsOwn.slice(1);
        //
        //         var row:Row = tableBox.rowList.addByObject(PPRowsOwnFirstLine[0]);
        //         row.htmlElement.style.fontWeight = 'bold';
        //         row.htmlElement.classList.add('firstLine');
        //
        //         PPRowsOwnMidLines.forEach(OwnRow =>{
        //             var row:Row = tableBox.rowList.addByObject(OwnRow);
        //             row.htmlElement.style.fontWeight = 'bold';
        //
        //         });
        //
        //             var PPRowsOrderMidLines = PPRowsOrder.slice(0, 3);
        //             var PPRowsOrderGroup = PPRowsOrder.slice(3);
        //
        //             PPRowsOrderMidLines.forEach(PPRow => {
        //                 tableBox.rowList.addByObject(PPRow);
        //             });
        //
        //             if (PPRowsOrderGroup.length > 0) {
        //                 var descriptionGroup2:string = "Показать остальные предложения " + PPRowsOrderGroup[0].mfd + " " + PPRowsOrderGroup[0].n + " (" + PPRowsOrderGroup.length + ")";
        //
        //                 var RowListState = getRowListState() || {};
        //                 if (RowListState[product.i] == 0 || RowListState[product.i] === null) {var expand:boolean = true;}
        //                 else {var expand:boolean = false;}
        //
        //                 var rowListGroup2:RowList = tableBox.rowList.addGroupItems(descriptionGroup2, expand, product.i.toString());
        //                 PPRowsOrderGroup.forEach(PPRow => {
        //                     rowListGroup2.addByObject(PPRow);
        //                 });
        //             }
        //     }
        //
        //     var ARows:Array<Analog> = Arrays.filterByField<Analog>(pll.analogListLight.a, "pi", product.i);
        //     //var APPRows:Array<PriceProduct> = new Array<PriceProduct>();
        //         //var APPRowsFirstLine = APPRows.slice(0, 1);
        //         //var firstARow:Row = tableBox.rowList.addByObject(APPRowsFirstLine[0]);
        //         //firstARow.htmlElement.classList.add('firstLine');
        //     //var descriptionGroup:string = "Аналоги";
        //     var Manufacturer:Array<Manufacturer> = Arrays.filterByField<Manufacturer>(pll.manufacturerListLight.mf, "i", product.mfi);
        //     if (ARows.length > 0) {
        //
        //         var values:any = [];
        //         ARows.forEach(ARow => {
        //             values.push(ARow.pia);
        //         });
        //         var APPRowsRebuild:Array<PriceProduct> = Arrays.filterByFields<PriceProduct>(pll.priceProductListLight.p, "pi", values);
        //
        //         APPRowsRebuild.forEach(product => {
        //             if (product.p1 == 0) {product.p1 = Math.ceil(product.p * 1.25)}
        //             else {product.p1 = Math.ceil(product.p * 1.25)}
        //             //else {product.p1 = Math.ceil(product.p1)}
        //         });
        //
        //         // var APPRowsRebuild:Array<PriceProduct> = [];
        //         //
        //         // ARows.forEach(ARow => {
        //         //     var APPRows:Array<PriceProduct> = Arrays.filterByField<PriceProduct>(pll.priceProductListLight.p, "pi", ARow.pia);
        //         //
        //         //     APPRows.forEach(APPRow =>{
        //         //         APPRowsRebuild.push(APPRow);
        //         //     });
        //         //
        //         //     //var ownCount:number = Arrays.filterByField<PriceProduct>(APPRows, "o", 1).length;
        //         //
        //         //     // var APPRowsFirstLine = APPRows.slice(0, 1);
        //         //     // var APPRowsMidLine = APPRows.slice(1, 3);
        //         //     // var APPRowsEnd = APPRows.slice(3);
        //         //     //
        //         //     // APPRowsFirstLine.forEach(APPRow => {
        //         //     //     if(APPRow.o == 1){
        //         //     //         var row:Row = rowListGroup.addByObject(APPRow);
        //         //     //         row.htmlElement.style.backgroundColor = '#eea236';
        //         //     //         row.htmlElement.classList.add('firstLineAnalog');
        //         //     //     }else{
        //         //     //         var row:Row = rowListGroup.addByObject(APPRow);
        //         //     //         row.htmlElement.classList.add('firstLineAnalog');
        //         //     //     }
        //         //     // });
        //         //     // APPRowsMidLine.forEach(APPRow => {
        //         //     //     if(APPRow.o == 1){
        //         //     //         var row:Row = rowListGroup.addByObject(APPRow);
        //         //     //         row.htmlElement.style.backgroundColor = '#eea236';
        //         //     //
        //         //     //     }else{
        //         //     //         rowListGroup.addByObject(APPRow);
        //         //     //
        //         //     //     }
        //         //     // });
        //         //     // if (APPRowsEnd.length > 0) {
        //         //     //     var descriptionGroup2:string = "Показать остальные предложения " + APPRowsEnd[0].mfd + " " + PPRowsEnd[0].n + " (" + APPRowsEnd.length + ")";
        //         //     //     var rowListGroup2:RowList = rowListGroup.addGroupItems(descriptionGroup2, true);
        //         //     //     APPRowsEnd.forEach(APPRow => {
        //         //     //         rowListGroup2.addByObject(APPRow);
        //         //     //     });
        //         //     // }
        //         //
        //         // });
        //
        //         //new SortArray(<any>APPRowsRebuild).sort("p1", SortDirection.ASC);
        //
        //         var APPRowsRebuildOwn:Array<PriceProduct> = Arrays.filterByField<PriceProduct>(APPRowsRebuild, "o", 1);
        //         var APPRowsRebuildOrder:Array<PriceProduct> = Arrays.filterByField<PriceProduct>(APPRowsRebuild, "o", 0);
        //
        //         var descriptionGroup:string = "Аналоги для " + Manufacturer[0].ds + " " + product.ns + "        заменителей: (" + ARows.length + ")     ценовых предложений: (" + APPRowsRebuild.length + ")";
        //         var RowListState = getRowListState() || {};
        //         var asdfg:string = product.i.toString() + 'a';
        //         if (RowListState[asdfg] == 0 || RowListState[product.i] === null) {var expand:boolean = true;}
        //         else {var expand:boolean = false;}
        //
        //         var rowListGroup:RowList = tableBox.rowList.addGroup(descriptionGroup, expand, product.i.toString()+'a');
        //
        //
        //
        //         APPRowsRebuildOwn.forEach(APPRow => {
        //             if (APPRow.p1 > 0){
        //                 var row:Row = rowListGroup.addByObject(APPRow);
        //                 row.htmlElement.style.fontWeight = 'bold';
        //             }
        //             //var row:Row = rowListGroup.addByObject(ResultAnalog);
        //         });
        //
        //         var APPRowsRebuildOrderMidLines = APPRowsRebuildOrder.slice(0, 10);
        //         var APPRowsRebuildOrderGroup = APPRowsRebuildOrder.slice(10);
        //
        //         APPRowsRebuildOrderMidLines.forEach(APPRow => {
        //             rowListGroup.addByObject(APPRow);
        //         });
        //
        //         if (APPRowsRebuildOrderGroup.length > 0) {
        //             var descriptionGroup2:string = "Показать остальные предложения по аналогам (" + APPRowsRebuildOrderGroup.length + ")";
        //
        //             var RowListState = getRowListState() || {};
        //             var asdfg:string = product.i.toString() + 'ae';
        //             if (RowListState[asdfg] == 0 || RowListState[product.i] === null) {var expand:boolean = true;}
        //             else {var expand:boolean = false;}
        //
        //             var rowListGroup2:RowList = rowListGroup.addGroupItems(descriptionGroup2, expand, product.i.toString()+'ae');
        //             APPRowsRebuildOrderGroup.forEach(APPRow => {
        //                 rowListGroup2.addByObject(APPRow);
        //             });
        //         }
        //     }
        // });
        
        findValue = decodeURI(findValue);
        findValue = findValue.toLowerCase();



        var PLRows:Array<Product> = Arrays.filterByField<Product>(pll.productListLight.p, "ns", findValue);
            PLRows.forEach(product => {
                var PPRows:Array<PriceProduct> = Arrays.filterByField<PriceProduct>(pll.priceProductListLight.p, "pi", product.i);


                var PPRowsOwn:Array<PriceProduct> = Arrays.filterByField<PriceProduct>(PPRows, "o", 1);
                var PPRowsOrder:Array<PriceProduct> = Arrays.filterByField<PriceProduct>(PPRows, "o", 0);


                var PPRowsOrderMidLines = PPRowsOrder.slice(0, 4);
                var PPRowsOrderGroup = PPRowsOrder.slice(4);

                var i:number = 0;

                    if (PPRowsOwn.length == 0){
                        PPRowsOrder.forEach(products => {
                            PPRowsOrder[i].p1 = Math.ceil(products.p * 1.35);
                            PPRowsOrder[i].p2 = Math.ceil(products.p * 1.25);
                            if (products.p !== 0 && products.q !== 0/*&& products.p !== null*/){
                                if (i == 0 /*&& products.p !== 0*/){
                                    // if (products.p == 77777) {
                                    //     products.p1 = 'на заказ';
                                    //     products.p2 = 'на заказ';
                                    // }
                                    // else {
                                    //     products.p1 = Math.ceil(products.p * 1.25);
                                    //     products.p2 = Math.ceil(products.p1 * 0.95);
                                    // }
                                    // var row:Row = tableBox.rowList.addByObject(products);
                                    //
                                    // row.htmlElement.style.fontWeight = 'bold';
                                    tableBox.rowList.addByObject(products).htmlElement.classList.add('firstLine');
                                    i++;
                                }
                                else /*if (products.p !== 0)*/{
                                    // if (products.p == 77777) {
                                    //     products.p1 = 'на заказ';
                                    //
                                    // }
                                    // else {
                                    //     products.p1 = Math.ceil(products.p * 1.25);
                                    //     products.p2 = Math.ceil(products.p1 * 0.95);
                                    // }
                                    tableBox.rowList.addByObject(products).htmlElement.classList.add('secondLine');
                                    i++;
                                }
                            }
                        });
                    }
                    else {
                        PPRowsOwn.forEach(products => {
                            PPRowsOwn[i].p1 = Math.ceil(products.p * 1.35);
                            PPRowsOwn[i].p2 = Math.ceil(products.p * 1.25);
                            if (products.p !== 0 || products.q !== 0/*&& products.p !== null*/){
                                if (i == 0 /*&& products.p !== 0*/){
                                    // if (products.p == 77777) {
                                    //     products.p1 = 'на заказ';
                                    //     products.p2 = 'на заказ';
                                    // }
                                    // else {
                                    //     products.p1 = Math.ceil(products.p * 1.25);
                                    //     products.p2 = Math.ceil(products.p1 * 0.95);
                                    // }
                                    // var row:Row = tableBox.rowList.addByObject(products);
                                    //
                                    // row.htmlElement.style.fontWeight = 'bold';
                                    tableBox.rowList.addByObject(products).htmlElement.classList.add('firstLineOwn');
                                    i++;
                                }
                                else /*if (products.p !== 0)*/{
                                    // if (products.p == 77777) {
                                    //     products.p1 = 'на заказ';
                                    //
                                    // }
                                    // else {
                                    //     products.p1 = Math.ceil(products.p * 1.25);
                                    //     products.p2 = Math.ceil(products.p1 * 0.95);
                                    // }
                                    tableBox.rowList.addByObject(products).htmlElement.classList.add('secondLineOwn');
                                    i++;
                                }
                            }
                        });
                        PPRowsOrder.forEach(products => {
                            PPRowsOrder[i].p1 = Math.ceil(products.p * 1.35);
                            PPRowsOrder[i].p2 = Math.ceil(products.p * 1.25);
                            if (products.p !== 0 && products.q !== 0/*&& products.p !== null*/){
                                if (i == 0 /*&& products.p !== 0*/){
                                    // if (products.p == 77777) {
                                    //     products.p1 = 'на заказ';
                                    //     products.p2 = 'на заказ';
                                    // }
                                    // else {
                                    //     products.p1 = Math.ceil(products.p * 1.25);
                                    //     products.p2 = Math.ceil(products.p1 * 0.95);
                                    // }
                                    // var row:Row = tableBox.rowList.addByObject(products);
                                    //
                                    // row.htmlElement.style.fontWeight = 'bold';
                                    tableBox.rowList.addByObject(products).htmlElement.classList.add('secondLine');
                                    i++;
                                }
                                else /*if (products.p !== 0)*/{
                                    // if (products.p == 77777) {
                                    //     products.p1 = 'на заказ';
                                    //
                                    // }
                                    // else {
                                    //     products.p1 = Math.ceil(products.p * 1.25);
                                    //     products.p2 = Math.ceil(products.p1 * 0.95);
                                    // }
                                    tableBox.rowList.addByObject(products).htmlElement.classList.add('secondLine');
                                    i++;
                                }
                            }
                        });
                    }

                var ARows:Array<Analog> = Arrays.filterByField<Analog>(pll.analogListLight.a, "pi", product.i);
                //var APPRows:Array<PriceProduct> = new Array<PriceProduct>();
                //var APPRowsFirstLine = APPRows.slice(0, 1);
                //var firstARow:Row = tableBox.rowList.addByObject(APPRowsFirstLine[0]);
                //firstARow.htmlElement.classList.add('firstLine');
                //var descriptionGroup:string = "Аналоги";
                var Manufacturer:Array<Manufacturer> = Arrays.filterByField<Manufacturer>(pll.manufacturerListLight.mf, "i", product.mfi);
                var j:number = 0;

                if (ARows.length > 0) {

                    var values:any = [];
                    ARows.forEach(ARow => {
                        values.push(ARow.pia);
                    });
                    
                    var APPRowsRebuild:Array<PriceProduct> = Arrays.filterByFields<PriceProduct>(pll.priceProductListLight.p, "pi", values);
                    // APPRowsRebuild = APPRowsRebuild.sort("p", SortDirection.ASC);
                    // APPRowsRebuild = new SortArray.sort("p", SortDirection.ASC);
                    // var APPRowsRebuild:SortArray = new SortArray(APPRowsRebuild2);
                    // APPRowsRebuild.sort("p", SortDirection.ASC);

                    APPRowsRebuild.forEach(product => {
                        if (product.p1 == 0) {APPRowsRebuild[j].p1 = Math.ceil(product.p * 1.35); APPRowsRebuild[j].p2 = Math.ceil(product.p * 1.25)}
                        else {APPRowsRebuild[j].p1 = Math.ceil(product.p * 1.35); APPRowsRebuild[j].p2 = Math.ceil(product.p * 1.25)}
                        //else {product.p1 = Math.ceil(product.p1)}
                        j++
                    });

                    // var APPRowsRebuild:Array<PriceProduct> = [];
                    //
                    // ARows.forEach(ARow => {
                    //     var APPRows:Array<PriceProduct> = Arrays.filterByField<PriceProduct>(pll.priceProductListLight.p, "pi", ARow.pia);
                    //
                    //     APPRows.forEach(APPRow =>{
                    //         APPRowsRebuild.push(APPRow);
                    //     });
                    //
                    //     //var ownCount:number = Arrays.filterByField<PriceProduct>(APPRows, "o", 1).length;
                    //
                    //     // var APPRowsFirstLine = APPRows.slice(0, 1);
                    //     // var APPRowsMidLine = APPRows.slice(1, 3);
                    //     // var APPRowsEnd = APPRows.slice(3);
                    //     //
                    //     // APPRowsFirstLine.forEach(APPRow => {
                    //     //     if(APPRow.o == 1){
                    //     //         var row:Row = rowListGroup.addByObject(APPRow);
                    //     //         row.htmlElement.style.backgroundColor = '#eea236';
                    //     //         row.htmlElement.classList.add('firstLineAnalog');
                    //     //     }else{
                    //     //         var row:Row = rowListGroup.addByObject(APPRow);
                    //     //         row.htmlElement.classList.add('firstLineAnalog');
                    //     //     }
                    //     // });
                    //     // APPRowsMidLine.forEach(APPRow => {
                    //     //     if(APPRow.o == 1){
                    //     //         var row:Row = rowListGroup.addByObject(APPRow);
                    //     //         row.htmlElement.style.backgroundColor = '#eea236';
                    //     //
                    //     //     }else{
                    //     //         rowListGroup.addByObject(APPRow);
                    //     //
                    //     //     }
                    //     // });
                    //     // if (APPRowsEnd.length > 0) {
                    //     //     var descriptionGroup2:string = "Показать остальные предложения " + APPRowsEnd[0].mfd + " " + PPRowsEnd[0].n + " (" + APPRowsEnd.length + ")";
                    //     //     var rowListGroup2:RowList = rowListGroup.addGroupItems(descriptionGroup2, true);
                    //     //     APPRowsEnd.forEach(APPRow => {
                    //     //         rowListGroup2.addByObject(APPRow);
                    //     //     });
                    //     // }
                    //
                    // });

                    // new SortArray(<any>APPRowsRebuild).sort("p1", SortDirection.ASC);

                    var APPRowsRebuildOwn:Array<PriceProduct> = Arrays.filterByField<PriceProduct>(APPRowsRebuild, "o", 1);
                    var APPRowsRebuildOrder:Array<PriceProduct> = Arrays.filterByField<PriceProduct>(APPRowsRebuild, "o", 0);

                    var descriptionGroup:string = "Аналоги для " + Manufacturer[0].ds + " " + product.ns + "        заменителей: (" + ARows.length + ")     ценовых предложений: (" + APPRowsRebuild.length + ")";
                    var RowListState = getRowListState() || {};
                    var asdfg:string = product.i.toString() + 'a';
                    if (RowListState[asdfg] == 0 || RowListState[product.i] === null) {var expand:boolean = true;}
                    else {var expand:boolean = false;}

                    var rowListGroup:RowList = tableBox.rowList.addGroup(descriptionGroup, expand, product.i.toString()+'a');



                    APPRowsRebuildOwn.forEach(APPRow => {
                        if (APPRow.p !== 0 || APPRow.q !== 0){

                            var row:Row = rowListGroup.addByObject(APPRow);
                            row.htmlElement.style.fontWeight = 'bold';
                        }
                        //var row:Row = rowListGroup.addByObject(ResultAnalog);
                    });

                    var APPRowsRebuildOrderMidLines = APPRowsRebuildOrder.slice(0, 10);
                    var APPRowsRebuildOrderGroup = APPRowsRebuildOrder.slice(10);

                    APPRowsRebuildOrderMidLines.forEach(APPRow => {
                        if (APPRow.p !== 0 && APPRow.q !== 0) {
                            rowListGroup.addByObject(APPRow);
                        }
                    });

                    if (APPRowsRebuildOrderGroup.length > 0) {
                        var descriptionGroup2:string = "Показать остальные предложения по аналогам (" + APPRowsRebuildOrderGroup.length + ")";

                        var RowListState = getRowListState() || {};
                        var asdfg:string = product.i.toString() + 'ae';
                        if (RowListState[asdfg] == 0 || RowListState[product.i] === null) {var expand:boolean = true;}
                        else {var expand:boolean = false;}

                        var rowListGroup2:RowList = rowListGroup.addGroupItems(descriptionGroup2, expand, product.i.toString()+'ae');
                        APPRowsRebuildOrderGroup.forEach(APPRow => {
                            if (APPRow.p !== 0 && APPRow.q !== 0) {
                                rowListGroup2.addByObject(APPRow);
                            }
                        });
                    }
                }
            });
    }
}

// class priceListLightView {
//
//     public pll:PriceListLight;
//     public tableBox:TableBox;
//     private findType:string;
//     private findValue:string;
//
//     public  onChange(control:TextBox):void {
//         var self = this;
//
//         this.findValue = control.getValue();
//         if (this.findValue.length < 3) return;
//         if (this.findValue.indexOf(" ") > 2) {
//             this.findType = "d";
//         } else {
//             this.findType = "n";
//         }
//
//         $.getJSON("/products/?" + this.findType + "=" + this.findValue,
//             function(pll:PriceListLight){self.onDataGet(pll)}
//         );
//
//         //$.getJSON("priceListLight.json",
//         //    function (pll:PriceListLight) {
//         //        self.onDataGet(pll)
//         //    }
//         //);
//
//
//     }
//
//     constructor() {
//         var form:Form = new Form();
//         //var button:Button = <Button>form.createControl("Button");
//         //button.setHeight("20px");
//         //button.setWidth("70px");
//         //button.setDescription("Кнопка");
//
//         var textBox:TextBox = <TextBox>form.createControl("TextBox");
//         //textBox.addControlEvent("change", this.onChange.bind(this));
//         textBox.addControlEvent("keyup", this.onChange.bind(this));
//
//         this.tableBox = <TableBox>form.createControl("TableBox");
//         this.tableBox.setWidth("100%");
//
//         this.tableBox.fieldList.add("mfd", "Бренд", "10%");
//         this.tableBox.fieldList.add("n", "Номер", "10%");
//         this.tableBox.fieldList.add("d", "Описание", "25%");
//         this.tableBox.fieldList.add("q", "Кол-во", "5%");
//         this.tableBox.fieldList.add("p", "Вход", "5%");
//         this.tableBox.fieldList.add("p1", "Выход", "5%");
//         this.tableBox.fieldList.add("pr", "Прайс", "10%");
//         this.tableBox.fieldList.add("upd", "Обн-е", "5%");
//         this.tableBox.fieldList.add("mo", "Мин.пар", "5%");
//         this.tableBox.fieldList.add("dp", "Поставка", "5%");
//         this.tableBox.fieldList.add("c", "Коммент.", "15%");
//
//         form.open();
//
//         this.tableBox.header.setSortFunction(this.sort.bind(this));
//
//         this.findType = "n";
//         this.findValue = "w753";
//         var self = this;
//         $.getJSON("/products/priceListLight.json",
//             function (pll:PriceListLight) {
//                 self.onDataGet(pll)
//             }
//         );
//
//     }
//
//     public sort(field:Field, sortDirection:SortDirection) {
//         var sort:SortArray = new SortArray(<any>this.pll.priceProductListLight.p);
//
//         //sort.sort(field.getId(), sortDirection);
//         //sort.sort("o", SortDirection.ASC);
//
//
//         if(field.getId() === "mfd"){
//             sort = new SortArray(<any>this.pll.manufacturerListLight.mf);
//             sort.sort("ds", sortDirection);
//         }else if(field.getId() === "n"){
//             sort = new SortArray(<any>this.pll.productListLight.p);
//             sort.sort("ns", sortDirection);
//         }
//
//         Report.update(this.pll, this.tableBox, this.findType, this.findValue);
//     }
//
//     public onDataGet(pll:PriceListLight):void {
//         this.pll = pll;
//
//         Report.update(pll, this.tableBox, this.findType, this.findValue);
//     }
// }



class priceListLightViewUser {

    public pll:PriceListLight;
    public tableBox:TableBox;
    private findType:string;
    private findValue:string;

    public  onChange(control:TextBox):void {
        var self = this;

        this.findValue = control.getValue();
        if (this.findValue.length < 3) return;
        if (this.findValue.indexOf(" ") > 2) {
            this.findType = "d";
        } else {
            this.findType = "n";
        }

        // var ArtNumber =  (window.location.pathname).split('/');
        // this.findValue = ArtNumber[2];

        // $.getJSON("/poisk/?" + this.findType + "=" + this.findValue,
        //     function(pll:PriceListLight){self.onDataGet(pll)}
        // );

        // $.getJSON("/products/priceListLight.json",
        //    function (pll:PriceListLight) {
        //        self.onDataGet(pll)
        //    }
        // );
    }

    constructor() {
        $('#tableBoxForm').empty();
        var form:Form = new Form();

        // var button:Button = <Button>form.createControl("Button");
        // button.setHeight("20px");
        // button.setWidth("70px");
        // button.setDescription("Кнопка");
        //
        // var textBox:TextBox = <TextBox>form.createControl("TextBox");
        // textBox.addControlEvent("change", this.onChange.bind(this));
        // textBox.addControlEvent("keyup", this.onChange.bind(this));

        this.tableBox = <TableBox>form.createControl("TableBox");
        this.tableBox.setWidth("100%");

        this.tableBox.fieldList.add("mfd", "Бренд", "15%");
        this.tableBox.fieldList.add("n", "Номер", "10%");
        this.tableBox.fieldList.add("d", "Описание", "30%");
        this.tableBox.fieldList.add("q", "Ост", "5%");
        //this.tableBox.fieldList.add("p", "Вход", "5%");
        this.tableBox.fieldList.add("p1", "Цена", "10%");
        this.tableBox.fieldList.add("p2", "Опт", "10%");
        //this.tableBox.fieldList.add("pr", "Прайс", "10%");
        //this.tableBox.fieldList.add("upd", "Акт", "3%");
        this.tableBox.fieldList.add("mo", "Мин", "0%");
        this.tableBox.fieldList.add("dp", "Срок", "5%");
        this.tableBox.fieldList.add("o", "Наличие", "0%");
        this.tableBox.fieldList.add("pr", "Поставщик", "0%");
        //this.tableBox.fieldList.add("c", "Комментарии", "19%");
        this.tableBox.fieldList.add("ui", "Заказ", "15%");

        form.open();

        //var ArtNumber = $('#headerSearch').val();
        var ArtNumber =  (window.location.pathname).split('/');
        var ArtNumberDecodeURI:string = decodeURI(ArtNumber[2]);

        this.findType = "n";
        this.findValue = ArtNumber[2];

        var self = this;
        //var adr = 'http://185.51.61.11:9192/av/priceListLight/?n='+ArtNumber[2];
        var adr:string = 'https://www.ecarex.ru/proxy/'+ArtNumberDecodeURI;

        var jqxhr = $.getJSON(adr, function() {
            //console.log( "ПОЛУЧИЛИ JSON" );
        });
        $('#loading').show(); // гифка ожидание ответа
        jqxhr.done(function (pll:PriceListLight) {
            new SortArray(<any>pll.priceProductListLight.p).sort("p", SortDirection.ASC); // сортируем json ответ по цене
            self.onDataGet(pll);
            $('#loading').hide();
        });
        // this.tableBox.header.setSortFunction(this.sort.bind(this)); // активируем функционал сортировки по столбцам
        this.tableBox.header.setSortFunction(this.sort.bind(this));
    }

    public sort(field:Field, sortDirection:SortDirection) {

        var sort:SortArray = new SortArray(<any>this.pll.priceProductListLight.p);

        sort.sort(field.getId(), sortDirection);
        //sort.sort("o", SortDirection.ASC);


        if(field.getId() === "mfd"){
            sort = new SortArray(<any>this.pll.manufacturerListLight.mf);
            sort.sort("ds", sortDirection);
        }else if(field.getId() === "n"){
            sort = new SortArray(<any>this.pll.priceProductListLight.p);
            sort.sort("ns", sortDirection);
        }


        Report.update(this.pll, this.tableBox, this.findType, this.findValue);
    }

    public onDataGet(pll:PriceListLight):void {
        this.pll = pll;

        
        Report.update(pll, this.tableBox, this.findType, this.findValue);

    }

}



class priceListLightViewCorp {

    public pll:PriceListLight;
    public tableBox:TableBox;
    private findType:string;
    private findValue:string;

    public  onChange(control:TextBox):void {
        var self = this;

        this.findValue = control.getValue();
        if (this.findValue.length < 3) return;
        if (this.findValue.indexOf(" ") > 2) {
            this.findType = "d";
        } else {
            this.findType = "n";
        }

        // var ArtNumber =  (window.location.pathname).split('/');
        // this.findValue = ArtNumber[2];

        // $.getJSON("/poisk/?" + this.findType + "=" + this.findValue,
        //     function(pll:PriceListLight){self.onDataGet(pll)}
        // );

        // $.getJSON("/products/priceListLight.json",
        //    function (pll:PriceListLight) {
        //        self.onDataGet(pll)
        //    }
        // );
    }

    constructor() {
        $('#tableBoxForm').empty();
        var form:Form = new Form();

        // var button:Button = <Button>form.createControl("Button");
        // button.setHeight("20px");
        // button.setWidth("70px");
        // button.setDescription("Кнопка");
        //
        // var textBox:TextBox = <TextBox>form.createControl("TextBox");
        // textBox.addControlEvent("change", this.onChange.bind(this));
        // textBox.addControlEvent("keyup", this.onChange.bind(this));

        this.tableBox = <TableBox>form.createControl("TableBox");
        this.tableBox.setWidth("100%");

        this.tableBox.fieldList.add("mfd", "Бренд", "10%");
        this.tableBox.fieldList.add("n", "Номер", "10%");
        this.tableBox.fieldList.add("d", "Описание", "45%");
        this.tableBox.fieldList.add("q", "Ост", "5%");
        this.tableBox.fieldList.add("p", "Вход", "5%");
        //this.tableBox.fieldList.add("p1", "Цена", "10%");
        //this.tableBox.fieldList.add("p2", "Опт", "10%");
        //this.tableBox.fieldList.add("pr", "Прайс", "10%");
        //this.tableBox.fieldList.add("upd", "Акт", "3%");
        //this.tableBox.fieldList.add("mo", "Мин", "5%");
        this.tableBox.fieldList.add("dp", "Срок", "5%");
        this.tableBox.fieldList.add("c", "Комментарии", "20%");
        //this.tableBox.fieldList.add("ui", "Заказ", "15%");

        form.open();





        //var ArtNumber = $('#headerSearch').val();
        var ArtNumber =  (window.location.pathname).split('/');


        this.findType = "n";
        this.findValue = ArtNumber[2];

        var asdf:string = decodeURI(ArtNumber[2]);


        var self = this;
        //var adr = 'http://185.51.61.11:9192/av/priceListLight/?n='+ArtNumber[2];
        var adr:string = 'http://corp.ecarex.ru/proxy/'+asdf;

        var jqxhr = $.getJSON(adr, function() {
            //console.log( "ПОЛУЧИЛИ JSON" );
        });
        $('#loading').show();
        jqxhr.done(function (pll:PriceListLight) {self.onDataGet(pll); $('#loading').hide();});

       // this.tableBox.header.setSortFunction(this.sort.bind(this));
        this.tableBox.header.setSortFunction(this.sort.bind(this));

        // $.getJSON(adr, function (pll:PriceListLight) {self.onDataGet(pll);}).fail(function () {
        //     alert('error')
        // });

        // $.ajax({
        //     url: adr,
        //     dataType: 'json',
        //     success: function (pll:PriceListLight, textStatus) {self.onDataGet(pll);},
        //     timeout: 1000 //3 second timeout
        // });

        // "/products/priceListLight.jso
        // http://185.51.61.11:9192/av/priceListLight/?n=w753

    }

    public sort(field:Field, sortDirection:SortDirection) {

        var sort:SortArray = new SortArray(<any>this.pll.priceProductListLight.p);

        sort.sort(field.getId(), sortDirection);
        //sort.sort("o", SortDirection.ASC);


        if(field.getId() === "mfd"){
            sort = new SortArray(<any>this.pll.manufacturerListLight.mf);
            sort.sort("ds", sortDirection);
        }else if(field.getId() === "n"){
            sort = new SortArray(<any>this.pll.priceProductListLight.p);
            sort.sort("ns", sortDirection);
        }


        Report.update(this.pll, this.tableBox, this.findType, this.findValue);
    }

    public onDataGet(pll:PriceListLight):void {
        this.pll = pll;


        Report.update(pll, this.tableBox, this.findType, this.findValue);

    }

}





/*

class priceListLightViewFilters {

    public pll:PriceListLight;
    public tableBox:TableBox;
    private findType:string;
    private findValue:string;

    // public  onChange(control:TextBox):void {
    //     var self = this;
    //
    //     this.findValue = control.getValue();
    //     if (this.findValue.length < 3) return;
    //     if (this.findValue.indexOf(" ") > 2) {
    //         this.findType = "d";
    //     } else {
    //         this.findType = "n";
    //     }
    //
    //     // $.getJSON("/poisk/?" + this.findType + "=" + this.findValue,
    //     //     function(pll:PriceListLight){self.onDataGet(pll)}
    //     // );
    //
    //
    //     $.getJSON("/products/priceListLight.json",
    //         function (pll:PriceListLight) {
    //             self.onDataGet(pll)
    //         }
    //     );
    // }

    constructor() {
        $('#tableBoxFilters').empty();
        var formFilters:FormFilters = new FormFilters();


       
        $('#tableBoxFilters').html('<input type="checkbox">' );

        // var button:Button = <Button>form.createControl("Button");
        // button.setHeight("20px");
        // button.setWidth("70px");
        // button.setDescription("Кнопка");
        //
        // var textBox:TextBox = <TextBox>form.createControl("TextBox");
        // textBox.addControlEvent("change", this.onChange.bind(this));
        // textBox.addControlEvent("keyup", this.onChange.bind(this));

        // this.tableBox = <TableBox>form.createControl("TableBox");
        // this.tableBox.setWidth("100%");
        //
        // this.tableBox.fieldList.add("mfd", "Бренд", "15%");
        // this.tableBox.fieldList.add("n", "Номер", "10%");
        // this.tableBox.fieldList.add("d", "Описание", "25%");
        // this.tableBox.fieldList.add("q", "Ост", "5%");
        // //this.tableBox.fieldList.add("p", "Вход", "5%");
        // this.tableBox.fieldList.add("p1", "Цена", "10%");
        // this.tableBox.fieldList.add("p2", "Опт", "10%");
        // //this.tableBox.fieldList.add("pr", "Прайс", "10%");
        // //this.tableBox.fieldList.add("upd", "Акт", "3%");
        // this.tableBox.fieldList.add("mo", "Мин", "5%");
        // this.tableBox.fieldList.add("dp", "Срок", "5%");
        // //this.tableBox.fieldList.add("c", "Комментарии", "19%");
        // this.tableBox.fieldList.add("ui", "Заказ", "15%");

        formFilters.open();

        //this.tableBox.header.setSortFunction(this.sort.bind(this));

        //var ArtNumber = $('#headerSearch').val();
        // var ArtNumber =  (window.location.pathname).split('/');
        //
        //
        // this.findType = "n";
        // this.findValue = ArtNumber[2];
        // var self = this;
        // $.getJSON("/products/priceListLight.json",
        //     function (pll:PriceListLight) {
        //         self.onDataGet(pll);
        //
        //     }
        // );



    }

    // public sort(field:Field, sortDirection:SortDirection) {
    //     var sort:SortArray = new SortArray(<any>this.pll.priceProductListLight.p);
    //
    //     sort.sort(field.getId(), sortDirection);
    //     //sort.sort("o", SortDirection.ASC);
    //
    //
    //     if(field.getId() === "mfd"){
    //         sort = new SortArray(<any>this.pll.manufacturerListLight.mf);
    //         sort.sort("ds", sortDirection);
    //     }else if(field.getId() === "n"){
    //         sort = new SortArray(<any>this.pll.priceProductListLight.p);
    //         sort.sort("ns", sortDirection);
    //     }
    //
    //
    //     Report.update(this.pll, this.tableBox, this.findType, this.findValue);
    // }
    //
    // public onDataGet(pll:PriceListLight):void {
    //     this.pll = pll;
    //
    //     Report.update(pll, this.tableBox, this.findType, this.findValue);
    //
    // }

   /!* public filterbox(pll:PriceListLight):void {
        this.pll = pll;
        console.log('sdfsd');
        ReportFilters.update(pll, this.tableBox, this.findType, this.findValue);
        GetFilters.getFilterNames(pll, this.tableBox, this.findType, this.findValue);

    }*!/

}*/
