export const timeConverter = (timestamp: number): string => {
    const a = new Date(timestamp);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = months[a.getMonth()];
    const day = a.getDate();
    const hour = a.getHours();
    const min = a.getMinutes();
    return `${day} ${month} ${hour}:${min}`;
}