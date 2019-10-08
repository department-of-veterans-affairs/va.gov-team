"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var getEol_1 = __importDefault(require("./getEol"));
// const getEol = require("./getEol");
/**
 * convert data chunk to file lines array
 * @param  {string} data  data chunk as utf8 string
 * @param  {object} param Converter param object
 * @return {Object}   {lines:[line1,line2...],partial:String}
 */
function stringToLines(data, param) {
    var eol = getEol_1.default(data, param);
    var lines = data.split(eol);
    var partial = lines.pop() || "";
    return { lines: lines, partial: partial };
}
exports.stringToLines = stringToLines;
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL2t4aWFuZy93b3JrL3Byb2plY3RzL2NzdjJqc29uL3NyYy9maWxlbGluZS50cyIsInNvdXJjZXMiOlsiL1VzZXJzL2t4aWFuZy93b3JrL3Byb2plY3RzL2NzdjJqc29uL3NyYy9maWxlbGluZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLG9EQUE4QjtBQUM5QixzQ0FBc0M7QUFDdEM7Ozs7O0dBS0c7QUFDSCx1QkFBOEIsSUFBWSxFQUFFLEtBQW1CO0lBQzdELElBQU0sR0FBRyxHQUFHLGdCQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDOUIsSUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUNsQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7QUFDNUMsQ0FBQztBQUxELHNDQUtDO0FBQUEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhcnNlUnVudGltZSB9IGZyb20gXCIuL1BhcnNlUnVudGltZVwiO1xuaW1wb3J0IGdldEVvbCBmcm9tIFwiLi9nZXRFb2xcIjtcbi8vIGNvbnN0IGdldEVvbCA9IHJlcXVpcmUoXCIuL2dldEVvbFwiKTtcbi8qKlxuICogY29udmVydCBkYXRhIGNodW5rIHRvIGZpbGUgbGluZXMgYXJyYXlcbiAqIEBwYXJhbSAge3N0cmluZ30gZGF0YSAgZGF0YSBjaHVuayBhcyB1dGY4IHN0cmluZ1xuICogQHBhcmFtICB7b2JqZWN0fSBwYXJhbSBDb252ZXJ0ZXIgcGFyYW0gb2JqZWN0XG4gKiBAcmV0dXJuIHtPYmplY3R9ICAge2xpbmVzOltsaW5lMSxsaW5lMi4uLl0scGFydGlhbDpTdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdUb0xpbmVzKGRhdGE6IHN0cmluZywgcGFyYW06IFBhcnNlUnVudGltZSk6IFN0cmluZ1RvTGluZXNSZXN1bHQge1xuICBjb25zdCBlb2wgPSBnZXRFb2woZGF0YSwgcGFyYW0pO1xuICBjb25zdCBsaW5lcyA9IGRhdGEuc3BsaXQoZW9sKTtcbiAgY29uc3QgcGFydGlhbCA9IGxpbmVzLnBvcCgpIHx8IFwiXCI7XG4gIHJldHVybiB7IGxpbmVzOiBsaW5lcywgcGFydGlhbDogcGFydGlhbCB9O1xufTtcblxuXG5leHBvcnQgaW50ZXJmYWNlIFN0cmluZ1RvTGluZXNSZXN1bHQge1xuICBsaW5lczogRmlsZWxpbmVbXSxcbiAgLyoqXG4gICAqIGxhc3QgbGluZSB3aGljaCBjb3VsZCBiZSBpbmNvbXBsZXRlIGxpbmUuXG4gICAqL1xuICBwYXJ0aWFsOiBzdHJpbmdcbn1cbmV4cG9ydCB0eXBlIEZpbGVsaW5lID0gc3RyaW5nOyJdfQ==