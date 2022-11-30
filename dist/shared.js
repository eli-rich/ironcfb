import { z } from 'zod';
export const conferences = z.enum([
    'ACC',
    'American Athletic',
    'Big 12',
    'Big Ten',
    'Conference USA',
    'FBS Independents',
    'Mid-American',
    'Mountain West',
    'Pac-12',
    'SEC',
    'Sun Belt',
]);
export const classifications = z.enum(['fbs', 'fcs', 'ii', 'iii']);
export const divisions = z.enum(['Atlantic', 'Coastal', 'East', 'Mountain', 'West']);
export var Timezone;
(function (Timezone) {
    Timezone["AmericaBoise"] = "America/Boise";
    Timezone["AmericaChicago"] = "America/Chicago";
    Timezone["AmericaDenver"] = "America/Denver";
    Timezone["AmericaDetroit"] = "America/Detroit";
    Timezone["AmericaIndianaIndianapolis"] = "America/Indiana/Indianapolis";
    Timezone["AmericaKentuckyLouisville"] = "America/Kentucky/Louisville";
    Timezone["AmericaLasAngeles"] = "America/Las_Angeles";
    Timezone["AmericaLosAngeles"] = "America/Los_Angeles";
    Timezone["AmericaNewYork"] = "America/New_York";
    Timezone["AmericaPhoenix"] = "America/Phoenix";
    Timezone["AustraliaSydney"] = "Australia/Sydney";
    Timezone["PacificHonolulu"] = "Pacific/Honolulu";
})(Timezone || (Timezone = {}));
export var StatType;
(function (StatType) {
    StatType["Completion"] = "Completion";
    StatType["Fumble"] = "Fumble";
    StatType["FumbleForced"] = "Fumble Forced";
    StatType["FumbleRecovered"] = "Fumble Recovered";
    StatType["Incompletion"] = "Incompletion";
    StatType["Interception"] = "Interception";
    StatType["InterceptionThrown"] = "Interception Thrown";
    StatType["PassBreakup"] = "Pass Breakup";
    StatType["Reception"] = "Reception";
    StatType["Rush"] = "Rush";
    StatType["Sack"] = "Sack";
    StatType["SackTaken"] = "Sack Taken";
    StatType["Target"] = "Target";
    StatType["Touchdown"] = "Touchdown";
})(StatType || (StatType = {}));
export var Position;
(function (Position) {
    Position["DB"] = "DB";
    Position["DL"] = "DL";
    Position["LB"] = "LB";
    Position["Ls"] = "LS";
    Position["Ol"] = "OL";
    Position["P"] = "P";
    Position["Pk"] = "PK";
    Position["Qb"] = "QB";
    Position["Rb"] = "RB";
    Position["Te"] = "TE";
    Position["Wr"] = "WR";
})(Position || (Position = {}));
//# sourceMappingURL=shared.js.map