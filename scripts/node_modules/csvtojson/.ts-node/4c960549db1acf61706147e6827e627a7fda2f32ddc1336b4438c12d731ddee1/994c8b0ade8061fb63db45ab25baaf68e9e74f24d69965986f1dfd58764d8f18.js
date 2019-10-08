"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var getEol_1 = __importDefault(require("./getEol"));
var util_1 = require("./util");
var defaulDelimiters = [",", "|", "\t", ";", ":"];
var RowSplit = /** @class */ (function () {
    function RowSplit(conv) {
        this.conv = conv;
        this.cachedRegExp = {};
        this.delimiterEmitted = false;
        this._needEmitDelimiter = undefined;
        this.quote = conv.parseParam.quote;
        this.trim = conv.parseParam.trim;
        this.escape = conv.parseParam.escape;
    }
    Object.defineProperty(RowSplit.prototype, "needEmitDelimiter", {
        get: function () {
            if (this._needEmitDelimiter === undefined) {
                this._needEmitDelimiter = this.conv.listeners("delimiter").length > 0;
            }
            return this._needEmitDelimiter;
        },
        enumerable: true,
        configurable: true
    });
    RowSplit.prototype.parse = function (fileline) {
        if (fileline.length === 0 || (this.conv.parseParam.ignoreEmpty && fileline.trim().length === 0)) {
            return { cells: [], closed: true };
        }
        var quote = this.quote;
        var trim = this.trim;
        var escape = this.escape;
        if (this.conv.parseRuntime.delimiter instanceof Array || this.conv.parseRuntime.delimiter.toLowerCase() === "auto") {
            this.conv.parseRuntime.delimiter = this.getDelimiter(fileline);
        }
        if (this.needEmitDelimiter && !this.delimiterEmitted) {
            this.conv.emit("delimiter", this.conv.parseRuntime.delimiter);
            this.delimiterEmitted = true;
        }
        var delimiter = this.conv.parseRuntime.delimiter;
        var rowArr = fileline.split(delimiter);
        if (quote === "off") {
            if (trim) {
                for (var i = 0; i < rowArr.length; i++) {
                    rowArr[i] = rowArr[i].trim();
                }
            }
            return { cells: rowArr, closed: true };
        }
        else {
            return this.toCSVRow(rowArr, trim, quote, delimiter);
        }
    };
    RowSplit.prototype.toCSVRow = function (rowArr, trim, quote, delimiter) {
        var row = [];
        var inquote = false;
        var quoteBuff = '';
        for (var i = 0, rowLen = rowArr.length; i < rowLen; i++) {
            var e = rowArr[i];
            if (!inquote && trim) {
                e = util_1.trimLeft(e);
            }
            var len = e.length;
            if (!inquote) {
                if (len === 2 && e === this.quote + this.quote) {
                    row.push("");
                    continue;
                }
                else if (this.isQuoteOpen(e)) { //quote open
                    e = e.substr(1);
                    if (this.isQuoteClose(e)) { //quote close
                        e = e.substring(0, e.lastIndexOf(quote));
                        e = this.escapeQuote(e);
                        row.push(e);
                        continue;
                    }
                    else if (e.indexOf(quote) !== -1) {
                        var count = 0;
                        for (var _i = 0, e_1 = e; _i < e_1.length; _i++) {
                            var c = e_1[_i];
                            if (c === quote) {
                                count++;
                            }
                        }
                        if (count % 2 === 1) {
                            if (trim) {
                                e = util_1.trimRight(e);
                            }
                            row.push(quote + e);
                            continue;
                        }
                        else {
                            inquote = true;
                            quoteBuff += e;
                            continue;
                        }
                    }
                    else {
                        inquote = true;
                        quoteBuff += e;
                        continue;
                    }
                }
                else {
                    if (trim) {
                        e = util_1.trimRight(e);
                    }
                    row.push(e);
                    continue;
                }
            }
            else { //previous quote not closed
                if (this.isQuoteClose(e)) { //close double quote
                    inquote = false;
                    e = e.substr(0, len - 1);
                    quoteBuff += delimiter + e;
                    quoteBuff = this.escapeQuote(quoteBuff);
                    if (trim) {
                        quoteBuff = util_1.trimRight(quoteBuff);
                    }
                    row.push(quoteBuff);
                    quoteBuff = "";
                }
                else {
                    quoteBuff += delimiter + e;
                }
            }
        }
        // if (!inquote && param._needFilterRow) {
        //   row = filterRow(row, param);
        // }
        return { cells: row, closed: !inquote };
    };
    RowSplit.prototype.getDelimiter = function (fileline) {
        var checker;
        if (this.conv.parseParam.delimiter === "auto") {
            checker = defaulDelimiters;
        }
        else if (this.conv.parseParam.delimiter instanceof Array) {
            checker = this.conv.parseParam.delimiter;
        }
        else {
            return this.conv.parseParam.delimiter;
        }
        var count = 0;
        var rtn = ",";
        checker.forEach(function (delim) {
            var delimCount = fileline.split(delim).length;
            if (delimCount > count) {
                rtn = delim;
                count = delimCount;
            }
        });
        return rtn;
    };
    RowSplit.prototype.isQuoteOpen = function (str) {
        var quote = this.quote;
        var escape = this.escape;
        return str[0] === quote && (str[1] !== quote ||
            str[1] === escape && (str[2] === quote || str.length === 2));
    };
    RowSplit.prototype.isQuoteClose = function (str) {
        var quote = this.quote;
        var escape = this.escape;
        if (this.conv.parseParam.trim) {
            str = util_1.trimRight(str);
        }
        var count = 0;
        var idx = str.length - 1;
        while (str[idx] === quote || str[idx] === escape) {
            idx--;
            count++;
        }
        return count % 2 !== 0;
    };
    // private twoDoubleQuote(str: string): string {
    //   var twoQuote = this.quote + this.quote;
    //   var curIndex = -1;
    //   while ((curIndex = str.indexOf(twoQuote, curIndex)) > -1) {
    //     str = str.substring(0, curIndex) + str.substring(++curIndex);
    //   }
    //   return str;
    // }
    RowSplit.prototype.escapeQuote = function (segment) {
        var key = "es|" + this.quote + "|" + this.escape;
        if (this.cachedRegExp[key] === undefined) {
            this.cachedRegExp[key] = new RegExp('\\' + this.escape + '\\' + this.quote, 'g');
        }
        var regExp = this.cachedRegExp[key];
        // console.log(regExp,segment);
        return segment.replace(regExp, this.quote);
    };
    RowSplit.prototype.parseMultiLines = function (lines) {
        var csvLines = [];
        var left = "";
        while (lines.length) {
            var line = left + lines.shift();
            var row = this.parse(line);
            if (row.cells.length === 0 && this.conv.parseParam.ignoreEmpty) {
                continue;
            }
            if (row.closed || this.conv.parseParam.alwaysSplitAtEOL) {
                if (this.conv.parseRuntime.selectedColumns) {
                    csvLines.push(util_1.filterArray(row.cells, this.conv.parseRuntime.selectedColumns));
                }
                else {
                    csvLines.push(row.cells);
                }
                left = "";
            }
            else {
                left = line + (getEol_1.default(line, this.conv.parseRuntime) || "\n");
            }
        }
        return { rowsCells: csvLines, partial: left };
    };
    return RowSplit;
}());
exports.RowSplit = RowSplit;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL2t4aWFuZy93b3JrL3Byb2plY3RzL2NzdjJqc29uL3NyYy9yb3dTcGxpdC50cyIsInNvdXJjZXMiOlsiL1VzZXJzL2t4aWFuZy93b3JrL3Byb2plY3RzL2NzdjJqc29uL3NyYy9yb3dTcGxpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLG9EQUE4QjtBQUM5QiwrQkFBMEQ7QUFFMUQsSUFBTSxnQkFBZ0IsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNwRDtJQWFFLGtCQUFvQixJQUFlO1FBQWYsU0FBSSxHQUFKLElBQUksQ0FBVztRQVQzQixpQkFBWSxHQUE4QixFQUFFLENBQUM7UUFDN0MscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLHVCQUFrQixHQUFhLFNBQVMsQ0FBQztRQVEvQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO1FBQ25DLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztJQUN2QyxDQUFDO0lBVkQsc0JBQVksdUNBQWlCO2FBQTdCO1lBQ0UsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEtBQUssU0FBUyxFQUFFO2dCQUN6QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzthQUN2RTtZQUNELE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO1FBQ2pDLENBQUM7OztPQUFBO0lBTUQsd0JBQUssR0FBTCxVQUFNLFFBQWtCO1FBQ3RCLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVB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eyBDU1ZQYXJzZVBhcmFtIH0gZnJvbSBcIi4vUGFyYW1ldGVyc1wiO1xuaW1wb3J0IHsgQ29udmVydGVyIH0gZnJvbSBcIi4vQ29udmVydGVyXCI7XG5pbXBvcnQgeyBGaWxlbGluZSB9IGZyb20gXCIuL2ZpbGVsaW5lXCI7XG5pbXBvcnQgZ2V0RW9sIGZyb20gXCIuL2dldEVvbFwiO1xuaW1wb3J0IHsgZmlsdGVyQXJyYXksIHRyaW1MZWZ0LCB0cmltUmlnaHQgfSBmcm9tIFwiLi91dGlsXCI7XG5cbmNvbnN0IGRlZmF1bERlbGltaXRlcnMgPSBbXCIsXCIsIFwifFwiLCBcIlxcdFwiLCBcIjtcIiwgXCI6XCJdO1xuZXhwb3J0IGNsYXNzIFJvd1NwbGl0IHtcbiAgcHJpdmF0ZSBxdW90ZTogc3RyaW5nO1xuICBwcml2YXRlIHRyaW06IGJvb2xlYW47XG4gIHByaXZhdGUgZXNjYXBlOiBzdHJpbmc7XG4gIHByaXZhdGUgY2FjaGVkUmVnRXhwOiB7IFtrZXk6IHN0cmluZ106IFJlZ0V4cCB9ID0ge307XG4gIHByaXZhdGUgZGVsaW1pdGVyRW1pdHRlZCA9IGZhbHNlO1xuICBwcml2YXRlIF9uZWVkRW1pdERlbGltaXRlcj86IGJvb2xlYW4gPSB1bmRlZmluZWQ7XG4gIHByaXZhdGUgZ2V0IG5lZWRFbWl0RGVsaW1pdGVyKCkge1xuICAgIGlmICh0aGlzLl9uZWVkRW1pdERlbGltaXRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9uZWVkRW1pdERlbGltaXRlciA9IHRoaXMuY29udi5saXN0ZW5lcnMoXCJkZWxpbWl0ZXJcIikubGVuZ3RoID4gMDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX25lZWRFbWl0RGVsaW1pdGVyO1xuICB9XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29udjogQ29udmVydGVyKSB7XG4gICAgdGhpcy5xdW90ZSA9IGNvbnYucGFyc2VQYXJhbS5xdW90ZTtcbiAgICB0aGlzLnRyaW0gPSBjb252LnBhcnNlUGFyYW0udHJpbTtcbiAgICB0aGlzLmVzY2FwZSA9IGNvbnYucGFyc2VQYXJhbS5lc2NhcGU7XG4gIH1cbiAgcGFyc2UoZmlsZWxpbmU6IEZpbGVsaW5lKTogUm93U3BsaXRSZXN1bHQge1xuICAgIGlmIChmaWxlbGluZS5sZW5ndGggPT09IDAgfHwgKHRoaXMuY29udi5wYXJzZVBhcmFtLmlnbm9yZUVtcHR5ICYmIGZpbGVsaW5lLnRyaW0oKS5sZW5ndGggPT09IDApKSB7XG4gICAgICByZXR1cm4geyBjZWxsczogW10sIGNsb3NlZDogdHJ1ZSB9O1xuICAgIH1cbiAgICBjb25zdCBxdW90ZSA9IHRoaXMucXVvdGU7XG4gICAgY29uc3QgdHJpbSA9IHRoaXMudHJpbTtcbiAgICBjb25zdCBlc2NhcGUgPSB0aGlzLmVzY2FwZTtcbiAgICBpZiAodGhpcy5jb252LnBhcnNlUnVudGltZS5kZWxpbWl0ZXIgaW5zdGFuY2VvZiBBcnJheSB8fCB0aGlzLmNvbnYucGFyc2VSdW50aW1lLmRlbGltaXRlci50b0xvd2VyQ2FzZSgpID09PSBcImF1dG9cIikge1xuICAgICAgdGhpcy5jb252LnBhcnNlUnVudGltZS5kZWxpbWl0ZXIgPSB0aGlzLmdldERlbGltaXRlcihmaWxlbGluZSk7XG5cbiAgICB9XG4gICAgaWYgKHRoaXMubmVlZEVtaXREZWxpbWl0ZXIgJiYgIXRoaXMuZGVsaW1pdGVyRW1pdHRlZCkge1xuICAgICAgdGhpcy5jb252LmVtaXQoXCJkZWxpbWl0ZXJcIiwgdGhpcy5jb252LnBhcnNlUnVudGltZS5kZWxpbWl0ZXIpO1xuICAgICAgdGhpcy5kZWxpbWl0ZXJFbWl0dGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgY29uc3QgZGVsaW1pdGVyID0gdGhpcy5jb252LnBhcnNlUnVudGltZS5kZWxpbWl0ZXI7XG4gICAgY29uc3Qgcm93QXJyID0gZmlsZWxpbmUuc3BsaXQoZGVsaW1pdGVyKTtcbiAgICBpZiAocXVvdGUgPT09IFwib2ZmXCIpIHtcbiAgICAgIGlmICh0cmltKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93QXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgcm93QXJyW2ldID0gcm93QXJyW2ldLnRyaW0oKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHsgY2VsbHM6IHJvd0FyciwgY2xvc2VkOiB0cnVlIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnRvQ1NWUm93KHJvd0FyciwgdHJpbSwgcXVvdGUsIGRlbGltaXRlcik7XG4gICAgfVxuXG4gIH1cbiAgcHJpdmF0ZSB0b0NTVlJvdyhyb3dBcnI6IHN0cmluZ1tdLCB0cmltOiBib29sZWFuLCBxdW90ZTogc3RyaW5nLCBkZWxpbWl0ZXI6IHN0cmluZyk6IFJvd1NwbGl0UmVzdWx0IHtcbiAgICBjb25zdCByb3c6IHN0cmluZ1tdID0gW107XG4gICAgbGV0IGlucXVvdGUgPSBmYWxzZTtcbiAgICBsZXQgcXVvdGVCdWZmID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IDAsIHJvd0xlbiA9IHJvd0Fyci5sZW5ndGg7IGkgPCByb3dMZW47IGkrKykge1xuICAgICAgbGV0IGUgPSByb3dBcnJbaV07XG4gICAgICBpZiAoIWlucXVvdGUgJiYgdHJpbSkge1xuICAgICAgICBlID0gdHJpbUxlZnQoZSk7XG4gICAgICB9XG4gICAgICBjb25zdCBsZW4gPSBlLmxlbmd0aDtcbiAgICAgIGlmICghaW5xdW90ZSkge1xuICAgICAgICBpZiAobGVuID09PSAyICYmIGUgPT09IHRoaXMucXVvdGUgKyB0aGlzLnF1b3RlKSB7XG4gICAgICAgICAgcm93LnB1c2goXCJcIik7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc1F1b3RlT3BlbihlKSkgeyAvL3F1b3RlIG9wZW5cbiAgICAgICAgICBlID0gZS5zdWJzdHIoMSk7XG4gICAgICAgICAgaWYgKHRoaXMuaXNRdW90ZUNsb3NlKGUpKSB7IC8vcXVvdGUgY2xvc2VcbiAgICAgICAgICAgIGUgPSBlLnN1YnN0cmluZygwLCBlLmxhc3RJbmRleE9mKHF1b3RlKSk7XG4gICAgICAgICAgICBlID0gdGhpcy5lc2NhcGVRdW90ZShlKTtcbiAgICAgICAgICAgIHJvdy5wdXNoKGUpO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfSBlbHNlIGlmIChlLmluZGV4T2YocXVvdGUpICE9PSAtMSkge1xuICAgICAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgICAgIGZvciAoY29uc3QgYyBvZiBlKSB7XG4gICAgICAgICAgICAgIGlmIChjID09PSBxdW90ZSkge1xuICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudCAlIDIgPT09IDEpIHtcbiAgICAgICAgICAgICAgaWYgKHRyaW0pIHtcbiAgICAgICAgICAgICAgICBlID0gdHJpbVJpZ2h0KGUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJvdy5wdXNoKHF1b3RlICsgZSk7XG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgIGlucXVvdGUgPSB0cnVlO1xuICAgICAgICAgICAgICBxdW90ZUJ1ZmYgKz0gZTtcbiAgICAgICAgICAgICAgY29udGludWU7ICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpbnF1b3RlID0gdHJ1ZTtcbiAgICAgICAgICAgIHF1b3RlQnVmZiArPSBlO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0cmltKSB7XG4gICAgICAgICAgICBlID0gdHJpbVJpZ2h0KGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByb3cucHVzaChlKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHsgLy9wcmV2aW91cyBxdW90ZSBub3QgY2xvc2VkXG4gICAgICAgIGlmICh0aGlzLmlzUXVvdGVDbG9zZShlKSkgeyAvL2Nsb3NlIGRvdWJsZSBxdW90ZVxuICAgICAgICAgIGlucXVvdGUgPSBmYWxzZTtcbiAgICAgICAgICBlID0gZS5zdWJzdHIoMCwgbGVuIC0gMSk7XG4gICAgICAgICAgcXVvdGVCdWZmICs9IGRlbGltaXRlciArIGU7XG4gICAgICAgICAgcXVvdGVCdWZmID0gdGhpcy5lc2NhcGVRdW90ZShxdW90ZUJ1ZmYpO1xuICAgICAgICAgIGlmICh0cmltKSB7XG4gICAgICAgICAgICBxdW90ZUJ1ZmYgPSB0cmltUmlnaHQocXVvdGVCdWZmKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcm93LnB1c2gocXVvdGVCdWZmKTtcbiAgICAgICAgICBxdW90ZUJ1ZmYgPSBcIlwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHF1b3RlQnVmZiArPSBkZWxpbWl0ZXIgKyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgKCFpbnF1b3RlICYmIHBhcmFtLl9uZWVkRmlsdGVyUm93KSB7XG4gICAgLy8gICByb3cgPSBmaWx0ZXJSb3cocm93LCBwYXJhbSk7XG4gICAgLy8gfVxuXG4gICAgcmV0dXJuIHsgY2VsbHM6IHJvdywgY2xvc2VkOiAhaW5xdW90ZSB9O1xuICB9XG4gIHByaXZhdGUgZ2V0RGVsaW1pdGVyKGZpbGVsaW5lOiBGaWxlbGluZSk6IHN0cmluZyB7XG4gICAgbGV0IGNoZWNrZXI7XG4gICAgaWYgKHRoaXMuY29udi5wYXJzZVBhcmFtLmRlbGltaXRlciA9PT0gXCJhdXRvXCIpIHtcbiAgICAgIGNoZWNrZXIgPSBkZWZhdWxEZWxpbWl0ZXJzO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb252LnBhcnNlUGFyYW0uZGVsaW1pdGVyIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgIGNoZWNrZXIgPSB0aGlzLmNvbnYucGFyc2VQYXJhbS5kZWxpbWl0ZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnYucGFyc2VQYXJhbS5kZWxpbWl0ZXI7XG4gICAgfVxuICAgIGxldCBjb3VudCA9IDA7XG4gICAgbGV0IHJ0biA9IFwiLFwiO1xuICAgIGNoZWNrZXIuZm9yRWFjaChmdW5jdGlvbiAoZGVsaW0pIHtcbiAgICAgIGNvbnN0IGRlbGltQ291bnQgPSBmaWxlbGluZS5zcGxpdChkZWxpbSkubGVuZ3RoO1xuICAgICAgaWYgKGRlbGltQ291bnQgPiBjb3VudCkge1xuICAgICAgICBydG4gPSBkZWxpbTtcbiAgICAgICAgY291bnQgPSBkZWxpbUNvdW50O1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBydG47XG4gIH1cbiAgcHJpdmF0ZSBpc1F1b3RlT3BlbihzdHI6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHF1b3RlID0gdGhpcy5xdW90ZTtcbiAgICBjb25zdCBlc2NhcGUgPSB0aGlzLmVzY2FwZTtcbiAgICByZXR1cm4gc3RyWzBdID09PSBxdW90ZSAmJiAoXG4gICAgICBzdHJbMV0gIT09IHF1b3RlIHx8XG4gICAgICBzdHJbMV0gPT09IGVzY2FwZSAmJiAoc3RyWzJdID09PSBxdW90ZSB8fCBzdHIubGVuZ3RoID09PSAyKSk7XG4gIH1cbiAgcHJpdmF0ZSBpc1F1b3RlQ2xvc2Uoc3RyOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCBxdW90ZSA9IHRoaXMucXVvdGU7XG4gICAgY29uc3QgZXNjYXBlID0gdGhpcy5lc2NhcGU7XG4gICAgaWYgKHRoaXMuY29udi5wYXJzZVBhcmFtLnRyaW0pIHtcbiAgICAgIHN0ciA9IHRyaW1SaWdodChzdHIpO1xuICAgIH1cbiAgICBsZXQgY291bnQgPSAwO1xuICAgIGxldCBpZHggPSBzdHIubGVuZ3RoIC0gMTtcbiAgICB3aGlsZSAoc3RyW2lkeF0gPT09IHF1b3RlIHx8IHN0cltpZHhdID09PSBlc2NhcGUpIHtcbiAgICAgIGlkeC0tO1xuICAgICAgY291bnQrKztcbiAgICB9XG4gICAgcmV0dXJuIGNvdW50ICUgMiAhPT0gMDtcbiAgfVxuXG4gIC8vIHByaXZhdGUgdHdvRG91YmxlUXVvdGUoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyAgIHZhciB0d29RdW90ZSA9IHRoaXMucXVvdGUgKyB0aGlzLnF1b3RlO1xuICAvLyAgIHZhciBjdXJJbmRleCA9IC0xO1xuICAvLyAgIHdoaWxlICgoY3VySW5kZXggPSBzdHIuaW5kZXhPZih0d29RdW90ZSwgY3VySW5kZXgpKSA+IC0xKSB7XG4gIC8vICAgICBzdHIgPSBzdHIuc3Vic3RyaW5nKDAsIGN1ckluZGV4KSArIHN0ci5zdWJzdHJpbmcoKytjdXJJbmRleCk7XG4gIC8vICAgfVxuICAvLyAgIHJldHVybiBzdHI7XG4gIC8vIH1cblxuXG4gIHByaXZhdGUgZXNjYXBlUXVvdGUoc2VnbWVudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBrZXkgPSBcImVzfFwiICsgdGhpcy5xdW90ZSArIFwifFwiICsgdGhpcy5lc2NhcGU7XG4gICAgaWYgKHRoaXMuY2FjaGVkUmVnRXhwW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5jYWNoZWRSZWdFeHBba2V5XSA9IG5ldyBSZWdFeHAoJ1xcXFwnICsgdGhpcy5lc2NhcGUgKyAnXFxcXCcgKyB0aGlzLnF1b3RlLCAnZycpO1xuICAgIH1cbiAgICBjb25zdCByZWdFeHAgPSB0aGlzLmNhY2hlZFJlZ0V4cFtrZXldO1xuICAgIC8vIGNvbnNvbGUubG9nKHJlZ0V4cCxzZWdtZW50KTtcbiAgICByZXR1cm4gc2VnbWVudC5yZXBsYWNlKHJlZ0V4cCwgdGhpcy5xdW90ZSk7XG4gIH1cbiAgcGFyc2VNdWx0aUxpbmVzKGxpbmVzOiBGaWxlbGluZVtdKTogTXVsdGlwbGVSb3dSZXN1bHQge1xuICAgIGNvbnN0IGNzdkxpbmVzOiBzdHJpbmdbXVtdID0gW107XG4gICAgbGV0IGxlZnQgPSBcIlwiO1xuICAgIHdoaWxlIChsaW5lcy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGxpbmUgPSBsZWZ0ICsgbGluZXMuc2hpZnQoKTtcbiAgICAgIGNvbnN0IHJvdyA9IHRoaXMucGFyc2UobGluZSk7XG4gICAgICBpZiAocm93LmNlbGxzLmxlbmd0aCA9PT0gMCAmJiB0aGlzLmNvbnYucGFyc2VQYXJhbS5pZ25vcmVFbXB0eSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmIChyb3cuY2xvc2VkIHx8IHRoaXMuY29udi5wYXJzZVBhcmFtLmFsd2F5c1NwbGl0QXRFT0wpIHtcbiAgICAgICAgaWYgKHRoaXMuY29udi5wYXJzZVJ1bnRpbWUuc2VsZWN0ZWRDb2x1bW5zKSB7XG4gICAgICAgICAgY3N2TGluZXMucHVzaChmaWx0ZXJBcnJheShyb3cuY2VsbHMsIHRoaXMuY29udi5wYXJzZVJ1bnRpbWUuc2VsZWN0ZWRDb2x1bW5zKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3N2TGluZXMucHVzaChyb3cuY2VsbHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGVmdCA9IFwiXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZWZ0ID0gbGluZSArIChnZXRFb2wobGluZSwgdGhpcy5jb252LnBhcnNlUnVudGltZSkgfHwgXCJcXG5cIik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IHJvd3NDZWxsczogY3N2TGluZXMsIHBhcnRpYWw6IGxlZnQgfTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBNdWx0aXBsZVJvd1Jlc3VsdCB7XG4gIHJvd3NDZWxsczogc3RyaW5nW11bXTtcbiAgcGFydGlhbDogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBSb3dTcGxpdFJlc3VsdCB7XG4gIC8qKlxuICAgKiBjc3Ygcm93IGFycmF5LiBbXCJhXCIsXCJiXCIsXCJjXCJdXG4gICAqL1xuICBjZWxsczogc3RyaW5nW10sXG4gIC8qKlxuICAgKiBpZiB0aGUgcGFzc2VkIGZpbGVsaW5lIGlzIGEgY29tcGxldGUgcm93XG4gICAqL1xuICBjbG9zZWQ6IGJvb2xlYW5cbn1cblxuIl19