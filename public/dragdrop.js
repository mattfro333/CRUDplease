
interact('.draggable').draggable({
      inertia: true,
      restrict: {
        restriction: "#visualizer-panel",
        endOnly: true,
        elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
      },
      onmove: function (event) {
        var target = event.target,
            // keep the dragged position in the data-x/data-y attributes
            x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
            y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

        // translate the element
        target.style.webkitTransform =
        target.style.transform =
          'translate(' + x + 'px, ' + y + 'px)';

        // update the posiion attributes
        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);
      },
      onend: function(event) {
          console.log(event);
      }
  });

  interact('.dropzone').dropzone({
      accept: '.draggable',
      overlap: 0.01,

      // add / remove dropzone feedback
      ondropactivate: function (event) {
          event.target.classList.add('drop-active');
      },
      ondropdeactivate: function (event) {
          event.target.classList.remove('drop-active');
      },

      // add / remove dropzone feedback
      ondragenter: function (event) {
          var draggableElement = event.relatedTarget,
              dropzoneElement = event.target;
          dropzoneElement.classList.add('drop-target');
          draggableElement.classList.add('can-drop');
      },
      ondragleave: function (event) {
          event.target.classList.remove('drop-target');
          event.relatedTarget.classList.remove('can-drop');
      },

      // drop successful
      ondrop: function (event) {
          console.log(event);
      },

      fight: function (event) {
        console.log(event);
        if(event){
        event = response;
        }
      }
  });
