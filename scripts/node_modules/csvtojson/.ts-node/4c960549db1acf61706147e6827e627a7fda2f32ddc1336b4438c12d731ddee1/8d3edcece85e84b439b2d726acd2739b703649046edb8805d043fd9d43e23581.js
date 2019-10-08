"use strict";
// import {Converter} from "../src/Converter";
// import csv from "../src";
// var assert = require("assert");
// var fs = require("fs");
// var sandbox = require("sinon").sandbox.create();
// var file = __dirname + "/data/testData";
// var trailCommaData = __dirname + "/data/trailingComma";
// describe("CSV Convert in Background Process", function () {
//   afterEach(function () {
//     sandbox.restore();
//   });
//   it("should read from a stream", function (done) {
//     var obj = new Converter({
//       fork: true
//     });
//     var stream = fs.createReadStream(file);
//     obj.then(function (obj) {
//       assert.equal(obj.length, 2);
//       done();
//     },(err)=>{
//       console.log(err.toString());
//     });
//     stream.pipe(obj);
//   });
//   it("should call onNext once a row is parsed.", function (done) {
//     var obj = new Converter({fork:true});
//     var stream = fs.createReadStream(file);
//     var called = false;
//     obj.subscribe(function (resultRow) {
//       assert(resultRow);
//       called = true;
//     });
//     obj.on("done", function () {
//       assert(called);
//       done();
//     });
//     stream.pipe(obj);
//   });
//   it("should emit end_parsed message once it is finished.", function (done) {
//     var obj = new Converter({fork:true});
//     obj.then(function (result) {
//       assert(result);
//       assert(result.length === 2);
//       assert(result[0].date);
//       assert(result[0].employee);
//       assert(result[0].employee.name);
//       assert(result[0].employee.age);
//       assert(result[0].employee.number);
//       assert(result[0].employee.key.length === 2);
//       assert(result[0].address.length === 2);
//       done();
//     });
//     fs.createReadStream(file).pipe(obj);
//   });
//   it("should handle traling comma gracefully", function (done) {
//     var stream = fs.createReadStream(trailCommaData);
//     var obj = new Converter({fork:true});
//     obj.then(function (result) {
//       assert(result);
//       assert(result.length > 0);
//       done();
//     });
//     stream.pipe(obj);
//   });
//   it("should handle comma in column which is surrounded by qoutes", function (done) {
//     var testData = __dirname + "/data/dataWithComma";
//     var rs = fs.createReadStream(testData);
//     var obj = new Converter({
//       "quote": "#",
//       "fork":true
//     });
//     obj.then(function (result) {
//       assert(result[0].col1 === "\"Mini. Sectt");
//       assert.equal(result[3].col2, "125001,fenvkdsf");
//       // console.log(result);
//       done();
//     });
//     rs.pipe(obj);
//   });
//   it("should be able to convert a csv to column array data", function (done) {
//     var columArrData = __dirname + "/data/columnArray";
//     var rs = fs.createReadStream(columArrData);
//     var result:any = {};
//     var csvConverter = new Converter({fork:true});
//     //end_parsed will be emitted once parsing finished
//     csvConverter.then(function () {
//       assert(result.TIMESTAMP.length === 5);
//       done();
//     });
//     //record_parsed will be emitted each time a row has been parsed.
//     csvConverter.subscribe(function (resultRow, rowIndex) {
//       for (var key in resultRow) {
//         if (resultRow.hasOwnProperty(key)) {
//           if (!result[key] || !(result[key] instanceof Array)) {
//             result[key] = [];
//           }
//           result[key][rowIndex] = resultRow[key];
//         }
//       }
//     });
//     rs.pipe(csvConverter);
//   });
//   it("should be able to convert csv string directly", function (done) {
//     var testData = __dirname + "/data/testData";
//     var data = fs.readFileSync(testData).toString();
//     var csvConverter = new Converter({fork:true});
//     //end_parsed will be emitted once parsing finished
//     csvConverter.then(function (jsonObj) {
//       assert.equal(jsonObj.length, 2);
//     });
//     csvConverter.fromString(data).then(function (jsonObj) {
//       assert(jsonObj.length === 2);
//       done();
//     });
//   });
//   it("should be able to convert csv string with error", function (done) {
//     var testData = __dirname + "/data/dataWithUnclosedQuotes";
//     var data = fs.readFileSync(testData).toString();
//     var csvConverter = new Converter({fork:true});
//     csvConverter.fromString(data).then(undefined, function (err) {
//       // console.log(err);
//       assert(err);
//       assert.equal(err.err, "unclosed_quote");
//       done();
//     });
//   });
//   it("should be able to convert csv string without callback provided", function (done) {
//     var testData = __dirname + "/data/testData";
//     var data = fs.readFileSync(testData).toString();
//     var csvConverter = new Converter({fork:true});
//     //end_parsed will be emitted once parsing finished
//     csvConverter.then(function (jsonObj) {
//       assert(jsonObj.length === 2);
//       done();
//     });
//     csvConverter.fromString(data);
//   });
//   it("should be able to handle columns with double quotes", function (done) {
//     var testData = __dirname + "/data/dataWithQoutes";
//     var data = fs.readFileSync(testData).toString();
//     var csvConverter = new Converter({fork:true});
//     csvConverter.fromString(data).then(function (jsonObj) {
//       assert(jsonObj[0].TIMESTAMP === '13954264"22', JSON.stringify(jsonObj[0].TIMESTAMP));
//       assert(jsonObj[1].TIMESTAMP === 'abc, def, ccc', JSON.stringify(jsonObj[1].TIMESTAMP));
//       done();
//     });
//   });
//   it("should be able to handle columns with two double quotes", function (done) {
//     var testData = __dirname + "/data/twodoublequotes";
//     var data = fs.readFileSync(testData).toString();
//     var csvConverter = new Converter({fork:true});
//     csvConverter.fromString(data).then(function (jsonObj) {
//       assert.equal(jsonObj[0].title, "\"");
//       assert.equal(jsonObj[0].data, "xyabcde");
//       assert.equal(jsonObj[0].uuid, "fejal\"eifa");
//       assert.equal(jsonObj[0].fieldA, "bnej\"\"falkfe");
//       assert.equal(jsonObj[0].fieldB, "\"eisjfes\"");
//       done();
//     });
//   });
//   it("should handle empty csv file", function (done) {
//     var testData = __dirname + "/data/emptyFile";
//     var rs = fs.createReadStream(testData);
//     var csvConverter = new Converter({fork:true});
//     csvConverter.then(function (jsonObj) {
//       assert(jsonObj.length === 0);
//       done();
//     });
//     rs.pipe(csvConverter);
//   });
//   it("should parse large csv file", function (done) {
//     var testData = __dirname + "/data/large-csv-sample.csv";
//     var rs = fs.createReadStream(testData);
//     var csvConverter = new Converter({fork:true});
//     var count = 0;
//     csvConverter.subscribe(function () {
//       // console.log(arguments);
//       count++;
//     });
//     csvConverter.then(function () {
//       assert.equal(count, 5290);
//       done();
//     });
//     rs.pipe(csvConverter);
//   });
//   it("should parse data and covert to specific types", function (done) {
//     var testData = __dirname + "/data/dataWithType";
//     var rs = fs.createReadStream(testData);
//     var csvConverter = new Converter({
//       fork:true,
//       checkType: true,
//       colParser: {
//         "column6": "string",
//         "column7": "string"
//       }
//     });
//     csvConverter.subscribe(function (d) {
//       assert(typeof d.column1 === "number");
//       assert(typeof d.column2 === "string");
//       assert.equal(d["colume4"], "someinvaliddate");
//       assert(d.column5.hello === "world");
//       assert(d.column6 === '{"hello":"world"}');
//       assert(d.column7 === "1234");
//       assert(d.column8 === "abcd");
//       assert(d.column9 === true);
//       assert(d.column10[0] === 23);
//       assert(d.column10[1] === 31);
//       assert(d.column11[0].hello === "world");
//       assert(d["name#!"] === false);
//     });
//     csvConverter.on("done", function () {
//       done();
//     });
//     rs.pipe(csvConverter);
//   });
//   it("should turn off field type check", function (done) {
//     var testData = __dirname + "/data/dataWithType";
//     var rs = fs.createReadStream(testData);
//     var csvConverter = new Converter({
//       fork:true,
//       checkType: false
//     });
//     csvConverter.subscribe(function (d) {
//       assert(typeof d.column1 === "string");
//       assert(typeof d.column2 === "string");
//       assert(d["column3"] === "2012-01-01");
//       assert(d["colume4"] === "someinvaliddate");
//       assert(d.column5 === '{"hello":"world"}');
//       assert.equal(d["column6"], '{"hello":"world"}');
//       assert(d["column7"] === "1234");
//       assert(d["column8"] === "abcd");
//       assert(d.column9 === "true");
//       assert(d.column10[0] === "23");
//       assert(d.column10[1] === "31");
//       assert(d["name#!"] === 'false');
//     });
//     csvConverter.then(function () {
//       done();
//     });
//     rs.pipe(csvConverter);
//   });
//   it("should emit data event correctly", function (done) {
//     var testData = __dirname + "/data/large-csv-sample.csv";
//     var csvConverter = new Converter({
//       fork:true
//     },{objectMode:true});
//     var count = 0;
//     csvConverter.on("data", function (d) {
//       count++;
//     });
//     csvConverter.on("done", function () {
//       assert.equal(csvConverter.parsedLineNumber, 5290);
//       done();
//     });
//     var rs = fs.createReadStream(testData);
//     rs.pipe(csvConverter);
//   });
//   it("should process column with linebreaks", function (done) {
//     var testData = __dirname + "/data/lineBreak";
//     var rs = fs.createReadStream(testData);
//     var csvConverter = new Converter({
//       fork:true,
//       checkType: true
//     });
//     csvConverter.subscribe(function (d) {
//       assert(d.Period === 13);
//       assert(d["Apparent age"] === "Unknown");
//       done();
//     });
//     rs.pipe(csvConverter);
//   });
//   it("be able to ignore empty columns", function (done) {
//     var testData = __dirname + "/data/dataIgnoreEmpty";
//     var rs = fs.createReadStream(testData);
//     var st = rs.pipe(csv({ 
//       ignoreEmpty: true ,
//       fork:true
//     }));
//     st.then(function (res) {
//       var j = res[0];
//       assert(res.length === 3);
//       assert(j.col2.length === 2);
//       assert(j.col2[1] === "d3");
//       assert(j.col4.col3 === undefined);
//       assert(j.col4.col5 === "world");
//       assert(res[1].col1 === "d2");
//       assert(res[2].col1 === "d4");
//       done();
//     });
//   });
//   it("should allow no header", function (done) {
//     var testData = __dirname + "/data/noheadercsv";
//     var rs = fs.createReadStream(testData);
//     var st = rs.pipe(new Converter({ 
//       noheader: true,
//       fork:true
//     }));
//     st.then(function (res) {
//       var j = res[0];
//       assert(res.length === 5);
//       assert(j.field1 === "CC102-PDMI-001");
//       assert(j.field2 === "eClass_5.1.3");
//       done();
//     });
//   });
//   it("should allow customised header", function (done) {
//     var testData = __dirname + "/data/noheadercsv";
//     var rs = fs.createReadStream(testData);
//     var st = rs.pipe(new Converter({
//       noheader: true,
//       headers: ["a", "b"],
//       fork:true
//     }));
//     st.then(function (res) {
//       var j = res[0];
//       assert(res.length === 5);
//       assert(j.a === "CC102-PDMI-001");
//       assert(j.b === "eClass_5.1.3");
//       assert(j.field3 === "10/3/2014");
//       done();
//     });
//   });
//   it("should allow customised header to override existing header", function (done) {
//     var testData = __dirname + "/data/complexJSONCSV";
//     var rs = fs.createReadStream(testData);
//     var st = rs.pipe(new Converter({
//       headers: [],
//       fork:true
//     }));
//     st.then(function (res) {
//       var j = res[0];
//       assert(res.length === 2);
//       assert(j.field1 === "Food Factory");
//       assert(j.field2 === "Oscar");
//       done();
//     });
//   });
//   it("should handle when there is an empty string", function (done) {
//     var testData = __dirname + "/data/dataWithEmptyString";
//     var rs = fs.createReadStream(testData);
//     var st = rs.pipe(new Converter({
//       noheader: true,
//       headers: ["a", "b", "c"],
//       checkType: true,
//       fork:true
//     }));
//     st.then(function (res) {
//       var j = res[0];
//       // assert(res.length===2);
//       assert(j.a === "green");
//       assert(j.b === 40);
//       assert.equal(j.c, "");
//       done();
//     });
//   });
//   it("should detect eol correctly when first chunk is smaller than header row length", function (done) {
//     var testData = __dirname + "/data/dataNoTrimCRLF";
//     var rs = fs.createReadStream(testData, { highWaterMark: 3 });
//     var st = rs.pipe(new Converter({
//       trim: false,
//       fork:true
//     }));
//     st.then(function (res) {
//       var j = res[0];
//       assert(res.length === 2);
//       assert(j.name === "joe");
//       assert(j.age === "20");
//       assert.equal(res[1].name, "sam");
//       assert.equal(res[1].age, "30");
//       done();
//     });
//   });
//   it("should detect eol correctly when first chunk ends in middle of CRLF line break", function (done) {
//     var testData = __dirname + "/data/dataNoTrimCRLF";
//     var rs = fs.createReadStream(testData, { highWaterMark: 9 });
//     var st = rs.pipe(new Converter({
//       trim: false,
//       fork:true
//     }));
//     st.then(function (res) {
//       var j = res[0];
//       assert(res.length === 2);
//       assert(j.name === "joe");
//       assert(j.age === "20");
//       assert.equal(res[1].name, "sam");
//       assert.equal(res[1].age, "30");
//       done();
//     });
//   });
//   it("should emit eol event when line ending is detected as CRLF", function (done) {
//     var testData = __dirname + "/data/dataNoTrimCRLF";
//     var rs = fs.createReadStream(testData);
//     var st = rs.pipe(new Converter({
//       fork:true
//     }));
//     var eolCallback = sandbox.spy(function (eol) {
//       assert.equal(eol, "\r\n");
//     });
//     st.on("eol", eolCallback);
//     st.then(function () {
//       assert.equal(eolCallback.callCount, 1, 'should emit eol event once');
//       done();
//     })
//   });
//   it("should emit eol event when line ending is detected as LF", function (done) {
//     var testData = __dirname + "/data/columnArray";
//     var rs = fs.createReadStream(testData);
//     var st = rs.pipe(new Converter({
//       fork:true
//     }));
//     var eolCallback = sandbox.spy(function (eol) {
//       assert.equal(eol, "\n");
//     });
//     st.on("eol", eolCallback);
//     st.then(function () {
//       assert.equal(eolCallback.callCount, 1, 'should emit eol event once');
//       done();
//     })
//   });
//   it("should remove the Byte Order Mark (BOM) from input", function (done) {
//     var testData = __dirname + "/data/dataNoTrimBOM";
//     var rs = fs.createReadStream(testData);
//     var st = rs.pipe(new Converter({
//       trim: false,
//       fork:true
//     }));
//     st.then( function (res) {
//       var j = res[0];
//       assert(res.length===2);
//       assert(j.name === "joe");
//       assert(j.age === "20");
//       done();
//     });
//   });
//   it("should set output as csv", function (done) {
//     var testData = __dirname + "/data/complexJSONCSV";
//     var rs = fs.createReadStream(testData);
//     var numOfRow = 0;
//     csv({ output: "csv",fork:true })
//       .fromStream(rs)
//       .subscribe(function (row, idx) {
//         numOfRow++;
//         assert(row);
//         assert(idx >= 0);
//       })
//       .on("done", function (error) {
//         assert(!error);
//         assert.equal(2, numOfRow);
//         assert(numOfRow !== 0);
//         done();
//       });
//   });
//   it("should process long header", function (done) {
//     var testData = __dirname + "/data/longHeader";
//     var rs = fs.createReadStream(testData, { highWaterMark: 100 });
//     var numOfRow = 0;
//     var numOfJson = 0;
//     csv({fork:true}, { highWaterMark: 100 })
//       .fromStream(rs)
//       .subscribe(function (res, idx) {
//         numOfJson++;
//         assert.equal(res.Date, '8/26/16');
//         assert(idx >= 0);
//       })
//       .on("done", function () {
//         assert(numOfJson === 1);
//         done();
//       });
//   });
//   it("should parse #139", function (done) {
//     var rs = fs.createReadStream(__dirname + "/data/data#139");
//     csv({fork:true})
//       .fromStream(rs)
//       .then(function (res) {
//         assert.equal(res[1].field3, "9001009395 9001009990");
//         done();
//       });
//   });
//   it("should ignore column", function (done) {
//     var rs = fs.createReadStream(__dirname + "/data/dataWithQoutes");
//     var headerEmitted = false;
//     csv({
//       ignoreColumns: /TIMESTAMP/,
//       fork:true
//     })
//       .fromStream(rs)
//       .on("header", function (header) {
//         assert.equal(header.indexOf("TIMESTAMP"), -1);
//         assert.equal(header.indexOf("UPDATE"), 0);
//         if (headerEmitted) {
//           throw ("header event should only happen once")
//         }
//         headerEmitted = true;
//       })
//       // .on("csv", function (row, idx) {
//       //   if (!headerEmitted) {
//       //     throw ("header should be emitted before any data events");
//       //   }
//       //   assert(idx >= 0);
//       //   if (idx === 1) {
//       //     assert.equal(row[0], "n");
//       //   }
//       // })
//       .subscribe(function (j, idx) {
//         // console.log(j);
//         assert(!j.TIMESTAMP);
//         assert(idx >= 0);
//       })
//       .on("done", function (err) {
//         assert(!err);
//         assert(headerEmitted);
//         done();
//       });
//   });
//   it("should include column", function (done) {
//     var rs = fs.createReadStream(__dirname + "/data/dataWithQoutes");
//     csv({
//       includeColumns: /TIMESTAMP/,
//       fork:true
//     })
//       .fromStream(rs)
//       .on("header", function (header) {
//         assert.equal(header.indexOf("TIMESTAMP"), 0);
//         assert.equal(header.indexOf("UPDATE"), -1);
//         assert.equal(header.length, 1);
//       })
//       .subscribe(function (j, idx) {
//         assert(idx >= 0);
//         if (idx === 1) {
//           assert.equal(j.TIMESTAMP, "abc, def, ccc");
//         }
//         assert(!j.UID)
//         assert(!j['BYTES SENT'])
//       })
//       .on("done", function () {
//         done();
//       });
//   });
//   it("should allow headers and include columns to be given as reference to the same var", function (done) {
//     var rs = fs.createReadStream(__dirname + "/data/complexJSONCSV");
//     var headers = [
//       'first',
//       'second',
//       'third',
//     ];
//     var expected = headers;
//     csv({
//       headers: headers,
//       includeColumns: /(first|second|third)/,
//       fork:true
//     })
//       .fromStream(rs)
//       .on("header", function (header) {
//         expected.forEach(function (value, index) {
//           assert.equal(header.indexOf(value), index);
//         });
//       })
//       .subscribe(function (j, idx) {
//         assert(idx >= 0);
//         assert.equal(expected.length, Object.keys(j).length);
//         expected.forEach(function (attribute) {
//           assert(j.hasOwnProperty(attribute));
//         });
//       })
//       .on("done", function () {
//         done();
//       });
//   });
//   it("should leave provided params objects unmutated", function() {
//     var rs = fs.createReadStream(__dirname + "/data/complexJSONCSV");
//     var includeColumns = [
//       'fieldA.title',
//       'description',
//     ];
//     return csv({
//       includeColumns: /(fieldA\.title|description)/,
//       fork:true
//     })
//       .fromStream(rs)
//       .on("json", function(j, idx) {
//         assert(idx >= 0);
//       })
//       .on("header", function(header) {
//         includeColumns.forEach(function (value, index) {
//           assert.equal(index, header.indexOf(value));
//         });
//       })
//   });
//   it("should accept pipe as quote", function (done) {
//     csv({
//       quote: "|",
//       output: "csv",
//       "fork":true
//     })
//       .fromFile(__dirname + "/data/pipeAsQuote")
//       .subscribe(function (csv) {
//         assert.equal(csv[2], "blahhh, blah");
//       })
//       .on('done', function () {
//         done()
//       });
//   })
//   it("should allow async subscribe function", () => {
//     return csv({ trim: true,fork:true })
//       .fromString(`a,b,c
//     1,2,3
//     4,5,6`)
//       .subscribe((d) => {
//         return new Promise((resolve, reject) => {
//           setTimeout(() => {
//             d.a = 10;
//             resolve();
//           }, 20);
//         })
//       })
//       .then((d) => {
//         assert.equal(d[0].a, 10);
//         assert.equal(d[1].a, 10);
//       })
//   })
//   it("should omit a column", () => {
//     return csv({
//       colParser: {
//         "a": "omit"
//       },
//       fork:true
//     })
//       .fromString(`a,b,c
//   1,2,3
//   fefe,5,6`)
//       .then((d) => {
//         assert.strictEqual(d[0].a, undefined);
//         assert.equal(d[1].a, undefined);
//       })
//   })
// });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL2t4aWFuZy93b3JrL3Byb2plY3RzL2NzdjJqc29uL3Rlc3QvdGVzdENTVkNvbnZlcnRlci5mb3JrLnRzIiwic291cmNlcyI6WyIvVXNlcnMva3hpYW5nL3dvcmsvcHJvamVjdHMvY3N2Mmpzb24vdGVzdC90ZXN0Q1NWQ29udmVydGVyLmZvcmsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDhDQUE4QztBQUM5Qyw0QkFBNEI7QUFDNUIsa0NBQWtDO0FBQ2xDLDBCQUEwQjtBQUMxQixtREFBbUQ7QUFDbkQsMkNBQTJDO0FBQzNDLDBEQUEwRDtBQUMxRCw4REFBOEQ7QUFDOUQsNEJBQTRCO0FBQzVCLHlCQUF5QjtBQUN6QixRQUFRO0FBR1Isc0RBQXNEO0FBQ3RELGdDQUFnQztBQUNoQyxtQkFBbUI7QUFDbkIsVUFBVTtBQUNWLDhDQUE4QztBQUM5QyxnQ0FBZ0M7QUFDaEMscUNBQXFDO0FBQ3JDLGdCQUFnQjtBQUNoQixpQkFBaUI7QUFDakIscUNBQXFDO0FBQ3JDLFVBQVU7QUFDVix3QkFBd0I7QUFDeEIsUUFBUTtBQUVSLHFFQUFxRTtBQUNyRSw0Q0FBNEM7QUFDNUMsOENBQThDO0FBQzlDLDBCQUEwQjtBQUMxQiwyQ0FBMkM7QUFDM0MsMkJBQTJCO0FBQzNCLHVCQUF1QjtBQUN2QixVQUFVO0FBQ1YsbUNBQW1DO0FBQ25DLHdCQUF3QjtBQUN4QixnQkFBZ0I7QUFDaEIsVUFBVTtBQUNWLHdCQUF3QjtBQUN4QixRQUFRO0FBRVIsZ0ZBQWdGO0FBQ2hGLDRDQUE0QztBQUM1QyxtQ0FBbUM7QUFDbkMsd0JBQXdCO0FBQ3hCLHFDQUFxQztBQUNyQyxnQ0FBZ0M7QUFDaEMsb0NBQW9DO0FBQ3BDLHlDQUF5QztBQUN6Qyx3Q0FBd0M7QUFDeEMsMkNBQTJDO0FBQzNDLHFEQUFxRDtBQUNyRCxnREFBZ0Q7QUFDaEQsZ0JBQWdCO0FBQ2hCLFVBQVU7QUFDViwyQ0FBMkM7QUFDM0MsUUFBUTtBQUVSLG1FQUFtRTtBQUNuRSx3REFBd0Q7QUFDeEQs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cnRlclwiO1xuLy8gaW1wb3J0IGNzdiBmcm9tIFwiLi4vc3JjXCI7XG4vLyB2YXIgYXNzZXJ0ID0gcmVxdWlyZShcImFzc2VydFwiKTtcbi8vIHZhciBmcyA9IHJlcXVpcmUoXCJmc1wiKTtcbi8vIHZhciBzYW5kYm94ID0gcmVxdWlyZShcInNpbm9uXCIpLnNhbmRib3guY3JlYXRlKCk7XG4vLyB2YXIgZmlsZSA9IF9fZGlybmFtZSArIFwiL2RhdGEvdGVzdERhdGFcIjtcbi8vIHZhciB0cmFpbENvbW1hRGF0YSA9IF9fZGlybmFtZSArIFwiL2RhdGEvdHJhaWxpbmdDb21tYVwiO1xuLy8gZGVzY3JpYmUoXCJDU1YgQ29udmVydCBpbiBCYWNrZ3JvdW5kIFByb2Nlc3NcIiwgZnVuY3Rpb24gKCkge1xuLy8gICBhZnRlckVhY2goZnVuY3Rpb24gKCkge1xuLy8gICAgIHNhbmRib3gucmVzdG9yZSgpO1xuLy8gICB9KTtcblxuXG4vLyAgIGl0KFwic2hvdWxkIHJlYWQgZnJvbSBhIHN0cmVhbVwiLCBmdW5jdGlvbiAoZG9uZSkge1xuLy8gICAgIHZhciBvYmogPSBuZXcgQ29udmVydGVyKHtcbi8vICAgICAgIGZvcms6IHRydWVcbi8vICAgICB9KTtcbi8vICAgICB2YXIgc3RyZWFtID0gZnMuY3JlYXRlUmVhZFN0cmVhbShmaWxlKTtcbi8vICAgICBvYmoudGhlbihmdW5jdGlvbiAob2JqKSB7XG4vLyAgICAgICBhc3NlcnQuZXF1YWwob2JqLmxlbmd0aCwgMik7XG4vLyAgICAgICBkb25lKCk7XG4vLyAgICAgfSwoZXJyKT0+e1xuLy8gICAgICAgY29uc29sZS5sb2coZXJyLnRvU3RyaW5nKCkpO1xuLy8gICAgIH0pO1xuLy8gICAgIHN0cmVhbS5waXBlKG9iaik7XG4vLyAgIH0pO1xuXG4vLyAgIGl0KFwic2hvdWxkIGNhbGwgb25OZXh0IG9uY2UgYSByb3cgaXMgcGFyc2VkLlwiLCBmdW5jdGlvbiAoZG9uZSkge1xuLy8gICAgIHZhciBvYmogPSBuZXcgQ29udmVydGVyKHtmb3JrOnRydWV9KTtcbi8vICAgICB2YXIgc3RyZWFtID0gZnMuY3JlYXRlUmVhZFN0cmVhbShmaWxlKTtcbi8vICAgICB2YXIgY2FsbGVkID0gZmFsc2U7XG4vLyAgICAgb2JqLnN1YnNjcmliZShmdW5jdGlvbiAocmVzdWx0Um93KSB7XG4vLyAgICAgICBhc3NlcnQocmVzdWx0Um93KTtcbi8vICAgICAgIGNhbGxlZCA9IHRydWU7XG4vLyAgICAgfSk7XG4vLyAgICAgb2JqLm9uKFwiZG9uZVwiLCBmdW5jdGlvbiAoKSB7XG4vLyAgICAgICBhc3NlcnQoY2FsbGVkKTtcbi8vICAgICAgIGRvbmUoKTtcbi8vICAgICB9KTtcbi8vICAgICBzdHJlYW0ucGlwZShvYmopO1xuLy8gICB9KTtcblxuLy8gICBpdChcInNob3VsZCBlbWl0IGVuZF9wYXJzZWQgbWVzc2FnZSBvbmNlIGl0IGlzIGZpbmlzaGVkLlwiLCBmdW5jdGlvbiAoZG9uZSkge1xuLy8gICAgIHZhciBvYmogPSBuZXcgQ29udmVydGVyKHtmb3JrOnRydWV9KTtcbi8vICAgICBvYmoudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4vLyAgICAgICBhc3NlcnQocmVzdWx0KTtcbi8vICAgICAgIGFzc2VydChyZXN1bHQubGVuZ3RoID09PSAyKTtcbi8vICAgICAgIGFzc2VydChyZXN1bHRbMF0uZGF0ZSk7XG4vLyAgICAgICBhc3NlcnQocmVzdWx0WzBdLmVtcGxveWVlKTtcbi8vICAgICAgIGFzc2VydChyZXN1bHRbMF0uZW1wbG95ZWUubmFtZSk7XG4vLyAgICAgICBhc3NlcnQocmVzdWx0WzBdLmVtcGxveWVlLmFnZSk7XG4vLyAgICAgICBhc3NlcnQocmVzdWx0WzBdLmVtcGxveWVlLm51bWJlcik7XG4vLyAgICAgICBhc3NlcnQocmVzdWx0WzBdLmVtcGxveWVlLmtleS5sZW5ndGggPT09IDIpO1xuLy8gICAgICAgYXNzZXJ0KHJlc3VsdFswXS5hZGRyZXNzLmxlbmd0aCA9PT0gMik7XG4vLyAgICAgICBkb25lKCk7XG4vLyAgICAgfSk7XG4vLyAgICAgZnMuY3JlYXRlUmVhZFN0cmVhbShmaWxlKS5waXBlKG9iaik7XG4vLyAgIH0pO1xuXG4vLyAgIGl0KFwic2hvdWxkIGhhbmRsZSB0cmFsaW5nIGNvbW1hIGdyYWNlZnVsbHlcIiwgZnVuY3Rpb24gKGRvbmUpIHtcbi8vICAgICB2YXIgc3RyZWFtID0gZnMuY3JlYXRlUmVhZFN0cmVhbSh0cmFpbENvbW1hRGF0YSk7XG4vLyAgICAgdmFyIG9iaiA9IG5ldyBDb252ZXJ0ZXIoe2Zvcms6dHJ1ZX0pO1xuLy8gICAgIG9iai50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbi8vICAgICAgIGFzc2VydChyZXN1bHQpO1xuLy8gICAgICAgYXNzZXJ0KHJlc3VsdC5sZW5ndGggPiAwKTtcbi8vICAgICAgIGRvbmUoKTtcbi8vICAgICB9KTtcbi8vICAgICBzdHJlYW0ucGlwZShvYmopO1xuLy8gICB9KTtcblxuLy8gICBpdChcInNob3VsZCBoYW5kbGUgY29tbWEgaW4gY29sdW1uIHdoaWNoIGlzIHN1cnJvdW5kZWQgYnkgcW91dGVzXCIsIGZ1bmN0aW9uIChkb25lKSB7XG4vLyAgICAgdmFyIHRlc3REYXRhID0gX19kaXJuYW1lICsgXCIvZGF0YS9kYXRhV2l0aENvbW1hXCI7XG4vLyAgICAgdmFyIHJzID0gZnMuY3JlYXRlUmVhZFN0cmVhbSh0ZXN0RGF0YSk7XG4vLyAgICAgdmFyIG9iaiA9IG5ldyBDb252ZXJ0ZXIoe1xuLy8gICAgICAgXCJxdW90ZVwiOiBcIiNcIixcbi8vICAgICAgIFwiZm9ya1wiOnRydWVcbi8vICAgICB9KTtcbi8vICAgICBvYmoudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4vLyAgICAgICBhc3NlcnQocmVzdWx0WzBdLmNvbDEgPT09IFwiXFxcIk1pbmkuIFNlY3R0XCIpO1xuLy8gICAgICAgYXNzZXJ0LmVxdWFsKHJlc3VsdFszXS5jb2wyLCBcIjEyNTAwMSxmZW52a2RzZlwiKTtcbi8vICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4vLyAgICAgICBkb25lKCk7XG4vLyAgICAgfSk7XG4vLyAgICAgcnMucGlwZShvYmopO1xuLy8gICB9KTtcblxuLy8gICBpdChcInNob3VsZCBiZSBhYmxlIHRvIGNvbnZlcnQgYSBjc3YgdG8gY29sdW1uIGFycmF5IGRhdGFcIiwgZnVuY3Rpb24gKGRvbmUpIHtcbi8vICAgICB2YXIgY29sdW1BcnJEYXRhID0gX19kaXJuYW1lICsgXCIvZGF0YS9jb2x1bW5BcnJheVwiO1xuLy8gICAgIHZhciBycyA9IGZzLmNyZWF0ZVJlYWRTdHJlYW0oY29sdW1BcnJEYXRhKTtcbi8vICAgICB2YXIgcmVzdWx0OmFueSA9IHt9O1xuLy8gICAgIHZhciBjc3ZDb252ZXJ0ZXIgPSBuZXcgQ29udmVydGVyKHtmb3JrOnRydWV9KTtcbi8vICAgICAvL2VuZF9wYXJzZWQgd2lsbCBiZSBlbWl0dGVkIG9uY2UgcGFyc2luZyBmaW5pc2hlZFxuLy8gICAgIGNzdkNvbnZlcnRlci50aGVuKGZ1bmN0aW9uICgpIHtcbi8vICAgICAgIGFzc2VydChyZXN1bHQuVElNRVNUQU1QLmxlbmd0aCA9PT0gNSk7XG4vLyAgICAgICBkb25lKCk7XG4vLyAgICAgfSk7XG5cbi8vICAgICAvL3JlY29yZF9wYXJzZWQgd2lsbCBiZSBlbWl0dGVkIGVhY2ggdGltZSBhIHJvdyBoYXMgYmVlbiBwYXJzZWQuXG4vLyAgICAgY3N2Q29udmVydGVyLnN1YnNjcmliZShmdW5jdGlvbiAocmVzdWx0Um93LCByb3dJbmRleCkge1xuLy8gICAgICAgZm9yICh2YXIga2V5IGluIHJlc3VsdFJvdykge1xuLy8gICAgICAgICBpZiAocmVzdWx0Um93Lmhhc093blByb3BlcnR5KGtleSkpIHtcbi8vICAgICAgICAgICBpZiAoIXJlc3VsdFtrZXldIHx8ICEocmVzdWx0W2tleV0gaW5zdGFuY2VvZiBBcnJheSkpIHtcbi8vICAgICAgICAgICAgIHJlc3VsdFtrZXldID0gW107XG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICAgIHJlc3VsdFtrZXldW3Jvd0luZGV4XSA9IHJlc3VsdFJvd1trZXldO1xuLy8gICAgICAgICB9XG4vLyAgICAgICB9XG4vLyAgICAgfSk7XG4vLyAgICAgcnMucGlwZShjc3ZDb252ZXJ0ZXIpO1xuLy8gICB9KTtcblxuLy8gICBpdChcInNob3VsZCBiZSBhYmxlIHRvIGNvbnZlcnQgY3N2IHN0cmluZyBkaXJlY3RseVwiLCBmdW5jdGlvbiAoZG9uZSkge1xuLy8gICAgIHZhciB0ZXN0RGF0YSA9IF9fZGlybmFtZSArIFwiL2RhdGEvdGVzdERhdGFcIjtcbi8vICAgICB2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyh0ZXN0RGF0YSkudG9TdHJpbmcoKTtcbi8vICAgICB2YXIgY3N2Q29udmVydGVyID0gbmV3IENvbnZlcnRlcih7Zm9yazp0cnVlfSk7XG4vLyAgICAgLy9lbmRfcGFyc2VkIHdpbGwgYmUgZW1pdHRlZCBvbmNlIHBhcnNpbmcgZmluaXNoZWRcbi8vICAgICBjc3ZDb252ZXJ0ZXIudGhlbihmdW5jdGlvbiAoanNvbk9iaikge1xuLy8gICAgICAgYXNzZXJ0LmVxdWFsKGpzb25PYmoubGVuZ3RoLCAyKTtcbi8vICAgICB9KTtcbi8vICAgICBjc3ZDb252ZXJ0ZXIuZnJvbVN0cmluZyhkYXRhKS50aGVuKGZ1bmN0aW9uIChqc29uT2JqKSB7XG4vLyAgICAgICBhc3NlcnQoanNvbk9iai5sZW5ndGggPT09IDIpO1xuLy8gICAgICAgZG9uZSgpO1xuLy8gICAgIH0pO1xuLy8gICB9KTtcblxuLy8gICBpdChcInNob3VsZCBiZSBhYmxlIHRvIGNvbnZlcnQgY3N2IHN0cmluZyB3aXRoIGVycm9yXCIsIGZ1bmN0aW9uIChkb25lKSB7XG4vLyAgICAgdmFyIHRlc3REYXRhID0gX19kaXJuYW1lICsgXCIvZGF0YS9kYXRhV2l0aFVuY2xvc2VkUXVvdGVzXCI7XG4vLyAgICAgdmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmModGVzdERhdGEpLnRvU3RyaW5nKCk7XG4vLyAgICAgdmFyIGNzdkNvbnZlcnRlciA9IG5ldyBDb252ZXJ0ZXIoe2Zvcms6dHJ1ZX0pO1xuLy8gICAgIGNzdkNvbnZlcnRlci5mcm9tU3RyaW5nKGRhdGEpLnRoZW4odW5kZWZpbmVkLCBmdW5jdGlvbiAoZXJyKSB7XG4vLyAgICAgICAvLyBjb25zb2xlLmxvZyhlcnIpO1xuLy8gICAgICAgYXNzZXJ0KGVycik7XG4vLyAgICAgICBhc3NlcnQuZXF1YWwoZXJyLmVyciwgXCJ1bmNsb3NlZF9xdW90ZVwiKTtcbi8vICAgICAgIGRvbmUoKTtcbi8vICAgICB9KTtcbi8vICAgfSk7XG5cbi8vICAgaXQoXCJzaG91bGQgYmUgYWJsZSB0byBjb252ZXJ0IGNzdiBzdHJpbmcgd2l0aG91dCBjYWxsYmFjayBwcm92aWRlZFwiLCBmdW5jdGlvbiAoZG9uZSkge1xuLy8gICAgIHZhciB0ZXN0RGF0YSA9IF9fZGlybmFtZSArIFwiL2RhdGEvdGVzdERhdGFcIjtcbi8vICAgICB2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyh0ZXN0RGF0YSkudG9TdHJpbmcoKTtcbi8vICAgICB2YXIgY3N2Q29udmVydGVyID0gbmV3IENvbnZlcnRlcih7Zm9yazp0cnVlfSk7XG4vLyAgICAgLy9lbmRfcGFyc2VkIHdpbGwgYmUgZW1pdHRlZCBvbmNlIHBhcnNpbmcgZmluaXNoZWRcbi8vICAgICBjc3ZDb252ZXJ0ZXIudGhlbihmdW5jdGlvbiAoanNvbk9iaikge1xuLy8gICAgICAgYXNzZXJ0KGpzb25PYmoubGVuZ3RoID09PSAyKTtcbi8vICAgICAgIGRvbmUoKTtcbi8vICAgICB9KTtcbi8vICAgICBjc3ZDb252ZXJ0ZXIuZnJvbVN0cmluZyhkYXRhKTtcbi8vICAgfSk7XG5cbi8vICAgaXQoXCJzaG91bGQgYmUgYWJsZSB0byBoYW5kbGUgY29sdW1ucyB3aXRoIGRvdWJsZSBxdW90ZXNcIiwgZnVuY3Rpb24gKGRvbmUpIHtcbi8vICAgICB2YXIgdGVzdERhdGEgPSBfX2Rpcm5hbWUgKyBcIi9kYXRhL2RhdGFXaXRoUW91dGVzXCI7XG4vLyAgICAgdmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmModGVzdERhdGEpLnRvU3RyaW5nKCk7XG4vLyAgICAgdmFyIGNzdkNvbnZlcnRlciA9IG5ldyBDb252ZXJ0ZXIoe2Zvcms6dHJ1ZX0pO1xuLy8gICAgIGNzdkNvbnZlcnRlci5mcm9tU3RyaW5nKGRhdGEpLnRoZW4oZnVuY3Rpb24gKGpzb25PYmopIHtcbi8vICAgICAgIGFzc2VydChqc29uT2JqWzBdLlRJTUVTVEFNUCA9PT0gJzEzOTU0MjY0XCIyMicsIEpTT04uc3RyaW5naWZ5KGpzb25PYmpbMF0uVElNRVNUQU1QKSk7XG5cbi8vICAgICAgIGFzc2VydChqc29uT2JqWzFdLlRJTUVTVEFNUCA9PT0gJ2FiYywgZGVmLCBjY2MnLCBKU09OLnN0cmluZ2lmeShqc29uT2JqWzFdLlRJTUVTVEFNUCkpO1xuLy8gICAgICAgZG9uZSgpO1xuLy8gICAgIH0pO1xuLy8gICB9KTtcblxuLy8gICBpdChcInNob3VsZCBiZSBhYmxlIHRvIGhhbmRsZSBjb2x1bW5zIHdpdGggdHdvIGRvdWJsZSBxdW90ZXNcIiwgZnVuY3Rpb24gKGRvbmUpIHtcbi8vICAgICB2YXIgdGVzdERhdGEgPSBfX2Rpcm5hbWUgKyBcIi9kYXRhL3R3b2RvdWJsZXF1b3Rlc1wiO1xuLy8gICAgIHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKHRlc3REYXRhKS50b1N0cmluZygpO1xuLy8gICAgIHZhciBjc3ZDb252ZXJ0ZXIgPSBuZXcgQ29udmVydGVyKHtmb3JrOnRydWV9KTtcbi8vICAgICBjc3ZDb252ZXJ0ZXIuZnJvbVN0cmluZyhkYXRhKS50aGVuKGZ1bmN0aW9uIChqc29uT2JqKSB7XG4vLyAgICAgICBhc3NlcnQuZXF1YWwoanNvbk9ialswXS50aXRsZSwgXCJcXFwiXCIpO1xuLy8gICAgICAgYXNzZXJ0LmVxdWFsKGpzb25PYmpbMF0uZGF0YSwgXCJ4eWFiY2RlXCIpO1xuLy8gICAgICAgYXNzZXJ0LmVxdWFsKGpzb25PYmpbMF0udXVpZCwgXCJmZWphbFxcXCJlaWZhXCIpO1xuLy8gICAgICAgYXNzZXJ0LmVxdWFsKGpzb25PYmpbMF0uZmllbGRBLCBcImJuZWpcXFwiXFxcImZhbGtmZVwiKTtcbi8vICAgICAgIGFzc2VydC5lcXVhbChqc29uT2JqWzBdLmZpZWxkQiwgXCJcXFwiZWlzamZlc1xcXCJcIik7XG4vLyAgICAgICBkb25lKCk7XG4vLyAgICAgfSk7XG4vLyAgIH0pO1xuXG4vLyAgIGl0KFwic2hvdWxkIGhhbmRsZSBlbXB0eSBjc3YgZmlsZVwiLCBmdW5jdGlvbiAoZG9uZSkge1xuLy8gICAgIHZhciB0ZXN0RGF0YSA9IF9fZGlybmFtZSArIFwiL2RhdGEvZW1wdHlGaWxlXCI7XG4vLyAgICAgdmFyIHJzID0gZnMuY3JlYXRlUmVhZFN0cmVhbSh0ZXN0RGF0YSk7XG4vLyAgICAgdmFyIGNzdkNvbnZlcnRlciA9IG5ldyBDb252ZXJ0ZXIoe2Zvcms6dHJ1ZX0pO1xuLy8gICAgIGNzdkNvbnZlcnRlci50aGVuKGZ1bmN0aW9uIChqc29uT2JqKSB7XG4vLyAgICAgICBhc3NlcnQoanNvbk9iai5sZW5ndGggPT09IDApO1xuLy8gICAgICAgZG9uZSgpO1xuLy8gICAgIH0pO1xuLy8gICAgIHJzLnBpcGUoY3N2Q29udmVydGVyKTtcbi8vICAgfSk7XG5cbi8vICAgaXQoXCJzaG91bGQgcGFyc2UgbGFyZ2UgY3N2IGZpbGVcIiwgZnVuY3Rpb24gKGRvbmUpIHtcbi8vICAgICB2YXIgdGVzdERhdGEgPSBfX2Rpcm5hbWUgKyBcIi9kYXRhL2xhcmdlLWNzdi1zYW1wbGUuY3N2XCI7XG4vLyAgICAgdmFyIHJzID0gZnMuY3JlYXRlUmVhZFN0cmVhbSh0ZXN0RGF0YSk7XG4vLyAgICAgdmFyIGNzdkNvbnZlcnRlciA9IG5ldyBDb252ZXJ0ZXIoe2Zvcms6dHJ1ZX0pO1xuLy8gICAgIHZhciBjb3VudCA9IDA7XG4vLyAgICAgY3N2Q29udmVydGVyLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7XG4vLyAgICAgICAvLyBjb25zb2xlLmxvZyhhcmd1bWVudHMpO1xuLy8gICAgICAgY291bnQrKztcbi8vICAgICB9KTtcbi8vICAgICBjc3ZDb252ZXJ0ZXIudGhlbihmdW5jdGlvbiAoKSB7XG4vLyAgICAgICBhc3NlcnQuZXF1YWwoY291bnQsIDUyOTApO1xuLy8gICAgICAgZG9uZSgpO1xuLy8gICAgIH0pO1xuLy8gICAgIHJzLnBpcGUoY3N2Q29udmVydGVyKTtcbi8vICAgfSk7XG5cbi8vICAgaXQoXCJzaG91bGQgcGFyc2UgZGF0YSBhbmQgY292ZXJ0IHRvIHNwZWNpZmljIHR5cGVzXCIsIGZ1bmN0aW9uIChkb25lKSB7XG4vLyAgICAgdmFyIHRlc3REYXRhID0gX19kaXJuYW1lICsgXCIvZGF0YS9kYXRhV2l0aFR5cGVcIjtcbi8vICAgICB2YXIgcnMgPSBmcy5jcmVhdGVSZWFkU3RyZWFtKHRlc3REYXRhKTtcbi8vICAgICB2YXIgY3N2Q29udmVydGVyID0gbmV3IENvbnZlcnRlcih7XG4vLyAgICAgICBmb3JrOnRydWUsXG4vLyAgICAgICBjaGVja1R5cGU6IHRydWUsXG4vLyAgICAgICBjb2xQYXJzZXI6IHtcbi8vICAgICAgICAgXCJjb2x1bW42XCI6IFwic3RyaW5nXCIsXG4vLyAgICAgICAgIFwiY29sdW1uN1wiOiBcInN0cmluZ1wiXG4vLyAgICAgICB9XG4vLyAgICAgfSk7XG4vLyAgICAgY3N2Q29udmVydGVyLnN1YnNjcmliZShmdW5jdGlvbiAoZCkge1xuLy8gICAgICAgYXNzZXJ0KHR5cGVvZiBkLmNvbHVtbjEgPT09IFwibnVtYmVyXCIpO1xuLy8gICAgICAgYXNzZXJ0KHR5cGVvZiBkLmNvbHVtbjIgPT09IFwic3RyaW5nXCIpO1xuLy8gICAgICAgYXNzZXJ0LmVxdWFsKGRbXCJjb2x1bWU0XCJdLCBcInNvbWVpbnZhbGlkZGF0ZVwiKTtcbi8vICAgICAgIGFzc2VydChkLmNvbHVtbjUuaGVsbG8gPT09IFwid29ybGRcIik7XG4vLyAgICAgICBhc3NlcnQoZC5jb2x1bW42ID09PSAne1wiaGVsbG9cIjpcIndvcmxkXCJ9Jyk7XG4vLyAgICAgICBhc3NlcnQoZC5jb2x1bW43ID09PSBcIjEyMzRcIik7XG4vLyAgICAgICBhc3NlcnQoZC5jb2x1bW44ID09PSBcImFiY2RcIik7XG4vLyAgICAgICBhc3NlcnQoZC5jb2x1bW45ID09PSB0cnVlKTtcbi8vICAgICAgIGFzc2VydChkLmNvbHVtbjEwWzBdID09PSAyMyk7XG4vLyAgICAgICBhc3NlcnQoZC5jb2x1bW4xMFsxXSA9PT0gMzEpO1xuLy8gICAgICAgYXNzZXJ0KGQuY29sdW1uMTFbMF0uaGVsbG8gPT09IFwid29ybGRcIik7XG4vLyAgICAgICBhc3NlcnQoZFtcIm5hbWUjIVwiXSA9PT0gZmFsc2UpO1xuLy8gICAgIH0pO1xuLy8gICAgIGNzdkNvbnZlcnRlci5vbihcImRvbmVcIiwgZnVuY3Rpb24gKCkge1xuLy8gICAgICAgZG9uZSgpO1xuLy8gICAgIH0pO1xuLy8gICAgIHJzLnBpcGUoY3N2Q29udmVydGVyKTtcbi8vICAgfSk7XG5cbi8vICAgaXQoXCJzaG91bGQgdHVybiBvZmYgZmllbGQgdHlwZSBjaGVja1wiLCBmdW5jdGlvbiAoZG9uZSkge1xuLy8gICAgIHZhciB0ZXN0RGF0YSA9IF9fZGlybmFtZSArIFwiL2RhdGEvZGF0YVdpdGhUeXBlXCI7XG4vLyAgICAgdmFyIHJzID0gZnMuY3JlYXRlUmVhZFN0cmVhbSh0ZXN0RGF0YSk7XG4vLyAgICAgdmFyIGNzdkNvbnZlcnRlciA9IG5ldyBDb252ZXJ0ZXIoe1xuLy8gICAgICAgZm9yazp0cnVlLFxuLy8gICAgICAgY2hlY2tUeXBlOiBmYWxzZVxuLy8gICAgIH0pO1xuLy8gICAgIGNzdkNvbnZlcnRlci5zdWJzY3JpYmUoZnVuY3Rpb24gKGQpIHtcbi8vICAgICAgIGFzc2VydCh0eXBlb2YgZC5jb2x1bW4xID09PSBcInN0cmluZ1wiKTtcbi8vICAgICAgIGFzc2VydCh0eXBlb2YgZC5jb2x1bW4yID09PSBcInN0cmluZ1wiKTtcbi8vICAgICAgIGFzc2VydChkW1wiY29sdW1uM1wiXSA9PT0gXCIyMDEyLTAxLTAxXCIpO1xuLy8gICAgICAgYXNzZXJ0KGRbXCJjb2x1bWU0XCJdID09PSBcInNvbWVpbnZhbGlkZGF0ZVwiKTtcbi8vICAgICAgIGFzc2VydChkLmNvbHVtbjUgPT09ICd7XCJoZWxsb1wiOlwid29ybGRcIn0nKTtcbi8vICAgICAgIGFzc2VydC5lcXVhbChkW1wiY29sdW1uNlwiXSwgJ3tcImhlbGxvXCI6XCJ3b3JsZFwifScpO1xuLy8gICAgICAgYXNzZXJ0KGRbXCJjb2x1bW43XCJdID09PSBcIjEyMzRcIik7XG4vLyAgICAgICBhc3NlcnQoZFtcImNvbHVtbjhcIl0gPT09IFwiYWJjZFwiKTtcbi8vICAgICAgIGFzc2VydChkLmNvbHVtbjkgPT09IFwidHJ1ZVwiKTtcbi8vICAgICAgIGFzc2VydChkLmNvbHVtbjEwWzBdID09PSBcIjIzXCIpO1xuLy8gICAgICAgYXNzZXJ0KGQuY29sdW1uMTBbMV0gPT09IFwiMzFcIik7XG4vLyAgICAgICBhc3NlcnQoZFtcIm5hbWUjIVwiXSA9PT0gJ2ZhbHNlJyk7XG4vLyAgICAgfSk7XG4vLyAgICAgY3N2Q29udmVydGVyLnRoZW4oZnVuY3Rpb24gKCkge1xuLy8gICAgICAgZG9uZSgpO1xuLy8gICAgIH0pO1xuLy8gICAgIHJzLnBpcGUoY3N2Q29udmVydGVyKTtcbi8vICAgfSk7XG5cbi8vICAgaXQoXCJzaG91bGQgZW1pdCBkYXRhIGV2ZW50IGNvcnJlY3RseVwiLCBmdW5jdGlvbiAoZG9uZSkge1xuLy8gICAgIHZhciB0ZXN0RGF0YSA9IF9fZGlybmFtZSArIFwiL2RhdGEvbGFyZ2UtY3N2LXNhbXBsZS5jc3ZcIjtcblxuLy8gICAgIHZhciBjc3ZDb252ZXJ0ZXIgPSBuZXcgQ29udmVydGVyKHtcbi8vICAgICAgIGZvcms6dHJ1ZVxuLy8gICAgIH0se29iamVjdE1vZGU6dHJ1ZX0pO1xuLy8gICAgIHZhciBjb3VudCA9IDA7XG4vLyAgICAgY3N2Q29udmVydGVyLm9uKFwiZGF0YVwiLCBmdW5jdGlvbiAoZCkge1xuLy8gICAgICAgY291bnQrKztcbi8vICAgICB9KTtcbi8vICAgICBjc3ZDb252ZXJ0ZXIub24oXCJkb25lXCIsIGZ1bmN0aW9uICgpIHtcbi8vICAgICAgIGFzc2VydC5lcXVhbChjc3ZDb252ZXJ0ZXIucGFyc2VkTGluZU51bWJlciwgNTI5MCk7XG4vLyAgICAgICBkb25lKCk7XG4vLyAgICAgfSk7XG4vLyAgICAgdmFyIHJzID0gZnMuY3JlYXRlUmVhZFN0cmVhbSh0ZXN0RGF0YSk7XG4vLyAgICAgcnMucGlwZShjc3ZDb252ZXJ0ZXIpO1xuLy8gICB9KTtcblxuLy8gICBpdChcInNob3VsZCBwcm9jZXNzIGNvbHVtbiB3aXRoIGxpbmVicmVha3NcIiwgZnVuY3Rpb24gKGRvbmUpIHtcbi8vICAgICB2YXIgdGVzdERhdGEgPSBfX2Rpcm5hbWUgKyBcIi9kYXRhL2xpbmVCcmVha1wiO1xuLy8gICAgIHZhciBycyA9IGZzLmNyZWF0ZVJlYWRTdHJlYW0odGVzdERhdGEpO1xuLy8gICAgIHZhciBjc3ZDb252ZXJ0ZXIgPSBuZXcgQ29udmVydGVyKHtcbi8vICAgICAgIGZvcms6dHJ1ZSxcbi8vICAgICAgIGNoZWNrVHlwZTogdHJ1ZVxuLy8gICAgIH0pO1xuLy8gICAgIGNzdkNvbnZlcnRlci5zdWJzY3JpYmUoZnVuY3Rpb24gKGQpIHtcbi8vICAgICAgIGFzc2VydChkLlBlcmlvZCA9PT0gMTMpO1xuLy8gICAgICAgYXNzZXJ0KGRbXCJBcHBhcmVudCBhZ2VcIl0gPT09IFwiVW5rbm93blwiKTtcbi8vICAgICAgIGRvbmUoKTtcbi8vICAgICB9KTtcbi8vICAgICBycy5waXBlKGNzdkNvbnZlcnRlcik7XG4vLyAgIH0pO1xuXG4vLyAgIGl0KFwiYmUgYWJsZSB0byBpZ25vcmUgZW1wdHkgY29sdW1uc1wiLCBmdW5jdGlvbiAoZG9uZSkge1xuLy8gICAgIHZhciB0ZXN0RGF0YSA9IF9fZGlybmFtZSArIFwiL2RhdGEvZGF0YUlnbm9yZUVtcHR5XCI7XG4vLyAgICAgdmFyIHJzID0gZnMuY3JlYXRlUmVhZFN0cmVhbSh0ZXN0RGF0YSk7XG4vLyAgICAgdmFyIHN0ID0gcnMucGlwZShjc3YoeyBcbi8vICAgICAgIGlnbm9yZUVtcHR5OiB0cnVlICxcbi8vICAgICAgIGZvcms6dHJ1ZVxuLy8gICAgIH0pKTtcbi8vICAgICBzdC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbi8vICAgICAgIHZhciBqID0gcmVzWzBdO1xuLy8gICAgICAgYXNzZXJ0KHJlcy5sZW5ndGggPT09IDMpO1xuLy8gICAgICAgYXNzZXJ0KGouY29sMi5sZW5ndGggPT09IDIpO1xuLy8gICAgICAgYXNzZXJ0KGouY29sMlsxXSA9PT0gXCJkM1wiKTtcbi8vICAgICAgIGFzc2VydChqLmNvbDQuY29sMyA9PT0gdW5kZWZpbmVkKTtcbi8vICAgICAgIGFzc2VydChqLmNvbDQuY29sNSA9PT0gXCJ3b3JsZFwiKTtcbi8vICAgICAgIGFzc2VydChyZXNbMV0uY29sMSA9PT0gXCJkMlwiKTtcbi8vICAgICAgIGFzc2VydChyZXNbMl0uY29sMSA9PT0gXCJkNFwiKTtcbi8vICAgICAgIGRvbmUoKTtcbi8vICAgICB9KTtcbi8vICAgfSk7XG5cbi8vICAgaXQoXCJzaG91bGQgYWxsb3cgbm8gaGVhZGVyXCIsIGZ1bmN0aW9uIChkb25lKSB7XG4vLyAgICAgdmFyIHRlc3REYXRhID0gX19kaXJuYW1lICsgXCIvZGF0YS9ub2hlYWRlcmNzdlwiO1xuLy8gICAgIHZhciBycyA9IGZzLmNyZWF0ZVJlYWRTdHJlYW0odGVzdERhdGEpO1xuLy8gICAgIHZhciBzdCA9IHJzLnBpcGUobmV3IENvbnZlcnRlcih7IFxuLy8gICAgICAgbm9oZWFkZXI6IHRydWUsXG4vLyAgICAgICBmb3JrOnRydWVcbi8vICAgICB9KSk7XG4vLyAgICAgc3QudGhlbihmdW5jdGlvbiAocmVzKSB7XG4vLyAgICAgICB2YXIgaiA9IHJlc1swXTtcbi8vICAgICAgIGFzc2VydChyZXMubGVuZ3RoID09PSA1KTtcbi8vICAgICAgIGFzc2VydChqLmZpZWxkMSA9PT0gXCJDQzEwMi1QRE1JLTAwMVwiKTtcbi8vICAgICAgIGFzc2VydChqLmZpZWxkMiA9PT0gXCJlQ2xhc3NfNS4xLjNcIik7XG4vLyAgICAgICBkb25lKCk7XG4vLyAgICAgfSk7XG4vLyAgIH0pO1xuXG4vLyAgIGl0KFwic2hvdWxkIGFsbG93IGN1c3RvbWlzZWQgaGVhZGVyXCIsIGZ1bmN0aW9uIChkb25lKSB7XG4vLyAgICAgdmFyIHRlc3REYXRhID0gX19kaXJuYW1lICsgXCIvZGF0YS9ub2hlYWRlcmNzdlwiO1xuLy8gICAgIHZhciBycyA9IGZzLmNyZWF0ZVJlYWRTdHJlYW0odGVzdERhdGEpO1xuLy8gICAgIHZhciBzdCA9IHJzLnBpcGUobmV3IENvbnZlcnRlcih7XG4vLyAgICAgICBub2hlYWRlcjogdHJ1ZSxcbi8vICAgICAgIGhlYWRlcnM6IFtcImFcIiwgXCJiXCJdLFxuLy8gICAgICAgZm9yazp0cnVlXG4vLyAgICAgfSkpO1xuLy8gICAgIHN0LnRoZW4oZnVuY3Rpb24gKHJlcykge1xuLy8gICAgICAgdmFyIGogPSByZXNbMF07XG4vLyAgICAgICBhc3NlcnQocmVzLmxlbmd0aCA9PT0gNSk7XG4vLyAgICAgICBhc3NlcnQoai5hID09PSBcIkNDMTAyLVBETUktMDAxXCIpO1xuLy8gICAgICAgYXNzZXJ0KGouYiA9PT0gXCJlQ2xhc3NfNS4xLjNcIik7XG4vLyAgICAgICBhc3NlcnQoai5maWVsZDMgPT09IFwiMTAvMy8yMDE0XCIpO1xuLy8gICAgICAgZG9uZSgpO1xuLy8gICAgIH0pO1xuLy8gICB9KTtcblxuLy8gICBpdChcInNob3VsZCBhbGxvdyBjdXN0b21pc2VkIGhlYWRlciB0byBvdmVycmlkZSBleGlzdGluZyBoZWFkZXJcIiwgZnVuY3Rpb24gKGRvbmUpIHtcbi8vICAgICB2YXIgdGVzdERhdGEgPSBfX2Rpcm5hbWUgKyBcIi9kYXRhL2NvbXBsZXhKU09OQ1NWXCI7XG4vLyAgICAgdmFyIHJzID0gZnMuY3JlYXRlUmVhZFN0cmVhbSh0ZXN0RGF0YSk7XG4vLyAgICAgdmFyIHN0ID0gcnMucGlwZShuZXcgQ29udmVydGVyKHtcbi8vICAgICAgIGhlYWRlcnM6IFtdLFxuLy8gICAgICAgZm9yazp0cnVlXG4vLyAgICAgfSkpO1xuLy8gICAgIHN0LnRoZW4oZnVuY3Rpb24gKHJlcykge1xuLy8gICAgICAgdmFyIGogPSByZXNbMF07XG4vLyAgICAgICBhc3NlcnQocmVzLmxlbmd0aCA9PT0gMik7XG4vLyAgICAgICBhc3NlcnQoai5maWVsZDEgPT09IFwiRm9vZCBGYWN0b3J5XCIpO1xuLy8gICAgICAgYXNzZXJ0KGouZmllbGQyID09PSBcIk9zY2FyXCIpO1xuLy8gICAgICAgZG9uZSgpO1xuLy8gICAgIH0pO1xuLy8gICB9KTtcblxuLy8gICBpdChcInNob3VsZCBoYW5kbGUgd2hlbiB0aGVyZSBpcyBhbiBlbXB0eSBzdHJpbmdcIiwgZnVuY3Rpb24gKGRvbmUpIHtcbi8vICAgICB2YXIgdGVzdERhdGEgPSBfX2Rpcm5hbWUgKyBcIi9kYXRhL2RhdGFXaXRoRW1wdHlTdHJpbmdcIjtcbi8vICAgICB2YXIgcnMgPSBmcy5jcmVhdGVSZWFkU3RyZWFtKHRlc3REYXRhKTtcbi8vICAgICB2YXIgc3QgPSBycy5waXBlKG5ldyBDb252ZXJ0ZXIoe1xuLy8gICAgICAgbm9oZWFkZXI6IHRydWUsXG4vLyAgICAgICBoZWFkZXJzOiBbXCJhXCIsIFwiYlwiLCBcImNcIl0sXG4vLyAgICAgICBjaGVja1R5cGU6IHRydWUsXG4vLyAgICAgICBmb3JrOnRydWVcbi8vICAgICB9KSk7XG4vLyAgICAgc3QudGhlbihmdW5jdGlvbiAocmVzKSB7XG4vLyAgICAgICB2YXIgaiA9IHJlc1swXTtcblxuLy8gICAgICAgLy8gYXNzZXJ0KHJlcy5sZW5ndGg9PT0yKTtcbi8vICAgICAgIGFzc2VydChqLmEgPT09IFwiZ3JlZW5cIik7XG4vLyAgICAgICBhc3NlcnQoai5iID09PSA0MCk7XG4vLyAgICAgICBhc3NlcnQuZXF1YWwoai5jLCBcIlwiKTtcbi8vICAgICAgIGRvbmUoKTtcbi8vICAgICB9KTtcbi8vICAgfSk7XG5cbi8vICAgaXQoXCJzaG91bGQgZGV0ZWN0IGVvbCBjb3JyZWN0bHkgd2hlbiBmaXJzdCBjaHVuayBpcyBzbWFsbGVyIHRoYW4gaGVhZGVyIHJvdyBsZW5ndGhcIiwgZnVuY3Rpb24gKGRvbmUpIHtcbi8vICAgICB2YXIgdGVzdERhdGEgPSBfX2Rpcm5hbWUgKyBcIi9kYXRhL2RhdGFOb1RyaW1DUkxGXCI7XG4vLyAgICAgdmFyIHJzID0gZnMuY3JlYXRlUmVhZFN0cmVhbSh0ZXN0RGF0YSwgeyBoaWdoV2F0ZXJNYXJrOiAzIH0pO1xuXG4vLyAgICAgdmFyIHN0ID0gcnMucGlwZShuZXcgQ29udmVydGVyKHtcbi8vICAgICAgIHRyaW06IGZhbHNlLFxuLy8gICAgICAgZm9yazp0cnVlXG4vLyAgICAgfSkpO1xuLy8gICAgIHN0LnRoZW4oZnVuY3Rpb24gKHJlcykge1xuLy8gICAgICAgdmFyIGogPSByZXNbMF07XG4vLyAgICAgICBhc3NlcnQocmVzLmxlbmd0aCA9PT0gMik7XG4vLyAgICAgICBhc3NlcnQoai5uYW1lID09PSBcImpvZVwiKTtcbi8vICAgICAgIGFzc2VydChqLmFnZSA9PT0gXCIyMFwiKTtcbi8vICAgICAgIGFzc2VydC5lcXVhbChyZXNbMV0ubmFtZSwgXCJzYW1cIik7XG4vLyAgICAgICBhc3NlcnQuZXF1YWwocmVzWzFdLmFnZSwgXCIzMFwiKTtcbi8vICAgICAgIGRvbmUoKTtcbi8vICAgICB9KTtcbi8vICAgfSk7XG5cbi8vICAgaXQoXCJzaG91bGQgZGV0ZWN0IGVvbCBjb3JyZWN0bHkgd2hlbiBmaXJzdCBjaHVuayBlbmRzIGluIG1pZGRsZSBvZiBDUkxGIGxpbmUgYnJlYWtcIiwgZnVuY3Rpb24gKGRvbmUpIHtcbi8vICAgICB2YXIgdGVzdERhdGEgPSBfX2Rpcm5hbWUgKyBcIi9kYXRhL2RhdGFOb1RyaW1DUkxGXCI7XG4vLyAgICAgdmFyIHJzID0gZnMuY3JlYXRlUmVhZFN0cmVhbSh0ZXN0RGF0YSwgeyBoaWdoV2F0ZXJNYXJrOiA5IH0pO1xuXG4vLyAgICAgdmFyIHN0ID0gcnMucGlwZShuZXcgQ29udmVydGVyKHtcbi8vICAgICAgIHRyaW06IGZhbHNlLFxuLy8gICAgICAgZm9yazp0cnVlXG4vLyAgICAgfSkpO1xuLy8gICAgIHN0LnRoZW4oZnVuY3Rpb24gKHJlcykge1xuLy8gICAgICAgdmFyIGogPSByZXNbMF07XG4vLyAgICAgICBhc3NlcnQocmVzLmxlbmd0aCA9PT0gMik7XG4vLyAgICAgICBhc3NlcnQoai5uYW1lID09PSBcImpvZVwiKTtcbi8vICAgICAgIGFzc2VydChqLmFnZSA9PT0gXCIyMFwiKTtcbi8vICAgICAgIGFzc2VydC5lcXVhbChyZXNbMV0ubmFtZSwgXCJzYW1cIik7XG4vLyAgICAgICBhc3NlcnQuZXF1YWwocmVzWzFdLmFnZSwgXCIzMFwiKTtcbi8vICAgICAgIGRvbmUoKTtcbi8vICAgICB9KTtcbi8vICAgfSk7XG5cbi8vICAgaXQoXCJzaG91bGQgZW1pdCBlb2wgZXZlbnQgd2hlbiBsaW5lIGVuZGluZyBpcyBkZXRlY3RlZCBhcyBDUkxGXCIsIGZ1bmN0aW9uIChkb25lKSB7XG4vLyAgICAgdmFyIHRlc3REYXRhID0gX19kaXJuYW1lICsgXCIvZGF0YS9kYXRhTm9UcmltQ1JMRlwiO1xuLy8gICAgIHZhciBycyA9IGZzLmNyZWF0ZVJlYWRTdHJlYW0odGVzdERhdGEpO1xuXG4vLyAgICAgdmFyIHN0ID0gcnMucGlwZShuZXcgQ29udmVydGVyKHtcbi8vICAgICAgIGZvcms6dHJ1ZVxuLy8gICAgIH0pKTtcbi8vICAgICB2YXIgZW9sQ2FsbGJhY2sgPSBzYW5kYm94LnNweShmdW5jdGlvbiAoZW9sKSB7XG4vLyAgICAgICBhc3NlcnQuZXF1YWwoZW9sLCBcIlxcclxcblwiKTtcbi8vICAgICB9KTtcbi8vICAgICBzdC5vbihcImVvbFwiLCBlb2xDYWxsYmFjayk7XG4vLyAgICAgc3QudGhlbihmdW5jdGlvbiAoKSB7XG4vLyAgICAgICBhc3NlcnQuZXF1YWwoZW9sQ2FsbGJhY2suY2FsbENvdW50LCAxLCAnc2hvdWxkIGVtaXQgZW9sIGV2ZW50IG9uY2UnKTtcbi8vICAgICAgIGRvbmUoKTtcbi8vICAgICB9KVxuLy8gICB9KTtcblxuLy8gICBpdChcInNob3VsZCBlbWl0IGVvbCBldmVudCB3aGVuIGxpbmUgZW5kaW5nIGlzIGRldGVjdGVkIGFzIExGXCIsIGZ1bmN0aW9uIChkb25lKSB7XG4vLyAgICAgdmFyIHRlc3REYXRhID0gX19kaXJuYW1lICsgXCIvZGF0YS9jb2x1bW5BcnJheVwiO1xuLy8gICAgIHZhciBycyA9IGZzLmNyZWF0ZVJlYWRTdHJlYW0odGVzdERhdGEpO1xuXG4vLyAgICAgdmFyIHN0ID0gcnMucGlwZShuZXcgQ29udmVydGVyKHtcbi8vICAgICAgIGZvcms6dHJ1ZVxuLy8gICAgIH0pKTtcbi8vICAgICB2YXIgZW9sQ2FsbGJhY2sgPSBzYW5kYm94LnNweShmdW5jdGlvbiAoZW9sKSB7XG4vLyAgICAgICBhc3NlcnQuZXF1YWwoZW9sLCBcIlxcblwiKTtcbi8vICAgICB9KTtcbi8vICAgICBzdC5vbihcImVvbFwiLCBlb2xDYWxsYmFjayk7XG4vLyAgICAgc3QudGhlbihmdW5jdGlvbiAoKSB7XG4vLyAgICAgICBhc3NlcnQuZXF1YWwoZW9sQ2FsbGJhY2suY2FsbENvdW50LCAxLCAnc2hvdWxkIGVtaXQgZW9sIGV2ZW50IG9uY2UnKTtcbi8vICAgICAgIGRvbmUoKTtcbi8vICAgICB9KVxuLy8gICB9KTtcblxuLy8gICBpdChcInNob3VsZCByZW1vdmUgdGhlIEJ5dGUgT3JkZXIgTWFyayAoQk9NKSBmcm9tIGlucHV0XCIsIGZ1bmN0aW9uIChkb25lKSB7XG4vLyAgICAgdmFyIHRlc3REYXRhID0gX19kaXJuYW1lICsgXCIvZGF0YS9kYXRhTm9UcmltQk9NXCI7XG4vLyAgICAgdmFyIHJzID0gZnMuY3JlYXRlUmVhZFN0cmVhbSh0ZXN0RGF0YSk7XG4vLyAgICAgdmFyIHN0ID0gcnMucGlwZShuZXcgQ29udmVydGVyKHtcbi8vICAgICAgIHRyaW06IGZhbHNlLFxuLy8gICAgICAgZm9yazp0cnVlXG4vLyAgICAgfSkpO1xuLy8gICAgIHN0LnRoZW4oIGZ1bmN0aW9uIChyZXMpIHtcbi8vICAgICAgIHZhciBqID0gcmVzWzBdO1xuXG4vLyAgICAgICBhc3NlcnQocmVzLmxlbmd0aD09PTIpO1xuLy8gICAgICAgYXNzZXJ0KGoubmFtZSA9PT0gXCJqb2VcIik7XG4vLyAgICAgICBhc3NlcnQoai5hZ2UgPT09IFwiMjBcIik7XG4vLyAgICAgICBkb25lKCk7XG4vLyAgICAgfSk7XG4vLyAgIH0pO1xuXG4vLyAgIGl0KFwic2hvdWxkIHNldCBvdXRwdXQgYXMgY3N2XCIsIGZ1bmN0aW9uIChkb25lKSB7XG4vLyAgICAgdmFyIHRlc3REYXRhID0gX19kaXJuYW1lICsgXCIvZGF0YS9jb21wbGV4SlNPTkNTVlwiO1xuLy8gICAgIHZhciBycyA9IGZzLmNyZWF0ZVJlYWRTdHJlYW0odGVzdERhdGEpO1xuLy8gICAgIHZhciBudW1PZlJvdyA9IDA7XG4vLyAgICAgY3N2KHsgb3V0cHV0OiBcImNzdlwiLGZvcms6dHJ1ZSB9KVxuLy8gICAgICAgLmZyb21TdHJlYW0ocnMpXG4vLyAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChyb3csIGlkeCkge1xuLy8gICAgICAgICBudW1PZlJvdysrO1xuLy8gICAgICAgICBhc3NlcnQocm93KTtcbi8vICAgICAgICAgYXNzZXJ0KGlkeCA+PSAwKTtcbi8vICAgICAgIH0pXG5cbi8vICAgICAgIC5vbihcImRvbmVcIiwgZnVuY3Rpb24gKGVycm9yKSB7XG4vLyAgICAgICAgIGFzc2VydCghZXJyb3IpO1xuLy8gICAgICAgICBhc3NlcnQuZXF1YWwoMiwgbnVtT2ZSb3cpO1xuLy8gICAgICAgICBhc3NlcnQobnVtT2ZSb3cgIT09IDApO1xuLy8gICAgICAgICBkb25lKCk7XG4vLyAgICAgICB9KTtcbi8vICAgfSk7XG4vLyAgIGl0KFwic2hvdWxkIHByb2Nlc3MgbG9uZyBoZWFkZXJcIiwgZnVuY3Rpb24gKGRvbmUpIHtcbi8vICAgICB2YXIgdGVzdERhdGEgPSBfX2Rpcm5hbWUgKyBcIi9kYXRhL2xvbmdIZWFkZXJcIjtcbi8vICAgICB2YXIgcnMgPSBmcy5jcmVhdGVSZWFkU3RyZWFtKHRlc3REYXRhLCB7IGhpZ2hXYXRlck1hcms6IDEwMCB9KTtcbi8vICAgICB2YXIgbnVtT2ZSb3cgPSAwO1xuLy8gICAgIHZhciBudW1PZkpzb24gPSAwO1xuLy8gICAgIGNzdih7Zm9yazp0cnVlfSwgeyBoaWdoV2F0ZXJNYXJrOiAxMDAgfSlcbi8vICAgICAgIC5mcm9tU3RyZWFtKHJzKVxuLy8gICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAocmVzLCBpZHgpIHtcbi8vICAgICAgICAgbnVtT2ZKc29uKys7XG4vLyAgICAgICAgIGFzc2VydC5lcXVhbChyZXMuRGF0ZSwgJzgvMjYvMTYnKTtcbi8vICAgICAgICAgYXNzZXJ0KGlkeCA+PSAwKTtcbi8vICAgICAgIH0pXG4vLyAgICAgICAub24oXCJkb25lXCIsIGZ1bmN0aW9uICgpIHtcbi8vICAgICAgICAgYXNzZXJ0KG51bU9mSnNvbiA9PT0gMSk7XG4vLyAgICAgICAgIGRvbmUoKTtcbi8vICAgICAgIH0pO1xuLy8gICB9KTtcbi8vICAgaXQoXCJzaG91bGQgcGFyc2UgIzEzOVwiLCBmdW5jdGlvbiAoZG9uZSkge1xuLy8gICAgIHZhciBycyA9IGZzLmNyZWF0ZVJlYWRTdHJlYW0oX19kaXJuYW1lICsgXCIvZGF0YS9kYXRhIzEzOVwiKTtcbi8vICAgICBjc3Yoe2Zvcms6dHJ1ZX0pXG4vLyAgICAgICAuZnJvbVN0cmVhbShycylcbi8vICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbi8vICAgICAgICAgYXNzZXJ0LmVxdWFsKHJlc1sxXS5maWVsZDMsIFwiOTAwMTAwOTM5NSA5MDAxMDA5OTkwXCIpO1xuLy8gICAgICAgICBkb25lKCk7XG4vLyAgICAgICB9KTtcbi8vICAgfSk7XG5cbi8vICAgaXQoXCJzaG91bGQgaWdub3JlIGNvbHVtblwiLCBmdW5jdGlvbiAoZG9uZSkge1xuLy8gICAgIHZhciBycyA9IGZzLmNyZWF0ZVJlYWRTdHJlYW0oX19kaXJuYW1lICsgXCIvZGF0YS9kYXRhV2l0aFFvdXRlc1wiKTtcbi8vICAgICB2YXIgaGVhZGVyRW1pdHRlZCA9IGZhbHNlO1xuLy8gICAgIGNzdih7XG4vLyAgICAgICBpZ25vcmVDb2x1bW5zOiAvVElNRVNUQU1QLyxcbi8vICAgICAgIGZvcms6dHJ1ZVxuLy8gICAgIH0pXG4vLyAgICAgICAuZnJvbVN0cmVhbShycylcbi8vICAgICAgIC5vbihcImhlYWRlclwiLCBmdW5jdGlvbiAoaGVhZGVyKSB7XG4vLyAgICAgICAgIGFzc2VydC5lcXVhbChoZWFkZXIuaW5kZXhPZihcIlRJTUVTVEFNUFwiKSwgLTEpO1xuLy8gICAgICAgICBhc3NlcnQuZXF1YWwoaGVhZGVyLmluZGV4T2YoXCJVUERBVEVcIiksIDApO1xuLy8gICAgICAgICBpZiAoaGVhZGVyRW1pdHRlZCkge1xuLy8gICAgICAgICAgIHRocm93IChcImhlYWRlciBldmVudCBzaG91bGQgb25seSBoYXBwZW4gb25jZVwiKVxuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGhlYWRlckVtaXR0ZWQgPSB0cnVlO1xuLy8gICAgICAgfSlcbi8vICAgICAgIC8vIC5vbihcImNzdlwiLCBmdW5jdGlvbiAocm93LCBpZHgpIHtcbi8vICAgICAgIC8vICAgaWYgKCFoZWFkZXJFbWl0dGVkKSB7XG4vLyAgICAgICAvLyAgICAgdGhyb3cgKFwiaGVhZGVyIHNob3VsZCBiZSBlbWl0dGVkIGJlZm9yZSBhbnkgZGF0YSBldmVudHNcIik7XG4vLyAgICAgICAvLyAgIH1cbi8vICAgICAgIC8vICAgYXNzZXJ0KGlkeCA+PSAwKTtcbi8vICAgICAgIC8vICAgaWYgKGlkeCA9PT0gMSkge1xuLy8gICAgICAgLy8gICAgIGFzc2VydC5lcXVhbChyb3dbMF0sIFwiblwiKTtcbi8vICAgICAgIC8vICAgfVxuLy8gICAgICAgLy8gfSlcbi8vICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKGosIGlkeCkge1xuLy8gICAgICAgICAvLyBjb25zb2xlLmxvZyhqKTtcbi8vICAgICAgICAgYXNzZXJ0KCFqLlRJTUVTVEFNUCk7XG4vLyAgICAgICAgIGFzc2VydChpZHggPj0gMCk7XG4vLyAgICAgICB9KVxuLy8gICAgICAgLm9uKFwiZG9uZVwiLCBmdW5jdGlvbiAoZXJyKSB7XG4vLyAgICAgICAgIGFzc2VydCghZXJyKTtcbi8vICAgICAgICAgYXNzZXJ0KGhlYWRlckVtaXR0ZWQpO1xuLy8gICAgICAgICBkb25lKCk7XG4vLyAgICAgICB9KTtcbi8vICAgfSk7XG4vLyAgIGl0KFwic2hvdWxkIGluY2x1ZGUgY29sdW1uXCIsIGZ1bmN0aW9uIChkb25lKSB7XG4vLyAgICAgdmFyIHJzID0gZnMuY3JlYXRlUmVhZFN0cmVhbShfX2Rpcm5hbWUgKyBcIi9kYXRhL2RhdGFXaXRoUW91dGVzXCIpO1xuLy8gICAgIGNzdih7XG4vLyAgICAgICBpbmNsdWRlQ29sdW1uczogL1RJTUVTVEFNUC8sXG4vLyAgICAgICBmb3JrOnRydWVcbi8vICAgICB9KVxuLy8gICAgICAgLmZyb21TdHJlYW0ocnMpXG4vLyAgICAgICAub24oXCJoZWFkZXJcIiwgZnVuY3Rpb24gKGhlYWRlcikge1xuLy8gICAgICAgICBhc3NlcnQuZXF1YWwoaGVhZGVyLmluZGV4T2YoXCJUSU1FU1RBTVBcIiksIDApO1xuLy8gICAgICAgICBhc3NlcnQuZXF1YWwoaGVhZGVyLmluZGV4T2YoXCJVUERBVEVcIiksIC0xKTtcbi8vICAgICAgICAgYXNzZXJ0LmVxdWFsKGhlYWRlci5sZW5ndGgsIDEpO1xuLy8gICAgICAgfSlcbi8vICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKGosIGlkeCkge1xuLy8gICAgICAgICBhc3NlcnQoaWR4ID49IDApO1xuLy8gICAgICAgICBpZiAoaWR4ID09PSAxKSB7XG4vLyAgICAgICAgICAgYXNzZXJ0LmVxdWFsKGouVElNRVNUQU1QLCBcImFiYywgZGVmLCBjY2NcIik7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgYXNzZXJ0KCFqLlVJRClcbi8vICAgICAgICAgYXNzZXJ0KCFqWydCWVRFUyBTRU5UJ10pXG4vLyAgICAgICB9KVxuLy8gICAgICAgLm9uKFwiZG9uZVwiLCBmdW5jdGlvbiAoKSB7XG4vLyAgICAgICAgIGRvbmUoKTtcbi8vICAgICAgIH0pO1xuLy8gICB9KTtcbi8vICAgaXQoXCJzaG91bGQgYWxsb3cgaGVhZGVycyBhbmQgaW5jbHVkZSBjb2x1bW5zIHRvIGJlIGdpdmVuIGFzIHJlZmVyZW5jZSB0byB0aGUgc2FtZSB2YXJcIiwgZnVuY3Rpb24gKGRvbmUpIHtcbi8vICAgICB2YXIgcnMgPSBmcy5jcmVhdGVSZWFkU3RyZWFtKF9fZGlybmFtZSArIFwiL2RhdGEvY29tcGxleEpTT05DU1ZcIik7XG4vLyAgICAgdmFyIGhlYWRlcnMgPSBbXG4vLyAgICAgICAnZmlyc3QnLFxuLy8gICAgICAgJ3NlY29uZCcsXG4vLyAgICAgICAndGhpcmQnLFxuLy8gICAgIF07XG5cbi8vICAgICB2YXIgZXhwZWN0ZWQgPSBoZWFkZXJzO1xuXG4vLyAgICAgY3N2KHtcbi8vICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4vLyAgICAgICBpbmNsdWRlQ29sdW1uczogLyhmaXJzdHxzZWNvbmR8dGhpcmQpLyxcbi8vICAgICAgIGZvcms6dHJ1ZVxuLy8gICAgIH0pXG4vLyAgICAgICAuZnJvbVN0cmVhbShycylcbi8vICAgICAgIC5vbihcImhlYWRlclwiLCBmdW5jdGlvbiAoaGVhZGVyKSB7XG4vLyAgICAgICAgIGV4cGVjdGVkLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBpbmRleCkge1xuLy8gICAgICAgICAgIGFzc2VydC5lcXVhbChoZWFkZXIuaW5kZXhPZih2YWx1ZSksIGluZGV4KTtcbi8vICAgICAgICAgfSk7XG4vLyAgICAgICB9KVxuLy8gICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAoaiwgaWR4KSB7XG4vLyAgICAgICAgIGFzc2VydChpZHggPj0gMCk7XG4vLyAgICAgICAgIGFzc2VydC5lcXVhbChleHBlY3RlZC5sZW5ndGgsIE9iamVjdC5rZXlzKGopLmxlbmd0aCk7XG4vLyAgICAgICAgIGV4cGVjdGVkLmZvckVhY2goZnVuY3Rpb24gKGF0dHJpYnV0ZSkge1xuLy8gICAgICAgICAgIGFzc2VydChqLmhhc093blByb3BlcnR5KGF0dHJpYnV0ZSkpO1xuLy8gICAgICAgICB9KTtcbi8vICAgICAgIH0pXG4vLyAgICAgICAub24oXCJkb25lXCIsIGZ1bmN0aW9uICgpIHtcbi8vICAgICAgICAgZG9uZSgpO1xuLy8gICAgICAgfSk7XG4vLyAgIH0pO1xuXG4vLyAgIGl0KFwic2hvdWxkIGxlYXZlIHByb3ZpZGVkIHBhcmFtcyBvYmplY3RzIHVubXV0YXRlZFwiLCBmdW5jdGlvbigpIHtcbi8vICAgICB2YXIgcnMgPSBmcy5jcmVhdGVSZWFkU3RyZWFtKF9fZGlybmFtZSArIFwiL2RhdGEvY29tcGxleEpTT05DU1ZcIik7XG4vLyAgICAgdmFyIGluY2x1ZGVDb2x1bW5zID0gW1xuLy8gICAgICAgJ2ZpZWxkQS50aXRsZScsXG4vLyAgICAgICAnZGVzY3JpcHRpb24nLFxuLy8gICAgIF07XG5cblxuLy8gICAgIHJldHVybiBjc3Yoe1xuLy8gICAgICAgaW5jbHVkZUNvbHVtbnM6IC8oZmllbGRBXFwudGl0bGV8ZGVzY3JpcHRpb24pLyxcbi8vICAgICAgIGZvcms6dHJ1ZVxuLy8gICAgIH0pXG4vLyAgICAgICAuZnJvbVN0cmVhbShycylcbi8vICAgICAgIC5vbihcImpzb25cIiwgZnVuY3Rpb24oaiwgaWR4KSB7XG4vLyAgICAgICAgIGFzc2VydChpZHggPj0gMCk7XG4vLyAgICAgICB9KVxuLy8gICAgICAgLm9uKFwiaGVhZGVyXCIsIGZ1bmN0aW9uKGhlYWRlcikge1xuLy8gICAgICAgICBpbmNsdWRlQ29sdW1ucy5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgpIHtcbi8vICAgICAgICAgICBhc3NlcnQuZXF1YWwoaW5kZXgsIGhlYWRlci5pbmRleE9mKHZhbHVlKSk7XG4vLyAgICAgICAgIH0pO1xuLy8gICAgICAgfSlcbi8vICAgfSk7XG4vLyAgIGl0KFwic2hvdWxkIGFjY2VwdCBwaXBlIGFzIHF1b3RlXCIsIGZ1bmN0aW9uIChkb25lKSB7XG4vLyAgICAgY3N2KHtcbi8vICAgICAgIHF1b3RlOiBcInxcIixcbi8vICAgICAgIG91dHB1dDogXCJjc3ZcIixcbi8vICAgICAgIFwiZm9ya1wiOnRydWVcbi8vICAgICB9KVxuLy8gICAgICAgLmZyb21GaWxlKF9fZGlybmFtZSArIFwiL2RhdGEvcGlwZUFzUXVvdGVcIilcbi8vICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKGNzdikge1xuLy8gICAgICAgICBhc3NlcnQuZXF1YWwoY3N2WzJdLCBcImJsYWhoaCwgYmxhaFwiKTtcbi8vICAgICAgIH0pXG4vLyAgICAgICAub24oJ2RvbmUnLCBmdW5jdGlvbiAoKSB7XG4vLyAgICAgICAgIGRvbmUoKVxuLy8gICAgICAgfSk7XG4vLyAgIH0pXG4vLyAgIGl0KFwic2hvdWxkIGFsbG93IGFzeW5jIHN1YnNjcmliZSBmdW5jdGlvblwiLCAoKSA9PiB7XG4vLyAgICAgcmV0dXJuIGNzdih7IHRyaW06IHRydWUsZm9yazp0cnVlIH0pXG4vLyAgICAgICAuZnJvbVN0cmluZyhgYSxiLGNcbi8vICAgICAxLDIsM1xuLy8gICAgIDQsNSw2YClcbi8vICAgICAgIC5zdWJzY3JpYmUoKGQpID0+IHtcbi8vICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbi8vICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbi8vICAgICAgICAgICAgIGQuYSA9IDEwO1xuLy8gICAgICAgICAgICAgcmVzb2x2ZSgpO1xuLy8gICAgICAgICAgIH0sIDIwKTtcbi8vICAgICAgICAgfSlcbi8vICAgICAgIH0pXG4vLyAgICAgICAudGhlbigoZCkgPT4ge1xuLy8gICAgICAgICBhc3NlcnQuZXF1YWwoZFswXS5hLCAxMCk7XG4vLyAgICAgICAgIGFzc2VydC5lcXVhbChkWzFdLmEsIDEwKTtcbi8vICAgICAgIH0pXG4vLyAgIH0pXG4vLyAgIGl0KFwic2hvdWxkIG9taXQgYSBjb2x1bW5cIiwgKCkgPT4ge1xuLy8gICAgIHJldHVybiBjc3Yoe1xuLy8gICAgICAgY29sUGFyc2VyOiB7XG4vLyAgICAgICAgIFwiYVwiOiBcIm9taXRcIlxuLy8gICAgICAgfSxcbi8vICAgICAgIGZvcms6dHJ1ZVxuLy8gICAgIH0pXG4vLyAgICAgICAuZnJvbVN0cmluZyhgYSxiLGNcbi8vICAgMSwyLDNcbi8vICAgZmVmZSw1LDZgKVxuLy8gICAgICAgLnRoZW4oKGQpID0+IHtcbi8vICAgICAgICAgYXNzZXJ0LnN0cmljdEVxdWFsKGRbMF0uYSwgdW5kZWZpbmVkKTtcbi8vICAgICAgICAgYXNzZXJ0LmVxdWFsKGRbMV0uYSwgdW5kZWZpbmVkKTtcbi8vICAgICAgIH0pXG4vLyAgIH0pXG4gIFxuLy8gfSk7XG4iXX0=