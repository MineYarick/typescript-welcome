var AccessLevel;
(function (AccessLevel) {
    AccessLevel["ADMIN"] = "\u0410\u0434\u043C\u0456\u043D";
    AccessLevel["MODERATOR"] = "\u041C\u043E\u0434\u0435\u0440\u0430\u0442\u043E\u0440";
    AccessLevel["USER"] = "\u041A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447";
    AccessLevel["GUEST"] = "\u0413\u0456\u0441\u0442\u044C";
})(AccessLevel || (AccessLevel = {}));
const currentLevel = AccessLevel.MODERATOR;
console.log(`Поточний рівень доступу: ${currentLevel}`);
