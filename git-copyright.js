#!/usr/bin/env node
const path = require('path');
const {exec} = require('child_process');
const {promisify} = require('util');

const execProm = promisify(exec);

async function run(shellCommand) {
    const {stdout, stderr} = await execProm(shellCommand);

    if (stderr) {
        throw new Error(stderr)
    } else {
        return stdout
    }
}

const directory = process.env.PWD;
const repoName = path.basename(directory);

function copyDate(date) {
    return new Date(date);
}

function previousMonth(date) {
    return new Date(copyDate(date).setMonth(date.getMonth() - 1));
}

function lastMonthString() {
    const date = previousMonth(new Date());
    const year = date.getFullYear();
    const month = date.getMonth();
    const monthString = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'][month];

    return `${monthString}-${year}`
}

const txtFileName = path.join('copyright_worklog', `${repoName}-${lastMonthString()}.txt`);
const pdfFileName = path.join('copyright_worklog', `${repoName}-${lastMonthString()}.pdf`);

(async () => {
    await run(`git showmine --lastmonth > ${txtFileName}`);
    await run(`cupsfilter ${txtFileName} > ${pdfFileName}`);
})();
