"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Converter_1 = require("../src/Converter");
var src_1 = __importDefault(require("../src"));
var assert = require("assert");
var fs = require("fs");
var sandbox = require("sinon").sandbox.create();
var file = __dirname + "/data/testData";
var trailCommaData = __dirname + "/data/trailingComma";
describe("CSV Converter", function () {
    afterEach(function () {
        sandbox.restore();
    });
    it("should create new instance of csv", function () {
        var obj = new Converter_1.Converter();
        assert(obj);
    });
    it("should read from a stream", function (done) {
        var obj = new Converter_1.Converter();
        var stream = fs.createReadStream(file);
        obj.then(function (obj) {
            assert.equal(obj.length, 2);
            done();
        });
        stream.pipe(obj);
    });
    it("should call onNext once a row is parsed.", function (done) {
        var obj = new Converter_1.Converter();
        var stream = fs.createReadStream(file);
        var called = false;
        obj.subscribe(function (resultRow) {
            assert(resultRow);
            called = true;
        });
        obj.on("done", function () {
            assert(called);
            done();
        });
        stream.pipe(obj);
    });
    it("should emit end_parsed message once it is finished.", function (done) {
        var obj = new Converter_1.Converter();
        obj.then(function (result) {
            assert(result);
            assert(result.length === 2);
            assert(result[0].date);
            assert(result[0].employee);
            assert(result[0].employee.name);
            assert(result[0].employee.age);
            assert(result[0].employee.number);
            assert(result[0].employee.key.length === 2);
            assert(result[0].address.length === 2);
            done();
        });
        fs.createReadStream(file).pipe(obj);
    });
    it("should handle traling comma gracefully", function (done) {
        var stream = fs.createReadStream(trailCommaData);
        var obj = new Converter_1.Converter();
        obj.then(function (result) {
            assert(result);
            assert(result.length > 0);
            done();
        });
        stream.pipe(obj);
    });
    it("should handle comma in column which is surrounded by qoutes", function (done) {
        var testData = __dirname + "/data/dataWithComma";
        var rs = fs.createReadStream(testData);
        var obj = new Converter_1.Converter({
            "quote": "#"
        });
        obj.then(function (result) {
            assert(result[0].col1 === "\"Mini. Sectt");
            assert.equal(result[3].col2, "125001,fenvkdsf");
            // console.log(result);
            done();
        });
        rs.pipe(obj);
    });
    it("should be able to convert a csv to column array data", function (done) {
        var columArrData = __dirname + "/data/columnArray";
        var rs = fs.createReadStream(columArrData);
        var result = {};
        var csvConverter = new Converter_1.Converter();
        //end_parsed will be emitted once parsing finished
        csvConverter.then(function () {
            assert(result.TIMESTAMP.length === 5);
            done();
        });
        //record_parsed will be emitted each time a row has been parsed.
        csvConverter.subscribe(function (resultRow, rowIndex) {
            for (var key in resultRow) {
                if (resultRow.hasOwnProperty(key)) {
                    if (!result[key] || !(result[key] instanceof Array)) {
                        result[key] = [];
                    }
                    result[key][rowIndex] = resultRow[key];
                }
            }
        });
        rs.pipe(csvConverter);
    });
    it("should be able to convert csv string directly", function (done) {
        var testData = __dirname + "/data/testData";
        var data = fs.readFileSync(testData).toString();
        var csvConverter = new Converter_1.Converter();
        //end_parsed will be emitted once parsing finished
        csvConverter.then(function (jsonObj) {
            assert.equal(jsonObj.length, 2);
        });
        csvConverter.fromString(data).then(function (jsonObj) {
            assert(jsonObj.length === 2);
            done();
        });
    });
    it("should be able to convert csv string with error", function (done) {
        var testData = __dirname + "/data/dataWithUnclosedQuotes";
        var data = fs.readFileSync(testData).toString();
        var csvConverter = new Converter_1.Converter();
        csvConverter.fromString(data).then(undefined, function (err) {
            assert(err);
            assert.equal(err.err, "unclosed_quote");
            done();
        });
    });
    it("should be able to convert csv string without callback provided", function (done) {
        var testData = __dirname + "/data/testData";
        var data = fs.readFileSync(testData).toString();
        var csvConverter = new Converter_1.Converter();
        //end_parsed will be emitted once parsing finished
        csvConverter.then(function (jsonObj) {
            assert(jsonObj.length === 2);
            done();
        });
        csvConverter.fromString(data);
    });
    it("should be able to handle columns with double quotes", function (done) {
        var testData = __dirname + "/data/dataWithQoutes";
        var data = fs.readFileSync(testData).toString();
        var csvConverter = new Converter_1.Converter();
        csvConverter.fromString(data).then(function (jsonObj) {
            assert(jsonObj[0].TIMESTAMP === '13954264"22', JSON.stringify(jsonObj[0].TIMESTAMP));
            assert(jsonObj[1].TIMESTAMP === 'abc, def, ccc', JSON.stringify(jsonObj[1].TIMESTAMP));
            done();
        });
    });
    it("should be able to handle columns with two double quotes", function (done) {
        var testData = __dirname + "/data/twodoublequotes";
        var data = fs.readFileSync(testData).toString();
        var csvConverter = new Converter_1.Converter();
        csvConverter.fromString(data).then(function (jsonObj) {
            assert.equal(jsonObj[0].title, "\"");
            assert.equal(jsonObj[0].data, "xyabcde");
            assert.equal(jsonObj[0].uuid, "fejal\"eifa");
            assert.equal(jsonObj[0].fieldA, "bnej\"\"falkfe");
            assert.equal(jsonObj[0].fieldB, "\"eisjfes\"");
            done();
        });
    });
    it("should handle empty csv file", function (done) {
        var testData = __dirname + "/data/emptyFile";
        var rs = fs.createReadStream(testData);
        var csvConverter = new Converter_1.Converter();
        csvConverter.then(function (jsonObj) {
            assert(jsonObj.length === 0);
            done();
        });
        rs.pipe(csvConverter);
    });
    it("should parse large csv file", function (done) {
        var testData = __dirname + "/data/large-csv-sample.csv";
        var rs = fs.createReadStream(testData);
        var csvConverter = new Converter_1.Converter();
        var count = 0;
        csvConverter.subscribe(function () {
            //console.log(arguments);
            count++;
        });
        csvConverter.then(function () {
            assert(count === 5290);
            done();
        });
        rs.pipe(csvConverter);
    });
    it("should parse data and covert to specific types", function (done) {
        var testData = __dirname + "/data/dataWithType";
        var rs = fs.createReadStream(testData);
        var csvConverter = new Converter_1.Converter({
            checkType: true,
            colParser: {
                "column6": "string",
                "column7": "string"
            }
        });
        csvConverter.subscribe(function (d) {
            assert(typeof d.column1 === "number");
            assert(typeof d.column2 === "string");
            assert.equal(d["colume4"], "someinvaliddate");
            assert(d.column5.hello === "world");
            assert(d.column6 === '{"hello":"world"}');
            assert(d.column7 === "1234");
            assert(d.column8 === "abcd");
            assert(d.column9 === true);
            assert(d.column10[0] === 23);
            assert(d.column10[1] === 31);
            assert(d.column11[0].hello === "world");
            assert(d["name#!"] === false);
        });
        csvConverter.on("done", function () {
            done();
        });
        rs.pipe(csvConverter);
    });
    it("should turn off field type check", function (done) {
        var testData = __dirname + "/data/dataWithType";
        var rs = fs.createReadStream(testData);
        var csvConverter = new Converter_1.Converter({
            checkType: false
        });
        csvConverter.subscribe(function (d) {
            assert(typeof d.column1 === "string");
            assert(typeof d.column2 === "string");
            assert(d["column3"] === "2012-01-01");
            assert(d["colume4"] === "someinvaliddate");
            assert(d.column5 === '{"hello":"world"}');
            assert.equal(d["column6"], '{"hello":"world"}');
            assert(d["column7"] === "1234");
            assert(d["column8"] === "abcd");
            assert(d.column9 === "true");
            assert(d.column10[0] === "23");
            assert(d.column10[1] === "31");
            assert(d["name#!"] === 'false');
        });
        csvConverter.then(function () {
            done();
        });
        rs.pipe(csvConverter);
    });
    it("should emit data event correctly", function (done) {
        var testData = __dirname + "/data/large-csv-sample.csv";
        var csvConverter = new Converter_1.Converter({});
        var count = 0;
        csvConverter.on("data", function (d) {
            count++;
        });
        csvConverter.on("end", function () {
            assert.equal(count, 5290);
            done();
        });
        var rs = fs.createReadStream(testData);
        rs.pipe(csvConverter);
    });
    it("should process column with linebreaks", function (done) {
        var testData = __dirname + "/data/lineBreak";
        var rs = fs.createReadStream(testData);
        var csvConverter = new Converter_1.Converter({
            checkType: true
        });
        csvConverter.subscribe(function (d) {
            assert(d.Period === 13);
            assert(d["Apparent age"] === "Unknown");
            done();
        });
        rs.pipe(csvConverter);
    });
    it("be able to ignore empty columns", function (done) {
        var testData = __dirname + "/data/dataIgnoreEmpty";
        var rs = fs.createReadStream(testData);
        var st = rs.pipe(src_1.default({ ignoreEmpty: true }));
        st.then(function (res) {
            var j = res[0];
            assert(res.length === 3);
            assert(j.col2.length === 2);
            assert(j.col2[1] === "d3");
            assert(j.col4.col3 === undefined);
            assert(j.col4.col5 === "world");
            assert(res[1].col1 === "d2");
            assert(res[2].col1 === "d4");
            done();
        });
    });
    it("should allow no header", function (done) {
        var testData = __dirname + "/data/noheadercsv";
        var rs = fs.createReadStream(testData);
        var st = rs.pipe(new Converter_1.Converter({ noheader: true }));
        st.then(function (res) {
            var j = res[0];
            assert(res.length === 5);
            assert(j.field1 === "CC102-PDMI-001");
            assert(j.field2 === "eClass_5.1.3");
            done();
        });
    });
    it("should allow customised header", function (done) {
        var testData = __dirname + "/data/noheadercsv";
        var rs = fs.createReadStream(testData);
        var st = rs.pipe(new Converter_1.Converter({
            noheader: true,
            headers: ["a", "b"]
        }));
        st.then(function (res) {
            var j = res[0];
            assert(res.length === 5);
            assert(j.a === "CC102-PDMI-001");
            assert(j.b === "eClass_5.1.3");
            assert(j.field3 === "10/3/2014");
            done();
        });
    });
    it("should allow customised header to override existing header", function (done) {
        var testData = __dirname + "/data/complexJSONCSV";
        var rs = fs.createReadStream(testData);
        var st = rs.pipe(new Converter_1.Converter({
            headers: []
        }));
        st.then(function (res) {
            var j = res[0];
            assert(res.length === 2);
            assert(j.field1 === "Food Factory");
            assert(j.field2 === "Oscar");
            done();
        });
    });
    it("should handle when there is an empty string", function (done) {
        var testData = __dirname + "/data/dataWithEmptyString";
        var rs = fs.createReadStream(testData);
        var st = rs.pipe(new Converter_1.Converter({
            noheader: true,
            headers: ["a", "b", "c"],
            checkType: true
        }));
        st.then(function (res) {
            var j = res[0];
            // assert(res.length===2);
            assert(j.a === "green");
            assert(j.b === 40);
            assert.equal(j.c, "");
            done();
        });
    });
    it("should detect eol correctly when first chunk is smaller than header row length", function (done) {
        var testData = __dirname + "/data/dataNoTrimCRLF";
        var rs = fs.createReadStream(testData, { highWaterMark: 3 });
        var st = rs.pipe(new Converter_1.Converter({
            trim: false
        }));
        st.then(function (res) {
            var j = res[0];
            assert(res.length === 2);
            assert(j.name === "joe");
            assert(j.age === "20");
            assert.equal(res[1].name, "sam");
            assert.equal(res[1].age, "30");
            done();
        });
    });
    it("should detect eol correctly when first chunk ends in middle of CRLF line break", function (done) {
        var testData = __dirname + "/data/dataNoTrimCRLF";
        var rs = fs.createReadStream(testData, { highWaterMark: 9 });
        var st = rs.pipe(new Converter_1.Converter({
            trim: false
        }));
        st.then(function (res) {
            var j = res[0];
            assert(res.length === 2);
            assert(j.name === "joe");
            assert(j.age === "20");
            assert.equal(res[1].name, "sam");
            assert.equal(res[1].age, "30");
            done();
        });
    });
    it("should emit eol event when line ending is detected as CRLF", function (done) {
        var testData = __dirname + "/data/dataNoTrimCRLF";
        var rs = fs.createReadStream(testData);
        var st = rs.pipe(new Converter_1.Converter());
        var eolCallback = sandbox.spy(function (eol) {
            assert.equal(eol, "\r\n");
        });
        st.on("eol", eolCallback);
        st.then(function () {
            assert.equal(eolCallback.callCount, 1, 'should emit eol event once');
            done();
        });
    });
    it("should emit eol event when line ending is detected as LF", function (done) {
        var testData = __dirname + "/data/columnArray";
        var rs = fs.createReadStream(testData);
        var st = rs.pipe(new Converter_1.Converter());
        var eolCallback = sandbox.spy(function (eol) {
            assert.equal(eol, "\n");
        });
        st.on("eol", eolCallback);
        st.then(function () {
            assert.equal(eolCallback.callCount, 1, 'should emit eol event once');
            done();
        });
    });
    it("should remove the Byte Order Mark (BOM) from input", function (done) {
        var testData = __dirname + "/data/dataNoTrimBOM";
        var rs = fs.createReadStream(testData);
        var st = rs.pipe(new Converter_1.Converter({
            trim: false
        }));
        st.then(function (res) {
            var j = res[0];
            assert(res.length === 2);
            assert(j.name === "joe");
            assert(j.age === "20");
            done();
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL2t4aWFuZy93b3JrL3Byb2plY3RzL2NzdjJqc29uL3Rlc3QvdGVzdENTVkNvbnZlcnRlci50cyIsInNvdXJjZXMiOlsiL1VzZXJzL2t4aWFuZy93b3JrL3Byb2plY3RzL2NzdjJqc29uL3Rlc3QvdGVzdENTVkNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhDQUEyQztBQUMzQywrQ0FBeUI7QUFDekIsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQy9CLElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN2QixJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ2hELElBQUksSUFBSSxHQUFHLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQztBQUN4QyxJQUFJLGNBQWMsR0FBRyxTQUFTLEdBQUcscUJBQXFCLENBQUM7QUFDdkQsUUFBUSxDQUFDLGVBQWUsRUFBRTtJQUN4QixTQUFTLENBQUM7UUFDUixPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDcEIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsbUNBQW1DLEVBQUU7UUFDdEMsSUFBSSxHQUFHLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUM7UUFDMUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2QsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsMkJBQTJCLEVBQUUsVUFBVSxJQUFJO1FBQzVDLElBQUksR0FBRyxHQUFHLElBQUkscUJBQVMsRUFBRSxDQUFDO1FBQzFCLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRztZQUNwQixNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDNUIsSUFBSSxFQUFFLENBQUM7UUFDVCxDQUFDLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsMENBQTBDLEVBQUUsVUFBVSxJQUFJO1FBQzNELElBQUksR0FBRyxHQUFHLElBQUkscUJBQVMsRUFBRSxDQUFDO1FBQzFCLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDbkIsR0FBRyxDQUFDLFNBQVMsQ0FBQyxVQUFVLFNBQVM7WUFDL0IsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2xCLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUM7UUFDSCxHQUFHLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRTtZQUNiLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNmLElBQUksRUFBRSxDQUFDO1FBQ1QsQ0FBQyxDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25CLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHFEQUFxRCxFQUFFLFVBQVUsSUFBSTtRQUN0RSxJQUFJLEdBQUcsR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztRQUMxQixHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsTUFBTTtZQUN2QixNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDZixNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQztZQUM1QixNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZCLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDM0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDL0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQztZQUM1QyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDdkMsSUFBSSxFQUFFLENBQUM7UUFDVCxDQUFDLENBQUMsQ0FBQztRQUNILEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEMsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsd0NBQXdDLEVBQUUsVUFBVSxJQUFJO1FBQ3pELElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNqRCxJQUFJLEdBQUcsR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztRQUMxQixHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsTUFBTTtZQUN2QixNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDZixNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLEVBQUUsQ0FBQztRQUNULENBQUMsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuQixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyw2REFBNkQsRUFBRSxVQUFVLElBQUk7UUFDOUUsSUFBSSxRQUFRLEdBQUcsU0FBUyxHQUFHLHFCQUFxQixDQUFDO1FBQ2pELElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN2QyxJQUFJLEdBQUcsR0FBRyxJQUFJLHFCQUFTLENBQUM7WUFDdEIsT0FBTyxFQUFFLEdBQUc7U0FDYixDQUFDLENBQUM7UUFDSCxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsTUFBTTtZQUN2QixNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxlQUFlLENBQUMsQ0FBQztZQUMzQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztZQUNoRCx1QkFBdUI7WUFDdkIsSUFBSSxFQUFFLENBQUM7UUFDVCxDQUFDLENBQUMsQ0FBQztRQUNILEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDZixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxzREFBc0QsRUFBRSxVQUFVLElBQUk7UUFDdkUsSUFBSSxZQUFZLEdBQUcsU0FBUyxHQUFHLG1CQUFtQixDQUFDO1FBQ25ELElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMzQyxJQUFJLE1BQU0sR0FBTyxFQUFFLENBQUM7UUFDcEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUM7UUFDbkMsa0RBQWtEO1FBQ2xELFlBQVksQ0FBQyxJQUFJLENBQUM7WUFDaEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLElBQUksRUFBRSxDQUFDO1FBQ1QsQ0FBQyxDQUFDLENBQUM7UUFFSCxnRUFBZ0U7UUFDaEUsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFVLFNBQVMsRUFBRSxRQUFRO1lBQ2xELEtBQUssSUFBSSxHQUFHLElBQUksU0FBUyxFQUFFO2dCQUN6QixJQUFJLFNBQVMsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsWUFBWSxLQUFLLENBQUMsRUFBRTt3QkFDbkQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztxQkFDbEI7b0JBQ0QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDeEM7YUFDRjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN4QixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQywrQ0FBK0MsRUFBRSxVQUFVLElBQUk7UUFDaEUsSUFBSSxRQUFRLEdBQUcsU0FBUyxHQUFHLGdCQUFnQixDQUFDO1FBQzVDLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEQsSUFBSSxZQUFZLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUM7UUFDbkMsa0RBQWtEO1FBQ2xELFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxPQUFPO1lBQ2pDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQztRQUNILFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsT0FBTztZQUNsRCxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQztZQUM3QixJQUFJLEVBQUUsQ0FBQztRQUNULENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsaURBQWlELEVBQUUsVUFBVSxJQUFJO1FBQ2xFLElBQUksUUFBUSxHQUFHLFNBQVMsR0FBRyw4QkFBOEIsQ0FBQztRQUMxRCxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hELElBQUksWUFBWSxHQUFHLElBQUkscUJBQVMsRUFBRSxDQUFDO1FBQ25DLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxVQUFVLEdBQUc7WUFDekQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ1osTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLENBQUM7WUFDeEMsSUFBSSxFQUFFLENBQUM7UUFDVCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGdFQUFnRSxFQUFFLFVBQVUsSUFBSTtRQUNqRixJQUFJLFFBQVEsR0FBRyxTQUFTLEdBQUcsZ0JBQWdCLENBQUM7UUFDNUMsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoRCxJQUFJLFlBQVksR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztRQUNuQyxrREFBa0Q7UUFDbEQsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLE9BQU87WUFDakMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDN0IsSUFBSSxFQUFFLENBQUM7UUFDVCxDQUFDLENBQUMsQ0FBQztRQUNILFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMscURBQXFELEVBQUUsVUFBVSxJQUFJO1FBQ3RFLElBQUksUUFBUSxHQUFHLFNBQVMsR0FBRyxzQkFBc0IsQ0FBQztRQUNsRCxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hELElBQUksWUFBWSxHQUFHLElBQUkscUJBQVMsRUFBRSxDQUFDO1FBQ25DLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsT0FBTztZQUNsRCxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsS0FBSyxhQUFhLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUVyRixNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsS0FBSyxlQUFlLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUN2RixJQUFJLEVBQUUsQ0FBQztRQUNULENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMseURBQXlELEVBQUUsVUFBVSxJQUFJO1FBQzFFLElBQUksUUFBUSxHQUFHLFNBQVMsR0FBRyx1QkFBdUIsQ0FBQztRQUNuRCxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hELElBQUksWUFBWSxHQUFHLElBQUkscUJBQVMsRUFBRSxDQUFDO1FBQ25DLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsT0FBTztZQUNsRCxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDckMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ3pDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQztZQUM3QyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztZQUNsRCxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQUM7WUFDL0MsSUFBSSxFQUFFLENBQUM7UUFDVCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDhCQUE4QixFQUFFLFVBQVUsSUFBSTtRQUMvQyxJQUFJLFFBQVEsR0FBRyxTQUFTLEdBQUcsaUJBQWlCLENBQUM7UUFDN0MsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksWUFBWSxHQUFHLElBQUkscUJBQVMsRUFBRSxDQUFDO1FBQ25DLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxPQUFPO1lBQ2pDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzdCLElBQUksRUFBRSxDQUFDO1FBQ1QsQ0FBQyxDQUFDLENBQUM7UUFDSCxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDZCQUE2QixFQUFFLFVBQVUsSUFBSTtRQUM5QyxJQUFJLFFBQVEsR0FBRyxTQUFTLEdBQUcsNEJBQTRCLENBQUM7UUFDeEQsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksWUFBWSxHQUFHLElBQUkscUJBQVMsRUFBRSxDQUFDO1FBQ25DLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNkLFlBQVksQ0FBQyxTQUFTLENBQUM7WUFDckIseUJBQXlCO1lBQ3pCLEtBQUssRUFBRSxDQUFDO1FBQ1YsQ0FBQyxDQUFDLENBQUM7UUFDSCxZQUFZLENBQUMsSUFBSSxDQUFDO1lBQ2hCLE1BQU0sQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLENBQUM7WUFDdkIsSUFBSSxFQUFFLENBQUM7UUFDVCxDQUFDLENBQUMsQ0FBQztRQUNILEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsZ0RBQWdELEVBQUUsVUFBVSxJQUFJO1FBQ2pFLElBQUksUUFBUSxHQUFHLFNBQVMsR0FBRyxvQkFBb0IsQ0FBQztRQUNoRCxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkMsSUFBSSxZQUFZLEdBQUcsSUFBSSxxQkFBUyxDQUFDO1lBQy9CLFNBQVMsRUFBRSxJQUFJO1lBQ2YsU0FBUyxFQUFFO2dCQUNULFNBQVMsRUFBRSxRQUFRO2dCQUNuQixTQUFTLEVBQUUsUUFBUTthQUNwQjtTQUNGLENBQUMsQ0FBQztRQUNILFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDO1lBQ2hDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEtBQUssUUFBUSxDQUFDLENBQUM7WUFDdEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sS0FBSyxRQUFRLENBQUMsQ0FBQztZQUN0QyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1lBQzlDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssS0FBSyxPQUFPLENBQUMsQ0FBQztZQUNwQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sS0FBSyxtQkFBbUIsQ0FBQyxDQUFDO1lBQzFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxLQUFLLE1BQU0sQ0FBQyxDQUFDO1lBQzdCLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxLQUFLLE1BQU0sQ0FBQyxDQUFDO1lBQzdCLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxDQUFDO1lBQzNCLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQzdCLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQzdCLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxPQUFPLENBQUMsQ0FBQztZQUN4QyxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUU7WUFDdEIsSUFBSSxFQUFFLENBQUM7UUFDVCxDQUFDLENBQUMsQ0FBQztRQUNILEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsa0NBQWtDLEVBQUUsVUFBVSxJQUFJO1FBQ25ELElBQUksUUFBUSxHQUFHLFNBQVMsR0FBRyxvQkFBb0IsQ0FBQztRQUNoRCxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkMsSUFBSSxZQUFZLEdBQUcsSUFBSSxxQkFBUyxDQUFDO1lBQy9CLFNBQVMsRUFBRSxLQUFLO1NBQ2pCLENBQUMsQ0FBQztRQUNILFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDO1lBQ2hDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEtBQUssUUFBUSxDQUFDLENBQUM7WUFDdEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sS0FBSyxRQUFRLENBQUMsQ0FBQztZQUN0QyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLFlBQVksQ0FBQyxDQUFDO1lBQ3RDLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssaUJBQWlCLENBQUMsQ0FBQztZQUMzQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sS0FBSyxtQkFBbUIsQ0FBQyxDQUFDO1lBQzFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLG1CQUFtQixDQUFDLENBQUM7WUFDaEQsTUFBTSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxNQUFNLENBQUMsQ0FBQztZQUNoQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxDQUFDO1lBQ2hDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxLQUFLLE1BQU0sQ0FBQyxDQUFDO1lBQzdCLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO1lBQy9CLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO1lBQy9CLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssT0FBTyxDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUM7UUFDSCxZQUFZLENBQUMsSUFBSSxDQUFDO1lBQ2hCLElBQUksRUFBRSxDQUFDO1FBQ1QsQ0FBQyxDQUFDLENBQUM7UUFDSCxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGtDQUFrQyxFQUFFLFVBQVUsSUFBSTtRQUNuRCxJQUFJLFFBQVEsR0FBRyxTQUFTLEdBQUcsNEJBQTRCLENBQUM7UUFFeEQsSUFBSSxZQUFZLEdBQUcsSUFBSSxxQkFBUyxDQUFDLEVBQ2hDLENBQUMsQ0FBQztRQUNILElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNkLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQztZQUNqQyxLQUFLLEVBQUUsQ0FBQztRQUNWLENBQUMsQ0FBQyxDQUFDO1FBQ0gsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUU7WUFDckIsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDMUIsSUFBSSxFQUFFLENBQUM7UUFDVCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN2QyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHVDQUF1QyxFQUFFLFVBQVUsSUFBSTtRQUN4RCxJQUFJLFFBQVEsR0FBRyxTQUFTLEdBQUcsaUJBQWlCLENBQUM7UUFDN0MsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksWUFBWSxHQUFHLElBQUkscUJBQVMsQ0FBQztZQUMvQixTQUFTLEVBQUUsSUFBSTtTQUNoQixDQUFDLENBQUM7UUFDSCxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQztZQUNoQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxFQUFFLENBQUMsQ0FBQztZQUN4QixNQUFNLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxDQUFDO1lBQ3hDLElBQUksRUFBRSxDQUFDO1FBQ1QsQ0FBQyxDQUFDLENBQUM7UUFDSCxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGlDQUFpQyxFQUFFLFVBQVUsSUFBSTtRQUNsRCxJQUFJLFFBQVEsR0FBRyxTQUFTLEdBQUcsdUJBQXVCLENBQUM7UUFDbkQsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBRyxDQUFDLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM3QyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRztZQUNuQixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZixNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN6QixNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDNUIsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7WUFDM0IsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxDQUFDO1lBQ2xDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxPQUFPLENBQUMsQ0FBQztZQUNoQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQztZQUM3QixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQztZQUM3QixJQUFJLEVBQUUsQ0FBQztRQUNULENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsd0JBQXdCLEVBQUUsVUFBVSxJQUFJO1FBQ3pDLElBQUksUUFBUSxHQUFHLFNBQVMsR0FBRyxtQkFBbUIsQ0FBQztRQUMvQyxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkMsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLHFCQUFTLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3BELEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHO1lBQ25CLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNmLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLGdCQUFnQixDQUFDLENBQUM7WUFDdEMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssY0FBYyxDQUFDLENBQUM7WUFDcEMsSUFBSSxFQUFFLENBQUM7UUFDVCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGdDQUFnQyxFQUFFLFVBQVUsSUFBSTtRQUNqRCxJQUFJLFFBQVEsR0FBRyxTQUFTLEdBQUcsbUJBQW1CLENBQUM7UUFDL0MsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxxQkFBUyxDQUFDO1lBQzdCLFFBQVEsRUFBRSxJQUFJO1lBQ2QsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztTQUNwQixDQUFDLENBQUMsQ0FBQztRQUNKLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHO1lBQ25CLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNmLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLGdCQUFnQixDQUFDLENBQUM7WUFDakMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssY0FBYyxDQUFDLENBQUM7WUFDL0IsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssV0FBVyxDQUFDLENBQUM7WUFDakMsSUFBSSxFQUFFLENBQUM7UUFDVCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDREQUE0RCxFQUFFLFVBQVUsSUFBSTtRQUM3RSxJQUFJLFFBQVEsR0FBRyxTQUFTLEdBQUcsc0JBQXNCLENBQUM7UUFDbEQsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxxQkFBUyxDQUFDO1lBQzdCLE9BQU8sRUFBRSxFQUFFO1NBQ1osQ0FBQyxDQUFDLENBQUM7UUFDSixFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRztZQUNuQixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZixNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN6QixNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxjQUFjLENBQUMsQ0FBQztZQUNwQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxPQUFPLENBQUMsQ0FBQztZQUM3QixJQUFJLEVBQUUsQ0FBQztRQUNULENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsNkNBQTZDLEVBQUUsVUFBVSxJQUFJO1FBQzlELElBQUksUUFBUSxHQUFHLFNBQVMsR0FBRywyQkFBMkIsQ0FBQztRQUN2RCxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkMsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLHFCQUFTLENBQUM7WUFDN0IsUUFBUSxFQUFFLElBQUk7WUFDZCxPQUFPLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztZQUN4QixTQUFTLEVBQUUsSUFBSTtTQUNoQixDQUFDLENBQUMsQ0FBQztRQUNKLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHO1lBQ25CLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVmLDBCQUEwQjtZQUMxQixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxPQUFPLENBQUMsQ0FBQztZQUN4QixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUNuQixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDdEIsSUFBSSxFQUFFLENBQUM7UUFDVCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGdGQUFnRixFQUFFLFVBQVUsSUFBSTtRQUNqRyxJQUFJLFFBQVEsR0FBRyxTQUFTLEdBQUcsc0JBQXNCLENBQUM7UUFDbEQsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxFQUFFLGFBQWEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRTdELElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxxQkFBUyxDQUFDO1lBQzdCLElBQUksRUFBRSxLQUFLO1NBQ1osQ0FBQyxDQUFDLENBQUM7UUFDSixFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRztZQUNuQixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZixNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN6QixNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQztZQUN6QixNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUMsQ0FBQztZQUN2QixNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDakMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQy9CLElBQUksRUFBRSxDQUFDO1FBQ1QsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxnRkFBZ0YsRUFBRSxVQUFVLElBQUk7UUFDakcsSUFBSSxRQUFRLEdBQUcsU0FBUyxHQUFHLHNCQUFzQixDQUFDO1FBQ2xELElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsRUFBRSxhQUFhLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUU3RCxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUkscUJBQVMsQ0FBQztZQUM3QixJQUFJLEVBQUUsS0FBSztTQUNaLENBQUMsQ0FBQyxDQUFDO1FBQ0osRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUc7WUFDbkIsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2YsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDekIsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDLENBQUM7WUFDekIsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUM7WUFDdkIsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ2pDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUMvQixJQUFJLEVBQUUsQ0FBQztRQUNULENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsNERBQTRELEVBQUUsVUFBVSxJQUFJO1FBQzdFLElBQUksUUFBUSxHQUFHLFNBQVMsR0FBRyxzQkFBc0IsQ0FBQztRQUNsRCxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFdkMsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLHFCQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQ2xDLElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHO1lBQ3pDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDMUIsRUFBRSxDQUFDLElBQUksQ0FBQztZQUNOLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsNEJBQTRCLENBQUMsQ0FBQztZQUNyRSxJQUFJLEVBQUUsQ0FBQztRQUNULENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsMERBQTBELEVBQUUsVUFBVSxJQUFJO1FBQzNFLElBQUksUUFBUSxHQUFHLFNBQVMsR0FBRyxtQkFBbUIsQ0FBQztRQUMvQyxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFdkMsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLHFCQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQ2xDLElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHO1lBQ3pDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDMUIsRUFBRSxDQUFDLElBQUksQ0FBQztZQUNOLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsNEJBQTRCLENBQUMsQ0FBQztZQUNyRSxJQUFJLEVBQUUsQ0FBQztRQUNULENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsb0RBQW9ELEVBQUUsVUFBVSxJQUFJO1FBQ3JFLElBQUksUUFBUSxHQUFHLFNBQVMsR0FBRyxxQkFBcUIsQ0FBQztRQUNqRCxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkMsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLHFCQUFTLENBQUM7WUFDN0IsSUFBSSxFQUFFLEtBQUs7U0FDWixDQUFDLENBQUMsQ0FBQztRQUNKLEVBQUUsQ0FBQyxJQUFJLENBQUUsVUFBVSxHQUFHO1lBQ3BCLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVmLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxLQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDO1lBQ3pCLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxDQUFDO1lBQ3ZCLElBQUksRUFBRSxDQUFDO1FBQ1QsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb252ZXJ0ZXJ9IGZyb20gXCIuLi9zcmMvQ29udmVydGVyXCI7XG5pbXBvcnQgY3N2IGZyb20gXCIuLi9zcmNcIjtcbnZhciBhc3NlcnQgPSByZXF1aXJlKFwiYXNzZXJ0XCIpO1xudmFyIGZzID0gcmVxdWlyZShcImZzXCIpO1xudmFyIHNhbmRib3ggPSByZXF1aXJlKFwic2lub25cIikuc2FuZGJveC5jcmVhdGUoKTtcbnZhciBmaWxlID0gX19kaXJuYW1lICsgXCIvZGF0YS90ZXN0RGF0YVwiO1xudmFyIHRyYWlsQ29tbWFEYXRhID0gX19kaXJuYW1lICsgXCIvZGF0YS90cmFpbGluZ0NvbW1hXCI7XG5kZXNjcmliZShcIkNTViBDb252ZXJ0ZXJcIiwgZnVuY3Rpb24gKCkge1xuICBhZnRlckVhY2goZnVuY3Rpb24gKCkge1xuICAgIHNhbmRib3gucmVzdG9yZSgpO1xuICB9KTtcblxuICBpdChcInNob3VsZCBjcmVhdGUgbmV3IGluc3RhbmNlIG9mIGNzdlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG9iaiA9IG5ldyBDb252ZXJ0ZXIoKTtcbiAgICBhc3NlcnQob2JqKTtcbiAgfSk7XG5cbiAgaXQoXCJzaG91bGQgcmVhZCBmcm9tIGEgc3RyZWFtXCIsIGZ1bmN0aW9uIChkb25lKSB7XG4gICAgdmFyIG9iaiA9IG5ldyBDb252ZXJ0ZXIoKTtcbiAgICB2YXIgc3RyZWFtID0gZnMuY3JlYXRlUmVhZFN0cmVhbShmaWxlKTtcbiAgICBvYmoudGhlbihmdW5jdGlvbiAob2JqKSB7XG4gICAgICBhc3NlcnQuZXF1YWwob2JqLmxlbmd0aCwgMik7XG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gICAgc3RyZWFtLnBpcGUob2JqKTtcbiAgfSk7XG5cbiAgaXQoXCJzaG91bGQgY2FsbCBvbk5leHQgb25jZSBhIHJvdyBpcyBwYXJzZWQuXCIsIGZ1bmN0aW9uIChkb25lKSB7XG4gICAgdmFyIG9iaiA9IG5ldyBDb252ZXJ0ZXIoKTtcbiAgICB2YXIgc3RyZWFtID0gZnMuY3JlYXRlUmVhZFN0cmVhbShmaWxlKTtcbiAgICB2YXIgY2FsbGVkID0gZmFsc2U7XG4gICAgb2JqLnN1YnNjcmliZShmdW5jdGlvbiAocmVzdWx0Um93KSB7XG4gICAgICBhc3NlcnQocmVzdWx0Um93KTtcbiAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgfSk7XG4gICAgb2JqLm9uKFwiZG9uZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhc3NlcnQoY2FsbGVkKTtcbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgICBzdHJlYW0ucGlwZShvYmopO1xuICB9KTtcblxuICBpdChcInNob3VsZCBlbWl0IGVuZF9wYXJzZWQgbWVzc2FnZSBvbmNlIGl0IGlzIGZpbmlzaGVkLlwiLCBmdW5jdGlvbiAoZG9uZSkge1xuICAgIHZhciBvYmogPSBuZXcgQ29udmVydGVyKCk7XG4gICAgb2JqLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgYXNzZXJ0KHJlc3VsdCk7XG4gICAgICBhc3NlcnQocmVzdWx0Lmxlbmd0aCA9PT0gMik7XG4gICAgICBhc3NlcnQocmVzdWx0WzBdLmRhdGUpO1xuICAgICAgYXNzZXJ0KHJlc3VsdFswXS5lbXBsb3llZSk7XG4gICAgICBhc3NlcnQocmVzdWx0WzBdLmVtcGxveWVlLm5hbWUpO1xuICAgICAgYXNzZXJ0KHJlc3VsdFswXS5lbXBsb3llZS5hZ2UpO1xuICAgICAgYXNzZXJ0KHJlc3VsdFswXS5lbXBsb3llZS5udW1iZXIpO1xuICAgICAgYXNzZXJ0KHJlc3VsdFswXS5lbXBsb3llZS5rZXkubGVuZ3RoID09PSAyKTtcbiAgICAgIGFzc2VydChyZXN1bHRbMF0uYWRkcmVzcy5sZW5ndGggPT09IDIpO1xuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICAgIGZzLmNyZWF0ZVJlYWRTdHJlYW0oZmlsZSkucGlwZShvYmopO1xuICB9KTtcblxuICBpdChcInNob3VsZCBoYW5kbGUgdHJhbGluZyBjb21tYSBncmFjZWZ1bGx5XCIsIGZ1bmN0aW9uIChkb25lKSB7XG4gICAgdmFyIHN0cmVhbSA9IGZzLmNyZWF0ZVJlYWRTdHJlYW0odHJhaWxDb21tYURhdGEpO1xuICAgIHZhciBvYmogPSBuZXcgQ29udmVydGVyKCk7XG4gICAgb2JqLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgYXNzZXJ0KHJlc3VsdCk7XG4gICAgICBhc3NlcnQocmVzdWx0Lmxlbmd0aCA+IDApO1xuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICAgIHN0cmVhbS5waXBlKG9iaik7XG4gIH0pO1xuXG4gIGl0KFwic2hvdWxkIGhhbmRsZSBjb21tYSBpbiBjb2x1bW4gd2hpY2ggaXMgc3Vycm91bmRlZCBieSBxb3V0ZXNcIiwgZnVuY3Rpb24gKGRvbmUpIHtcbiAgICB2YXIgdGVzdERhdGEgPSBfX2Rpcm5hbWUgKyBcIi9kYXRhL2RhdGFXaXRoQ29tbWFcIjtcbiAgICB2YXIgcnMgPSBmcy5jcmVhdGVSZWFkU3RyZWFtKHRlc3REYXRhKTtcbiAgICB2YXIgb2JqID0gbmV3IENvbnZlcnRlcih7XG4gICAgICBcInF1b3RlXCI6IFwiI1wiXG4gICAgfSk7XG4gICAgb2JqLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgYXNzZXJ0KHJlc3VsdFswXS5jb2wxID09PSBcIlxcXCJNaW5pLiBTZWN0dFwiKTtcbiAgICAgIGFzc2VydC5lcXVhbChyZXN1bHRbM10uY29sMiwgXCIxMjUwMDEsZmVudmtkc2ZcIik7XG4gICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICAgIHJzLnBpcGUob2JqKTtcbiAgfSk7XG5cbiAgaXQoXCJzaG91bGQgYmUgYWJsZSB0byBjb252ZXJ0IGEgY3N2IHRvIGNvbHVtbiBhcnJheSBkYXRhXCIsIGZ1bmN0aW9uIChkb25lKSB7XG4gICAgdmFyIGNvbHVtQXJyRGF0YSA9IF9fZGlybmFtZSArIFwiL2RhdGEvY29sdW1uQXJyYXlcIjtcbiAgICB2YXIgcnMgPSBmcy5jcmVhdGVSZWFkU3RyZWFtKGNvbHVtQXJyRGF0YSk7XG4gICAgdmFyIHJlc3VsdDphbnkgPSB7fTtcbiAgICB2YXIgY3N2Q29udmVydGVyID0gbmV3IENvbnZlcnRlcigpO1xuICAgIC8vZW5kX3BhcnNlZCB3aWxsIGJlIGVtaXR0ZWQgb25jZSBwYXJzaW5nIGZpbmlzaGVkXG4gICAgY3N2Q29udmVydGVyLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgYXNzZXJ0KHJlc3VsdC5USU1FU1RBTVAubGVuZ3RoID09PSA1KTtcbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcblxuICAgIC8vcmVjb3JkX3BhcnNlZCB3aWxsIGJlIGVtaXR0ZWQgZWFjaCB0aW1lIGEgcm93IGhhcyBiZWVuIHBhcnNlZC5cbiAgICBjc3ZDb252ZXJ0ZXIuc3Vic2NyaWJlKGZ1bmN0aW9uIChyZXN1bHRSb3csIHJvd0luZGV4KSB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gcmVzdWx0Um93KSB7XG4gICAgICAgIGlmIChyZXN1bHRSb3cuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIGlmICghcmVzdWx0W2tleV0gfHwgIShyZXN1bHRba2V5XSBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgICAgICAgcmVzdWx0W2tleV0gPSBbXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzdWx0W2tleV1bcm93SW5kZXhdID0gcmVzdWx0Um93W2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBycy5waXBlKGNzdkNvbnZlcnRlcik7XG4gIH0pO1xuXG4gIGl0KFwic2hvdWxkIGJlIGFibGUgdG8gY29udmVydCBjc3Ygc3RyaW5nIGRpcmVjdGx5XCIsIGZ1bmN0aW9uIChkb25lKSB7XG4gICAgdmFyIHRlc3REYXRhID0gX19kaXJuYW1lICsgXCIvZGF0YS90ZXN0RGF0YVwiO1xuICAgIHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKHRlc3REYXRhKS50b1N0cmluZygpO1xuICAgIHZhciBjc3ZDb252ZXJ0ZXIgPSBuZXcgQ29udmVydGVyKCk7XG4gICAgLy9lbmRfcGFyc2VkIHdpbGwgYmUgZW1pdHRlZCBvbmNlIHBhcnNpbmcgZmluaXNoZWRcbiAgICBjc3ZDb252ZXJ0ZXIudGhlbihmdW5jdGlvbiAoanNvbk9iaikge1xuICAgICAgYXNzZXJ0LmVxdWFsKGpzb25PYmoubGVuZ3RoLCAyKTtcbiAgICB9KTtcbiAgICBjc3ZDb252ZXJ0ZXIuZnJvbVN0cmluZyhkYXRhKS50aGVuKGZ1bmN0aW9uIChqc29uT2JqKSB7XG4gICAgICBhc3NlcnQoanNvbk9iai5sZW5ndGggPT09IDIpO1xuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9KTtcblxuICBpdChcInNob3VsZCBiZSBhYmxlIHRvIGNvbnZlcnQgY3N2IHN0cmluZyB3aXRoIGVycm9yXCIsIGZ1bmN0aW9uIChkb25lKSB7XG4gICAgdmFyIHRlc3REYXRhID0gX19kaXJuYW1lICsgXCIvZGF0YS9kYXRhV2l0aFVuY2xvc2VkUXVvdGVzXCI7XG4gICAgdmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmModGVzdERhdGEpLnRvU3RyaW5nKCk7XG4gICAgdmFyIGNzdkNvbnZlcnRlciA9IG5ldyBDb252ZXJ0ZXIoKTtcbiAgICBjc3ZDb252ZXJ0ZXIuZnJvbVN0cmluZyhkYXRhKS50aGVuKHVuZGVmaW5lZCwgZnVuY3Rpb24gKGVycikge1xuICAgICAgYXNzZXJ0KGVycik7XG4gICAgICBhc3NlcnQuZXF1YWwoZXJyLmVyciwgXCJ1bmNsb3NlZF9xdW90ZVwiKTtcbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgaXQoXCJzaG91bGQgYmUgYWJsZSB0byBjb252ZXJ0IGNzdiBzdHJpbmcgd2l0aG91dCBjYWxsYmFjayBwcm92aWRlZFwiLCBmdW5jdGlvbiAoZG9uZSkge1xuICAgIHZhciB0ZXN0RGF0YSA9IF9fZGlybmFtZSArIFwiL2RhdGEvdGVzdERhdGFcIjtcbiAgICB2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyh0ZXN0RGF0YSkudG9TdHJpbmcoKTtcbiAgICB2YXIgY3N2Q29udmVydGVyID0gbmV3IENvbnZlcnRlcigpO1xuICAgIC8vZW5kX3BhcnNlZCB3aWxsIGJlIGVtaXR0ZWQgb25jZSBwYXJzaW5nIGZpbmlzaGVkXG4gICAgY3N2Q29udmVydGVyLnRoZW4oZnVuY3Rpb24gKGpzb25PYmopIHtcbiAgICAgIGFzc2VydChqc29uT2JqLmxlbmd0aCA9PT0gMik7XG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gICAgY3N2Q29udmVydGVyLmZyb21TdHJpbmcoZGF0YSk7XG4gIH0pO1xuXG4gIGl0KFwic2hvdWxkIGJlIGFibGUgdG8gaGFuZGxlIGNvbHVtbnMgd2l0aCBkb3VibGUgcXVvdGVzXCIsIGZ1bmN0aW9uIChkb25lKSB7XG4gICAgdmFyIHRlc3REYXRhID0gX19kaXJuYW1lICsgXCIvZGF0YS9kYXRhV2l0aFFvdXRlc1wiO1xuICAgIHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKHRlc3REYXRhKS50b1N0cmluZygpO1xuICAgIHZhciBjc3ZDb252ZXJ0ZXIgPSBuZXcgQ29udmVydGVyKCk7XG4gICAgY3N2Q29udmVydGVyLmZyb21TdHJpbmcoZGF0YSkudGhlbihmdW5jdGlvbiAoanNvbk9iaikge1xuICAgICAgYXNzZXJ0KGpzb25PYmpbMF0uVElNRVNUQU1QID09PSAnMTM5NTQyNjRcIjIyJywgSlNPTi5zdHJpbmdpZnkoanNvbk9ialswXS5USU1FU1RBTVApKTtcblxuICAgICAgYXNzZXJ0KGpzb25PYmpbMV0uVElNRVNUQU1QID09PSAnYWJjLCBkZWYsIGNjYycsIEpTT04uc3RyaW5naWZ5KGpzb25PYmpbMV0uVElNRVNUQU1QKSk7XG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGl0KFwic2hvdWxkIGJlIGFibGUgdG8gaGFuZGxlIGNvbHVtbnMgd2l0aCB0d28gZG91YmxlIHF1b3Rlc1wiLCBmdW5jdGlvbiAoZG9uZSkge1xuICAgIHZhciB0ZXN0RGF0YSA9IF9fZGlybmFtZSArIFwiL2RhdGEvdHdvZG91YmxlcXVvdGVzXCI7XG4gICAgdmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmModGVzdERhdGEpLnRvU3RyaW5nKCk7XG4gICAgdmFyIGNzdkNvbnZlcnRlciA9IG5ldyBDb252ZXJ0ZXIoKTtcbiAgICBjc3ZDb252ZXJ0ZXIuZnJvbVN0cmluZyhkYXRhKS50aGVuKGZ1bmN0aW9uIChqc29uT2JqKSB7XG4gICAgICBhc3NlcnQuZXF1YWwoanNvbk9ialswXS50aXRsZSwgXCJcXFwiXCIpO1xuICAgICAgYXNzZXJ0LmVxdWFsKGpzb25PYmpbMF0uZGF0YSwgXCJ4eWFiY2RlXCIpO1xuICAgICAgYXNzZXJ0LmVxdWFsKGpzb25PYmpbMF0udXVpZCwgXCJmZWphbFxcXCJlaWZhXCIpO1xuICAgICAgYXNzZXJ0LmVxdWFsKGpzb25PYmpbMF0uZmllbGRBLCBcImJuZWpcXFwiXFxcImZhbGtmZVwiKTtcbiAgICAgIGFzc2VydC5lcXVhbChqc29uT2JqWzBdLmZpZWxkQiwgXCJcXFwiZWlzamZlc1xcXCJcIik7XG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGl0KFwic2hvdWxkIGhhbmRsZSBlbXB0eSBjc3YgZmlsZVwiLCBmdW5jdGlvbiAoZG9uZSkge1xuICAgIHZhciB0ZXN0RGF0YSA9IF9fZGlybmFtZSArIFwiL2RhdGEvZW1wdHlGaWxlXCI7XG4gICAgdmFyIHJzID0gZnMuY3JlYXRlUmVhZFN0cmVhbSh0ZXN0RGF0YSk7XG4gICAgdmFyIGNzdkNvbnZlcnRlciA9IG5ldyBDb252ZXJ0ZXIoKTtcbiAgICBjc3ZDb252ZXJ0ZXIudGhlbihmdW5jdGlvbiAoanNvbk9iaikge1xuICAgICAgYXNzZXJ0KGpzb25PYmoubGVuZ3RoID09PSAwKTtcbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgICBycy5waXBlKGNzdkNvbnZlcnRlcik7XG4gIH0pO1xuXG4gIGl0KFwic2hvdWxkIHBhcnNlIGxhcmdlIGNzdiBmaWxlXCIsIGZ1bmN0aW9uIChkb25lKSB7XG4gICAgdmFyIHRlc3REYXRhID0gX19kaXJuYW1lICsgXCIvZGF0YS9sYXJnZS1jc3Ytc2FtcGxlLmNzdlwiO1xuICAgIHZhciBycyA9IGZzLmNyZWF0ZVJlYWRTdHJlYW0odGVzdERhdGEpO1xuICAgIHZhciBjc3ZDb252ZXJ0ZXIgPSBuZXcgQ29udmVydGVyKCk7XG4gICAgdmFyIGNvdW50ID0gMDtcbiAgICBjc3ZDb252ZXJ0ZXIuc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vY29uc29sZS5sb2coYXJndW1lbnRzKTtcbiAgICAgIGNvdW50Kys7XG4gICAgfSk7XG4gICAgY3N2Q29udmVydGVyLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgYXNzZXJ0KGNvdW50ID09PSA1MjkwKTtcbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgICBycy5waXBlKGNzdkNvbnZlcnRlcik7XG4gIH0pO1xuXG4gIGl0KFwic2hvdWxkIHBhcnNlIGRhdGEgYW5kIGNvdmVydCB0byBzcGVjaWZpYyB0eXBlc1wiLCBmdW5jdGlvbiAoZG9uZSkge1xuICAgIHZhciB0ZXN0RGF0YSA9IF9fZGlybmFtZSArIFwiL2RhdGEvZGF0YVdpdGhUeXBlXCI7XG4gICAgdmFyIHJzID0gZnMuY3JlYXRlUmVhZFN0cmVhbSh0ZXN0RGF0YSk7XG4gICAgdmFyIGNzdkNvbnZlcnRlciA9IG5ldyBDb252ZXJ0ZXIoe1xuICAgICAgY2hlY2tUeXBlOiB0cnVlLFxuICAgICAgY29sUGFyc2VyOiB7XG4gICAgICAgIFwiY29sdW1uNlwiOiBcInN0cmluZ1wiLFxuICAgICAgICBcImNvbHVtbjdcIjogXCJzdHJpbmdcIlxuICAgICAgfVxuICAgIH0pO1xuICAgIGNzdkNvbnZlcnRlci5zdWJzY3JpYmUoZnVuY3Rpb24gKGQpIHtcbiAgICAgIGFzc2VydCh0eXBlb2YgZC5jb2x1bW4xID09PSBcIm51bWJlclwiKTtcbiAgICAgIGFzc2VydCh0eXBlb2YgZC5jb2x1bW4yID09PSBcInN0cmluZ1wiKTtcbiAgICAgIGFzc2VydC5lcXVhbChkW1wiY29sdW1lNFwiXSwgXCJzb21laW52YWxpZGRhdGVcIik7XG4gICAgICBhc3NlcnQoZC5jb2x1bW41LmhlbGxvID09PSBcIndvcmxkXCIpO1xuICAgICAgYXNzZXJ0KGQuY29sdW1uNiA9PT0gJ3tcImhlbGxvXCI6XCJ3b3JsZFwifScpO1xuICAgICAgYXNzZXJ0KGQuY29sdW1uNyA9PT0gXCIxMjM0XCIpO1xuICAgICAgYXNzZXJ0KGQuY29sdW1uOCA9PT0gXCJhYmNkXCIpO1xuICAgICAgYXNzZXJ0KGQuY29sdW1uOSA9PT0gdHJ1ZSk7XG4gICAgICBhc3NlcnQoZC5jb2x1bW4xMFswXSA9PT0gMjMpO1xuICAgICAgYXNzZXJ0KGQuY29sdW1uMTBbMV0gPT09IDMxKTtcbiAgICAgIGFzc2VydChkLmNvbHVtbjExWzBdLmhlbGxvID09PSBcIndvcmxkXCIpO1xuICAgICAgYXNzZXJ0KGRbXCJuYW1lIyFcIl0gPT09IGZhbHNlKTtcbiAgICB9KTtcbiAgICBjc3ZDb252ZXJ0ZXIub24oXCJkb25lXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgICBycy5waXBlKGNzdkNvbnZlcnRlcik7XG4gIH0pO1xuXG4gIGl0KFwic2hvdWxkIHR1cm4gb2ZmIGZpZWxkIHR5cGUgY2hlY2tcIiwgZnVuY3Rpb24gKGRvbmUpIHtcbiAgICB2YXIgdGVzdERhdGEgPSBfX2Rpcm5hbWUgKyBcIi9kYXRhL2RhdGFXaXRoVHlwZVwiO1xuICAgIHZhciBycyA9IGZzLmNyZWF0ZVJlYWRTdHJlYW0odGVzdERhdGEpO1xuICAgIHZhciBjc3ZDb252ZXJ0ZXIgPSBuZXcgQ29udmVydGVyKHtcbiAgICAgIGNoZWNrVHlwZTogZmFsc2VcbiAgICB9KTtcbiAgICBjc3ZDb252ZXJ0ZXIuc3Vic2NyaWJlKGZ1bmN0aW9uIChkKSB7XG4gICAgICBhc3NlcnQodHlwZW9mIGQuY29sdW1uMSA9PT0gXCJzdHJpbmdcIik7XG4gICAgICBhc3NlcnQodHlwZW9mIGQuY29sdW1uMiA9PT0gXCJzdHJpbmdcIik7XG4gICAgICBhc3NlcnQoZFtcImNvbHVtbjNcIl0gPT09IFwiMjAxMi0wMS0wMVwiKTtcbiAgICAgIGFzc2VydChkW1wiY29sdW1lNFwiXSA9PT0gXCJzb21laW52YWxpZGRhdGVcIik7XG4gICAgICBhc3NlcnQoZC5jb2x1bW41ID09PSAne1wiaGVsbG9cIjpcIndvcmxkXCJ9Jyk7XG4gICAgICBhc3NlcnQuZXF1YWwoZFtcImNvbHVtbjZcIl0sICd7XCJoZWxsb1wiOlwid29ybGRcIn0nKTtcbiAgICAgIGFzc2VydChkW1wiY29sdW1uN1wiXSA9PT0gXCIxMjM0XCIpO1xuICAgICAgYXNzZXJ0KGRbXCJjb2x1bW44XCJdID09PSBcImFiY2RcIik7XG4gICAgICBhc3NlcnQoZC5jb2x1bW45ID09PSBcInRydWVcIik7XG4gICAgICBhc3NlcnQoZC5jb2x1bW4xMFswXSA9PT0gXCIyM1wiKTtcbiAgICAgIGFzc2VydChkLmNvbHVtbjEwWzFdID09PSBcIjMxXCIpO1xuICAgICAgYXNzZXJ0KGRbXCJuYW1lIyFcIl0gPT09ICdmYWxzZScpO1xuICAgIH0pO1xuICAgIGNzdkNvbnZlcnRlci50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgICBycy5waXBlKGNzdkNvbnZlcnRlcik7XG4gIH0pO1xuXG4gIGl0KFwic2hvdWxkIGVtaXQgZGF0YSBldmVudCBjb3JyZWN0bHlcIiwgZnVuY3Rpb24gKGRvbmUpIHtcbiAgICB2YXIgdGVzdERhdGEgPSBfX2Rpcm5hbWUgKyBcIi9kYXRhL2xhcmdlLWNzdi1zYW1wbGUuY3N2XCI7XG5cbiAgICB2YXIgY3N2Q29udmVydGVyID0gbmV3IENvbnZlcnRlcih7XG4gICAgfSk7XG4gICAgdmFyIGNvdW50ID0gMDtcbiAgICBjc3ZDb252ZXJ0ZXIub24oXCJkYXRhXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICBjb3VudCsrO1xuICAgIH0pO1xuICAgIGNzdkNvbnZlcnRlci5vbihcImVuZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhc3NlcnQuZXF1YWwoY291bnQsIDUyOTApO1xuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICAgIHZhciBycyA9IGZzLmNyZWF0ZVJlYWRTdHJlYW0odGVzdERhdGEpO1xuICAgIHJzLnBpcGUoY3N2Q29udmVydGVyKTtcbiAgfSk7XG5cbiAgaXQoXCJzaG91bGQgcHJvY2VzcyBjb2x1bW4gd2l0aCBsaW5lYnJlYWtzXCIsIGZ1bmN0aW9uIChkb25lKSB7XG4gICAgdmFyIHRlc3REYXRhID0gX19kaXJuYW1lICsgXCIvZGF0YS9saW5lQnJlYWtcIjtcbiAgICB2YXIgcnMgPSBmcy5jcmVhdGVSZWFkU3RyZWFtKHRlc3REYXRhKTtcbiAgICB2YXIgY3N2Q29udmVydGVyID0gbmV3IENvbnZlcnRlcih7XG4gICAgICBjaGVja1R5cGU6IHRydWVcbiAgICB9KTtcbiAgICBjc3ZDb252ZXJ0ZXIuc3Vic2NyaWJlKGZ1bmN0aW9uIChkKSB7XG4gICAgICBhc3NlcnQoZC5QZXJpb2QgPT09IDEzKTtcbiAgICAgIGFzc2VydChkW1wiQXBwYXJlbnQgYWdlXCJdID09PSBcIlVua25vd25cIik7XG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gICAgcnMucGlwZShjc3ZDb252ZXJ0ZXIpO1xuICB9KTtcblxuICBpdChcImJlIGFibGUgdG8gaWdub3JlIGVtcHR5IGNvbHVtbnNcIiwgZnVuY3Rpb24gKGRvbmUpIHtcbiAgICB2YXIgdGVzdERhdGEgPSBfX2Rpcm5hbWUgKyBcIi9kYXRhL2RhdGFJZ25vcmVFbXB0eVwiO1xuICAgIHZhciBycyA9IGZzLmNyZWF0ZVJlYWRTdHJlYW0odGVzdERhdGEpO1xuICAgIHZhciBzdCA9IHJzLnBpcGUoY3N2KHsgaWdub3JlRW1wdHk6IHRydWUgfSkpO1xuICAgIHN0LnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgdmFyIGogPSByZXNbMF07XG4gICAgICBhc3NlcnQocmVzLmxlbmd0aCA9PT0gMyk7XG4gICAgICBhc3NlcnQoai5jb2wyLmxlbmd0aCA9PT0gMik7XG4gICAgICBhc3NlcnQoai5jb2wyWzFdID09PSBcImQzXCIpO1xuICAgICAgYXNzZXJ0KGouY29sNC5jb2wzID09PSB1bmRlZmluZWQpO1xuICAgICAgYXNzZXJ0KGouY29sNC5jb2w1ID09PSBcIndvcmxkXCIpO1xuICAgICAgYXNzZXJ0KHJlc1sxXS5jb2wxID09PSBcImQyXCIpO1xuICAgICAgYXNzZXJ0KHJlc1syXS5jb2wxID09PSBcImQ0XCIpO1xuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9KTtcblxuICBpdChcInNob3VsZCBhbGxvdyBubyBoZWFkZXJcIiwgZnVuY3Rpb24gKGRvbmUpIHtcbiAgICB2YXIgdGVzdERhdGEgPSBfX2Rpcm5hbWUgKyBcIi9kYXRhL25vaGVhZGVyY3N2XCI7XG4gICAgdmFyIHJzID0gZnMuY3JlYXRlUmVhZFN0cmVhbSh0ZXN0RGF0YSk7XG4gICAgdmFyIHN0ID0gcnMucGlwZShuZXcgQ29udmVydGVyKHsgbm9oZWFkZXI6IHRydWUgfSkpO1xuICAgIHN0LnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgdmFyIGogPSByZXNbMF07XG4gICAgICBhc3NlcnQocmVzLmxlbmd0aCA9PT0gNSk7XG4gICAgICBhc3NlcnQoai5maWVsZDEgPT09IFwiQ0MxMDItUERNSS0wMDFcIik7XG4gICAgICBhc3NlcnQoai5maWVsZDIgPT09IFwiZUNsYXNzXzUuMS4zXCIpO1xuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9KTtcblxuICBpdChcInNob3VsZCBhbGxvdyBjdXN0b21pc2VkIGhlYWRlclwiLCBmdW5jdGlvbiAoZG9uZSkge1xuICAgIHZhciB0ZXN0RGF0YSA9IF9fZGlybmFtZSArIFwiL2RhdGEvbm9oZWFkZXJjc3ZcIjtcbiAgICB2YXIgcnMgPSBmcy5jcmVhdGVSZWFkU3RyZWFtKHRlc3REYXRhKTtcbiAgICB2YXIgc3QgPSBycy5waXBlKG5ldyBDb252ZXJ0ZXIoe1xuICAgICAgbm9oZWFkZXI6IHRydWUsXG4gICAgICBoZWFkZXJzOiBbXCJhXCIsIFwiYlwiXVxuICAgIH0pKTtcbiAgICBzdC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgIHZhciBqID0gcmVzWzBdO1xuICAgICAgYXNzZXJ0KHJlcy5sZW5ndGggPT09IDUpO1xuICAgICAgYXNzZXJ0KGouYSA9PT0gXCJDQzEwMi1QRE1JLTAwMVwiKTtcbiAgICAgIGFzc2VydChqLmIgPT09IFwiZUNsYXNzXzUuMS4zXCIpO1xuICAgICAgYXNzZXJ0KGouZmllbGQzID09PSBcIjEwLzMvMjAxNFwiKTtcbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgaXQoXCJzaG91bGQgYWxsb3cgY3VzdG9taXNlZCBoZWFkZXIgdG8gb3ZlcnJpZGUgZXhpc3RpbmcgaGVhZGVyXCIsIGZ1bmN0aW9uIChkb25lKSB7XG4gICAgdmFyIHRlc3REYXRhID0gX19kaXJuYW1lICsgXCIvZGF0YS9jb21wbGV4SlNPTkNTVlwiO1xuICAgIHZhciBycyA9IGZzLmNyZWF0ZVJlYWRTdHJlYW0odGVzdERhdGEpO1xuICAgIHZhciBzdCA9IHJzLnBpcGUobmV3IENvbnZlcnRlcih7XG4gICAgICBoZWFkZXJzOiBbXVxuICAgIH0pKTtcbiAgICBzdC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgIHZhciBqID0gcmVzWzBdO1xuICAgICAgYXNzZXJ0KHJlcy5sZW5ndGggPT09IDIpO1xuICAgICAgYXNzZXJ0KGouZmllbGQxID09PSBcIkZvb2QgRmFjdG9yeVwiKTtcbiAgICAgIGFzc2VydChqLmZpZWxkMiA9PT0gXCJPc2NhclwiKTtcbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgaXQoXCJzaG91bGQgaGFuZGxlIHdoZW4gdGhlcmUgaXMgYW4gZW1wdHkgc3RyaW5nXCIsIGZ1bmN0aW9uIChkb25lKSB7XG4gICAgdmFyIHRlc3REYXRhID0gX19kaXJuYW1lICsgXCIvZGF0YS9kYXRhV2l0aEVtcHR5U3RyaW5nXCI7XG4gICAgdmFyIHJzID0gZnMuY3JlYXRlUmVhZFN0cmVhbSh0ZXN0RGF0YSk7XG4gICAgdmFyIHN0ID0gcnMucGlwZShuZXcgQ29udmVydGVyKHtcbiAgICAgIG5vaGVhZGVyOiB0cnVlLFxuICAgICAgaGVhZGVyczogW1wiYVwiLCBcImJcIiwgXCJjXCJdLFxuICAgICAgY2hlY2tUeXBlOiB0cnVlXG4gICAgfSkpO1xuICAgIHN0LnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgdmFyIGogPSByZXNbMF07XG5cbiAgICAgIC8vIGFzc2VydChyZXMubGVuZ3RoPT09Mik7XG4gICAgICBhc3NlcnQoai5hID09PSBcImdyZWVuXCIpO1xuICAgICAgYXNzZXJ0KGouYiA9PT0gNDApO1xuICAgICAgYXNzZXJ0LmVxdWFsKGouYywgXCJcIik7XG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGl0KFwic2hvdWxkIGRldGVjdCBlb2wgY29ycmVjdGx5IHdoZW4gZmlyc3QgY2h1bmsgaXMgc21hbGxlciB0aGFuIGhlYWRlciByb3cgbGVuZ3RoXCIsIGZ1bmN0aW9uIChkb25lKSB7XG4gICAgdmFyIHRlc3REYXRhID0gX19kaXJuYW1lICsgXCIvZGF0YS9kYXRhTm9UcmltQ1JMRlwiO1xuICAgIHZhciBycyA9IGZzLmNyZWF0ZVJlYWRTdHJlYW0odGVzdERhdGEsIHsgaGlnaFdhdGVyTWFyazogMyB9KTtcblxuICAgIHZhciBzdCA9IHJzLnBpcGUobmV3IENvbnZlcnRlcih7XG4gICAgICB0cmltOiBmYWxzZVxuICAgIH0pKTtcbiAgICBzdC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgIHZhciBqID0gcmVzWzBdO1xuICAgICAgYXNzZXJ0KHJlcy5sZW5ndGggPT09IDIpO1xuICAgICAgYXNzZXJ0KGoubmFtZSA9PT0gXCJqb2VcIik7XG4gICAgICBhc3NlcnQoai5hZ2UgPT09IFwiMjBcIik7XG4gICAgICBhc3NlcnQuZXF1YWwocmVzWzFdLm5hbWUsIFwic2FtXCIpO1xuICAgICAgYXNzZXJ0LmVxdWFsKHJlc1sxXS5hZ2UsIFwiMzBcIik7XG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGl0KFwic2hvdWxkIGRldGVjdCBlb2wgY29ycmVjdGx5IHdoZW4gZmlyc3QgY2h1bmsgZW5kcyBpbiBtaWRkbGUgb2YgQ1JMRiBsaW5lIGJyZWFrXCIsIGZ1bmN0aW9uIChkb25lKSB7XG4gICAgdmFyIHRlc3REYXRhID0gX19kaXJuYW1lICsgXCIvZGF0YS9kYXRhTm9UcmltQ1JMRlwiO1xuICAgIHZhciBycyA9IGZzLmNyZWF0ZVJlYWRTdHJlYW0odGVzdERhdGEsIHsgaGlnaFdhdGVyTWFyazogOSB9KTtcblxuICAgIHZhciBzdCA9IHJzLnBpcGUobmV3IENvbnZlcnRlcih7XG4gICAgICB0cmltOiBmYWxzZVxuICAgIH0pKTtcbiAgICBzdC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgIHZhciBqID0gcmVzWzBdO1xuICAgICAgYXNzZXJ0KHJlcy5sZW5ndGggPT09IDIpO1xuICAgICAgYXNzZXJ0KGoubmFtZSA9PT0gXCJqb2VcIik7XG4gICAgICBhc3NlcnQoai5hZ2UgPT09IFwiMjBcIik7XG4gICAgICBhc3NlcnQuZXF1YWwocmVzWzFdLm5hbWUsIFwic2FtXCIpO1xuICAgICAgYXNzZXJ0LmVxdWFsKHJlc1sxXS5hZ2UsIFwiMzBcIik7XG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGl0KFwic2hvdWxkIGVtaXQgZW9sIGV2ZW50IHdoZW4gbGluZSBlbmRpbmcgaXMgZGV0ZWN0ZWQgYXMgQ1JMRlwiLCBmdW5jdGlvbiAoZG9uZSkge1xuICAgIHZhciB0ZXN0RGF0YSA9IF9fZGlybmFtZSArIFwiL2RhdGEvZGF0YU5vVHJpbUNSTEZcIjtcbiAgICB2YXIgcnMgPSBmcy5jcmVhdGVSZWFkU3RyZWFtKHRlc3REYXRhKTtcblxuICAgIHZhciBzdCA9IHJzLnBpcGUobmV3IENvbnZlcnRlcigpKTtcbiAgICB2YXIgZW9sQ2FsbGJhY2sgPSBzYW5kYm94LnNweShmdW5jdGlvbiAoZW9sKSB7XG4gICAgICBhc3NlcnQuZXF1YWwoZW9sLCBcIlxcclxcblwiKTtcbiAgICB9KTtcbiAgICBzdC5vbihcImVvbFwiLCBlb2xDYWxsYmFjayk7XG4gICAgc3QudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICBhc3NlcnQuZXF1YWwoZW9sQ2FsbGJhY2suY2FsbENvdW50LCAxLCAnc2hvdWxkIGVtaXQgZW9sIGV2ZW50IG9uY2UnKTtcbiAgICAgIGRvbmUoKTtcbiAgICB9KVxuICB9KTtcblxuICBpdChcInNob3VsZCBlbWl0IGVvbCBldmVudCB3aGVuIGxpbmUgZW5kaW5nIGlzIGRldGVjdGVkIGFzIExGXCIsIGZ1bmN0aW9uIChkb25lKSB7XG4gICAgdmFyIHRlc3REYXRhID0gX19kaXJuYW1lICsgXCIvZGF0YS9jb2x1bW5BcnJheVwiO1xuICAgIHZhciBycyA9IGZzLmNyZWF0ZVJlYWRTdHJlYW0odGVzdERhdGEpO1xuXG4gICAgdmFyIHN0ID0gcnMucGlwZShuZXcgQ29udmVydGVyKCkpO1xuICAgIHZhciBlb2xDYWxsYmFjayA9IHNhbmRib3guc3B5KGZ1bmN0aW9uIChlb2wpIHtcbiAgICAgIGFzc2VydC5lcXVhbChlb2wsIFwiXFxuXCIpO1xuICAgIH0pO1xuICAgIHN0Lm9uKFwiZW9sXCIsIGVvbENhbGxiYWNrKTtcbiAgICBzdC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIGFzc2VydC5lcXVhbChlb2xDYWxsYmFjay5jYWxsQ291bnQsIDEsICdzaG91bGQgZW1pdCBlb2wgZXZlbnQgb25jZScpO1xuICAgICAgZG9uZSgpO1xuICAgIH0pXG4gIH0pO1xuXG4gIGl0KFwic2hvdWxkIHJlbW92ZSB0aGUgQnl0ZSBPcmRlciBNYXJrIChCT00pIGZyb20gaW5wdXRcIiwgZnVuY3Rpb24gKGRvbmUpIHtcbiAgICB2YXIgdGVzdERhdGEgPSBfX2Rpcm5hbWUgKyBcIi9kYXRhL2RhdGFOb1RyaW1CT01cIjtcbiAgICB2YXIgcnMgPSBmcy5jcmVhdGVSZWFkU3RyZWFtKHRlc3REYXRhKTtcbiAgICB2YXIgc3QgPSBycy5waXBlKG5ldyBDb252ZXJ0ZXIoe1xuICAgICAgdHJpbTogZmFsc2VcbiAgICB9KSk7XG4gICAgc3QudGhlbiggZnVuY3Rpb24gKHJlcykge1xuICAgICAgdmFyIGogPSByZXNbMF07XG5cbiAgICAgIGFzc2VydChyZXMubGVuZ3RoPT09Mik7XG4gICAgICBhc3NlcnQoai5uYW1lID09PSBcImpvZVwiKTtcbiAgICAgIGFzc2VydChqLmFnZSA9PT0gXCIyMFwiKTtcbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfSk7XG59KTtcbiJdfQ==