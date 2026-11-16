var fine = new Date("2027-2-18");
var oggi = new Date("2026-11-23");
var giorni = Math.ceil((fine - oggi) / (1000 * 60 * 60 * 24));
if (giorni < 0) {
giorni = 0;
}
