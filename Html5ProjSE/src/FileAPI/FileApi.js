$(function () {
    $console = $('#console');
    $btnFile = $('#btnFile');
    $btnFile.off('change').on('change', function (event) {
        var file = $(this)[0].files[0];
        var filename = file.name;
        $console.text('fileName = ' + filename);

        var fReader = new FileReader();
        fReader.onload = function (event) {
            var text = event.target.result;
            $console.html(text);
        };
        fReader.readAsText(file);

    });

    function handleFileSelect(event) {
        event.preventDefault();
        event.stopPropagation();
        
        var files = event.dataTransfer.files; // FileList object.

        // files is a FileList of File objects. List some properties.
        var output = [];
        for (var i = 0, f; f = files[i]; i++) {
            output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
                f.size, ' bytes, last modified: ',
                f.lastModifiedDate.toLocaleDateString(), '</li>');
        }
        document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
        
        var fReader = new FileReader();
        fReader.onload = function (event) {
            var text = event.target.result;
            $console.html(text);
        };
        fReader.readAsText(files[0]);
        
        
    }

    function handleDragOver(event) {
        event.preventDefault();
        event.stopPropagation();
        event.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
    }

    // Setup the dnd listeners.
    /*var dropZone = document.getElementById('drop_zone');
    dropZone.addEventListener('dragover', handleDragOver, false);
    dropZone.addEventListener('drop', handleFileSelect, false);*/
    
    var $dropZone = $('#drop_zone');
    $dropZone.on('dragover', function(event){
        event.preventDefault();  
        event.stopPropagation();
        event.originalEvent.dataTransfer.dropEffect = 'copy';
//        event.dataTransfer.dropEffect = 'copy';
        $(this).addClass('dragging');
    });
    $dropZone.on('drop', function(event){
        event.preventDefault();
        event.stopPropagation();
        
        var files = event.originalEvent.dataTransfer.files; // FileList object.

        // files is a FileList of File objects. List some properties.
        var output = [];
        for (var i = 0, f; f = files[i]; i++) {
            output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
                f.size, ' bytes, last modified: ',
                f.lastModifiedDate.toLocaleDateString(), '</li>');
        }
        document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
        
        var fReader = new FileReader();
        fReader.onload = function (event) {
            var text = event.target.result;
            $console.html(text);
        };
        fReader.readAsText(files[0]);
    });
    
//    $dropZone.on('dragover', handleDragOver);
//    $dropZone.on('drop', handleFileSelect);
});
