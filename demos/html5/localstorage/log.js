function AdpLog() {}

AdpLog.prototype.write = function(content) {
    var now = new Date();
    var time = now.getMinutes() + '-' +
        now.getSeconds() + '-' +
        now.getMilliseconds();

    var logs = this.getLogs();
    logs.push(time + '：' + content);
    this.setLogs(logs);
};


AdpLog.prototype.clear = function() {
    this.clearLogs();
};

AdpLog.prototype.display = function() {
    var logsHtml = '<p>----------display----------</p>';
    var logs = this.getLogs();
    for (var i = 0; i < logs.length; i++) {
        logsHtml += '<p>' + logs[i] + '</p>';
    }

    var div = document.createElement('div');
    div.innerHTML = logsHtml;

    var container = document.getElementById('adp-logs');
    container.appendChild(div);
};

AdpLog.prototype.getLogs = function() {
    var logs = [];
    var strLogs = localStorage.getItem('adp-logs');
    if (strLogs) {
        logs = JSON.parse(strLogs);
    }
    return logs;
};

AdpLog.prototype.setLogs = function(logs) {
    localStorage.setItem('adp-logs', JSON.stringify(logs));
};

AdpLog.prototype.clearLogs = function() {
    localStorage.removeItem('adp-logs');
};

window.adpLog = new AdpLog();