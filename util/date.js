export function getLastDaysDate(date, days) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days, '00', '00', '00')
}

export function getMidnightDate(day, month, year) {
    if (day !== '' && month !== '' && year !== '') {
        const date = new Date();
        date.setUTCHours(0);
        date.setUTCMinutes(0);
        date.setUTCSeconds(0);
        date.setUTCMilliseconds(0);
        date.setDate(day);
        date.setUTCMonth(parseInt(month) - 1);
        date.setFullYear(year);
        
        return date;
    } else {
        return 'Invalid Date';  
    }
    
}