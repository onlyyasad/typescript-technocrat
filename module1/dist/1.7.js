"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
{
    var bros1 = ["Habib", "Wahid", "Rupom"];
    var bros2 = ["Rahim", "Karim", "Rafik"];
    bros1.push.apply(bros1, bros2);
    var mentors1 = {
        typescript: "Mezba",
        redux: "Mir",
        dbms: "Mizan"
    };
    var mentors2 = {
        prisma: "Firoz",
        next: "Tanmoy",
        cloud: "Nahid"
    };
    var mentorList = __assign(__assign({}, mentors1), mentors2);
    var greeFriends = function () {
        var friends = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            friends[_i] = arguments[_i];
        }
        friends.forEach(function (friend) { return console.log("Hi ".concat(friend)); });
    };
    greeFriends("Abul", "Kabul", "Babul");
}
