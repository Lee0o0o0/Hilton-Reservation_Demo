let common = [
    'features/**/*.feature', // Specify our feature static_files
    '--require steps/**/*.js', // Load step definitions
    '--format progress-bar', // Load custom formatter
].join(' ');
module.exports = {
    default: common
};
