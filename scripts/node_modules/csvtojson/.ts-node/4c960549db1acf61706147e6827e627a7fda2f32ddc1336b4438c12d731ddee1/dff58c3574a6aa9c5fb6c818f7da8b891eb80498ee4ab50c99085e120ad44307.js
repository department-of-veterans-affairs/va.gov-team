"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var CSVError = /** @class */ (function (_super) {
    __extends(CSVError, _super);
    function CSVError(err, line, extra) {
        var _this = _super.call(this, "Error: " + err + ". JSON Line number: " + line + (extra ? " near: " + extra : "")) || this;
        _this.err = err;
        _this.line = line;
        _this.extra = extra;
        _this.name = "CSV Parse Error";
        return _this;
    }
    CSVError.column_mismatched = function (index, extra) {
        return new CSVError("column_mismatched", index, extra);
    };
    CSVError.unclosed_quote = function (index, extra) {
        return new CSVError("unclosed_quote", index, extra);
    };
    CSVError.fromJSON = function (obj) {
        return new CSVError(obj.err, obj.line, obj.extra);
    };
    CSVError.prototype.toJSON = function () {
        return {
            err: this.err,
            line: this.line,
            extra: this.extra
        };
    };
    return CSVError;
}(Error));
exports.default = CSVError;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL2t4aWFuZy93b3JrL3Byb2plY3RzL2NzdjJqc29uL3NyYy9DU1ZFcnJvci50cyIsInNvdXJjZXMiOlsiL1VzZXJzL2t4aWFuZy93b3JrL3Byb2plY3RzL2NzdjJqc29uL3NyYy9DU1ZFcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtJQUFzQyw0QkFBSztJQVV6QyxrQkFDUyxHQUFXLEVBQ1gsSUFBWSxFQUNaLEtBQWM7UUFIdkIsWUFLRSxrQkFBTSxTQUFTLEdBQUcsR0FBRyxHQUFHLHNCQUFzQixHQUFHLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsU0FFMUY7UUFOUSxTQUFHLEdBQUgsR0FBRyxDQUFRO1FBQ1gsVUFBSSxHQUFKLElBQUksQ0FBUTtRQUNaLFdBQUssR0FBTCxLQUFLLENBQVM7UUFHckIsS0FBSSxDQUFDLElBQUksR0FBRyxpQkFBaUIsQ0FBQzs7SUFDaEMsQ0FBQztJQWhCTSwwQkFBaUIsR0FBeEIsVUFBeUIsS0FBYSxFQUFFLEtBQWM7UUFDcEQsT0FBTyxJQUFJLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUNNLHVCQUFjLEdBQXJCLFVBQXNCLEtBQWEsRUFBRSxLQUFjO1FBQ2pELE9BQU8sSUFBSSxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFDTSxpQkFBUSxHQUFmLFVBQWdCLEdBQUc7UUFDakIsT0FBTyxJQUFJLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFTRCx5QkFBTSxHQUFOO1FBQ0UsT0FBTztZQUNMLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztZQUNiLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztTQUNsQixDQUFBO0lBQ0gsQ0FBQztJQUVILGVBQUM7QUFBRCxDQUFDLEFBMUJELENBQXNDLEtBQUssR0EwQjFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ1NWRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIHN0YXRpYyBjb2x1bW5fbWlzbWF0Y2hlZChpbmRleDogbnVtYmVyLCBleHRyYT86IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgQ1NWRXJyb3IoXCJjb2x1bW5fbWlzbWF0Y2hlZFwiLCBpbmRleCwgZXh0cmEpO1xuICB9XG4gIHN0YXRpYyB1bmNsb3NlZF9xdW90ZShpbmRleDogbnVtYmVyLCBleHRyYT86IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgQ1NWRXJyb3IoXCJ1bmNsb3NlZF9xdW90ZVwiLCBpbmRleCwgZXh0cmEpO1xuICB9XG4gIHN0YXRpYyBmcm9tSlNPTihvYmopIHtcbiAgICByZXR1cm4gbmV3IENTVkVycm9yKG9iai5lcnIsIG9iai5saW5lLCBvYmouZXh0cmEpO1xuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlcnI6IHN0cmluZyxcbiAgICBwdWJsaWMgbGluZTogbnVtYmVyLFxuICAgIHB1YmxpYyBleHRyYT86IHN0cmluZ1xuICApIHtcbiAgICBzdXBlcihcIkVycm9yOiBcIiArIGVyciArIFwiLiBKU09OIExpbmUgbnVtYmVyOiBcIiArIGxpbmUgKyAoZXh0cmEgPyBcIiBuZWFyOiBcIiArIGV4dHJhIDogXCJcIikpO1xuICAgIHRoaXMubmFtZSA9IFwiQ1NWIFBhcnNlIEVycm9yXCI7XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB7XG4gICAgICBlcnI6IHRoaXMuZXJyLFxuICAgICAgbGluZTogdGhpcy5saW5lLFxuICAgICAgZXh0cmE6IHRoaXMuZXh0cmFcbiAgICB9XG4gIH1cblxufVxuIl19