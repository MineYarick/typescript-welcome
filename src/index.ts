enum AccessLevel {
    ADMIN = 'Адмін',
    MODERATOR = 'Модератор',
    USER = 'Користувач',
    GUEST = 'Гість'
}

 const currentLevel: AccessLevel = AccessLevel.MODERATOR;

console.log(`Поточний рівень доступу: ${currentLevel}`);
