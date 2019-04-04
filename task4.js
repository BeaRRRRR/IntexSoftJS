function getDayDenclension(day) {
 day = `${day}`;
 if(day.startsWith('1') && day !=='1') return 'Дней';
 if(day.endsWith('1')) return 'День';
 if(day.endsWith('2') || day.endsWith('3') || day.endsWith('4')) return 'Дня';
 else return 'Дней';
}