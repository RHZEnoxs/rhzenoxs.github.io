var EditUtil = editUtil = {
    commandSet: ['bold', 'italic', 'strikethrough', 'redo', 'undo'],
    exec: function (command) {
        const _self = this;
        if (_self.commandSet.indexOf(command) !== -1) {
            document.execCommand(command, false, null);
        } else {
            let value = '<' + command + '>';
            document.execCommand('formatBlock', false, value);
        }
    }
}
